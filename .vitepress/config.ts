import sidebar from './sidebar.ts'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  vite: {
    optimizeDeps: { include: ['@braintree/sanitize-url'] },
    resolve: {
      alias: {
        dayjs: 'dayjs/',
      },
    },
  },
  title: "Blog | nooz.dev",
  description: 'I write when I feel like it',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    markdown: {
      theme: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    nav: [
      { text: 'Home', link: '/' },
	  { text: 'Blog', link: '/blog/!Index.md' },
	  { text: 'Guides', link: '/guides/!Index.html' },
      { text: 'Projects', link: '/projects/!Index.md' },
      { text: 'Study', link: '/study/!Index.md' },
    ],
    sidebar,
    search: {
      provider: 'local'
    },
  },
})