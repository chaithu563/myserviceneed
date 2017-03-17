//"use strict";
//var gulp = require("gulp");
//var tsc = require("gulp-typescript");
//var sourcemaps = require('gulp-sourcemaps');
//var tsProject = tsc.createProject("tsconfig.json");
//var sysBuilder = require('systemjs-builder');
//var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');

//gulp.task('bundle:libs', function () {
//    return gulp.src([
//        'node_modules/jquery/dist/jquery.min.js',
//        'node_modules/zone.js/dist/zone.js',
//        'lib/smartmenu/jquery.smartmenus.min.js',
//        'node_modules/reflect-metadata/Reflect.js',
//        'node_modules/systemjs/dist/system.src.js',
//				'node_modules/systemjs/dist/system-polyfills.js',
//        '//connect.facebook.net/en_US/sdk.js',
//        'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
//        'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js',
//        'https://apis.google.com/js/platform.js',
//        'https://www.gstatic.com/charts/loader.js',
//        'https://www.google.com/jsapi'

//    ])
//        .pipe(concat('vendors.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/lib/js'));
//});

//gulp.task('compile:ts', function () {
//    return gulp
//        .src([
//        "app/**/*.js"
       
//    ])
//        .pipe(sourcemaps.init())
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest('dist'));
//});

//gulp.task('bundle:js', function () {
//    var builder = new sysBuilder('', 'systemjs.config.js');
//    return builder.buildStatic('app/app.main.js', 'dist/js/app.min.js', { minify: false, sourceMaps: true });
//});

//gulp.task('minify:js', function () {
//    return gulp
//        .src('dist/js/app.min.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/js'));
//});
//gulp.task('build', ['bundle:libs','compile:ts', 'bundle:js', 'minify:js']);


var gulp = require('gulp');
var typescript = require('typescript');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');


var systemjsBuilder = require('systemjs-builder');

gulp.task('tsc', function () {

	//return gulp.src(['app/**/*.ts', 'typings/index.d.ts'])
  //  .pipe(tsc({
  //  	"target": "es5",
  //  	"module": "commonjs",
  //  	"moduleResolution": "node",
  //  	"sourceMap": true,
  //  	"emitDecoratorMetadata": true,
  //  	"experimentalDecorators": true,
  //  	"removeComments": true,
  //  	"noImplicitAny": false,
  //  	"suppressImplicitAnyIndexErrors": true
  //  }))
	//  .js.pipe(gulp.dest('dist'));


	return gulp
	        .src([
	        "app/**/*.js"

	    ])
	    .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
	        .pipe(gulp.dest('dist'));
});

gulp.task('bundle-config', function () {
	return gulp.src('systemjs.config.js')
    .pipe(gulp.dest('dist/configs'));
});

gulp.task('bundle-app', ['bundle-config', 'tsc'], function () {

	var builder = new systemjsBuilder('', 'systemjs.config.js');
	return builder
      .bundle('[dist/**/*.js]', 'production/app.bundle.min.js', {
      	minify: true,
      	mangle: true
      })
      .then(function () {
      	console.log('Build complete');
      })
      .catch(function (err) {
      	console.log('Build error');
      	console.log(err);
      });

});

gulp.task('bundle-dependencies', ['bundle-config', 'tsc'], function () {

	var builder = new systemjsBuilder('', 'systemjs.config.js');
	return builder
      .bundle('dist/**/* - [dist/**/*.js]', 'production/dependencies.bundle.min.js', {
      	minify: true,
      	mangle: true
      })
      .then(function () {
      	console.log('Build complete');
      })
      .catch(function (err) {
      	console.log('Build error');
      	console.log(err);
      });

});

gulp.task('production', ['bundle-app', 'bundle-dependencies'], function () { });