<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <navigation-bar/>
  <router-view/>
  <blog-footer/>
</template>

<script>

import NavigationBar from '@/components/NavigationBar/index.vue'
import BlogFooter from '@/components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    BlogFooter
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
  background:  #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
