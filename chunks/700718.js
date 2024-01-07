            r("424973");
            var i = r("488063"),
                n = r("394835"),
                o = r("991914"),
                a = r("430272"),
                s = r("662504"),
                f = r("531217");
            t.exports = function(t, e, r) {
                var h = -1,
                    c = n,
                    u = t.length,
                    d = !0,
                    l = [],
                    p = l;
                if (r) d = !1, c = o;
                else if (u >= 200) {
                    var b = e ? null : s(t);
                    if (b) return f(b);
                    d = !1, c = a, p = new i
                } else p = e ? [] : l;
                t: for (; ++h < u;) {
                    var m = t[h],
                        g = e ? e(m) : m;
                    if (m = r || 0 !== m ? m : 0, d && g == g) {
                        for (var y = p.length; y--;)
                            if (p[y] === g) continue t;
                        e && p.push(g), l.push(m)
                    } else !c(p, g, r) && (p !== l && p.push(g), l.push(m))
                }
                return l
            }