
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    clean = require('gulp-clean');

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
  return gulp.src('resources/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
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
