export default {
  path: 'movies/:slug/:id',
  name: 'MoviesView',
  component: (resolve) => {
    require.ensure([], (require) => {
      resolve(require('./components/MoviesViewScreen.vue'))
    }, 'MoviesViewScreen')
  }
}
