// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('pearson-elements', function() {
    gulp.src("node_modules/pearson-elements/dist/fonts/**")
        .pipe(gulp.dest('ui/fonts/'))
        .pipe(gulp.dest('pattern-lab/source/fonts/'));

    gulp.src("node_modules/pearson-elements/dist/images/**")
        .pipe(gulp.dest('ui/images/'))
        .pipe(gulp.dest('pattern-lab/source/images/'));

    gulp.src("node_modules/pearson-elements/scss/**")
        .pipe(gulp.dest('ui/scss/elements/'))
});