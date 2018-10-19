<template>
  <app-us-mobile v-if="$mq === 'mobile'" />
  <app-us-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-us-desktop': Desktop,
    'app-us-mobile': Mobile,
  }  
}
</script>
