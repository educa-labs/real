<template>
  <div class="app-composed mobile">
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
  props: {
    designers: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="sass">
.app-composed
  div
    font-weight: 600
    font-size: 40pt
    height: 400px
    padding: 16px 64px
    color: $c-white

    +background-image
    +d-flex(flex-end, flex-start)

.app-composed.mobile
  div
    height: 200px
</style>
