            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var l = n("884691"),
                a = n("298386"),
                s = n("446674"),
                i = n("191225"),
                r = n("534222"),
                o = n("170183"),
                u = n("130563"),
                d = n("373469"),
                c = n("271938"),
                f = n("42203"),
                h = n("305961"),
                C = n("957255"),
                p = n("945956"),
                m = n("282109"),
                E = n("800762"),
                g = n("49111");

            function I(e) {
                var t, n;
                let I = (0, s.useStateFromStores)([m.default], () => m.default.isMuted(e)),
                    S = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(e)),
                    _ = (null === (t = (0, o.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
                    N = (0, r.useGuildActiveEvent)(e),
                    T = (null === (n = (0, u.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
                    A = (0, s.useStateFromStores)([c.default], () => c.default.getId()),
                    {
                        selectedVoiceGuildId: L,
                        selectedVoiceChannelId: v
                    } = (0, s.useStateFromStoresObject)([p.default], () => ({
                        selectedVoiceGuildId: p.default.getGuildId(),
                        selectedVoiceChannelId: p.default.getChannelId()
                    })),
                    x = L === e,
                    R = (0, s.useStateFromStores)([d.default], () => !!x && null != d.default.getActiveStreamForUser(A, e)),
                    M = null == S ? void 0 : S.afkChannelId,
                    {
                        guildHasVoice: O,
                        guildHasVideo: y,
                        selectedVoiceChannelHasVideo: D
                    } = (0, s.useStateFromStoresObject)([E.default, f.default, C.default], () => {
                        let t = !1,
                            n = !1,
                            l = E.default.getVoiceStates(e);
                        for (let e in l) {
                            let s = f.default.getBasicChannel(l[e].channelId);
                            null != s && s.type !== a.ChannelTypes.GUILD_STAGE_VOICE && M !== s.id && C.default.canBasicChannel(g.BasicPermissions.VIEW_CHANNEL, s) && (t = !0, l[e].selfVideo && (n = !0))
                        }
                        return {
                            guildHasVoice: t,
                            guildHasVideo: n,
                            selectedVoiceChannelHasVideo: null != v && E.default.hasVideo(v)
                        }
                    }, [M, e, v]),
                    b = (0, s.useStateFromStores)([d.default], () => d.default.getAllApplicationStreams().some(t => t.guildId === e)),
                    j = (0, s.useStateFromStores)([i.default], () => i.default.getEmbeddedActivitiesForGuild(e).length > 0),
                    G = (0, s.useStateFromStores)([i.default], () => Array.from(i.default.getSelfEmbeddedActivities().values()).some(t => {
                        let {
                            guildId: n
                        } = t;
                        return n === e
                    })),
                    U = !1,
                    P = !1,
                    w = !1,
                    F = !1,
                    B = !1,
                    V = !1;
                return x ? (U = !0, P = (null == N ? void 0 : N.channel_id) === v, w = T, F = x && D, B = R, V = G) : !I && (U = O, P = null != N, w = _, F = y, B = b, V = j), l.useMemo(() => ({
                    audio: U,
                    video: F,
                    screenshare: B,
                    liveStage: w,
                    activeEvent: P,
                    activity: V,
                    isCurrentUserConnected: x || T
                }), [U, F, B, w, P, V, x, T])
            }