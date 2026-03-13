#!/usr/bin/env node

/**
 * @dev Enhanced Sitemap Script
 *
 * Post-processes sitemap.xml files produced by Docusaurus:
 * - Handles both urlset (standard) and sitemapindex (Docusaurus v3 default) formats
 * - Adds lastmod dates only to urlset files that lack them
 * - Uses safe string-based injection to avoid XML namespace corruption from
 *   xml2js parse/rebuild cycles
 *
 * NOTE: Docusaurus 3.3+ supports `lastmod: "date"` natively in the sitemap
 * plugin config, so this script acts mainly as a safety net for any edge cases.
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * @dev Returns ISO date string (YYYY-MM-DD) for the current day.
 * @returns {string}
 */
function today() {
  return new Date().toISOString().split('T')[0];
}

/**
 * @dev Detects the XML root element name without parsing.
 * @param {string} content
 * @returns {'urlset' | 'sitemapindex' | 'unknown'}
 */
function detectSitemapType(content) {
  if (content.includes('<urlset')) return 'urlset';
  if (content.includes('<sitemapindex')) return 'sitemapindex';
  return 'unknown';
}

/**
 * @dev Adds <lastmod> to <url> entries that are missing it.
 * Uses string replacement to avoid re-parsing XML and corrupting namespaces.
 * @param {string} content
 * @param {string} date
 * @returns {string}
 */
function injectLastmod(content, date) {
  // Only add lastmod where it's not already present.
  // Match <url> blocks that contain <loc> but no <lastmod>.
  return content.replace(/<url>([\s\S]*?)<\/url>/g, (match) => {
    if (match.includes('<lastmod>')) return match;
    return match.replace('</url>', `  <lastmod>${date}</lastmod>\n  </url>`);
  });
}

/**
 * @dev Processes a single sitemap file safely.
 * @param {string} sitemapPath
 */
async function enhanceSitemap(sitemapPath) {
  try {
    const content = await fs.readFile(sitemapPath, 'utf-8');
    const type = detectSitemapType(content);

    if (type === 'sitemapindex') {
      // Sitemap index files reference sub-sitemaps — do not modify them.
      // Modifying the index structure risks breaking Google's crawler path.
      console.log(`ℹ️  Skipping sitemap index (no changes needed): ${sitemapPath}`);
      return;
    }

    if (type === 'urlset') {
      const enhanced = injectLastmod(content, today());
      if (enhanced !== content) {
        await fs.writeFile(sitemapPath, enhanced, 'utf-8');
        console.log(`✅ Enhanced sitemap: ${sitemapPath}`);
      } else {
        console.log(`ℹ️  Sitemap already has lastmod entries: ${sitemapPath}`);
      }
      return;
    }

    console.warn(`⚠️  Unknown sitemap format, skipping: ${sitemapPath}`);
  } catch (error) {
    console.warn(`⚠️  Could not enhance sitemap ${sitemapPath}:`, error.message);
  }
}

async function main() {
  const buildDir = path.join(__dirname, '../build');

  // Enhance main sitemap
  await enhanceSitemap(path.join(buildDir, 'sitemap.xml'));

  // Enhance numbered sub-sitemaps (sitemap-0.xml, sitemap-1.xml, ...)
  try {
    const files = await fs.readdir(buildDir);
    for (const file of files) {
      if (/^sitemap-\d+\.xml$/.test(file)) {
        await enhanceSitemap(path.join(buildDir, file));
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not process sub-sitemaps:', error.message);
  }

  // Enhance locale sitemaps (e.g. build/zh-CN/sitemap.xml)
  try {
    const entries = await fs.readdir(buildDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const localeSitemapPath = path.join(buildDir, entry.name, 'sitemap.xml');
      try {
        await fs.access(localeSitemapPath);
        await enhanceSitemap(localeSitemapPath);
      } catch {
        // No sitemap for this locale directory — skip silently.
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not process locale sitemaps:', error.message);
  }

  console.log('🎉 Sitemap post-processing complete.');
}

main().catch(console.error);
