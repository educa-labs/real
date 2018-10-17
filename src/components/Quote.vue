<template>
  <div class="app-quote">
    <div class="quote">{{ quote }}</div>
    <div class="separator"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: `Diseñamos estratégicamente, construimos visualmente. Lo hacemos para sorprender, comunicar, y crear valor.`
    }
  }
}
</script>

<style lang="sass">
.app-quote
  .quote
    font-family: $f-family-secondary
    font-size: 16pt
    width: 462px

  .separator
    width: 75px
    height: 2px
    background-color: $c-primary
    margin-top: 2rem
</style>
