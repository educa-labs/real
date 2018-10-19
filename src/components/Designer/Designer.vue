<template>
  <app-designer-mobile v-if="$mq === 'mobile'" v-bind="$props" />
  <app-designer-desktop v-else v-bind="$props" />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-designer-desktop': Desktop,
    'app-designer-mobile': Mobile,
  },
  props: {
    designer: {
      type: Object,
      required: true,
    }
  },
}
</script>
