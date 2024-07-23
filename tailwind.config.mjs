/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'primary': {  DEFAULT: '#008CD1',  50: '#8AD8FF',  100: '#75D2FF',  200: '#4CC4FF',  300: '#24B7FF',  400: '#00A7FA',  500: '#008CD1',  600: '#006699',  700: '#004161',  800: '#001B29',  900: '#000000',  950: '#000000'},
				'accent': {  DEFAULT: '#E71F2C',  50: '#F9C5C8',  100: '#F7B2B7',  200: '#F38E94',  300: '#EF6971',  400: '#EB444F',  500: '#E71F2C',  600: '#BA141F',  700: '#870E16',  800: '#55090E',  900: '#220406',  950: '#090101'},
				'green': {  DEFAULT: '#00520F',  50: '#0BFF37',  100: '#00F52D',  200: '#00CC25',  300: '#00A41E',  400: '#007B16',  500: '#00520F',  600: '#001A05',  700: '#000000',  800: '#000000',  900: '#000000',  950: '#000000'},
				'malta': {  DEFAULT: '#BCB29B',  50: '#FFFFFF',  100: '#FDFDFD',  200: '#EDEAE4',  300: '#DDD8CC',  400: '#CCC5B3',  500: '#BCB29B',  600: '#A59879',  700: '#8A7C5D',  800: '#695E46',  900: '#474030',  950: '#363124'},
				'crusta': {  DEFAULT: '#F78728',  50: '#FEEAD9',  100: '#FDDFC5',  200: '#FBC99E',  300: '#FAB377',  400: '#F89D4F',  500: '#F78728',  600: '#DF6B08',  700: '#A95106',  800: '#723704',  900: '#3C1D02',  950: '#211001'},
			}
		},
		fontFamily: {
			sans: ['Montserrat'],
			serif: ['open-sans']
		}
		},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography'),
	],
}