<template>
  <div class="app-hero">
    <div class="content">
      <div class="logo"/>
      <div class="social-media-container">
        <div>Estudio de diseño y estrategia</div>
        <app-social-media :vertical="true"/>
      </div>
      <div class="we-are">
        <div
          v-for="(concept, index) in concepts"
          :key="`concept-${index}`"
          :class="{active: selected === index}"
          @mouseover="selected = index"
        >{{concept.name}}</div>
      </div>
    </div>
    <div
      v-if="selected === index"
      v-for="(concept, index) in concepts"
      :key="`concept-${index}`"
      :style="{ 'background-image': `url(${concept.image})` }"
      class="image"
    />
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: { 'app-social-media': SocialMedia },
  data() {
    return {
      concepts: [
        { name: 'proceso', image: require('@images/image.jpg') },
        { name: 'concepto', image: require('@images/image.jpg') },
        { name: 'imaginario', image: require('@images/image.jpg') },
        { name: 'experimentación', image: require('@images/image.jpg') },
        { name: 'color', image: require('@images/image.jpg') },
        { name: 'estrategia', image: require('@images/image.jpg') },
      ],
      selected: 0,
    }
  },
}
</script>

<style lang="sass">
.app-hero
  $padding: 38px

  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-areas: "content image"
  height: 970px

  .content
    grid-area: content
    position: relative

    +d-flex(center, center)
  
    .logo
      background-color: black

      +circle(42px)
      +p-absolute(null, $padding, null, null, $padding)
    
    .social-media-container
      $icon-size: 24px

      +p-absolute(null, null, null, $padding, $padding)

      & > div:first-child
        font-family: $f-family-secondary
        font-weight: 400
        font-size: 14pt
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
  $translation: 75%

  font-weight: 700
  font-size: 21pt
  transform: translateX($translation / 2)

  div
    cursor: pointer

    &.active
      position: relative
      display: inline-block

      &::before
        font-family: $f-family-secondary
        font-weight: 700
        font-style: italic
        font-size: 14pt
        content: 'Somos'
        border-bottom: 1px solid $c-primary
        position: absolute
        left: -80px
        bottom: 50%
        width: 100% + $translation
</style>
