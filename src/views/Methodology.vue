<template>
  <div class="app-methodology">
    <div :style="{ top: 0 }" class="node"/>

    <div :style="{ top: 600, left: 600 }" class="node"/>
    <!-- <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/> -->
    <!-- <div v-scroll-reveal class="test"/> -->
  </div>
</template>

<script>
export default {
}
</script>


<style lang="sass">
.app-methodology
  background-color: $c-primary
  height: 100vh

  .node
    position: absolute
    margin-bottom: 400px
    color: $c-primary
    background-color: $c-white

    +circle(300px)
</style>
