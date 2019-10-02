# Basic Webpack Setup Steps
* Run the  `npm init`  command to start a new project with NPM and produce a  `package.json`  file
* Use NPM to install the webpack packages to the dev dependencies. *Note  `npm i` is a shorthand for  `npm install` and 
	`-D`  is shorthand for  `--save-dev`

```
	npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```
* Install the loaders needed for the technologies we use. Webpack needs one for each file type we would like to use in our project.
```
npm i babel-loader style-loader css-loader sass-loader -D
```
* Install Babel to transpile our ES6 code to ES5
```
npm i @babel/core @babel/preset-env -D 
```
* Create a  `.babelrc`  file in the root of the directory.
```
touch .babelrc
```
And add the following configuration for it..
```json
{
  "presets": ["@babel/preset-env"]
}
```
* Install  `node-sass`  package.
```
npm i node-sass -D
```
* Create an  `src`  directory and in root of our project to contain all our actual code
```
mkdir src
touch src/index.html src/app.js src/style.scss
```
* Create your webpack config file in the root of the directory
```
touch webpack.config.js
```
And configure it.

```js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      { test: /*\.*jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /*\.*css$/, loader: ['style-loader', 'css-loader'] },
      { test: /*\.*s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
```

* Add some start scripts to our  `package.json`  file to start our webpack dev server.
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "webpack-dev-server --mode=development",
    "build": "webpack -p"
}
```
* Test your application by running. The browser should open on port 8000. Make a change by adding a console.log in your   `app.js` file and see if the change occurs. 
```
 npm run serve
```