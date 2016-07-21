var gulp = require('gulp');
var prettify = require('gulp-html-prettify');

gulp.task('format-html', function() {
    gulp.src('pattern-lab/source/_patterns/**/*.mustache')
        .pipe(prettify({indent_char: ' ', indent_size: 4}))
        .pipe(gulp.dest('pattern-lab/source/_patterns/'))
});
