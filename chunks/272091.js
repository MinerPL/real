            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useIsNewCommunity: function() {
                    return d
                }
            });
            var l = n("65597"),
                i = n("305961"),
                r = n("957255"),
                s = n("697218"),
                a = n("708730"),
                o = n("49111");

            function u(e, t) {
                let n = (0, l.default)([s.default], () => {
                        var e, t;
                        return null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }),
                    u = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    d = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    c = null == d ? void 0 : d.hasFeature(o.GuildFeatures.COMMUNITY),
                    E = (0, l.default)([r.default], () => r.default.can(o.Permissions.ADMINISTRATOR, d), [d]),
                    _ = (null == d ? void 0 : d.isOwner(n)) || E;
                return !!u && !c && !!_ && !!t || !1
            }

            function d(e, t) {
                let n = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    r = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    s = null == r ? void 0 : r.hasFeature(o.GuildFeatures.COMMUNITY);
                return !!n && !!s && !!t || !1
            }