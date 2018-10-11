<template>
  <div class="app-home">
    <app-hero/>
    <app-quote/>
    <app-skills/>
    <app-gallery/>
    <app-footer/>
  </div>
</template>

<script>
import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Hero from '@components/Hero';
import Quote from '@components/Quote';
import Skills from '@components/Skills';

export default {
  components: {
    'app-footer': Footer,
    'app-gallery': Gallery,
    'app-hero': Hero,
    'app-quote': Quote,
    'app-skills': Skills,
  }
}
</script>
