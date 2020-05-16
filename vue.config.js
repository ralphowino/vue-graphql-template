/* eslint-disable no-param-reassign */

module.exports = {
  chainWebpack: (config) => {
    config.module.rule('eslint')
      .use('eslint-loader')
      .tap((options) => {
        if (options) {
          options.fix = true;
        }
        return options;
      });

    config.plugin('provide')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{
        _: 'lodash',
        moment: 'moment',
      }]);

    config.plugin('ignore')
      .use(require.resolve('webpack/lib/IgnorePlugin'), [{
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }]);
  },
  lintOnSave: true,
};
