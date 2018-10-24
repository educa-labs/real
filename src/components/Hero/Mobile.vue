<template>
  <div class="app-hero mobile">
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

    <div class="we-are">
      <div 
        v-for="(concept, index) in concepts" 
        :key="`concept-${index}`" 
        :class="{active: selected === index}" 
        @click="selected = index"
      >
        {{ concept.name }}
      </div>
    </div>
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
    // this.animate();
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
$hero-height: 970px

.app-hero.mobile
  $padding: 32px

  position: relative
  height: $hero-height

  +d-flex(center, center)

.app-hero.mobile .image
  +background-image
  +p-absolute(null, 0, 0, 0, 0)

.app-hero.mobile .we-are
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

.app-hero.mobile
  .fade-enter, .fade-leave-to
    opacity: 0

  .fade-enter-active
    transition: opacity .5s ease

  .fade-leave-active
    transition: opacity .5s ease
</style>
