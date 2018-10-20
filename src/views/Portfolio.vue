<template>
  <div :class="['app-portfolio', `type-${type}`]">
    <div :style="{ 'background-image': `url(${mainImage})` }" class="image main" />

    <div class="content">
      <div class="navigation">
        <button type="button" class="prev">Anterior</button>
        <button type="button" class="next">Siguiente</button>
      </div>

      <div class="client">
        <div class="title">{{ client.name }}</div>

        <p>{{ description }}</p>
      </div>

      <div class="tags">
        <span v-for="(tag, index) in tags" :key="`tag-${index}`">{{ `#${tag}${index < tags.length - 1 && ', '}` }}</span>
      </div>

      <div class="problem">
        <div class="title">Problemática</div>

        <p>{{ problem }}</p>
      </div>

      <div class="solution">
        <div class="title">Solución</div>

        <p>{{ solution }}</p>
      </div>
    </div>

    <app-type-0 :images="images" /> 
  </div>
</template>

<script>
import Type0 from '@components/Project/Type0';

export default {
  components: {
    'app-type-0': Type0,
  },
  props: {
    type: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      client: {
        name: 'Lorem Ipsum',
        description: 'Aenean sapien nisl, iaculis non blandit id, interdum placerat risus. Sed et enim sit amet justo lacinia blandit vel eu arcu. Morbi semper pharetra elit sit amet vulputate. Pellentesque tortor tortor, imperdiet id dapibus id.',
      },
      tags: ['iaculis', 'non', 'blandit', 'id', 'interdum', 'placerat', 'risus'],
      problem: 'Praesent rutrum mattis mauris, in pretium nisi dictum quis. Suspendisse ex quam, tempor vitae rutrum posuere, vestibulum sodales tellus. Suspendisse laoreet, velit vitae ultricies mollis, velit tortor pretium lorem, non sodales purus magna egestas enim. Etiam fermentum aliquet varius. Cras congue eros enim, ac condimentum.',
      solution: 'Nulla bibendum est ac magna pellentesque, sit amet tempor magna aliquam. Donec vehicula justo eu efficitur consectetur. Suspendisse eu leo eros.',
      mainImage: require('@images/home/portfolio_1.png'),
      images: [
        require('@images/home/portfolio_2.png'),
        require('@images/home/portfolio_3.png'),
        require('@images/home/portfolio_4.png'),
        require('@images/home/portfolio_5.png'),
      ],
    }
  }
}
</script>

<style lang="sass">
.app-portfolio .image
  height: 750px
  width: 100%

  +background-image

.app-portfolio .content
  display: grid
  grid-template-rows: repeat(2, 1fr)
  grid-template-columns: repeat(3, 1fr)
  grid-template-areas: "navigation client problem" ". tags solution"
  padding: 64px

  .navigation
    grid-area: navigation
    align-self: start

    +d-flex(center, center)

    button
      font-size: 15pt
      font-weight: 700
      color: $c-primary
      margin-right: 16px
    
    button:last-child
      margin-right: 0

  .client
    grid-area: client

  .tags
    grid-area: tags

  .problem
    grid-area: problem

  .solution
    grid-area: solution

  .title
    font-size: 15pt
    font-weight: 700
    border-bottom: 1px solid $c-black

.app-portfolio .project-images
  .image-wrapper
    margin-bottom: 64px
</style>
