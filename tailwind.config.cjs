module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	mode: 'jit',
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				cusdark: {
					primary: '#e44e46',
					secondary: '#418eff',
					accent: '#c6a727',
					neutral: '#3d4451',
					'base-100': '#1d252e'
				}
			},
			'light'
		]
	}
};
