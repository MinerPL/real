            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("545158"),
                o = n("370492"),
                u = n("584369"),
                d = n("471654"),
                c = n("496657"),
                f = n("758710"),
                E = n("664336"),
                _ = n("701909"),
                h = n("782340");

            function S() {
                let e = (0, s.useStateFromStores)([u.default], () => u.default.devToolsEnabled),
                    [t, S] = a.useState(!1),
                    [T, p] = a.useState(0),
                    N = e => {
                        clearTimeout(T), p(setTimeout(() => {
                            S(e)
                        }, 100))
                    };
                return (0, l.jsx)("div", {
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(i.Popout, {
                        shouldShow: t,
                        animation: i.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        onRequestOpen: () => S(!0),
                        onRequestClose: () => S(!1),
                        renderPopout: () => (function(e) {
                            let {
                                onClose: t,
                                devToolsEnabled: a
                            } = e;
                            return (0, l.jsx)(i.Menu, {
                                onSelect: () => {},
                                navId: "staff-help-popout",
                                variant: "fixed",
                                onClose: t,
                                "aria-label": h.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                                children: (0, l.jsxs)(i.MenuGroup, {
                                    children: [(0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-bug-reporter",
                                        label: h.default.Messages.BUG_REPORT_TITLE,
                                        icon: d.default,
                                        action: () => (0, i.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("323518").then(n.bind(n, "323518"));
                                            return t => (0, l.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    }), a && (0, l.jsx)(i.MenuItem, {
                                        id: "staff-devtools",
                                        label: "Toggle DevTools",
                                        icon: c.default,
                                        action: () => (0, o.toggleDisplayDevTools)()
                                    }), (0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-center",
                                        label: "Go to Help Center",
                                        icon: f.default,
                                        action: () => (0, r.default)(_.SUPPORT_LOCATION)
                                    })]
                                })
                            })
                        })({
                            onClose: () => S(!1),
                            devToolsEnabled: e
                        }),
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.jsx)(E.Icon, {
                                ...e,
                                icon: d.default,
                                "aria-label": h.default.Messages.HELP,
                                selected: n
                            })
                        }
                    })
                })
            }