(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47146"], {
        546422: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                sync: function() {
                    return r
                },
                play: function() {
                    return d
                },
                getMetadata: function() {
                    return o
                }
            });
            var n = i("990746"),
                l = i("913144"),
                a = i("824563"),
                u = i("49111");

            function r(e, t) {
                l.default.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: e,
                    userId: t
                })
            }

            function d(e, t) {
                o(e, t).then(i => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t,
                    metadata: i
                })).catch(() => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t
                }))
            }

            function o(e, t) {
                let i = e.metadata;
                if (null != i) return Promise.resolve(i);
                let r = a.default.getActivityMetadata(t);
                return null != r ? Promise.resolve(r) : null == e.session_id ? Promise.reject(Error("null/undefined session_id")) : n.default.get({
                    url: u.Endpoints.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: i
                    } = e;
                    return l.default.dispatch({
                        type: "ACTIVITY_METADATA_UPDATE",
                        metadata: i,
                        userId: t
                    }), i
                })
            }
        },
        901582: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040"),
                l = i("773670"),
                a = i("462567"),
                u = i("599110"),
                r = i("117362"),
                d = i("49111");
            class o extends l.Component {
                renderProvider(e) {
                    var t, i;
                    let {
                        section: l,
                        page: a,
                        object: r,
                        objectType: d,
                        children: o
                    } = this.props, s = this.mergeLocation(e.location, this.getLocation(a, l, r, d)), c = this.getContext(s, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
                    return (0, n.jsx)(u.AnalyticsContext.Provider, {
                        value: c,
                        children: o
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, n.jsx)(u.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, r.cachedFunction)((e, t, i, n) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, r.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, r.cachedFunction)((e, t, i) => ({
                        location: e,
                        loadDate: t,
                        loadId: i
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, a.v4)())
                }
            }
            o.Pages = d.AnalyticsPages, o.Sections = d.AnalyticsSections, o.Objects = d.AnalyticsObjects, o.ObjectTypes = d.AnalyticsObjectTypes, o.defaultProps = {
                root: !1
            }
        },
        831387: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                markActivityUsed: function() {
                    return l
                },
                handleSetOrder: function() {
                    return a
                }
            });
            var n = i("913144");

            function l(e) {
                n.default.dispatch({
                    type: "ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: new Date().getTime()
                })
            }

            function a(e) {
                n.default.dispatch({
                    type: "ACTIVITY_SHELF_SET_ORDER",
                    order: e
                })
            }
        },
        289732: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("498225"),
                l = i("913144");

            function a() {
                return {
                    usageByApplicationId: {},
                    shelfOrder: []
                }
            }
            let u = a();
            class r extends n.default.PersistedStore {
                initialize(e) {
                    u = {
                        ...a(),
                        ...null != e ? e : {}
                    }
                }
                getState() {
                    return u
                }
            }
            r.displayName = "ActivityShelfStore", r.persistKey = "ActivityShelfStore";
            var d = new r(l.default, {
                LOGOUT: function() {
                    u = a()
                },
                ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    let {
                        applicationId: t,
                        timestamp: i
                    } = e, n = u.usageByApplicationId[t];
                    null != n ? (n.length >= 64 && n.splice(0, n.length - 64 + 1), n.push(i)) : u.usageByApplicationId[t] = [i]
                },
                ACTIVITY_SHELF_SET_ORDER: function(e) {
                    let {
                        order: t
                    } = e;
                    u.shelfOrder = t
                }
            })
        },
        898065: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                toggleEnableDeveloperActivityShelf: function() {
                    return l
                },
                toggleUseActivityUrlOverride: function() {
                    return a
                },
                setActivityUrlOverride: function() {
                    return u
                },
                markActivityUsed: function() {
                    return r
                },
                updateFilter: function() {
                    return d
                }
            });
            var n = i("913144");

            function l() {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED"
                })
            }

            function a() {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: e
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: new Date().getTime()
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: e
                })
            }
        },
        648456: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return H
                }
            });
            var n = i("913144"),
                l = i("255397"),
                a = i("823411"),
                u = i("316272"),
                r = i("191145"),
                d = i("601222"),
                o = i("271938"),
                s = i("42203"),
                c = i("546463"),
                f = i("945956"),
                _ = i("18494"),
                E = i("697218"),
                I = i("599110"),
                A = i("773336"),
                T = i("289732"),
                C = i("550766"),
                v = i("191225"),
                S = i("602718"),
                N = i("885829"),
                p = i("986214"),
                D = i("126939"),
                h = i("334368"),
                y = i("15264"),
                O = i("673044"),
                g = i("803353"),
                L = i("420444"),
                m = i("954016"),
                P = i("49111"),
                M = i("782340");
            let b = {},
                U = {};

            function R(e) {
                var t;
                let i = (null == e ? void 0 : e.activity) != null ? !(0, y.default)(null == e ? void 0 : e.activity) : void 0,
                    n = (null == e ? void 0 : e.activity) != null ? (0, O.default)(null == e ? void 0 : e.activity) : void 0,
                    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, h.default)((0, A.getOS)())].release_phase;
                return {
                    isPremiumActivity: i,
                    isFreePeriod: n,
                    releasePhase: l
                }
            }
            async function V(e) {
                let {
                    channelId: t,
                    embeddedActivity: i,
                    analyticsLocations: n
                } = e, {
                    application_id: l
                } = i, a = s.default.getChannel(t), u = null == a ? void 0 : a.getGuildId(), o = E.default.getCurrentUser();
                if (null == a || null == o) return;
                let c = v.default.getShelfActivities(u),
                    f = T.default.getState().shelfOrder,
                    _ = 0 === v.default.getEmbeddedActivitiesForChannel(t).filter(e => e.application_id === l).length,
                    A = (0, S.default)({
                        applicationId: l,
                        activityConfigs: c
                    }),
                    C = 1 + f.findIndex(e => e === l),
                    {
                        isPremiumActivity: N,
                        isFreePeriod: p,
                        releasePhase: D
                    } = R(A),
                    h = await (0, d.default)();
                U[l] = e => {
                    var t, i;
                    b[l] = e, I.default.track(P.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId(),
                        media_session_id: e.mediaSessionId,
                        activity_session_id: e.activitySessionId,
                        application_id: l,
                        location_stack: n,
                        user_premium_tier: o.premiumType,
                        is_premium_activity: N,
                        is_free_period: p,
                        raw_thermal_state: h,
                        n_participants: r.default.getUserParticipantCount(a.id),
                        is_activity_start: _,
                        release_phase: D,
                        activity_premium_tier_requirement: null == A ? void 0 : null === (t = A.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == A ? void 0 : null === (i = A.activity) || void 0 === i ? void 0 : i.shelf_rank,
                        shelf_sorted_rank: C > 0 ? C : null
                    })
                }
            }

            function F(e) {
                return null == e ? void 0 : e.activity_id
            }
            async function Y(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = b[l], u = s.default.getChannel(n), r = v.default.getEmbeddedActivityDurationMs(n, l), o = E.default.getCurrentUser(), c = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == o) return;
                let f = v.default.getShelfActivities(c),
                    _ = (0, S.default)({
                        applicationId: l,
                        activityConfigs: f
                    }),
                    {
                        isPremiumActivity: A,
                        isFreePeriod: T,
                        releasePhase: C
                    } = R(_),
                    N = await (0, d.default)();
                I.default.track(P.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionId,
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: o.premiumType,
                    is_premium_activity: A,
                    is_free_period: T,
                    raw_thermal_state: N,
                    release_phase: C,
                    activity_premium_tier_requirement: null == _ ? void 0 : null === (t = _.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                    shelf_rank: null == _ ? void 0 : null === (i = _.activity) || void 0 === i ? void 0 : i.shelf_rank
                }), delete U[l], delete b[l]
            }

            function w(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: a,
                    connections: u,
                    updateCode: r
                } = e, d = o.default.getId(), c = v.default.getEmbeddedActivitiesForChannel(n), _ = s.default.getChannel(n);
                if (r === m.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == _ ? void 0 : _.isPrivate()) && void 0 !== i && i && c.length <= 1 && void 0 === u.find(e => e.user_id === d) && l.default.selectParticipant(n, null), !u.some(e => e.user_id === d)) return;
                let E = f.default.getMediaSessionId(),
                    {
                        application_id: I
                    } = a,
                    A = F(a);
                null != I && null != A && null != E && (null === (t = U[I]) || void 0 === t || t.call(U, {
                    mediaSessionId: E,
                    activitySessionId: A
                }), delete U[I])
            }

            function G(e) {
                let {
                    mediaSessionId: t
                } = e, i = f.default.getChannelId();
                if (null != t && null != i) {
                    var n;
                    let e = v.default.getSelfEmbeddedActivityForChannel(i),
                        l = null == e ? void 0 : e.application_id,
                        a = F(e);
                    null != l && null != t && null != a && (null === (n = U[l]) || void 0 === n || n.call(U, {
                        mediaSessionId: t,
                        activitySessionId: a
                    }), delete U[l])
                }
            }
            class H extends u.default {
                _initialize() {
                    _.default.addChangeListener(this.handleSelectedChannelUpdate), n.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), n.default.subscribe("EMBEDDED_ACTIVITY_OPEN", V), n.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", Y), n.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", w), n.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), n.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), n.default.subscribe("MEDIA_SESSION_JOINED", G)
                }
                _terminate() {
                    _.default.removeChangeListener(this.handleSelectedChannelUpdate), n.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), n.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", V), n.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", Y), n.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", w), n.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), n.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), n.default.unsubscribe("MEDIA_SESSION_JOINED", G)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = _.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                application_id: i
                            }
                            of v.default.getSelfEmbeddedActivities().values())(0, L.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = v.default.getEmbeddedActivitiesForChannel(e),
                                i = o.default.getId();
                            t.forEach(e => {
                                if (e.connections.has(i)) {
                                    let t = v.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, C.disconnectEmbeddedActivity)(e.channelId, e.application_id)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = e => {
                        let {
                            error: t,
                            guildId: i
                        } = e;
                        if (null == i) return;
                        let n = M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (t.code) {
                            case P.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case P.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case P.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case P.AbortCodes.INVALID_PERMISSIONS:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case P.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case P.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
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
                                of v.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== P.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n, l;
                        let u;
                        let {
                            channelId: r,
                            applicationId: d,
                            analyticsLocations: o
                        } = e;
                        if (_.default.getVoiceChannelId() !== r) return;
                        let f = v.default.getSelfEmbeddedActivityForChannel(r);
                        if ((null == f ? void 0 : f.application_id) === d) return;
                        let E = await a.default.fetchApplication(d),
                            I = (0, D.getIsActivitiesEnabledForCurrentPlatform)();
                        if (!I) {
                            this.showLaunchErrorModal(M.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, g.default)(null == E ? void 0 : null === (t = E.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(M.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let A = null == f ? void 0 : f.application_id;
                        null != A && (await a.default.fetchApplication(A), u = c.default.getGame(A));
                        let T = s.default.getChannel(r),
                            h = null !== (n = null == T ? void 0 : T.getGuildId()) && void 0 !== n ? n : void 0,
                            {
                                activityConfigs: y,
                                applications: O
                            } = await (0, C.fetchShelf)({
                                guildId: h
                            }),
                            L = (0, S.default)({
                                applicationId: d,
                                activityConfigs: y,
                                applications: O
                            });
                        if (null == L) {
                            let e = await (0, C.fetchShelf)({
                                guildId: h,
                                force: !0
                            });
                            L = (0, S.default)({
                                applicationId: d,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let m = v.default.getEmbeddedActivitiesForChannel(r).find(e => e.application_id === d),
                            P = null !== (l = null == m ? void 0 : null === (i = m.connections) || void 0 === i ? void 0 : i.size) && void 0 !== l ? l : 0;
                        P > 0 ? (0, N.maybeJoinEmbeddedActivity)({
                            channelId: r,
                            applicationId: d,
                            activityId: null,
                            inputApplication: null,
                            analyticsLocations: o,
                            embeddedActivitiesManager: this
                        }) : await (0, p.default)({
                            activityItem: L,
                            currentActivity: u,
                            channelId: r,
                            guildId: h,
                            embeddedActivitiesManager: this,
                            analyticsLocations: o
                        })
                    }
                }
            }
        },
        544805: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                confirmActivityAgeGate: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("870346"),
                u = i("49111");

            function r(e) {
                let {
                    application: t,
                    onAgree: r,
                    onDisagree: d
                } = e, o = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), s = o ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ActivityAgeGateModal: e
                    } = await i.el("413012").then(i.bind(i, "413012"));
                    return i => (0, n.jsx)(e, {
                        ...i,
                        application: t,
                        onAgree: r,
                        onDisagree: d
                    })
                }, {
                    modalKey: "activity-age-gate",
                    contextKey: s
                }), Promise.resolve()
            }
        },
        370507: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");

            function a(e, t, i, a) {
                var u, r;
                n.default.show({
                    title: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: l.default.Messages.CANCEL,
                    confirmText: l.default.Messages.CONFIRM,
                    onConfirm: i,
                    onCancel: a,
                    body: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_BODY.format({
                        currentApplicationName: null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        targetApplicationName: null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : l.default.Messages.EMBEDDED_ACTIVITY_TARGET_APPLICATION_DEFAULT
                    })
                })
            }
        },
        602718: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("546463");

            function l(e) {
                var t;
                let {
                    applicationId: i,
                    activityConfigs: l,
                    applications: a
                } = e, u = null !== (t = null == a ? void 0 : a.find(e => e.id === i)) && void 0 !== t ? t : n.default.getGame(i), r = l.find(e => e.application_id === i);
                return null == r || null == u ? null : {
                    activity: r,
                    application: u
                }
            }
        },
        706508: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var n = i("823411"),
                l = i("653047"),
                a = i("42203"),
                u = i("546463"),
                r = i("18494"),
                d = i("697218"),
                o = i("427953"),
                s = i("550766"),
                c = i("544805"),
                f = i("370507"),
                _ = i("420444"),
                E = i("541473"),
                I = i("407908"),
                A = i("578708"),
                T = i("954016"),
                C = i("49111");
            async function v(e, t, i, n, l) {
                let u = a.default.getChannel(t),
                    r = null == u ? void 0 : u.getGuildId(),
                    c = d.default.getCurrentUser();
                if (null == u || null == t || null == r && !u.isPrivate() || null == c) return !1;
                let f = o.ActivitiesInTextExperiment.getCurrentConfig({
                        location: "joinEmbeddedActivity"
                    }, {
                        autoTrackExposure: !1
                    }).isActivitiesInTextEnabled,
                    v = (0, _.default)(u.id),
                    S = T.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(u.type);
                if (v) {
                    let e = await (0, E.default)({
                        channelId: u.id,
                        bypassChangeModal: l
                    });
                    if (!e) return !1
                } else if (!f || !S) return !1;
                return (0, A.default)(r, t), (0, s.startEmbeddedActivity)(t, {
                    application_id: e.application_id
                }, n), (0, I.default)({
                    type: C.AnalyticsGameOpenTypes.JOIN,
                    userId: c.id,
                    applicationId: e.application_id,
                    locationObject: i,
                    analyticsLocations: n
                }), !0
            }

            function S(e) {
                let {
                    activity: t,
                    currentEmbeddedApplication: i,
                    activityChannelId: o,
                    locationObject: s,
                    embeddedActivitiesManager: _,
                    analyticsLocations: E
                } = e, I = a.default.getChannel(o), T = null == I ? void 0 : I.getGuildId(), C = null == T || "" === T, S = d.default.getCurrentUser();
                if (null == I || C && !I.isPrivate() || null == o) return Promise.resolve(!1);
                if (r.default.getVoiceChannelId() === o && (null == i ? void 0 : i.id) === t.application_id) return (0, A.default)(T, o), Promise.resolve(!0);
                let N = async function() {
                    var e, i;
                    let {
                        bypassChangeVcModal: a
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }, r = (null == S ? void 0 : S.nsfwAllowed) == null;
                    if (r) {
                        let r = null !== (i = u.default.getGame(t.application_id)) && void 0 !== i ? i : l.default.createFromServer(await n.default.fetchApplication(t.application_id));
                        if ((null === (e = r.embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return new Promise(e => {
                            (0, c.confirmActivityAgeGate)({
                                application: r,
                                onAgree: () => {
                                    e(v(t, o, s, E, a))
                                },
                                onDisagree: () => e(!1)
                            })
                        })
                    }
                    return v(t, o, s, E, a)
                };
                return null != i ? new Promise(e => {
                    (0, f.default)(i, t, () => {
                        _.leaveActivity({
                            channelId: o,
                            applicationId: i.id
                        }), N({
                            bypassChangeVcModal: !0
                        })
                    }, () => e(!0))
                }) : N()
            }
        },
        885829: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                maybeJoinEmbeddedActivity: function() {
                    return T
                }
            });
            var n = i("404118"),
                l = i("823411"),
                a = i("645999"),
                u = i("653047"),
                r = i("42203"),
                d = i("546463"),
                o = i("305961"),
                s = i("957255"),
                c = i("697218"),
                f = i("800762"),
                _ = i("191225"),
                E = i("706508"),
                I = i("501260"),
                A = i("782340");
            async function T(e) {
                var t;
                let {
                    channelId: i,
                    applicationId: T,
                    activityId: C,
                    inputApplication: v,
                    analyticsLocations: S,
                    embeddedActivitiesManager: N
                } = e, p = _.default.getEmbeddedActivitiesForChannel(i), D = p.find(e => e.application_id === T && (null == C || e.activity_id === C)), h = v;
                if (null == h) {
                    let e = await l.default.fetchApplication(T);
                    h = u.default.createFromServer(e)
                }
                if (null == D || null == h) return;
                let y = c.default.getCurrentUser(),
                    O = (0, I.default)({
                        userId: null == y ? void 0 : y.id,
                        activity: D,
                        application: h,
                        channelId: i,
                        currentUser: y,
                        isActivitiesEnabledForCurrentPlatform: !0,
                        ChannelStore: r.default,
                        VoiceStateStore: f.default,
                        PermissionStore: s.default,
                        GuildStore: o.default
                    }),
                    g = _.default.getSelfEmbeddedActivityForChannel(i),
                    L = null == g ? void 0 : g.application_id,
                    m = null != L && null !== (t = d.default.getGame(L)) && void 0 !== t ? t : void 0;
                ! function(e) {
                    let {
                        embeddedActivityJoinability: t,
                        handleCanJoin: i
                    } = e;
                    switch (t) {
                        case I.EmbeddedActivityJoinability.CAN_JOIN:
                            null == i || i();
                            break;
                        case I.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            (0, a.showActivitiesInvalidPermissionsAlert)();
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                        case I.EmbeddedActivityJoinability.CHANNEL_FULL:
                        case I.EmbeddedActivityJoinability.NO_CHANNEL:
                        case I.EmbeddedActivityJoinability.NO_USER:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                hideActionSheet: !1
                            })
                    }
                }({
                    embeddedActivityJoinability: O,
                    handleCanJoin: async function e() {
                        null != D && await (0, E.default)({
                            activity: D,
                            currentEmbeddedApplication: m,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: N,
                            analyticsLocations: S
                        })
                    }
                })
            }
        },
        986214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            });
            var n = i("645999"),
                l = i("42203"),
                a = i("305961"),
                u = i("957255"),
                r = i("697218"),
                d = i("659500"),
                o = i("427953"),
                s = i("831387"),
                c = i("898065"),
                f = i("550766"),
                _ = i("544805"),
                E = i("370507"),
                I = i("943349"),
                A = i("420444"),
                T = i("541473"),
                C = i("407908"),
                v = i("578708"),
                S = i("702173"),
                N = i("954016"),
                p = i("49111");

            function D(e) {
                let {
                    activityItem: t,
                    currentActivity: i,
                    locationObject: o,
                    channelId: s,
                    guildId: c,
                    embeddedActivitiesManager: f,
                    analyticsLocations: A
                } = e, T = a.default.getGuild(c), C = r.default.getCurrentUser();
                if (null == T && !(0, S.isPrivateChannelWithEnabledActivities)(s) || null == C || null == t) return Promise.resolve(!1);
                let {
                    application: v,
                    activity: N
                } = t;
                if (null == v) return Promise.resolve(!1);
                if (null == s) return d.ComponentDispatch.dispatch(p.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: v.id
                }), Promise.resolve(!1);
                let D = null != s ? (0, I.getEmbeddedActivityLaunchability)({
                    channelId: s,
                    ChannelStore: l.default,
                    GuildStore: a.default,
                    PermissionStore: u.default
                }) : I.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (D !== I.EmbeddedActivityLaunchability.CAN_LAUNCH) return D === I.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION && (0, n.showActivitiesInvalidPermissionsAlert)(), Promise.resolve(!1);
                let y = function() {
                    let {
                        bypassChangeVcModal: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }, t = N.requires_age_gate && null == C.nsfwAllowed;
                    if (t) return new Promise(t => {
                        (0, _.confirmActivityAgeGate)({
                            application: v,
                            onAgree: () => t(h({
                                channelId: s,
                                guildId: null == T ? void 0 : T.id,
                                locationObject: o,
                                application: v,
                                analyticsLocations: A,
                                bypassChangeVcModal: e
                            })),
                            onDisagree: () => t(!1)
                        })
                    });
                    return h({
                        channelId: s,
                        guildId: null == T ? void 0 : T.id,
                        locationObject: o,
                        application: v,
                        analyticsLocations: A,
                        bypassChangeVcModal: e
                    })
                };
                return null != i ? new Promise(e => {
                    (0, E.default)(i, v, () => {
                        f.leaveActivity({
                            channelId: s,
                            applicationId: i.id
                        }), e(y({
                            bypassChangeVcModal: !0
                        }))
                    }, () => e(!1))
                }) : y()
            }
            async function h(e) {
                let {
                    channelId: t,
                    guildId: i,
                    locationObject: n,
                    application: a,
                    analyticsLocations: u,
                    bypassChangeVcModal: d
                } = e, _ = r.default.getCurrentUser(), E = l.default.getChannel(t);
                if (null == _ || null == E) return !1;
                let I = o.ActivitiesInTextExperiment.getCurrentConfig({
                        location: "handleStartEmbeddedActivity"
                    }, {
                        autoTrackExposure: !1
                    }).isActivitiesInTextEnabled,
                    S = (0, A.default)(t),
                    D = N.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(E.type);
                if (S) {
                    let e = await (0, T.default)({
                        channelId: t,
                        bypassChangeModal: d
                    });
                    if (!e) return !1
                } else if (!I || !D) return !1;
                return f.startEmbeddedActivity(t, {
                    application_id: a.id,
                    name: a.name
                }, u), (0, v.default)(i, t), (0, C.default)({
                    type: p.AnalyticsGameOpenTypes.LAUNCH,
                    userId: _.id,
                    applicationId: a.id,
                    locationObject: n,
                    analyticsLocations: u
                }), s.markActivityUsed(a.id), c.markActivityUsed(a.id), !0
            }
        },
        126939: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsActivitiesEnabledForCurrentPlatform: function() {
                    return a
                },
                getIsActivitiesEnabledForCurrentPlatform: function() {
                    return u
                }
            });
            var n = i("807403");

            function l() {
                return !n.isMobile && !n.isTablet && !0
            }

            function a() {
                return l()
            }

            function u() {
                return l()
            }
        },
        612696: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("773336"),
                l = i("126939"),
                a = i("501260"),
                u = i("871388"),
                r = i("49111");

            function d(e) {
                let {
                    user: t,
                    activity: i,
                    application: d,
                    channelId: o,
                    currentUser: s,
                    isEmbedded: c,
                    ChannelStore: f,
                    GuildStore: _,
                    GuildMemberCountStore: E,
                    RelationshipStore: I,
                    SelectedChannelStore: A,
                    VoiceStateStore: T,
                    PermissionStore: C
                } = e, v = (0, l.getIsActivitiesEnabledForCurrentPlatform)();
                if (null == t) return !1;
                if (c) return (0, a.default)({
                    userId: t.id,
                    activity: i,
                    channelId: o,
                    currentUser: s,
                    application: d,
                    isActivitiesEnabledForCurrentPlatform: v,
                    ChannelStore: f,
                    VoiceStateStore: T,
                    PermissionStore: C,
                    GuildStore: _
                }) === a.EmbeddedActivityJoinability.CAN_JOIN;
                if (!(0, n.isDesktop)()) return !1;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(t.id)) return !0;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    let e = f.getChannel(A.getVoiceChannelId());
                    if (null == e || !T.isInChannel(e.id, t.id)) return !1;
                    switch (e.type) {
                        case r.ChannelTypes.DM:
                        case r.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    let i = _.getGuild(e.getGuildId());
                    if (null == i || i.hasFeature(r.GuildFeatures.COMMUNITY)) return !1;
                    let n = E.getMemberCount(i.id);
                    return null != n && n < 100
                }
                return !1
            }
        },
        501260: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                EmbeddedActivityJoinability: function() {
                    return l
                },
                default: function() {
                    return I
                },
                useEmbeddedActivityJoinability: function() {
                    return A
                }
            });
            var n, l, a = i("498225"),
                u = i("42203"),
                r = i("305961"),
                d = i("957255"),
                o = i("697218"),
                s = i("800762"),
                c = i("404008"),
                f = i("126939"),
                _ = i("803353"),
                E = i("49111");

            function I(e) {
                var t, i, n;
                let {
                    userId: a,
                    activity: u,
                    application: r,
                    channelId: d,
                    currentUser: o,
                    isActivitiesEnabledForCurrentPlatform: s,
                    ChannelStore: f,
                    VoiceStateStore: I,
                    PermissionStore: A,
                    GuildStore: T
                } = e;
                if (null == a) return l.NO_USER;
                if ((null == o ? void 0 : o.nsfwAllowed) === !1 && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return l.ACTIVITY_AGE_GATED;
                if (!s) return l.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                if (!(0, _.default)(null == r ? void 0 : null === (i = r.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return l.ACTIVITY_NOT_SUPPORTED_ON_OS;
                let C = null != d ? d : null === (n = I.getVoiceStateForSession(a, null == u ? void 0 : u.session_id)) || void 0 === n ? void 0 : n.channelId;
                if (null == C) return l.NO_CHANNEL;
                let v = f.getChannel(d);
                if (null == v) return l.NO_CHANNEL;
                let S = v.getGuildId();
                if (!v.isPrivate()) {
                    if (null == S) return l.NO_GUILD;
                    let e = T.getGuild(S);
                    if ((null == e ? void 0 : e.afkChannelId) === v.id) return l.IS_AFK_CHANNEL;
                    let t = I.getCurrentClientVoiceChannelId(v.getGuildId()) === C,
                        i = (0, c.isChannelFull)(v, I, T),
                        n = A.can(E.Permissions.CONNECT, v),
                        a = A.can(E.Permissions.USE_EMBEDDED_ACTIVITIES, v);
                    if (!a) return l.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if (!t) {
                        if (i) return l.CHANNEL_FULL;
                        if (!n) return l.NO_CHANNEL_CONNECT_PERMISSION
                    }
                }
                return l.CAN_JOIN
            }

            function A(e) {
                let {
                    userId: t,
                    activity: i,
                    channelId: n,
                    application: l
                } = e, c = (0, f.useIsActivitiesEnabledForCurrentPlatform)(), _ = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()), E = (0, a.useStateFromStores)([u.default, s.default, d.default, r.default], () => I({
                    userId: t,
                    activity: i,
                    application: l,
                    channelId: n,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: c,
                    ChannelStore: u.default,
                    VoiceStateStore: s.default,
                    PermissionStore: d.default,
                    GuildStore: r.default
                }), [i, l, n, _, c, t]);
                return E
            }(n = l || (l = {}))[n.CAN_JOIN = 0] = "CAN_JOIN", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.CHANNEL_FULL = 3] = "CHANNEL_FULL", n[n.NO_CHANNEL = 4] = "NO_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", n[n.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", n[n.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", n[n.NO_USER = 8] = "NO_USER", n[n.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", n[n.NO_GUILD = 10] = "NO_GUILD"
        },
        943349: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                EmbeddedActivityLaunchability: function() {
                    return l
                },
                getEmbeddedActivityLaunchability: function() {
                    return f
                },
                useEmbeddedActivityLaunchability: function() {
                    return _
                },
                getEmbeddedActivityLaunchabilityLabel: function() {
                    return E
                }
            });
            var n, l, a = i("498225"),
                u = i("42203"),
                r = i("305961"),
                d = i("957255"),
                o = i("702173"),
                s = i("49111"),
                c = i("782340");

            function f(e) {
                let {
                    channelId: t,
                    ChannelStore: i,
                    GuildStore: n,
                    PermissionStore: a
                } = e, u = i.getChannel(t);
                if (null == u) return l.NO_CHANNEL;
                if (!(0, o.isPrivateChannelWithEnabledActivities)(u.id)) {
                    let e = u.getGuildId();
                    if (null == e) return l.NO_GUILD;
                    let t = n.getGuild(e);
                    if ((null == t ? void 0 : t.afkChannelId) === u.id) return l.IS_AFK_CHANNEL;
                    let i = a.can(s.Permissions.CONNECT, u);
                    if (!i) return l.NO_CHANNEL_CONNECT_PERMISSION;
                    let r = a.can(s.Permissions.USE_EMBEDDED_ACTIVITIES, u);
                    if (!r) return l.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                }
                return l.CAN_LAUNCH
            }

            function _(e) {
                let t = (0, a.useStateFromStores)([u.default, r.default, d.default], () => f({
                    channelId: e,
                    ChannelStore: u.default,
                    GuildStore: r.default,
                    PermissionStore: d.default
                }), [e]);
                return t
            }

            function E(e) {
                switch (e) {
                    case l.CAN_LAUNCH:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case l.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL"
        },
        287585: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("954016");

            function l(e) {
                if (null != e && null != e.url && n.validStreamURL.test(e.url)) return e.url
            }
        },
        871388: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("49111");

            function l(e, t) {
                return t !== n.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        15264: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("673044");

            function l(e) {
                return null == e.premium_tier_requirement || (0, n.default)(e)
            }
        },
        673044: function(e, t, i) {
            "use strict";

            function n(e) {
                let t = Date.now(),
                    i = null != e.free_period_starts_at ? Date.parse(e.free_period_starts_at) : null,
                    n = null != e.free_period_ends_at ? Date.parse(e.free_period_ends_at) : null;
                return (null != i || null != n) && (null == i && null != n ? t < n : null != i && null == n ? t >= i : null != i && null != n && t >= i && t < n)
            }
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            })
        },
        803353: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("798609"),
                l = i("773336");

            function a(e) {
                var t;
                let i;
                return i = (0, l.isIOS)() ? n.EmbeddedActivitySupportedPlatforms.IOS : (0, l.isAndroid)() ? n.EmbeddedActivitySupportedPlatforms.ANDROID : n.EmbeddedActivitySupportedPlatforms.WEB, null !== (t = null == e ? void 0 : e.includes(i)) && void 0 !== t && t
            }
        },
        152311: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("871388"),
                l = i("49111");

            function a(e) {
                return (0, n.default)(e, l.ActivityFlags.EMBEDDED)
            }
        },
        541473: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("203288"),
                l = i("242740"),
                a = i("848848"),
                u = i("42203"),
                r = i("957255"),
                d = i("18494"),
                o = i("800762");
            class s extends Error {}
            async function c(e) {
                let {
                    channelId: t,
                    timeoutMs: i = 1e4,
                    bypassChangeModal: c = !1
                } = e, f = u.default.getChannel(t);
                if (null == f) return !1;
                let _ = await l.default.handleVoiceConnect({
                    bypassGuildIdCheck: !0,
                    bypassChangeModal: c,
                    channel: f,
                    connected: o.default.isInChannel(t),
                    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(t, u.default, n.default, r.default).needSubscriptionToAccess
                });
                if (!_) return !1;
                let E = new Promise((e, n) => {
                    let l = setTimeout(() => {
                        n(new s("Joining voice channel has timed out."))
                    }, i);
                    d.default.addConditionalChangeListener(() => {
                        let i = d.default.getVoiceChannelId();
                        return i !== t || (clearTimeout(l), e(), !1)
                    })
                });
                try {
                    await E
                } catch (e) {
                    if (e instanceof s) return !1;
                    throw e
                }
                return !0
            }
        },
        407908: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("599110"),
                l = i("49111");

            function a(e) {
                let {
                    type: t,
                    source: i,
                    userId: a,
                    applicationId: u,
                    partyId: r,
                    messageId: d,
                    locationObject: o,
                    analyticsLocations: s
                } = e;
                n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
                    type: t,
                    source: i,
                    application_id: u,
                    party_id: null != r ? r : void 0,
                    other_user_id: a,
                    message_id: d,
                    location: o,
                    location_stack: s
                })
            }
        },
        578708: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("292687"),
                l = i("974889"),
                a = i("393414"),
                u = i("49111");

            function r(e, t) {
                let i = n.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                i ? (0, l.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(u.Routes.CHANNEL(e, t))
            }
        },
        577261: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("498225"),
                l = i("191225");

            function a() {
                return (0, n.useStateFromStores)([l.default], () => {
                    var e;
                    let t = l.default.getConnectedActivityChannelId();
                    if (null != t) return null !== (e = l.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
                })
            }
        },
        698372: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("442939"),
                l = i("577261");

            function a() {
                let e = (0, l.default)(),
                    [t] = (0, n.default)(null == e ? [] : [e.application_id]);
                return null != t ? t : void 0
            }
        },
        702173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                },
                isPrivateChannelWithEnabledActivities: function() {
                    return r
                }
            });
            var n = i("744196"),
                l = i("42203"),
                a = i("447789");

            function u(e) {
                var t;
                let i = (0, a.useIsActivitiesInGdmEnabled)(),
                    u = (0, n.default)([l.default], () => l.default.getChannel(e)),
                    r = null !== (t = null == u ? void 0 : u.isPrivate()) && void 0 !== t && t;
                return i && r
            }

            function r(e) {
                var t;
                if (null == e) return !1;
                let i = l.default.getChannel(e),
                    n = null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t,
                    {
                        isActivitiesInGdmEnabled: u
                    } = a.ActivitiesInGdmExperiment.getCurrentConfig({
                        location: "f31c95_1"
                    }, {
                        autoTrackExposure: !1
                    });
                return u && n
            }
        },
        141962: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("913144"),
                u = i("135230"),
                r = i("550766"),
                d = i("648456"),
                o = i("782340");
            class s extends d.default {
                showErrorModal(e) {
                    let {
                        code: t,
                        message: i
                    } = e;
                    (0, l.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
                        title: o.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                            code: t
                        }),
                        body: i,
                        ...e
                    }))
                }
                showLaunchErrorModal(e) {
                    (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
                        title: o.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: e,
                        ...t
                    }))
                }
                leaveActivity(e) {
                    let {
                        channelId: t,
                        applicationId: i
                    } = e;
                    a.default.wait(() => (0, r.stopEmbeddedActivity)({
                        channelId: t,
                        applicationId: i
                    }))
                }
                constructor(...e) {
                    super(...e), this.handleRPCDisconnect = e => {
                        let {
                            reason: t,
                            application: i
                        } = e;
                        this.superHandleRPCDisconnect({
                            reason: t,
                            application: i
                        })
                    }
                }
            }
            var c = new s
        },
        442939: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("773670"),
                l = i("498225"),
                a = i("708001"),
                u = i("823411"),
                r = i("546463");

            function d(e, t) {
                return e.length === t.length && !e.some((e, i) => !(0, a.default)(t[i], e))
            }

            function o(e) {
                n.useEffect(() => {
                    u.default.fetchApplications(e, !1)
                }, [e]);
                let t = (0, l.useStateFromStores)([r.default], () => e.map(e => ({
                        id: e,
                        application: r.default.getGame(e),
                        fetching: r.default.isFetching(e),
                        failed: r.default.didFetchingFail(e)
                    })), [e], d),
                    i = n.useMemo(() => t.map(e => {
                        let {
                            application: t
                        } = e;
                        return t
                    }), [t]);
                return i
            }
        },
        242740: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("987317"),
                u = i("76393"),
                r = i("393414"),
                d = i("755624"),
                o = i("263024"),
                s = i("271938"),
                c = i("18494"),
                f = i("800762"),
                _ = i("792367"),
                E = i("49111"),
                I = {
                    async handleVoiceConnect(e) {
                        let {
                            channel: t,
                            connected: I,
                            needSubscriptionToAccess: A,
                            locked: T = !1,
                            routeDirectlyToChannel: C = !1,
                            bypassChangeModal: v,
                            bypassGuildIdCheck: S = !1
                        } = e;
                        t.isThread() && (await o.default.unarchiveThreadIfNecessary(t.id), !d.default.hasJoined(t.id) && await o.default.joinThread(t, "Join Voice"));
                        let N = u.default.getRemoteSessionId(),
                            p = f.default.getVoiceStateForSession(s.default.getId(), N),
                            D = (null == p ? void 0 : p.channelId) === t.id,
                            h = D || c.default.getChannelId() === f.default.getCurrentClientVoiceChannelId(t.guild_id);
                        return !v && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(t) ? new Promise(e => {
                            (0, l.openModalLazy)(async () => {
                                let {
                                    default: l
                                } = await i.el("371895").then(i.bind(i, "371895"));
                                return i => (0, n.jsx)(l, {
                                    channel: t,
                                    onConfirm: () => e(this.handleVoiceConnect({
                                        channel: t,
                                        connected: I,
                                        needSubscriptionToAccess: A,
                                        routeDirectlyToChannel: C,
                                        locked: T,
                                        bypassChangeModal: !0
                                    })),
                                    ...i
                                })
                            })
                        }) : (!T && !I && a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (I || h || A || C) && ! function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = e.getGuildId();
                            if (null == i && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, r.transitionTo)(E.Routes.CHANNEL(i, e.id))
                        }(t, S), !0)
                    }
                }
        },
        974889: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("773336"),
                l = i("50885"),
                a = i("870346");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = a.default.getWindow(e);
                null != i && !i.closed && (n.isPlatformEmbedded ? l.default.focus(e, t) : i.focus())
            }
        },
        884385: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                isSpotifyPlayable: function() {
                    return s
                },
                ensureSpotifyPlayable: function() {
                    return c
                },
                isSpotifyPremium: function() {
                    return f
                },
                ensureSpotifyPremium: function() {
                    return _
                }
            });
            var n = i("376556"),
                l = i("568307"),
                a = i("613691"),
                u = i("155815"),
                r = i("662285"),
                d = i("450484"),
                o = i("49111");

            function s(e) {
                return null != e.getActiveSocketAndDevice() || u.default.isProtocolRegistered()
            }

            function c() {
                let e = r.default.getActiveSocketAndDevice();
                if (null != e) return Promise.resolve(e);
                if (!u.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                let t = r.default.getPlayableComputerDevices();
                if (l.default.isObservedAppRunning(n.default.get(o.PlatformTypes.SPOTIFY).name) && t.length > 0) {
                    let {
                        socket: e,
                        device: i
                    } = t[0];
                    return (0, a.setActiveDevice)(e.accountId, i.id), Promise.resolve({
                        socket: e,
                        device: i
                    })
                }
                return new Promise((e, i) => {
                    let n = setTimeout(() => {
                            r.default.removeChangeListener(l), i(Error("timeout launching spotify"))
                        }, 3e4),
                        l = () => {
                            let i = r.default.getPlayableComputerDevices();
                            for (let {
                                    socket: u,
                                    device: d
                                }
                                of i) null == t.find(e => e.device.id === d.id) && (clearTimeout(n), r.default.removeChangeListener(l), setImmediate(() => {
                                (0, a.setActiveDevice)(u.accountId, d.id), e({
                                    socket: u,
                                    device: d
                                })
                            }))
                        };
                    r.default.addChangeListener(l), window.open("".concat(d.SPOTIFY_APP_PROTOCOL, ":"))
                })
            }

            function f() {
                let e = r.default.getActiveSocketAndDevice();
                if (null == e) return null;
                let {
                    socket: t
                } = e;
                return t.isPremium
            }

            function _() {
                let e = r.default.getActiveSocketAndDevice();
                if (null == e) return Promise.reject(Error("no active profile"));
                let {
                    socket: t
                } = e;
                return t.isPremium ? Promise.resolve() : (0, a.getProfile)(t.accountId, t.accessToken).then(() => {
                    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
                })
            }
        },
        170108: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("599110"),
                l = i("884385"),
                a = i("450484"),
                u = i("49111");
            let r = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

            function d(e, t, i, a) {
                n.default.track(u.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
                    type: e,
                    source: a,
                    is_premium: (0, l.isSpotifyPremium)(),
                    party_id: r.includes(e) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
                    other_user_id: t.id
                })
            }
        },
        922174: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("926994"),
                l = i("49111");

            function a(e) {
                return !!e || ((0, n.default)(l.PlatformTypes.SPOTIFY, "Spotify Button"), !1)
            }
        },
        782911: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("450484"),
                l = i("782340");

            function a(e, t) {
                switch (t) {
                    case n.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        return e.hasSpotifyAccount ? l.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        }) : l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                    case n.SpotifyActionTypes.EMBED_SYNC:
                        if (!e.hasSpotifyAccount) return l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                        if (e.syncingWithUser || e.syncingWithParty) return l.default.Messages.INVITE_EMBED_JOINED;
                        return l.default.Messages.JOIN;
                    case n.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                    default:
                        return
                }
            }
        },
        629414: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("158998"),
                l = i("450484"),
                a = i("782340");

            function u(e, t, i) {
                switch (t) {
                    case l.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                        if (e.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    case l.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != i ? i : n.default.getName(e.user)
                        });
                    case l.SpotifyActionTypes.EMBED_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    default:
                        return
                }
            }
        },
        53887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("884385");

            function l(e, t, i, l) {
                var a, u, r;
                let d = e.hasConnectedAccount(),
                    o = (0, n.isSpotifyPlayable)(e),
                    s = e.getTrack(),
                    c = e.getSyncingWith(),
                    f = e.getActivity(),
                    _ = null !== (r = null !== (u = null == s ? void 0 : s.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : e.getLastPlayedTrackId();
                return {
                    user: i,
                    activity: l,
                    hasSpotifyAccount: d,
                    canPlaySpotify: o,
                    notPlayable: d && !o,
                    syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
                    syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
                    isCurrentUser: i.id === t.getId(),
                    currentUserTrackId: _,
                    playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
                }
            }
        },
        486150: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("546422"),
                u = i("884385"),
                r = i("170108"),
                d = i("922174");
            async function o(e, t, o) {
                let {
                    hasSpotifyAccount: s,
                    activity: c,
                    user: f
                } = e;
                (0, d.default)(s) && null != c && null != c.sync_id && (await (0, u.ensureSpotifyPlayable)(), await (0, u.ensureSpotifyPremium)().catch(e => ((0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                }), Promise.reject(e))), a.sync(c, f.id), (0, r.default)(t, f, c, o))
            }
        },
        555759: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("546422"),
                l = i("884385"),
                a = i("170108"),
                u = i("922174");
            async function r(e, t, i) {
                let {
                    hasSpotifyAccount: r,
                    activity: d,
                    user: o
                } = e;
                (0, u.default)(r) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, o.id), (0, a.default)(t, o, d, i))
            }
        },
        590456: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UserProfileSections: function() {
                    return a
                },
                UserProfileTypes: function() {
                    return u
                },
                getBadgeAsset: function() {
                    return d
                }
            });
            var n, l, a, u, r = i("49111");

            function d(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: i
                } = window.GLOBAL_ENV;
                return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(r.Endpoints.BADGE_ICON(e))
            }(n = a || (a = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = u || (u = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"
        },
        349649: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("773670"),
                l = i("498225"),
                a = i("990746"),
                u = i("913144"),
                r = i("555179"),
                d = i("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getNote(e));
                return n.useEffect(() => {
                    null == t && s(e)
                }, [t, e]), null != t ? t : {
                    loading: !0,
                    note: null
                }
            }
            async function s(e) {
                u.default.dispatch({
                    type: "USER_NOTE_LOAD_START",
                    userId: e
                });
                try {
                    let {
                        body: t
                    } = await a.default.get({
                        url: d.Endpoints.NOTE(e),
                        oldFormErrors: !0
                    });
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e,
                        note: t
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e
                    })
                }
            }
        },
        401642: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                openUserProfileModal: function() {
                    return d
                },
                closeUserProfileModal: function() {
                    return o
                }
            });
            var n = i("913144"),
                l = i("327037"),
                a = i("697218"),
                u = i("506885"),
                r = i("49111");

            function d(e) {
                let {
                    userId: t,
                    section: i,
                    guildId: d = r.ME,
                    channelId: o,
                    friendToken: s,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, _ = a.default.getUser(t), E = d !== r.ME ? d : void 0;
                if (null == _) return (0, l.fetchProfile)(t, {
                    friendToken: s,
                    guildId: E
                }).then(() => {
                    n.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: i,
                        guildId: d,
                        channelId: o,
                        friendToken: s,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, u.default)(t, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: s,
                    guildId: E
                }), n.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: i,
                    guildId: d,
                    channelId: o,
                    friendToken: s,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function o() {
                n.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        645999: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                showActivitiesInvalidPermissionsAlert: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");
            let a = () => {
                n.default.show({
                    title: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
                    body: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
                    hideActionSheet: !1
                })
            }
        },
        555179: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("498225"),
                l = i("913144");
            let a = {};

            function u() {
                a = {}
            }
            class r extends n.default.Store {
                getNote(e) {
                    return a[e]
                }
            }
            r.displayName = "NoteStore";
            var d = new r(l.default, {
                CONNECTION_OPEN: u,
                OVERLAY_INITIALIZE: u,
                USER_NOTE_UPDATE: function(e) {
                    a[e.id] = {
                        loading: !1,
                        note: e.note
                    }
                },
                USER_NOTE_LOAD_START: function(e) {
                    let {
                        userId: t
                    } = e;
                    a[t] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(e) {
                    let {
                        userId: t,
                        note: i
                    } = e;
                    a[t] = {
                        loading: !1,
                        note: null == i ? void 0 : i.note
                    }
                }
            })
        },
        953998: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("498225"),
                l = i("638800"),
                a = i("913144"),
                u = i("49111");
            let r = {},
                d = {};

            function o(e, t, i) {
                var n;
                let {
                    applicationId: o
                } = i, s = null !== (n = r[o]) && void 0 !== n ? n : {};
                if (s[t] = e, r[o] = s, !__OVERLAY__ && e === u.ActivityActionStates.FAILED) {
                    null != d[o] && d[o].stop();
                    let e = new l.Timeout;
                    e.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: o,
                        activityType: t
                    })), d[o] = e
                }
            }

            function s(e) {
                return o(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, e)
            }
            class c extends n.default.Store {
                getState(e, t) {
                    let i = r[e];
                    return null == i ? void 0 : i[t]
                }
                getStates() {
                    return r
                }
            }
            c.displayName = "ActivityLauncherStore";
            var f = new c(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        activityLauncherStates: t
                    } = e;
                    r = {
                        ...t
                    }
                },
                ACTIVITY_JOIN_LOADING: e => o(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN_FAILED: e => o(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN: s,
                EMBEDDED_ACTIVITY_CLOSE: s,
                ACTIVITY_LAUNCH_FAIL: function(e) {
                    let {
                        applicationId: t,
                        activityType: i
                    } = e, n = r[t];
                    if (null == n || n[i] !== u.ActivityActionStates.FAILED) return !1;
                    delete n[i]
                }
            })
        }
    }
]);