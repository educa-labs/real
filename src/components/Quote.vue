<template>
  <div class="app-quote">
    <div class="content">{{ content }}</div>
    <div class="separator"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: `Diseñamos estratégicamente, construimos visualmente.
    Lo hacemos para sorprender, comunicar, y crear valor.`
    }
  }
}
</script>


<style lang="sass">
.app-quote
  padding: 2rem

  .content
    width: 300px

  .separator
    width: 75px
    height: 3px
    background-color: $c-primary
    margin-top: 2rem
</style>
