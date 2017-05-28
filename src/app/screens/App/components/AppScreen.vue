<template>
  <div>
    <nav-bar />
    <router-view />
    <dialogs />
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Dialogs from './Dialogs'

  export default {
    components: {
      NavBar,
      Dialogs
    }
  }
</script>

<style lang="scss">
</style>
