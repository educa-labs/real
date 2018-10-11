<template>
  <div class="app-contact">
    <div>
      <h1>Mantengamos la comunicación</h1>
    </div>
    <div>
      <div>
        <div class="e-mail">{{eMail}}</div>
        <div>{{ addressA }}</div>
        <div>{{ addressB }}</div>
        <div>{{ city }}</div>
        <div class="cell-phone">{{ cellPhone }}</div>
      </div>
      <app-social-media/>
    </div>
  </div>
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
      eMail: 'hola@somosreal.cl',
    }
  }
}
</script>

<style lang="sass">
.app-contact
  display: grid
  grid-template-columns: 1fr 1fr
  height: 100vh

.app-contact > div:nth-child(1)
  color: $c-white
  background-color: $c-primary

  +d-flex(center, flex-end)

  h1
    margin-right: 64px

.app-contact > div:nth-child(2)
  $items-margin: 20px

  flex-direction: column
  padding: 32px 64px
  color: $c-primary
  background-color: $c-white

  +d-flex(center, flex-end)

  .e-mail
    margin-bottom: $items-margin
    
  .cell-phone
    margin-top: $items-margin

  & > div:first-child
    margin-bottom: 64px

  & > .app-social-media
    align-self: flex-end

    img
      +size(64px)
</style>

