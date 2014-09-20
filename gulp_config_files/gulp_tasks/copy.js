(function () {
  "use strict";
  module.exports.getTask = function (gulp, rename, dest, files) {
    var copyHelper = require('./copy_task_helper.js');
    return function () {
      return gulp.src(files)
                 .pipe(rename(copyHelper.copyRenameFunc))
                 .pipe(gulp.dest(dest));
    };
  };
}());
