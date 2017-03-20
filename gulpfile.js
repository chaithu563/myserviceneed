var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');
var systemjsBuilder = require('systemjs-builder');

// Compile TypeScript app to JS
gulp.task('compile:ts', function () {
    return gulp
      .src([
          "app/**/*.ts"
         // "typings/*.d.ts"
      ])
      .pipe(sourcemaps.init())
      .pipe(typescript({
          "module": "system",
          "moduleResolution": "node",
          	"emitDecoratorMetadata": true,
          	"experimentalDecorators": true,
          "outDir": "dist",
          "target": "ES5"
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
});

// Generate systemjs-based bundle (app/app.js)
gulp.task('bundle:app', function () {
    var builder = new systemjsBuilder('', './systemjs.config.js');
    return builder.buildStatic('app', 'dist/app.js');
});

// Copy and bundle dependencies into one file (vendor/vendors.js)
// system.config.js can also bundled for convenience
gulp.task('bundle:vendor', function () {
    return gulp.src([
       'node_modules/jquery/dist/jquery.min.js',
       		'node_modules/systemjs/dist/system-polyfills.js',
         'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'lib/smartmenu/jquery.smartmenus.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
       
        '//connect.facebook.net/en_US/sdk.js',
        'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
        'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js',
        'https://apis.google.com/js/platform.js',
        'https://www.gstatic.com/charts/loader.js',
        'https://www.google.com/jsapi'
    ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('vendor'));
});

// Copy dependencies loaded through SystemJS into dir from node_modules
gulp.task('copy:vendor', function () {
    return gulp.src([
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/@angular/**/*',
        'node_modules/angular2-google-maps/core/core.umd.js',
        'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'node_modules/ng2-dropdown/index.js',
     'node_modules/moment/moment.js',
    // other libraries
  
      'node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'lib/jaydata/jaydata.js',
       'lib/jaydata/jaydataproviders/oDataProvider.min.js',
       'node_modules/ag-grid-ng2/main.js',
       'node_modules/ag-grid/main.js',
       'node_modules/ng2-cloudinary/dist/umd/ng2-cloudinary.js',
       'node_modules/ng2-file-upload/ng2-file-upload.js',
      'node_modules/ng2-auto-complete/dist/ng2-auto-complete.umd.js',
      'node_modules/ng2-datepicker/index.js',
       'node_modules/ng2-datetime/ng2-datetime.js',
     'node_modules/ng2-slimscroll/index.js',
      'node_modules/underscore/underscore.js',
       "node_modules/ng2-modal/index.js",
      "node_modules/angular-google-signin/index.js",
       "node_modules/angular2-jwt/angular2-jwt.js"
    ])
    .pipe(gulp.dest('vendor'));
});

gulp.task('vendor', ['bundle:vendor', 'copy:vendor']);
gulp.task('app', ['compile:ts', 'bundle:app']);

// Bundle dependencies and app into one file (app.bundle.js)
gulp.task('bundle', ['vendor', 'app'], function () {
    return gulp.src([
        'dist/app.js',
        'vendor/vendors.js'
    ])
    .pipe(concat('app.bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./appfinal'));
});

gulp.task('default', ['bundle']);