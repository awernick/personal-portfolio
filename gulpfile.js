var gulp          = require('gulp'),
    del           = require('del'),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    cssnano       = require('gulp-cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    bourbon       = require('bourbon').includePaths,
    neat          = require('bourbon-neat').includePaths;

const static_path = './personal_portfolio/static/portfolio';
const src_path = static_path + '/src';
const input_paths = {
    stylesheets: [src_path + '/stylesheets/**/*.scss'],
    scripts: [src_path + '/scripts/**/*.js'],
}
const output_paths = {
    stylesheets: static_path + '/stylesheets',
    scripts: static_path + '/scripts',
    fonts: static_path + '/fonts'
}

const fa_path = 'node_modules/font-awesome/fonts/*';

gulp.task('transpile_css', function() {
    return gulp.src(input_paths.stylesheets)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [input_paths.stylesheets]
              .concat(bourbon, neat)
        }).on('error', sass.logError))
        .pipe(cssnano())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output_paths.stylesheets));
})

gulp.task('uglify', function() {
    return gulp.src(input_paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output_paths.scripts));
})

gulp.task('fonts', function() {
  return gulp.src(fa_path)
    .pipe(gulp.dest(output_paths.fonts + '/font_awesome'));
})

gulp.task('clean', function() {
    del([
      output_paths.scripts + '/app.js', 
      output_paths.stylesheets + '/app.css', 
      output_paths.fonts + '/font_awesome'
    ]);
})

gulp.task('watch', ['fonts', 'transpile_css', 'uglify'], function() {
    gulp.watch(input_paths.scripts, ['uglify']);
    gulp.watch(input_paths.stylesheets, ['transpile_css']);
    gulp.watch(input_paths.fonts, ['fonts']);
})

gulp.task('default', ['clean', 'uglify', 'transpile_css', 'fonts']);
