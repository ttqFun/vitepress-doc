import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Doc. Site test",
  description: "Documentation Static Site",
  base: '/vitepress-doc/',
  srcDir: './src',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/vitepress-doc/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 1,
    },
    sidebar: [
      {
        text: 'Your API',
        items: [
          { text: 'Introduction', link: '/introduction' },
          {
            text: 'Supported Works',
            collapsed: true,
            items: [
              { text: 'Work-Life-Balance', link: '/wlb' },
            ]
          }
        ]
      },
    ],
  },
})
