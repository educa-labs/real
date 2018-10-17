<template>
  <div class="app-home">
    <app-hero />
    <app-quote />
    <app-skills />
    <app-gallery />
    <app-steps />
    <app-footer />
  </div>
</template>

<script>
import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Hero from '@components/Hero';
import Quote from '@components/Quote';
import Skills from '@components/Skills';
import Steps from '@components/Steps';

export default {
  components: {
    'app-footer': Footer,
    'app-gallery': Gallery,
    'app-hero': Hero,
    'app-quote': Quote,
    'app-skills': Skills,
    'app-steps': Steps,
  }
}
</script>

<style lang="sass">
$horizontal-padding: 80px
$vertical-padding: 64px

.app-hero
  margin-bottom: $vertical-padding

.app-quote
  margin: 0 $horizontal-padding $vertical-padding

.app-skills
  margin: 0 $horizontal-padding $vertical-padding

.app-gallery
  margin: 0 $horizontal-padding $vertical-padding

.app-footer
  margin: $vertical-padding $horizontal-padding
</style>
