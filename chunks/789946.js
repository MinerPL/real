            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
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
                    glowUp: N,
                    modalClassName: v,
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
                } = e, z = null != M, W = (0, _.usePremiumTrialOffer)(), Z = (0, f.usePremiumDiscountOffer)(), X = ((null == W ? void 0 : null === (t = W.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, f.discountOfferHasTier)(Z, H)) && !z, {
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
                let q = G ? s(S.artContainer, S.artContainerBoxShadow, x) : s(S.artContainer, x),
                    Q = null;
                return Q = "artURL" in Y ? (0, i.jsx)("img", {
                    className: S.art,
                    alt: "",
                    src: Y.artURL
                }) : Y.artElement, (0, i.jsxs)(a.ModalRoot, {
                    className: s(S.root, v),
                    "aria-label": C,
                    transitionState: b,
                    children: [(0, i.jsxs)("div", {
                        className: q,
                        children: [Q, B ? (0, i.jsx)("img", {
                            className: S.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), (0, i.jsx)(a.ModalContent, {
                        className: S.content,
                        children: k ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                            children: X ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(E.default, {
                                    onClose: D,
                                    type: O,
                                    subscriptionTier: null !== (l = null == W ? void 0 : null === (n = W.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : I.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: C,
                                    context: h,
                                    analyticsLocationObject: L,
                                    discountOffer: Z,
                                    trialOffer: W,
                                    children: N
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(a.Heading, {
                                    className: S.header,
                                    variant: "heading-xl/semibold",
                                    children: C
                                }), (0, i.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: s(A),
                                    children: U
                                })]
                            })
                        })
                    }), (0, i.jsxs)(a.ModalFooter, {
                        className: S.footer,
                        children: [(0, i.jsxs)("div", {
                            className: S.primaryActions,
                            children: [null != y ? (0, i.jsx)(a.Button, {
                                className: S.secondaryAction,
                                onClick: j,
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                children: y
                            }) : null, (() => {
                                let e, t;
                                if (z) return (0, i.jsx)(d.default, {
                                    analyticsLocation: L,
                                    guild: M.guild,
                                    onClose: D
                                });
                                if (X) {
                                    if (null != W) {
                                        var n, r;
                                        e = (0, m.formatTrialCtaIntervalDuration)({
                                            intervalType: null == W ? void 0 : null === (n = W.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == W ? void 0 : null === (r = W.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                        }), t = null == W ? void 0 : W.trial_id
                                    } else null != Z && (e = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: Z.discount.amount
                                    }))
                                }
                                return (0, i.jsx)(T.default, {
                                    premiumModalAnalyticsLocation: L,
                                    subscriptionTier: H,
                                    trialId: t,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == F || F(), D()
                                    },
                                    buttonText: null != w ? w : e
                                })
                            })()]
                        }), !K && (0, i.jsx)(a.Button, {
                            onClick: D,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: null != V ? V : P.default.Messages.BACK
                        })]
                    })]
                })
            }