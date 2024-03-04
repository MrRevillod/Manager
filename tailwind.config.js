/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				"primary": "#1B1B1B",
				"primary-dark": "#151515",
			},
			borderWidth: {
				"1": "1px",
			},
			height: {
				"screen-1/2": "50vh",
				"screen-3/5": "60vh",
				"screen-3/4": "75vh",
				"screen-5/6": "90vh",
			},
			width: {
				"screen-1/3": "40vw",
				"screen-1/2": "50vw",
				"screen-3/5": "60vw",
				"screen-3/4": "75vw",
				"screen-5/6": "90vw",
			},

		},
	},
	plugins: [],
}
