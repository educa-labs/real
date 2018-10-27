<template>
  <div 
    @mouseover="isActive = true" 
    @mouseout="isActive = false"
  >
    <div 
      ref="step" 
      :class="{ active: isActive }" 
      class="step"
    >
      {{ innerText }}
    </div>

    {{ outerText }}
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
          bottom: [0, '32px',],
        });
      } else if (!value && oldValue) {
        this.animation = this.$a({
          targets: this.$refs.step,
          duration: 100,
          easing: 'easeInOutQuad',
          bottom: ['32px', 0,],
        });
      }
    },
  },
};
</script>
  
<style lang="sass">

</style>
  