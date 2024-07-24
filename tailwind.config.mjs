/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'primary': {  DEFAULT: '#AF6523',  50: '#ECC39E',  100: '#E8B88D',  200: '#E1A36B',  300: '#DB8E49',  400: '#D1792A',  500: '#AF6523',  600: '#804A1A',  700: '#512F10',  800: '#231407',  900: '#000000',  950: '#000000'},
'secondary': {  DEFAULT: '#F6EEDF',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#F6EEDF',  600: '#EAD7B3',  700: '#DDBF87',  800: '#D1A85C',  900: '#BF8F36',  950: '#A97F30'},
'green': {  DEFAULT: '#375730',  50: '#8EBB84',  100: '#81B477',  200: '#69A55C',  300: '#588C4D',  400: '#48713F',  500: '#375730',  600: '#20331C',  700: '#090F08',  800: '#000000',  900: '#000000',  950: '#000000'},
'malta': {  DEFAULT: '#BCB29B',  50: '#FFFFFF',  100: '#FDFDFD',  200: '#EDEAE4',  300: '#DDD8CC',  400: '#CCC5B3',  500: '#BCB29B',  600: '#A59879',  700: '#8A7C5D',  800: '#695E46',  900: '#474030',  950: '#363124'},
				'crusta': {  DEFAULT: '#F78728',  50: '#FEEAD9',  100: '#FDDFC5',  200: '#FBC99E',  300: '#FAB377',  400: '#F89D4F',  500: '#F78728',  600: '#DF6B08',  700: '#A95106',  800: '#723704',  900: '#3C1D02',  950: '#211001'},
			}
		},
		fontFamily: {
			sans: ['montserrat'],
			serif: ['open-sans']
		}
		},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography'),
	],
}