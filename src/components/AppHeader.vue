<template>
  <div class="ui secondary pointing menu">
    <router-link :to="paths.MAIN_PAGE" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link :to="paths.MAIN_PAGE" class="ui item">Gallery</router-link>
        <router-link :to="paths.UPLOAD_PAGE" class="ui item">Upload</router-link>
        <a href="#" class="ui item" @click="logout" id="#logout-btn">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login" id="login-btn">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import * as paths from '@/constants/paths'

export default {
  name: 'AppHeader',

  computed: {
    ...mapGetters(['isLoggedIn']),
    paths() {
      return paths
    }
  },

  methods: {
    ...mapActions(['login', 'logout'])
  }
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
