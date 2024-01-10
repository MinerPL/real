            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("412707"),
                u = n("646186"),
                o = n("592407"),
                d = n("148475"),
                r = n("725621"),
                c = n("923959"),
                S = n("49111"),
                f = n("782340");

            function g(e) {
                function t(t) {
                    o.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    g = (0, d.default)(e);
                return __OVERLAY__ || !g ? null : (0, i.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: f.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, r.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: o
                        } = n;
                        if (null == o) return null;
                        switch (s) {
                            case S.GuildSettingsSections.DELETE:
                                return null;
                            case S.GuildSettingsSections.COMMUNITY:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: f.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, s);
                            case S.GuildSettingsSections.APP_DIRECTORY:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: o
                                }, s);
                            default:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: o
                                }, s)
                        }
                    })
                })
            }