import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://thegridsmp.github.io/wiki',
	trailingSlash: 'ignore',
	base: '/wiki',

	integrations: [
		starlight({
			title: 'GSMP Wiki',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/guides/getting-started/' },
						{ label: 'Recommended Mods', link: '/guides/mods/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			]
		}),
	],
});
