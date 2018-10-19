<template>
  <img :src="logo" class="app-logo" />
</template>

<script>
export default {
 data()  {
return {
      logo: require('@images/logo.svg'),
}
 }
}
</script>


<style lang="sass">
.app-logo
  +circle(42px)
</style>
