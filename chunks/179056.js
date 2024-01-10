            "use strict";
            var i, n, o, a, s = r("812095"),
                f = r("149384")();
            if (f) {
                i = s("Object.prototype.hasOwnProperty"), n = s("RegExp.prototype.exec"), o = {};
                var h = function() {
                    throw o
                };
                a = {
                    toString: h,
                    valueOf: h
                }, "symbol" == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = h)
            }
            var c = s("Object.prototype.toString"),
                u = Object.getOwnPropertyDescriptor;
            t.exports = f ? function(t) {
                if (!t || "object" != typeof t) return !1;
                var e = u(t, "lastIndex");
                if (!(e && i(e, "value"))) return !1;
                try {
                    n(t, a)
                } catch (t) {
                    return t === o
                }
            } : function(t) {
                return !!t && ("object" == typeof t || "function" == typeof t) && "[object RegExp]" === c(t)
            }