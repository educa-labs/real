import axios from 'axios';

const API = {
  url: '',

  designers() {
    return new Promise(resolve => {
      const designers = [
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
      ];

      resolve(designers);
    });
  },

  projects(id) {
    const projects = [
      {
        id: 1,
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
          'Campañas',
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
        mainImage: require('@images/home/portfolio_2.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
        mainImage: require('@images/home/portfolio_3.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
          'Campañas',
        ],
        problem:
          'Praesent rutrum mattis mauris, in pretium nisi dictum quis. Suspendisse ex quam, tempor vitae rutrum posuere, vestibulum sodales tellus. Suspendisse laoreet, velit vitae ultricies mollis, velit tortor pretium lorem, non sodales purus magna egestas enim. Etiam fermentum aliquet varius. Cras congue eros enim, ac condimentum.',
        solution:
          'Nulla bibendum est ac magna pellentesque, sit amet tempor magna aliquam. Donec vehicula justo eu efficitur consectetur. Suspendisse eu leo eros.',
        mainImage: require('@images/home/portfolio_4.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
        mainImage: require('@images/home/portfolio_5.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
        mainImage: require('@images/home/portfolio_7.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
        mainImage: require('@images/home/portfolio_8.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
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
        mainImage: require('@images/home/portfolio_9.png'),
        images: [
          require('@images/home/portfolio_2.png'),
          require('@images/home/portfolio_3.png'),
          require('@images/home/portfolio_4.png'),
          require('@images/home/portfolio_5.png'),
        ],
      },
    ];

    if (id) {
      return new Promise(resolve => {
        resolve(projects[id]);
      });
    } else {
      return new Promise(resolve => {
        resolve(projects);
      });
    }
  },
};

export default API;

//     axios
//       .get(`${API.url}/designers/${id}`)
//       .then(response => resolve(response.body))
//       .catch(error => reject(error));
