<template>
  <div class="app-gallery">
    <app-sub-gallery 
      v-for="index in quantity" 
      :key="`sub-gallery-${index}`"
    />

    <button 
      type="button" 
      class="show-more"
      @click="quantity += 1"
    >
      Ver más
    </button>
  </div>
</template>

<script>
import SubGallery from './SubGallery';

export default {
  components: {
    'app-sub-gallery': SubGallery,
  },
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<style lang="sass">
.app-gallery
  .app-sub-gallery
    margin-bottom: 16px

    &:last-child
      margin-bottom: 0
  
  .show-more
    font-size: $f-size-md
    font-weight: 600
    margin: 0 auto
    color: $c-primary
</style>
