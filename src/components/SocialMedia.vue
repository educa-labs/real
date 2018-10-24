<template>
  <div 
    :class="{ vertical, white }" 
    class="app-social-media"
  >
    <a 
      :href="instagram" 
      target="_blank"
    >
      <img 
        v-if="!white" 
        src="@images/instagram.svg"
      >
      <img 
        v-else 
        src="@images/instagram-white.svg"
      >
    </a>
    <div class="separator" />
    <a 
      :href="linkedin" 
      target="_blank"
    >
      <img 
        v-if="!white" 
        src="@images/linkedin.svg"
      >
      <img 
        v-else 
        src="@images/linkedin-white.svg"
      >
    </a>
    <template v-if="tumblr">
      <div class="separator" />
      <a 
        :href="tumblr" 
        target="_blank"
      >
        visita sus referencias
      </a>
    </template>
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
      default: '',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
};
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

    img
      +size(24px)

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

.app-social-media.white .separator
  background-color: $c-white
</style>
