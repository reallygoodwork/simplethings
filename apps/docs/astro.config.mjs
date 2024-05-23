import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import liveCode from 'astro-live-code'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	server: { port: 4321, host: true },
	integrations: [
		liveCode(),
		react(),
		starlight({
			title: 'Simple Things',
			customCss: [
				'./src/fonts/font.css',
				'./src/tailwind.css'
			],
			plugins: [
				starlightLinksValidator()
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),

	],
});
