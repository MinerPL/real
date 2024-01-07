            "use strict";
            n("70102");
            var r = n("170407"),
                o = Object.prototype.toString,
                a = Object.prototype.hasOwnProperty,
                i = function(e, t, n) {
                    for (var r = 0, o = e.length; r < o; r++) a.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                },
                s = function(e, t, n) {
                    for (var r = 0, o = e.length; r < o; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
                },
                c = function(e, t, n) {
                    for (var r in e) a.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                };
            e.exports = function(e, t, n) {
                var a;
                if (!r(t)) throw TypeError("iterator must be a function");
                arguments.length >= 3 && (a = n), "[object Array]" === o.call(e) ? i(e, t, a) : "string" == typeof e ? s(e, t, a) : c(e, t, a)
            }