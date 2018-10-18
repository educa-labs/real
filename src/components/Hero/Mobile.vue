<template>
  <div class="app-hero-mobile">
      <transition name="fade" mode="out-in">
        <div
          v-if="selected === index"
          v-for="(concept, index) in concepts"
          :key="`concept-${index}`"
          :style="{ 'background-image': `url(${concept.image})` }"
          class="image"
          ref="image"
        />
      </transition>

      <div class="we-are">
        <div
          v-for="(concept, index) in concepts"
          :key="`concept-${index}`"
          :class="{active: selected === index}"
          @click="selected = index"
        >{{concept.name}}</div>
      </div>
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: { 'app-social-media': SocialMedia },
  data() {
    return {
      concepts: [
        { name: 'proceso', image: require('@images/home/portfolio_1.png') },
        { name: 'concepto', image: require('@images/home/portfolio_2.png') },
        { name: 'imaginario', image: require('@images/home/portfolio_3.png') },
        { name: 'experimentación', image: require('@images/home/portfolio_4.png') },
        { name: 'color', image: require('@images/home/portfolio_5.png') },
        { name: 'estrategia', image: require('@images/home/portfolio_6.png') },
      ],
      logo: require('@images/logo.svg'),
      selected: 0,
    }
  },
  methods: {
    animate() {
      const animations = this.$a.timeline({
        duration: 1000,
        easing: [0.645, 0.045, 0.355, 1],
        delay: 1000
      });

      animations.add({
        targets: this.$refs.overlay,
        left: '50%',
      }).add({
        targets: this.$refs.image,
        opacity: [0, 1],
      });
    },
  },
  mounted() {
    // this.animate();
  } 
}
</script>

<style lang="sass">
.app-hero-mobile
  $padding: 38px

  position: relative
  height: 970px
  +d-flex(center, center)

  .app-logo
    +circle(42px)
    +p-absolute(null, $padding, null, null, $padding)
    
  .image
    +p-absolute(null, 0, 0, 0, 0)
    +background-image

.we-are
  $translation: 75%

  font-weight: 700
  font-size: 30pt
  transform: translateX(calc(80px / 2))

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

.app-hero-mobile
  .fade-enter, .fade-leave-to
    opacity: 0

  .fade-enter-active
    transition: opacity .75s cubic-bezier(0.645, 0.045, 0.355, 1),

  .fade-leave-active
    transition: opacity .5s
</style>
