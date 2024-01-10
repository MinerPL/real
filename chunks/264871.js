            "use strict";
            var i = String.prototype.valueOf,
                n = function(t) {
                    try {
                        return i.call(t), !0
                    } catch (t) {
                        return !1
                    }
                },
                o = Object.prototype.toString,
                a = r("149384")();
            t.exports = function(t) {
                return "string" == typeof t || "object" == typeof t && (a ? n(t) : "[object String]" === o.call(t))
            }