            "use strict";
            let i;
            n.r(t), n.d(t, {
                NO_ACTIVITIES: function() {
                    return S
                },
                default: function() {
                    return B
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
                T = n("49111"),
                C = n("782340");
            let m = {
                    seenActivities: new Set,
                    seenNewActivities: {},
                    seenUpdatedActivities: {},
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                S = [],
                I = new Map,
                g = new Map,
                A = new Map,
                N = !1,
                O = new Map,
                R = new Map,
                y = new Map,
                v = new Map,
                M = new Map,
                D = new Map,
                L = new Map,
                U = new Set([]);
            let P = p.ActivityPanelModes.ACTION_BAR,
                b = p.FocusedActivityLayouts.NO_CHAT;

            function G(e) {
                return null != e ? e : "0"
            }

            function k(e, t, n, i) {
                var a, s, d;
                let c = (0, E.default)(n.application_id);
                if (null == c) return;
                let _ = u.default.getBasicChannel(t),
                    f = null != _ && o.default.canBasicChannel(T.BasicPermissions.CONNECT, _) || (null == _ ? void 0 : _.type) === T.ChannelTypes.DM || (null == _ ? void 0 : _.type) === T.ChannelTypes.GROUP_DM;
                if (function(e, t) {
                        var n;
                        m.usersHavePlayedByApp.set(e, new Set([...null !== (n = m.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t.map(e => e.user_id)]))
                    }(n.application_id, i), !f) return;
                let h = function(e, t, n, i, a) {
                        var l, s;
                        let r = new Map;
                        return t.forEach(e => {
                            r.set(e.user_id, e)
                        }), {
                            ...e,
                            name: null !== (l = e.name) && void 0 !== l ? l : C.default.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                            type: null !== (s = e.type) && void 0 !== s ? s : T.ActivityTypes.PLAYING,
                            url: n,
                            connections: r,
                            guildId: i,
                            channelId: a
                        }
                    }(n, i, c, e, t),
                    p = r.default.getId(),
                    S = I.get(h.application_id);
                i.some(e => e.user_id === p) && null != S && (I.set(S.application_id, {
                    ...S,
                    ...h
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
                    channelId: t,
                    instanceId: null !== (a = h.activity_id) && void 0 !== a ? a : null
                }));
                let N = null !== (s = A.get(t)) && void 0 !== s ? s : [],
                    O = N.filter(e => {
                        let {
                            application_id: t
                        } = e;
                        return t !== n.application_id
                    }),
                    R = G(e),
                    y = null !== (d = g.get(R)) && void 0 !== d ? d : [],
                    v = y.filter(e => !(e.application_id === n.application_id && e.channelId === t));
                0 !== i.length && (O.push(h), v.push(h)), A.set(t, O), g.set(R, v)
            }

            function F(e) {
                let t = e.embedded_activities;
                t.forEach(t => {
                    let {
                        channel_id: n,
                        embedded_activity: i,
                        connections: a
                    } = t;
                    k(e.id, n, i, a)
                })
            }

            function w() {
                N = !1
            }

            function V(e, t) {
                return "".concat(e, ":").concat(t)
            }
            class H extends a.default.PersistedStore {
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
                    null != e && (m = {
                        ...e,
                        seenActivities: i,
                        usersHavePlayedByApp: n
                    })
                }
                getState() {
                    return m
                }
                getSelfEmbeddedActivityForChannel(e) {
                    var t;
                    return null !== (t = Array.from(I.values()).find(t => {
                        let {
                            channelId: n
                        } = t;
                        return e === n
                    })) && void 0 !== t ? t : null
                }
                getSelfEmbeddedActivities() {
                    return I
                }
                getEmbeddedActivitiesForGuild(e) {
                    var t;
                    return null !== (t = g.get(e)) && void 0 !== t ? t : S
                }
                getEmbeddedActivitiesForChannel(e) {
                    var t;
                    return null !== (t = A.get(e)) && void 0 !== t ? t : S
                }
                getEmbeddedActivitiesByChannel() {
                    return A
                }
                getEmbeddedActivityDurationMs(e, t) {
                    let n = L.get(V(e, t));
                    return null == n ? null : Date.now() - n
                }
                isLaunchingActivity() {
                    return N
                }
                getShelfActivities(e) {
                    var t;
                    let n = G(e);
                    return null !== (t = O.get(n)) && void 0 !== t ? t : []
                }
                getShelfFetchStatus(e) {
                    let t = G(e);
                    return R.get(t)
                }
                shouldFetchShelf(e) {
                    var t, n;
                    let i = G(e),
                        a = null !== (t = R.get(i)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        l = Date.now(),
                        s = l - (null !== (n = null == a ? void 0 : a.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
                    return !(null == a ? void 0 : a.isFetching) && s
                }
                getOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = y.get(e)) && void 0 !== t ? t : null
                }
                getPipOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = v.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                }
                getGridOrientationLockStateForApp(e) {
                    var t, n;
                    return null !== (n = null !== (t = M.get(e)) && void 0 !== t ? t : v.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
                }
                getLayoutModeForApp(e) {
                    return D.get(e)
                }
                getDismissedEmbeddedActivityMessageKeys() {
                    return Array.from(U)
                }
                getUsersHavePlayedByApp(e) {
                    var t;
                    return [...null !== (t = m.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
                }
                getConnectedActivityChannelId() {
                    return i
                }
                getActivityPanelMode() {
                    return P
                }
                getFocusedLayout() {
                    return b
                }
                getCurrentEmbeddedActivity() {
                    var e;
                    let t = this.getConnectedActivityChannelId();
                    if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
                }
            }
            H.displayName = "EmbeddedActivitiesStore", H.persistKey = "EmbeddedActivities", H.migrations = [e => ({
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
            let x = new H(l.default, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    let {
                        applicationId: t,
                        layoutMode: n
                    } = e;
                    D.set(t, n)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        guilds: t
                    } = e;
                    A.clear(), g.clear(), t.forEach(e => F(e))
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    F(t)
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
                            k(null, t, n, i)
                        })
                    }(0, n)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    A.set(t.id, []);
                    let n = t.guild_id;
                    if (null != n) {
                        var i;
                        let e = G(n),
                            a = null !== (i = g.get(e)) && void 0 !== i ? i : [],
                            l = a.filter(e => e.channelId !== t.id);
                        g.set(e, l)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function() {
                    N = !0
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: w,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: w,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, n, a;
                    let {
                        channelId: l,
                        embeddedActivity: s
                    } = e, {
                        application_id: o
                    } = s, _ = (0, E.default)(o), f = r.default.getSessionId();
                    if (null == _ || null == f || (null === (t = I.get(o)) || void 0 === t ? void 0 : t.channelId) === l) return !1;
                    let m = u.default.getChannel(l),
                        S = null == m ? void 0 : m.getGuildId(),
                        g = c.default.getCurrentUser();
                    if (null == S && !(null !== (n = null == m ? void 0 : m.isPrivate()) && void 0 !== n && n) || null == g) return !1;
                    i = l;
                    let A = new Map,
                        N = g.id;
                    A.set(N, {
                        user_id: N
                    }), I.set(o, {
                        guildId: S,
                        channelId: l,
                        application_id: o,
                        name: null !== (a = s.name) && void 0 !== a ? a : C.default.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                        url: _,
                        type: T.ActivityTypes.PLAYING,
                        connections: A,
                        connectedSince: Date.now()
                    }), P = i !== d.default.getChannelId() || (0, h.default)(l) ? p.ActivityPanelModes.PIP : p.ActivityPanelModes.PANEL, L.set(V(l, o), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    let {
                        applicationId: t
                    } = e, n = I.get(t);
                    I.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        embeddedActivity: i,
                        connections: a
                    } = e;
                    k(t, n, i, a)
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t, n;
                    let {
                        activity: i
                    } = e;
                    if (null == i) return !1;
                    let a = I.get(null !== (t = i.application_id) && void 0 !== t ? t : "");
                    if (null == a) return !1;
                    I.set(a.application_id, {
                        ...a,
                        type: null !== (n = i.type) && void 0 !== n ? n : a.type,
                        secrets: i.secrets
                    })
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    let {
                        applicationId: t,
                        config: n
                    } = e, i = I.get(t);
                    null != i && I.set(i.application_id, {
                        ...i,
                        config: n
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    let {
                        guildId: t
                    } = e, n = G(t), i = R.get(n);
                    R.set(n, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        activities: n
                    } = e, i = G(t);
                    O.set(i, n);
                    let a = Date.now();
                    ! function(e) {
                        let {
                            activities: t,
                            now: n
                        } = e;
                        t.forEach(e => {
                            let t = e.application_id,
                                i = e.client_platform_config[(0, f.default)((0, _.getOS)())];
                            if (!m.seenActivities.has(t) && (m.shouldShowNewActivityIndicator = !0, m.seenActivities.add(t)), null == i.label_until) return;
                            let a = new Date(i.label_until).getTime();
                            if (a < n) return;
                            let l = m.seenNewActivities[t],
                                r = Object.hasOwn(m.seenNewActivities, t),
                                u = new Date(l).getTime() < a;
                            i.label_type === s.EmbeddedActivityLabelTypes.NEW && (!r || u) && (m.shouldShowNewActivityIndicator = !0, m.seenNewActivities[t] = i.label_until);
                            let o = m.seenUpdatedActivities[t],
                                d = Object.hasOwn(m.seenUpdatedActivities, t),
                                c = new Date(o).getTime() < a;
                            i.label_type === s.EmbeddedActivityLabelTypes.UPDATED && (!d || c) && (m.shouldShowNewActivityIndicator = !0, m.seenUpdatedActivities[t] = i.label_until)
                        })
                    }({
                        activities: n,
                        now: a
                    }), R.set(i, {
                        isFetching: !1,
                        lastFetchTimestampMs: a
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = G(t), i = R.get(n);
                    R.set(n, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
                    m.shouldShowNewActivityIndicator = !1
                },
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    let {
                        applicationId: t,
                        lockState: n,
                        pictureInPictureLockState: i,
                        gridLockState: a
                    } = e;
                    null == n ? y.delete(t) : y.set(t, n), null === i ? v.delete(t) : void 0 !== i && v.set(t, i), null === a ? M.delete(t) : void 0 !== a && M.set(t, a)
                },
                EMBEDDED_ACTIVITY_DISMISS_MESSAGE: function(e) {
                    let {
                        embeddedActivityKey: t
                    } = e;
                    U.add(t)
                },
                EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
                    let {
                        activityPanelMode: t
                    } = e;
                    P = t
                },
                EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
                    let {
                        focusedActivityLayout: t
                    } = e;
                    b = t
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    i !== t && P === p.ActivityPanelModes.PANEL && (P = p.ActivityPanelModes.PIP)
                }
            });
            var B = x