# ⚛️ Simple React Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This simple template contains all the necessary settings to start a React project.

## Installation

- [Clone](https://github.com/Sorokin-Oleg/simple-react-boilerplate.git) this repo;
- Install all dependencies using command `npm i` or `yarn`.

## Usage

### Development server

- Start the development server using command `npm run start` or `yarn start`;
- You can view the development server at `localhost:3000`.

### Production build

- You can build production version using command `npm run build` or `yarn build`

> Note: Optional
- Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server using command `npm i -g http-server` or `yarn global add http-server`;
- View the deploy by creating a server in `dist` using command `cd dist && http-server`


## Features

- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [css-modules](https://github.com/css-modules/css-modules)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler;
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack;
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack;
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration.

### React

- [`react`](https:/github.com/facebook/react) - React is a JavaScript library for creating user interfaces;
- [`react-dom`](https:/github.com/facebook/react) - This package serves as the entry point to the DOM and server renderers for React.

### TypeScript

- [`typescript`](https://github.com/Microsoft/TypeScript) - TypeScript is a language for application-scale JavaScript;
- [`@types/react`](https://github.com/DefinitelyTyped/DefinitelyTyped) - This package contains type definitions for React (http://facebook.github.io/react/);
- [`@types/react-dom`](https://github.com/DefinitelyTyped/DefinitelyTyped) - This package contains type definitions for React (react-dom) (https://reactjs.org);
- [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint) - An ESLint plugin which provides lint rules for TypeScript codebases;
- [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint) - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript;
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel;
- [`babel-loader`](https://github.com/babel/babel-loader) - This package allows transpiling JavaScript files using Babel and webpack.

### Loaders

- [`ts-loader`](https://github.com/TypeStrong/ts-loader) - This is the TypeScript loader for webpack;
- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack;
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS;
- [`sass`](https://www.npmjs.com/package/sass) - Node Sass;
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS;
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS;
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports;
- [`file-loader`](https://github.com/webpack-contrib/file-loader) - The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders;
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory;
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template;
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files;
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets;

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application;
- [`prettier`](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter;
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules;
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript) - This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config;
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names;
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for eslint;
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react) - This ESLint plugin enforces the Rules of Hooks.

## Author

- [Sorokin Oleg](https://github.com/Sorokin-Oleg)

## License

This project is open source and available under the [MIT License](LICENSE).
