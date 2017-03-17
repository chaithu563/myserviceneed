"use strict";
var gulp = require("gulp");
//var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var sysBuilder = require('systemjs-builder');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var tslint = require('gulp-tslint');
/**
 * Remove build directory.
 */
gulp.task('bundle:libs', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/zone.js/dist/zone.js',
        'lib/smartmenu/jquery.smartmenus.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        '//connect.facebook.net/en_US/sdk.js',
        'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
        'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js',
        'https://apis.google.com/js/platform.js',
        'https://www.gstatic.com/charts/loader.js',
        'https://www.google.com/jsapi',
        'systemjs.config.js'
    ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib/js'));
});
// Compile TypeScript to JS
gulp.task('compile:ts', function () {
    return gulp
        .src([
        "app/**/*.js"
       
    ])
        .pipe(sourcemaps.init())
    //    .pipe(tsc({
    //    "module": "system",
    //    "moduleResolution": "node",
    //    "outDir": "public/dist/js",
    //    "target": "ES5"
    //}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
// Generate systemjs-based builds
gulp.task('bundle:js', function () {
    var builder = new sysBuilder('', './systemjs.config.js');
    return builder.buildStatic('app', 'dist/js/app.min.js');
});
// Minify JS bundle
gulp.task('minify:js', function () {
    return gulp
        .src('dist/js/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('build', ['bundle:libs','compile:ts', 'bundle:js', 'minify:js']);
