<template>
  <header class="c-nav-bar">
    <div class="o-wrapper">
      <h1 class="c-nav-bar__title">
        <router-link :to="{name: 'AppHome'}">MovieApp</router-link>
      </h1>
      <search-box />
    </div>
  </header>
</template>

<script>
  import SearchBox from './SearchBox'

  export default {
    components: {
      SearchBox
    }
  }
</script>

<style lang="css">
</style>
