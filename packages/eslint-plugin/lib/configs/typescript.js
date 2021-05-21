const eslintConfig = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@wordpress/eslint-plugin/recommended-with-formatting",
		"plugin:@wordpress/eslint-plugin/jsdoc",
		"plugin:eslint-comments/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: ["standard", "import", "promise", "@typescript-eslint"],
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	settings: {
		"import/resolver": {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
		},
		jsdoc: {
			mode: "typescript",
		},
	}
};

module.exports = eslintConfig;
