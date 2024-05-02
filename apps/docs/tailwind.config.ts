import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#eafa8e', 600: '#c3b80b', 900: '#6e5715', 950: '#402f08' };
const gray = { 100: '#e7e7e7', 200: '#d1d1d1', 300: '#888888', 400: '#5d5d5d', 500: '#292929', 700: '#454545', 800: '#292929', 900: '#171717' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
			fontFamily: {
				sans: ['Satoshi Variable', 'sans-serif'],
			}
		},
	},
	plugins: [starlightPlugin()],
};