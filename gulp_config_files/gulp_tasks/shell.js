(function () {
  "use strict";
  module.exports.getTask = function (gulp, shell, command) {
    return function () {
      return gulp.src('')
                 .pipe(shell(command));
    };
  };
}());
