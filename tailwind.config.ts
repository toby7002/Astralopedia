import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
		container: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
			},
			keyframes: {
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						opacity: "1",
					},
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
		},
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections([
				"fa6-brands",
				"fa6-regular",
				"fa6-solid",
			]),
		}),
		function ({ addBase, theme }) {
			const allColors = flattenColorPalette(theme("colors"));
			const newVars = Object.fromEntries(
				Object.entries(allColors).map(([key, val]) => [
					`--${key}`,
					val,
				]),
			);

			addBase({
				":root": newVars,
			});
		},
	],
};
