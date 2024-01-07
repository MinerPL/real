            "use strict";
            var r = n("911718"),
                o = n("307904"),
                a = n("638839")(),
                i = n("293471"),
                s = r("%TypeError%"),
                c = r("%Math.floor%");
            e.exports = function(e, t) {
                if ("function" != typeof e) throw new s("`fn` is not a function");
                if ("number" != typeof t || t < 0 || t > 4294967295 || c(t) !== t) throw new s("`length` must be a positive 32-bit integer");
                var n = arguments.length > 2 && !!arguments[2],
                    r = !0,
                    l = !0;
                if ("length" in e && i) {
                    var u = i(e, "length");
                    u && !u.configurable && (r = !1), u && !u.writable && (l = !1)
                }
                return (r || l || !n) && (a ? o(e, "length", t, !0, !0) : o(e, "length", t)), e
            }