            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("124299"),
                o = i("538282"),
                u = i("49111"),
                c = i("742773");
            let d = e => {
                let {
                    activeIndex: t,
                    categoryListRef: i,
                    getScrollOffsetForIndex: n
                } = e, s = l.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), a = l.useRef(t);
                return l.useEffect(() => {
                    null != t && t !== a.current && (s.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(s.current), s.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == i.current) return;
                        let l = t > (null !== (e = a.current) && void 0 !== e ? e : -1),
                            r = null != n ? n(t, l) : 0;
                        i.current.scrollRowIntoView(t, {
                            animate: !0,
                            offset: r
                        }), s.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, a.current = t
                    }))
                }, [t, i, n]), {
                    categoryListRef: i
                }
            };
            var f = function(e) {
                let {
                    categoryListRef: t,
                    expressionsListRef: i,
                    categories: s,
                    store: u,
                    children: f,
                    className: E,
                    listPadding: m,
                    rowCount: I,
                    getScrollOffsetForIndex: p,
                    categoryHeight: g,
                    onScroll: _,
                    renderCategoryListItem: S,
                    rowCountBySection: h,
                    renderSection: C
                } = e, T = u.useStore(e => e.activeCategoryIndex);
                d({
                    activeIndex: T,
                    categoryListRef: t,
                    getScrollOffsetForIndex: p
                });
                let N = l.useCallback(e => {
                        let {
                            searchQuery: t
                        } = o.useExpressionPickerStore.getState();
                        if (u.setActiveCategoryIndex(e), "" !== t)(0, o.setSearchQuery)("");
                        else {
                            var n;
                            null === (n = i.current) || void 0 === n || n.scrollToSectionTop(e)
                        }
                    }, [i, u]),
                    A = l.useCallback(e => S(s[e], e, () => N(e), T === e), [T, s, N, S]),
                    y = l.useMemo(() => "function" == typeof g ? e => g(s[e], e) : g, [s, g]);
                return (0, n.jsxs)("div", {
                    className: a(c.wrapper, E),
                    children: [(0, n.jsx)(r.default, {
                        listPadding: m,
                        onScroll: _,
                        ref: t,
                        renderRow: A,
                        rowCount: I,
                        rowHeight: y,
                        hideScrollbar: !0,
                        rowCountBySection: h,
                        renderSection: C
                    }), null == f ? void 0 : f(N)]
                })
            }