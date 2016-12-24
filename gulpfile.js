var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    uglify  = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    concat  = require('gulp-concat'),
    del     = require('del');

const static_path = './personal_portfolio/static';
const src_path = static_path + '/src';
const paths = {
    stylesheets: [src_path + '/stylesheets/**/*.scss'],
    scripts: [src_path + '/scripts/**/*.js']
}

gulp.task('transpile_css', function() {
    return gulp.src(paths.stylesheets)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(static_path));
})

gulp.task('uglify', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(static_path));
})

gulp.task('clean', function() {
    del([static_path + '/app.js', static_path + '/app.css']);
})

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['uglify']);
    gulp.watch(paths.stylesheets, ['transpile_css']);
})

gulp.task('default', ['clean', 'uglify', 'transpile_css', 'watch']);
