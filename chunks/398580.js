            var n = r("156577"),
                o = r("28279"),
                a = r("260333"),
                i = r("19381"),
                u = r("12062"),
                l = r("971433"),
                c = r("486036"),
                s = r("71792"),
                f = r("474710"),
                d = r("600506"),
                p = r("952133"),
                h = r("67462"),
                b = r("965779"),
                v = r("236315"),
                g = r("817003");
            e.exports = function(e, t, r, x, y, m, w) {
                var E = v(e, r),
                    C = v(t, r),
                    O = w.get(C);
                if (O) {
                    n(e, r, O);
                    return
                }
                var j = m ? m(E, C, r + "", e, t, w) : void 0,
                    _ = void 0 === j;
                if (_) {
                    var S = c(C),
                        k = !S && f(C),
                        R = !S && !k && b(C);
                    j = C, S || k || R ? c(E) ? j = E : s(E) ? j = i(E) : k ? (_ = !1, j = o(C, !0)) : R ? (_ = !1, j = a(C, !0)) : j = [] : h(C) || l(C) ? (j = E, l(E) ? j = g(E) : (!p(E) || d(E)) && (j = u(C))) : _ = !1
                }
                _ && (w.set(C, j), y(j, C, x, m, w), w.delete(C)), n(e, r, j)
            }