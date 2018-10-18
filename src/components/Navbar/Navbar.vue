<template>
  <app-navbar-mobile v-if="$mq === 'mobile'" />
  <app-navbar-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-navbar-desktop': Desktop,
    'app-navbar-mobile': Mobile,
  }  
}
</script>
