const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, 'src/assets/stylesheets/index.sass'),
        path.resolve(__dirname, 'src/assets/stylesheets/lib/index.sass'),
      ],
    },
  },
};
