            var n = r("863847"),
                o = r("170859");
            e.exports = function(e, t, r, a) {
                var i = r.length,
                    u = i,
                    l = !a;
                if (null == e) return !u;
                for (e = Object(e); i--;) {
                    var c = r[i];
                    if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                }
                for (; ++i < u;) {
                    var s = (c = r[i])[0],
                        f = e[s],
                        d = c[1];
                    if (l && c[2]) {
                        if (void 0 === f && !(s in e)) return !1
                    } else {
                        var p = new n;
                        if (a) var h = a(f, d, s, e, t, p);
                        if (!(void 0 === h ? o(d, f, 3, a, p) : h)) return !1
                    }
                }
                return !0
            }