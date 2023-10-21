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
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/logo.webp',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', link: '/guides/getting-started/' },
						{ label: 'Recommended Mods', link: '/guides/mods/' },
					],
				},
				{
					label: 'Lore',
					items: [
						{ label: 'EVA Logs', link: '/lore/eva-logs/' },
						{
							label: 'Vita Lore',
							items: [
								{ label: 'Vanguard\'s Gamble', link: '/lore/part-1/' },
								{ label: 'Enforcer\'s Resistance', link: '/lore/part-2/' },
								{ label: 'Destroyer\'s Sacrifice', link: '/lore/part-3/' },
								{ label: 'Hunter\'s Code', link: '/lore/part-4/' },
								{ label: 'The Heavenly Nightmare', link: '/lore/part-5/' },
								{ label: 'The Last Avitazens', link: '/lore/part-6/' },
							],
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				// Override the default `Hero` component.
				Hero: './src/components/Hero.astro',
			},
		}),
	],
});
