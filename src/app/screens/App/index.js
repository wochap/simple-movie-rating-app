import AppHome from './screens/AppHome'
import MoviesView from './screens/MoviesView'
import ActorsView from './screens/ActorsView'

export default {
  path: '/',
  component: (resolve) => {
    require.ensure([], (require) => {
      resolve(require('./components/AppScreen.vue'))
    }, 'AppScreen')
  },
  children: [
    AppHome,
    MoviesView,
    ActorsView
  ]
}
