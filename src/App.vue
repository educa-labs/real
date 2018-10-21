<template>
  <div id="app">
    <app-navbar />

    <div 
      :class="{ sticky: $store.state.navbar.isSticky && !$store.state.navbar.isOpen }" 
      class="body">
      <router-view/>
    </div>

    <app-footer />
  </div>
</template>

<script>
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';

export default {
  components: {
    'app-footer': Footer,
    'app-navbar': Navbar,
  },
};
</script>

<style lang="sass">
$horizontal-padding: 32px
$vertical-padding: 64px

.app-footer
  margin: $vertical-padding $horizontal-padding
</style>
