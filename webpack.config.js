const path = require('path');

module.exports = {
  entry: './src/mainPage.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets')
  },
 module: {
   rules: [
     {
       test: '.png',
       type: 'asset/resource'
     }
   ]
 },
};