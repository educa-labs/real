<template>
  <div id="app">
    <app-navbar/>
    <div :class="{ sticky: $store.state.navbar.isSticky && !$store.state.navbar.isOpen }" class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@components/Navbar/Navbar';

export default {
  components: {
    'app-navbar': Navbar,
  }  
}
</script>

<style lang="sass">
#app .body.sticky
  padding-top: 128px
</style>
