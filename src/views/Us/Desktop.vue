<template>
  <div 
    v-if="this.fetched" 
    class="app-us desktop"
  >
    <div class="designer-wrapper">
      <transition 
        name="fade" 
        mode="out-in"
      >
        <app-designer 
          v-for="(designer, index) in response" 
          v-if="selected === index" 
          :key="`designer-${index}`" 
          :designer="designer"
        />
      </transition>
    </div>

    <app-composed 
      :designers="response" 
      @click="selectDesigner"
    />
  </div>
</template>

<script>
import { remote, } from '@mixins';

import Composed from '@components/Composed/Desktop';
import Designer from '@components/Designer/Desktop';

export default {
  components: {
    'app-composed': Composed,
    'app-designer': Designer,
  },
  mixins: [remote,],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    query() {
      return this.$API.designers()
    },
    selectDesigner(index) {
      this.selected = index;

      this.$scrollTo('.designer-wrapper');
    },
  },
};
</script>

<style lang="sass">
.app-us.desktop
  .designer-wrapper
    .fade-enter, .fade-leave-to
      opacity: .1

    .fade-enter-active
      transition: opacity .5s cubic-bezier(0.645, 0.045, 0.355, 1)

    .fade-leave-active
      transition: opacity .75s cubic-bezier(0.645, 0.045, 0.355, 1)

=styling($margin, $padding)
  .app-us.desktop
    .designer-wrapper
      margin: $margin
      padding: $padding

+media-up(md)
  +styling($margin: 32px 0 32px, $padding: 0 32px)

+media-up(xl)
  +styling($margin: 32px 0 32px, $padding: 0 64px 0 64px)
</style>
