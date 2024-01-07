            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return P
                }
            });
            var i = a("37983");
            a("884691");
            var t = a("414456"),
                r = a.n(t),
                s = a("446674"),
                u = a("77078"),
                m = a("206230"),
                l = a("85336"),
                c = a("659632"),
                o = a("78345"),
                d = a("160210"),
                L = a("992977"),
                C = a("646718"),
                T = a("782340"),
                f = a("721145");

            function P(e) {
                let {
                    currentStep: n,
                    className: a,
                    purchaseState: t,
                    premiumType: P,
                    useWinterTheme: S = !1,
                    onClose: h,
                    hideCloseButton: p,
                    showTrialBadge: M,
                    showDiscountBadge: A,
                    isGift: N,
                    giftRecipient: E
                } = e, x = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion), I = S ? o.PremiumHeaderThemes.WINTER : o.PremiumHeaderThemes.DEFAULT;
                return N && (0, c.shouldShowCustomGiftExperience)(E, !0, "PremiumSubscriptionModalHeader") && n !== l.Step.CONFIRM ? (0, i.jsxs)(u.ModalHeader, {
                    className: f.modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, i.jsx)("div", {
                        className: f.giftNitroInfo,
                        children: (0, i.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: (() => {
                                switch (n) {
                                    case l.Step.PLAN_SELECT:
                                        return P === C.PremiumTypes.TIER_0 ? T.default.Messages.GIFT_NITRO_TIER_0 : T.default.Messages.GIFT_NITRO_ACTION;
                                    case l.Step.ADD_PAYMENT_STEPS:
                                        return T.default.Messages.PAYMENT_METHOD_SELECTION;
                                    case l.Step.REVIEW:
                                        return T.default.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return T.default.Messages.GIFT_NITRO_ACTION
                                }
                            })()
                        })
                    }), (0, i.jsx)(u.ModalCloseButton, {
                        onClick: h,
                        className: f.closeButton
                    })]
                }) : (0, i.jsx)(u.ModalHeader, {
                    className: r(f.modalHeader, a),
                    separator: !1,
                    children: (0, i.jsx)(d.default, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: p,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: P,
                        renderAnimation: () => P === C.PremiumTypes.TIER_0 ? (0, i.jsx)(L.PremiumModalHeaderAnimationTier0, {
                            className: f.headerAnimation,
                            currentStep: n,
                            purchaseState: t,
                            pause: x
                        }) : P === C.PremiumTypes.TIER_1 ? (0, i.jsx)(L.PremiumModalHeaderAnimationTier1, {
                            className: f.headerAnimation,
                            currentStep: n,
                            purchaseState: t,
                            pause: x
                        }) : (0, i.jsx)(L.PremiumModalHeaderAnimationTier2, {
                            className: f.headerAnimation,
                            currentStep: n,
                            purchaseState: t,
                            pause: x
                        }),
                        plan: null,
                        isGift: !1,
                        className: f.header,
                        onClose: h,
                        headerTheme: I,
                        showTrialBadge: M,
                        showDiscountBadge: A
                    })
                })
            }