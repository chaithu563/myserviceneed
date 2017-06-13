"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var index_1 = require('./services/index');
var app_module_1 = require('./app.module');
var app_config_1 = require('./app.config');
require('rxjs/Rx');
//import './polyfills'
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, index_1.APP_PROVIDERS, app_config_1.MSN_DI_CONFIG);
//# sourceMappingURL=app.main.js.map