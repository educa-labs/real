<template>
  <div id="app">
    <app-navbar />

    <router-view />

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
.app-footer
  padding: 64px 32px

=styling($vertical-padding, $horizontal-padding)
  .app-footer
    padding: $vertical-padding $horizontal-padding

+media-up(md)
  +styling($vertical-padding: 64px, $horizontal-padding: 32px)

+media-up(lg)
  +styling($vertical-padding: 64px, $horizontal-padding: 32px)

+media-up(xl)
  +styling($vertical-padding: 64px, $horizontal-padding: 32px)
</style>
