(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62704"], {
        614175: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ActivitiesGameNightExperiment: function() {
                    return a
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-03_activities_game_night_coach_mark",
                label: "Activities Game Night Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Activities Game Night",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        903178: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsWatchTogetherPromoEnabled: function() {
                    return n
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-03_activitieswatchtogetherpromo",
                    label: "Activities Watch Together Promo",
                    defaultConfig: {
                        enableWatchTogetherPromo: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Watch Together promo",
                        config: {
                            enableWatchTogetherPromo: !0
                        }
                    }]
                }),
                n = () => {
                    let {
                        enableWatchTogetherPromo: e
                    } = a.useExperiment({
                        location: "ea09d5_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        955153: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                BirthdayActivitiesExperiment: function() {
                    return a
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-03_birthday_activities",
                label: "Birthday Activities",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Birthday Activities",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Geo test Enable Birthday Activities but no share",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        199734: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ExperimentActivityShelfOrder: function() {
                    return n
                }
            });
            var l = i("862205"),
                a = i("807106");
            let n = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_activity_shelf_order",
                label: "Activity Shelf Order",
                defaultConfig: {
                    heuristic: a.ActivityShelfSortHeuristic.None,
                    timePeriodInDays: -1
                },
                treatments: [{
                    id: 1,
                    label: "Activity Shelf Order: Most Recently Used",
                    config: {
                        heuristic: a.ActivityShelfSortHeuristic.MostRecentlyUsed,
                        timePeriodInDays: -1
                    }
                }, {
                    id: 2,
                    label: "Activity Shelf Order: Most Used",
                    config: {
                        heuristic: a.ActivityShelfSortHeuristic.MostUsed,
                        timePeriodInDays: -1
                    }
                }, {
                    id: 3,
                    label: "Activity Shelf Order: Weighted Most Used",
                    config: {
                        heuristic: a.ActivityShelfSortHeuristic.WeightedMostUsed,
                        timePeriodInDays: -1
                    }
                }]
            })
        },
        337697: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ExperimentBirthdayGoodbye: function() {
                    return a
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-06_birthday_goodbye",
                label: "Activities Free Forever",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Activities Free Forever",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        686569: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ExperimentShelfToDetailPage: function() {
                    return a
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-06_activity_shelf_to_detail_page",
                label: "Activity Shelf to Detail Page",
                defaultConfig: {
                    enableBigShelf: !1,
                    enableShelfToDetailPage: !1,
                    enableSocialProofActivityDetails: !1,
                    enableMinimalActivityDetails: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 1,
                    label: "Enable Big Shelf",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 2,
                    label: "Enable Activity Shelf to Detail Page",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !0,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 3,
                    label: "Enable social-proof shelf details",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !0,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 4,
                    label: "Enable minimal shelf details",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !0
                    }
                }, {
                    id: 5,
                    label: "Enable minimal shelf details and route to detail page",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !0,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !0
                    }
                }]
            })
        },
        743925: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useActivityShelfData: function() {
                    return f
                }
            }), i("222007");
            var l = i("884691"),
                a = i("446674"),
                n = i("442939"),
                r = i("697218"),
                o = i("167726"),
                u = i("449008"),
                d = i("773336"),
                c = i("191225"),
                s = i("334368");

            function f(e) {
                let t = (0, a.useStateFromStores)([r.default], r.default.getCurrentUser),
                    i = (0, a.useStateFromStoresArray)([c.default], () => c.default.getShelfActivities(e)),
                    f = (0, a.useStateFromStores)([o.default], () => o.default.testModeEmbeddedApplicationId),
                    v = i.map(e => e.application_id),
                    p = null != f ? [f, ...v] : v,
                    m = (0, n.default)(p),
                    b = l.useMemo(() => m.filter(u.isNotNullish), [m]),
                    h = l.useMemo(() => null != f && b.length > 0 && b[0].id === f && null != b[0].embeddedActivityConfig ? [{
                        activity: b[0].embeddedActivityConfig,
                        application: b[0]
                    }] : [], [b, f]),
                    y = l.useMemo(() => i.map(e => {
                        let t = b.find(t => t.id === e.application_id);
                        return null == t ? null : {
                            activity: e,
                            application: t
                        }
                    }).filter(u.isNotNullish), [i, b]);
                return l.useMemo(() => [...h, ...y].filter(e => {
                    var t;
                    let {
                        activity: i
                    } = e;
                    return (null !== (t = i.supported_platforms) && void 0 !== t ? t : []).includes((0, s.default)((0, d.getOS)()))
                }).filter(e => {
                    let {
                        activity: i
                    } = e;
                    return !i.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
                }), [null == t ? void 0 : t.nsfwAllowed, y, h])
            }
        },
        91761: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            }), i("222007");
            var l = i("446674"),
                a = i("84460"),
                n = i("199734"),
                r = i("807106"),
                o = i("119420"),
                u = i("243244");

            function d(e) {
                let {
                    guildId: t,
                    isWatchTogetherPromoEnabled: i = !1,
                    disableFilter: d = !1
                } = e, {
                    enableDeveloperActivityShelf: c,
                    filter: s
                } = (0, l.useStateFromStoresObject)([a.default], () => ({
                    enableDeveloperActivityShelf: a.default.getIsEnabled(),
                    filter: a.default.getFilter()
                })), f = (0, u.default)(t, i), {
                    heuristic: v
                } = n.ExperimentActivityShelfOrder.useExperiment({
                    location: "useActivityShelfItems"
                }, {
                    autoTrackExposure: !0
                }), p = null != v ? v : r.ActivityShelfSortHeuristic.None, m = (0, r.default)(f, p), b = (0, o.useDeveloperActivityShelfItems)();
                return [...b, ...m].map(e => {
                    let [t, i] = e;
                    return [t, i.filter(e => d || !c || "" === s || e.application.name.toLocaleLowerCase().includes(s.toLocaleLowerCase()))]
                })
            }
        },
        807106: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ActivityShelfSortHeuristic: function() {
                    return l
                },
                default: function() {
                    return f
                }
            }), i("222007"), i("424973");
            var l, a, n = i("884691"),
                r = i("446674"),
                o = i("798609"),
                u = i("773336"),
                d = i("831387"),
                c = i("289732"),
                s = i("334368");

            function f(e, t) {
                let i = (0, r.useStateFromStoresObject)([c.default], () => c.default.getState().usageByApplicationId);
                return n.useMemo(() => {
                    let l = p(i, t),
                        a = e.map(e => {
                            let [t, i] = e;
                            return [t, v(i, l)]
                        }),
                        n = [];
                    return a.forEach(e => {
                        let [t, i] = e;
                        i.forEach(e => n.push(e.application.id))
                    }), d.handleSetOrder(n), a
                }, [t, e, i])
            }(a = l || (l = {}))[a.None = 0] = "None", a[a.MostRecentlyUsed = 1] = "MostRecentlyUsed", a[a.MostUsed = 2] = "MostUsed", a[a.WeightedMostUsed = 3] = "WeightedMostUsed";
            let v = (e, t) => {
                    let i = [...e],
                        l = 0;
                    return t.forEach(e => {
                        let t = i.findIndex(t => t.application.id === e);
                        if (-1 !== t) {
                            let e = i[t];
                            i.splice(t, 1), i = [...i.slice(0, l), e, ...i.slice(l)], ++l
                        }
                    }), i.map((e, t) => [e, t]).filter(e => {
                        var t, i;
                        let [l] = e, a = null === (i = l.application.embeddedActivityConfig) || void 0 === i ? void 0 : null === (t = i.client_platform_config[(0, s.default)((0, u.getOS)())]) || void 0 === t ? void 0 : t.label_type;
                        return !!a && (a === o.EmbeddedActivityLabelTypes.NEW || a === o.EmbeddedActivityLabelTypes.UPDATED)
                    }).forEach(e => {
                        let [t, l] = e, a = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
                        if (a < l) {
                            let e = i[l];
                            i.splice(l, 1), i = [...i.slice(0, a), e, ...i.slice(a)]
                        }
                    }), i
                },
                p = (e, t) => {
                    switch (t) {
                        case 1:
                            return m(e);
                        case 2:
                            return b(e);
                        case 3:
                            return y(e)
                    }
                    return []
                },
                m = e => {
                    let t = Object.keys(e),
                        i = Object.values(e).map((e, i) => [t[i], e[e.length - 1]]).sort((e, t) => {
                            let [, i] = e, [, l] = t;
                            return -Math.sign(i - l)
                        }).map(e => {
                            let [t] = e;
                            return t
                        });
                    return i
                },
                b = e => {
                    let t = Object.keys(e),
                        i = Object.values(e).map((e, i) => [t[i], e.length]).sort((e, t) => {
                            let [, i] = e, [, l] = t;
                            return -Math.sign(i - l)
                        }).map(e => {
                            let [t] = e;
                            return t
                        });
                    return i
                },
                h = (e, t) => 1 / (1 + Math.max(0, Math.floor((e - t) / 864e5))),
                y = e => {
                    let t = Date.now(),
                        i = Object.keys(e),
                        l = Object.values(e).map((e, l) => {
                            let a = 0;
                            return e.forEach(e => a += h(t, e)), [i[l], a]
                        }).sort((e, t) => {
                            let [, i] = e, [, l] = t;
                            return -Math.sign(i - l)
                        }).map(e => {
                            let [t] = e;
                            return t
                        });
                    return l
                }
        },
        119420: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useDeveloperActivityShelfItems: function() {
                    return o
                }
            });
            var l = i("884691"),
                a = i("446674"),
                n = i("84460"),
                r = i("954016");
            let o = () => {
                let {
                    isEnabled: e,
                    lastUsedObject: t
                } = (0, a.useStateFromStoresObject)([n.default], () => ({
                    isEnabled: n.default.getIsEnabled(),
                    lastUsedObject: n.default.getLastUsedObject()
                }), []), i = (0, a.useStateFromStoresArray)([n.default], () => n.default.getDeveloperShelfItems(), []), o = l.useMemo(() => e ? i.map(e => {
                    let t = {
                        application: e,
                        activity: {
                            ...r.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                            ...e.embeddedActivityConfig,
                            application_id: e.id
                        }
                    };
                    return t
                }).sort((e, i) => {
                    let l = t[e.application.id],
                        a = t[i.application.id];
                    return null == l ? 1 : null == a ? -1 : a - l
                }) : [], [i, e, t]);
                return o.length <= 0 ? [] : [
                    [r.ActivityAccessStatus.UNLOCKED, o]
                ]
            }
        },
        575136: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                },
                useEmbeddedAppsByChannel: function() {
                    return s
                },
                useEmbeddedApps: function() {
                    return f
                },
                useEmbeddedAppsWithPresence: function() {
                    return v
                }
            }), i("222007"), i("424973");
            var l = i("884691"),
                a = i("446674"),
                n = i("442939"),
                r = i("824563"),
                o = i("697218"),
                u = i("449008"),
                d = i("191225");

            function c(e, t) {
                let i = (0, a.useStateFromStoresArray)([d.default], () => null != e && null != e.id && "" !== e.id ? d.default.getEmbeddedActivitiesForChannel(e.id) : d.NO_ACTIVITIES),
                    l = f(i, t);
                return l
            }

            function s(e) {
                let t = (0, a.useStateFromStores)([d.default], () => null != e ? d.default.getEmbeddedActivitiesForGuild(e) : d.NO_ACTIVITIES),
                    i = f(t),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return i.forEach(t => {
                            var i;
                            let l = t.embeddedActivity.channelId,
                                a = null !== (i = e.get(l)) && void 0 !== i ? i : [];
                            a.push(t), e.set(l, a)
                        }), e
                    }, [i]);
                return n
            }

            function f(e, t) {
                let i = e.map(e => e.application_id),
                    r = (0, n.default)(i),
                    d = new Set([]);
                for (let t of e)
                    for (let e of t.connections.keys()) d.add(e);
                let c = (0, a.useStateFromStoresArray)([o.default], () => {
                        let e = [];
                        for (let t of d) e.push(o.default.getUser(t));
                        return e
                    }, [d]),
                    s = l.useMemo(() => {
                        let i = new Map;
                        c.forEach(e => {
                            null != e && i.set(e.id, e)
                        });
                        let l = e.map((e, l) => {
                            let a = r[l],
                                n = [];
                            if (null != n)
                                for (let l of e.connections.keys()) {
                                    let e = i.get(l);
                                    if (null != e && null != t) {
                                        let i = t(e);
                                        null != i && n.push(i)
                                    }
                                }
                            return null == a ? null : {
                                embeddedActivity: e,
                                application: a,
                                userParticipantAvatarUrls: n
                            }
                        }).filter(u.isNotNullish);
                        return l
                    }, [e, r, c, t]);
                return s
            }

            function v(e) {
                let t = (0, a.useStateFromStores)([r.default], () => {
                    let t = new Map;
                    return e.forEach(e => {
                        var i, l;
                        let a = r.default.findActivity(null == e ? void 0 : e.embeddedActivity.connections.values().next().value.user_id, t => {
                            var i;
                            return t.application_id === (null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id)
                        });
                        t.set(null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id, {
                            ...e,
                            embeddedActivity: {
                                ...null == e ? void 0 : e.embeddedActivity,
                                details: null !== (l = null == a ? void 0 : a.details) && void 0 !== l ? l : ""
                            }
                        })
                    }), t
                }, [e], a.statesWillNeverBeEqual);
                return t
            }
        },
        865821: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            }), i("222007"), i("424973");
            var l = i("884691"),
                a = i("91761");

            function n(e) {
                let {
                    guildId: t,
                    disableFilter: i = !1
                } = e, n = (0, a.default)({
                    guildId: t,
                    disableFilter: i
                });
                return l.useMemo(() => {
                    let e = [];
                    n.forEach(t => {
                        let [, i] = t;
                        e.push(...i)
                    });
                    let t = new Set;
                    return e.filter(e => !t.has(e.application.id) && (t.add(e.application.id), !0))
                }, [n])
            }
        },
        21002: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var l = i("719923"),
                a = i("673044"),
                n = i("954016"),
                r = i("646718");

            function o(e, t) {
                let i = (0, a.default)(e.activity);
                return i || null == e.activity.premium_tier_requirement || (0, l.isPremiumExactly)(t, r.PremiumTypes.TIER_2) ? n.ActivityAccessStatus.UNLOCKED : n.ActivityAccessStatus.NEEDS_NITRO
            }
        },
        525167: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var l = i("49111");

            function a(e, t) {
                let i;
                let a = window.GLOBAL_ENV.CDN_HOST,
                    n = window.GLOBAL_ENV.API_ENDPOINT;
                return i = null != a ? "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(n).concat(l.Endpoints.STORE_ASSET(e, t, "mp4"))
            }
        },
        607573: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ActivityAction: function() {
                    return l
                },
                default: function() {
                    return A
                }
            }), i("781738");
            var l, a, n = i("798609"),
                r = i("685665"),
                o = i("773336"),
                u = i("550766"),
                d = i("191225"),
                c = i("706508"),
                s = i("986214"),
                f = i("575136"),
                v = i("334368"),
                p = i("525167"),
                m = i("577261"),
                b = i("698372"),
                h = i("969380"),
                y = i("954016");
            (a = l || (l = {})).START = "START", a.JOIN = "JOIN", a.LEAVE = "LEAVE";

            function A(e) {
                let {
                    activityItem: t,
                    channel: i,
                    guildId: l,
                    locationObject: a,
                    onActivityItemSelected: A,
                    embeddedActivitiesManager: E,
                    assetNames: g,
                    backgroundResolution: S = 250
                } = e, {
                    analyticsLocations: _
                } = (0, r.default)(), {
                    application: D,
                    activity: T
                } = t, I = T.client_platform_config[(0, v.default)((0, o.getOS)())], N = null != I.label_until && Date.now() < Date.parse(I.label_until), M = (0, h.default)({
                    applicationId: D.id,
                    size: S,
                    names: g
                }), O = null != T.activity_preview_video_asset_id ? (0, p.default)(D.id, T.activity_preview_video_asset_id) : null, P = (0, m.default)(), C = (0, b.default)(), x = (0, f.default)(i), U = x.find(e => {
                    let {
                        embeddedActivity: t
                    } = e;
                    return D.id === t.application_id
                }), L = "START", w = () => {
                    (0, s.default)({
                        activityItem: t,
                        currentActivity: C,
                        locationObject: a,
                        guildId: l,
                        channelId: null == i ? void 0 : i.id,
                        embeddedActivitiesManager: E,
                        analyticsLocations: _
                    }).then(e => e && (null == A ? void 0 : A({
                        applicationId: D.id
                    })))
                };
                null != i && (null == P ? void 0 : P.channelId) === i.id && (null == C ? void 0 : C.id) === D.id ? (L = "LEAVE", w = () => {
                    !d.default.isLaunchingActivity() && ((0, u.stopEmbeddedActivity)({
                        channelId: i.id,
                        applicationId: D.id
                    }), E.leaveActivity({
                        channelId: i.id,
                        applicationId: D.id
                    }), null == A || A({
                        applicationId: D.id
                    }))
                }) : null != U && (L = "JOIN", w = () => {
                    !d.default.isLaunchingActivity() && (0, c.default)({
                        activity: U.embeddedActivity,
                        currentEmbeddedApplication: C,
                        activityChannelId: null == i ? void 0 : i.id,
                        locationObject: a,
                        embeddedActivitiesManager: E,
                        analyticsLocations: _
                    }).then(e => e && (null == A ? void 0 : A({
                        applicationId: D.id
                    })))
                });
                let B = t.activity.client_platform_config[(0, v.default)((0, o.getOS)())].release_phase,
                    F = y.STAFF_RELEASE_PHASES.includes(B),
                    k = F ? B.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
                return {
                    imageBackground: M,
                    videoUrl: O,
                    joinableEmbeddedApp: U,
                    activityAction: L,
                    onActivityItemSelected: w,
                    labelType: N ? I.label_type : n.EmbeddedActivityLabelTypes.NONE,
                    staffReleasePhase: k
                }
            }
        },
        243244: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            }), i("222007"), i("424973"), i("843762");
            var l = i("884691"),
                a = i("446674"),
                n = i("697218"),
                r = i("719923"),
                o = i("686569"),
                u = i("743925"),
                d = i("21002"),
                c = i("673044"),
                s = i("954016");

            function f(e, t) {
                let i = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
                    f = (0, u.useActivityShelfData)(e),
                    {
                        enableBigShelf: v,
                        enableMinimalActivityDetails: p,
                        enableSocialProofActivityDetails: m
                    } = o.ExperimentShelfToDetailPage.useExperiment({
                        location: "8814a3_1"
                    }, {
                        autoTrackExposure: !0
                    }),
                    b = v || p || m;
                return l.useMemo(() => {
                    var e;
                    let l = new Map;
                    if (null == i) return [];
                    let a = null;
                    f.forEach(e => {
                        var n;
                        let r = (0, d.default)(e, i),
                            o = null !== (n = l.get(r)) && void 0 !== n ? n : [];
                        t && e.application.id === s.WATCH_YOUTUBE_PROD_APP_ID && !b ? a = e : (o.push(e), l.set(r, o))
                    });
                    let n = null !== (e = l.get(s.ActivityAccessStatus.UNLOCKED)) && void 0 !== e ? e : [];
                    if (!r.default.canUsePremiumActivities(i)) {
                        let e = n.sort((e, t) => Number((0, c.default)(t.activity)) - Number((0, c.default)(e.activity)));
                        l.set(s.ActivityAccessStatus.UNLOCKED, e)
                    }
                    let o = Array.from(l.entries()).sort((e, t) => {
                        let [i] = e, [l] = t;
                        return i <= l ? -1 : 1
                    });
                    return t && null != a && o.unshift([s.ActivityAccessStatus.UNLOCKED, [a]]), o
                }, [i, f, t, b])
            }
        },
        687292: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            }), i("222007");
            var l = i("37983"),
                a = i("884691"),
                n = i("77078"),
                r = i("798609"),
                o = i("956089"),
                u = i("782340"),
                d = i("569214");

            function c(e) {
                let {
                    name: t,
                    labelType: i,
                    collapsed: c = !1,
                    showTooltip: s = !1
                } = e, f = i === r.EmbeddedActivityLabelTypes.NEW ? u.default.Messages.NEW : u.default.Messages.UPDATED, v = i === r.EmbeddedActivityLabelTypes.NEW ? d.activityNewBadge : d.activityUpdatedBadge, [p, m] = a.useState(c ? "" : f);
                if (a.useEffect(() => {
                        c ? m("") : i === r.EmbeddedActivityLabelTypes.NEW ? m(u.default.Messages.NEW) : i === r.EmbeddedActivityLabelTypes.UPDATED && m(u.default.Messages.UPDATED)
                    }, [c, i]), i === r.EmbeddedActivityLabelTypes.NONE) return null;
                let b = (0, l.jsx)(o.TextBadge, {
                    className: v,
                    disableColor: !0,
                    text: (0, l.jsx)("span", {
                        children: p
                    })
                });
                if (!s) return b;
                let h = u.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
                    activity: t
                });
                return (0, l.jsx)(n.TooltipContainer, {
                    text: h,
                    tooltipContentClassName: d.tooltip,
                    children: b
                })
            }
        },
        944832: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var l = i("37983");
            i("884691");
            var a = i("414456"),
                n = i.n(a),
                r = i("561445"),
                o = e => {
                    let {
                        aspectRatio: t,
                        style: i,
                        className: a,
                        children: o
                    } = e;
                    return (0, l.jsx)("div", {
                        className: n(r.outer, a),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...i
                        },
                        children: (0, l.jsx)("div", {
                            className: r.inner,
                            children: o
                        })
                    })
                }
        }
    }
]);