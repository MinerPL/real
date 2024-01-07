            "use strict";
            var r = n("739952"),
                a = Math.floor,
                o = function(e, t) {
                    var n = e.length,
                        u = a(n / 2);
                    return n < 8 ? i(e, t) : l(e, o(r(e, 0, u), t), o(r(e, u), t), t)
                },
                i = function(e, t) {
                    for (var n, r, a = e.length, o = 1; o < a;) {
                        for (r = o, n = e[o]; r && t(e[r - 1], n) > 0;) e[r] = e[--r];
                        r !== o++ && (e[r] = n)
                    }
                    return e
                },
                l = function(e, t, n, r) {
                    for (var a = t.length, o = n.length, i = 0, l = 0; i < a || l < o;) e[i + l] = i < a && l < o ? 0 >= r(t[i], n[l]) ? t[i++] : n[l++] : i < a ? t[i++] : n[l++];
                    return e
                };
            e.exports = o