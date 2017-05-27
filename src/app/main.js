import {app} from './app'
import '../styles/main.scss'

app.$mount('#root')

// This tells Webpack that this file and all of its dependencies can be replaced.
// http://andrewhfarmer.com/webpack-hmr-tutorial/#the-simple-way
if (module.hot) {
  module.hot.accept()
}
