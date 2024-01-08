            "use strict";
            n.r(t), n.d(t, {
                useSubscriptionListingsForChannel: function() {
                    return c
                }
            });
            var a = n("316693"),
                l = n("446674"),
                s = n("38654"),
                i = n("42203"),
                r = n("305961"),
                u = n("837008"),
                o = n("866595"),
                d = n("49111");

            function c(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, c = (0, u.useSubscriptionListingsForGuild)(t);
                return (0, l.useStateFromStoresArray)([i.default, r.default, s.default], () => {
                    let e = i.default.getChannel(n),
                        l = r.default.getGuild(t),
                        u = s.default.isViewingSubscriptionRoles(t);
                    return null != l && null != e ? c.filter(t => (function(e, t, n) {
                        let {
                            isPreviewingRoles: l = !1
                        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (!(l || e.published)) return !1;
                        let s = n.permissionOverwrites[e.role_id];
                        if ((0, o.isChannelAccessGrantedBy)(n, s)) return !0;
                        let i = t.getRole(t.id),
                            r = null != i && !a.default.has(i.permissions, d.Permissions.VIEW_CHANNEL),
                            u = (0, o.isChannelAccessDeniedBy)(n, n.permissionOverwrites[t.id]),
                            c = t.getRole(e.role_id);
                        return r && !u && null != c && (0, o.isAllChannelsRole)(c) && !(0, o.isChannelAccessDeniedBy)(n, s)
                    })(t, l, e, {
                        isPreviewingRoles: u
                    })) : []
                }, [t, n, c])
            }