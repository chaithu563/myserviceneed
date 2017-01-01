System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Dictionary, postServiceRoute;
    return {
        setters: [],
        execute: function () {
            Dictionary = (function () {
                function Dictionary(init) {
                    this._keys = new Array();
                    this._values = new Array();
                    for (var x = 0; x < init.length; x++) {
                        this[init[x].key] = init[x].value;
                        this._keys.push(init[x].key);
                        this._values.push(init[x].value);
                    }
                }
                Dictionary.prototype.add = function (key, value) {
                    this[key] = value;
                    this._keys.push(key);
                    this._values.push(value);
                };
                Dictionary.prototype.remove = function (key) {
                    var index = this._keys.indexOf(key, 0);
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    delete this[key];
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.values = function () {
                    return this._values;
                };
                Dictionary.prototype.containsKey = function (key) {
                    if (typeof this[key] === "undefined") {
                        return false;
                    }
                    return true;
                };
                Dictionary.prototype.toLookup = function () {
                    return this;
                };
                return Dictionary;
            }());
            postServiceRoute = (function (_super) {
                __extends(postServiceRoute, _super);
                function postServiceRoute(init) {
                    return _super.call(this, init) || this;
                }
                postServiceRoute.prototype.values = function () {
                    return this._values;
                };
                postServiceRoute.prototype.toLookup = function () {
                    return this;
                };
                return postServiceRoute;
            }(Dictionary));
            exports_1("postServiceRoute", postServiceRoute);
        }
    };
});
//# sourceMappingURL=postServiceRoute.js.map