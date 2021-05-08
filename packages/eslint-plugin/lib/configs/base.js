const eslintConfig = {
	extends: [
		"eslint:recommended",
		"plugin:@wordpress/eslint-plugin/recommended-with-formatting",
		"plugin:@wordpress/eslint-plugin/jsdoc",
		"plugin:eslint-comments/recommended",
	],
	plugins: ["standard", "import", "promise"],
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	settings: {
		jsdoc: {
			mode: "typescript",
		},
	},
};

module.exports = eslintConfig;
