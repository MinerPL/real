            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var r = n("77078"),
                o = n("272030"),
                u = n("861370"),
                i = n("893455"),
                c = n("49111"),
                s = n("782340");

            function a(e) {
                let {
                    role: t,
                    guild: n,
                    onSelect: a
                } = e, d = [], f = (0, i.default)(n, t, c.GuildSettingsSections.INTEGRATIONS);
                null != f && d.push(f);
                let h = (0, u.default)({
                    id: t.id,
                    label: s.default.Messages.COPY_ID_ROLE
                });
                return (null != h && d.push(h), 0 === d.length) ? null : (0, l.jsx)(r.Menu, {
                    navId: "guild-integrations-permission-role-context",
                    "aria-label": s.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: o.closeContextMenu,
                    onSelect: a,
                    children: d
                })
            }