(function () {
  "use strict";
  module.exports.getTasks = function (gulp, plugins) {
    var
      files, configs, commands, sassTask, lintTasks, watchTask, buildTasks,
      copyJsTask, jshintTask, jslintTask, directories, copyAllTasks,
      copyLibsTask, cleanDistTask, cleanDocsTask, copyFontsTask,
      indexFileTask, cleanBuildTask, copyImagesTask, htmlminTplsTask,
      cleanBuildJsTask, cleanBuildCssTask, cleanBuildTplsTask,
      cleanBuildFontsTask, cleanDistImagesTask, cleanBuildImagesTask,
      cleanSrcScssFilesTask, convertAllSassToScssTask;
    directories              = require("./directories").getDirectories();
    files                    = require("./files").getFiles(directories);
    configs                  = require('./configs').getConfigs(directories);
    commands                 = require('./commands').getCommands(directories);
    watchTask                = require('./gulp_tasks/watch.js').getTask(gulp, files);
    cleanSrcScssFilesTask    = require('./gulp_tasks/clean.js').getTask(directories.src.scssDir);
    cleanDistTask            = require('./gulp_tasks/clean.js').getTask(directories.distDir);
    cleanDocsTask            = require('./gulp_tasks/clean.js').getTask(directories.docsDir);
    cleanBuildTask           = require('./gulp_tasks/clean.js').getTask(directories.buildDir);
    cleanBuildJsTask         = require('./gulp_tasks/clean.js').getTask(directories.build.jsDir);
    cleanBuildCssTask        = require('./gulp_tasks/clean.js').getTask(directories.build.cssDir);
    cleanBuildTplsTask       = require('./gulp_tasks/clean.js').getTask(directories.build.tplsDir);
    cleanBuildFontsTask      = require('./gulp_tasks/clean.js').getTask(directories.build.fontsDir);
    cleanDistImagesTask      = require('./gulp_tasks/clean.js').getTask(directories.dist.imagesDir);
    cleanBuildImagesTask     = require('./gulp_tasks/clean.js').getTask(directories.build.imagesDir);
    jshintTask               = require('./gulp_tasks/jshint.js').getTask(gulp, plugins.jshint, files.filesToLint);
    convertAllSassToScssTask = require('./gulp_tasks/shell.js').getTask(gulp, plugins.shell, commands.convertSassToScssCommand);
    copyJsTask               = require('./gulp_tasks/copy.js').getTask(gulp, plugins.rename, directories.build.jsDir, files.jsFiles);
    jslintTask               = require('./gulp_tasks/jslint.js').getTask(gulp, plugins.jslint, files.filesToLint, configs.jslintConfig);
    copyFontsTask            = require('./gulp_tasks/copy.js').getTask(gulp, plugins.rename, directories.build.fontsDir, files.fontsFiles);
    copyImagesTask           = require('./gulp_tasks/copy.js').getTask(gulp, plugins.rename, directories.build.imagesDir, files.imagesFiles);
    htmlminTplsTask          = require('./gulp_tasks/htmlmin.js').getTask(gulp, plugins, configs, directories.build.tplsDir, files.tplsFiles);
    copyLibsTask             = require('./gulp_tasks/copy.js').getTask(gulp, plugins.rename, directories.build.libsDir, files.nonMinifiedLibs);
    indexFileTask            = require('./gulp_tasks/htmlmin.js').getTask(gulp, plugins, configs, directories.buildDir, files.indexFile, files.destIndexFile);
    sassTask                 = require('./gulp_tasks/sass.js').getTask(gulp, plugins.sass, configs.sassConfig, directories.build.cssDir, directories.src.scssDir + "/styles.scss");
    lintTasks                = ['jslint', 'jshint'];
    copyAllTasks             = ['copyJs', 'copyLibs', 'copyFonts', 'copyImages'];
    buildTasks               = ['cleanBuild', 'lint', 'copyAll', 'sassBuild', 'indexFile', 'htmlminTpls'];
    return [
      {taskName: "lint",                 taskFunc: lintTasks                                                },
      {taskName: "watch",                taskFunc: watchTask                                                },
      {taskName: "build",                taskFunc: buildTasks                                               },
      {taskName: "copyJs",               taskFunc: copyJsTask                                               },
      {taskName: "jslint",               taskFunc: jslintTask                                               },
      {taskName: "jshint",               taskFunc: jshintTask                                               },
      {taskName: "copyAll",              taskFunc: copyAllTasks                                             },
      {taskName: "copyLibs",             taskFunc: copyLibsTask                                             },
      {taskName: "cleanDist",            taskFunc: cleanDistTask                                            },
      {taskName: "cleanDocs",            taskFunc: cleanDocsTask                                            },
      {taskName: "copyFonts",            taskFunc: copyFontsTask                                            },
      {taskName: "indexFile",            taskFunc: indexFileTask                                            },
      {taskName: "cleanBuild",           taskFunc: cleanBuildTask                                           },
      {taskName: "copyImages",           taskFunc: copyImagesTask                                           },
      {taskName: "htmlminTpls",          taskFunc: htmlminTplsTask                                          },
      {taskName: "cleanBuildJs",         taskFunc: cleanBuildJsTask                                         },
      {taskName: "cleanBuildCss",        taskFunc: cleanBuildCssTask                                        },
      {taskName: "cleanBuildTpls",       taskFunc: cleanBuildTplsTask                                       },
      {taskName: "cleanBuildFonts",      taskFunc: cleanBuildFontsTask                                      },
      {taskName: "cleanDistImages",      taskFunc: cleanDistImagesTask                                      },
      {taskName: "cleanBuildImages",     taskFunc: cleanBuildImagesTask                                     },
      {taskName: "cleanSrcScssFiles",    taskFunc: cleanSrcScssFilesTask                                    },
      {taskName: "convertAllSassToScss", taskFunc: convertAllSassToScssTask                                 },
      {taskName: "sassBuild",            taskDeps: ["convertSassToScss"], taskFunc: sassTask                },
      {taskName: "default",              taskDeps: ["build"],             taskFunc: watchTask               },
      {taskName: "convertSassToScss",    taskDeps: ["cleanSrcScssFiles"], taskFunc: convertAllSassToScssTask}
    ];
  };
}());
