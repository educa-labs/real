<template>
  <div class="app-quote desktop">
    <div class="quote">{{ quote }}</div>
    <div class="separator" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: 'Diseñamos estratégicamente, construimos visualmente. Lo hacemos para sorprender, comunicar, y crear valor.',
    };
  },
};
</script>

<style lang="sass">
.app-quote.desktop
  .quote
    width: 462px
</style>
