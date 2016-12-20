(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["MSNAdmin.Models.CITY"] = $data("$data.Entity").extend("MSNAdmin.Models.CITY", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        CITYAREAs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.CITYAREA",
            "inverseProperty": "$$unbound"
        },
        USERINFOes: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.CITYAREA"] = $data("$data.Entity").extend("MSNAdmin.Models.CITYAREA", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        CITYID: {
            "type": "Edm.Decimal"
        },
        CITY: {
            "type": "MSNAdmin.Models.CITY",
            "inverseProperty": "$$unbound"
        },
        USERINFOes: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.MEMBERSHIP"] = $data("$data.Entity").extend("MSNAdmin.Models.MEMBERSHIP", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        USERMEMBERSHIPs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERMEMBERSHIP",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERPWD"] = $data("$data.Entity").extend("MSNAdmin.Models.USERPWD", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        PWD: {
            "type": "Edm.String"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERSERVICETIMEREOCRD"] = $data("$data.Entity").extend("MSNAdmin.Models.USERSERVICETIMEREOCRD", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        SERVICEID: {
            "type": "Edm.Decimal"
        },
        SERVICENEEDEDDATE: {
            "type": "Edm.DateTimeOffset"
        },
        SERVICESTARTDATE: {
            "type": "Edm.DateTimeOffset"
        },
        SERVICEENDDATE: {
            "type": "Edm.DateTimeOffset"
        },
        SERVICESTARTTIME: {
            "type": "Edm.Duration"
        },
        SERVICEENDTIME: {
            "type": "Edm.Duration"
        },
        USERSERVICENEED: {
            "type": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SERVICEBID"] = $data("$data.Entity").extend("MSNAdmin.Models.SERVICEBID", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        USERSERVICENEEDID: {
            "type": "Edm.Decimal"
        },
        BIDTITLE: {
            "type": "Edm.String"
        },
        BIDDESCRIPTION: {
            "type": "Edm.String"
        },
        BIDAMOUNT: {
            "type": "Edm.Decimal"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        },
        USERSERVICENEED: {
            "type": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SERVICECATEGORY"] = $data("$data.Entity").extend("MSNAdmin.Models.SERVICECATEGORY", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        SERVICESUBCATEGORies: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.SERVICESUBCATEGORY",
            "inverseProperty": "$$unbound"
        },
        USERSERVICEs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICE",
            "inverseProperty": "$$unbound"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SERVICESTATE"] = $data("$data.Entity").extend("MSNAdmin.Models.SERVICESTATE", {
        ID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SERVICESUBCATEGORY"] = $data("$data.Entity").extend("MSNAdmin.Models.SERVICESUBCATEGORY", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        SERVICECATEGORYID: {
            "type": "Edm.Decimal"
        },
        SERVICECATEGORY: {
            "type": "MSNAdmin.Models.SERVICECATEGORY",
            "inverseProperty": "$$unbound"
        },
        USERSERVICEs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICE",
            "inverseProperty": "$$unbound"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SERVICETIMETYPE"] = $data("$data.Entity").extend("MSNAdmin.Models.SERVICETIMETYPE", {
        ID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.SOCIALLOGIN"] = $data("$data.Entity").extend("MSNAdmin.Models.SOCIALLOGIN", {
        ID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        DESCRIPTION: {
            "type": "Edm.String"
        },
        USERINFOes: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERBID"] = $data("$data.Entity").extend("MSNAdmin.Models.USERBID", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        BIDS: {
            "type": "Edm.Int32"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERFUND"] = $data("$data.Entity").extend("MSNAdmin.Models.USERFUND", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        BALANCE: {
            "type": "Edm.Decimal"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERINFO"] = $data("$data.Entity").extend("MSNAdmin.Models.USERINFO", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        EMAIL: {
            "type": "Edm.String"
        },
        PHONE: {
            "type": "Edm.String"
        },
        CITYID: {
            "type": "Edm.Decimal"
        },
        CITYAREAID: {
            "type": "Edm.Decimal"
        },
        LOGINTYPEID: {
            "type": "Edm.Int32"
        },
        CURRENTLOCATION: {
            "type": "Edm.String"
        },
        CITY: {
            "type": "MSNAdmin.Models.CITY",
            "inverseProperty": "$$unbound"
        },
        CITYAREA: {
            "type": "MSNAdmin.Models.CITYAREA",
            "inverseProperty": "$$unbound"
        },
        SERVICEBIDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.SERVICEBID",
            "inverseProperty": "$$unbound"
        },
        SOCIALLOGIN: {
            "type": "MSNAdmin.Models.SOCIALLOGIN",
            "inverseProperty": "$$unbound"
        },
        USERBIDS: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERBID",
            "inverseProperty": "$$unbound"
        },
        USERFUNDS: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERFUND",
            "inverseProperty": "$$unbound"
        },
        USERMEMBERSHIPs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERMEMBERSHIP",
            "inverseProperty": "$$unbound"
        },
        USERSERVICEs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICE",
            "inverseProperty": "$$unbound"
        },
        USERSERVICENEEDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICENEED",
            "inverseProperty": "$$unbound"
        },
        USERPWDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERPWD",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.ADMININFO"] = $data("$data.Entity").extend("MSNAdmin.Models.ADMININFO", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        NAME: {
            "type": "Edm.String"
        },
        EMAIL: {
            "type": "Edm.String"
        },
        PHONE: {
            "type": "Edm.String"
        },
        PWD: {
            "type": "Edm.String"
        }
    });

    types["MSNAdmin.Models.USERMEMBERSHIP"] = $data("$data.Entity").extend("MSNAdmin.Models.USERMEMBERSHIP", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        MEMBERSHIPID: {
            "type": "Edm.Decimal"
        },
        COMMENTS: {
            "type": "Edm.String"
        },
        STARTDATE: {
            "type": "Edm.DateTimeOffset"
        },
        ENDDATE: {
            "type": "Edm.DateTimeOffset"
        },
        MEMBERSHIP: {
            "type": "MSNAdmin.Models.MEMBERSHIP",
            "inverseProperty": "$$unbound"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERSERVICE"] = $data("$data.Entity").extend("MSNAdmin.Models.USERSERVICE", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        SERVICECATEGORYID: {
            "type": "Edm.Decimal"
        },
        SERVICESUBCATEGORYID: {
            "type": "Edm.Decimal"
        },
        SERVICECATEGORY: {
            "type": "MSNAdmin.Models.SERVICECATEGORY",
            "inverseProperty": "$$unbound"
        },
        SERVICESUBCATEGORY: {
            "type": "MSNAdmin.Models.SERVICESUBCATEGORY",
            "inverseProperty": "$$unbound"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        }
    });

    types["MSNAdmin.Models.USERSERVICENEED"] = $data("$data.Entity").extend("MSNAdmin.Models.USERSERVICENEED", {
        ID: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        USERID: {
            "type": "Edm.Decimal"
        },
        SERVICELOCATION: {
            "type": "Edm.String"
        },
        SERVICETITLE: {
            "type": "Edm.String"
        },
        SERVICEDESCRIPTION: {
            "type": "Edm.String"
        },
        SERVICECATEGORYID: {
            "type": "Edm.Decimal"
        },
        SERVICESUBCATEGORYID: {
            "type": "Edm.Decimal"
        },
        MINBUDGET: {
            "type": "Edm.Decimal"
        },
        MAXBUDGET: {
            "type": "Edm.Decimal"
        },
        SERVICESTATE: {
            "type": "Edm.Int32"
        },
        SERVICETIMETYPE: {
            "type": "Edm.Int32"
        },
        ALLOCATEDBIDID: {
            "type": "Edm.Decimal"
        },
        SERVICEBIDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.SERVICEBID",
            "inverseProperty": "$$unbound"
        },
        SERVICEBID: {
            "type": "MSNAdmin.Models.SERVICEBID",
            "inverseProperty": "$$unbound"
        },
        SERVICECATEGORY: {
            "type": "MSNAdmin.Models.SERVICECATEGORY",
            "inverseProperty": "$$unbound"
        },
        SERVICESTATE1: {
            "type": "MSNAdmin.Models.SERVICESTATE",
            "inverseProperty": "$$unbound"
        },
        SERVICESUBCATEGORY: {
            "type": "MSNAdmin.Models.SERVICESUBCATEGORY",
            "inverseProperty": "$$unbound"
        },
        SERVICETIMETYPE1: {
            "type": "MSNAdmin.Models.SERVICETIMETYPE",
            "inverseProperty": "$$unbound"
        },
        USERINFO: {
            "type": "MSNAdmin.Models.USERINFO",
            "inverseProperty": "$$unbound"
        },
        USERSERVICETIMEREOCRDs: {
            "type": "Array",
            "elementType": "MSNAdmin.Models.USERSERVICETIMEREOCRD",
            "inverseProperty": "$$unbound"
        }
    });

    exports.type = types["MSN.Container"] = $data("$data.EntityContext").extend("MSN.Container", {
        CITies: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.CITY"
        },
        CITYAREAs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.CITYAREA"
        },
        MEMBERSHIPs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.MEMBERSHIP"
        },
        USERPWDs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERPWD"
        },
        USERSERVICETIMEREOCRDs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERSERVICETIMEREOCRD"
        },
        SERVICEBIDs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SERVICEBID"
        },
        SERVICECATEGORies: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SERVICECATEGORY"
        },
        SERVICESTATEs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SERVICESTATE"
        },
        SERVICESUBCATEGORies: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SERVICESUBCATEGORY"
        },
        SERVICETIMETYPEs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SERVICETIMETYPE"
        },
        SOCIALLOGINs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.SOCIALLOGIN"
        },
        USERBIDS: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERBID"
        },
        USERFUNDS: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERFUND"
        },
        USERINFOes: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERINFO"
        },
        ADMININFOes: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.ADMININFO"
        },
        USERMEMBERSHIPs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERMEMBERSHIP"
        },
        USERSERVICEs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERSERVICE"
        },
        USERSERVICENEEDs: {
            "type": "$data.EntitySet",
            "elementType": "MSNAdmin.Models.USERSERVICENEED"
        }
    });

    exports.MSNAdmin = {
        "Models": {
            "CITY": types["MSNAdmin.Models.CITY"],
            "CITYAREA": types["MSNAdmin.Models.CITYAREA"],
            "MEMBERSHIP": types["MSNAdmin.Models.MEMBERSHIP"],
            "USERPWD": types["MSNAdmin.Models.USERPWD"],
            "USERSERVICETIMEREOCRD": types["MSNAdmin.Models.USERSERVICETIMEREOCRD"],
            "SERVICEBID": types["MSNAdmin.Models.SERVICEBID"],
            "SERVICECATEGORY": types["MSNAdmin.Models.SERVICECATEGORY"],
            "SERVICESTATE": types["MSNAdmin.Models.SERVICESTATE"],
            "SERVICESUBCATEGORY": types["MSNAdmin.Models.SERVICESUBCATEGORY"],
            "SERVICETIMETYPE": types["MSNAdmin.Models.SERVICETIMETYPE"],
            "SOCIALLOGIN": types["MSNAdmin.Models.SOCIALLOGIN"],
            "USERBID": types["MSNAdmin.Models.USERBID"],
            "USERFUND": types["MSNAdmin.Models.USERFUND"],
            "USERINFO": types["MSNAdmin.Models.USERINFO"],
            "ADMININFO": types["MSNAdmin.Models.ADMININFO"],
            "USERMEMBERSHIP": types["MSNAdmin.Models.USERMEMBERSHIP"],
            "USERSERVICE": types["MSNAdmin.Models.USERSERVICE"],
            "USERSERVICENEED": types["MSNAdmin.Models.USERSERVICENEED"]
        }
    };

    exports.MSN = {
        "Container": types["MSN.Container"]
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://localhost/MSNAdmin/odata",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {}

});