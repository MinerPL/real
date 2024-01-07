            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                a = n("838446"),
                r = n("158534"),
                d = n("812204"),
                s = n("32573"),
                o = n("73924"),
                c = n("743370"),
                f = n("49111"),
                _ = n("782340"),
                A = (0, r.default)((0, a.default)(function(e) {
                    let {
                        guildId: t,
                        context: n,
                        onSelect: a
                    } = e, r = (0, c.default)(t, n), d = (0, o.default)(t, n), f = (0, s.default)(t, n);
                    return (0, i.jsxs)(l.Menu, {
                        navId: "moderation-raid-context",
                        onClose: u.closeContextMenu,
                        "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: d
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [f, r]
                        })]
                    })
                }, {
                    object: f.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_MODERATION_RAID_MENU])