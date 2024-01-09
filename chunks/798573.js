            "use strict";
            n.r(t), n.d(t, {
                HomeButton: function() {
                    return W
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
                _ = n("254358"),
                N = n("12896"),
                T = n("27618"),
                A = n("18494"),
                L = n("697218"),
                v = n("340412"),
                x = n("330338"),
                R = n("535974"),
                M = n("352326"),
                O = n("774223"),
                y = n("15738"),
                D = n("956089"),
                b = n("108189"),
                j = n("964889"),
                G = n("709681"),
                U = n("957833"),
                P = n("610898"),
                w = n("829562"),
                F = n("255991"),
                B = n("49111"),
                V = n("646718"),
                H = n("782340"),
                k = n("973321");
            let Y = {
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

            function K(e) {
                let {
                    selected: t,
                    user: n,
                    badge: h,
                    link: p,
                    showProgressBadge: m
                } = e, S = (0, i.useStateFromStores)([c.default], () => c.default.isEditorOpen), [_, T] = a.useState(!1), [A, L] = a.useState(!1), [v, x] = a.useState(null), [R, M] = a.useState(0), [j, U] = a.useState(!1), {
                    canViewBroadcasts: V
                } = C.default.useExperiment({
                    location: "home_button_no_track"
                }, {
                    autoTrackExposure: !1
                }), K = (0, g.default)(), W = K.length > 0 && V;
                (0, E.useTrackNewBroadcastDetected)(), a.useEffect(() => {
                    K.length > 0 && u.default.getDetectableGames()
                }, [K]);
                let Z = (0, s.useTreeItem)("home"),
                    z = () => {
                        x(null), M(0), clearTimeout(v)
                    };
                if (null == n) return null;
                let X = H.default.Messages.DIRECT_MESSAGES;
                A && (X = r.default.get(B.DISCODO_STORAGE_KEY) ? H.default.Messages.DISCODO_ENABLED : H.default.Messages.DISCODO_DISABLED), K.length > 0 && C.default.trackExposure({
                    location: "home_button"
                });
                let Q = null;
                !t && m ? Q = (0, l.jsx)(d.default, {
                    className: k.downloadProgress,
                    determineOwnVisibility: !1
                }) : W && (Q = (0, l.jsx)(O.default, {
                    className: k.broadcastBadge
                }));
                let q = t || _ || S,
                    J = (0, l.jsx)(o.BlobMask, {
                        highlight: W,
                        selected: q,
                        lowerBadge: h > 0 ? (0, F.renderMentionBadge)(h) : null,
                        upperBadge: Q,
                        lowerBadgeWidth: (0, D.getBadgeWidthForValue)(h),
                        children: (0, l.jsx)(b.default, {
                            onMouseEnter: () => T(!0),
                            onMouseLeave: () => T(!1),
                            onClick: () => {
                                if (!__OVERLAY__ && (null != v && clearTimeout(v), x(setTimeout(z, 500)), M(R + 1), 15 === R)) {
                                    z();
                                    let e = !r.default.get(B.DISCODO_STORAGE_KEY);
                                    r.default.set(B.DISCODO_STORAGE_KEY, e), e ? (0, G.playSound)("discodo") : (0, G.playSound)("user_leave"), L(!0), setTimeout(() => {
                                        L(!1)
                                    }, 1e3)
                                }
                            },
                            selected: q,
                            ariaLabel: H.default.Messages.DIRECT_MESSAGES,
                            ...Z,
                            to: {
                                pathname: p,
                                state: {
                                    analyticsSource: {
                                        page: B.AnalyticsPages.GUILD_CHANNEL,
                                        section: B.AnalyticsSections.NAVIGATION,
                                        object: B.AnalyticsObjects.BUTTON_HOME
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
                            U(!1)
                        },
                        spacing: 8,
                        shouldShow: j,
                        children: () => J
                    }) : null;
                return (0, l.jsx)("div", {
                    className: k.tutorialContainer,
                    onMouseEnter: () => {
                        U(!0)
                    },
                    onMouseLeave: () => {
                        setTimeout(() => {
                            U(!1)
                        }, 250)
                    },
                    children: (0, l.jsx)(N.default, {
                        inlineSpecs: Y,
                        tutorialId: "friends-list",
                        position: "right",
                        children: (0, l.jsxs)(P.ListItem, {
                            children: [(0, l.jsx)(y.default, {
                                selected: t,
                                hovered: _,
                                className: k.pill
                            }), null != $ ? $ : (0, l.jsx)(w.default, {
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

            function W() {
                let e = (0, U.useIsHomeSelected)(),
                    t = (0, i.useStateFromStores)([M.default, R.default], () => {
                        let e = (0, d.getDispatchApplicationStates)(M.default.activeItems, R.default),
                            {
                                total: t,
                                progress: n
                            } = j.getCombinedProgress(e),
                            l = j.calculateProgressPercentage(n, t);
                        return l > 0 && l < 100
                    }),
                    n = (0, i.useStateFromStores)([p.default], () => p.default.getUserIdsToValidate()),
                    s = (0, i.useStateFromStores)([T.default], () => T.default.getPendingCount()),
                    r = Object.keys(V.SubscriptionTrials),
                    {
                        unviewedTrialCount: o,
                        unviewedDiscountCount: u
                    } = (0, i.useStateFromStoresObject)([v.default], () => ({
                        unviewedTrialCount: v.default.getUnacknowledgedOffers(r).length,
                        unviewedDiscountCount: v.default.getUnacknowledgedDiscountOffers().length
                    })),
                    c = o + u,
                    f = (0, i.useStateFromStores)([L.default], () => L.default.getCurrentUser()),
                    C = (0, S.useMessageRequestsCount)(),
                    E = s + c + C,
                    g = E === c && c > 0 && s + C === 0,
                    {
                        enabled: I
                    } = (0, _.default)(!0);
                a.useEffect(() => {
                    n.length > 0 && (0, h.fetchBroadcasterBuckets)()
                }, [n]), (0, m.default)();
                let N = x.default.getHomeLink();
                return I && g && (N = B.Routes.APPLICATION_STORE), (0, l.jsx)(K, {
                    selected: e,
                    user: f,
                    selectedChannelId: A.default.getChannelId(B.ME),
                    badge: E,
                    link: N,
                    showProgressBadge: t
                })
            }