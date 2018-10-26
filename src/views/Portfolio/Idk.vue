<template>
  <div>
    <app-filter @change="(filters) => this.filters = filters" />
    <transition-group 
      v-if="this.fetched" 
      :style="{ height: `${size * Math.ceil(projects.length / columns)}px` }" 
      class="unknown" 
      name="list" 
      tag="div"
    >
      <router-link 
        v-for="(project, i) in projects" 
        :key="`project-${i}`" 
        :to="`portfolio/${project.id}`"
      >
        <div 
          :style="{
            width: `${size}px`,
            height: `${size}px`,
            'background-image': `url(${project.mainImage})`,
            transform: `translate3d(${size * (i % columns)}px, ${size * Math.floor(i / columns)}px, 0px)`
          }" 
          class="project"
        />
      </router-link>
    </transition-group>
  </div>
</template>

<script>
import verge from 'verge';

import { remote, } from '@mixins';

import Project from '@components/Project/Desktop';
import Filter from './Filter';

export default {
  components: {
    'app-project': Project,
    'app-filter': Filter,
  },
  mixins: [remote,],
  data() {
    return {
      filters: {},

      // Grid
      breakpoints: [0, 1100, 1500, Infinity,],
      columns: NaN,
      viewportWidth: NaN,

      // Resizing
      isResizing: false,
      resizeTimer: null,
    };
  },
  computed: {
    size() {
      return Math.floor(this.viewportWidth / this.columns);
    },
    projects() {
      if (this.$_.isEmpty(this.filters)) return this.response;

      const intersection = (a, b) => a.filter(value => -1 !== b.indexOf(value));

      return this.response.filter(project => {
        for (let [key, items,] of Object.entries(this.filters)) {
          if (intersection(project.tags, items).length > 0) {
            return true;
          }
        }
      });
    },
  },
  mounted() {
    this.handleResize();

    this.$nextTick(() => {
      window.addEventListener('resize', this._handleResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._handleResize);
  },
  methods: {
    query() {
      return this.$API.projects();
    },
    _handleResize() {
      this.isResizing = true;

      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.handleResize();

        this.isResizing = false;
      }, 250);
    },
    handleResize() {
      const viewportWidth = verge.viewportW();

      for (let i = 0; i < this.breakpoints.length - 1; i++) {
        if (
          this.breakpoints[i] < viewportWidth &&
          viewportWidth < this.breakpoints[i + 1]
        ) {
          this.columns = i + 2;
          this.viewportWidth = viewportWidth;
        }
      }
    },
  },
};
</script>

<style lang="sass">
$navbar-height: 96px

.unknown
  position: relative
  margin-top: $navbar-height

.project
  position: absolute
  top: 0
  left: 0

  +background-image
  transition: transform .75s cubic-bezier(0.77, 0, 0.175, 1)

.list-enter-active, .list-leave-active 
  transition: all 1s

.list-enter, .list-leave-to
  opacity: 0

.filter
  margin-left: 256px
</style>
