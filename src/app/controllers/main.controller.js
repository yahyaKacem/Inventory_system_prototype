/**
* main controller
*
* Description
* Main controller for the application
*/
(function (define) {
  "use strict";
  /*jslint maxlen: 80*/
  var ControllerConstructorModule = function ControllerConstructorModuleF() {
    var controllerConstructor = function () {
      var app;
      app = this;
      console.log(app);
    };
    return controllerConstructor;
  };
  define([], ControllerConstructorModule);
}(this.define));
