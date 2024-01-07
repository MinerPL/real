            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return o
                }
            });
            var n = u("37983");
            u("884691");
            var a = u("77078"),
                s = u("272030"),
                d = u("901582"),
                r = u("904142"),
                c = u("503950"),
                i = u("49111"),
                l = u("782340");

            function o(e) {
                let {
                    guildId: t,
                    analyticsContext: u,
                    onSelect: o
                } = e, f = (0, r.default)(t), E = (0, c.default)(t);
                return (0, n.jsx)(d.default, {
                    context: u,
                    object: i.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, n.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: s.closeContextMenu,
                        "aria-label": l.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: [(0, n.jsx)(a.MenuGroup, {
                            children: f
                        }), (0, n.jsx)(a.MenuGroup, {
                            children: E
                        })]
                    })
                })
            }