var gulp = require('gulp');


var paths = {
    scripts: ['app/coffee/main.coffee'],
    styles: ['app/less/main.less']
};


gulp.task('scripts-compile', function () {

});

gulp.task('scripts-minify', function () {

});


gulp.task('styles-compile', function () {

});

gulp.task('styles-minify', function () {

});


gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts-compile']);
    gulp.watch(paths.styles, ['styles-compile']);
});

gulp.task('prod', function () {

});

gulp.task('default', ['prod']);
