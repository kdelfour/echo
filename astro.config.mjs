// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Echo',
			social: {
				github: 'https://github.com/maxds-lyon/echo',
			},
			sidebar: [
				{
					label: 'A propos',
					items: [
						{ label: 'Vision et philosophie', slug: 'about/vision_philosophie' },
						{ label: 'Fonctionnalités', slug: 'about/features' },
						{ label: 'Architecture', slug: 'about/architecture' },
						{ label: 'Contribution au code', slug: 'about/code_contribution' },
					],
				}
			],
		}),
	],
});
