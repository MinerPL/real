            var r = n("413256"),
                i = n("478832");
            t.exports = function t(e, n, o, a, u) {
                var s = -1,
                    c = e.length;
                for (o || (o = i), u || (u = []); ++s < c;) {
                    var l = e[s];
                    n > 0 && o(l) ? n > 1 ? t(l, n - 1, o, a, u) : r(u, l) : !a && (u[u.length] = l)
                }
                return u
            }