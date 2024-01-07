            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("77078"),
                i = l("272030"),
                r = l("901582"),
                o = l("158534"),
                a = l("812204"),
                d = l("861370"),
                s = l("421602"),
                c = l("806179"),
                f = l("97508"),
                M = l("49111"),
                O = l("782340"),
                h = (0, o.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        analyticsContext: o,
                        onSelect: a
                    } = e, h = (0, c.default)(t.id), p = (0, f.default)(t.id, l), x = (0, d.default)({
                        id: t.id,
                        label: O.default.Messages.COPY_ID_USER
                    }), E = (0, s.default)(t.id), _ = t.isNonUserBot();
                    return (0, n.jsx)(r.default, {
                        context: o,
                        object: M.AnalyticsObjects.CONTEXT_MENU,
                        children: (0, n.jsxs)(u.Menu, {
                            navId: "user-context",
                            onClose: i.closeContextMenu,
                            "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                            onSelect: a,
                            children: [(0, n.jsxs)(u.MenuGroup, {
                                children: [!_ && h, !_ && E]
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: !_ && p
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: x
                            })]
                        })
                    })
                }, [a.default.CONTEXT_MENU, a.default.AUDIT_LOG_USER_MENU])