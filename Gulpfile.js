var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var destination = 'public/assets'

gulp.task('scripts', function() {
    
    gulp.src(['assets/scripts/*.js'])
        .pipe(browserify({
            debug: true,
            transform: ['reactify']
        }))
        .pipe(gulp.dest(destination + '/scripts'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(destination + '/scripts'));

});

gulp.task('default', ['scripts']);
