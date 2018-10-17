<template>
  <div class="app-us">
    <div class="designer-wrapper">
      <transition name="fade" mode="out-in">
        <app-designer
          v-if="selected === index"
          v-for="(designer, index) in designers"
          :key="`designer-${index}`"
          :designer="designer"
        />
      </transition>
    </div>
    <app-composed :designers="designers" @click="selectDesigner"/>
    <app-footer/>
  </div>
</template>

<script>
import Composed from '@components/Composed';
import Designer from '@components/Designer';
import Footer from '@components/Footer';

export default {
  components: {
    'app-composed': Composed,
    'app-designer': Designer,
    'app-footer': Footer,
  },
  data() {
    return {
      designers: [
        {
          nickname: 'Peli',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_1.png'),
          eMail: 'peli@somosreal.cl',
        },
        {
          nickname: 'Cintia',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_2.png'),
          eMail: 'cintia@somosreal.cl',
        },
        {
          nickname: 'Ferni',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_3.png'),
          eMail: 'ferni@somosreal.cl',
        },
        {
          nickname: 'Trini',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/home/portfolio_4.png'),
          eMail: 'trini@somosreal.cl',
        }
      ],
      selected: 0,
    }
  },
  methods: {
    selectDesigner(index) {
      this.selected = index

      this.$scrollTo('.designer-wrapper');
    }
  }
}
</script>

<style lang="sass">
.designer-wrapper
  padding: 32px 192px 32px 128px

  .fade-enter, .fade-leave-to
    opacity: 0

  .fade-enter-active, .fade-leave-active
    transition: opacity .1s
</style>
