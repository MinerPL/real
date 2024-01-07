            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("944832"),
                o = n("124299"),
                u = n("127868");
            let d = 16 / 9;

            function c(e, t) {
                return Math.floor((t - e) / (8 + e)) + 1
            }

            function f(e, t, n) {
                let a = t - e;
                for (; a > 0;) {
                    let t = e,
                        l = Math.floor(a / 2);
                    n(t += l) ? (e = t + 1, a -= l + 1) : a = l
                }
                return e
            }

            function h(e) {
                var t;
                let {
                    className: n,
                    children: s,
                    keyExtractor: h,
                    paddingTop: p = 0,
                    paddingBottom: m = 0
                } = e, [E, C] = l.useState({
                    width: 0,
                    height: 0
                }), {
                    width: g,
                    height: S
                } = E, _ = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, I = g - 16, T = S - (p + m), {
                    tileStyle: v,
                    tileWidth: x,
                    rows: N,
                    columns: A
                } = l.useMemo(() => (function(e, t, n) {
                    let {
                        rows: a,
                        columns: l,
                        tileWidth: s
                    } = function(e, t, n) {
                        let a;
                        let l = Math.floor(t / 25);
                        a = e > 25 ? f(l, t, e => {
                            let a = c(e, t),
                                l = function(e, t) {
                                    let n = e / d;
                                    return Math.ceil((t - n) / (8 + n)) + 1
                                }(e, n);
                            return a * l > 25
                        }) : f(l, t, a => {
                            let l = c(a, t),
                                s = function(e, t) {
                                    let n = e / d;
                                    return Math.floor((t - n) / (8 + n)) + 1
                                }(a, n);
                            return l * s >= e
                        }) - 1;
                        let s = c(a, t),
                            i = Math.ceil(e / s);
                        return {
                            tileWidth: a,
                            columns: Math.max(1, s),
                            rows: i
                        }
                    }(e, t, n);
                    return {
                        tileStyle: {
                            width: s
                        },
                        tileWidth: s,
                        rows: a,
                        columns: l
                    }
                })(_, I, T), [_, I, T]), M = A + 1, R = M * x + (M - 1) * 8, j = R <= g, L = Math.floor(x / d) + 8, O = Math.max(0, T - L * N) / 2;
                return (0, a.jsx)(o.default, {
                    fade: !0,
                    className: n,
                    listPadding: [p + O, 0, m + O - 8, 8],
                    renderRow: function(e) {
                        var t;
                        let n = e * A;
                        return (0, a.jsx)("div", {
                            className: u.row,
                            children: null == s ? void 0 : null === (t = s.slice(n, n + A)) || void 0 === t ? void 0 : t.map((e, t) => {
                                var l;
                                let s = n + t;
                                return (0, a.jsx)("div", {
                                    style: v,
                                    className: i(u.tile, {
                                        [u.padColumn]: j,
                                        [u.noVerticalMargin]: s >= (N - 1) * A,
                                        [u.noHorizontalMargin]: (s + 1) % A == 0 || s === _ - 1
                                    }),
                                    children: (0, a.jsx)(r.default, {
                                        className: u.tileSizer,
                                        aspectRatio: d,
                                        children: e(x)
                                    })
                                }, null !== (l = null == h ? void 0 : h(s)) && void 0 !== l ? l : s)
                            })
                        }, e)
                    },
                    rowCount: N,
                    rowCountBySection: [N],
                    rowHeight: L,
                    onResize: C
                })
            }