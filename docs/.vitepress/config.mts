import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Safnect Wallet",
  description: "Safnect WalletConnect Document",
  base: '/vitepress-doc/',
  srcDir: './src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 1,
    },
    sidebar: [
      {
        text: 'WalletConnect API',
        items: [
          { text: 'Introduction', link: '/introduction' },
          {
            text: 'Supported Networks',
            collapsed: true,
            items: [
              { text: 'Fractal Bitcoin', link: '/fractal-bitcoin' },
            ]
          }
        ]
      },
    ],
  },
})
