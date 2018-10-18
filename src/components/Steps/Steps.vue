<template>
  <app-steps-mobile v-if="$mq === 'mobile'" />
  <app-steps-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-steps-desktop': Desktop,
    'app-steps-mobile': Mobile,
  }  
}
</script>

<style lang="sass">
</style>
