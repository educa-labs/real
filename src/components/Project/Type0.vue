<template>
  <div class="project-images type-0">
    <div class="image-wrapper">
      <div 
        :style="{ 'background-image': `url(${images[0]})` }" 
        class="image"
      />
    </div>

    <div class="image-wrapper">
      <div 
        :style="{ 'background-image': `url(${images[1]})` }" 
        class="image"
      />

      <h1>{{ quote }}</h1>
    </div>

    <div class="image-wrapper">
      <div 
        :style="{ 'background-image': `url(${images[2]})` }" 
        class="image"
      />
    </div>

    <div class="image-wrapper">
      <div 
        :style="{ 'background-image': `url(${images[3]})` }" 
        class="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      quote: 'Diseñamos estratégicamente, construimos visualmente. Lo hacemos para sorprender, comunicar, y crear valor.',
    };
  },
};
</script>
    
<style lang="sass">
.project-images.type-0
  .image-wrapper:nth-child(1)
    max-width: 1400px
    margin-left: auto

  .image-wrapper:nth-child(2)
    max-width: 1400px
    padding-left: 80px

    +d-flex(center)

    .image
      margin-right: 80px

    h1
      color: $c-primary

  .image-wrapper:nth-child(3)
    max-width: 1400px
    margin-left: auto
    padding-right: 80px

  .image-wrapper:nth-child(4)
    padding: 0 80px      
</style>
