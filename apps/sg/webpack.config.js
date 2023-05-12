/*Customized 
https://nx.dev/packages/webpack/documents/webpack-plugins#withmodulefederation-and-withmodulefederationforssr*/

Object.defineProperty(exports, '__esModule', { value: true });
const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const withModuleFederation = require('@nx/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const BrotliPlugin = require(`brotli-webpack-plugin`);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = composePlugins(
  withNx(),
  withReact(),
  /* withModuleFederation({
    ...moduleFederationConfig
    }),  */
  (config) => {
    // Further customize webpack config

    //config = fromModuleFederation(config, context);
    if (config?.mode === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          filename: `[path][base].gz[query]`,
          algorithm: `gzip`,
          test: /\.js$|\.css$|\.html$/,
          threshold: 0,
          minRatio: 0.7,
        }),
        new BrotliPlugin({
          asset: `[path].br[query]`,
          test: /\.js$|\.css$|\.html$/,
          threshold: 0,
          minRatio: 0.7,
        })
      );
    
    }
    config.node = undefined;

    return config;
  }
);

function addCompressionPlugins() {

}
