<template>
    <div id="component">
        <app-nav-bar></app-nav-bar>
        <app-tile></app-tile>
    </div>
</template>
<script>
import Nav from './Navbar.vue';
import Tile from './Tile.vue';

export default {
  components: {
    appNavBar: Nav,
    appTile: Tile
  }
}
</script>