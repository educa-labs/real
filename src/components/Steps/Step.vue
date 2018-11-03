<template>
  <div 
    :style="{ 'z-index': 999 }" 
    @mouseover="isActive = true" 
    @mouseout="isActive = false"
  >
    <div 
      ref="step" 
      :class="{ active: isActive }" 
      class="step"
    >
      <div 
        ref="circle" 
        class="circle"
      >
        {{ innerText }}
      </div>

      <div class="outer-text">{{ outerText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    innerText: {
      type: String,
      required: true,
    },
    outerText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
      animation: null,
    };
  },
  watch: {
    isActive(value, oldValue) {
      this.animation && this.animation.pause();

      if (value && !oldValue) {
        this.animation = this.$a({
          targets: this.$refs.step,
          duration: 200,
          easing: 'easeInOutQuad',
          // bottom: [0, '32px'],
          translateY: [0, '-32px',],
          update: () => this.$emit('update'),
        });
      } else if (!value && oldValue) {
        this.animation = this.$a({
          targets: this.$refs.step,
          duration: 100,
          easing: 'easeInOutQuad',
          // bottom: ['32px', 0],
          translateY: ['-32px', 0,],
          update: () => this.$emit('update'),
        });
      }
    },
  },
};
</script>
  
<style lang="sass">
.app-steps.desktop
  .step
    flex-direction: column
    cursor: pointer
    +d-flex(center)

  .circle
    position: relative
    z-index: 1
    font-size: 22pt
    font-weight: 700
    text-align: center
    color: $c-white
    background-color: $c-primary
    border-radius: 50%

    +size(75px)
    +d-flex(center, center)

  .outer-text
    margin-top: 64px
    transition: color .1s
    font-weight: 700

  .step.active
    .outer-text
      color: $c-primary
</style>
  