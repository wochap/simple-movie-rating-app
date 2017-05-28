<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from './NavBar'

  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">
</style>
