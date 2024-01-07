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
                c = i("271938"),
                f = i("42203"),
                _ = i("945956"),
                E = i("18494"),
                A = i("697218"),
                I = i("599110"),
                T = i("773336"),
                C = i("289732"),
                v = i("550766"),
                S = i("191225"),
                N = i("602718"),
                p = i("885829"),
                y = i("986214"),
                h = i("126939"),
                D = i("334368"),
                O = i("15264"),
                g = i("673044"),
                L = i("803353"),
                m = i("420444"),
                P = i("954016"),
                M = i("49111"),
                b = i("782340");
            let U = {},
                R = {};

            function V(e) {
                var t;
                let i = (null == e ? void 0 : e.activity) != null ? !(0, O.default)(null == e ? void 0 : e.activity) : void 0,
                    n = (null == e ? void 0 : e.activity) != null ? (0, g.default)(null == e ? void 0 : e.activity) : void 0,
                    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, D.default)((0, T.getOS)())].release_phase;
                return {
                    isPremiumActivity: i,
                    isFreePeriod: n,
                    releasePhase: l
                }
            }
            async function F(e) {
                let {
                    channelId: t,
                    embeddedActivity: i,
                    analyticsLocations: n
                } = e, {
                    application_id: l
                } = i, a = f.default.getChannel(t), u = null == a ? void 0 : a.getGuildId(), r = A.default.getCurrentUser();
                if (null == a || null == r) return;
                let d = S.default.getShelfActivities(u),
                    c = C.default.getState().shelfOrder,
                    _ = 0 === S.default.getEmbeddedActivitiesForChannel(t).filter(e => e.application_id === l).length,
                    E = (0, N.default)({
                        applicationId: l,
                        activityConfigs: d
                    }),
                    T = 1 + c.findIndex(e => e === l),
                    {
                        isPremiumActivity: v,
                        isFreePeriod: p,
                        releasePhase: y
                    } = V(E),
                    h = await (0, s.default)();
                R[l] = e => {
                    var t, i;
                    U[l] = e, I.default.track(M.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId(),
                        media_session_id: e.mediaSessionId,
                        activity_session_id: e.activitySessionId,
                        application_id: l,
                        location_stack: n,
                        user_premium_tier: r.premiumType,
                        is_premium_activity: v,
                        is_free_period: p,
                        raw_thermal_state: h,
                        n_participants: o.default.getUserParticipantCount(a.id),
                        is_activity_start: _,
                        release_phase: y,
                        activity_premium_tier_requirement: null == E ? void 0 : null === (t = E.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == E ? void 0 : null === (i = E.activity) || void 0 === i ? void 0 : i.shelf_rank,
                        shelf_sorted_rank: T > 0 ? T : null
                    })
                }
            }

            function Y(e) {
                return null == e ? void 0 : e.activity_id
            }
            async function w(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = U[l], u = f.default.getChannel(n), r = S.default.getEmbeddedActivityDurationMs(n, l), d = A.default.getCurrentUser(), o = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let c = S.default.getShelfActivities(o),
                    _ = (0, N.default)({
                        applicationId: l,
                        activityConfigs: c
                    }),
                    {
                        isPremiumActivity: E,
                        isFreePeriod: T,
                        releasePhase: C
                    } = V(_),
                    v = await (0, s.default)();
                I.default.track(M.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionId,
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: d.premiumType,
                    is_premium_activity: E,
                    is_free_period: T,
                    raw_thermal_state: v,
                    release_phase: C,
                    activity_premium_tier_requirement: null == _ ? void 0 : null === (t = _.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                    shelf_rank: null == _ ? void 0 : null === (i = _.activity) || void 0 === i ? void 0 : i.shelf_rank
                }), delete R[l], delete U[l]
            }

            function B(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: u,
                    updateCode: r
                } = e, d = c.default.getId(), o = S.default.getEmbeddedActivitiesForChannel(n), s = f.default.getChannel(n);
                if (r === P.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == s ? void 0 : s.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === u.find(e => e.user_id === d) && a.default.selectParticipant(n, null), !u.some(e => e.user_id === d)) return;
                let E = _.default.getMediaSessionId(),
                    {
                        application_id: A
                    } = l,
                    I = Y(l);
                null != A && null != I && null != E && (null === (t = R[A]) || void 0 === t || t.call(R, {
                    mediaSessionId: E,
                    activitySessionId: I
                }), delete R[A])
            }

            function G(e) {
                let {
                    mediaSessionId: t
                } = e, i = _.default.getChannelId();
                if (null != t && null != i) {
                    let e = S.default.getSelfEmbeddedActivityForChannel(i),
                        l = null == e ? void 0 : e.application_id,
                        a = Y(e);
                    if (null != l && null != t && null != a) {
                        var n;
                        null === (n = R[l]) || void 0 === n || n.call(R, {
                            mediaSessionId: t,
                            activitySessionId: a
                        }), delete R[l]
                    }
                }
            }
            n = class extends u.default {
                _initialize() {
                    E.default.addChangeListener(this.handleSelectedChannelUpdate), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", F), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", w), l.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", G)
                }
                _terminate() {
                    E.default.removeChangeListener(this.handleSelectedChannelUpdate), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", F), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", w), l.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", G)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = E.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                application_id: i
                            }
                            of S.default.getSelfEmbeddedActivities().values())(0, m.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = S.default.getEmbeddedActivitiesForChannel(e),
                                i = c.default.getId();
                            t.forEach(e => {
                                if (e.connections.has(i)) {
                                    let t = S.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, v.disconnectEmbeddedActivity)(e.channelId, e.application_id)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = e => {
                        let {
                            error: t,
                            guildId: i
                        } = e;
                        if (null == i) return;
                        let n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (t.code) {
                            case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case M.AbortCodes.INVALID_PERMISSIONS:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case M.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
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
                                of S.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== M.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n, l;
                        let a;
                        let {
                            channelId: u,
                            applicationId: o,
                            analyticsLocations: s
                        } = e;
                        if (E.default.getVoiceChannelId() !== u) return;
                        let c = S.default.getSelfEmbeddedActivityForChannel(u);
                        if ((null == c ? void 0 : c.application_id) === o) return;
                        let _ = await r.default.fetchApplication(o),
                            A = (0, h.getIsActivitiesEnabledForCurrentPlatform)();
                        if (!A) {
                            this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, L.default)(null == _ ? void 0 : null === (t = _.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let I = null == c ? void 0 : c.application_id;
                        null != I && (await r.default.fetchApplication(I), a = d.default.getApplication(I));
                        let T = f.default.getChannel(u),
                            C = null !== (n = null == T ? void 0 : T.getGuildId()) && void 0 !== n ? n : void 0,
                            {
                                activityConfigs: D,
                                applications: O
                            } = await (0, v.fetchShelf)({
                                guildId: C
                            }),
                            g = (0, N.default)({
                                applicationId: o,
                                activityConfigs: D,
                                applications: O
                            });
                        if (null == g) {
                            let e = await (0, v.fetchShelf)({
                                guildId: C,
                                force: !0
                            });
                            g = (0, N.default)({
                                applicationId: o,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let m = S.default.getEmbeddedActivitiesForChannel(u).find(e => e.application_id === o),
                            P = null !== (l = null == m ? void 0 : null === (i = m.connections) || void 0 === i ? void 0 : i.size) && void 0 !== l ? l : 0;
                        P > 0 ? (0, p.maybeJoinEmbeddedActivity)({
                            channelId: u,
                            applicationId: o,
                            activityId: null,
                            inputApplication: null,
                            analyticsLocations: s,
                            embeddedActivitiesManager: this
                        }) : await (0, y.default)({
                            activityItem: g,
                            currentActivity: a,
                            channelId: u,
                            guildId: C,
                            embeddedActivitiesManager: this,
                            analyticsLocations: s
                        })
                    }
                }
            }