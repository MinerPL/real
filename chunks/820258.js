            "use strict";
            var r = n("289275"),
                a = n("522552"),
                o = n("359882"),
                i = n("723786"),
                l = n("389694").trim,
                u = n("978125"),
                s = r.parseInt,
                Symbol = r.Symbol,
                c = Symbol && Symbol.iterator,
                d = /^[+-]?0x/i,
                f = o(d.exec),
                p = 8 !== s(u + "08") || 22 !== s(u + "0x16") || c && !a(function() {
                    s(Object(c))
                });
            e.exports = p ? function(e, t) {
                var n = l(i(e));
                return s(n, t >>> 0 || (f(d, n) ? 16 : 10))
            } : s