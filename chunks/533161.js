            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                l = s.n(n),
                i = s("446674"),
                r = s("218567"),
                o = s("835706"),
                d = s("412939"),
                u = s("305961"),
                c = s("191814"),
                E = s("782340");

            function _(e) {
                let {
                    guildId: t
                } = e, s = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t));
                return l(null != s, "Guild not found"), (0, a.jsxs)(r.CreatorMonetizationSettingsDisabledContextProvider, {
                    guildId: t,
                    children: [(0, a.jsx)(o.default, {
                        children: E.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SYNC_DISCLAIMER
                    }), (0, a.jsx)(c.default, {
                        size: 32
                    }), (0, a.jsx)(d.default, {
                        guild: s,
                        isGuildProducts: !0
                    })]
                })
            }