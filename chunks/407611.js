            "use strict";
            var i = r("37549")("%Object.defineProperty%", !0),
                n = function() {
                    if (i) try {
                        return i({}, "a", {
                            value: 1
                        }), !0
                    } catch (t) {}
                    return !1
                };
            n.hasArrayLengthDefineBug = function() {
                if (!n()) return null;
                try {
                    return 1 !== i([], "length", {
                        value: 1
                    }).length
                } catch (t) {
                    return !0
                }
            }, t.exports = n