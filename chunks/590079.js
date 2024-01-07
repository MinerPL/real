            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("272030"),
                s = n("901582"),
                r = n("158534"),
                i = n("812204"),
                o = n("861370"),
                d = n("421602"),
                c = n("806179"),
                f = n("49111"),
                p = n("782340"),
                E = (0, r.default)(function(e) {
                    let {
                        user: t,
                        analyticsContext: n,
                        onSelect: r
                    } = e, i = (0, c.default)(t.id), E = (0, o.default)({
                        id: t.id,
                        label: p.default.Messages.COPY_ID_USER
                    }), M = (0, d.default)(t.id), h = t.isNonUserBot();
                    return (0, u.jsx)(s.default, {
                        context: n,
                        object: f.AnalyticsObjects.CONTEXT_MENU,
                        children: (0, u.jsxs)(a.Menu, {
                            navId: "user-context",
                            onClose: l.closeContextMenu,
                            "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                            onSelect: r,
                            children: [(0, u.jsxs)(a.MenuGroup, {
                                children: [!h && i, !h && M]
                            }), (0, u.jsx)(a.MenuGroup, {
                                children: E
                            })]
                        })
                    })
                }, [i.default.CONTEXT_MENU, i.default.BANNED_USER_MENU])