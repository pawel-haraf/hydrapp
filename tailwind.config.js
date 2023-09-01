/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkblue: '#0F172A',
				whiteglass: '#ECEFF1',
				water: '#60A5FA',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/hero-pattern.svg')",
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
