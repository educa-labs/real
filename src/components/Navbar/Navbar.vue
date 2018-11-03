<template>
  <app-navbar-mobile 
    v-if="$mq === 'mobile'" 
    v-bind="$props"
  />
  <app-navbar-desktop 
    v-else 
    v-bind="$props"
  />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-navbar-desktop': Desktop,
    'app-navbar-mobile': Mobile,
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
