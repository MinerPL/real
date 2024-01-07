            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("884691"),
                r = n("134322"),
                s = n("942367"),
                a = n("74139");
            let o = [s.Keys.TAB, s.Keys.UP, s.Keys.DOWN];

            function l(e, t, n) {
                return null != n ? "#".concat(e(t, n)) : "#".concat(t)
            }

            function u(e) {
                return document.querySelector(e)
            }

            function c(e) {
                var t;
                null === (t = document.getElementById(e)) || void 0 === t || t.focus()
            }

            function d(e) {
                let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: d = 0,
                    onSelect: f,
                    setFocus: E,
                    getNewFocusIndex: h,
                    maintainFocusPosition: p = !0,
                    includeSetSizes: _ = !0,
                    focusOnMount: S = !0,
                    enabled: m = !0,
                    onDispatch: T
                } = e, g = i.useCallback((e, t) => {
                    let n = (0, r.default)(e, t);
                    return null != T && T(e, n, t), n
                }, [T]), [I, C] = i.useReducer(g, {
                    focusedIndex: d,
                    itemCount: n
                }), {
                    itemCount: v,
                    focusedIndex: A
                } = I, [R] = i.useState(() => (0, a.throttle)(C, 16));
                return i.useEffect(() => {
                        C({
                            type: r.ListActionType.UPDATE_ITEM_COUNT,
                            itemCount: n
                        })
                    }, [n]),
                    function(e) {
                        let {
                            navId: t,
                            itemCount: n,
                            focusedIndex: d,
                            onSelect: f,
                            setFocus: E = c,
                            getNewFocusIndex: h,
                            dispatch: p,
                            maintainFocusPosition: _,
                            includeSetSizes: S,
                            focusOnMount: m,
                            enabled: T,
                            makeId: g = a.makeId,
                            getIndexFromId: I
                        } = e, C = i.useRef(n), v = i.useRef(I);
                        v.current = I, C.current = n;
                        let A = i.useRef();
                        i.useEffect(() => {
                            A.current = T
                        }, [T]);
                        let [R, N] = i.useState(!1), [O] = i.useState(() => new a.HandlerMemoizer(e => () => {
                            let t = null != v.current && "string" == typeof e ? v.current(e) : e;
                            "number" == typeof t && !(t < 0) && p({
                                type: r.ListActionType.SET_FOCUSED_INDEX,
                                index: t
                            })
                        }));
                        i.useEffect(() => () => O.clean(), [O]);
                        let D = i.useCallback((e, t) => {
                                A.current && E(e, t)
                            }, [E]),
                            [y, P] = i.useState(!0);
                        i.useEffect(() => {
                            if (y && !m) {
                                P(!1);
                                return
                            }
                            D(g(t, d), d)
                        }, [d]);
                        let L = i.useCallback(function() {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != h ? h(d) : d;
                                n !== d && p({
                                    type: r.ListActionType.SET_FOCUSED_INDEX,
                                    index: n
                                }), e && D(g(t, n), n)
                            }, [g, d, h, p, t, D]),
                            b = i.useCallback(e => {
                                if (!A.current) return;
                                if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                                    e.preventDefault(), e.stopPropagation(), L();
                                    return
                                }
                                let n = function(e) {
                                    switch (e.key) {
                                        case s.Keys.ENTER:
                                        case s.Keys.SPACE:
                                            return s.ActionType.SELECT_FOCUSED_ITEM;
                                        case s.Keys.UP:
                                            return s.ActionType.NAVIGATE_UP;
                                        case s.Keys.DOWN:
                                            return s.ActionType.NAVIGATE_DOWN;
                                        case s.Keys.HOME:
                                            return s.ActionType.NAVIGATE_START;
                                        case s.Keys.END:
                                            return s.ActionType.NAVIGATE_END
                                    }
                                }(e);
                                switch (n) {
                                    case s.ActionType.NAVIGATE_UP:
                                    case s.ActionType.NAVIGATE_DOWN:
                                    case s.ActionType.NAVIGATE_START:
                                    case s.ActionType.NAVIGATE_END:
                                        e.preventDefault(), e.stopPropagation(), p({
                                            type: n
                                        });
                                        return;
                                    case s.ActionType.SELECT_FOCUSED_ITEM:
                                        var i;
                                        let r = u(l(g, t, d));
                                        if ((null == (i = r) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                        if (e.preventDefault(), e.stopPropagation(), p({
                                                type: n
                                            }), null != f) {
                                            f(d);
                                            return
                                        }
                                        null == r || r.click()
                                }
                            }, [g, t, p, d, L, f]),
                            M = i.useCallback(() => {
                                R || N(!0)
                            }, [R]),
                            U = i.useCallback(() => {
                                !R && (_ ? D(g(t, d), d) : L(!0))
                            }, [g, t, D, _, R, d, L]),
                            w = i.useCallback(e => {
                                !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
                                    if (null == u(l(g, t, d))) {
                                        D(t);
                                        return
                                    }
                                    N(!1)
                                })
                            }, [g, t, d, D]),
                            G = i.useRef(null);
                        i.useLayoutEffect(() => {
                            let e = G.current;
                            if (null != e) return e.addEventListener("focusin", M), e.addEventListener("focus", U), e.addEventListener("focusout", w), () => {
                                e.removeEventListener("focusin", M), e.removeEventListener("focus", U), e.removeEventListener("focusout", w)
                            }
                        }, [U, M, w]);
                        let k = i.useCallback(() => ({
                                role: "list",
                                tabIndex: R && _ ? -1 : 0,
                                id: t,
                                onKeyDown: b,
                                ref: G
                            }), [t, R, b, _]),
                            x = i.useCallback(e => {
                                let {
                                    index: n
                                } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": S ? C.current : void 0,
                                    "aria-posinset": S ? n + 1 : void 0,
                                    id: g(t, n),
                                    tabIndex: _ && n === d ? 0 : -1,
                                    onFocus: O.get(null != v.current ? g(t, n) : n)
                                }
                            }, [g, t, d, _, O, S]),
                            F = i.useMemo(() => ({
                                dispatch: p,
                                getContainerProps: k,
                                getItemProps: x
                            }), [p, k, x]);
                        return F
                    }({
                        navId: t,
                        itemCount: v,
                        focusedIndex: A,
                        dispatch: R,
                        onSelect: f,
                        setFocus: E,
                        getNewFocusIndex: h,
                        maintainFocusPosition: p,
                        includeSetSizes: _,
                        focusOnMount: S,
                        enabled: m
                    })
            }