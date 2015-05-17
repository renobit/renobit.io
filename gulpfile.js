var gulp = require('gulp');
var less = require('gulp-less');
var css_minify = require('gulp-minify-css');


var paths = {
    js: {
        src:  ['app/js/**/*.js']
        main: ['app/js/main.js'],
        dest:  'prod/js'
    },
    less: {
        src:  ['app/less/**/*.less'],
        main: ['app/less/main.less'],
        dest:  'app/css'
    },
    css: {
        main: ['app/css/main.css'],
        dest:  'prod/css'
    }
};


gulp.task('js-minify', function () {
    
});


gulp.task('less-compile', function () {
    var stream = gulp.src(paths.less.main)
        .pipe(less())
        .pipe(gulp.dest(paths.less.dest));

    return stream;
});

gulp.task('css-minify', ['less-compile'], function () {
    var stream = gulp.src(paths.css.main)
        .pipe(css_minify())
        .pipe(gulp.dest(paths.css.dest));

    return stream;
});


gulp.task('watch', function () {
    gulp.watch(paths.less.src, ['less-compile']);
});

gulp.task('prod', ['js-minify', 'less-compile', 'css-minify']);
gulp.task('default', ['prod']);
