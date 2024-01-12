            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("884691"),
                i = n("446674"),
                a = n("817963"),
                l = n("923959"),
                u = n("305961"),
                r = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, a.useManageResourcePermissions)(n),
                        c = (0, i.useStateFromStores)([l.default], () => l.default.getChannels(e)[l.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = s.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        S = (0, i.useStateFromStores)([r.default], () => {
                            if (r.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, d]);
                    return S
                }