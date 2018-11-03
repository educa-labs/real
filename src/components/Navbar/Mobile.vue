<template>
  <div class="navbar-wrapper mobile">
    <fixed-header 
      :fixed.sync="isSticky" 
      :threshold="isSticky ? 0 : $store.state.navbar.style.mobile.height"
    >
      <header 
        ref="header" 
        :style="{ zIndex: style.zIndex + 1, height: `${$store.state.navbar.style.mobile.height}px` }" 
        :class="{ open: isOpen, sticky: isSticky || isOpen, transparent: isTransparent }" 
        class="app-navbar mobile"
      >
        <router-link 
          to="/" 
          @click.native="() => isOpen && open()"
        >
          <app-logo :version="1" />
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

    <div 
      v-if="!absolute" 
      class="header-placeholder" 
      :style="{ height: `${style.height}px` }"
    />

    <transition 
      name="slide" 
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
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      isSticky: false,
      isTransparent: false,
      style: {
        height: 0,
        zIndex: 2024,
      },
    };
  },
  watch: {
    isSticky(value) {
      this.$store.dispatch('updateNavbar', {
        isOpen: this.isOpen,
        isSticky: this.isSticky,
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
  mounted() {
    this.updateHeaderHeight();
  },
  methods: {
    open() {
      this.isOpen = true;
      this.isTransparent = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    },
    updateHeaderHeight() {
      if (this.$refs.header)
        this.style.height = this.$refs.header.clientHeight;
    },
  },
};
</script>

<style lang="sass">
$navbar-height: 128px

.app-navbar.mobile
  position: absolute
  width: 100%
  padding: 0 32px
  transition: background-color .1s
  
  +d-flex(center, space-between)

  .app-logo
    +size(64px)

  .menu-button i
    font-size: 48px

.app-navbar.mobile.open
  .menu-button
    color: $c-white

.app-navbar.mobile.sticky
  position: fixed
  top: 0
  background-color: $c-white

.app-navbar.mobile.transparent
  background-color: transparent

.menu
  $padding: 32px

  font-size: 24pt 
  background-color: rgba($c-primary, .8)
  overflow-x: hidden
  overflow-y: auto

  +no-scrollbar
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

.navbar-wrapper.mobile
  .slide-enter, .slide-leave-to
    right: 100%

  .slide-enter-active, .slide-leave-active
    transition: right .25s cubic-bezier(0.86, 0, 0.07, 1)
</style>
