System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostData;
    return {
        setters: [],
        execute: function () {
            PostData = (function () {
                function PostData() {
                    this.title = '';
                    this.descrption = '';
                    this.mobile = '';
                    this.username = '';
                    this.address = '';
                    this.servicestartdate = '';
                    this.serviceenddate = '';
                    this.service_start_time = new Date();
                    this.latitude = 0;
                    this.longitude = 0;
                    this.uploadedimages = [];
                }
                return PostData;
            }());
            exports_1("PostData", PostData);
        }
    };
});
//# sourceMappingURL=postServiceRequest.js.map