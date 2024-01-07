            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                s = n("923959"),
                d = n("544955"),
                i = n("263673"),
                r = n("58622"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    guild: t,
                    onSelect: n
                } = e, f = s.default.getDefaultChannel(t.id, !0, o.Permissions.CREATE_INSTANT_INVITE), E = (0, i.default)(t.id), I = (0, d.default)(t), _ = (0, r.default)({
                    guild: t,
                    source: o.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: f
                });
                return (0, a.jsxs)(l.Menu, {
                    navId: "guild-context",
                    "aria-label": c.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onClose: u.closeContextMenu,
                    onSelect: n,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: E
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [I, _]
                    })]
                })
            }