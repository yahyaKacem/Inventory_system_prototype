(function () {
  "use strict";
  module.exports.getTask = function (gulp, jshint, editorFilesToLint) {
    return function () {
      return gulp.src(editorFilesToLint)
                 .pipe(jshint('.jshintrc'))
                 .pipe(jshint.reporter('jshint-stylish'));
    };
  };
}());
