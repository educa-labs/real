<template>
  <fixed-header 
    :fixed.sync="isSticky" 
    :threshold="isSticky ? 0 : 128"
  >
    <header
      ref="header" 
      :style="{ opacity: $route.name === 'home' ? 0 : 1 }"
      :class="{ sticky: isSticky, primary: $route.name === 'methodology'}" 
      class="app-navbar desktop"
    >
      <router-link to="/">
        <app-logo :version="0" />
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
  </fixed-header>
</template>

<script>
import Button from '@components/Button';
import FixedHeader from 'vue-fixed-header';

export default {
  components: { 'app-button': Button, 'fixed-header': FixedHeader, },
  data() {
    return {
      isSticky: false,
      animation: null,
    };
  },
  watch: {
    isSticky(value) {
      this.$store.dispatch('updateNavbar', {
        isSticky: this.isSticky,
      });

      if (value) {
        this.animation = this.$a({
          targets: this.$refs.header,
          opacity: [0, 1,],
          duration: 500,
          easing: [0.645, 0.045, 0.355, 1,],
        });
      } else if (this.$route.name === 'home') {
        this.animation && this.animation.pause();

        this.$a({
          targets: this.$refs.header,
          opacity: [1, 0,],
          duration: 250,
          easing: [0.645, 0.045, 0.355, 1,],
        });
      }
    },
  },
};
</script>

<style lang="sass">
$navbar-height: 96px
$navbar-z-index: 2024

.app-navbar.desktop
  position: absolute
  top: 0
  z-index: $navbar-z-index
  width: 100%
  height: $navbar-height
  background-color: $c-white
  
  +d-flex(center, space-between)

.app-navbar.desktop.sticky
  position: fixed
  top: 0
  background-color: $c-white

.app-navbar.desktop.primary
  background-color: $c-primary

  div
    color: $c-white

.app-navbar.desktop .app-logo
  height: 32px

.app-navbar.desktop > div
  +d-flex(center)

  & > a:first-child
    margin-left: 0

.app-navbar.desktop .e-mail
  font-size: $f-size-sm

=styling($padding, $anchor-margin)
  .app-navbar.desktop
    padding: $padding

  .app-navbar.desktop > div > a
    margin-left: $anchor-margin

+media-up(md)
  +styling($padding: 0 32px, $anchor-margin: 32px)

+media-up(lg)
  +styling($padding: 0 48px, $anchor-margin: 64px)

+media-up(xl)
  +styling($padding: 0 48px, $anchor-margin: 128px)
</style>
