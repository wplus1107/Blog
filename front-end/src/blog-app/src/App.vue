<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="main">
    <navigation-bar/>
    <div class="main-content" v-bind:style="{minHeight: Height+'px',minWidth: Width}">
      <router-view/>
    </div>
    <blog-footer/>
  </div>
</template>

<script>

import NavigationBar from '@/components/NavigationBar/index.vue'
import BlogFooter from '@/components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    BlogFooter
  },
  data() {
    return {
      Height: 0,
      Width: 0
    }
  },
  mounted() {
    this.Width = document.documentElement.clientWidth;
    this.Height = document.documentElement.clientHeight - 100;
    window.onresize = () => { 
      this.Height = document.documentElement.clientHeight - 100;
      this.Width = document.documentElement.clientWidth;
    }
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

/* .main-content {
  flex: 1;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
