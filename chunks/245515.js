            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return L
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("866227"),
                s = r.n(o),
                c = r("77078"),
                d = r("913144"),
                u = r("561703"),
                h = r("315585"),
                p = r("664336"),
                f = r("888400"),
                m = r("50625"),
                g = r("332814"),
                y = r("928063"),
                b = r("637171"),
                x = r("724209"),
                k = r("8114"),
                v = r("694735");

            function C(e) {
                return parseFloat(e.toFixed(3))
            }
            let S = [{
                key: "store",
                cellClassName: k.actionColumn,
                render(e) {
                    let {
                        trace: t
                    } = e;
                    return t.name
                }
            }, {
                key: "time",
                cellClassName: k.totalTimeColumn,
                render(e) {
                    let {
                        trace: t
                    } = e;
                    return "".concat(C(t.time), " ms")
                }
            }];

            function j(e) {
                let {
                    actionLog: t
                } = e, r = n.useMemo(() => t.traces.map(e => ({
                    key: e.name,
                    trace: e
                })), [t]);
                return (0, a.jsx)(c.ScrollerThin, {
                    children: (0, a.jsx)(b.default, {
                        columns: S,
                        data: r
                    })
                })
            }
            let T = [{
                id: "action",
                name: "Action",
                render(e) {
                    var t;
                    let {
                        actionLog: r
                    } = e, n = s(r.createdAt);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(g.Properties, {
                            className: k.actionProperties,
                            children: [(0, a.jsx)(g.Property, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null === (t = r.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, f.dateFormat)(n, "LLLL"),
                                    children: (0, f.calendarFormat)(n)
                                })
                            }), (0, a.jsxs)(g.Property, {
                                name: "Total Time",
                                children: [C(r.totalTime), " ms"]
                            })]
                        }), (0, a.jsx)(c.ScrollerThin, {
                            className: k.inspectorContainer,
                            children: (0, a.jsx)(m.default, {
                                data: r.action
                            })
                        })]
                    })
                }
            }, {
                id: "traces",
                name: "Store Handlers",
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return (0, a.jsx)(j, {
                        actionLog: t
                    })
                }
            }];

            function w(e) {
                let {
                    actionLog: t,
                    initialHeight: r
                } = e, i = n.useMemo(() => t.error ? [...T, {
                    id: "error",
                    name: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(h.default, {
                            className: k.errorIcon
                        }), "Error"]
                    }),
                    render(e) {
                        let {
                            actionLog: t
                        } = e;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: l(k.errorToolbar, v.toolbar),
                                children: (0, a.jsx)("div", {
                                    className: v.toolbarGroup,
                                    children: (0, a.jsx)(c.Button, {
                                        className: v.toolbarButton,
                                        size: c.Button.Sizes.MIN,
                                        onClick: () => console.error(t.error),
                                        children: "Log to Console"
                                    })
                                })
                            }), (0, a.jsx)(c.ScrollerThin, {
                                className: k.inspectorContainer,
                                children: (0, a.jsx)(m.default, {
                                    data: t.error
                                })
                            })]
                        })
                    }
                }] : T, [t]), {
                    TabBar: o,
                    renderSelectedTab: s
                } = (0, x.default)({
                    tabs: i
                }, [i]);
                return (0, a.jsxs)(y.default, {
                    className: k.subPanel,
                    minHeight: 100,
                    initialHeight: r,
                    children: [(0, a.jsx)(o, {}), (0, a.jsxs)(p.default, {
                        className: l(v.headerBar, k.subPanelHeaderBar),
                        children: [(0, a.jsx)(p.default.Icon, {
                            icon: u.default,
                            tooltip: t.name
                        }), (0, a.jsx)(p.default.Title, {
                            children: t.name
                        })]
                    }), s({
                        actionLog: t
                    })]
                })
            }
            let N = [{
                key: "action",
                cellClassName: k.actionColumn,
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [t.error && (0, a.jsx)(h.default, {
                            className: k.errorIcon
                        }), t.name]
                    })
                }
            }, {
                key: "total time",
                cellClassName: k.totalTimeColumn,
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return "".concat(C(t.totalTime), " ms")
                }
            }];

            function L() {
                let e = n.useRef(null),
                    t = function(e) {
                        let [t, r] = n.useState([...e.logs]), a = n.useCallback(() => r([...e.logs]), [e]);
                        return n.useEffect(() => (e.on("log", a), () => {
                            e.off("log", a)
                        }), [e, a]), t
                    }(d.default.actionLogger),
                    r = n.useMemo(() => t.map(e => ({
                        key: e.id.toString(),
                        actionLog: e
                    })), [t]),
                    [i, o] = n.useState(),
                    s = t.find(e => e.id === i);
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: l(v.panel, k.panel),
                    children: [(0, a.jsx)(c.ScrollerThin, {
                        className: k.tableContainer,
                        children: (0, a.jsx)(b.default, {
                            columns: N,
                            data: r,
                            selectedRowKey: null == i ? void 0 : i.toString(),
                            onClickRow: e => o(Number.parseInt(e, 10))
                        })
                    }), null != s && (0, a.jsx)(w, {
                        actionLog: s,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })]
                })
            }