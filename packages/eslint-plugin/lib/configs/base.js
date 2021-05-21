const restrictedGlobals = require( 'confusing-browser-globals' );

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:@wordpress/eslint-plugin/jsdoc',
		'plugin:eslint-comments/recommended',
	],
	plugins: [ 'standard', 'import', 'promise' ],
	rules: {
		'no-restricted-globals': [ 'error' ].concat( restrictedGlobals ),
	},
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
	},
};
