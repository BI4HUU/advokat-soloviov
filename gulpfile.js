const { series, watch } = require('gulp');
var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');


function html() {
    return gulp.src('./src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}
function html1() {
    return gulp.src('./src/lawyer-in-civil-cases.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}
function html3() {
    return gulp.src('./src/family-disputes.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html4() {
    return gulp.src('./src/criminal-proceedings.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html5() {
    return gulp.src('./src/migration-services.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html6() {
    return gulp.src('./src/legal-services.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html7() {
    return gulp.src('./src/representation-of-interests.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html8() {
    return gulp.src('./src/disputes-with-banks.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html9() {
    return gulp.src('./src/migration-services.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html10() {
    return gulp.src('./src/recalculation-of-military-pensions.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html11() {
    return gulp.src('./src/housing-disputes.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html12() {
    return gulp.src('./src/housing-disputes.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}

function html13() {
    return gulp.src('./src/auto-advocat.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}


function html14() {
    return gulp.src('./src/hereditary-disputes.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'));
}



function css() {
    return gulp.src('./src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/'));
}

function defaultTask(cb) {
    watch('src/style.styl', series(css, html));
    watch('src/index.pug', html);

    watch('src/lawyer-in-civil-cases.pug', series(css, html1));
    watch('src/family-disputes.pug', series(css, html3));
    watch('src/criminal-proceedings.pug', series(css, html4));
    watch('src/migration-services.pug', series(css, html5));
    watch('src/legal-services.pug', series(css, html6));
    watch('src/representation-of-interests.pug', series(css, html7));
    watch('src/disputes-with-banks.pug', series(css, html8));
    watch('src/recalculation-of-military-pensions.pug', series(css, html10));
    watch('src/housing-disputes.pug', series(css, html11));
    // watch('src/housing-disputes.pug', series(css, html12));
    watch('src/auto-advocat.pug', series(css, html13));
    watch('src/hereditary-disputes.pug', series(css, html14));
  }
  
exports.default = defaultTask