<template>
  <app-footer-mobile v-if="$mq === 'mobile'" />
  <app-footer-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-footer-desktop': Desktop,
    'app-footer-mobile': Mobile,
  },
};
</script>
