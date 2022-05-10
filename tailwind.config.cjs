const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#012F49',
				yellow: '#FDBF49'
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
