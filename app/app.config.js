System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MSN_DI_CONFIG;
    return {
        setters:[],
        execute: function() {
            exports_1("MSN_DI_CONFIG", MSN_DI_CONFIG = {
                oDataEndPoint: 'http://localhost/MSNAdmin/odata',
                oDataProvider: 'oData',
                MSNServiceApi: 'http://localhost/MSNServiceApi/api/'
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map