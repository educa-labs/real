<template>
  <div :class="{ active, first, last }" class="app-steps mobile">
    <carousel class="carousel" :perPage="1" :navigationEnabled="true" :paginationEnabled="false" @pageChange="pageChange" :navigationPrevLabel="prevLabel" :navigationNextLabel="nextLabel">
      <slide v-for="(step, index) in steps" :key="`step-${index}`">
        <div class="step-wrapper">
          <div class="step-container">
            <div class="step">
              {{ `0${index}` }}
            </div>

            <span>{{ step + 1 }}</span>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide },
  data() {
    return {
      currentIndex: 0,
      prevLabel: '<i class="material-icons icon">chevron_left</i>',
      nextLabel: '<i class="material-icons icon">chevron_right</i>',
      steps: [
        'Inmersión',
        'Aterrizaje e intercambio',
        'Lab-creativo',
        'Implementación',
        'Entrega',
        'Seguimiento',
      ]
    }
  },
  computed: {
    active() {
      return this.currentIndex > 0;
    },
    first() {
      return this.currentIndex === 0;
    },
    last() {
      return this.currentIndex === this.steps.length - 1;
    }
  },
  methods: {
    pageChange(index) {
      this.currentIndex = index;
    },
  }
}
</script>

<style lang="sass">
$height: 400px

.app-steps.mobile
  transition: background-color .5s

  .step-wrapper
    color: $c-primary
  
  .step
    color: $c-white
    background-color: $c-primary

    &::before, &::after
      background-color: $c-primary

  .VueCarousel-navigation-button
    color: $c-primary

  &.active
    background-color: $c-primary

    .step-wrapper
      color: $c-white

    .step
      color: $c-primary
      background-color: $c-white

      &::before, &::after
        background-color: $c-white

    .VueCarousel-navigation-button
      color: $c-white

.app-steps.mobile .step-wrapper
  flex-direction: column
  font-weight: 700
  text-transform: uppercase
  height: $height

  +d-flex(center, center)

  .step-container
    position: relative

  .step
    margin: 0 auto
  
  span
    position: absolute
    bottom: -32px
    width: 100%
    height: 16px
    text-align: center

.app-steps.mobile .step
  $lines-width: $height / 4
  $lines-height: 6px

  position: relative

  font-size: 70pt
  font-weight: 700

  +circle($height / 2)
  +d-flex(center, center)

  &::before, &::after
    content: ''
    position: absolute
    width: $lines-width
    height: $lines-height

  &::before
    left: -$lines-width

    +border-left-radius($lines-height / 2)
    
  &::after
    right: -$lines-width

    +border-right-radius($lines-height / 2)

  &.first::before
    display: none

  &.last::after
    display: none

.app-steps.mobile
  .VueCarousel-navigation-button
    margin: 0 !important
    padding: 0 !important

  .VueCarousel-navigation-prev
    transform: translate(12px, -12px)

  .VueCarousel-navigation-next
    transform: translate(-12px, -12px)

  &.first .VueCarousel-navigation-prev
    display: none

  &.last .VueCarousel-navigation-next
    display: none
</style>
