<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link" :key="image.id" alt="image" />
    </div>

    <h2 v-else>Log In to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageList',

  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },

  methods: {
    ...mapActions(['fetchImages'])
  },

  created() {
    this.fetchImages()
  }
}
</script>

<style scoped lang="scss">
.image-container {
  column-count: 3;
  column-gap: 1rem;

  img {
    border-radius: 2px;
    max-width: 100%;
    margin-bottom: 1rem;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
