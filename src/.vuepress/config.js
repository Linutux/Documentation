const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Froxlor Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1872a2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Froxlor/Documentation',
    editLinks: true,
    docsDir: '',
    docsBranch: 'main',
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Guide',
        link: '/v2/',
      },
      {
        text: 'Version',
        items: [
          { text: 'v0.10', link: '/v0.10/' },
          { text: 'v2', link: '/v2/' }
        ]
      },
      {
        text: 'Discord',
        link: 'https://discord.froxlor.org'
      }
    ],
    sidebar: {
      '/v2/': [
        {
          title: 'General',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'General',
          collapsable: false,
          children: [
            {
              title: 'Installation',
              children: [
                'installation/',
                'installation/tarball',
                'installation/aptpackage',
                'installation/source',
              ]
            },
            'update-guide/',
            'migration-guide/',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
