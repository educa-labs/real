<template>
  <i 
    :class="{ button }" 
    class="material-icons app-icon" 
    @click="$emit('click')"
  >
    <slot />
  </i>
</template>

<script>
export default {
  props: {
    button: { type: Boolean, default: false, },
  },
};
</script>

<style lang="sass">
.app-icon.material-icons
  font-size: 24px

.app-icon.button
  cursor: pointer
</style>
