import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import 'dotenv/config'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
	title: 'Astralopedia',
	tagline: 'Create: Astral wiki',
	favicon: 'favicon.ico',

	// Set the production url of your site here
	url: 'https://astral.toby7002.dev',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/Astralopedia/Astralopedia/tree/main/',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		navbar: {
			logo: {
				alt: 'logo',
				src: 'img/logo.webp',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'guides',
					position: 'left',
					label: 'Guides',
				},
				{
					type: 'docSidebar',
					sidebarId: 'chapters',
					position: 'left',
					label: 'Chapters',
				},
				{
					type: 'docSidebar',
					sidebarId: 'planets',
					position: 'left',
					label: 'Planets',
				},
				{
					type: 'docsVersionDropdown',
					position: 'right',
					dropdownActiveClassDisabled: true,
				},
				{
					href: 'https://github.com/Astralopedia/Astralopedia',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: true,
		},
	} satisfies Preset.ThemeConfig,
	plugins: [
		() => {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(options) {
					options.plugins.push(require('tailwindcss'))
					options.plugins.push(require('autoprefixer'))
					return options
				},
			}
		},
	],
	themes: [
		'@saucelabs/theme-github-codeblock',
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			{
				hashed: true,
				language: ['en'],
				indexBlog: false,
			},
		],
	],
	customFields: {
		commit_ref: process.env.COMMIT_REF
			? process.env.COMMIT_REF.substring(0, 7)
			: '',
	},
}

export default config
