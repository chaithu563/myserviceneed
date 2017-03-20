"use strict";
var PostData = (function () {
    function PostData() {
        this.title = '';
        this.description = '';
        this.mobile = '';
        this.username = '';
        this.address = '';
        this.servicestartdate = '';
        this.serviceenddate = '';
        this.service_start_time = new Date();
        this.latitude = 0;
        this.longitude = 0;
        this.zoom = 15;
        this.servicesubcategoryid = 0;
        this.uploadedimages = [];
    }
    return PostData;
}());
exports.PostData = PostData;
//# sourceMappingURL=postServiceRequest.js.map