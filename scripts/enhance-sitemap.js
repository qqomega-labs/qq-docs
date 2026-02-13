#!/usr/bin/env node

/**
 * @dev Enhanced Sitemap Script
 *
 * Improves sitemap.xml files by:
 * - Adding lastmod dates (current build time)
 * - Formatting XML with proper indentation and newlines
 * - Ensuring Google Search Console compatibility
 */

const fs = require('fs').promises;
const path = require('path');
const { parseStringPromise, Builder } = require('xml2js');

async function enhanceSitemap(sitemapPath) {
  try {
    // Read sitemap
    const sitemapContent = await fs.readFile(sitemapPath, 'utf-8');

    // Parse XML
    const parsedSitemap = await parseStringPromise(sitemapContent);

    // Get current date for lastmod
    const currentDate = new Date().toISOString().split('T')[0];

    // Enhance each URL entry with lastmod
    if (parsedSitemap.urlset && parsedSitemap.urlset.url) {
      parsedSitemap.urlset.url = parsedSitemap.urlset.url.map(url => {
        // Add lastmod if not present
        if (!url.lastmod) {
          url.lastmod = [currentDate];
        }
        return url;
      });
    }

    // Build formatted XML with proper indentation
    const builder = new Builder({
      xmldec: {
        version: '1.0',
        encoding: 'UTF-8'
      },
      renderOpts: {
        pretty: true,
        indent: '  ',
        newline: '\n'
      }
    });

    const formattedXml = builder.buildObject(parsedSitemap);

    // Write back to sitemap.xml
    await fs.writeFile(sitemapPath, formattedXml, 'utf-8');

    console.log(`✅ Enhanced sitemap: ${sitemapPath}`);

  } catch (error) {
    console.warn(`⚠️  Could not enhance sitemap ${sitemapPath}:`, error.message);
  }
}

async function main() {
  const buildDir = path.join(__dirname, '../build');

  // Enhance main sitemap
  await enhanceSitemap(path.join(buildDir, 'sitemap.xml'));

  // Enhance locale sitemaps
  try {
    const locales = await fs.readdir(buildDir);
    for (const locale of locales) {
      const localeSitemapPath = path.join(buildDir, locale, 'sitemap.xml');
      try {
        await fs.access(localeSitemapPath);
        await enhanceSitemap(localeSitemapPath);
      } catch {
        // Locale sitemap doesn't exist, skip
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not process locale sitemaps:', error.message);
  }

  console.log('🎉 All sitemaps enhanced successfully!');
}

main().catch(console.error);
