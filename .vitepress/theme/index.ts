import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/mauve.css";

import { Gallery } from '@miletorix/vitepress-gallery' // [!code ++]
import '@miletorix/vitepress-gallery/style.css' // [!code ++]

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
	},
};