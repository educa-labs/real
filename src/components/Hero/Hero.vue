<template>
  <app-hero-mobile v-if="$mq === 'mobile'" />
  <app-hero-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-hero-desktop': Desktop,
    'app-hero-mobile': Mobile,
  }  
}
</script>
