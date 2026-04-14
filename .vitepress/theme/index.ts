import DefaultTheme from "vitepress/theme";

// Catppuccin visual theme
import "@catppuccin/vitepress/theme/mocha/mauve.css";

// https://www.npmjs.com/package/@miletorix/vitepress-gallery
import { Gallery } from '@miletorix/vitepress-gallery' // [!code ++]
import '@miletorix/vitepress-gallery/style.css' // [!code ++]

// https://www.npmjs.com/package/@miletorix/vitepress-back-to-top-button
import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

// https://www.npmjs.com/package/@miletorix/vitepress-image-viewer
import ImageViewerP from '@miletorix/vitepress-image-viewer' //[!code ++]
import '@miletorix/vitepress-image-viewer/style.css' //[!code ++]

import { inject } from "@vercel/analytics";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
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
	},
};