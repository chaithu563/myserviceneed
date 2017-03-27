var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence').use(gulp);
var Builder = require('systemjs-builder');
var concat = require('gulp-concat');
var builder = new Builder('', 'systemjs.config.js');
var uglify = require('gulp-uglify');
var remoteSrc = require('gulp-remote-src');
var concatCss = require('gulp-concat-css');
var bundleHash = new Date().getTime();
var mainBundleName = 'main.bundle.js';
var vendorBundleName = 'vendor.bundle.js';

// This is main task for production use
gulp.task('dist', function (done) {
	//runSequence('clean', 'compile_ts', 'bundle', 'copy_assets', function () {
	//	done();
    //});
    runSequence( 'compile_ts', 'bundle', 'dependlib', 'remotedependlib','bundelecss', 'copy_assets', function () {
        done();
    });
});
gulp.task('bundlecss', function () {
    return gulp.src([
        'lib/smartmenu/css/sm-core-css.css',
        'lib/smartmenu/css/sm-blue/sm-blue.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/ag-grid/dist/styles/ag-grid.css',
        'node_modules/ag-grid/dist/styles/theme-fresh.css',
        'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        'node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
        'app/assets/css/common.css'
        
    ])
        .pipe(concatCss("bundle.css"))
       // .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

//'node_modules/reflect-metadata/Reflect.js',
//'node_modules/systemjs/dist/system.src.js',
gulp.task('dependlib', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'lib/smartmenu/jquery.smartmenus.min.js',
        'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',

        'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js'

    ])
        .pipe(concat('dependlib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('remotedependlib', function () {
     remoteSrc([
        
        '//apis.google.com/js/platform.js',
        '//www.gstatic.com/charts/loader.js',
        '//www.google.com/jsapi',
        '//npmcdn.com/reflect-metadata@0.1.3',
         '//connect.facebook.net/en_US/sdk.js'

     ], {
         base: 'https:'
     })
        .pipe(concat('remotedependlib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});


gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
	return gulp.src('index.html')
			.pipe(htmlreplace({
				'app': mainBundleName,
				'vendor': vendorBundleName
			}))
			.pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendor', function () {
	return builder
			.buildStatic('app/vendor.js', './dist/' + vendorBundleName)
			.catch(function (err) {
				console.log('Vendor bundle error');
				console.log(err);
			});
});

gulp.task('bundle:app', function () {
	return builder
			.buildStatic('app/app.main.js', './dist/' + mainBundleName)
			.catch(function (err) {
				console.log('App bundle error');
				console.log(err);
			});
});

gulp.task('compile_ts', ['clean:ts'], shell.task([
  //  'tsc'
]));

gulp.task('copy_assets', function () {
	return gulp.src(['./assets/**/*'], { base: "." })
		 .pipe(gulp.dest('./dist'));
});

gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('clean:dist', function () {
	return gulp.src(['./dist'], { read: false })
			.pipe(clean());
});

gulp.task('clean:ts', function () {
	//return gulp.src(['./app/**/*.js', './app/**/*.js.map'], { read: false })
	//		.pipe(clean());
});


//'node_modules/reflect-metadata/Reflect.js',
//'node_modules/systemjs/dist/system.src.js',
gulp.task('mainminify', function () {
	return gulp.src([
			'dist/main.bundle.js',
			'dist/vendor.bundle.js'
	])
			.pipe(concat('bundle.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dist'));
});