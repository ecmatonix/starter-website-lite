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