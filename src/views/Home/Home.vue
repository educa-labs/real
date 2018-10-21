<template>
  <app-home-mobile v-if="$mq === 'mobile'" />
  <app-home-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-home-desktop': Desktop,
    'app-home-mobile': Mobile,
  },
};
</script>
