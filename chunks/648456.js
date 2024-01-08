            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            }), i("222007");
            var n, l = i("913144"),
                a = i("255397"),
                u = i("316272"),
                r = i("651057"),
                d = i("299285"),
                o = i("191145"),
                s = i("601222"),
                c = i("233069"),
                f = i("271938"),
                _ = i("42203"),
                E = i("945956"),
                A = i("18494"),
                I = i("697218"),
                T = i("599110"),
                C = i("773336"),
                v = i("289732"),
                S = i("550766"),
                N = i("191225"),
                p = i("602718"),
                y = i("885829"),
                h = i("986214"),
                D = i("126939"),
                O = i("334368"),
                g = i("15264"),
                L = i("673044"),
                m = i("803353"),
                P = i("420444"),
                M = i("954016"),
                b = i("49111"),
                U = i("782340");
            let R = {},
                V = {};

            function F(e) {
                var t;
                let i = (null == e ? void 0 : e.activity) != null ? !(0, g.default)(null == e ? void 0 : e.activity) : void 0,
                    n = (null == e ? void 0 : e.activity) != null ? (0, L.default)(null == e ? void 0 : e.activity) : void 0,
                    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, O.default)((0, C.getOS)())].release_phase;
                return {
                    isPremiumActivity: i,
                    isFreePeriod: n,
                    releasePhase: l
                }
            }
            async function Y(e) {
                let {
                    channelId: t,
                    embeddedActivity: i,
                    analyticsLocations: n
                } = e, {
                    application_id: l
                } = i, a = _.default.getChannel(t), u = null == a ? void 0 : a.getGuildId(), r = I.default.getCurrentUser();
                if (null == a || null == r) return;
                let d = N.default.getShelfActivities(u),
                    c = v.default.getState().shelfOrder,
                    f = 0 === N.default.getEmbeddedActivitiesForChannel(t).filter(e => e.application_id === l).length,
                    E = (0, p.default)({
                        applicationId: l,
                        activityConfigs: d
                    }),
                    A = 1 + c.findIndex(e => e === l),
                    {
                        isPremiumActivity: C,
                        isFreePeriod: S,
                        releasePhase: y
                    } = F(E),
                    h = await (0, s.default)();
                V[l] = e => {
                    var t, i;
                    R[l] = e, T.default.track(b.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId(),
                        media_session_id: e.mediaSessionId,
                        activity_session_id: e.activitySessionId,
                        application_id: l,
                        location_stack: n,
                        user_premium_tier: r.premiumType,
                        is_premium_activity: C,
                        is_free_period: S,
                        raw_thermal_state: h,
                        n_participants: o.default.getUserParticipantCount(a.id),
                        is_activity_start: f,
                        release_phase: y,
                        activity_premium_tier_requirement: null == E ? void 0 : null === (t = E.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == E ? void 0 : null === (i = E.activity) || void 0 === i ? void 0 : i.shelf_rank,
                        shelf_sorted_rank: A > 0 ? A : null
                    })
                }
            }

            function w(e) {
                return null == e ? void 0 : e.activity_id
            }
            async function G(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = R[l], u = _.default.getChannel(n), r = N.default.getEmbeddedActivityDurationMs(n, l), d = I.default.getCurrentUser(), o = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let c = N.default.getShelfActivities(o),
                    f = (0, p.default)({
                        applicationId: l,
                        activityConfigs: c
                    }),
                    {
                        isPremiumActivity: E,
                        isFreePeriod: A,
                        releasePhase: C
                    } = F(f),
                    v = await (0, s.default)();
                T.default.track(b.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionId,
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: d.premiumType,
                    is_premium_activity: E,
                    is_free_period: A,
                    raw_thermal_state: v,
                    release_phase: C,
                    activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                    shelf_rank: null == f ? void 0 : null === (i = f.activity) || void 0 === i ? void 0 : i.shelf_rank
                }), delete V[l], delete R[l]
            }

            function B(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: u,
                    updateCode: r
                } = e, d = f.default.getId(), o = N.default.getEmbeddedActivitiesForChannel(n), s = _.default.getChannel(n);
                if (r === M.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == s ? void 0 : s.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === u.find(e => e.user_id === d) && a.default.selectParticipant(n, null), !u.some(e => e.user_id === d)) return;
                let c = E.default.getMediaSessionId(),
                    {
                        application_id: A
                    } = l,
                    I = w(l);
                null != A && null != I && null != c && (null === (t = V[A]) || void 0 === t || t.call(V, {
                    mediaSessionId: c,
                    activitySessionId: I
                }), delete V[A])
            }

            function H(e) {
                let {
                    mediaSessionId: t
                } = e, i = E.default.getChannelId();
                if (null != t && null != i) {
                    let e = N.default.getSelfEmbeddedActivityForChannel(i),
                        l = null == e ? void 0 : e.application_id,
                        a = w(e);
                    if (null != l && null != t && null != a) {
                        var n;
                        null === (n = V[l]) || void 0 === n || n.call(V, {
                            mediaSessionId: t,
                            activitySessionId: a
                        }), delete V[l]
                    }
                }
            }
            n = class extends u.default {
                _initialize() {
                    A.default.addChangeListener(this.handleSelectedChannelUpdate), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", Y), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", H)
                }
                _terminate() {
                    A.default.removeChangeListener(this.handleSelectedChannelUpdate), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", Y), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", H)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = A.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                application_id: i
                            }
                            of N.default.getSelfEmbeddedActivities().values())(0, P.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = N.default.getEmbeddedActivitiesForChannel(e),
                                i = f.default.getId();
                            t.forEach(e => {
                                if (e.connections.has(i)) {
                                    let t = N.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, S.disconnectEmbeddedActivity)(e.channelId, e.application_id)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = e => {
                        let {
                            error: t,
                            guildId: i
                        } = e;
                        if (null == i) return;
                        let n = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (t.code) {
                            case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case b.AbortCodes.INVALID_PERMISSIONS:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case b.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = U.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
                        }
                        this.showLaunchErrorModal(n)
                    }, this.superHandleRPCDisconnect = e => {
                        let {
                            reason: t,
                            application: i
                        } = e, n = i.id;
                        if (null != n && null != t) {
                            for (let {
                                    application_id: e,
                                    channelId: t
                                }
                                of N.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== b.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n, l;
                        let a;
                        let {
                            channelId: u,
                            applicationId: o,
                            analyticsLocations: s
                        } = e, f = _.default.getChannel(u);
                        if (void 0 === f || c.GUILD_VOCAL_CHANNEL_TYPES.has(null == f ? void 0 : f.type) && A.default.getVoiceChannelId() !== u) return;
                        let E = N.default.getSelfEmbeddedActivityForChannel(u);
                        if ((null == E ? void 0 : E.application_id) === o) return;
                        let I = await r.default.fetchApplication(o),
                            T = (0, D.getIsActivitiesEnabledForCurrentPlatform)();
                        if (!T) {
                            this.showLaunchErrorModal(U.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, m.default)(null == I ? void 0 : null === (t = I.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(U.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let C = null == E ? void 0 : E.application_id;
                        null != C && (await r.default.fetchApplication(C), a = d.default.getApplication(C));
                        let v = null !== (n = null == f ? void 0 : f.getGuildId()) && void 0 !== n ? n : void 0,
                            {
                                activityConfigs: O,
                                applications: g
                            } = await (0, S.fetchShelf)({
                                guildId: v
                            }),
                            L = (0, p.default)({
                                applicationId: o,
                                activityConfigs: O,
                                applications: g
                            });
                        if (null == L) {
                            let e = await (0, S.fetchShelf)({
                                guildId: v,
                                force: !0
                            });
                            L = (0, p.default)({
                                applicationId: o,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let P = N.default.getEmbeddedActivitiesForChannel(u).find(e => e.application_id === o),
                            M = null !== (l = null == P ? void 0 : null === (i = P.connections) || void 0 === i ? void 0 : i.size) && void 0 !== l ? l : 0;
                        M > 0 ? (0, y.maybeJoinEmbeddedActivity)({
                            channelId: u,
                            applicationId: o,
                            activityId: null,
                            inputApplication: null,
                            analyticsLocations: s,
                            embeddedActivitiesManager: this
                        }) : await (0, h.default)({
                            activityItem: L,
                            currentActivity: a,
                            channelId: u,
                            guildId: v,
                            embeddedActivitiesManager: this,
                            analyticsLocations: s
                        })
                    }
                }
            }