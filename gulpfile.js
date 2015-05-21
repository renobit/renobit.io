var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var less       = require('gulp-less');
var minify_css = require('gulp-minify-css');
var uglify     = require('gulp-uglify');
var exec       = require('child_process').exec;


var paths = {
    js: {
        src:  ['app/js/**/*.js'],
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


gulp.task('js-browserify', function () {
    var stream = gulp.src(paths.js.main)
        .pipe(browserify({ debug: true }))
        .pipe(gulp.dest(paths.js.dest));

    return stream;
});

gulp.task('js-uglify', function () {
    var stream = gulp.src(paths.js.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest));

    return stream;
});

gulp.task('less-compile', function () {
    var stream = gulp.src(paths.less.main)
        .pipe(less())
        .pipe(gulp.dest(paths.less.dest));

    return stream;
});

gulp.task('css-minify', ['less-compile'], function () {
    var stream = gulp.src(paths.css.main)
        .pipe(minify_css())
        .pipe(gulp.dest(paths.css.dest));

    return stream;
});


gulp.task('serve', function (cb) {
    gulp.watch(paths.less.src, ['less-compile']);

    exec('node index.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        cb(err);
    });
});

gulp.task('prod', ['js-browserify', 'js-uglify', 'less-compile', 'css-minify']);
gulp.task('default', ['prod']);
