(function () {
  "use strict";
  module.exports.getTask = function (gulp, files) {
    return function () {
      gulp.watch(files.filesToLint,     ['lint'       ]);
      gulp.watch(files.jsFiles,         ['copyJs'     ]);
      gulp.watch(files.nonMinifiedLibs, ['copyLibs'   ]);
      gulp.watch(files.indexFile,       ['indexFile'  ]);
      gulp.watch(files.fontsFiles,      ['copyFonts'  ]);
      gulp.watch(files.sassFiles,       ['sassBuild'  ]);
      gulp.watch(files.imagesFiles,     ['copyImages' ]);
      gulp.watch(files.tplsFiles,       ['htmlminTpls']);
    };
  };
}());
