<template>
  <div :class="{ vertical }" class="app-social-media">
    <a :href="instagram">
      <img src="@images/instagram.svg">
    </a>
    <div class="separator"/>
    <a :href="linkedin">
      <img src="@images/linkedin.svg">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    instagram: {
      type: String,
      default: '',
    },
    linkedin: {
      type: String,
      default: '',
    },
    vertical: {
      type: Boolean,
      default: false,
    }
  }
}
</script>


<style lang="sass">
$height: 20px
$margin: 5px
$width: 2px

.app-social-media
  display: inline-flex
  align-items: center
  justify-content: center

  .separator
    width: $width
    height: $height
    margin: 0 $margin
    background-color: $c-black

.app-social-media.vertical
  flex-direction: column

  .separator
    width: $height
    height: $width

    margin: $margin 0

.app-social-media img
  +size(24px)
</style>
