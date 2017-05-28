export default {
  path: 'actors/:slug/:id',
  name: 'ActorsView',
  component: (resolve) => {
    require.ensure([], (require) => {
      resolve(require('./components/ActorsViewScreen.vue'))
    }, 'ActorsViewScreen')
  }
}
