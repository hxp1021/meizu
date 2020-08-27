// var gulp = require('gulp'); 
// var minifyCss = require('gulp-minify-css');    // Get minify-css module
// var notify = require('gulp-notify');    // Get notify module

// Compress CSS files, run 'gulp css' in command line
// gulp.task('css', function() {
//     // set CSS source folder
//     gulp.src('css/**/*.css')
//         // compress files
//         .pipe(minifyCss())
//         // save the compressed files to dest folder
//         .pipe(gulp.dest('dist/css'));
//         // Sent notification
// });

var gulp = require("gulp");
var uglyfly = require("gulp-uglyfly");
var babel = require("gulp-babel")
gulp.task("uglyfly",function(){
    gulp.src("js/first.js").pipe(babel()).pipe(uglyfly()).pipe(gulp.dest('dist/js'));
})
