/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: ["Inconsolata", "monospace"],
			},
			colors: {
				"smoky-black": "#100C0C",
				"black-olive": "#3C3D37",
				axolotl: "#697565",
				almond: "#ECDFCC",
				react: "#58c4dc",
				"java-script": "#f8e41c",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#100C0C",
							foreground: "#000000",
						},
						secondary: {
							DEFAULT: "#697565",
							foreground: "#FFFFFF",
						},
						accent: {
							DEFAULT: "#697565",
							foreground: "#FFFFFF",
						},
						focus: "#BEF264",
					},
				},
			},
		}),
	],
};
