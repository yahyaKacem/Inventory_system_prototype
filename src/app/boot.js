(function (head) {
  "use strict";
  var deps, jsDir, libsDir, whenReady;
    jsDir    = "js";
    libsDir  = "libs";
    deps     = [
      {require:       libsDir + "/require.js"             },
      {jquery:        libsDir + "/jquery.js"              },
      {angular:       libsDir + "/angular.js"             },
      {underscore:    libsDir + "/underscore.js"          },
      {ngAnimate:     libsDir + "/angular-animate.js"     },
      {ngSanitize:    libsDir + "/angular-sanitize.js"    }
    ];
  whenReady = function () {
    var configObject = {
      appDir:   '.',
      baseUrl:  '.',
      priority: 'angular',
      paths:    {
        // Configure alias to full paths
        "app":                jsDir + "/app.main",
        "config":             jsDir + "/app.config",
        "MainCtrl":           jsDir + "/main.controller"
      }
    };
    require.config(configObject);
    require(["app"], function (app) {});
  };
  head.load(deps);
  head.ready(whenReady);
}(this.head));
