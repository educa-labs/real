<template>
  <div :class="['app-project desktop', `type-${type}`]">
    <div 
      :style="{ 'background-image': `url(${project.mainImage})` }" 
      class="image main"
    />

    <div class="content">
      <div class="navigation">
        <button 
          type="button" 
          class="prev"
          @click="$emit('previous')"
        >
          Anterior
        </button>

        <button 
          type="button" 
          class="next"
          @click="$emit('next')"
        >
          Siguiente
        </button>
      </div>

      <div class="client">
        <div class="title">{{ project.client.name }}</div>

        <p>{{ project.description }}</p>
      </div>

      <div class="tags">
        <span 
          v-for="(tag, index) in project.tags" 
          :key="`tag-${index}`"
        >
          {{ `#${tag}${index &lt; project.tags.length - 1 ? ', ' : '' }` }}
        </span>
      </div>
      <div class="problem">
        <div class="title">Problemática</div>

        <p>{{ project.problem }}</p>
      </div>

      <div class="solution">
        <div class="title">Solución</div>

        <p>{{ project.solution }}</p>
      </div>
    </div>

    <app-type-0 :images="project.images" />
  </div>
</template>

<script>
import Type0 from '@components/Project/Type0';

export default {
  components: {
    'app-type-0': Type0,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    type: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="sass">
.app-project.desktop .image.main
  height: 750px
  width: 100%

  +background-image

.app-project.desktop .content
  display: grid
  grid-template-rows: repeat(2, 1fr)
  grid-template-columns: repeat(3, 1fr)
  grid-template-areas: "navigation client problem" ". tags solution"
  grid-gap: 32px
  margin: 0 auto

  .navigation
    grid-area: navigation
    align-self: start

    +d-flex(center, center)

    button
      font-size: $f-size-md
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
    font-size: $f-size-md
    font-weight: 700
    border-bottom: 1px solid $c-black

.app-project.desktop .project-images
  .image-wrapper
    margin-bottom: 64px

=styling($content-max-width, $content-padding)
  .app-project.desktop .content
    max-width: $content-max-width
    padding: $content-padding

+media-up(lg)
  +styling($content-max-width: $breakpoint-lg, $content-padding: 64px 32px)

+media-up(xl)
  +styling($content-max-width: $breakpoint-xl, $content-padding: 64px)
</style>
