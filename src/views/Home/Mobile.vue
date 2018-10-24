<template>
  <div class="app-home mobile">
    <app-hero />
    <app-quote />
    <app-steps />
  </div>
</template>

<script>
import Hero from '@components/Hero/Hero';
import Quote from '@components/Quote/Quote';
import Steps from '@components/Steps/Steps';

export default {
  components: {
    'app-hero': Hero,
    'app-quote': Quote,
    'app-steps': Steps,
  },
};
</script>

<style lang="sass">
$horizontal-padding: 32px
$vertical-margin: 64px

.app-home.mobile
  .app-hero
    margin-bottom: $vertical-margin

  .app-quote
    margin: 0 0 $vertical-margin
    padding: 0 $horizontal-padding
</style>
