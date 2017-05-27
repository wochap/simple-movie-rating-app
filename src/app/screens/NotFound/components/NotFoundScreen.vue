<template>
  <div class="c-not-found-screen">
    <div class="o-hero">
      <div class="o-hero__body">
        <h1 class="c-not-found-screen__title">
          <span>404</span> Page not found
        </h1>

        <router-link
          :to="{name: 'AppHome'}"
          class="c-link"
        >
          Go home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
</style>
