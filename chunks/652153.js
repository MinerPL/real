            "use strict";
            var e = n("188523"),
                o = n("427191").findLastIndex,
                i = e.aTypedArray;
            (0, e.exportTypedArrayMethod)("findLastIndex", function(t) {
                return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
            })