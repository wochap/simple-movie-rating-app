<template>
  <form-field
    :label="label"
    :id="id"
  >
    <div class="c-form-control c-form-control--text">
      <input
        class="c-form-control__input"
        type="text"
        :placeholder="placeholder"
        :id="id"
        :value="value"
        @input="handleInput"
      />
    </div>
  </form-field>
</template>

<script>
  import rndm from 'rndm'

  export default {
    props: {
      value: [String, Number],
      label: String,
      placeholder: String
    },
    data () {
      return {
        id: rndm(8)
      }
    },
    methods: {
      handleInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang="css">
</style>
