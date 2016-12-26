var gulp          = require('gulp'),
    del           = require('del'),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    cssnano       = require('gulp-cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    bourbon       = require('bourbon').includePaths,
    neat          = require('bourbon-neat').includePaths;

const static_path = './personal_portfolio/static';
const src_path = static_path + '/src';
const paths = {
    stylesheets: [src_path + '/stylesheets/**/*.scss'],
    scripts: [src_path + '/scripts/**/*.js'],
    fonts: static_path + '/fonts'
}

const fa_path = 'node_modules/font-awesome/fonts/*';

gulp.task('transpile_css', function() {
    return gulp.src(paths.stylesheets)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [paths.stylesheets]
              .concat(bourbon, neat)
        }).on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(static_path));
})

gulp.task('uglify', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(static_path));
})

gulp.task('fonts', function() {
  return gulp.src(fa_path)
    .pipe(gulp.dest(paths.fonts + '/font_awesome'));
})

gulp.task('clean', function() {
    del([static_path + '/app.js', static_path + '/app.css']);
})

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['uglify']);
    gulp.watch(paths.stylesheets, ['transpile_css']);
    gulp.watch(paths.fonts, ['fonts']);
})

gulp.task('default', ['clean', 'uglify', 'transpile_css', 'fonts', 'watch']);
