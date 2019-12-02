# Lambda Stamp Generator

Web app to generate and export custom Stamps for the [Lambda School](https://lambdaschool.com/) brand.

## Getting Started

### Installation

Clone this repo and run:

```bash
npm install
```

### Development

Run this to start the development server:

```bash
npm start
```

Open http://localhost:8080/ to see your app in browser.

### Production

Run this to build and optimize your app for production:

```bash
npm run build
```

## Documentation

##### Libraries

| Name | Version | Description |
| :--- | :--- | :--- |
| [React] | 16 | Main library |
| [Emotion] | 10 | Library for css-in-js |
| [SVG.js] | 3 | A lightweight library for manipulating and animating SVG |
| [dat.gui] | 0.6.5 | A lightweight graphical user interface for changing variables in JavaScript. |
| [load-svg] | 1 | Library for loading SVG assets into javascript over xhr
| [WebFontLoader] | 1.x | Web Font Loader gives you added control when using linked fonts via @font-face.
| [save-svg-as-png] | 1.4.5 | Save SVGs as PNGs from the browser.

##### Tools

| Name | Version | Description |
| :--- | :--- | :--- |
| [Webpack] | 3 | Compiles and bundles assets |
| [Babel] | 6 | ES6 and JSX compiler |
| [ESLint] | 3 | Linting |

### Directory Structure

This is the initial directory structure:

```
lambda-stamp-generator
├── src
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   ├── index.html
│   ├── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

#### `src`

`src` directory contains the source code of your app. The main entry point for your app is `src/index.js`. Styles can be placed inside `src/styles` directory. Paths to compiled `js` and `css` files will be automatically injected into `src/index.html`.

#### `build`

`build` directory is created when you run `npm run build`. It contains the compiled output of your app which can be run by a browser.

#### `package.json`

`package.json` contains the list of scripts and libraries required to build and run your app. It also contains Babel and ESLint config under `"babel"` and `"eslintConfig"` keys respectively.

[React]: https://reactjs.org
[Webpack]: https://webpack.js.org/
[ESLint]: https://eslint.org/
[Babel]: https://babeljs.io/
[SVG.js]: https://svgjs.com/docs/3.0/
[Emotion]: https://github.com/emotion-js/emotion
[dat.gui]: https://github.com/dataarts/dat.gui
[load-svg]: https://github.com/substack/load-svg
[WebFontLoader]: https://github.com/typekit/webfontloader
[save-svg-as-png]: https://github.com/exupero/saveSvgAsPng


