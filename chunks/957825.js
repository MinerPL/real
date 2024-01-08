            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("531674"),
                r = n("619436"),
                o = n("513472"),
                u = n("305961");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f,
                    location: E,
                    includeGuildMute: _
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t.guild_id)), S = (0, o.default)(h);
                return (0, l.jsxs)(s.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsx)(s.MenuGroup, {
                        children: (0, i.default)(t, E)
                    }), _ ? (0, l.jsx)(s.MenuGroup, {
                        children: S
                    }) : null, (0, l.jsx)(s.MenuGroup, {
                        children: (0, r.useChannelNotificationRadioItems)(t)
                    })]
                })
            }