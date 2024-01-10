            "use strict";
            var i = Date.prototype.getDay,
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
                return "object" == typeof t && null !== t && (a ? n(t) : "[object Date]" === o.call(t))
            }