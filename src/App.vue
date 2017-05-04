<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Snippet from './components/Snippet.vue'
import Nav from './components/Navbar.vue';
export default {
  components: {
      appHome: Home,
      appNavBar: Nav
  }
}
</script>

<style>

</style>
