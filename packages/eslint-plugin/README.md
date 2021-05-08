# @code-atlantic/eslint-plugin

Code Atlantic's ESLint plugin, following our styleguide.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install [`@code-atlantic/eslint-plugin`](https://github.com/code-atlantic/coding-standards/tree/master/packages/eslint-plugin):

```bash
npm install @code-atlantic/eslint-plugin --save-dev
```

## Usage

This plugin exports a [`base` config](index.js) that enforces best practices.

Create your own `.eslintrc.js` configuration file:

```js
{
	"extends": "plugin:@code-atlantic/base",
	"plugins": [
		"@code-atlantic"
	]
}
```

Or see the [ESLint docs](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats) for more information about configuration file formats.

You can also stack any of the extra shared configs on top of the "base" config by extending an array of linting configs. For example, this package provides a React linting config, which can be added to the base config with the following configuration file:

```js
{
	"extends": [
		"plugin:@code-atlantic/base",
		"plugin:@code-atlantic/react"
	]
}
```

## Available rulesets

The following rulesets are available:

*   **base**: Enforces best practices and possible errors
*   **react**: Enforces best React.js practices
