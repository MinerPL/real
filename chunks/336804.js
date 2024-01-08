            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                u = n("617258"),
                o = n("446674"),
                d = n("669491"),
                c = n("769846"),
                f = n("77078"),
                h = n("997289"),
                p = n("685665"),
                m = n("506885"),
                E = n("697218"),
                C = n("216422"),
                S = n("956089"),
                g = n("980423"),
                _ = n("599110"),
                I = n("719923"),
                T = n("12307"),
                v = n("734488"),
                x = n("49111"),
                N = n("646718"),
                A = n("782340"),
                M = n("456802");
            let R = (0, u.cssValueToNumber)(c.default.LIVE_INDICATOR_BORDER_RADIUS),
                j = {
                    opacity: 0,
                    transform: "translate3d(100%, 0, 0)"
                },
                L = {
                    opacity: 1,
                    transform: "translate3d(0%, 0, 0)"
                },
                O = {
                    opacity: 0
                },
                y = {
                    opacity: 1
                },
                b = {
                    borderRadius: "".concat(R, "px ").concat(R, "px ").concat(R, "px ").concat(R, "px")
                },
                P = {
                    borderRadius: "0px ".concat(R, "px ").concat(R, "px 0px")
                },
                D = {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                },
                U = e => {
                    let t, s, {
                            participant: r,
                            isUpsellEnabled: u,
                            shape: c,
                            size: m,
                            didTrackUpsellViewed: R,
                            setDidTrackUpsellViewed: j,
                            className: L
                        } = e,
                        O = (0, T.getMaxQuality)(r),
                        {
                            analyticsLocations: y
                        } = (0, p.default)(),
                        b = null != (0, v.default)(r);
                    try {
                        t = (0, T.isPremiumFPS)(O)
                    } catch (e) {
                        t = !1
                    }
                    try {
                        s = (0, T.isPremiumResolution)(O)
                    } catch (e) {
                        s = !1
                    }
                    let P = t || s,
                        {
                            location: D
                        } = (0, h.useAnalyticsContext)(),
                        U = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
                        w = u && !I.default.isPremium(U, N.PremiumTypes.TIER_1) && !I.default.canStreamQuality(I.default.StreamQuality.MID, U),
                        F = l.useCallback(() => {
                            w && P && (0, f.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("754534").then(n.bind(n, "754534"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    analyticsSource: D
                                })
                            })
                        }, [w, P, D]);
                    if (l.useEffect(() => {
                            !R && P && (_.default.track(x.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                                type: N.PremiumUpsellTypes.STREAM_QUALITY_INDICATOR,
                                has_premium_stream_fps: t,
                                has_premium_stream_resolution: s,
                                location_stack: y
                            }), j(!0))
                        }, [t, s, P, R, j, y]), null == O) return null;
                    let k = (0, a.jsx)(f.Tooltip, {
                        text: b ? A.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : P ? A.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : A.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
                        position: "bottom",
                        color: f.Tooltip.Colors.GREY,
                        children: e => (0, a.jsxs)(f.Clickable, {
                            ...e,
                            onClick: F,
                            className: i(M.qualityIndicator, m, g.LiveIndicatorShapes[c], b ? M.qualityIndicatorLowQuality : M.qualityIndicatorFullQuality, {
                                [M.clickable]: w && P
                            }),
                            children: [P ? (0, a.jsx)(C.default, {
                                className: M.premiumStreamIcon
                            }) : null, (0, a.jsx)("span", {
                                className: M.qualityResolution,
                                children: (0, T.getResolutionText)(O.maxResolution)
                            }), (0, a.jsx)("span", {
                                children: (0, T.getFPSText)(O.maxFrameRate)
                            })]
                        })
                    });
                    return (0, a.jsx)(S.TextBadge, {
                        text: k,
                        className: i(L, M.qualityIndicatorBadge),
                        color: d.default.unsafe_rawColors.PRIMARY_500.css,
                        shape: c
                    })
                };
            var w = e => {
                let {
                    participant: t,
                    showQuality: n,
                    isUpsellEnabled: s = !0,
                    size: u,
                    className: o
                } = e, [d, c] = l.useState(!1), h = (0, T.getMaxQuality)(t), {
                    reducedMotion: p
                } = l.useContext(f.AccessibilityPreferencesContext), E = n && null != h;
                l.useEffect(() => {
                    (0, m.default)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
                        dispatchWait: !0
                    })
                }, [t]);
                let C = (0, r.useTransition)(E, {
                        enter: {
                            from: p.enabled ? O : j,
                            to: p.enabled ? y : L
                        },
                        leave: p.enabled ? O : j,
                        config: D
                    }),
                    _ = (0, r.useSpring)({
                        to: E ? P : b,
                        config: D
                    });
                return (e => {
                    let {
                        className: n,
                        popoutProps: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: i(M.streamQualityIndicator, n),
                        ...l,
                        children: [C((e, n) => n ? (0, a.jsx)(r.animated.div, {
                            style: e,
                            children: (0, a.jsx)(U, {
                                className: M.liveQualityIndicator,
                                participant: t,
                                size: u,
                                shape: S.BadgeShapes.ROUND_LEFT,
                                isUpsellEnabled: s,
                                didTrackUpsellViewed: d,
                                setDidTrackUpsellViewed: c
                            })
                        }) : null), (0, a.jsx)(r.animated.div, {
                            style: _,
                            className: M.liveIndicator,
                            children: (0, a.jsx)(g.default, {
                                look: g.LiveIndicatorLooks.RED,
                                size: u,
                                shape: E ? S.BadgeShapes.ROUND_RIGHT : S.BadgeShapes.ROUND
                            })
                        })]
                    })
                })({
                    className: o
                })
            }