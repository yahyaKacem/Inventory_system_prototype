(function () {
  "use strict";
  module.exports.getCommands = function (directories) {
    return {
      convertSassToScssCommand: 'sass-convert -F sass -T scss -R ' + directories.src.sassDir + ' ' + directories.src.scssDir
    };
  };
}());
