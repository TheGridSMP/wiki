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
						{ label: 'Resource Pack', link: '/guides/resourcepack/' },
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
								{ label: 'Tales of Vita', collapsed: true, autogenerate: {directory: '/lore/vita/tales-of-vita'} },
							],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Enchantments', link: '/reference/enchantments/' },
						{ label: 'Skill System', link: '/reference/skill-system/' },
						{
							label: 'Characters',
							collapsed: true,
							items: [
								{ label: 'Players', collapsed: true, autogenerate: { directory: 'reference/characters/players' } },
								{ label: 'Non-Players', collapsed: true, autogenerate: { directory: 'reference/characters/non-players' } },
							]
						},
						{
							label: 'Events',
							collapsed: true,
							items: [
								{label: 'Ballad of Avita', link: '/refrence/events/ballad-of-avita'},
							]
						},
						{
							label: 'Groups',
							collapsed: true,
							items: [
								{ label: 'Lunox', link: '/reference/groups/lunox/' },
								{ label: 'Solfax', link: '/reference/groups/solfax/' },
								{ label: 'Vita', collapsed: true, autogenerate: { directory: 'reference/groups/vita' } },
							]
						},
						{
							label: 'Item Sets',
							collapsed: true,
							items: [
								{ label: 'Sacred Armor', link: '/reference/armors/sacred-armors' } ,
							]
						},
						{
							label: 'Worlds',
							collapsed: true,
							items: [
								{ label: 'Vita', link: '/reference/worlds/vita'},
								{ label: 'Towns', collapsed: true, autogenerate: { directory: 'reference/world/towns' } },
								{ label: 'The Core', link: '/reference/worlds/the-core'},
								{ label: 'Ignition', link: '/reference/worlds/ignation'},
								{ label: 'Obscura', link: '/reference/worlds/obscura'},
							]
						},
					]
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
