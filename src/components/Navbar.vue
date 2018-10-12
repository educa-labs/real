<template>
  <div v-sticky="{ zIndex: 0, disabled: true }">
    <div class="app-navbar">
      <router-link to="/">
        <div class="logo">Logo</div>
      </router-link>
      <div>
        <router-link to="/us">
          <div>Nosotros</div>
        </router-link>
        <router-link to="/portfolio">
          <div>Trabajo</div>
        </router-link>
        <router-link to="/methodology">
          <div>Metodología</div>
        </router-link>
        <router-link to="/contact">
          <div>Contacto</div>
        </router-link>
      </div>
      <div class="e-mail">hola@somosreal.cl</div>
    </div>
  </div>
</template>

<script>
import VueSticky from 'vue-sticky'

import Button from '@components/Button'

export default {
  directives: { 'sticky': VueSticky },
  components: { 'app-button': Button },
}
</script>

<style lang="sass">
.app-navbar
  width: 100%
  height: 96px
  padding: 0 48px
  background-color: $c-white
  
  +d-flex(center, space-between)

.app-navbar > div
  +d-flex(center)

  a
    margin-left: 128px

  a:first-child
    margin-left: 0

.app-navbar .e-mail
  font-size: 11pt
</style>
