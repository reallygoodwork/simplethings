import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import liveCode from 'astro-live-code'

// https://astro.build/config
export default defineConfig({
	server: { port: 4321, host: true },
	integrations: [
		starlight({
			title: 'Simple Things',
			customCss: [
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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Button', link: '/components/button/' },
					],
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
		liveCode()
	],
});
