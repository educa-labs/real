<template>
  <div class="app-home mobile">
    <app-hero />
    <app-quote />
    <app-skills />
    <app-gallery />
    <app-steps />
  </div>
</template>

<script>
import Gallery from '@components/Gallery';
import Hero from '@components/Hero/Hero';
import Quote from '@components/Quote/Quote';
import Skills from '@components/Skills';
import Steps from '@components/Steps/Steps';

export default {
  components: {
    'app-gallery': Gallery,
    'app-hero': Hero,
    'app-quote': Quote,
    'app-skills': Skills,
    'app-steps': Steps,
  },
};
</script>

<style lang="sass">
=styling($vertical-margin, $horizontal-padding)
  .app-home.mobile
    .app-hero
      margin-bottom: $vertical-margin

    .app-quote
      margin: 0 0 $vertical-margin
      padding: 0 $horizontal-padding

    .app-skills
      margin: 0 0 $vertical-margin
      padding: 0 $horizontal-padding

    .app-gallery
      margin: 0 0 $vertical-margin
      padding: 0 $horizontal-padding

+media-up(lg)
  +styling($vertical-margin: 64px, $horizontal-padding: 32px)

+media-up(xl)
  +styling($vertical-margin: 64px, $horizontal-padding: 64px)
</style>
