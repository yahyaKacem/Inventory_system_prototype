(function () {
  "use strict";
  module.exports.getConfigs = function (directories) {
    return {
      htmlminOptions: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        collapseBooleanAttributes: true
      },
      sassConfig: {
        sourceComments: "map",
        includePaths: [directories.src.editorScssDir]
      },
      jslintConfig: {
        indent:     2,     // the indentation factor
        maxerr:     10,    // the maximum number of errors to allow
        maxlen:     75,    // the maximum length of a source line
        ass:        false, // true, if assignment expressions should be allowed
        sub:        false, // true, if all forms of subscript notation are tolerated
        eqeq:       false, // true, if == should be allowed
        evil:       false, // true, if eval should be allowed
        node:       false, // true, if Node.js globals should be predefined
        todo:       false, // true, if TODO comments are tolerated
        vars:       false, // true, if multiple var statements per function should be allowed
        debug:      false, // true, if debugger statements should be allowed
        devel:      false, // true, if logging should be allowed (console, alert, etc.)
        forin:      false, // true, if for in statements need not filter
        nomen:      false, // true, if names may have dangling _
        rhino:      false, // true, if the Rhino environment globals should be predefined
        white:      false, // true, if sloppy whitespace is tolerated
        newcap:     false, // true, if constructor names capitalization is ignored
        regexp:     false, // true, if the . should be allowed in regexp literals
        sloppy:     false, // true, if the 'use strict'; pragma is optional
        stupid:     false, // true, if really stupid practices are tolerated
        bitwise:    false, // true, if bitwise operators should be allowed
        browser:    false, // true, if the standard browser globals should be predefined
        closure:    false, // true, if Google Closure idioms should be tolerated
        unparam:    false, // true, if unused parameters should be tolerated
        continue:   false, // true, if the continuation statement should be tolerated
        passfail:   false, // true, if the scan should stop on first error
        plusplus:   false, // true, if increment/decrement should be allowed
        properties: false, // true, if all property names must be declared with /*properties*/
        predef: [
          "_",
          "head",
          "define",
          "jQuery",
          "module",
          "window",
          "console",
          "angular",
          "require",
          "document"
        ]
      }
    };
  };
}());
