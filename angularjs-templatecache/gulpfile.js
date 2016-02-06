
var gulp = require('gulp');

var angularTemplateCache = require('gulp-angular-templatecache');

var concat = require('gulp-concat');

var addStream = require('add-stream');


function prepareTemplates() {
    return gulp.src('templates/**/*.html')
        //.pipe(minify and preprocess the template html here)
        .pipe(angularTemplateCache());
}

gulp.task('mergeJS', function() {
    return gulp.src('./*.ns.js')
        //.pipe(concat your app js files somehow)

        // append the template js onto app.js
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('server.js'))

        //.pipe(ng annotate, minify, etc)
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('mergeHtml', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('build',['mergeJS', 'mergeHtml']);

