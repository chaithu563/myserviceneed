(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2Cloudinary"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2Cloudinary"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cloudinary_module_1 = __webpack_require__(1);
	exports.Ng2CloudinaryModule = cloudinary_module_1.Ng2CloudinaryModule;
	var cloudinary_options_class_1 = __webpack_require__(13);
	exports.CloudinaryOptions = cloudinary_options_class_1.CloudinaryOptions;
	var cloudinary_transforms_class_1 = __webpack_require__(14);
	exports.CloudinaryTransforms = cloudinary_transforms_class_1.CloudinaryTransforms;
	var cloudinary_uploader_service_1 = __webpack_require__(16);
	exports.CloudinaryUploader = cloudinary_uploader_service_1.CloudinaryUploader;
	var cloudinary_image_service_1 = __webpack_require__(15);
	exports.CloudinaryImageService = cloudinary_image_service_1.CloudinaryImageService;
	var cloudinary_image_component_1 = __webpack_require__(12);
	exports.CloudinaryImageComponent = cloudinary_image_component_1.CloudinaryImageComponent;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(3);
	var ng2_file_upload_1 = __webpack_require__(4);
	var cloudinary_image_component_1 = __webpack_require__(12);
	var cloudinary_image_service_1 = __webpack_require__(15);
	var Ng2CloudinaryModule = (function () {
	    function Ng2CloudinaryModule() {
	    }
	    Ng2CloudinaryModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                cloudinary_image_component_1.CloudinaryImageComponent,
	            ],
	            imports: [
	                common_1.CommonModule,
	                ng2_file_upload_1.FileUploadModule
	            ],
	            exports: [
	                cloudinary_image_component_1.CloudinaryImageComponent,
	            ],
	            providers: [
	                cloudinary_image_service_1.CloudinaryImageService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2CloudinaryModule);
	    return Ng2CloudinaryModule;
	}());
	exports.Ng2CloudinaryModule = Ng2CloudinaryModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	__export(__webpack_require__(10));
	__export(__webpack_require__(6));
	var file_upload_module_1 = __webpack_require__(11);
	exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var file_uploader_class_1 = __webpack_require__(6);
	// todo: filters
	var FileSelectDirective = (function () {
	    function FileSelectDirective(element) {
	        this.element = element;
	    }
	    FileSelectDirective.prototype.getOptions = function () {
	        return this.uploader.options;
	    };
	    FileSelectDirective.prototype.getFilters = function () {
	        return void 0;
	    };
	    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
	        return !!this.element.nativeElement.attributes.multiple;
	    };
	    FileSelectDirective.prototype.onChange = function () {
	        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
	        var files = this.element.nativeElement.files;
	        var options = this.getOptions();
	        var filters = this.getFilters();
	        // if(!this.uploader.isHTML5) this.destroy();
	        this.uploader.addToQueue(files, options, filters);
	        if (this.isEmptyAfterSelection()) {
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', file_uploader_class_1.FileUploader)
	    ], FileSelectDirective.prototype, "uploader", void 0);
	    __decorate([
	        core_1.HostListener('change'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', Object)
	    ], FileSelectDirective.prototype, "onChange", null);
	    FileSelectDirective = __decorate([
	        core_1.Directive({ selector: '[ng2FileSelect]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], FileSelectDirective);
	    return FileSelectDirective;
	}());
	exports.FileSelectDirective = FileSelectDirective;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var file_like_object_class_1 = __webpack_require__(7);
	var file_item_class_1 = __webpack_require__(8);
	var file_type_class_1 = __webpack_require__(9);
	function isFile(value) {
	    return (File && value instanceof File);
	}
	var FileUploader = (function () {
	    function FileUploader(options) {
	        this.isUploading = false;
	        this.queue = [];
	        this.progress = 0;
	        this._nextIndex = 0;
	        this.options = {
	            autoUpload: false,
	            isHTML5: true,
	            filters: [],
	            removeAfterUpload: false,
	            disableMultipart: false
	        };
	        this.setOptions(options);
	    }
	    FileUploader.prototype.setOptions = function (options) {
	        this.options = Object.assign(this.options, options);
	        this.authToken = options.authToken;
	        this.autoUpload = options.autoUpload;
	        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
	        if (this.options.maxFileSize) {
	            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
	        }
	        if (this.options.allowedFileType) {
	            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
	        }
	        if (this.options.allowedMimeType) {
	            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
	        }
	        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
	    };
	    FileUploader.prototype.addToQueue = function (files, options, filters) {
	        var _this = this;
	        var list = [];
	        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
	            var file = files_1[_i];
	            list.push(file);
	        }
	        var arrayOfFilters = this._getFilters(filters);
	        var count = this.queue.length;
	        var addedFileItems = [];
	        list.map(function (some) {
	            if (!options) {
	                options = _this.options;
	            }
	            var temp = new file_like_object_class_1.FileLikeObject(some);
	            if (_this._isValidFile(temp, arrayOfFilters, options)) {
	                var fileItem = new file_item_class_1.FileItem(_this, some, options);
	                addedFileItems.push(fileItem);
	                _this.queue.push(fileItem);
	                _this._onAfterAddingFile(fileItem);
	            }
	            else {
	                var filter = arrayOfFilters[_this._failFilterIndex];
	                _this._onWhenAddingFileFailed(temp, filter, options);
	            }
	        });
	        if (this.queue.length !== count) {
	            this._onAfterAddingAll(addedFileItems);
	            this.progress = this._getTotalProgress();
	        }
	        this._render();
	        if (this.options.autoUpload) {
	            this.uploadAll();
	        }
	    };
	    FileUploader.prototype.removeFromQueue = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        if (item.isUploading) {
	            item.cancel();
	        }
	        this.queue.splice(index, 1);
	        this.progress = this._getTotalProgress();
	    };
	    FileUploader.prototype.clearQueue = function () {
	        while (this.queue.length) {
	            this.queue[0].remove();
	        }
	        this.progress = 0;
	    };
	    FileUploader.prototype.uploadItem = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
	        item._prepareToUploading();
	        if (this.isUploading) {
	            return;
	        }
	        this.isUploading = true;
	        this[transport](item);
	    };
	    FileUploader.prototype.cancelItem = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        var prop = this.options.isHTML5 ? item._xhr : item._form;
	        if (item && item.isUploading) {
	            prop.abort();
	        }
	    };
	    FileUploader.prototype.uploadAll = function () {
	        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
	        if (!items.length) {
	            return;
	        }
	        items.map(function (item) { return item._prepareToUploading(); });
	        items[0].upload();
	    };
	    FileUploader.prototype.cancelAll = function () {
	        var items = this.getNotUploadedItems();
	        items.map(function (item) { return item.cancel(); });
	    };
	    FileUploader.prototype.isFile = function (value) {
	        return isFile(value);
	    };
	    FileUploader.prototype.isFileLikeObject = function (value) {
	        return value instanceof file_like_object_class_1.FileLikeObject;
	    };
	    FileUploader.prototype.getIndexOfItem = function (value) {
	        return typeof value === 'number' ? value : this.queue.indexOf(value);
	    };
	    FileUploader.prototype.getNotUploadedItems = function () {
	        return this.queue.filter(function (item) { return !item.isUploaded; });
	    };
	    FileUploader.prototype.getReadyItems = function () {
	        return this.queue
	            .filter(function (item) { return (item.isReady && !item.isUploading); })
	            .sort(function (item1, item2) { return item1.index - item2.index; });
	    };
	    FileUploader.prototype.destroy = function () {
	        return void 0;
	        /*forEach(this._directives, (key) => {
	         forEach(this._directives[key], (object) => {
	         object.destroy();
	         });
	         });*/
	    };
	    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
	        return { fileItems: fileItems };
	    };
	    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
	        return { fileItem: fileItem, form: form };
	    };
	    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
	        return { fileItem: fileItem };
	    };
	    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
	        return { item: item, filter: filter, options: options };
	    };
	    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
	        return { fileItem: fileItem };
	    };
	    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
	        return { fileItem: fileItem, progress: progress };
	    };
	    FileUploader.prototype.onProgressAll = function (progress) {
	        return { progress: progress };
	    };
	    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCompleteAll = function () {
	        return void 0;
	    };
	    FileUploader.prototype._mimeTypeFilter = function (item) {
	        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
	    };
	    FileUploader.prototype._fileSizeFilter = function (item) {
	        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
	    };
	    FileUploader.prototype._fileTypeFilter = function (item) {
	        return !(this.options.allowedFileType &&
	            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
	    };
	    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
	        item._onError(response, status, headers);
	        this.onErrorItem(item, response, status, headers);
	    };
	    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
	        item._onComplete(response, status, headers);
	        this.onCompleteItem(item, response, status, headers);
	        var nextItem = this.getReadyItems()[0];
	        this.isUploading = false;
	        if (nextItem) {
	            nextItem.upload();
	            return;
	        }
	        this.onCompleteAll();
	        this.progress = this._getTotalProgress();
	        this._render();
	    };
	    FileUploader.prototype._headersGetter = function (parsedHeaders) {
	        return function (name) {
	            if (name) {
	                return parsedHeaders[name.toLowerCase()] || void 0;
	            }
	            return parsedHeaders;
	        };
	    };
	    FileUploader.prototype._xhrTransport = function (item) {
	        var _this = this;
	        var xhr = item._xhr = new XMLHttpRequest();
	        var sendable;
	        this._onBeforeUploadItem(item);
	        // todo
	        /*item.formData.map(obj => {
	         obj.map((value, key) => {
	         form.append(key, value);
	         });
	         });*/
	        if (typeof item._file.size !== 'number') {
	            throw new TypeError('The file specified is no longer valid');
	        }
	        if (!this.options.disableMultipart) {
	            sendable = new FormData();
	            this._onBuildItemForm(item, sendable);
	            sendable.append(item.alias, item._file, item.file.name);
	        }
	        else {
	            sendable = item._file;
	        }
	        xhr.upload.onprogress = function (event) {
	            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
	            _this._onProgressItem(item, progress);
	        };
	        xhr.onload = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
	            var method = '_on' + gist + 'Item';
	            _this[method](item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onerror = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onErrorItem(item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onabort = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onCancelItem(item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.open(item.method, item.url, true);
	        xhr.withCredentials = item.withCredentials;
	        // todo
	        /*item.headers.map((value, name) => {
	         xhr.setRequestHeader(name, value);
	         });*/
	        if (this.options.headers) {
	            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
	                var header = _a[_i];
	                xhr.setRequestHeader(header.name, header.value);
	            }
	        }
	        if (this.authToken) {
	            xhr.setRequestHeader('Authorization', this.authToken);
	        }
	        xhr.send(sendable);
	        this._render();
	    };
	    FileUploader.prototype._getTotalProgress = function (value) {
	        if (value === void 0) { value = 0; }
	        if (this.options.removeAfterUpload) {
	            return value;
	        }
	        var notUploaded = this.getNotUploadedItems().length;
	        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
	        var ratio = 100 / this.queue.length;
	        var current = value * ratio / 100;
	        return Math.round(uploaded * ratio + current);
	    };
	    FileUploader.prototype._getFilters = function (filters) {
	        if (!filters) {
	            return this.options.filters;
	        }
	        if (Array.isArray(filters)) {
	            return filters;
	        }
	        if (typeof filters === 'string') {
	            var names_1 = filters.match(/[^\s,]+/g);
	            return this.options.filters
	                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
	        }
	        return this.options.filters;
	    };
	    FileUploader.prototype._render = function () {
	        return void 0;
	        // todo: ?
	    };
	    // private _folderFilter(item:FileItem):boolean {
	    //   return !!(item.size || item.type);
	    // }
	    FileUploader.prototype._queueLimitFilter = function () {
	        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
	    };
	    FileUploader.prototype._isValidFile = function (file, filters, options) {
	        var _this = this;
	        this._failFilterIndex = -1;
	        return !filters.length ? true : filters.every(function (filter) {
	            _this._failFilterIndex++;
	            return filter.fn.call(_this, file, options);
	        });
	    };
	    FileUploader.prototype._isSuccessCode = function (status) {
	        return (status >= 200 && status < 300) || status === 304;
	    };
	    /* tslint:disable */
	    FileUploader.prototype._transformResponse = function (response, headers) {
	        // todo: ?
	        /*var headersGetter = this._headersGetter(headers);
	         forEach($http.defaults.transformResponse, (transformFn) => {
	         response = transformFn(response, headersGetter);
	         });*/
	        return response;
	    };
	    /* tslint:enable */
	    FileUploader.prototype._parseHeaders = function (headers) {
	        var parsed = {};
	        var key;
	        var val;
	        var i;
	        if (!headers) {
	            return parsed;
	        }
	        headers.split('\n').map(function (line) {
	            i = line.indexOf(':');
	            key = line.slice(0, i).trim().toLowerCase();
	            val = line.slice(i + 1).trim();
	            if (key) {
	                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	            }
	        });
	        return parsed;
	    };
	    /*private _iframeTransport(item:FileItem) {
	     // todo: implement it later
	     }*/
	    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
	        this.onWhenAddingFileFailed(item, filter, options);
	    };
	    FileUploader.prototype._onAfterAddingFile = function (item) {
	        this.onAfterAddingFile(item);
	    };
	    FileUploader.prototype._onAfterAddingAll = function (items) {
	        this.onAfterAddingAll(items);
	    };
	    FileUploader.prototype._onBeforeUploadItem = function (item) {
	        item._onBeforeUpload();
	        this.onBeforeUploadItem(item);
	    };
	    FileUploader.prototype._onBuildItemForm = function (item, form) {
	        item._onBuildForm(form);
	        this.onBuildItemForm(item, form);
	    };
	    FileUploader.prototype._onProgressItem = function (item, progress) {
	        var total = this._getTotalProgress(progress);
	        this.progress = total;
	        item._onProgress(progress);
	        this.onProgressItem(item, progress);
	        this.onProgressAll(total);
	        this._render();
	    };
	    /* tslint:disable */
	    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
	        item._onSuccess(response, status, headers);
	        this.onSuccessItem(item, response, status, headers);
	    };
	    /* tslint:enable */
	    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
	        item._onCancel(response, status, headers);
	        this.onCancelItem(item, response, status, headers);
	    };
	    return FileUploader;
	}());
	exports.FileUploader = FileUploader;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	function isElement(node) {
	    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
	}
	var FileLikeObject = (function () {
	    function FileLikeObject(fileOrInput) {
	        var isInput = isElement(fileOrInput);
	        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
	        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
	        var method = '_createFrom' + postfix;
	        this[method](fakePathOrObject);
	    }
	    FileLikeObject.prototype._createFromFakePath = function (path) {
	        this.lastModifiedDate = void 0;
	        this.size = void 0;
	        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
	        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
	    };
	    FileLikeObject.prototype._createFromObject = function (object) {
	        // this.lastModifiedDate = copy(object.lastModifiedDate);
	        this.size = object.size;
	        this.type = object.type;
	        this.name = object.name;
	    };
	    return FileLikeObject;
	}());
	exports.FileLikeObject = FileLikeObject;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var file_like_object_class_1 = __webpack_require__(7);
	var FileItem = (function () {
	    function FileItem(uploader, some, options) {
	        this.url = '/';
	        this.headers = [];
	        this.withCredentials = true;
	        this.formData = [];
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.index = void 0;
	        this.uploader = uploader;
	        this.some = some;
	        this.options = options;
	        this.file = new file_like_object_class_1.FileLikeObject(some);
	        this._file = some;
	        if (uploader.options) {
	            this.method = uploader.options.method || 'POST';
	            this.alias = uploader.options.itemAlias || 'file';
	        }
	        this.url = uploader.options.url;
	    }
	    FileItem.prototype.upload = function () {
	        try {
	            this.uploader.uploadItem(this);
	        }
	        catch (e) {
	            this.uploader._onCompleteItem(this, '', 0, {});
	            this.uploader._onErrorItem(this, '', 0, {});
	        }
	    };
	    FileItem.prototype.cancel = function () {
	        this.uploader.cancelItem(this);
	    };
	    FileItem.prototype.remove = function () {
	        this.uploader.removeFromQueue(this);
	    };
	    FileItem.prototype.onBeforeUpload = function () {
	        return void 0;
	    };
	    FileItem.prototype.onBuildForm = function (form) {
	        return { form: form };
	    };
	    FileItem.prototype.onProgress = function (progress) {
	        return { progress: progress };
	    };
	    FileItem.prototype.onSuccess = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onError = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onCancel = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onComplete = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype._onBeforeUpload = function () {
	        this.isReady = true;
	        this.isUploading = true;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.onBeforeUpload();
	    };
	    FileItem.prototype._onBuildForm = function (form) {
	        this.onBuildForm(form);
	    };
	    FileItem.prototype._onProgress = function (progress) {
	        this.progress = progress;
	        this.onProgress(progress);
	    };
	    FileItem.prototype._onSuccess = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = true;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 100;
	        this.index = void 0;
	        this.onSuccess(response, status, headers);
	    };
	    FileItem.prototype._onError = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = true;
	        this.progress = 0;
	        this.index = void 0;
	        this.onError(response, status, headers);
	    };
	    FileItem.prototype._onCancel = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = true;
	        this.isError = false;
	        this.progress = 0;
	        this.index = void 0;
	        this.onCancel(response, status, headers);
	    };
	    FileItem.prototype._onComplete = function (response, status, headers) {
	        this.onComplete(response, status, headers);
	        if (this.uploader.options.removeAfterUpload) {
	            this.remove();
	        }
	    };
	    FileItem.prototype._prepareToUploading = function () {
	        this.index = this.index || ++this.uploader._nextIndex;
	        this.isReady = true;
	    };
	    return FileItem;
	}());
	exports.FileItem = FileItem;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var FileType = (function () {
	    function FileType() {
	    }
	    FileType.getMimeClass = function (file) {
	        var mimeClass = 'application';
	        if (this.mime_psd.indexOf(file.type) !== -1) {
	            mimeClass = 'image';
	        }
	        else if (file.type.match('image.*')) {
	            mimeClass = 'image';
	        }
	        else if (file.type.match('video.*')) {
	            mimeClass = 'video';
	        }
	        else if (file.type.match('audio.*')) {
	            mimeClass = 'audio';
	        }
	        else if (file.type === 'application/pdf') {
	            mimeClass = 'pdf';
	        }
	        else if (this.mime_compress.indexOf(file.type) !== -1) {
	            mimeClass = 'compress';
	        }
	        else if (this.mime_doc.indexOf(file.type) !== -1) {
	            mimeClass = 'doc';
	        }
	        else if (this.mime_xsl.indexOf(file.type) !== -1) {
	            mimeClass = 'xls';
	        }
	        else if (this.mime_ppt.indexOf(file.type) !== -1) {
	            mimeClass = 'ppt';
	        }
	        if (mimeClass === 'application') {
	            mimeClass = this.fileTypeDetection(file.name);
	        }
	        return mimeClass;
	    };
	    FileType.fileTypeDetection = function (inputFilename) {
	        var types = {
	            'jpg': 'image',
	            'jpeg': 'image',
	            'tif': 'image',
	            'psd': 'image',
	            'bmp': 'image',
	            'png': 'image',
	            'nef': 'image',
	            'tiff': 'image',
	            'cr2': 'image',
	            'dwg': 'image',
	            'cdr': 'image',
	            'ai': 'image',
	            'indd': 'image',
	            'pin': 'image',
	            'cdp': 'image',
	            'skp': 'image',
	            'stp': 'image',
	            '3dm': 'image',
	            'mp3': 'audio',
	            'wav': 'audio',
	            'wma': 'audio',
	            'mod': 'audio',
	            'm4a': 'audio',
	            'compress': 'compress',
	            'rar': 'compress',
	            '7z': 'compress',
	            'lz': 'compress',
	            'z01': 'compress',
	            'pdf': 'pdf',
	            'xls': 'xls',
	            'xlsx': 'xls',
	            'ods': 'xls',
	            'mp4': 'video',
	            'avi': 'video',
	            'wmv': 'video',
	            'mpg': 'video',
	            'mts': 'video',
	            'flv': 'video',
	            '3gp': 'video',
	            'vob': 'video',
	            'm4v': 'video',
	            'mpeg': 'video',
	            'm2ts': 'video',
	            'mov': 'video',
	            'doc': 'doc',
	            'docx': 'doc',
	            'eps': 'doc',
	            'txt': 'doc',
	            'odt': 'doc',
	            'rtf': 'doc',
	            'ppt': 'ppt',
	            'pptx': 'ppt',
	            'pps': 'ppt',
	            'ppsx': 'ppt',
	            'odp': 'ppt'
	        };
	        var chunks = inputFilename.split('.');
	        if (chunks.length < 2) {
	            return 'application';
	        }
	        var extension = chunks[chunks.length - 1].toLowerCase();
	        if (types[extension] === undefined) {
	            return 'application';
	        }
	        else {
	            return types[extension];
	        }
	    };
	    /*  MS office  */
	    FileType.mime_doc = [
	        'application/msword',
	        'application/msword',
	        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
	        'application/vnd.ms-word.document.macroEnabled.12',
	        'application/vnd.ms-word.template.macroEnabled.12'
	    ];
	    FileType.mime_xsl = [
	        'application/vnd.ms-excel',
	        'application/vnd.ms-excel',
	        'application/vnd.ms-excel',
	        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
	        'application/vnd.ms-excel.sheet.macroEnabled.12',
	        'application/vnd.ms-excel.template.macroEnabled.12',
	        'application/vnd.ms-excel.addin.macroEnabled.12',
	        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
	    ];
	    FileType.mime_ppt = [
	        'application/vnd.ms-powerpoint',
	        'application/vnd.ms-powerpoint',
	        'application/vnd.ms-powerpoint',
	        'application/vnd.ms-powerpoint',
	        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	        'application/vnd.openxmlformats-officedocument.presentationml.template',
	        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
	        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
	        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
	        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
	        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
	    ];
	    /* PSD */
	    FileType.mime_psd = [
	        'image/photoshop',
	        'image/x-photoshop',
	        'image/psd',
	        'application/photoshop',
	        'application/psd',
	        'zz-application/zz-winassoc-psd'
	    ];
	    /* Compressed files */
	    FileType.mime_compress = [
	        'application/x-gtar',
	        'application/x-gcompress',
	        'application/compress',
	        'application/x-tar',
	        'application/x-rar-compressed',
	        'application/octet-stream'
	    ];
	    return FileType;
	}());
	exports.FileType = FileType;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var file_uploader_class_1 = __webpack_require__(6);
	var FileDropDirective = (function () {
	    function FileDropDirective(element) {
	        this.fileOver = new core_1.EventEmitter();
	        this.onFileDrop = new core_1.EventEmitter();
	        this.element = element;
	    }
	    FileDropDirective.prototype.getOptions = function () {
	        return this.uploader.options;
	    };
	    FileDropDirective.prototype.getFilters = function () {
	        return {};
	    };
	    FileDropDirective.prototype.onDrop = function (event) {
	        var transfer = this._getTransfer(event);
	        if (!transfer) {
	            return;
	        }
	        var options = this.getOptions();
	        var filters = this.getFilters();
	        this._preventAndStop(event);
	        this.uploader.addToQueue(transfer.files, options, filters);
	        this.fileOver.emit(false);
	        this.onFileDrop.emit(transfer.files);
	    };
	    FileDropDirective.prototype.onDragOver = function (event) {
	        var transfer = this._getTransfer(event);
	        if (!this._haveFiles(transfer.types)) {
	            return;
	        }
	        transfer.dropEffect = 'copy';
	        this._preventAndStop(event);
	        this.fileOver.emit(true);
	    };
	    FileDropDirective.prototype.onDragLeave = function (event) {
	        if (event.currentTarget === this.element[0]) {
	            return;
	        }
	        this._preventAndStop(event);
	        this.fileOver.emit(false);
	    };
	    FileDropDirective.prototype._getTransfer = function (event) {
	        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
	    };
	    FileDropDirective.prototype._preventAndStop = function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	    };
	    FileDropDirective.prototype._haveFiles = function (types) {
	        if (!types) {
	            return false;
	        }
	        if (types.indexOf) {
	            return types.indexOf('Files') !== -1;
	        }
	        else if (types.contains) {
	            return types.contains('Files');
	        }
	        else {
	            return false;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', file_uploader_class_1.FileUploader)
	    ], FileDropDirective.prototype, "uploader", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], FileDropDirective.prototype, "fileOver", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], FileDropDirective.prototype, "onFileDrop", void 0);
	    __decorate([
	        core_1.HostListener('drop', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], FileDropDirective.prototype, "onDrop", null);
	    __decorate([
	        core_1.HostListener('dragover', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], FileDropDirective.prototype, "onDragOver", null);
	    __decorate([
	        core_1.HostListener('dragleave', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', Object)
	    ], FileDropDirective.prototype, "onDragLeave", null);
	    FileDropDirective = __decorate([
	        core_1.Directive({ selector: '[ng2FileDrop]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], FileDropDirective);
	    return FileDropDirective;
	}());
	exports.FileDropDirective = FileDropDirective;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(2);
	var file_drop_directive_1 = __webpack_require__(10);
	var file_select_directive_1 = __webpack_require__(5);
	var FileUploadModule = (function () {
	    function FileUploadModule() {
	    }
	    FileUploadModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
	            exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FileUploadModule);
	    return FileUploadModule;
	}());
	exports.FileUploadModule = FileUploadModule;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var cloudinary_options_class_1 = __webpack_require__(13);
	var cloudinary_transforms_class_1 = __webpack_require__(14);
	var cloudinary_image_service_1 = __webpack_require__(15);
	var CloudinaryImageComponent = (function () {
	    function CloudinaryImageComponent(_imageService) {
	        this._imageService = _imageService;
	        this.imageUrl = '';
	        this.transforms = new cloudinary_transforms_class_1.CloudinaryTransforms();
	    }
	    CloudinaryImageComponent.prototype.ngOnInit = function () {
	        if (!this.options)
	            throw new Error('CloudinaryOptions are required for cl-image component');
	    };
	    CloudinaryImageComponent.prototype.ngOnChanges = function (changes) {
	        if (this.publicId && this.options) {
	            this.imageUrl = this._imageService.getImageUrl(this.publicId, this.options, this.transforms);
	        }
	        else {
	            this.imageUrl = '';
	        }
	    };
	    Object.defineProperty(CloudinaryImageComponent.prototype, "width", {
	        set: function (value) {
	            this.transforms.width = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "height", {
	        set: function (value) {
	            this.transforms.height = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "crop", {
	        set: function (value) {
	            this.transforms.crop = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "aspect_ratio", {
	        set: function (value) {
	            this.transforms.aspect_ratio = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "gravity", {
	        set: function (value) {
	            this.transforms.gravity = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "zoom", {
	        set: function (value) {
	            this.transforms.zoom = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "x", {
	        set: function (value) {
	            this.transforms.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "y", {
	        set: function (value) {
	            this.transforms.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "format", {
	        set: function (value) {
	            this.transforms.format = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "quality", {
	        set: function (value) {
	            this.transforms.quality = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "radius", {
	        set: function (value) {
	            this.transforms.radius = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "angle", {
	        set: function (value) {
	            this.transforms.angle = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "effect", {
	        set: function (value) {
	            this.transforms.effect = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "opacity", {
	        set: function (value) {
	            this.transforms.opacity = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "border", {
	        set: function (value) {
	            this.transforms.border = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "background", {
	        set: function (value) {
	            this.transforms.background = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "overlay", {
	        set: function (value) {
	            this.transforms.overlay = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "underlay", {
	        set: function (value) {
	            this.transforms.underlay = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "default_image", {
	        set: function (value) {
	            this.transforms.default_image = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "delay", {
	        set: function (value) {
	            this.transforms.delay = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "color", {
	        set: function (value) {
	            this.transforms.color = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "dpr", {
	        set: function (value) {
	            this.transforms.dpr = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "page", {
	        set: function (value) {
	            this.transforms.page = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "density", {
	        set: function (value) {
	            this.transforms.density = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "flags", {
	        set: function (value) {
	            this.transforms.flags = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CloudinaryImageComponent.prototype, "transformation", {
	        set: function (value) {
	            this.transforms.transformation = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input('public-id'), 
	        __metadata('design:type', String)
	    ], CloudinaryImageComponent.prototype, "publicId", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof cloudinary_options_class_1.CloudinaryOptions !== 'undefined' && cloudinary_options_class_1.CloudinaryOptions) === 'function' && _a) || Object)
	    ], CloudinaryImageComponent.prototype, "options", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CloudinaryImageComponent.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CloudinaryImageComponent.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "width", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "height", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "crop", null);
	    __decorate([
	        core_1.Input('aspect-ratio'), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "aspect_ratio", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "gravity", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "zoom", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "x", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "y", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "format", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "quality", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "radius", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "angle", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "effect", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "opacity", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "border", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "background", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "overlay", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "underlay", null);
	    __decorate([
	        core_1.Input('default-image'), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "default_image", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "delay", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "color", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "dpr", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "page", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], CloudinaryImageComponent.prototype, "density", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "flags", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], CloudinaryImageComponent.prototype, "transformation", null);
	    CloudinaryImageComponent = __decorate([
	        core_1.Component({
	            selector: 'cl-image',
	            template: "\n    <img [src]=\"imageUrl\" [title]=\"title ||\u00A0''\" [alt]=\"alt ||\u00A0''\">\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof cloudinary_image_service_1.CloudinaryImageService !== 'undefined' && cloudinary_image_service_1.CloudinaryImageService) === 'function' && _b) || Object])
	    ], CloudinaryImageComponent);
	    return CloudinaryImageComponent;
	    var _a, _b;
	}());
	exports.CloudinaryImageComponent = CloudinaryImageComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var CloudinaryOptions = (function () {
	    function CloudinaryOptions(opts) {
	        if (!opts.cloud_name) {
	            throw new Error('cloud_name is required for CloudinaryOptions');
	        }
	        this.cloud_name = opts.cloud_name;
	        this.upload_preset = opts.upload_preset;
	        this.resource_type = opts.resource_type || 'auto';
	        this.type = opts.type || 'upload';
	        this.autoUpload = !!opts.autoUpload || false;
	    }
	    return CloudinaryOptions;
	}());
	exports.CloudinaryOptions = CloudinaryOptions;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var CloudinaryTransforms = (function () {
	    function CloudinaryTransforms() {
	    }
	    CloudinaryTransforms.prototype.toUrlSegment = function () {
	        var transformSegment = '';
	        //Loop on all transformations
	        for (var key in this) {
	            if (this.hasOwnProperty(key) && key !== 'format') {
	                transformSegment += this.toPropertySegment(transformSegment, key, this[key]);
	            }
	        }
	        if (transformSegment.length > 0) {
	            transformSegment += '/';
	        }
	        return transformSegment;
	    };
	    CloudinaryTransforms.prototype.toPropertySegment = function (segment, transformation, value) {
	        var newSegment = '';
	        if (transformation && value) {
	            if (segment.length > 0) {
	                newSegment += ',';
	            }
	            newSegment += CloudinaryTransforms.URL_PARAMS[transformation] + '_' + value;
	        }
	        return newSegment;
	    };
	    CloudinaryTransforms.URL_PARAMS = {
	        'width': 'w',
	        'height': 'h',
	        'crop': 'c',
	        'aspect_ratio': 'ar',
	        'gravity': 'g',
	        'zoom': 'z',
	        'x': 'x',
	        'y': 'y',
	        'quality': 'q',
	        'radius': 'r',
	        'angle': 'a',
	        'effect': 'e',
	        'opacity': 'o',
	        'border': 'bo',
	        'background': 'b',
	        'overlay': 'l',
	        'underlay': 'u',
	        'default_image': 'd',
	        'delay': 'dl',
	        'color': 'co',
	        'dpr': 'dpr',
	        'page': 'pg',
	        'density': 'dn',
	        'flags': 'fl',
	        'transformation': 't'
	    };
	    return CloudinaryTransforms;
	}());
	exports.CloudinaryTransforms = CloudinaryTransforms;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CLOUDINARY_URL = 'https://res.cloudinary.com/';
	var CloudinaryImageService = (function () {
	    function CloudinaryImageService() {
	    }
	    CloudinaryImageService.prototype.getImageUrl = function (publicId, options, transforms) {
	        return CLOUDINARY_URL +
	            options.cloud_name + '/' +
	            'image/upload/' +
	            transforms.toUrlSegment() +
	            publicId + '.' + (transforms.format || 'jpg');
	    };
	    CloudinaryImageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CloudinaryImageService);
	    return CloudinaryImageService;
	}());
	exports.CloudinaryImageService = CloudinaryImageService;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	var ng2_file_upload_2 = __webpack_require__(4);
	var UPLOAD_ENDPOINT = 'https://api.cloudinary.com/v1_1/';
	var CloudinaryUploader = (function (_super) {
	    __extends(CloudinaryUploader, _super);
	    function CloudinaryUploader(opts) {
	        _super.call(this, {});
	        this.opts = opts;
	        this.options.url = this.getUploadUrl(opts);
	        this.options.autoUpload = opts.autoUpload;
	    }
	    CloudinaryUploader.prototype.onBuildItemForm = function (fileItem, form) {
	        form.append('upload_preset', this.opts.upload_preset);
	        // Force the file uploader to never use app credentials
	        fileItem.withCredentials = false;
	        return { fileItem: fileItem, form: form };
	    };
	    CloudinaryUploader.prototype.getUploadUrl = function (opts) {
	        var cloud_name = opts.cloud_name;
	        var resource_type = opts.resource_type;
	        var type = opts.type;
	        return UPLOAD_ENDPOINT + cloud_name + '/' + resource_type + '/' + type;
	    };
	    return CloudinaryUploader;
	}(ng2_file_upload_2.FileUploader));
	exports.CloudinaryUploader = CloudinaryUploader;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-cloudinary.js.map