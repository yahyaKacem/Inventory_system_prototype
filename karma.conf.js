/*global module:false*/
// Karma configuration
// Generated on Sun Jan 26 2014 21:04:13 GMT+0100 (CET)
module.exports = function (config) {
  "use strict";
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',
    // frameworks to use
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'build/libs/jquery.js',
      'build/libs/underscore.js',
      'build/libs/screenfull.js',
      'build/libs/angular.js',
      'build/libs/angular-mocks.js',
      // 'build/libs/angular-animate/angular-animate.js',
      'public/tests/utils/browsertrigger.js',
      "build/js/app.components.js",
      "build/js/status_bar.app.js",
      "build/js/status_bar.directives.js",
      "build/js/status_bar.controllers.js",
      "build/js/status_bar.directive.js",
      "build/js/status_bar.controller.js",
      "build/js/fullscreen_btn.app.js",
      "build/js/fullscreen_btn.directives.js",
      "build/js/fullscreen_btn.directive.js",
      "build/js/slide_toggle.app.js",
      "build/js/slide_toggle.directives.js",
      "build/js/slide_toggle.directive.js",
      "build/js/slide_toggle.controllers.js",
      "build/js/slide_toggle.controller.js",
      "build/js/navbar.app.js",
      "build/js/navbar.controllers.js",
      "build/js/navbar.controller.js",
      "build/js/note_editor.app.js",
      "build/js/note_editor.directives.js",
      "build/js/note_editor.directive.js",
      "build/js/note_editor.controllers.js",
      "build/js/note_editor.controller.js",
      "build/js/main.app.js",
      "build/js/main.app.controllers.js",
      "build/js/main.controller.js",
      'public/app/components/**/test/**/*.specs.js',
      'public/tests/**/*.specs.js',
      'build/tpls/*.html'
    ],
    // generate js files from html templates
    preprocessors: {
      'build/tpls/*.html': 'ng-html2js'
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'build/',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'mocksTemplates'
    },
    // list of files to exclude
    exclude: [],
    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
