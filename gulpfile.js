var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function(done) {
    gulp.src('styles/**/*.sass')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
