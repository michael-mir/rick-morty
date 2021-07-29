const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = url => path.resolve(appDirectory, url);

module.exports = {
  resolvePath,
  src: resolvePath('src'),
  build: resolvePath('dist'),
  public: resolvePath('public'),
  assets: resolvePath('src/assets'),
  html: resolvePath('src/index.html'),
  indexJs: resolvePath('src/index.js'),
}
