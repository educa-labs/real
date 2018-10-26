<template>
  <div 
    v-if="this.fetched" 
    class="portfolio desktop"
  >
    <app-project 
      :project="response" 
      @previous="goToPrevious" 
      @next="goToNext"
    />
  </div>
</template>

<script>
import { remote, } from '@mixins';

import Project from '@components/Project/Desktop';

export default {
  components: {
    'app-project': Project,
  },
  mixins: [remote,],
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    query() {
      return this.$API.projects(this.id);
    },
    goToProject(id) {
      this.$router.push({ name: 'portfolio', params: { id, }, });
    },
    goToPrevious() {
      this.goToProject(this.id - 1);
    },
    goToNext() {
      this.goToProject(this.id + 1);
    },

  },
};
</script>
