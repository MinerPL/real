            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionChannelSearch: function() {
                    return u
                }
            }), l("222007"), l("424973"), l("843762");
            var n = l("884691"),
                a = l("389153"),
                s = l("923959"),
                i = l("957255"),
                r = l("978900"),
                o = l("49111"),
                d = l("782340");

            function u(e) {
                let t = n.useMemo(() => {
                        let t = s.default.getChannels(e),
                            l = [...t[s.GUILD_SELECTABLE_CHANNELS_KEY]];
                        l.push(...t[0, s.GUILD_VOCAL_CHANNELS_KEY].filter(e => e.channel.isGuildVocal()));
                        let n = l.map(e => ({
                            id: e.channel.id,
                            name: e.channel.name,
                            canManage: i.default.can(o.Permissions.MANAGE_ROLES, e.channel)
                        }));
                        return n.unshift({
                            id: (0, a.allChannelsSentinel)(e),
                            name: d.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                            canManage: !0
                        }), n
                    }, [e]),
                    [l, u] = n.useState(""),
                    f = n.useMemo(() => {
                        let e = function(e) {
                            return e.startsWith("#") ? e.substr(1) : e
                        }(l);
                        return (0, r.filterPermissionSearchItems)(t, c, e)
                    }, [t, l]);
                return {
                    query: l,
                    results: f,
                    setQuery: u,
                    unfilteredCount: t.length
                }
            }

            function c(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }