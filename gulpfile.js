// Load plugins
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    requireDir = require('require-dir'),
    tasks = requireDir('./_tasks');

gulp.task('default', function() {
    gulp.start('compile-scss');
    gulp.start('require-js');
    gulp.watch('ui/scss/*.scss', ['compile-scss']);
    gulp.watch('ui/scss/**/*.scss', ['compile-scss']);
    gulp.watch('ui/js/app/*.js', ['require-js']);
    gulp.watch('ui/js/tools/*.js', ['require-js']);
    gulp.watch('ui/js/app/**/*.js', ['require-js']);
    gulp.watch('ui/js/app/**/**/*.js', ['require-js']);

});

