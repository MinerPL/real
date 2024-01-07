            var n = r("486835"),
                o = r("971433"),
                a = r("486036"),
                i = r("227290"),
                u = r("103451"),
                l = r("148807");
            e.exports = function(e, t, r) {
                t = n(t, e);
                for (var c = -1, s = t.length, f = !1; ++c < s;) {
                    var d = l(t[c]);
                    if (!(f = null != e && r(e, d))) break;
                    e = e[d]
                }
                return f || ++c != s ? f : !!(s = null == e ? 0 : e.length) && u(s) && i(d, s) && (a(e) || o(e))
            }