            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                u = n("884691"),
                i = n("41092"),
                l = n("414456"),
                a = n.n(l),
                o = n("862337"),
                s = n("77078"),
                c = n("812952"),
                d = n("448993"),
                _ = n("736978"),
                E = n("642906"),
                f = n("85336");
            n("153727"), n("650484");
            var T = n("454589"),
                S = n("978679"),
                A = n("745279"),
                p = n("49111"),
                I = n("782340"),
                R = n("129429");
            let C = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

            function N(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: l,
                    paymentError: N,
                    header: P,
                    footer: O,
                    isGift: U = !1,
                    giftMessage: h = I.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: L = !1,
                    isLoading: m = !1,
                    purchaseError: M,
                    purchaseErrorBlockRef: D,
                    planError: v,
                    onScroll: y,
                    scrollerClassName: g,
                    hasCurrencies: G = !1
                } = e, B = null;
                null != N && null == (0, f.errorToStep)(N) ? B = N : null != M ? B = M : null != v && (B = v);
                let b = null != B ? B.message : "";
                null != B && B instanceof d.BillingError && (B.code === _.ErrorCodes.CARD_DECLINED && G && (b += " ".concat(I.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === _.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = I.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === p.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = I.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: x
                } = (0, E.usePaymentContext)();
                m = m || null == x;
                let H = u.useRef(new o.Timeout);
                u.useEffect(() => {
                    let e = H.current;
                    return null != x || e.isStarted() ? null != x && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, A.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [x]);
                let F = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(i.Elements, {
                    options: p.StripeElementsOptions,
                    stripe: x,
                    children: [P, (0, r.jsxs)("div", {
                        className: a("paymentModalContent", R.content),
                        children: [U && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
                            className: R.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: S.default,
                            color: null == h ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: h
                        }) : null, L ? null : (0, r.jsx)("div", {
                            className: R.breadcrumbsWrapper,
                            children: (0, r.jsx)(T.default, {
                                activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? F : n,
                                breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !C.has(e)).map(e => ({
                                    id: e,
                                    label: (0, f.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: R.bodyWrapper,
                            children: [null == B ? null : (0, r.jsx)("div", {
                                className: R.errorBlockWrapper,
                                children: (0, r.jsx)(s.FormErrorBlock, {
                                    ref: D,
                                    children: b
                                })
                            }), m ? (0, r.jsx)(s.Spinner, {
                                className: R.loadingBlock
                            }) : (0, r.jsx)(s.Sequencer, {
                                className: R.sequencer,
                                staticClassName: R.sequencerStatic,
                                animatedNodeClassName: R.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(s.AdvancedScrollerThin, {
                                    onScroll: y,
                                    className: a(R.scroller, g),
                                    children: l
                                })
                            })]
                        })]
                    }), O]
                })
            }