(function () {
  "use strict";
  module.exports.getTask = function (gulp, plugins, configs, dest, files, rename) {
    return function () {
      var copyHelper;
      if (!rename) {
        copyHelper = require('./copy_task_helper.js');
        rename     = copyHelper.renameFunc;
      }
      return gulp.src(files)
                 .pipe(plugins.rename(rename))
                 .pipe(plugins.angularHtmlify())
                 .pipe(plugins.htmlmin(configs.htmlminOptions))
                 .pipe(gulp.dest(dest));
    };
  };
}());
