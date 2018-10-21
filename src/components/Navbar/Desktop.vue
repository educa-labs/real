<template>
  <div>
    <header class="app-navbar">
      <router-link to="/">
        <app-logo />
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
    </header>
  </div>
</template>

<script>
import Button from '@components/Button';
import FixedHeader from 'vue-fixed-header';

export default {
  components: { 'app-button': Button, 'fixed-header': FixedHeader, },
  data() {
    return {
      sidebarOpen: false,
    };
  },
};
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
