            "use strict";
            var r = s("37549"),
                i = s("537778"),
                n = r("%TypeError%");
            t.exports = function(t, e) {
                if ("Object" !== t.Type(e)) return !1;
                var s = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var r in e)
                    if (i(e, r) && !s[r]) return !1;
                if (t.IsDataDescriptor(e) && t.IsAccessorDescriptor(e)) throw new n("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }