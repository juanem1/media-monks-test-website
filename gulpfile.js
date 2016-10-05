var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    rollup = require('rollup'),
    buble = require('rollup-plugin-buble');

/**
 * Compile all styles
 */
gulp.task('styles', ['clean-css'], function() {
  return gulp.src('resources/sass/main.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'));
});

/**
 * Compile all scripts
 */
gulp.task('scripts', ['clean-js'], function() {
  rollup.rollup({
      entry: './resources/js/index.js',
      sourceMap: true,
      plugins: [buble()]
    }).then(function(bundle) {
      bundle.generate({ format: 'es' });
      bundle.write({
        dest: './public/js/main.js'
      });
    });
});

/**
 * Remove css folder in the public directory
 */
gulp.task('clean-css', function() {
  return gulp.src(['public/css'], {read: false}).pipe(clean());
});

/**
 * Remove js folder in the public directory
 */
gulp.task('clean-js', function() {
 return gulp.src(['public/js'], {read: false}).pipe(clean());
});

/**
 * Watch for changes and triger build
 */
gulp.task('watch', function() {
  gulp.watch('resources/js/**/*.js', ['scripts']);
  gulp.watch('resources/sass/**/*.scss', ['styles']);
});

/**
 * Remove js and css folder in the public directory
 */
gulp.task('default', function() {
  gulp.run('styles', 'scripts');
});
