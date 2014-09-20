/**
* app configuration
*
* Description
* Main configuration for the application
*/
(function (define) {
  "use strict";
  var module = function configModuleF() {
    var configFunc = function configFuncF($httpProvider) {
      /*jslint maxlen: 85*/
      $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      /*jslint maxlen: 75*/
    };
    return ['$httpProvider', configFunc];
  };
  define([], module);
}(this.define));
