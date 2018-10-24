<template>
  <app-portfolio-mobile v-if="$mq === 'mobile'" />
  <app-portfolio-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-portfolio-desktop': Desktop,
    'app-portfolio-mobile': Mobile,
  },
};
</script>
