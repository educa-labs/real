<template>
  <div class="app-methodology">
    <div v-scroll-reveal class="test"/>
    <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/>
    <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/>
    <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/>
    <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/>
    <div v-scroll-reveal="{ viewOffset: { bottom: 300 } }" class="test"/>
    <div v-scroll-reveal class="test"/>
    <div v-scroll-reveal class="test"/>
    <div v-scroll-reveal class="test"/>
    <div v-scroll-reveal class="test"/>
  </div>
</template>

<style lang="sass">
.app-methodology
  .test
    background-color: $c-primary
    margin-bottom: 400px

    +size(150px)
</style>
