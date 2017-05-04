<template>
    <div id="component">
        <app-tile></app-tile>
    </div>
</template>
<script>
import Nav from './Navbar.vue';
import Tile from './Tile.vue';

export default {
    data() {
        return{
            loading: false
        }
    },
  components: {
    appNavBar: Nav,
    appTile: Tile
  }
}
</script>