<template>
  <div>
    <fixed-header 
      :fixed.sync="isSticky" 
      :threshold="isSticky ? 0 : 128"
    >
      <header 
        ref="header" 
        :style="{ zIndex: style.zIndex + 1 }" 
        :class="{ open: isOpen, sticky: isSticky || isOpen, transparent: isTransparent }" 
        class="app-navbar-mobile"
      >
        <router-link 
          to="/" 
          @click.native="toggle"
        >
          <app-logo />
        </router-link>

        <button 
          type="button" 
          class="menu-button" 
          @click="toggle"
        >
          <app-icon v-if="!isOpen">menu</app-icon>
          <app-icon v-else>close</app-icon>
        </button>
      </header>
    </fixed-header>

    <transition 
      name="menu" 
      @after-leave="isTransparent = false"
    >
      <div 
        v-show="isOpen" 
        :style="{ zIndex: style.zIndex }" 
        class="menu"
      >
        <div class="content">
          <div class="links">
            <router-link 
              to="/us" 
              @click.native="toggle"
            >
              <div>Nosotros</div>
            </router-link>

            <router-link 
              to="/portfolio" 
              @click.native="toggle"
            >
              <div>Trabajo</div>
            </router-link>

            <router-link 
              to="/methodology" 
              @click.native="toggle"
            >
              <div>Metodología</div>
            </router-link>
            <router-link 
              to="/contact" 
              @click.native="toggle"
            >
              <div>Contacto</div>
            </router-link>
          </div>

          <div class="contact">
            <div class="name">Somos Real</div>
            <div class="e-mail">hola@somosreal.cl</div>
            <div class="cell-phone">56229816946</div>
            <div class="address">maximo jeria 655, ñuñoa</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '@components/Button';
import FixedHeader from 'vue-fixed-header';

export default {
  components: { 'app-button': Button, 'fixed-header': FixedHeader, },
  data() {
    return {
      isOpen: false,
      isSticky: false,
      isTransparent: false,
      style: {
        zIndex: 2024,
      },
    };
  },
  watch: {
    isSticky(value) {
      this.$store.dispatch('updateNavbar', {
        isSticky: this.isSticky,
        isOpen: this.isOpen,
      });

      if (value && !this.isOpen) {
        this.$a({
          targets: this.$refs.header,
          opacity: [0, 1,],
          duration: 500,
          easing: [0.645, 0.045, 0.355, 1,],
        });
      }
    },
  },
  methods: {
    toggle() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.isTransparent = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="sass">
.app-navbar-mobile
  position: absolute
  width: 100%
  padding: 32px
  transition: background-color .1s
  
  +d-flex(center, space-between)

  .app-logo
    +size(64px)

  .menu-button i
    font-size: 48px

.app-navbar-mobile.open
  .menu-button
    color: $c-white

.app-navbar-mobile.sticky
  position: fixed
  background-color: $c-white

.app-navbar-mobile.transparent
  background-color: transparent

.menu
  $navbar-height: 128px
  $padding: 32px

  font-size: 24pt 
  background-color: rgba($c-primary, .8)
  overflow: hidden

  +p-fixed(null, 0, 0, 0, 0)

  .content
    flex-direction: column
    padding: #{$navbar-height + $padding} $padding $padding
    width: 100vw
    height: 100%

    +d-flex(null, space-between)

  .links div, .contact
    letter-spacing: 3px
    color: $c-white

  .links div
    margin-bottom: 16px

  .contact div:not(.name)
    font-size: 20pt
    letter-spacing: 3px

  .name
    margin-bottom: 32px

.menu-enter, .menu-leave-to
  right: 100%

.menu-enter-active, .menu-leave-active
  transition: right .25s cubic-bezier(0.645, 0.045, 0.355, 1)
</style>
