<template>
  <div class="app-composed">
    <div
      v-for="(designer, index) in designers"
      :key="`designer-${index}`"
      :style="{ 'background-image': `url(${designer.image})` }"
      @click="$emit('click', index)"
    >{{ designer.nickname }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      designers: [
        { nickname: 'Peli', image: require('@images/image.jpg') },
        { nickname: 'Cintia', image: require('@images/image.jpg') },
        { nickname: 'Ferni', image: require('@images/image.jpg') },
        { nickname: 'Trini', image: require('@images/image.jpg') },
      ]
    }
  }
}
</script>

<style lang="sass">
.app-composed
  div
    height: 33vh
    padding: 16px 32px

    +background-image
    +d-flex(flex-end, flex-start)
</style>
