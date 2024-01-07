            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973");
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("272030"),
                a = n("861370"),
                o = n("893455"),
                i = n("49111"),
                u = n("782340");

            function d(e) {
                let {
                    role: t,
                    guild: n,
                    onSelect: d
                } = e, c = [], h = (0, o.default)(n, t, i.GuildSettingsSections.INTEGRATIONS);
                null != h && c.push(h);
                let f = (0, a.default)({
                    id: t.id,
                    label: u.default.Messages.COPY_ID_ROLE
                });
                return (null != f && c.push(f), 0 === c.length) ? null : (0, r.jsx)(l.Menu, {
                    navId: "guild-integrations-permission-role-context",
                    "aria-label": u.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: s.closeContextMenu,
                    onSelect: d,
                    children: c
                })
            }