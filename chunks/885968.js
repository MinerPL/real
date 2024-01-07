            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("446674"),
                u = n("997289"),
                d = n("191225"),
                c = n("706508"),
                f = n("501260"),
                m = n("698372"),
                E = n("969380"),
                _ = n("817039"),
                h = n("141962"),
                p = n("685665"),
                I = n("653047"),
                T = n("271938"),
                g = n("824563"),
                C = n("697218"),
                S = n("811305"),
                A = n("449008"),
                N = n("954016"),
                M = n("782340"),
                v = n("502079");

            function x(e) {
                var t, n;
                let {
                    application: l,
                    activityInstance: x,
                    channelId: O,
                    guildId: L
                } = e, [R, y] = s.useState(!1), {
                    analyticsLocations: P
                } = (0, p.default)(), D = (0, u.useAnalyticsContext)(), {
                    containerRef: j,
                    isStacked: U
                } = function() {
                    let e = s.useRef(null),
                        [t, n] = s.useState(!1);
                    return s.useEffect(() => {
                        let t = new ResizeObserver(() => (function() {
                                var t;
                                let a = null === (t = e.current) || void 0 === t ? void 0 : t.offsetWidth;
                                null != a && n(a < 512)
                            })()),
                            a = e.current;
                        return null != a && t.observe(a), () => {
                            t.disconnect()
                        }
                    }, [e]), {
                        containerRef: e,
                        isStacked: t
                    }
                }(), b = (0, E.default)({
                    applicationId: l.id,
                    size: 1024
                }), G = (0, m.default)(), B = (0, o.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(O).find(e => e.activity_id === x.id)), k = (0, o.useStateFromStoresArray)([C.default], () => (null == B ? void 0 : B.connections) == null ? [] : Array.from(B.connections.values()).map(e => C.default.getUser(e.user_id)).filter(A.isNotNullish)), w = (0, o.useStateFromStores)([g.default], () => {
                    var e, t;
                    let n = null == B ? void 0 : null === (e = B.connections) || void 0 === e ? void 0 : e.values().next().value;
                    return null == n ? null : null === (t = g.default.findActivity(n.user_id, e => e.application_id === l.id)) || void 0 === t ? void 0 : t.details
                }), H = s.useMemo(() => {
                    let e = new I.default(l);
                    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = N.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
                }, [l]), F = function(e, t, n) {
                    let a = (0, o.useStateFromStores)([d.default], () => {
                            var n;
                            return (null === (n = d.default.getSelfEmbeddedActivityForChannel(t)) || void 0 === n ? void 0 : n.application_id) === e.id
                        }),
                        s = (0, f.useEmbeddedActivityJoinability)({
                            userId: T.default.getId(),
                            activity: n,
                            channelId: t,
                            application: e
                        });
                    if (null == n) return {
                        status: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
                    };
                    if (a) return {
                        tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
                    };
                    switch (s) {
                        case f.EmbeddedActivityJoinability.CAN_JOIN:
                            return null;
                        case f.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS
                            };
                        case f.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
                            };
                        case f.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS
                            };
                        case f.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS
                            };
                        case f.EmbeddedActivityJoinability.CHANNEL_FULL:
                            return {
                                tooltip: M.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
                            };
                        case f.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION
                            };
                        case f.EmbeddedActivityJoinability.NO_CHANNEL:
                        case f.EmbeddedActivityJoinability.NO_GUILD:
                        case f.EmbeddedActivityJoinability.NO_USER:
                        case f.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
                            return {
                                tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
                            }
                    }
                }(H, O, B), V = async () => {
                    if (null != B) {
                        y(!0);
                        try {
                            await (0, c.default)({
                                activity: B,
                                currentEmbeddedApplication: G,
                                activityChannelId: O,
                                locationObject: D.location,
                                embeddedActivitiesManager: h.default,
                                analyticsLocations: P
                            })
                        } finally {
                            y(!1)
                        }
                    }
                };
                return (0, a.jsx)("div", {
                    className: i(v.outerContainer, {
                        [v.rowLayout]: !U,
                        [v.stackedLayout]: U
                    }),
                    ref: j,
                    children: (0, a.jsxs)("div", {
                        className: v.container,
                        children: [(0, a.jsx)("div", {
                            className: v.imgContainer,
                            children: (0, a.jsx)(_.default, {
                                imageBackground: b,
                                applicationName: l.name,
                                imageClassName: v.img,
                                imageNotFoundClassName: v.imgBroken
                            })
                        }), (0, a.jsxs)("div", {
                            className: v.contentContainer,
                            children: [(0, a.jsxs)("div", {
                                className: v.info,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/bold",
                                    children: null == l ? void 0 : l.name
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    lineClamp: U ? 3 : 1,
                                    children: null !== (n = null !== (t = null == F ? void 0 : F.status) && void 0 !== t ? t : w) && void 0 !== n ? n : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: v.cta,
                                children: [(0, a.jsx)(r.Tooltip, {
                                    text: null == F ? void 0 : F.tooltip,
                                    children: e => {
                                        let {
                                            onClick: t,
                                            ...n
                                        } = e;
                                        return (0, a.jsx)(r.Button, {
                                            ...n,
                                            onClick: () => {
                                                V(), null == t || t()
                                            },
                                            color: r.ButtonColors.GREEN,
                                            submitting: R,
                                            disabled: null != F,
                                            children: M.default.Messages.EMBEDDED_ACTIVITIES_JOIN
                                        })
                                    }
                                }), (0, a.jsx)("div", {
                                    className: v.avatars,
                                    children: (0, a.jsx)(S.default, {
                                        guildId: L,
                                        users: k,
                                        max: 4
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }