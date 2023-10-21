import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://thegridsmp.github.io',
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
						{ label: 'Unknown EVA Log', link: '/lore/unknown-eva-log/' },
						{ label: 'The Source and The Engine', link: '/lore/source-and-engine/' },
						{
							label: 'Vita Lore',
							items: [
								{ label: 'Vanguard\'s Gamble', link: '/lore/vita/part-1/' },
								{ label: 'Enforcer\'s Resistance', link: '/lore/vita/part-2/' },
								{ label: 'Destroyer\'s Sacrifice', link: '/lore/vita/part-3/' },
								{ label: 'Hunter\'s Code', link: '/lore/vita/part-4/' },
								{ label: 'The Heavenly Nightmare', link: '/lore/vita/part-5/' },
								{ label: 'The Last Avitazens', link: '/lore/vita/part-6/' },
							],
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference', collapsed: true },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Hero: './src/components/Hero.astro',
			},
		}),
	],
});
