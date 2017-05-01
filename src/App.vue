<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
export default {
  components: {
    appHome: Home
  }
}
</script>

<style>

</style>
