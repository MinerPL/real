            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                s = n.n(l),
                a = n("252438"),
                u = n("834897"),
                o = n("206230"),
                c = n("90592"),
                d = n("333955"),
                f = n("547356"),
                I = n("526887"),
                _ = n("642906"),
                E = n("85336"),
                S = n("159149"),
                T = n("650484"),
                N = n("367767"),
                p = n("425480"),
                m = n("782340");

            function C(e) {
                let t, n, {
                        showBenefits: l,
                        application: C,
                        listing: h,
                        handleClose: P,
                        onSubscriptionConfirmation: L
                    } = e,
                    {
                        selectedPlan: A,
                        selectedSkuId: v,
                        step: R,
                        updatedSubscription: g,
                        readySlideId: O
                    } = (0, _.usePaymentContext)();
                s(null != A, "Expected plan to selected"), s(null != v, "Expected selectedSkuId"), s(null != R, "Step should be set");
                let M = (0, u.default)(p.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: U
                    } = i.useContext(I.ConfettiCannonContext),
                    x = () => {
                        P(), null == L || L()
                    },
                    D = O === E.Step.CONFIRM,
                    y = (0, c.isApplicationUserSubscription)(h.sku_flags),
                    B = i.useMemo(() => {
                        let e = 0,
                            t = 0;
                        for (let n of h.sku_benefits.benefits) n.ref_type === a.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === a.SKUBenefitTypes.INTANGIBLE && (t += 1);
                        let n = [];
                        return 0 !== e && n.push(m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                            commandCount: e
                        })), 0 !== t && n.push(m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                            benefitCount: t
                        })), n
                    }, [h]);
                return l ? M ? t = (0, r.jsx)(f.BenefitsConfirmationLite, {
                    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                        tierName: h.name
                    }),
                    subtitle: B.length > 0 ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                        benefits: new Intl.ListFormat(m.default.getLocale()).format(B)
                    }) : null,
                    onConfirm: x,
                    confirmCta: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                }) : (t = (0, r.jsx)(d.BenefitsConfirmation, {
                    listing: h,
                    application: C,
                    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                        tier: h.name
                    }),
                    subtitle: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                    description: y ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        applicationName: null == C ? void 0 : C.name
                    }) : m.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        tier: h.name
                    })
                }), n = (0, r.jsx)(S.default, {
                    onPrimary: x,
                    primaryCTA: S.CTAType.CONTINUE,
                    primaryText: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })) : t = M ? (0, r.jsx)(f.PurchaseConfirmationLite, {
                    listing: h,
                    onConfirm: x,
                    subscription: g
                }) : (0, r.jsx)(d.PurchaseConfirmation, {
                    listing: h,
                    onConfirm: x,
                    subscription: g
                }), i.useEffect(() => {
                    o.default.useReducedMotion && D && U(window.innerWidth / 2, window.innerHeight / 2)
                }, [U, D]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(T.PaymentPortalBody, {
                        children: [(0, r.jsx)(N.default, {}), t]
                    }), null != n && (0, r.jsx)(T.PaymentPortalFooter, {
                        children: n
                    })]
                })
            }