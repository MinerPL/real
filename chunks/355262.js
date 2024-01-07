            "use strict";
            n.r(t), n.d(t, {
                ListContainerContext: function() {
                    return c
                },
                useListItem: function() {
                    return d
                },
                useTreeItem: function() {
                    return f
                },
                ListNavigatorItem: function() {
                    return E
                },
                useListContainerProps: function() {
                    return h
                },
                getContainerPropsFromNavigator: function() {
                    return p
                },
                ListNavigatorContainer: function() {
                    return _
                },
                ListNavigatorProvider: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("909283"),
                a = n("942367"),
                o = n("74139");
            let l = {
                    id: "NO_LIST",
                    onKeyDown() {},
                    orientation: a.Orientations.VERTICAL,
                    ref: r.createRef(),
                    tabIndex: -1
                },
                u = r.createContext({
                    id: "NO_LIST",
                    setFocus() {}
                }),
                c = r.createContext(l);

            function d(e) {
                let [t, n] = r.useState(-1), i = r.useContext(u), {
                    id: a,
                    setFocus: l
                } = i, c = r.useCallback(() => l(e), [e, l]);
                return r.useLayoutEffect(() => (0, s.addFocusSubscriber)(a, (t, i) => {
                    n(i && t === e ? 0 : -1)
                }), [e, a]), {
                    role: "listitem",
                    [o.LIST_ITEM_ID_ATTRIBUTE]: (0, o.createListItemId)(a, e),
                    tabIndex: t,
                    onFocus: c
                }
            }

            function f(e) {
                let t = d(e);
                return {
                    ...t,
                    role: "treeitem"
                }
            }

            function E(e) {
                let {
                    children: t,
                    id: n
                } = e, i = d(n);
                return t(i)
            }

            function h() {
                let e = r.useContext(c),
                    {
                        id: t,
                        onKeyDown: n,
                        ref: i,
                        tabIndex: s
                    } = e;
                return {
                    role: "list",
                    tabIndex: s,
                    [o.LIST_ID_ATTRIBUTE]: t,
                    onKeyDown: n,
                    ref: i
                }
            }

            function p(e) {
                let {
                    id: t,
                    containerProps: {
                        onKeyDown: n,
                        ref: i,
                        tabIndex: r
                    },
                    orientation: s
                } = e;
                return {
                    role: "list",
                    onKeyDown: n,
                    ref: i,
                    [o.LIST_ID_ATTRIBUTE]: t,
                    tabIndex: r
                }
            }

            function _(e) {
                let {
                    children: t
                } = e, n = h();
                return t(n)
            }

            function S(e) {
                let {
                    children: t,
                    navigator: n
                } = e, {
                    id: s,
                    setFocus: a,
                    containerProps: {
                        onKeyDown: o,
                        ref: l,
                        tabIndex: d
                    },
                    orientation: f
                } = n, E = r.useMemo(() => ({
                    id: s,
                    setFocus: a
                }), [s, a]), h = r.useMemo(() => ({
                    onKeyDown: o,
                    orientation: f,
                    ref: l,
                    id: s,
                    tabIndex: d
                }), [o, f, l, s, d]);
                return (0, i.jsxs)(c.Provider, {
                    value: h,
                    children: [(0, i.jsx)(u.Provider, {
                        value: E,
                        children: t
                    }), " "]
                })
            }