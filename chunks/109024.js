            "use strict";
            var n = r("814026"),
                o = r("231814"),
                i = TypeError,
                c = Object.getOwnPropertyDescriptor,
                u = n && ! function() {
                    if (void 0 !== this) return !0;
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).length = 1
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }();
            t.exports = u ? function(t, e) {
                if (o(t) && !c(t, "length").writable) throw i("Cannot set read only .length");
                return t.length = e
            } : function(t, e) {
                return t.length = e
            }