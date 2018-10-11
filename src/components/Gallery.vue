<template>
  <div class="app-gallery">
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
</template>

<style lang="sass">
.app-gallery
  display: grid
  grid-template-rows: 2fr repeat(2, 1fr)
  grid-template-columns: 1fr repeat(2, 1fr)
  grid-template-areas: "a b c" "d d c" "d d e"
  grid-gap: 16px
  height: 100vh

  div
    // temporal...
    background-color: c-gray(300)

  div:nth-child(1)
    grid-area: a

  div:nth-child(2)
    grid-area: b

  div:nth-child(3)
    grid-area: c

  div:nth-child(4)
    grid-area: d

  div:nth-child(5)
    grid-area: e
</style>
