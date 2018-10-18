<template>
  <div class="app-home">
    <app-hero />
    <app-quote />
    <app-steps />
    <app-footer />
  </div>
</template>

<script>
import Footer from '@components/Footer/Footer';
import Hero from '@components/Hero/Hero';
import Quote from '@components/Quote/Quote';
import Steps from '@components/Steps/Steps';

export default {
  components: {
    'app-footer': Footer,
    'app-hero': Hero,
    'app-quote': Quote,
    'app-steps': Steps,
  }
}
</script>

<style lang="sass">
$horizontal-padding: 32px
$vertical-padding: 64px

.app-hero
  margin-bottom: $vertical-padding

.app-quote.mobile
  margin: $vertical-padding $horizontal-padding

.app-footer
  margin: $vertical-padding $horizontal-padding
</style>
