/*!
  * Copyright (c) 2019 Anton Lykov
  * Licensed under MIT (https://github.com/ecmatonix/starter-website-lite/blob/master/LICENSE)
  */
const browserSync = require("browser-sync").create();

function defaultTask(cb) {
  const baseDir = "./public/";

  browserSync.watch(baseDir + "**/*.*").on("change", browserSync.reload);

  browserSync.init({
    server: {
      baseDir: baseDir
    },
    port: 3000,
    online: false,
    open: false
  });

  cb();
}

exports.default = defaultTask