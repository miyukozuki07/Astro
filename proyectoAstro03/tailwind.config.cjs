/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'endeavour': {
					'50': '#f0f8ff',
					'100': '#dfefff',
					'200': '#b9e0fe',
					'300': '#7bc9fe',
					'400': '#34aefc',
					'500': '#0a95ed',
					'600': '#0074cb',
					'700': '#00589c',
					'800': '#054f87',
					'900': '#0a4270',
				},				
			},

			fontFamily:{
				'openSans': ['Open Sans', 'sans-serif'],
				'roboto' : ['Roboto', 'sans-serif'],	
			},
		},
	},
	plugins: [],
}
