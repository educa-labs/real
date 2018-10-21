<template>
  <div class="app-quote mobile">
    <div>{{ quoteA }}</div>
    <div class="separator" />
    <div>{{ quoteB }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteA: 'Estudio de diseño y estrategia',
      quoteB: 'Diseñamos estratégicamente, construimos visualmente. Lo hacemos para sorprender, comunicar, y crear valor.',
    };
  },
};
</script>

<style lang="sass">
</style>
