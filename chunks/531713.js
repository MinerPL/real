            var e = r("446288"),
                o = r("564414"),
                i = r("725502"),
                u = r("476540"),
                a = r("136047"),
                c = r("754076");
            t.exports = function(t, n, r) {
                n = e(n, t);
                for (var s = -1, f = n.length, p = !1; ++s < f;) {
                    var l = c(n[s]);
                    if (!(p = null != t && r(t, l))) break;
                    t = t[l]
                }
                return p || ++s != f ? p : !!(f = null == t ? 0 : t.length) && a(f) && u(l, f) && (i(t) || o(t))
            }