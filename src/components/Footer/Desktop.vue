<template>
  <footer class="app-footer">
    <div>
      <div class="e-mail">{{eMail}}</div>
      <app-social-media/>
    </div>
    <div>
      <div>{{ addressA }}</div>
      <div>{{ addressB }}</div>
      <div>{{ city }}</div>
      <div>{{ country }}</div>
    </div>
    <div>
      <div>{{ cellPhone }}</div>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '@components/SocialMedia';

export default {
  components: {
    'app-social-media': SocialMedia,
  },
  data() {
    return {
      addressA: 'Máximo Jeria 655',
      addressB: 'Casa B, Ñuñoa',
      cellPhone: '56229816946',
      city: 'Santiago',
      country: 'Chile',
      eMail: 'hola@somosreal.cl',
    }
  }
}
</script>

<style lang="sass">
.app-footer
  display: grid
  grid-template-columns: repeat(3, 1fr)
  justify-items: center
  font-size: 14pt
  font-weight: 700

  .e-mail
    margin-bottom: 32px
</style>
