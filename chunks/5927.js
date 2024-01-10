            "use strict";
            var i = Object.prototype.toString;
            if (r("923771")()) {
                var n = Symbol.prototype.toString,
                    o = /^Symbol\(.*\)$/;
                t.exports = function(t) {
                    if ("symbol" == typeof t) return !0;
                    if ("[object Symbol]" !== i.call(t)) return !1;
                    try {
                        var e;
                        return e = t, "symbol" == typeof e.valueOf() && o.test(n.call(e))
                    } catch (t) {
                        return !1
                    }
                }
            } else t.exports = function(t) {
                return !1
            }