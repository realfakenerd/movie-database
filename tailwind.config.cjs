module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#e44e46',
				secondary: '#418eff',
				accent: '#c6a727',
				neutral: '#191D24',
				'neutral-focus': '#111318',
				'neutral-content': '#A6ADBB',
				'base-100': '#1d252e',
				'base-200': '#242933',
				'base-300': '#20252E',
				'base-content': '#A6ADBB'
			}
		}
	},
	mode: 'jit',
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
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
