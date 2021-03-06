var gulp = require("gulp");
var postcss = require("gulp-postcss");
var postcssCssVariables = require("postcss-css-variables");
var postcssApply = require("postcss-apply");
// var postcssPresetEnv = require("postcss-preset-env");
var postcssImport = require("postcss-import");
var sourcemaps = require("gulp-sourcemaps");
var cssnano = require("cssnano");
// var ts = require("gulp-typescript");

function defaultTask(cb) {
  gulp
    .src("src/**/*.css")
    .pipe(gulp.dest("dist/style"))
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssImport("src/style/vars.css"),
        postcssApply(),
        postcssCssVariables(),
        cssnano(),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/"));
  // place code for your default task here
  cb();
}

exports.watch = function watch(cb) {
  gulp.watch("src/**/*.css", defaultTask);
};

exports.default = defaultTask;
