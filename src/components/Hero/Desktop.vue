<template>
  <div class="app-hero desktop">
    <div 
      ref="overlay" 
      class="overlay"
    />

    <div class="content">
      <app-logo :version="1" />

      <div class="social-media-container">
        <div>Estudio de diseño y estrategia</div>

        <app-social-media :vertical="true" />
      </div>

      <div class="we-are">
        <div 
          v-for="(concept, index) in concepts" 
          :key="`concept-${index}`" 
          :class="{active: selected === index}" 
          @mouseover="selected = index"
        >
          {{ concept.name }}
        </div>
      </div>
    </div>

    <transition name="fade">
      <div 
        v-for="(concept, index) in concepts" 
        v-if="selected === index" 
        ref="image" 
        :key="`concept-${index}`" 
        :style="{ 'background-image': `url(${concept.image})` }" 
        class="image"
      />
    </transition>
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: { 'app-social-media': SocialMedia, },
  data() {
    return {
      concepts: [
        { name: 'proceso', image: require('@images/home/portfolio_1.png'), },
        { name: 'concepto', image: require('@images/home/portfolio_2.png'), },
        { name: 'imaginario', image: require('@images/home/portfolio_3.png'), },
        {
          name: 'experimentación',
          image: require('@images/home/portfolio_4.png'),
        },
        { name: 'color', image: require('@images/home/portfolio_5.png'), },
        { name: 'estrategia', image: require('@images/home/portfolio_6.png'), },
      ],
      selected: 0,
    };
  },
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const animations = this.$a.timeline({
        duration: 750,
        easing: 'easeInOutQuint',
        delay: 1000,
      });

      animations
        .add({
          targets: this.$refs.overlay,
          left: '50%',
        })
        .add({
          targets: this.$refs.image,
          opacity: [0, 1,],
        });
    },
  },
};
</script>

<style lang="sass">
$hero-height: 970px

.app-hero.desktop
  position: relative
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-areas: "content image"
  height: $hero-height

.app-hero.desktop .overlay
  background-color: $c-black
  
  +p-absolute(1024, 0, 0, 0, 0)

.app-hero.desktop .content
  $padding: 32px

  grid-area: content
  position: relative

  +d-flex(center, center)

  .app-logo
    position: absolute
    top: $padding
    left: $padding

  .social-media-container
    $icon-size: 24px

    position: absolute
    bottom: $padding
    left: $padding

    & > div:first-child
      position: absolute
      top: -10px
      font-family: $f-family-secondary
      font-size: $f-size-md
      font-weight: 400
      line-height: $icon-size
      white-space: nowrap
      height: $icon-size
      transform-origin: left top
      transform: rotate(-90deg)

  .we-are
    $left: 80px

    font-size: 21pt
    font-weight: 700
    transform: translateX(calc(#{$left} / 2))

    div
      cursor: pointer

      &.active
        position: relative
        display: inline-block

        &::before
          content: 'Somos'
          position: absolute
          bottom: 50%
          left: -$left
          font-family: $f-family-secondary
          font-size: $f-size-md
          font-style: italic
          font-weight: 700
          width: calc(100% + #{$left})
          border-bottom: 2px solid $c-primary

.app-hero.desktop .image
  grid-area: image
  position: relative
  z-index: 1025

  +background-image

.app-hero.desktop
  .fade-enter, .fade-leave-to
    opacity: .1

  .fade-enter-active
    transition: opacity .5s ease

  .fade-leave-active
    transition: opacity .5s ease
</style>
