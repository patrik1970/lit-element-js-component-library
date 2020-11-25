# A simple web component library 

This project is under construction and it includes several samples of component that using LitElement with JavaScript.

## How to setup

Install the necessary dependencies.

```
npm i
```

## How to start Dev Server

This sample uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps. ES dev server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dist/index.html` that you can view at http://localhost:8000/dist/index.html.

## How to run Test

This sample uses Karma, Chai, Mocha, and the open-wc test helpers for testing. See the [open-wc testing documentation](https://open-wc.org/testing/testing.html) for more information.

Tests can be run with the `test` script:

```bash
npm run test
```

## How to Bundeling

This is how you bundeling the web components JavaScriptfile into the dist library 

```bash
npm run bundle
```
This starter project doesn't include any build-time optimizations like bundling or minification. We recommend publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

For information on building application projects that include LitElement components, see [Build for production](https://lit-element.polymer-project.org/guide/build) on the LitElement site.

