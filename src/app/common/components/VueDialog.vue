<template>
  <div v-show="value" @click="handleClose" class="c-dialog">
    <div class="o-hero">
      <div @click.stop="() => {}" class="o-hero__content c-dialog__content">
        <button
          class="o-button c-dialog__hide-button"
          @click="handleClose"
          title="Hide dialog"
          aria-label="Hide dialog"
        >
          x
        </button>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: Boolean
    },
    mounted () {
      document.addEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
          this.handleClose()
        }
      })
    },
    beforeDestroy () {
      // TODO: clear listeners
    },
    methods: {
      handleClose () {
        if (this.value) {
          this.$emit('input', false)
        }
      }
    }
  }
</script>

<style lang="css">
</style>
