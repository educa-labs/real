<template>
  <img 
    :src="logo" 
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
      logoV1: require('@images/logo-v1.svg'),
      logoV2: require('@images/logo-v2.svg'),
    };
  },
};
</script>

<style lang="sass">
.app-logo
  +circle(42px)
</style>
