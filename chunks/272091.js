            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
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
                u = n("49111");

            function o(e, t) {
                let n = (0, l.default)([s.default], () => {
                        var e, t;
                        return null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }),
                    o = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    d = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    c = null == d ? void 0 : d.hasFeature(u.GuildFeatures.COMMUNITY),
                    f = (0, l.default)([r.default], () => r.default.can(u.Permissions.ADMINISTRATOR, d), [d]),
                    h = (null == d ? void 0 : d.isOwner(n)) || f;
                return !!o && !c && !!h && !!t || !1
            }

            function d(e, t) {
                let n = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    r = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    s = null == r ? void 0 : r.hasFeature(u.GuildFeatures.COMMUNITY);
                return !!n && !!s && !!t || !1
            }