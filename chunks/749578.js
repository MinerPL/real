            "use strict";
            var i = r("883506")("%Reflect.construct%", !0),
                n = r("53503");
            try {
                n({}, "", {
                    "[[Get]]": function() {}
                })
            } catch (t) {
                n = null
            }
            if (n && i) {
                var o = {},
                    a = {};
                n(a, "length", {
                    "[[Get]]": function() {
                        throw o
                    },
                    "[[Enumerable]]": !0
                }), t.exports = function(t) {
                    try {
                        i(t, a)
                    } catch (t) {
                        return t === o
                    }
                }
            } else t.exports = function(t) {
                return "function" == typeof t && !!t.prototype
            }