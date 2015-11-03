/**
 * Created by michaelntambazi on 03/11/15.
 */
// Bring in the gulp library(All methods and properties) and assign it to the variable gulp
var gulp = require('gulp'),
    gutil = require('gulp-util');

// Creating the log task
gulp.task('log', function() {
    gutil.log("This app is awesome!");
});