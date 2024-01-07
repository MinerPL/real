            var e = r("146007"),
                o = r("354069");
            t.exports = function(t, n, r, i) {
                var u = r.length,
                    a = u,
                    c = !i;
                if (null == t) return !a;
                for (t = Object(t); u--;) {
                    var s = r[u];
                    if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
                }
                for (; ++u < a;) {
                    var f = (s = r[u])[0],
                        p = t[f],
                        l = s[1];
                    if (c && s[2]) {
                        if (void 0 === p && !(f in t)) return !1
                    } else {
                        var v = new e;
                        if (i) var h = i(p, l, f, t, n, v);
                        if (!(void 0 === h ? o(l, p, 3, i, v) : h)) return !1
                    }
                }
                return !0
            }