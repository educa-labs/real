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
};

export default API;

// designers(id) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`${API.url}/designers/${id}`)
//       .then(response => resolve(response.body))
//       .catch(error => reject(error));
//   });
// },
