<template>
  <div class="portfolio desktop">
    <app-project :project="projects[0]" />
  </div>
</template>

<script>
import Project from '@components/Project/Desktop';

export default {
  components: {
    'app-project': Project,
  },
  data() {
    return {
      projects: [
        {
          client: {
            name: 'Lorem Ipsum',
            description:
              'Aenean sapien nisl, iaculis non blandit id, interdum placerat risus. Sed et enim sit amet justo lacinia blandit vel eu arcu. Morbi semper pharetra elit sit amet vulputate. Pellentesque tortor tortor, imperdiet id dapibus id.',
          },
          tags: [
            'iaculis',
            'non',
            'blandit',
            'id',
            'interdum',
            'placerat',
            'risus',
          ],
          problem:
            'Praesent rutrum mattis mauris, in pretium nisi dictum quis. Suspendisse ex quam, tempor vitae rutrum posuere, vestibulum sodales tellus. Suspendisse laoreet, velit vitae ultricies mollis, velit tortor pretium lorem, non sodales purus magna egestas enim. Etiam fermentum aliquet varius. Cras congue eros enim, ac condimentum.',
          solution:
            'Nulla bibendum est ac magna pellentesque, sit amet tempor magna aliquam. Donec vehicula justo eu efficitur consectetur. Suspendisse eu leo eros.',
          mainImage: require('@images/home/portfolio_1.png'),
          images: [
            require('@images/home/portfolio_2.png'),
            require('@images/home/portfolio_3.png'),
            require('@images/home/portfolio_4.png'),
            require('@images/home/portfolio_5.png'),
          ],
        },
      ],
    };
  },
};
</script>
