<template>
  <div class="app-designer desktop">
    <div class="content">
      <div class="nickname">{{ designer.nickname }}</div>
      <div class="description">{{ designer.description }}</div>
      <div class="e-mail">{{ designer.eMail }}</div>
      <app-social-media 
        :instagram="designer.instagram" 
        :linkedin="designer.linkedin" 
        tumblr="https://www.tumblr.com"
      />
    </div>
    <div 
      :style="{ 'background-image': `url(${designer.image})` }" 
      class="image"
    />
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: {
    'app-social-media': SocialMedia,
  },
  props: {
    designer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
$image-width: 500px
$image-height: 600px

.app-designer.desktop
  display: grid
  grid-template-columns: 1fr auto
  grid-gap: 32px

.app-designer.desktop .content
  align-self: center

  .nickname
    font-size: $f-size-xl
    font-weight: 600
  
  .description
    font-size: $f-size-md
    max-width: $image-width

  .e-mail
    font-size: $f-size-sm

  .app-social-media
    margin-top: 32px

.app-designer.desktop .image
  width: $image-width
  height: $image-height

=styling($description-margin)
  .app-designer.desktop .content
    .description
      margin: $description-margin

+media-up(md)
  +styling($description-margin: 32px 0 32px 0px)

+media-up(lg)
  +styling($description-margin: 32px 0 32px 32px)

+media-up(xl)
  +styling($description-margin: 32px 0 32px 128px)
</style>
