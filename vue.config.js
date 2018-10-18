const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@javascripts': path.resolve(__dirname, 'src/assets/javascripts'),
        '@stylesheets': path.resolve(__dirname, 'src/assets/stylesheets'),

        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),

        '@router': path.resolve(__dirname, 'src/router/router'),
        '@store': path.resolve(__dirname, 'src/store/store'),
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, 'src/assets/stylesheets/lib/index.sass'),
      ],
    },
  },
};
