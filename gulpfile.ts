"use strict";

const gulp = require("gulp");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const sysBuilder = require('systemjs-builder');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
//const tslint = require('gulp-tslint');

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
        


        'system.config.js'
    ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('lib/js'));
});

// Compile TypeScript to JS
gulp.task('compile:ts', function () {
    return gulp
        .src([
            "src/**/*.ts",
            "typings/*.d.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc({
            "module": "system",
            "moduleResolution": "node",
            "outDir": "dist/js",
            "target": "ES5"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function () {
    var builder = new sysBuilder('', './system.config.js');
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

