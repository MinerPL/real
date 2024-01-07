            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                s = n.n(r),
                l = n("819855"),
                a = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("635357"),
                f = n("642906"),
                m = n("85336"),
                p = n("176108"),
                S = n("782340"),
                E = n("943490");

            function P(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, u.default)(), {
                    activeSubscription: P,
                    selectedSkuId: _,
                    setSelectedPlanId: I,
                    startedPaymentFlowWithPaymentSourcesRef: C
                } = (0, f.usePaymentContext)(), {
                    isGift: h
                } = (0, c.useGiftContext)(), x = null != P ? (0, d.getPremiumPlanItem)(P) : null, T = null != x ? (0, d.getDisplayPremiumType)(x.planId) : null, g = null != x ? (0, d.getPremiumType)(x.planId) : null, y = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: h,
                    selectedSkuId: _,
                    startedPaymentFlowWithPaymentSources: C.current
                });
                return s(null != g, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: g,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: T
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(a.Button, {
                            onClick: () => {
                                if (y) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(_, P);
                                    I(e), t(m.Step.REVIEW)
                                } else t(m.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
                            onClick: n,
                            children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }