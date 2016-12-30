System.register(["./msn.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var msn_service_1, APP_PROVIDERS;
    return {
        setters: [
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }
        ],
        execute: function () {
            exports_1("APP_PROVIDERS", APP_PROVIDERS = [
                msn_service_1.MSNService
            ]);
        }
    };
});
//# sourceMappingURL=provider.js.map