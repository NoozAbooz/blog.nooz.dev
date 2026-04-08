import sidebar from './sidebar.ts'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  vite: {
    optimizeDeps: { include: ['@braintree/sanitize-url'] },
    resolve: {
      alias: {
        dayjs: 'dayjs/',
      },
    },
  },
  title: "Blog | nooz.dev",
  description: 'Next update soon™',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true
  },
  themeConfig: {
    markdown: {
      theme: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    nav: [
      { text: 'Home', link: '/' },
	    { text: 'Blog', link: '/blog/' },
	    { text: 'Guides', link: '/guides/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Study', link: '/study/' },
    ],
    sidebar,
    search: {
      provider: 'local'
    },
  },
})