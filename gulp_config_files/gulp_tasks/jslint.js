(function () {
  "use strict";
  module.exports.getTask = function (gulp, jslint, editorFilesToLint, jslintConfig) {
    return function () {
      return gulp.src(editorFilesToLint)
                 .pipe(jslint(jslintConfig));
    };
  };
}());
