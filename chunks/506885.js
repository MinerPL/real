            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("913144"),
                i = n("327037"),
                l = n("462274"),
                s = n("535013"),
                u = n("42203"),
                a = n("26989"),
                o = n("713135"),
                c = n("386714");
            async function d(e, t) {
                var n, d, f;
                let I, {
                    withMutualGuilds: _ = !1,
                    withMutualFriendsCount: E = !1,
                    friendToken: S,
                    preloadUserBanner: T = !0,
                    dispatchWait: N = !1,
                    guildId: p,
                    channelId: m
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                null != t && (0, l.maybeFetchColors)(t), null != p && !_ && (_ = !0), null != p && (I = null !== (d = null === (n = (0, s.getVisibleConnectionsRole)({
                    guildMember: a.default.getMember(p, e),
                    channel: u.default.getChannel(m)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let C = o.default.getUserProfile(e),
                    h = o.default.getMutualGuilds(e),
                    P = o.default.getMutualFriendsCount(e),
                    L = o.default.isFetchingProfile(e),
                    A = (null == C ? void 0 : C.profileFetchFailed) || !L && (!Array.isArray(h) && _ || null == P && E),
                    v = T ? c.default : void 0,
                    R = !1;
                if (null != p) {
                    let t = o.default.getGuildMemberProfile(e, p);
                    R = null == t
                }!(!A && !R && (L || Date.now() - (null !== (f = null == C ? void 0 : C.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (N ? await r.default.wait(() => (0, i.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: E,
                    friendToken: S,
                    guildId: p,
                    connectionsRoleId: I
                }, v)) : await (0, i.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: E,
                    friendToken: S,
                    guildId: p,
                    connectionsRoleId: I
                }, v))
            }