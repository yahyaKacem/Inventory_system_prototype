/* jshint -W098 */
(function (head) {
  "use strict";
  head.load([
    {require:    "libs/require.js"            },
    {jquery:     "libs/jquery.min.js"         },
    {underscore: "libs/underscore.js"         },
    {angular:    "libs/angular.min.js"        },
    {ngAnimate:  "libs/angular-animate.min.js"},
    {app:        "js/main.js"                  }
  ]);
  head.ready(function () {
    require(["main"], function (app) {});
  });
}(this.head));
