const { series, watch } = require('gulp');
var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');


function html() {
    return gulp.src('./src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function css() {
    return gulp.src('./src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/'));
}

function defaultTask(cb) {
    series(css, html);
    watch('src/style.styl', series(css, html));
    watch('src/index.pug', html);
  }
  
exports.default = defaultTask