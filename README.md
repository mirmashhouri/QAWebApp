# <em><b>Q/A Web App</b></em>

## Requirements

- [node](https://nodejs.org/en) >= 12.0
- [npm](https://www.npmjs.com) >= 6.0

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/mirmashhouri/QAWebApp.git
cd QAWebApp
```

**2. Install all of the dependencies:**

```sh
yarn
```

**3. Start to run it:**

```sh
yarn build  # Building bundle
yarn start  # Running production server
```

Now the app should be running at [http://localhost:8080]

or use npm:

```sh
npm run dev
```

Now the app should be running at [http://localhost:3000]

> Note: You can change the port that you want from the `./src/config`.

## Features

- [React](https://facebook.github.io/react) as the view library.
- [Redux](https://github.com/reactjs/redux) as the state management.
- [Redux Toolkit](https://redux-toolkit.js.org) for efficient Redux development.
- [React Router](https://reacttraining.com/react-router) as the router.
- [Connected React Router](https://github.com/supasate/connected-react-router) to bind Redux with React Router. Refer to [document](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#frequently-asked-questions) to see how it works.
- [Express](https://expressjs.com) server.
- [TypeScript](https://www.typescriptlang.org) as the static type checker for JavaScript.
- [Webpack](https://webpack.js.org) for app bundling.
- [Babel](https://babeljs.io) for transpile ES6+ to ES5.
- [React Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh) to fast refresh components without losing their state.
- [nodemon](https://nodemon.io) to monitor for any changes in your Node.js application and automatically restart the server.
- [axios](https://axios-http.com) as the Promise-based HTTP client for the browser and Node.js.
- [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
- [loadable-component](https://github.com/smooth-code/loadable-components) to lazy load a component when needed. Reduce your bundle size without stress.
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server.
- [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) creates a visualize size of webpack output files with an interactive zoomable treemap.
- [helmet](https://github.com/helmetjs/helmet), [hpp](https://github.com/analog-nico/hpp), and [compression](https://github.com/expressjs/compression) for [server-Side security and performance](#server-side-security-and-performance).
- [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
- [ESLint](http://eslint.org) to maintain a consistent TypeScript/JavaScript code style (with Airbnb configuration).
- [stylelint](http://stylelint.io) to maintain a consistent CSS/SASS code style.
- [Prettier](https://prettier.io) to format code and style.
- CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer, cssnext etc.). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
- Image (optimized/compressed by [Imagemin Webpack](https://github.com/webpack-contrib/image-minimizer-webpack-plugin)) and Font support.
- Minimize JavaScript (by [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)) and CSS (by [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)) bundles for you.
- Split vendor's libraries from client bundle.
- No other view engines, just JavaScript based HTML rendering component.
- Shared app configuration between development and production.
- 404 error page and redirect handling.
- Integrate [Jest](https://facebook.github.io/jest) with [React Testing Library](https://github.com/testing-library/react-testing-library) as the solution for writing unit tests with code coverage support.
- [Yarn](https://yarnpkg.com/lang/en) as the package manager.
