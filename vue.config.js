const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@API': path.resolve(__dirname, 'src/API'),
        '@router': path.resolve(__dirname, 'src/router/router'),
        '@store': path.resolve(__dirname, 'src/store/store'),

        '@components': path.resolve(__dirname, 'src/components'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
        '@views': path.resolve(__dirname, 'src/views'),

        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@javascripts': path.resolve(__dirname, 'src/assets/javascripts'),
        '@stylesheets': path.resolve(__dirname, 'src/assets/stylesheets'),
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

  lintOnSave: undefined,
};
