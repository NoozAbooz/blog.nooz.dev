import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/mauve.css";
import { inject } from "@vercel/analytics";

export default {
	...DefaultTheme,
	enhanceApp() {
		if (!import.meta.env.SSR) {
			inject();
		}
	},
};