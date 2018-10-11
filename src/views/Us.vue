<template>
  <div class="app-us">
    <div class="designer">
      <div class="nickname">{{designer.nickname}}</div>
      <div class="description">{{designer.description}}</div>
      <div :style="{ 'background-color': `url(${designer.image}}])` }" class="image"/>
      <div class="e-mail">{{ designer.eMail }}</div>
      <app-social-media/>
    </div>
    <app-composed @click="selectDesigner"/>
    <app-footer/>
  </div>
</template>

<script>
import Composed from '@components/Composed';
import Footer from '@components/Footer';
import SocialMedia from '@components/SocialMedia';

export default {
  components: {
    'app-composed': Composed,
    'app-footer': Footer,
    'app-social-media': SocialMedia,
  },
  data() {
    return {
      designers: [
        {
          nickname: 'Peli',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/image.jpg'),
          eMail: 'peli@somosreal.cl',
        },
        {
          nickname: 'Cintia',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/image.jpg'),
          eMail: 'cintia@somosreal.cl',
        },
        {
          nickname: 'Ferni',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/image.jpg'),
          eMail: 'ferni@somosreal.cl',
        },
        {
          nickname: 'Trini',
          description: 'Pellentesque a tempor mi. Sed orci purus, ullamcorper sit amet feugiat sit amet, posuere eu dolor. Integer a diam ipsum. Nulla facilisi. Etiam id vehicula urna. Cras interdum tellus et leo bibendum, vel dignissim lorem rutrum. Aliquam auctor suscipit mauris, feugiat sagittis nunc facilisis in. Mauris leo est, pulvinar ut rhoncus vitae.',
          image: require('@images/image.jpg'),
          eMail: 'trini@somosreal.cl',
        }
      ],
      selected: 0,
    }
  },
  computed: {
    designer() {
      return this.designers[this.selected];
    }
  },
  methods: {
    selectDesigner(index) {
      this.selected = index
    }
  }
}
</script>
