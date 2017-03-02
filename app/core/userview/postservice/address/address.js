System.register(["@angular/core", "@angular/router", "angular2-google-maps/core"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, core_2, AddressComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            //@Injectable()
            AddressComponent = (function () {
                function AddressComponent(_router, zone, _loader) {
                    this._router = _router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.serviceinfoChange = new core_1.EventEmitter();
                    this.findCurrentLocation();
                    this.loadAutocomplete();
                }
                AddressComponent.prototype.loadAutocomplete = function () {
                    var _this = this;
                    this._loader.load().then(function () {
                        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function () {
                            var place = autocomplete.getPlace();
                            _this.serviceinfo.latitude = place.geometry.location.lat();
                            _this.serviceinfo.longitude = place.geometry.location.lng();
                            _this.findCity();
                            _this.userAddress = "";
                        });
                    });
                };
                AddressComponent.prototype.findCurrentLocation = function () {
                    var _this = this;
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.serviceinfo.latitude = position.coords.latitude;
                            _this.serviceinfo.longitude = position.coords.longitude;
                            _this.findCity();
                        }, function () {
                            alert('error');
                        });
                    }
                    else {
                        // Browser doesn't support Geolocation
                        alert('error');
                    }
                };
                AddressComponent.prototype.findCity = function () {
                    var geocoder;
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(this.serviceinfo.latitude, this.serviceinfo.longitude);
                    var _this = this;
                    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var value = results[0].address_components;
                                console.log(value);
                                //	var value = add.split(",");
                                var count = value.length;
                                //country = value[count - 1];
                                //state = value[count - 2];
                                _this.city = value[count - 5].long_name;
                                var finaAddress;
                                value.forEach(function (addr) {
                                    if (finaAddress)
                                        finaAddress = finaAddress + '\n' + ',' + addr.long_name;
                                    else
                                        finaAddress = addr.long_name;
                                });
                                //	_this.userAddress = results[0].formatted_address;
                                _this.serviceinfo.address = "\n" + finaAddress;
                            }
                            else {
                                alert("address not found");
                            }
                        }
                        else {
                            alert("Geocoder failed due to: " + status);
                        }
                    });
                };
                AddressComponent.prototype.markerPostionChanged = function (object) {
                    this.serviceinfo.latitude = object.coords.lat;
                    this.serviceinfo.longitude = object.coords.lng;
                    this.findCity();
                };
                AddressComponent.prototype.isEmpty = function (obj) {
                    return Object.keys(obj).length === 0;
                };
                AddressComponent.prototype.addressChange = function (value) {
                    this.serviceinfoChange.emit(this.serviceinfo);
                };
                return AddressComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], AddressComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], AddressComponent.prototype, "serviceinfoChange", void 0);
            AddressComponent = __decorate([
                core_1.Component({
                    selector: 'address',
                    templateUrl: 'app/core/userview/postservice/address/address.html',
                    styleUrls: ['app/core/userview/postservice/address/address.css'],
                    providers: []
                }),
                __metadata("design:paramtypes", [router_1.Router, core_1.NgZone, core_2.MapsAPILoader])
            ], AddressComponent);
            exports_1("AddressComponent", AddressComponent);
        }
    };
});
//# sourceMappingURL=address.js.map