<template>
  <i 
    class="material-icons app-icon"
    :class="{ button }"
  >
    <slot/>
  </i>
</template>

<script>
export default {
  props: {
    button: { type: Boolean, default: false },
  },
};
</script>

<style lang="sass">
.app-icon.button
  cursor: pointer
</style>
