            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("812204"),
                u = n("685665"),
                d = n("617917"),
                c = n("599110"),
                m = n("719923"),
                f = n("154889"),
                _ = n("917247"),
                E = n("956597"),
                T = n("635956"),
                I = n("646718"),
                p = n("49111"),
                P = n("782340"),
                S = n("857513"),
                R = n("393828");

            function C(e) {
                var t, n, l;
                let {
                    title: C,
                    type: O,
                    guildBoostProps: M,
                    analyticsSource: g,
                    analyticsLocation: L,
                    body: U,
                    context: h,
                    glowUp: v,
                    modalClassName: N,
                    artContainerClassName: x,
                    bodyClassName: A,
                    transitionState: b,
                    onClose: D,
                    onSubscribeClick: F,
                    onSecondaryClick: j,
                    secondaryCTA: y,
                    subscribeButtonText: w,
                    showNewBadge: B = !1,
                    enableArtBoxShadow: G = !0,
                    subscriptionTier: H = I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: k = !1,
                    hideBackButton: K,
                    backButtonText: V,
                    ...Y
                } = e, z = null != M, Z = (0, _.usePremiumTrialOffer)(), W = (0, f.usePremiumDiscountOffer)(), X = ((null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, f.discountOfferHasTier)(W, H)) && !z, {
                    analyticsLocations: J
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL);
                r.useEffect(() => {
                    !k && (z ? c.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(O, " - Tier ").concat(M.boostedGuildTier),
                        guild_id: M.guild.id,
                        channel_id: M.channelId,
                        location: L,
                        location_stack: J
                    }) : c.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: O,
                        source: g,
                        location_stack: J,
                        sku_id: H
                    }))
                }, [z, H, k]);
                let q = G ? a(S.artContainer, S.artContainerBoxShadow, x) : a(S.artContainer, x),
                    Q = null;
                return Q = "artURL" in Y ? (0, i.jsx)("img", {
                    className: S.art,
                    alt: "",
                    src: Y.artURL
                }) : Y.artElement, (0, i.jsxs)(s.ModalRoot, {
                    className: a(S.root, N),
                    "aria-label": C,
                    transitionState: b,
                    children: [(0, i.jsxs)("div", {
                        className: q,
                        children: [Q, B ? (0, i.jsx)("img", {
                            className: S.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), (0, i.jsx)(s.ModalContent, {
                        className: S.content,
                        children: k ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                            children: X ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(E.default, {
                                    onClose: D,
                                    type: O,
                                    subscriptionTier: null !== (l = null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : I.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: C,
                                    context: h,
                                    analyticsLocationObject: L,
                                    discountOffer: W,
                                    trialOffer: Z,
                                    children: v
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(s.Heading, {
                                    className: S.header,
                                    variant: "heading-xl/semibold",
                                    children: C
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: a(A),
                                    children: U
                                })]
                            })
                        })
                    }), (0, i.jsxs)(s.ModalFooter, {
                        className: S.footer,
                        children: [(0, i.jsxs)("div", {
                            className: S.primaryActions,
                            children: [null != y ? (0, i.jsx)(s.Button, {
                                className: S.secondaryAction,
                                onClick: j,
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: y
                            }) : null, (() => {
                                let e, t;
                                if (z) return (0, i.jsx)(d.default, {
                                    analyticsLocation: L,
                                    guild: M.guild,
                                    onClose: D
                                });
                                if (X) {
                                    if (null != Z) {
                                        var n, r;
                                        e = (0, m.formatTrialCtaIntervalDuration)({
                                            intervalType: null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == Z ? void 0 : null === (r = Z.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                        }), t = null == Z ? void 0 : Z.trial_id
                                    } else null != W && (e = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: W.discount.amount
                                    }))
                                }
                                return (0, i.jsx)(T.default, {
                                    premiumModalAnalyticsLocation: L,
                                    subscriptionTier: H,
                                    trialId: t,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == F || F(), D()
                                    },
                                    buttonText: null != w ? w : e
                                })
                            })()]
                        }), !K && (0, i.jsx)(s.Button, {
                            onClick: D,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != V ? V : P.default.Messages.BACK
                        })]
                    })]
                })
            }