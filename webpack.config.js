const path = require("path");

module.exports = {
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [['es2015', {modules: false}]],
      plugins: ['syntax-dynamic-import']
    }
  }]
};
