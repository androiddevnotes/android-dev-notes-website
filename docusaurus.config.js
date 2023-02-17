/* eslint-disable */
const fs = require('fs');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/preset-classic').Options} */
const defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/androiddevnotes/android-dev-notes-website/tree/main/',
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('apps'),
  defineSection('tutorials'),
  defineSection('tools'),
  defineSection('libraries'),
  defineSection('insights'),
];

const topicHTML = fs.readFileSync('./src/snippets/topics.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Android Dev Notes',
  tagline: 'Run the code',
  // TODO: Update base url
  url: 'https://www.androiddevnotes.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  trailingSlash: false,
  scripts: [{ src: '/js/banner.js', async: true }],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'androiddevnotes', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/css/custom.css')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
      }),
    ],
  ],

  plugins: [tailwindPlugin, webpackPlugin, ...SECTIONS],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/androiddevnotes-social',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        id: 'ph-banner',
        content: '<ph-banner></ph-banner>',
        isCloseable: false,
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        logo: {
          href: '/',
          src: 'https://storage.androiddevnotes.com/api/raw/?path=/assets/1/12x1.png',
          srcDark:
            'https://storage.androiddevnotes.com/api/raw/?path=/assets/1/12x1.png',
          alt: 'Android Dev Notes',
          height: '100%',
          width: '100%',
        },
        items: [
          {
            label: 'Start',
            type: 'dropdown',
            className: 'common-dropdown',
            items: [
              {
                type: 'html',
                value: topicHTML,
                className: 'common-dropdown',
              },
            ],
          },
          {
            label: 'Random',
            to: '/random',
            position: 'left'
          },
          {
            label: 'Daily',
            to: '/insights/daily/2023/02',
            position: 'left',
            className: 'new-badge',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'csharp',
          'php',
          'go',
          'rust',
          'scala',
          'haskell',
          'elixir',
          'erlang',
          'perl',
          'lua',
          'clojure',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        appId: 'DJPMO7H2DC',
        apiKey: 'fbaa41f88b78006e0e03841b0ca255a9',
        indexName: 'index-website-android-dev-notes',
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
