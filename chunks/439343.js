            "use strict";
            var r = n("597018"),
                a = n("522552"),
                o = n("359882"),
                i = n("694628"),
                l = n("837447"),
                u = n("979095"),
                s = o(n("943973").f),
                c = o([].push),
                d = r && a(function() {
                    var e = Object.create(null);
                    return e[2] = 2, !s(e, 2)
                }),
                f = function(e) {
                    return function(t) {
                        for (var n, a = u(t), o = l(a), f = d && null === i(a), p = o.length, h = 0, m = []; p > h;) n = o[h++], (!r || (f ? n in a : s(a, n))) && c(m, e ? [n, a[n]] : a[n]);
                        return m
                    }
                };
            e.exports = {
                entries: f(!0),
                values: f(!1)
            }