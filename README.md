# Simple movie rating app

## Quick start

Rename `.env.example` to `.env`. Then:

```sh
# install dependencies
$ yarn

# serve with hot reload
$ yarn build:watch
# or
$ yarn dev

# serve with hot reload and inspect webpack dev server
# https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js
$ yarn dev:inspect

# build for production with minification
$ yarn build

# run tests
$ yarn test

# run tests and watch
$ yarn test:watch

# run test coverage report
$ yarn test:coverage
```

**NOTE: For disable source map or bundle analyzer report (both on production only) and browser sync (on development), just remove it from `.env` file.**

## Documentation

### Stack

* Vue (view framework)
* vue-router (client router)
* Vuex (state management)
* SCSS (css preprocessor)

### Structure

* Vue: [by route hierarchy](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)
* SCSS: [ITCSS](https://www.xfive.co/blog/itcss-year-after/)

### [Boilerplate](https://github.com/wochap/webpack-boilerplate)
