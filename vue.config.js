// vue.config.js
module.exports = {
  transpileDependencies: [/\bvue-awesome\b/],
  chainWebpack(config) {
    config.plugins.delete('preload') 
    config.plugins.delete('prefetch') 
  }
};
