            "use strict";
            i.r(t), i.d(t, {
                maybeJoinEmbeddedActivity: function() {
                    return T
                }
            });
            var n = i("404118"),
                l = i("651057"),
                a = i("299285"),
                u = i("645999"),
                r = i("653047"),
                d = i("42203"),
                o = i("305961"),
                s = i("957255"),
                c = i("697218"),
                f = i("800762"),
                _ = i("191225"),
                E = i("706508"),
                A = i("501260"),
                I = i("782340");
            async function T(e) {
                var t;
                let {
                    channelId: i,
                    applicationId: T,
                    activityId: C,
                    inputApplication: v,
                    analyticsLocations: S,
                    embeddedActivitiesManager: N
                } = e, p = _.default.getEmbeddedActivitiesForChannel(i), y = p.find(e => e.application_id === T && (null == C || e.activity_id === C)), h = v;
                if (null == h) {
                    let e = await l.default.fetchApplication(T);
                    h = r.default.createFromServer(e)
                }
                if (null == y || null == h) return;
                let D = c.default.getCurrentUser(),
                    O = (0, A.default)({
                        userId: null == D ? void 0 : D.id,
                        activity: y,
                        application: h,
                        channelId: i,
                        currentUser: D,
                        isActivitiesEnabledForCurrentPlatform: !0,
                        ChannelStore: d.default,
                        VoiceStateStore: f.default,
                        PermissionStore: s.default,
                        GuildStore: o.default
                    }),
                    g = _.default.getSelfEmbeddedActivityForChannel(i),
                    L = null == g ? void 0 : g.application_id,
                    m = null != L && null !== (t = a.default.getApplication(L)) && void 0 !== t ? t : void 0;
                ! function(e) {
                    let {
                        embeddedActivityJoinability: t,
                        handleCanJoin: i
                    } = e;
                    switch (t) {
                        case A.EmbeddedActivityJoinability.CAN_JOIN:
                            null == i || i();
                            break;
                        case A.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            (0, u.showActivitiesInvalidPermissionsAlert)();
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            n.default.show({
                                title: I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: I.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            n.default.show({
                                title: I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: I.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                            n.default.show({
                                title: I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                        case A.EmbeddedActivityJoinability.CHANNEL_FULL:
                        case A.EmbeddedActivityJoinability.NO_CHANNEL:
                        case A.EmbeddedActivityJoinability.NO_USER:
                            n.default.show({
                                title: I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: I.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                hideActionSheet: !1
                            })
                    }
                }({
                    embeddedActivityJoinability: O,
                    handleCanJoin: async function e() {
                        null != y && await (0, E.default)({
                            activity: y,
                            currentEmbeddedApplication: m,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: N,
                            analyticsLocations: S
                        })
                    }
                })
            }