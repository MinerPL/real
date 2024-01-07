            "use strict";
            l.r(t), l.d(t, {
                useHasGuildRoleItems: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("272030"),
                i = l("694402"),
                r = l("782340");

            function o(e, t) {
                let l = (0, i.default)(e, t);
                return l.length > 0
            }

            function d(e) {
                let {
                    role: t,
                    guild: l,
                    onSelect: o
                } = e, d = (0, i.default)(l, t);
                return 0 === d.length ? null : (0, n.jsx)(a.Menu, {
                    navId: "guild-settings-role-context",
                    "aria-label": r.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: s.closeContextMenu,
                    onSelect: o,
                    children: d
                })
            }