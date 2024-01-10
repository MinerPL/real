            "use strict";
            n.r(t), n.d(t, {
                HomeButton: function() {
                    return K
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("95410"),
                o = n("77078"),
                u = n("823411"),
                d = n("524110"),
                c = n("805199"),
                f = n("951039"),
                h = n("713726"),
                C = n("9759"),
                p = n("194051"),
                m = n("651896"),
                E = n("520480"),
                g = n("813531"),
                I = n("749387"),
                S = n("260488"),
                _ = n("12896"),
                N = n("27618"),
                T = n("18494"),
                A = n("697218"),
                L = n("340412"),
                v = n("330338"),
                x = n("535974"),
                R = n("352326"),
                M = n("774223"),
                O = n("15738"),
                y = n("956089"),
                D = n("108189"),
                b = n("964889"),
                j = n("709681"),
                G = n("957833"),
                U = n("610898"),
                P = n("829562"),
                w = n("255991"),
                F = n("49111"),
                B = n("646718"),
                V = n("782340"),
                H = n("973321");
            let k = {
                origin: {
                    x: -16,
                    y: 0
                },
                targetWidth: 48,
                targetHeight: 48,
                offset: {
                    x: 0,
                    y: 0
                }
            };

            function Y(e) {
                let {
                    selected: t,
                    user: n,
                    badge: h,
                    link: p,
                    showProgressBadge: m
                } = e, S = (0, i.useStateFromStores)([c.default], () => c.default.isEditorOpen), [N, T] = a.useState(!1), [A, L] = a.useState(!1), [v, x] = a.useState(null), [R, b] = a.useState(0), [G, B] = a.useState(!1), {
                    canViewBroadcasts: Y
                } = C.default.useExperiment({
                    location: "home_button_no_track"
                }, {
                    autoTrackExposure: !1
                }), K = (0, g.default)(), W = K.length > 0 && Y;
                (0, E.useTrackNewBroadcastDetected)(), a.useEffect(() => {
                    K.length > 0 && u.default.getDetectableGames()
                }, [K]);
                let Z = (0, s.useTreeItem)("home"),
                    z = () => {
                        x(null), b(0), clearTimeout(v)
                    };
                if (null == n) return null;
                let X = V.default.Messages.DIRECT_MESSAGES;
                A && (X = r.default.get(F.DISCODO_STORAGE_KEY) ? V.default.Messages.DISCODO_ENABLED : V.default.Messages.DISCODO_DISABLED), K.length > 0 && C.default.trackExposure({
                    location: "home_button"
                });
                let Q = null;
                !t && m ? Q = (0, l.jsx)(d.default, {
                    className: H.downloadProgress,
                    determineOwnVisibility: !1
                }) : W && (Q = (0, l.jsx)(M.default, {
                    className: H.broadcastBadge
                }));
                let q = t || N || S,
                    J = (0, l.jsx)(o.BlobMask, {
                        highlight: W,
                        selected: q,
                        lowerBadge: h > 0 ? (0, w.renderMentionBadge)(h) : null,
                        upperBadge: Q,
                        lowerBadgeWidth: (0, y.getBadgeWidthForValue)(h),
                        children: (0, l.jsx)(D.default, {
                            onMouseEnter: () => T(!0),
                            onMouseLeave: () => T(!1),
                            onClick: () => {
                                if (!__OVERLAY__ && (null != v && clearTimeout(v), x(setTimeout(z, 500)), b(R + 1), 15 === R)) {
                                    z();
                                    let e = !r.default.get(F.DISCODO_STORAGE_KEY);
                                    r.default.set(F.DISCODO_STORAGE_KEY, e), e ? (0, j.playSound)("discodo") : (0, j.playSound)("user_leave"), L(!0), setTimeout(() => {
                                        L(!1)
                                    }, 1e3)
                                }
                            },
                            selected: q,
                            ariaLabel: V.default.Messages.DIRECT_MESSAGES,
                            ...Z,
                            to: {
                                pathname: p,
                                state: {
                                    analyticsSource: {
                                        page: F.AnalyticsPages.GUILD_CHANNEL,
                                        section: F.AnalyticsSections.NAVIGATION,
                                        object: F.AnalyticsObjects.BUTTON_HOME
                                    }
                                }
                            },
                            children: (0, l.jsx)(f.default, {})
                        })
                    }),
                    $ = W ? (0, l.jsx)(o.Popout, {
                        position: "right",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, l.jsx)(I.default, {
                                closePopout: t
                            })
                        },
                        onRequestClose: () => {
                            B(!1)
                        },
                        spacing: 8,
                        shouldShow: G,
                        children: () => J
                    }) : null;
                return (0, l.jsx)("div", {
                    className: H.tutorialContainer,
                    onMouseEnter: () => {
                        B(!0)
                    },
                    onMouseLeave: () => {
                        setTimeout(() => {
                            B(!1)
                        }, 250)
                    },
                    children: (0, l.jsx)(_.default, {
                        inlineSpecs: k,
                        tutorialId: "friends-list",
                        position: "right",
                        children: (0, l.jsxs)(U.ListItem, {
                            children: [(0, l.jsx)(O.default, {
                                selected: t,
                                hovered: N,
                                className: H.pill
                            }), null != $ ? $ : (0, l.jsx)(P.default, {
                                color: o.Tooltip.Colors.PRIMARY,
                                hideOnClick: !0,
                                text: X,
                                selected: t,
                                children: J
                            })]
                        })
                    })
                })
            }

            function K() {
                let e = (0, G.useIsHomeSelected)(),
                    t = (0, i.useStateFromStores)([R.default, x.default], () => {
                        let e = (0, d.getDispatchApplicationStates)(R.default.activeItems, x.default),
                            {
                                total: t,
                                progress: n
                            } = b.getCombinedProgress(e),
                            l = b.calculateProgressPercentage(n, t);
                        return l > 0 && l < 100
                    }),
                    n = (0, i.useStateFromStores)([p.default], () => p.default.getUserIdsToValidate()),
                    s = (0, i.useStateFromStores)([N.default], () => N.default.getPendingCount()),
                    r = Object.keys(B.SubscriptionTrials),
                    {
                        unviewedTrialCount: o,
                        unviewedDiscountCount: u
                    } = (0, i.useStateFromStoresObject)([L.default], () => ({
                        unviewedTrialCount: L.default.getUnacknowledgedOffers(r).length,
                        unviewedDiscountCount: L.default.getUnacknowledgedDiscountOffers().length
                    })),
                    c = o + u,
                    f = (0, i.useStateFromStores)([A.default], () => A.default.getCurrentUser()),
                    C = (0, S.useMessageRequestsCount)(),
                    E = s + c + C,
                    g = E === c && c > 0 && s + C === 0;
                a.useEffect(() => {
                    n.length > 0 && (0, h.fetchBroadcasterBuckets)()
                }, [n]), (0, m.default)();
                let I = v.default.getHomeLink();
                return g && (I = F.Routes.APPLICATION_STORE), (0, l.jsx)(Y, {
                    selected: e,
                    user: f,
                    selectedChannelId: T.default.getChannelId(F.ME),
                    badge: E,
                    link: I,
                    showProgressBadge: t
                })
            }