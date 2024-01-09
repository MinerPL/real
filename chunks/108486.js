            "use strict";
            s.r(t), s.d(t, {
                SeasonalGiftIcon: function() {
                    return P
                },
                default: function() {
                    return R
                }
            }), s("222007"), s("424973");
            var o = s("37983"),
                i = s("884691"),
                l = s("907002"),
                n = s("249654"),
                C = s("446674"),
                a = s("151426"),
                r = s("819855"),
                d = s("77078"),
                u = s("373807"),
                c = s("841098"),
                f = s("812204"),
                p = s("685665"),
                x = s("10641"),
                h = s("384997"),
                j = s("649844"),
                F = s("53253"),
                m = s("977591"),
                L = s("778588"),
                M = s("697218"),
                b = s("551305"),
                E = s("978679"),
                _ = s("953957"),
                N = s("762974"),
                A = s("718517"),
                v = s("158998"),
                g = s("49111"),
                D = s("994428"),
                T = s("646718"),
                B = s("782340"),
                S = s("426068"),
                k = s("537461");
            let y = [{
                    box: "#FFD89E",
                    ribbon: "#FF7476"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#EED169",
                    ribbon: "#51A1EB"
                }, {
                    box: "#509C65",
                    ribbon: "#FFC96E"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                I = [{
                    box: "#EABB75",
                    ribbon: "#E4595C"
                }, {
                    box: "#2D7AA5",
                    ribbon: "#64C7C2"
                }, {
                    box: "#ECBF21",
                    ribbon: "#51A1EB"
                }, {
                    box: "#439359",
                    ribbon: "#D5A24C"
                }, {
                    box: "#FC90C4",
                    ribbon: "#777FCE"
                }, {
                    box: "#549DC6",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6F6F",
                    ribbon: "#81C29F"
                }],
                Z = 1 / 300,
                O = A.default.Millis.DAYS_30,
                G = (0, l.animated)(_.default),
                H = (0, l.animated)(N.default),
                w = (0, l.animated)(E.default);

            function P(e) {
                let {
                    themeOverride: t,
                    hovered: s,
                    isContentDismissed: n,
                    boxColors: C = {
                        dark: y,
                        light: I
                    }
                } = e, a = (0, c.default)(), [d, u] = function(e) {
                    let [t, s] = i.useState(!1), [o, l] = i.useState(Math.floor(7 * Math.random()));
                    return i.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= Z;
                        if (s(t), !t) {
                            let e;
                            do e = Math.floor(7 * Math.random()); while (e === o);
                            l(e)
                        }
                    }, [e]), [t, o]
                }(s), f = (0, l.useSpring)({
                    reverse: !s,
                    reset: !0,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 1.14
                    },
                    config: {
                        tension: 800,
                        friction: 24
                    }
                }), p = n ? u : 0, x = (0, r.isThemeDark)(null != t ? t : a) ? C.dark[p] : C.light[p];
                return !s && n ? (0, o.jsx)(w, {}) : n && d ? (0, o.jsx)(H, {
                    isDark: (0, r.isThemeDark)(a),
                    style: f
                }) : (0, o.jsx)(G, {
                    boxColor: x.box,
                    ribbonColor: x.ribbon,
                    style: f
                })
            }
            var R = i.memo(function(e) {
                let {
                    disabled: t,
                    channel: s
                } = e, {
                    analyticsLocations: l
                } = (0, p.default)(f.default.GIFT_BUTTON), [r, c] = i.useState(!1), E = (0, C.useStateFromStores)([L.default], () => !(null === L.default || void 0 === L.default ? void 0 : L.default.hasLayers())), _ = (0, C.useStateFromStores)([M.default], () => M.default.getCurrentUser()), N = null != _ ? n.default.age(_.id) : 0, A = !t && E && N >= O, {
                    enabled: y
                } = F.SeasonalGiftingMarketingExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: A
                }), I = [];
                y && A && I.push(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
                let [Z, G] = (0, h.useSelectedDismissibleContent)(I), H = null != Z, w = (0, v.useDirectMessageRecipient)(s), R = null != w, {
                    enabled: U
                } = m.ExpandedGiftingRevampExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: !1
                });
                if (t) return null;
                let V = () => {
                        (0, j.default)({
                            isGift: !0,
                            giftRecipient: null == w ? void 0 : w,
                            initialPlanId: null,
                            subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
                            analyticsLocations: l,
                            analyticsObject: {
                                page: s.isPrivate() ? g.AnalyticsPages.DM_CHANNEL : g.AnalyticsPages.GUILD_CHANNEL,
                                section: g.AnalyticsSections.CHANNEL_TEXT_AREA,
                                object: g.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                                objectType: g.AnalyticsObjectTypes.GIFT
                            }
                        })
                    },
                    K = (0, o.jsxs)("div", {
                        className: S.container,
                        onMouseEnter: () => {
                            !r && c(!0)
                        },
                        onMouseLeave: () => {
                            c(!1)
                        },
                        children: [H && (0, o.jsx)(u.default, {
                            onComplete: () => c(!1),
                            onDMCheckItOutClick: V,
                            markAsDismissed: G,
                            isDM: R
                        }), (0, o.jsx)(b.default, {
                            innerClassName: k.button,
                            "aria-label": B.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                            isActive: !1,
                            onClick: () => {
                                c(!1), (0, x.markDismissibleContentAsDismissed)(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                                    dismissAction: D.ContentDismissActionType.TAKE_ACTION
                                }), V()
                            },
                            children: (0, o.jsx)("div", {
                                className: S.noPointerEvents,
                                children: (0, o.jsx)(P, {
                                    hovered: r,
                                    isContentDismissed: !H
                                })
                            })
                        })]
                    });
                return H ? K : (0, o.jsx)(d.TooltipContainer, {
                    className: S.container,
                    text: (0, u.getSeasonalGiftingBody)(R, U),
                    children: K
                })
            })