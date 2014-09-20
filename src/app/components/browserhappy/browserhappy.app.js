/**
* editor Module
*
* Description
* Main editor module
*/
(function (define, document, ng) {
  "use strict";
  var browserHappyModule, browserHappyModuleDependencies;
  browserHappyModuleDependencies = ["config", "MainCtrl"];
  browserHappyModule = function browserHappyModuleF(config, MainCtrl){
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
  define(browserHappyModuleDependencies, browserHappyModule);
}(this.define, this.document, this.angular));
