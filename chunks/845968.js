            t.exports = function(t) {
                var e = !0,
                    r = !0,
                    i = !1;
                if ("function" == typeof t) {
                    try {
                        t.call("f", function(t, r, i) {
                            "object" != typeof i && (e = !1)
                        }), t.call([null], function() {
                            "use strict";
                            r = "string" == typeof this
                        }, "x")
                    } catch (t) {
                        i = !0
                    }
                    return !i && e && r
                }
                return !1
            }