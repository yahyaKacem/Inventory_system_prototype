(function () {
  "use strict";
  module.exports.getDirectories = function () {
    var srcDir, appDir, libsDir, distDir, docsDir, buildDir;
    srcDir    = "src";
    distDir   = "dist";
    docsDir   = "docs";
    buildDir  = "build";
    appDir    = srcDir + "/app";
    libsDir   = srcDir + "/libs";
    return {
      "srcDir":   srcDir,
      "docsDir":  docsDir,
      "distDir":  distDir,
      "buildDir": buildDir,
      "src": {
        "appDir":             appDir,
        "libsDir":            libsDir,
        "sassDir":            srcDir  + "/sass",
        "scssDir":            srcDir  + "/scss",
        "tplsDir":            srcDir  + "/tpls",
        "testsDir":           srcDir  + "/tests",
        "imagesDir":          srcDir  + "/images",
        "angularDir":         libsDir + "/angular",
        "requireJsDir":       libsDir + "/requirejs",
        "underscoreDir":      libsDir + "/underscore",
        "controllersDir":     appDir  + "/controllers",
        "jqueryDir":          libsDir + "/jquery/dist",
        "angularMocksDir":    libsDir + "/angular-mocks",
        "angularAnimateDir":  libsDir + "/angular-animate",
        "angularSanitizeDir": libsDir + "/angular-sanitize",
        "headJsDir":          libsDir + "/headjs/dist/1.0.0"
      },
      "build": {
        "jsDir":     buildDir + "/js",
        "cssDir":    buildDir + "/css",
        "libsDir":   buildDir + "/libs",
        "tplsDir":   buildDir + "/tpls",
        "fontsDir":  buildDir + "/fonts",
        "imagesDir": buildDir + "/images"
      },
      "dist": {
        "jsDir":     distDir + "/js",
        "cssDir":    distDir + "/css",
        "libsDir":   distDir + "/libs",
        "tplsDir":   distDir + "/tpls",
        "fontsDir":  distDir + "/fonts",
        "imagesDir": distDir + "/images"
      }
    };
  };
}());
