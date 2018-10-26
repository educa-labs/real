<template>
  <app-portfolio-mobile 
    v-if="$mq === 'mobile'" 
    v-bind="$props"
  />
  <app-portfolio-desktop 
    v-else 
    v-bind="$props"
  />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-portfolio-desktop': Desktop,
    'app-portfolio-mobile': Mobile,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>
