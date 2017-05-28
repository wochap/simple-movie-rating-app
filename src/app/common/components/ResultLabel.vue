<template>
  <div class="o-media u-items-center">
    <div class="o-media__left u-mr2">
      <img
        class="u-object-contain"
        :src="imageUrl"
        :alt="title"
        width="50"
        height="50"
      />
    </div>
    <div class="o-media__body">
      <span class="u-fw-bold u-black">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imageUrl: {
        type: String
      },
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="css">
</style>
