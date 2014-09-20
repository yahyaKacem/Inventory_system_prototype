/**
* editor Module
*
* Description
* Main editor module
*/
(function (define, document, ng) {
  "use strict";
  var module, moduleDependencies;
  moduleDependencies = [       'config', 'MainCtrl'];
  module = function mainModuleF(config,   MainCtrl) {
    var app, body, appDeps, appName;
    appName = 'app';
    body    = document.getElementsByTagName("body")[0];
    appDeps = ['ngAnimate', 'ngSanitize'];
    app     = ng.module(appName, appDeps);
    app.config(config);
    app.controller('MainCtrl', MainCtrl);
    ng.bootstrap(body, [appName]);
    return app;
  };
  define(moduleDependencies, module);
}(this.define, this.document, this.angular));
