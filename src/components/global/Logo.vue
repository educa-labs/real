<template>
  <img 
    :src="logos[version]" 
    :class="{ v0: version === 0, v1: version === 1 }"
    class="app-logo"
  >
</template>

<script>
export default {
  props: {
    version: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      logos: [
      require('@images/logo-v0.svg'),
      require('@images/logo-v1.svg'),
      ],
    };
  },
};
</script>

<style lang="sass">
.app-logo.v1
  +circle(42px)
</style>
