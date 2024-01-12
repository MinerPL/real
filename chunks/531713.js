            var e = n("446288"),
                o = n("564414"),
                i = n("725502"),
                u = n("476540"),
                a = n("136047"),
                c = n("754076");
            t.exports = function(t, r, n) {
                r = e(r, t);
                for (var s = -1, f = r.length, p = !1; ++s < f;) {
                    var l = c(r[s]);
                    if (!(p = null != t && n(t, l))) break;
                    t = t[l]
                }
                return p || ++s != f ? p : !!(f = null == t ? 0 : t.length) && a(f) && u(l, f) && (i(t) || o(t))
            }