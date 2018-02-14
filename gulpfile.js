const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug2');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-uglify');
const concat = require('gulp-concat');
const browser_sync = require('browser-sync').create();

// Compile PUG files
gulp.task('pug', function () {
    return gulp.src('./source/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/'))
});

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('./source/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browser_sync.stream());
});

// Optimize Images
gulp.task('imagemin', () =>
    gulp.src('source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
);

// Minify and Concatenate JS
gulp.task('js', function() {
    return gulp.src('./source/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/js/'))
        .pipe(browser_sync.stream());
});

// Watch and Serve
gulp.task('watch', function() {

      browser_sync.init({
        server: "./build/"
      });

        gulp.watch("./source/sass/**/*.sass", ['sass']);
        gulp.watch("./source/js/**/*.js", ['js']);
        gulp.watch("./source/**/*.pug", ['pug'])
        gulp.watch("./source/img/*", ['imagemin']);
        gulp.watch("./build/*.html").on('change', browser_sync.reload);
    });

// Default Task
gulp.task('default', ['watch']);
