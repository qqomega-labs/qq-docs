import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "QQ Omega Labs Docs",
  tagline:
    "AI-Powered Crypto Scoring Platform - Quantitative + Qualitative Analysis",
  favicon: "favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // SEO and PWA configuration
  headTags: [
    // SEO Meta Tags
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "QQ Omega, crypto scoring, AI agents, cryptocurrency analysis, quantitative analysis, qualitative analysis, crypto trading, blockchain analytics, DeFi, tokenomics, on-chain analysis, crypto fundamentals",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "QQ Omega combines AI-powered agents to score and rank cryptocurrency projects across fundamentals, tokenomics, on-chain metrics, technicals, and macro trends. Get clear, actionable scores for smarter crypto investments.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "QQ Omega Labs",
      },
    },
    // Twitter Card Tags
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:site",
        content: "@qqomega",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:creator",
        content: "@qqomega",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "QQ Omega Labs - AI-Powered Crypto Scoring Platform",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content:
          "Combining quantitative and qualitative data to evaluate every aspect of crypto assets with specialized AI agents.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: "https://docs.qqomega.xyz/img/qq-og-image.png",
      },
    },
    // Open Graph Tags
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "QQ Omega Labs - AI-Powered Crypto Scoring Platform",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "QQ Omega combines AI-powered agents to score and rank cryptocurrency projects. Get clear, actionable scores for smarter crypto investments.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://docs.qqomega.xyz",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://docs.qqomega.xyz/img/qq-og-image.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image:width",
        content: "1200",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image:height",
        content: "630",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image:alt",
        content: "QQ Omega Labs Documentation",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:site_name",
        content: "QQ Omega Labs",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:locale",
        content: "en_US",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:locale:alternate",
        content: "zh_CN",
      },
    },
    // Favicon and Icons
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/manifest.json",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "apple-mobile-web-app-title",
        content: "QQ Omega",
      },
    },
  ],

  // Set the production url of your site here
  url: "https://docs.qqomega.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "qqomega-labs", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
      "zh-CN": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-CN",
        calendar: "gregory",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/qqomega-labs/qq-docs/tree/main/",
          sidebarCollapsed: false,
        },
        // BLOG DISABLED
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   editUrl: "https://github.com/qqomega-labs/qq-docs/tree/main/",
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/docs",
        // indexBlog: true,  // BLOG DISABLED
        indexPages: true,
        searchBarPosition: "right",
      },
    ],
  ],

  themeConfig: {
    // Social card for sharing
    image: "img/qq-og-image.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "QQ Omega",
      logo: {
        alt: "QQ Omega Logo",
        src: "img/QQlogo.png", // Overridden by `AnimatedAtomLogo` component.
      },
      style: "dark",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // BLOG DISABLED
        // {
        //   to: "/blog",
        //   label: "Blog",
        //   position: "left",
        // },
        {
          type: "localeDropdown",
          position: "right",
          className: "locale-dropdown-desktop",
        },
        {
          href: "https://github.com/qqomega-labs",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      // Future sections - uncomment when ready to add footer links
      // links: [
      //   {
      //     title: "Links",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/qqomega-labs",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Discord",
      //         href: "https://discord.gg/qqomega",
      //       },
      //       {
      //         label: "X",
      //         href: "https://x.com/qqomega",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} QQ Omega Labs. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "typescript",
        "javascript",
        "json",
        "jsx",
        "tsx",
        "python",
        "solidity",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
