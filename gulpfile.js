const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
var stripJsComments = require('gulp-strip-comments');
const stripCssComments = require('gulp-strip-css-comments');

// Likes and Rating
gulp.task('likeAndRatingBuildJS', function() {
    gulp.src('src/likesAndRating/js/*.js')
        .pipe(concat('likesAndRating.js'))
        .pipe(stripJsComments())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/likesandrating/'));
});
gulp.task('likeAndRatingBuildCSS', function() {
    gulp.src('src/likesAndRating/css/*.css')
        .pipe(concat('likesAndRating.css'))
        .pipe(stripCssComments())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/likesandrating/'));
});

// Cookies
gulp.task('cookiesBuild', function() {
    gulp.src('src/cookies/*.js')
        .pipe(concat('cookies.js'))
        .pipe(stripJsComments())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/cookies/'));
});

// Local Storage
gulp.task('localStorageBuild', function() {
    gulp.src('src/localStorage/*.js')
        .pipe(concat('localStorage.js'))
        .pipe(stripJsComments())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/localStorage'));
});

gulp.task('default', ['likeAndRatingBuildJS', 'likeAndRatingBuildCSS', 'cookiesBuild', 'localStorageBuild']);