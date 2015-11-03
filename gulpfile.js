/**
 * Created by michaelntambazi on 03/11/15.
 */
// Bring in the gulp library(All methods and properties) and assign it to the variable gulp
var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    coffee  = require('gulp-coffee'),
    concat  = require('gulp-concat');

var jsSources = [
    'components/scripts/app.js'
];

// Creating the log task
gulp.task('js', function() {
    // Get the script file sources
    gulp.src(jsSources)
        // concatenate all of them into one script file
        .pipe(concat('script.js'))
        // Which resides in this destination 'builds/development/js'
        .pipe(gulp.dest('builds/development/js'))
});