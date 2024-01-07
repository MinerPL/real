            "use strict";
            var e = n("359882"),
                o = n("605357"),
                i = n("979095"),
                u = n("85610").indexOf,
                s = n("264327"),
                c = e([].push);
            t.exports = function(t, r) {
                var n, e = i(t),
                    f = 0,
                    a = [];
                for (n in e) !o(s, n) && o(e, n) && c(a, n);
                for (; r.length > f;) o(e, n = r[f++]) && (~u(a, n) || c(a, n));
                return a
            }