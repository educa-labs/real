<template>
  <app-quote-mobile v-if="$mq === 'mobile'" />
  <app-quote-desktop v-else />
</template>

<script>
import Desktop from './Desktop';
import Mobile from './Mobile';

export default {
  components: {
    'app-quote-desktop': Desktop,
    'app-quote-mobile': Mobile,
  }  
}
</script>

<style lang="sass">
.app-quote
  .separator
    width: 75px
    height: 2px
    background-color: $c-primary
    margin: 2rem 0

  &:not(.separator)
    font-family: $f-family-secondary
    font-size: 16pt
</style>
