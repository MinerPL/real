            "use strict";
            var r = n("714919"),
                a = n("359882"),
                o = n("338867"),
                i = n("581887"),
                l = n("756579"),
                u = n("658886"),
                s = n("723786"),
                c = n("522552"),
                d = n("383503"),
                f = n("119500"),
                p = n("843914"),
                h = n("212870"),
                m = n("370080"),
                y = n("898663"),
                v = [],
                g = a(v.sort),
                b = a(v.push),
                _ = c(function() {
                    v.sort(void 0)
                }),
                k = c(function() {
                    v.sort(null)
                }),
                C = f("sort"),
                w = !c(function() {
                    if (m) return m < 70;
                    if (!p || !(p > 3)) {
                        if (h) return !0;
                        if (y) return y < 603;
                        var e, t, n, r, a = "";
                        for (e = 65; e < 76; e++) {
                            switch (t = String.fromCharCode(e), e) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    n = 3;
                                    break;
                                case 68:
                                case 71:
                                    n = 4;
                                    break;
                                default:
                                    n = 2
                            }
                            for (r = 0; r < 47; r++) v.push({
                                k: t + r,
                                v: n
                            })
                        }
                        for (v.sort(function(e, t) {
                                return t.v - e.v
                            }), r = 0; r < v.length; r++) t = v[r].k.charAt(0), a.charAt(a.length - 1) !== t && (a += t);
                        return "DGBEFHACIJK" !== a
                    }
                });
            r({
                target: "Array",
                proto: !0,
                forced: _ || !k || !C || !w
            }, {
                sort: function(e) {
                    void 0 !== e && o(e);
                    var t, n, r, a = i(this);
                    if (w) return void 0 === e ? g(a) : g(a, e);
                    var c = [],
                        f = l(a);
                    for (r = 0; r < f; r++) r in a && b(c, a[r]);
                    for (d(c, (t = e, function(e, n) {
                            return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : s(e) > s(n) ? 1 : -1
                        })), n = l(c), r = 0; r < n;) a[r] = c[r++];
                    for (; r < f;) u(a, r++);
                    return a
                }
            })