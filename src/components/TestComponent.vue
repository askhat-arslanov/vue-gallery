<template>
  <div>
    {{ doubleNum }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',

  data() {
    return {
      num: 1
    }
  },

  computed: {
    doubleNum() {
      return this.num * 2
    }
  }
}
</script>

<style></style>
