// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Code Connect',
			favicon: '/src/assets/favicon.png',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg'
			},
			social: {
				github: 'https://github.com/figma/code-connect',
			},
			customCss: [
				'./src/styles/globals.css'
			],
			sidebar: [
				{
					label: 'Docs',
					autogenerate: {directory: 'Docs'}
				},
				{
					label: 'Platform Specific Instructions',
					autogenerate: { directory: 'platform-specific' },
				},
			],
		}),
	],
	site: 'https://pcmccarron.github.io',
	base: "/docs"
});
