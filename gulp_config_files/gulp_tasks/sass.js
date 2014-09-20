(function () {
  "use strict";
  module.exports.getTask = function (gulp, sass, sassConfig, dest, files) {
    return function () {
      return gulp.src(files)
                 .pipe(sass(sassConfig))
                 .pipe(gulp.dest(dest));
    };
  };
}());
