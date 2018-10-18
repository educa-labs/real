<template>
  <footer class="app-footer">
    <a :href="instagram" target="_blank">
      <img src="@images/instagram.svg">
    </a>
    <div class="separator"/>
    <a :href="linkedin" target="_blank">
      <img src="@images/linkedin.svg">
    </a>
    <div class="separator"/>
    <a href="#" target="_blank">
      <img src="@images/send.svg">
    </a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      instagram: '',
      linkedin: '',
    }
  }
}
</script>

<style lang="sass">
$size: 32px

.app-footer
  +d-flex(center, space-around)

  a
    display: inline-flex

    img
      +size($size)

  .separator
    width: 1px
    height: $size
    background-color: $c-black
</style>
