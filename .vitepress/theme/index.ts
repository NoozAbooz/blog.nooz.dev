import DefaultTheme from "vitepress/theme";

// Catppuccin visual theme
import "@catppuccin/vitepress/theme/mocha/mauve.css";

// https://www.npmjs.com/package/@nooz/vitepress-gallery
import { Gallery } from '@nooz/vitepress-gallery' // [!code ++]
import '@nooz/vitepress-gallery/style.css' // [!code ++]

// https://www.npmjs.com/package/@miletorix/vitepress-back-to-top-button
import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

// https://www.npmjs.com/package/@miletorix/vitepress-image-viewer
import ImageViewerP from '@miletorix/vitepress-image-viewer' //[!code ++]
import '@miletorix/vitepress-image-viewer/style.css' //[!code ++]

// https://www.npmjs.com/package/@miletorix/vitepress-enhanced-site-links
import { Card, CardsGroup } from '@miletorix/vitepress-enhanced-site-links' // [!code ++]
import '@miletorix/vitepress-enhanced-site-links/style.css' // [!code ++]

import './captioned-images.css' // custom thing

import { inject } from "@vercel/analytics";

export default {
	...DefaultTheme,
	enhanceApp(ctx: Parameters<NonNullable<typeof DefaultTheme.enhanceApp>>[0]) {
		if (!import.meta.env.SSR) {
			inject({
				mode: import.meta.env.MODE === 'development' ? 'development' : 'production',
			});
		}

		ctx.app.component('Gallery', Gallery) // vitepress-gallery library

		BackToTopButton(ctx.app, { // vitepress-back-to-top-button
      		progressColor: 'var(--vp-c-brand-1)'
    	})

		ImageViewerP(ctx.app, { // vitepress-image-viewer
			autoShowThumbnails: false,
		})

		ctx.app.component('Card', Card) // 
    	ctx.app.component('CardsGroup', CardsGroup)
	},
};