            "use strict";
            var i = r("37549"),
                n = r("537778"),
                o = i("%TypeError%");
            t.exports = function(t, e) {
                if ("Object" !== t.Type(e)) return !1;
                var r = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var i in e)
                    if (n(e, i) && !r[i]) return !1;
                if (t.IsDataDescriptor(e) && t.IsAccessorDescriptor(e)) throw new o("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }