// Load plugins
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    requireDir = require('require-dir'),
    tasks = requireDir('./_tasks');

gulp.task('default', function() {
    gulp.start('compile-scss');
    gulp.watch('ui/scss/*.scss', ['compile-scss']);
    gulp.watch('ui/scss/**/*.scss', ['compile-scss']);
    gulp.watch('ui/js/*.js', ['copy-js']);
});

