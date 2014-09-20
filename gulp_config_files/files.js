(function () {
  "use strict";
  module.exports.getFiles = function (directories) {
    var
      appDir, libsDir, tplsDir, sassDir, scssDir, ctrlsDir, headJsDir,
      imagesDir, jqueryDir, angularDir, requireJsDir, underscoreDir,
      angularMocksDir, angularAnimateDir, angularSanitizeDir;
    appDir             = directories.src.appDir;
    libsDir            = directories.src.libsDir;
    tplsDir            = directories.src.tplsDir;
    sassDir            = directories.src.sassDir;
    scssDir            = directories.src.scssDir;
    imagesDir          = directories.src.imagesDir;
    headJsDir          = directories.src.headJsDir;
    jqueryDir          = directories.src.jqueryDir;
    angularDir         = directories.src.angularDir;
    requireJsDir       = directories.src.requireJsDir;
    underscoreDir      = directories.src.underscoreDir;
    ctrlsDir           = directories.src.controllersDir;
    angularMocksDir    = directories.src.angularMocksDir;
    angularAnimateDir  = directories.src.angularAnimateDir;
    angularSanitizeDir = directories.src.angularSanitizeDir;
    return {
      "destIndexFile": "index.html",
      "indexFile": tplsDir + "/index.tpls.html",
      "configJsFiles": ["Gruntfile.js", "config/*"],
      "configJsonFiles": ["Gruntfile.json", "package.json", "bower.json"],
      "imagesFiles": imagesDir + "/*",
      "filesToLint": [
        appDir + "/**/*.js",
        "!" + appDir + "/boot.js",
        "!" + appDir + "/prod_boot.js",
        "!" + appDir + "/**/*.specs.js"
      ],
      "jsFiles": [
        ctrlsDir + "/*.js",
        appDir   + "/boot.js",
        appDir   + "/app.*.js"
      ],
      "fontsFiles": [
        libsDir + "/Font-Awesome/fonts/*",
        libsDir + "/sass-bootstrap/fonts/*"
      ],
      "minifiedLibs": [
        requireJsDir       + "/require.js",
        headJsDir          + "/head.min.js",
        jqueryDir          + "/jquery.min.js",
        underscoreDir      + "/underscore.js",
        angularDir         + "/angular.min.js",
        angularSanitizeDir + "/angular-sanitize.js",
        angularAnimateDir  + "/angular-animate.min.js"
      ],
      "nonMinifiedLibs": [
        headJsDir          + "/head.js",
        jqueryDir          + "/jquery.js",
        angularDir         + "/angular.js",
        requireJsDir       + "/require.js",
        underscoreDir      + "/underscore.js",
        angularMocksDir    + "/angular-mocks.js",
        angularAnimateDir  + "/angular-animate.js",
        angularSanitizeDir + "/angular-sanitize.js"
      ],
      "requireJsPaths": {
        "app":      appDir   + "/app.main",
        "config":   appDir   + "/app.config",
        "MainCtrl": ctrlsDir + "/main.controller"
      },
      "tplsFiles": [
        tplsDir + "/*.tpls.html",
        "!" + tplsDir + "/index.tpls.html"
      ],
      "allScssFiles": [scssDir + "/*.scss"],
      "sassFiles":    [sassDir + "/*.sass"],
      "scssFiles":    [scssDir + "/*.scss"],
      "libsSassFiles": [
        libsDir + "/compass-mixins/lib/compass/**/*",
        libsDir + "/sass-bootstrap/**/*",
        libsDir + "/Font-Awesome/**/*"
      ]
    };
  };
}());
