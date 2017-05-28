export default {
  path: '',
  name: 'AppHome',
  component: (resolve) => {
    require.ensure([], (require) => {
      resolve(require('./components/AppHomeScreen.vue'))
    }, 'AppHomeScreen')
  }
}
