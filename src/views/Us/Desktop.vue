<template>
  <div class="app-us desktop">
    <div class="designer-wrapper">
      <transition 
        name="fade" 
        mode="out-in"
      >
        <app-designer 
          v-for="(designer, index) in designers" 
          v-if="selected === index" 
          :key="`designer-${index}`" 
          :designer="designer"
        />
      </transition>
    </div>

    <app-composed 
      :designers="designers" 
      @click="selectDesigner"
    />
  </div>
</template>

<script>
import Composed from '@components/Composed/Desktop';
import Designer from '@components/Designer/Desktop';

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

      this.$scrollTo('.designer-wrapper');
    },
  },
};
</script>

<style lang="sass">
.app-us.desktop
  .designer-wrapper
    .fade-enter, .fade-leave-to
      opacity: .1

    .fade-enter-active
      transition: opacity .5s cubic-bezier(0.645, 0.045, 0.355, 1)

    .fade-leave-active
      transition: opacity .75s cubic-bezier(0.645, 0.045, 0.355, 1)

=styling($margin, $padding)
  .app-us.desktop
    .designer-wrapper
      margin: $margin
      padding: $padding

+media-up(md)
  +styling($margin: 32px 0 32px, $padding: 0 32px)

+media-up(xl)
  +styling($margin: 32px 0 32px, $padding: 0 64px 0 64px)
</style>
