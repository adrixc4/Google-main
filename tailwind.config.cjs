/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'google1': '["Arial", "sans-serif"]',
			'google2': '["Roboto", "Arial", "sans-serif"]', 
		},
		boxShadow: {
			'custom': '0 1px 3px 1px rgba(66,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)',
			'searchBox': '0 1px 6px rgba(32,33,36,.28)'
		},
		extend: {},
	},
	plugins: [],
}
