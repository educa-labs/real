<template>
  <div id="app">
    <app-navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@components/Navbar';

export default {
  components: {
    'app-navbar': Navbar,
  }  
}
</script>

<style lang="sass">
.app-footer
  margin: 96px 0
</style>
