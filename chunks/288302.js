            "use strict";
            var r = n("234779"),
                a = n("756579"),
                o = n("789445"),
                i = n("362776"),
                l = function(e, t, n, u, s, c, d, f) {
                    for (var p, h, m = s, y = 0, v = !!d && i(d, f); y < u;) y in n && (p = v ? v(n[y], y, t) : n[y], c > 0 && r(p) ? (h = a(p), m = l(e, t, p, h, m, c - 1) - 1) : (o(m + 1), e[m] = p), m++), y++;
                    return m
                };
            e.exports = l