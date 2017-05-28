<template>
  <div :class="['c-form-field', {'c-form-field--horizontal': horizontal}]">
    <label class="c-form-field__label" :for="id">{{label}}</label>
    <div class="c-form-field__control">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      horizontal: {
        type: Boolean,
        default: false
      },
      label: String,
      id: String
    }
  }
</script>

<style lang="css">
</style>
