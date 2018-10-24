<template>
  <div class="app-designer mobile">
    <app-icon 
      :button="true" 
      class="close" 
      @click="close"
    >
      close
    </app-icon>

    <div class="she">
      <div class="nickname">{{ designer.nickname }}</div>
      <div 
        :style="{ 'background-image': `url(${designer.image})` }" 
        class="image"
      />
    </div>

    <div class="description">{{ designer.description }}</div>
    <app-social-media :white="true" />
  </div>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: {
    'app-social-media': SocialMedia,
  },
  props: {
    designer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="sass">
$margin-bottom: 64px

.app-designer.mobile
  position: relative
  padding: calc(24px + 48px + 24px) 48px 24px
  color: $c-white
  background-color: $c-black

.app-designer.mobile .close
  position: absolute
  top: 24px
  right: 24px
  font-size: 48px

.app-designer.mobile .she
  margin-bottom: $margin-bottom

  +d-flex(null, space-between)

  .nickname
    font-size: 35pt
    font-weight: 600

  .image
    width: 50%
    height: 300px

    +background-image

.app-designer.mobile .description
  font-family: $f-family-secondary
  font-size: 16pt
  margin-bottom: $margin-bottom

.app-designer.mobile .app-social-media
  +d-flex(null, flex-end)

  .separator
    margin: 0 48px
</style>
