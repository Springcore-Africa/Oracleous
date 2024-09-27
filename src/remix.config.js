const path = require('path');

module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/dist', // Change to 'dist'
  publicPath: '/dist/', // Change to '/dist/'
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Example alias
      },
    },
  },
};