<template>
  <div class="app-hero">
    <div 
      ref="overlay" 
      class="overlay"
    />
    <div class="content">
      <app-logo />
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
    <transition 
      name="fade" 
      mode="out-in"
    >
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
        duration: 1000,
        easing: [0.645, 0.045, 0.355, 1,],
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
.app-hero
  $padding: 38px

  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-areas: "content image"
  position: relative
  height: 970px

  .content
    grid-area: content
    position: relative

    +d-flex(center, center)

    .app-logo
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
    position: relative
    z-index: 1024
    margin: 15%

    +background-image

.app-hero .we-are
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
        width: calc(100% + 80px)

.app-hero .overlay
  background-color: $c-black
  
  +p-absolute(1024, 0, 0, 0, 0)

.app-hero
  .fade-enter, .fade-leave-to
    opacity: 0

  .fade-enter-active
    transition: opacity .75s cubic-bezier(0.645, 0.045, 0.355, 1),

  .fade-leave-active
    transition: opacity .5s
</style>
