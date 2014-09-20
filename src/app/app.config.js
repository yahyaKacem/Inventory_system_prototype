/**
* app configuration
*
* Description
* Main configuration for the application
*/
(function (define) {
  "use strict";
  var module = function configModuleF() {
    var configFunc = function configFuncF($provider, $httpProvider) {
      /*jslint maxlen: 85*/
      $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      /*jslint maxlen: 75*/
      $provider.value('appVersion', '0.0.1');
      $provider.value('appName', 'Inventory management system');
    };
    return ['$provider', '$httpProvider', configFunc];
  };
  define([], module);
}(this.define));
