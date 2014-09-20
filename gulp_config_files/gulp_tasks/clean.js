(function () {
  "use strict";
  module.exports.getTask = function (dir) {
    var rimraf = require("rimraf");
    return function (cb) {
      rimraf(dir, cb);
    };
  };
}());
