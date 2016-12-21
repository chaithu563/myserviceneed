System.register(["@angular/platform-browser-dynamic", "./services/index", "./app.module", "./app.config", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, index_1, app_module_1, app_config_1, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule, index_1.APP_PROVIDERS, app_config_1.MSN_DI_CONFIG);
        }
    };
});
//# sourceMappingURL=app.main.js.map