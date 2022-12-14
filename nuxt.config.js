import colors from 'vuetify/es5/util/colors'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s',
		title: 'Cavo Greco Foods',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''},
			{name: 'format-detection', content: 'telephone=no'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.ico'},
			{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			{rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true'},
			// {href: 'https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap', rel: 'stylesheet'}
			{href: 'https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&family=Architects+Daughter&display=swap', rel: 'stylesheet'}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'assets/main.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{src: '~/plugins/vee-validate.js', mode: 'client'},
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
					mainColor: '#CB1426',
					secondaryColor: '#FFA813',
					green: '#388E3C'
				},
				light: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
					mainColor: '#CB1426',
					secondaryColor: '#FFA813',
					green: '#388E3C'
				}
			}
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [
			"vee-validate/dist/rules",
		],
	}
}
