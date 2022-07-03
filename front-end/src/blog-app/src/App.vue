<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <navigation-bar/>
  <section class="main-content">
    <router-view/>
  </section>
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

html {
  height: 100%;
}

body {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  min-height: 100%;
  background:  #ffffff;
}

.main-content {
  flex: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
