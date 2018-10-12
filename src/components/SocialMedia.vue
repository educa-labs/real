<template>
  <div :class="{ vertical }" class="app-social-media">
    <a :href="instagram">
      <img src="@images/instagram.svg">
    </a>
    <div class="separator"/>
    <a :href="linkedin">
      <img src="@images/linkedin.svg">
    </a>
    <div class="separator"/>
    <a v-if="tumblr" :href="tumblr">visita sus referencias</a>
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
    tumblr: {
      type: String,
      default: 'https://www.tumblr.com',
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
$margin: 10px
$width: 1px

.app-social-media
  display: inline-flex
  align-items: center
  justify-content: center

  a
    display: inline-flex
    font-size: 10pt

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
