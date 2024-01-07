            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("446674"),
                l = r("77078"),
                o = r("508815"),
                s = r("916523"),
                c = r("70310");

            function d() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.allWithDescriptions(), [], i.statesWillNeverBeEqual),
                    t = n.useMemo(() => e.map(e => {
                        let [t, r, n] = e;
                        return (0, a.jsx)(l.FormItem, {
                            children: (0, a.jsx)(l.FormSwitch, {
                                value: r,
                                note: t,
                                onChange: e => (0, o.toggle)(t, e),
                                hideBorder: !0,
                                children: n
                            })
                        }, t)
                    }), [e]);
                return (0, a.jsxs)("div", {
                    className: c.container,
                    children: [(0, a.jsx)(l.Button, {
                        onClick: o.clearAll,
                        className: c.button,
                        fullWidth: !0,
                        children: "Clear all"
                    }), (0, a.jsx)("div", {
                        className: c.rowsContainer,
                        children: t
                    })]
                })
            }