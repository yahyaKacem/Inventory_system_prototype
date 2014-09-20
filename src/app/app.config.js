/**
* app configuration
*
* Description
* Main configuration for the application
*/
(function (define) {
  "use strict";
  var module = function configModuleF() {
    var configFunc = function configFuncF($provide, $httpProvider) {
      /*jslint maxlen: 85*/
      $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      /*jslint maxlen: 75*/
      $provide.value('appVersion', '0.1.0');
      $provide.value('appName', 'Inventory_management_system');
    };
    return ['$provide', '$httpProvider', configFunc];
  };
  define([], module);
}(this.define));
