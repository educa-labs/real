<template>
  <div class="app-hero">
    <div class="content">
      <div class="logo"/>
      <div class="social-media-container">
        <div>Estudio de diseño y estrategia</div>
        <app-social-media :vertical="true"/>
      </div>
      <div class="we-are">
        <div v-for="(item, index) in items" :key="`item-${index}`">{{item}}</div>
      </div>
    </div>
    <div :style="{ 'background-image': `url(${image})` }" class="image"/>
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: { 'app-social-media': SocialMedia },
  data() {
    return {
      items: [
        'proceso',
        'concepto',
        'imaginario',
        'experimentación',
        'color',
        'estrategia',
      ],
      image: require('@images/image.jpg'),
    }
  }
}
</script>

<style lang="sass">
.app-hero
  $padding: 1.5rem

  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-areas: "content image"
  height: 100vh

  .content
    grid-area: content
    position: relative

    +d-flex(center, center)
  
    .logo
      background-color: black

      +circle(32px)
      +p-absolute(null, $padding, null, null, $padding)
    
    .social-media-container
      $icon-size: 24px

      +p-absolute(null, null, null, $padding, $padding)

      & > div:first-child
        font-family: $f-family-secondary
        white-space: nowrap
        position: absolute
        transform: rotate(-90deg)
        transform-origin: left top
        height: $icon-size
        line-height: $icon-size
        top: -10px

      i
        font-size: $icon-size

  .image
    grid-area: image

    +background-image

.we-are
  font-weight: 600

  div:first-child
    position: relative
    display: inline-block

    &::before
      font-family: $f-family-secondary
      font-weight: 500
      font-style: italic
      content: 'Somos'
      border-bottom: 1px solid $c-primary
      position: absolute
      left: -100%
      bottom: 50%
      width: 200%
      
</style>
