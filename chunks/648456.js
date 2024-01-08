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
                I = i("18494"),
                A = i("697218"),
                T = i("599110"),
                C = i("773336"),
                v = i("289732"),
                S = i("550766"),
                N = i("191225"),
                h = i("602718"),
                p = i("885829"),
                y = i("986214"),
                D = i("126939"),
                O = i("837707"),
                g = i("334368"),
                L = i("15264"),
                m = i("673044"),
                P = i("803353"),
                M = i("420444"),
                b = i("954016"),
                U = i("49111"),
                R = i("782340");
            let V = {},
                F = {};

            function Y(e) {
                var t;
                let i = (null == e ? void 0 : e.activity) != null ? !(0, L.default)(null == e ? void 0 : e.activity) : void 0,
                    n = (null == e ? void 0 : e.activity) != null ? (0, m.default)(null == e ? void 0 : e.activity) : void 0,
                    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, g.default)((0, C.getOS)())].release_phase;
                return {
                    isPremiumActivity: i,
                    isFreePeriod: n,
                    releasePhase: l
                }
            }
            async function w(e) {
                let {
                    channelId: t,
                    applicationId: i,
                    analyticsLocations: n
                } = e, l = _.default.getChannel(t), a = null == l ? void 0 : l.getGuildId(), u = A.default.getCurrentUser();
                if (null == l || null == u) return;
                let r = N.default.getShelfActivities(a),
                    d = v.default.getState().shelfOrder,
                    c = 0 === N.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === i).length,
                    f = (0, h.default)({
                        applicationId: i,
                        activityConfigs: r
                    }),
                    E = 1 + d.findIndex(e => e === i),
                    {
                        isPremiumActivity: I,
                        isFreePeriod: C,
                        releasePhase: S
                    } = Y(f),
                    p = await (0, s.default)();
                F[i] = e => {
                    var t, a;
                    V[i] = e, T.default.track(U.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                        media_session_id: e.mediaSessionId,
                        activity_session_id: e.activitySessionId,
                        application_id: i,
                        location_stack: n,
                        user_premium_tier: u.premiumType,
                        is_premium_activity: I,
                        is_free_period: C,
                        raw_thermal_state: p,
                        n_participants: o.default.getUserParticipantCount(l.id),
                        is_activity_start: c,
                        release_phase: S,
                        activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == f ? void 0 : null === (a = f.activity) || void 0 === a ? void 0 : a.shelf_rank,
                        shelf_sorted_rank: E > 0 ? E : null
                    })
                }
            }
            async function G(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = V[l], u = _.default.getChannel(n), r = N.default.getEmbeddedActivityDurationMs(n, l), d = A.default.getCurrentUser(), o = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let c = N.default.getShelfActivities(o),
                    f = (0, h.default)({
                        applicationId: l,
                        activityConfigs: c
                    }),
                    {
                        isPremiumActivity: E,
                        isFreePeriod: I,
                        releasePhase: C
                    } = Y(f),
                    v = await (0, s.default)();
                T.default.track(U.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionId,
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: d.premiumType,
                    is_premium_activity: E,
                    is_free_period: I,
                    raw_thermal_state: v,
                    release_phase: C,
                    activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                    shelf_rank: null == f ? void 0 : null === (i = f.activity) || void 0 === i ? void 0 : i.shelf_rank
                }), delete F[l], delete V[l]
            }

            function B(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: u,
                    updateCode: r
                } = e, d = f.default.getId(), o = N.default.getEmbeddedActivitiesForChannel(n), s = _.default.getChannel(n);
                if (r === b.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == s ? void 0 : s.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === u.find(e => e.user_id === d) && a.default.selectParticipant(n, null), !u.some(e => e.user_id === d)) return;
                let c = E.default.getMediaSessionId(),
                    {
                        application_id: I
                    } = l,
                    A = (0, O.default)(l);
                null != I && null != A && null != c && (null === (t = F[I]) || void 0 === t || t.call(F, {
                    mediaSessionId: c,
                    activitySessionId: A
                }), delete F[I])
            }

            function H(e) {
                let {
                    mediaSessionId: t
                } = e, i = E.default.getChannelId();
                if (null != t && null != i) {
                    let e = N.default.getSelfEmbeddedActivityForChannel(i),
                        l = null == e ? void 0 : e.applicationId,
                        a = (0, O.default)(e);
                    if (null != l && null != t && null != a) {
                        var n;
                        null === (n = F[l]) || void 0 === n || n.call(F, {
                            mediaSessionId: t,
                            activitySessionId: a
                        }), delete F[l]
                    }
                }
            }
            n = class extends u.default {
                _initialize() {
                    I.default.addChangeListener(this.handleSelectedChannelUpdate), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", w), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", H)
                }
                _terminate() {
                    I.default.removeChangeListener(this.handleSelectedChannelUpdate), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", w), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", H)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = I.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                applicationId: i
                            }
                            of N.default.getSelfEmbeddedActivities().values())(0, M.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = N.default.getEmbeddedActivitiesForChannel(e),
                                i = f.default.getId();
                            t.forEach(e => {
                                if (e.userIds.has(i)) {
                                    let t = N.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, S.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = e => {
                        let {
                            error: t,
                            guildId: i
                        } = e;
                        if (null == i) return;
                        let n = R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (t.code) {
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case U.AbortCodes.INVALID_PERMISSIONS:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
                        }
                        this.showLaunchErrorModal(n)
                    }, this.superHandleRPCDisconnect = e => {
                        let {
                            reason: t,
                            application: i
                        } = e, n = i.id;
                        if (null != n && null != t) {
                            for (let {
                                    applicationId: e,
                                    channelId: t
                                }
                                of N.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== U.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n;
                        let l;
                        let {
                            channelId: a,
                            applicationId: u,
                            analyticsLocations: o
                        } = e, s = _.default.getChannel(a);
                        if (void 0 === s || c.GUILD_VOCAL_CHANNEL_TYPES.has(null == s ? void 0 : s.type) && I.default.getVoiceChannelId() !== a) return;
                        let f = N.default.getSelfEmbeddedActivityForChannel(a);
                        if ((null == f ? void 0 : f.applicationId) === u) return;
                        let E = await r.default.fetchApplication(u),
                            A = (0, D.getIsActivitiesEnabledForCurrentPlatform)();
                        if (!A) {
                            this.showLaunchErrorModal(R.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, P.default)(null == E ? void 0 : null === (t = E.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(R.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let T = null == f ? void 0 : f.applicationId;
                        null != T && (await r.default.fetchApplication(T), l = d.default.getApplication(T));
                        let C = null !== (i = null == s ? void 0 : s.getGuildId()) && void 0 !== i ? i : void 0,
                            {
                                activityConfigs: v,
                                applications: O
                            } = await (0, S.fetchShelf)({
                                guildId: C
                            }),
                            g = (0, h.default)({
                                applicationId: u,
                                activityConfigs: v,
                                applications: O
                            });
                        if (null == g) {
                            let e = await (0, S.fetchShelf)({
                                guildId: C,
                                force: !0
                            });
                            g = (0, h.default)({
                                applicationId: u,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let L = N.default.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === u),
                            m = null !== (n = null == L ? void 0 : L.userIds.size) && void 0 !== n ? n : 0;
                        m > 0 ? (0, p.maybeJoinEmbeddedActivity)({
                            channelId: a,
                            applicationId: u,
                            instanceId: null == L ? void 0 : L.instanceId,
                            inputApplication: null,
                            analyticsLocations: o,
                            embeddedActivitiesManager: this
                        }) : await (0, y.default)({
                            activityItem: g,
                            currentActivity: l,
                            channelId: a,
                            guildId: C,
                            embeddedActivitiesManager: this,
                            analyticsLocations: o
                        })
                    }
                }
            }