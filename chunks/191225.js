            "use strict";
            let i;
            n.r(t), n.d(t, {
                NO_ACTIVITIES: function() {
                    return m
                },
                default: function() {
                    return H
                }
            }), n("222007"), n("424973"), n("581081");
            var a = n("446674"),
                l = n("913144"),
                s = n("798609"),
                r = n("271938"),
                u = n("42203"),
                o = n("957255"),
                d = n("18494"),
                c = n("697218"),
                _ = n("773336"),
                E = n("711562"),
                f = n("334368"),
                h = n("420444"),
                p = n("272505"),
                T = n("49111");
            let C = {
                    seenActivities: new Set,
                    seenNewActivities: {},
                    seenUpdatedActivities: {},
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                m = [],
                S = new Map,
                I = new Map,
                g = new Map,
                A = !1,
                N = new Map,
                O = new Map,
                R = new Map,
                y = new Map,
                v = new Map,
                M = new Map,
                D = new Map;
            let L = p.ActivityPanelModes.ACTION_BAR,
                U = p.FocusedActivityLayouts.NO_CHAT;

            function P(e) {
                return null != e ? e : "0"
            }

            function b(e) {
                var t, n;
                let {
                    guildId: i,
                    channelId: a,
                    applicationId: s,
                    instanceId: d,
                    userIds: c,
                    activitySessionId: _
                } = e, f = (0, E.default)(s);
                if (null == f) return;
                let h = u.default.getBasicChannel(a),
                    p = null != h && o.default.canBasicChannel(T.BasicPermissions.CONNECT, h) || (null == h ? void 0 : h.type) === T.ChannelTypes.DM || (null == h ? void 0 : h.type) === T.ChannelTypes.GROUP_DM;
                if (function(e, t) {
                        var n;
                        C.usersHavePlayedByApp.set(e, new Set([...null !== (n = C.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
                    }(s, c), !p) return;
                let m = {
                        activitySessionId: null != _ ? _ : d,
                        applicationId: s,
                        channelId: a,
                        guildId: i,
                        instanceId: d,
                        url: f,
                        userIds: new Set(c)
                    },
                    A = r.default.getId(),
                    N = S.get(m.applicationId);
                c.some(e => e === A) && null != N && (S.set(N.applicationId, {
                    ...N,
                    ...m
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                    channelId: a,
                    instanceId: d
                }));
                let O = null !== (t = g.get(a)) && void 0 !== t ? t : [],
                    R = O.filter(e => e.applicationId !== s),
                    y = P(i),
                    v = null !== (n = I.get(y)) && void 0 !== n ? n : [],
                    M = v.filter(e => !(e.applicationId === s && e.channelId === a));
                0 !== c.length && (R.push(m), M.push(m)), g.set(a, R), I.set(y, M)
            }

            function G(e) {
                let t = e.embedded_activities;
                t.forEach(t => {
                    let {
                        channel_id: n,
                        embedded_activity: i,
                        connections: a
                    } = t;
                    b({
                        guildId: e.id,
                        channelId: n,
                        applicationId: i.application_id,
                        instanceId: i.activity_id,
                        userIds: a.map(e => e.user_id)
                    })
                })
            }

            function k() {
                A = !1
            }

            function F(e, t) {
                return "".concat(e, ":").concat(t)
            }
            class w extends a.default.PersistedStore {
                initialize(e) {
                    var t;
                    let n = new Map;
                    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
                        if (Array.isArray(e)) {
                            let [t, i] = e;
                            "string" == typeof t && Array.isArray(i) && n.set(t, new Set(i))
                        }
                    }));
                    let i = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []);
                    null != e && (C = {
                        ...e,
                        seenActivities: i,
                        usersHavePlayedByApp: n
                    })
                }
                getState() {
                    return C
                }
                getSelfEmbeddedActivityForChannel(e) {
                    var t;
                    return null !== (t = Array.from(S.values()).find(t => {
                        let {
                            channelId: n
                        } = t;
                        return e === n
                    })) && void 0 !== t ? t : null
                }
                getSelfEmbeddedActivities() {
                    return S
                }
                getEmbeddedActivitiesForGuild(e) {
                    var t;
                    return null !== (t = I.get(e)) && void 0 !== t ? t : m
                }
                getEmbeddedActivitiesForChannel(e) {
                    var t;
                    return null !== (t = g.get(e)) && void 0 !== t ? t : m
                }
                getEmbeddedActivitiesByChannel() {
                    return g
                }
                getEmbeddedActivityDurationMs(e, t) {
                    let n = D.get(F(e, t));
                    return null == n ? null : Date.now() - n
                }
                isLaunchingActivity() {
                    return A
                }
                getShelfActivities(e) {
                    var t;
                    let n = P(e);
                    return null !== (t = N.get(n)) && void 0 !== t ? t : []
                }
                getShelfFetchStatus(e) {
                    let t = P(e);
                    return O.get(t)
                }
                shouldFetchShelf(e) {
                    var t, n;
                    let i = P(e),
                        a = null !== (t = O.get(i)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        l = Date.now(),
                        s = l - (null !== (n = null == a ? void 0 : a.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
                    return !(null == a ? void 0 : a.isFetching) && s
                }
                getOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = R.get(e)) && void 0 !== t ? t : null
                }
                getPipOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = y.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                }
                getGridOrientationLockStateForApp(e) {
                    var t, n;
                    return null !== (n = null !== (t = v.get(e)) && void 0 !== t ? t : y.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
                }
                getLayoutModeForApp(e) {
                    return M.get(e)
                }
                getUsersHavePlayedByApp(e) {
                    var t;
                    return [...null !== (t = C.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
                }
                getConnectedActivityChannelId() {
                    return i
                }
                getActivityPanelMode() {
                    return L
                }
                getFocusedLayout() {
                    return U
                }
                getCurrentEmbeddedActivity() {
                    var e;
                    let t = this.getConnectedActivityChannelId();
                    if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
                }
            }
            w.displayName = "EmbeddedActivitiesStore", w.persistKey = "EmbeddedActivities", w.migrations = [e => ({
                ...e,
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }), e => (delete e.seenFeaturedActivities, {
                ...e,
                seenActivities: []
            }), e => ({
                ...e
            }), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
                ...e
            }), e => {
                var t;
                let n = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
                return {
                    ...e,
                    seenActivities: n,
                    seenNewActivities: {},
                    seenUpdatedActivities: {}
                }
            }];
            let V = new w(l.default, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    let {
                        applicationId: t,
                        layoutMode: n
                    } = e;
                    M.set(t, n)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        guilds: t
                    } = e;
                    g.clear(), I.clear(), t.forEach(e => G(e))
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    G(t)
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t,
                        embeddedActivities: n
                    } = e;
                    ! function(e, t) {
                        t.forEach(e => {
                            let {
                                channel_id: t,
                                embedded_activity: n,
                                connections: i
                            } = e;
                            b({
                                guildId: null,
                                channelId: t,
                                applicationId: n.application_id,
                                instanceId: n.activity_id,
                                userIds: i.map(e => e.user_id)
                            })
                        })
                    }(0, n)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    g.set(t.id, []);
                    let n = t.guild_id;
                    if (null != n) {
                        var i;
                        let e = P(n),
                            a = null !== (i = I.get(e)) && void 0 !== i ? i : [],
                            l = a.filter(e => e.channelId !== t.id);
                        I.set(e, l)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function() {
                    A = !0
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: k,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: k,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, n;
                    let {
                        channelId: a,
                        applicationId: l
                    } = e, s = (0, E.default)(l), o = r.default.getSessionId();
                    if (null == s || null == o || (null === (t = S.get(l)) || void 0 === t ? void 0 : t.channelId) === a) return !1;
                    let _ = u.default.getChannel(a),
                        f = null == _ ? void 0 : _.getGuildId(),
                        T = c.default.getCurrentUser();
                    if (null == f && !(null !== (n = null == _ ? void 0 : _.isPrivate()) && void 0 !== n && n) || null == T) return !1;
                    i = a, S.set(l, {
                        guildId: f,
                        channelId: a,
                        applicationId: l,
                        url: s,
                        userIds: new Set([T.id]),
                        connectedSince: Date.now()
                    }), L = i !== d.default.getChannelId() || (0, h.default)(a) ? p.ActivityPanelModes.PIP : p.ActivityPanelModes.PANEL, D.set(F(a, l), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    let {
                        applicationId: t
                    } = e, n = S.get(t);
                    S.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        embeddedActivity: i,
                        connections: a
                    } = e;
                    b({
                        guildId: t,
                        channelId: n,
                        applicationId: i.application_id,
                        instanceId: i.activity_id,
                        userIds: a.map(e => e.user_id)
                    })
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
                    let {
                        activitySessionId: t,
                        applicationId: n,
                        channelId: i,
                        guildId: a,
                        instanceId: l,
                        userIds: s
                    } = e;
                    b({
                        guildId: a,
                        channelId: i,
                        applicationId: n,
                        instanceId: l,
                        userIds: s,
                        activitySessionId: t
                    })
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t;
                    let {
                        activity: n
                    } = e;
                    if (null == n) return !1;
                    let i = S.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
                    if (null == i) return !1;
                    S.set(i.applicationId, {
                        ...i
                    })
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    let {
                        applicationId: t,
                        config: n
                    } = e, i = S.get(t);
                    null != i && S.set(i.applicationId, {
                        ...i,
                        config: n
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    let {
                        guildId: t
                    } = e, n = P(t), i = O.get(n);
                    O.set(n, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        activities: n
                    } = e, i = P(t);
                    N.set(i, n);
                    let a = Date.now();
                    ! function(e) {
                        let {
                            activities: t,
                            now: n
                        } = e;
                        t.forEach(e => {
                            let t = e.application_id,
                                i = e.client_platform_config[(0, f.default)((0, _.getOS)())];
                            if (!C.seenActivities.has(t) && (C.shouldShowNewActivityIndicator = !0, C.seenActivities.add(t)), null == i.label_until) return;
                            let a = new Date(i.label_until).getTime();
                            if (a < n) return;
                            let l = C.seenNewActivities[t],
                                r = Object.hasOwn(C.seenNewActivities, t),
                                u = new Date(l).getTime() < a;
                            i.label_type === s.EmbeddedActivityLabelTypes.NEW && (!r || u) && (C.shouldShowNewActivityIndicator = !0, C.seenNewActivities[t] = i.label_until);
                            let o = C.seenUpdatedActivities[t],
                                d = Object.hasOwn(C.seenUpdatedActivities, t),
                                c = new Date(o).getTime() < a;
                            i.label_type === s.EmbeddedActivityLabelTypes.UPDATED && (!d || c) && (C.shouldShowNewActivityIndicator = !0, C.seenUpdatedActivities[t] = i.label_until)
                        })
                    }({
                        activities: n,
                        now: a
                    }), O.set(i, {
                        isFetching: !1,
                        lastFetchTimestampMs: a
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = P(t), i = O.get(n);
                    O.set(n, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
                    C.shouldShowNewActivityIndicator = !1
                },
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    let {
                        applicationId: t,
                        lockState: n,
                        pictureInPictureLockState: i,
                        gridLockState: a
                    } = e;
                    null == n ? R.delete(t) : R.set(t, n), null === i ? y.delete(t) : void 0 !== i && y.set(t, i), null === a ? v.delete(t) : void 0 !== a && v.set(t, a)
                },
                EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
                    let {
                        activityPanelMode: t
                    } = e;
                    L = t
                },
                EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
                    let {
                        focusedActivityLayout: t
                    } = e;
                    U = t
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    i !== t && L === p.ActivityPanelModes.PANEL && (L = p.ActivityPanelModes.PIP)
                }
            });
            var H = V