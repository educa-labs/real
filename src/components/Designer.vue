<template>
  <div class="app-designer">
    <div class="content">
      <div class="nickname">{{designer.nickname}}</div>
      <div class="description">{{designer.description}}</div>
      <div class="e-mail">{{ designer.eMail }}</div>
      <app-social-media :instagram="designer.instagram" :linkedin="designer.linkedin" tumblr="https://www.tumblr.com"/>
    </div>
    <div :style="{ 'background-image': `url(${designer.image})` }" class="image"/>
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
    }
  }
}
</script>

<style lang="sass">
.app-designer
  display: grid
  grid-template-columns: 1fr auto

.app-designer .content
  align-self: center

  .nickname
    font-size: 40pt
    font-weight: 600
  
  .description
    font-size: 14pt
    max-width: 400px
    margin: 32px 0 32px 128px

  .e-mail
    font-size: 10pt

  .app-social-media
    margin-top: 32px

.app-designer .image
  width: 500px
  height: 600px
</style>
