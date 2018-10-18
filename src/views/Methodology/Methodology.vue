<template>
  <app-methodology-mobile v-if="$mq === 'mobile'" />
  <app-methodology-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-methodology-desktop': Desktop,
    'app-methodology-mobile': Mobile,
  }  
}
</script>
