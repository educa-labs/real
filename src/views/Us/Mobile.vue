<template>
  <div class="app-us mobile">
    <h1>Quienes somos</h1>

    <app-designer 
      v-for="(designer, index) in designers" 
      v-if="selected === index" 
      :key="`designer-${index}`" 
      :designer="designer" 
      @close="selected = null"
    />

    <app-composed 
      :designers="designers" 
      @click="selectDesigner"
    />
  </div>
</template>

<script>
import Composed from '@components/Composed/Mobile';
import Designer from '@components/Designer/Mobile';

export default {
  components: {
    'app-composed': Composed,
    'app-designer': Designer,
  },
  data() {
    return {
      designers: [
        {
          nickname: 'Peli',
          description:
            'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_1.png'),
          eMail: 'peli@somosreal.cl',
        },
        {
          nickname: 'Cintia',
          description:
            'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_2.png'),
          eMail: 'cintia@somosreal.cl',
        },
        {
          nickname: 'Ferni',
          description:
            'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_3.png'),
          eMail: 'ferni@somosreal.cl',
        },
        {
          nickname: 'Trini',
          description:
            'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_4.png'),
          eMail: 'trini@somosreal.cl',
        },
      ],
      selected: 0,
    };
  },
  methods: {
    selectDesigner(index) {
      this.selected = index;

      this.$nextTick(() =>
        this.$scrollTo('.app-designer', 1000, { offset: -128, })
      );
    },
  },
};
</script>

<style lang="sass">
.app-us.mobile
  padding-top: 128px

  h1
    padding-left: 48px
</style>
