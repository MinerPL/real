            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return S
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("446674"),
                s = r("77078"),
                c = r("810567"),
                d = r("547896"),
                u = r("664336"),
                h = r("50625"),
                p = r("928063"),
                f = r("637171"),
                m = r("724209"),
                g = r("694735"),
                y = r("435275");

            function b(e, t) {
                return e.store.getName().localeCompare(t.store.getName())
            }

            function x(e) {
                let {
                    store: t,
                    dataGetter: r
                } = e, [i, l] = n.useState(r(t));
                return n.useEffect(() => {
                    let e = () => l(r(t));
                    return e(), t.addChangeListener(e), () => {
                        t.removeChangeListener(e)
                    }
                }, [t, r]), (0, a.jsx)(s.ScrollerThin, {
                    className: y.inspectorContainer,
                    children: (0, a.jsx)(h.default, {
                        data: i
                    })
                })
            }
            let k = [{
                    key: "name",
                    cellClassName: y.eventColumn,
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return t.getName()
                    }
                }],
                v = [{
                    id: "local",
                    name: "Local Variables",
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return null == t.__getLocalVars ? (0, a.jsxs)("div", {
                            className: y.inspectorContainer,
                            children: ["Store is missing ", (0, a.jsx)("code", {
                                children: "__getLocalVars"
                            }), " method."]
                        }) : (0, a.jsx)(x, {
                            store: t,
                            dataGetter: e => e.__getLocalVars()
                        })
                    }
                }, {
                    id: "instance",
                    name: "Store Instance",
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return (0, a.jsx)(x, {
                            store: t,
                            dataGetter: e => e
                        })
                    }
                }];

            function C(e) {
                let {
                    store: t,
                    initialHeight: r
                } = e, {
                    TabBar: n,
                    renderSelectedTab: i
                } = (0, m.default)({
                    tabs: v
                }, []);
                return (0, a.jsxs)(p.default, {
                    className: y.subPanel,
                    minHeight: 100,
                    initialHeight: r,
                    children: [(0, a.jsx)(n, {}), (0, a.jsxs)(u.default, {
                        className: l(g.headerBar, y.subPanelHeaderBar),
                        children: [(0, a.jsx)(u.default.Icon, {
                            icon: d.default,
                            tooltip: t.getName()
                        }), (0, a.jsx)(u.default.Title, {
                            children: t.getName()
                        })]
                    }), i({
                        store: t
                    })]
                })
            }

            function S() {
                let e = n.useRef(null),
                    [t, r] = n.useState(""),
                    i = o.Store.getAll(),
                    d = n.useMemo(() => i.map(e => ({
                        key: e._dispatchToken,
                        store: e
                    })).sort(b), [i]),
                    u = d.filter(e => (function(e, t) {
                        let {
                            store: r
                        } = e;
                        return r.getName().toLowerCase().includes(t.toLowerCase())
                    })(e, t)),
                    [h, p] = n.useState(),
                    m = i.find(e => e._dispatchToken === h);
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: l(g.panel, y.panel),
                    children: [(0, a.jsx)("div", {
                        className: y.toolbar,
                        children: (0, a.jsx)(c.default, {
                            className: y.searchBar,
                            size: c.default.Sizes.SMALL,
                            query: t,
                            onChange: r,
                            onClear: () => r(""),
                            placeholder: "Search stores",
                            "aria-label": "Search stores"
                        })
                    }), (0, a.jsx)(s.ScrollerThin, {
                        className: y.tableContainer,
                        children: (0, a.jsx)(f.default, {
                            columns: k,
                            data: u,
                            selectedRowKey: h,
                            onClickRow: p
                        })
                    }), null != m && (0, a.jsx)(C, {
                        store: m,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })]
                })
            }