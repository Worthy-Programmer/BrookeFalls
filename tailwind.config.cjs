module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
	darkMode: 'class', // or 'media' or 'class'
	important: true,
	theme: {
		colors: {
			darkGray: {
				DEFAULT: '#212121',
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
