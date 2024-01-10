            "use strict";
            r("222007");
            var i, n = "function" == typeof Map && Map.prototype ? Map : null,
                o = "function" == typeof Set && Set.prototype ? Set : null;
            !n && (i = function(t) {
                return !1
            });
            var a = n ? Map.prototype.has : null,
                s = o ? Set.prototype.has : null;
            !i && !a && (i = function(t) {
                return !1
            }), t.exports = i || function(t) {
                if (!t || "object" != typeof t) return !1;
                try {
                    if (a.call(t), s) try {
                        s.call(t)
                    } catch (t) {
                        return !0
                    }
                    return t instanceof n
                } catch (t) {}
                return !1
            }