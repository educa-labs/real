<template>
  <div v-sticky="{ zIndex: 0, disabled: true }" class="app-navbar">
    <div>
      <router-link to="/">
        <div class="logo">Logo</div>
      </router-link>
      <router-link to="/us">
        <app-button>Nosotros</app-button>
      </router-link>
      <router-link to="/portfolio">
        <app-button>Trabajo</app-button>
      </router-link>
      <router-link to="/methodology">
        <app-button>Metodología</app-button>
      </router-link>
      <router-link to="/contact">
        <app-button>Contacto</app-button>
      </router-link>
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
  background-color: c-gray(300)
</style>
