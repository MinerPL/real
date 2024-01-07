            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("884691"),
                n = s("316693"),
                l = s("446674"),
                i = s("305961"),
                r = s("677795"),
                o = s("49111");
            let d = o.Permissions.VIEW_CHANNEL;

            function u(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                    s = null == t ? void 0 : t.roles[t.id],
                    o = a.useMemo(() => {
                        if (null == s) return r.GuildRoleSubscriptionFormat.SOME_CHANNELS;
                        let e = n.default.has(s.permissions, d);
                        return e ? r.GuildRoleSubscriptionFormat.SOME_CHANNELS : r.GuildRoleSubscriptionFormat.ALL_CHANNELS
                    }, [s]),
                    u = o === r.GuildRoleSubscriptionFormat.ALL_CHANNELS;
                return {
                    format: o,
                    isFullServerGating: u
                }
            }