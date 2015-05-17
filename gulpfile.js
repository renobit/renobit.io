var gulp = require('gulp');
var less = require('gulp-less');


var paths = {
    scripts: {
        src: ['app/coffee/main.coffee'],
        dest: 'app/js'
    },
    styles: {
        src: ['app/less/main.less'],
        dest: 'app/css'
    }
};


gulp.task('scripts-compile', function () {
    return gulp.src(paths.scripts.src)
        .pipe(/*coffee()*/)
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('scripts-minify', function () {

});


gulp.task('styles-compile', function () {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('styles-minify', function () {

});


gulp.task('watch', function () {
    //gulp.watch(paths.scripts.src, ['scripts-compile']);
    gulp.watch(paths.styles.src, ['styles-compile']);
});

gulp.task('prod', function () {

});

gulp.task('default', ['prod']);
