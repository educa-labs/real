<template>
  <div class="app-portfolio mobile">
    <h1>Trabajos</h1>

    <div 
      v-for="(project, index) in projects" 
      :key="`project-${index}`" 
      class="app-project mobile"
    >
      <div 
        :style="{ 'background-image': `url(${project.image})` }" 
        class="image" 
        @click="open = open !== index ? index : null"
      />

      <div 
        ref="descriptionsWrappers" 
        class="descriptionWrapper"
      >
        <div 
          ref="descriptions" 
          class="description"
        >
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: require('@images/home/portfolio_1.png'),
          description:
            'Mauris risus risus, ullamcorper eget neque non, rutrum ullamcorper nisl. Suspendisse consequat dignissim sem, nec sagittis tortor pellentesque in.',
          animation: null,
        },
        {
          image: require('@images/home/portfolio_2.png'),
          description:
            'Donec laoreet porta sapien et fermentum. Etiam tristique ligula vel mattis hendrerit. Mauris maximus varius libero eget interdum. Nullam pulvinar lobortis risus vitae pulvinar.',
          animation: null,
        },
        {
          image: require('@images/home/portfolio_3.png'),
          description:
            'Donec laoreet porta sapien et fermentum. Etiam tristique ligula vel mattis hendrerit. Mauris maximus varius libero eget interdum. Nullam pulvinar lobortis risus vitae pulvinar.',
          animation: null,
        },
      ],
      open: null,
    };
  },
  watch: {
    open(newValue, oldValue) {
      oldValue !== null && this.animateClosure(oldValue);
      newValue !== null && this.animateOpening(newValue);
    },
  },
  methods: {
    animateOpening(index) {
      const project = this.projects[index];
      project.animation && project.animation.pause();

      const descriptionWrapper = this.$refs.descriptionsWrappers[index];

      const description = this.$refs.descriptions[index];
      const { height, } = description.getBoundingClientRect();

      project.animation = this.$a({
        targets: descriptionWrapper,
        duration: 500,
        easing: 'easeInOutQuad',
        height: [0, height,],
      });
    },
    animateClosure(index) {
      const project = this.projects[index];
      project.animation && project.animation.pause();

      const descriptionWrapper = this.$refs.descriptionsWrappers[index];
      const { height, } = descriptionWrapper.getBoundingClientRect();

      project.animation = this.$a({
        targets: descriptionWrapper,
        duration: 500,
        easing: 'easeInOutQuad',
        height: [height, 0,],
      });
    },
  },
};
</script>

<style lang="sass">
.app-portfolio.mobile
  h1
    width: 100%
    padding-left: 48px
    margin-bottom: 48px

.app-project.mobile
  .image
    width: 100%
    height: 200px

    +background-image

.app-project.mobile
  .descriptionWrapper
    font-family: $f-family-secondary
    font-size: $f-size-md
    height: 0
    overflow: hidden
  
  .description
    padding: 32px
</style>
