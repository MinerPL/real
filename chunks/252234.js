            "use strict";
            n.r(t), n.d(t, {
                CenterControlTrayActivityButton: function() {
                    return L
                }
            }), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("77078"),
                u = n("997289"),
                o = n("244201"),
                d = n("886860"),
                c = n("614175"),
                f = n("903178"),
                h = n("296998"),
                p = n("926128"),
                m = n("191225"),
                E = n("426631"),
                C = n("380691"),
                S = n("943349"),
                g = n("702173"),
                _ = n("801852"),
                I = n("10524"),
                T = n("478272"),
                v = n("685665"),
                x = n("384997"),
                N = n("788220"),
                A = n("863590"),
                M = n("49111"),
                R = n("994428"),
                j = n("143561");

            function L(e) {
                let {
                    channel: t
                } = e, {
                    enableCenterControlTrayMiniShelf: n
                } = d.ActivitiesAutoSuggestExperiment.useExperiment({
                    location: "7152d0_1"
                }, {
                    autoTrackExposure: !0
                }), L = (0, s.useStateFromStores)([m.default], () => m.default.isLaunchingActivity()), O = (0, S.useEmbeddedActivityLaunchability)(t.id), y = (0, S.getEmbeddedActivityLaunchabilityLabel)(O), b = O !== S.EmbeddedActivityLaunchability.CAN_LAUNCH || L, {
                    isHovered: P,
                    setIsHovered: D,
                    onMouseEnter: U,
                    onMouseLeave: w
                } = (0, N.default)(200, 300), F = (0, C.useShowActivityIndicator)(), {
                    enabled: k
                } = c.ActivitiesGameNightExperiment.useExperiment({
                    location: "7152d0_2"
                }, {
                    autoTrackExposure: !1
                }), V = F && !k, B = (0, E.default)({
                    channelId: t.id
                }), H = !b && n, G = l.useCallback(e => {
                    "focus" !== e.type && U()
                }, [U]), W = (0, u.useAnalyticsContext)(), Y = (0, o.useAppContext)(), z = Y === M.AppContext.POPOUT, {
                    analyticsLocations: K
                } = (0, v.default)(), Z = l.useCallback(() => {
                    (0, T.default)({
                        channel: t,
                        guildId: t.guild_id,
                        locationObject: W.location,
                        openInPopout: z,
                        analyticsLocations: K
                    })
                }, [W.location, K, t, z]), X = [];
                n && !b && X.push(i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES);
                let J = (0, g.default)(t.id);
                J && !b && X.push(i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE);
                let q = (0, f.useIsWatchTogetherPromoEnabled)(),
                    Q = (0, h.useIsWatchTogetherPromoWeek1SparklesEnabled)(),
                    $ = (0, p.useIsWatchTogetherPromoWeek2SparklesEnabled)();
                return q && Q && !b && X.push(i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES), q && $ && !b && X.push(i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES), (0, a.jsx)(x.default, {
                    contentTypes: X,
                    children: e => {
                        let {
                            visibleContent: n,
                            markAsDismissed: l
                        } = e;
                        return (0, a.jsx)(r.Popout, {
                            fixed: !0,
                            shouldShow: P,
                            animationPosition: "bottom",
                            position: "bottom",
                            align: "center",
                            spacing: 16,
                            onRequestClose: () => {
                                D(!1)
                            },
                            renderPopout: e => {
                                let {
                                    closePopout: n,
                                    setPopoutRef: s
                                } = e;
                                return H ? (0, a.jsx)(_.ActivitiesMiniShelf, {
                                    ref: s,
                                    channel: t,
                                    closePopout: n,
                                    onMouseEnter: U,
                                    onMouseLeave: w,
                                    isHovered: P,
                                    onClick: () => l(R.ContentDismissActionType.UNKNOWN)
                                }) : (0, a.jsx)(a.Fragment, {})
                            },
                            children: () => (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(A.default, {
                                    disabled: b,
                                    "aria-label": y,
                                    label: H ? void 0 : y,
                                    isActivityActive: B || P,
                                    className: j.controlButton,
                                    onClick: () => {
                                        Z(), (n === i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES || n === i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && l(R.ContentDismissActionType.UNKNOWN)
                                    },
                                    onMouseEnter: G,
                                    onMouseLeave: w
                                }), V ? (0, a.jsx)(I.FreeActivityIndicatorDot, {
                                    top: 4,
                                    right: 10,
                                    size: 12,
                                    maskColor: I.MaskColor.BLACK
                                }) : null]
                            })
                        })
                    }
                })
            }