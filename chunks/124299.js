            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("446662"),
                l = n("684510");
            let u = r.memo(r.forwardRef((e, t) => {
                let {
                    onScroll: n,
                    onResize: s,
                    listPadding: u = [0, 0, 0, 0],
                    renderRow: c,
                    renderSection: d,
                    renderSectionHeader: f,
                    renderSectionFooter: E,
                    renderListHeader: h,
                    rowCount: p,
                    rowCountBySection: _,
                    rowHeight: S,
                    sectionMarginBottom: m,
                    sectionHeaderHeight: T,
                    sectionFooterHeight: g,
                    listHeaderHeight: I,
                    stickyHeaders: C = !1,
                    className: v,
                    hideScrollbar: A = !1,
                    fade: R = !1,
                    initialScrollTop: N = 0,
                    role: O = "list"
                } = e, [D, y] = r.useState(-1), [P, L] = r.useState(-1), b = r.useRef(null), M = r.useRef(0), U = r.useRef(-1);
                r.useLayoutEffect(() => {
                    var e;
                    let t = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    null != t && (t.scrollTop = N)
                }, []);
                let w = r.useCallback(() => {
                        let e = "function" == typeof I ? I() : I;
                        return null == e ? 0 : e
                    }, [I]),
                    G = r.useCallback((e, t, n) => "function" == typeof S ? S(n, {
                        sectionIndex: e,
                        sectionRowIndex: t
                    }) : S, [S]),
                    k = r.useCallback(e => {
                        let t = "function" == typeof T ? T(e) : T;
                        return null == t ? 0 : t
                    }, [T]),
                    x = r.useCallback(e => {
                        let t = "function" == typeof g ? g(e) : g;
                        return null == t ? 0 : t
                    }, [g]),
                    F = r.useCallback(e => {
                        let t = "function" == typeof m ? m(e) : m;
                        return null == t ? 0 : t
                    }, [m]),
                    V = r.useRef([]),
                    B = r.useRef([]),
                    {
                        totalHeight: H,
                        rowDescriptors: j,
                        sectionDescriptors: Y
                    } = r.useMemo(() => {
                        let e = 0,
                            t = null != _,
                            n = t ? _.length : 1,
                            i = u[0],
                            r = [],
                            s = [];
                        i += w();
                        for (let a = 0; a < n; a++) {
                            let n = t ? _[a] : p,
                                o = (null == _ ? void 0 : _[a]) !== 0;
                            s[a] = {
                                firstRowIndex: e,
                                offset: {
                                    top: i,
                                    bottom: -1
                                }
                            }, i += k(a);
                            for (let t = 0; t < n; t++) {
                                let n = o ? G(a, t, e) : 0,
                                    s = i + n,
                                    l = {
                                        top: i,
                                        bottom: s
                                    };
                                r[e] = {
                                    sectionIndex: a,
                                    offset: l
                                }, i = s, e++
                            }
                            i += x(a) + F(a), s[a].offset.bottom = i
                        }
                        return {
                            totalHeight: i += u[2],
                            rowDescriptors: r,
                            sectionDescriptors: s
                        }
                    }, [G, x, k, F, u, p, _, w]);
                V.current = Y, B.current = j;
                let W = r.useCallback(() => {
                    var e;
                    let t = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    if (null == t) return;
                    let {
                        offsetWidth: n,
                        offsetHeight: i,
                        scrollTop: r
                    } = t;
                    L(i), y(r), null == s || s({
                        width: n,
                        height: i
                    })
                }, [s]);
                r.useLayoutEffect(() => {
                    -1 === P && W()
                }, [P, W]), r.useEffect(() => {
                    var e;
                    let t = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                        n = null == t ? void 0 : t.ownerDocument.defaultView;
                    if (null == t || null == n) return;
                    let i = new n.ResizeObserver(W);
                    return i.observe(t), () => i.disconnect()
                }, [W]);
                let K = r.useCallback(() => {
                    var e;
                    let t = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    null != t && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(() => {
                        let {
                            scrollTop: e
                        } = t;
                        M.current = e, null == n || n(e), y(e)
                    }))
                }, [n]);
                r.useImperativeHandle(t, () => ({
                    scrollTo: function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                animate: i = !1
                            } = n;
                        null === (t = b.current) || void 0 === t || t.scrollTo({
                            to: e,
                            animate: i
                        })
                    },
                    scrollRowIntoView: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                animate: n = !1,
                                offset: i = 0
                            } = t,
                            r = B.current[e];
                        null != r && window.requestAnimationFrame(() => {
                            var t, s;
                            let {
                                sectionIndex: a,
                                offset: {
                                    top: o,
                                    bottom: l
                                }
                            } = r, u = k(a), c = o - (C ? u : 0) - i <= M.current, d = l + i >= M.current + P;
                            if (c) {
                                let r = M.current + u - o,
                                    s = C ? M.current - r : o;
                                null === (t = b.current) || void 0 === t || t.scrollTo({
                                    to: 0 === e ? 0 : s - i,
                                    animate: n
                                })
                            } else if (d) {
                                let e = l - (M.current + P);
                                null === (s = b.current) || void 0 === s || s.scrollTo({
                                    to: M.current + e + i,
                                    animate: n
                                })
                            }
                        })
                    },
                    scrollToSectionTop: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                animate: n = !1,
                                offset: i = 0
                            } = t,
                            r = V.current[e];
                        null != r && window.requestAnimationFrame(() => {
                            var t;
                            null === (t = b.current) || void 0 === t || t.scrollTo({
                                to: (0 === e ? 0 : r.offset.top) + i,
                                animate: n
                            })
                        })
                    },
                    getListDimensions: () => ({
                        height: P,
                        totalHeight: H
                    }),
                    getSectionDescriptors: () => V.current,
                    getRowDescriptors: () => B.current,
                    getScrollerNode: () => {
                        var e;
                        return null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode()
                    },
                    scrollIntoViewNode: e => {
                        var t;
                        return null === (t = b.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
                            node: e
                        })
                    }
                }), [k, C, H, P]);
                let {
                    visibleItems: z,
                    listOffset: q
                } = r.useMemo(() => {
                    if (-1 === P || -1 === D) return {
                        visibleItems: null,
                        listOffset: 0
                    };
                    let e = D + P,
                        t = 0,
                        n = u[0],
                        i = [],
                        r = w();
                    null != h && D < r ? i.push(h()) : n += r;
                    for (let r = 0; r < Y.length; r++) {
                        let s = Y[r],
                            {
                                firstRowIndex: a,
                                offset: {
                                    top: o,
                                    bottom: l
                                }
                            } = s,
                            u = l - o;
                        if (0 === u) continue;
                        let h = k(r),
                            p = x(r),
                            _ = F(r);
                        if (l <= D) n = l;
                        else if (l > D && o < e) {
                            t = a;
                            let s = [],
                                l = 0,
                                S = 0,
                                m = o + h,
                                T = m >= D && o <= e;
                            for (null != f && (C || T) && s.push(f(r)), !T && !C && (n += h); l + h + p < u - _;) {
                                let i = G(r, S, t),
                                    a = o + l + h,
                                    u = a + i;
                                if (u <= D) n = u - (C ? h : 0);
                                else if (u > D && a < e) s.push(c(t, {
                                    sectionIndex: r,
                                    sectionRowIndex: S
                                }));
                                else break;
                                l += i, S++, t++
                            }
                            let g = o + h + l,
                                I = g + p,
                                v = I >= D && g <= e;
                            null != E && v && s.push(E(r)), null != d ? i.push(d(r, s)) : i = [...i, ...s]
                        } else break
                    }
                    return {
                        visibleItems: i,
                        listOffset: n
                    }
                }, [G, x, k, F, u, c, d, E, f, D, Y, C, h, w, P]), X = r.useMemo(() => {
                    var e, t, n;
                    return {
                        top: q,
                        right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                        bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                        left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
                    }
                }, [q, u]), Q = r.useMemo(() => ({
                    height: H
                }), [H]), Z = A ? o.AdvancedScrollerNone : o.AdvancedScrollerThin;
                return (0, i.jsxs)(Z, {
                    fade: R,
                    className: a(l.scroller, v),
                    ref: b,
                    onScroll: K,
                    children: [(0, i.jsx)("div", {
                        role: O,
                        className: l.listItems,
                        style: X,
                        children: z
                    }), (0, i.jsx)("div", {
                        className: l.listHeight,
                        style: Q
                    })]
                })
            }));
            var c = u