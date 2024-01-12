            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("817963"),
                i = n("923959"),
                r = n("305961"),
                u = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        f = (0, a.useStateFromStores)([u.default], () => {
                            if (u.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of E) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [E, n, d]);
                    return f
                }