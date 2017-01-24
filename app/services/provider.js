System.register(["./msn.service", "./msn.pager", "./msn.login"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var msn_service_1, msn_pager_1, msn_login_1, APP_PROVIDERS;
    return {
        setters: [
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (msn_pager_1_1) {
                msn_pager_1 = msn_pager_1_1;
            },
            function (msn_login_1_1) {
                msn_login_1 = msn_login_1_1;
            }
        ],
        execute: function () {
            exports_1("APP_PROVIDERS", APP_PROVIDERS = [
                msn_service_1.MSNService, msn_pager_1.PagerService, msn_login_1.LoginService
            ]);
        }
    };
});
//# sourceMappingURL=provider.js.map