import sidebar from './sidebar.ts'
import { withMermaid } from "vitepress-plugin-mermaid";
import imsize from '@tlylt/markdown-it-imsize'

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
    config: (md) => {
      md.use(imsize)

      const defaultImageRenderer = md.renderer.rules.image // special system for adding captions to vanilla markdown images

      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const caption = token.attrGet('title')

        if (!caption) {
          return defaultImageRenderer
            ? defaultImageRenderer(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options)
        }

        const imageHtml = defaultImageRenderer
          ? defaultImageRenderer(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)

        return `<figure>${imageHtml.replace(/\s+title="[^"]*"/, '')}<figcaption>${md.utils.escapeHtml(caption)}</figcaption></figure>`
      }
    },
    math: true,
    image: {
      lazyLoading: true // image lazy loading is disabled by default
    }
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