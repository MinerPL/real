            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("748820"),
                l = n("872717"),
                a = n("850068"),
                u = n("253981"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("149833"),
                m = n("523591"),
                p = n("153727"),
                S = n("650484"),
                E = n("49111"),
                P = n("646718");

            function _(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    browserCheckoutState: _,
                    browserCheckoutStateLoadId: I,
                    contextMetadata: C
                } = (0, d.usePaymentContext)(), {
                    isGift: h
                } = (0, o.useGiftContext)(), [x, T] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !x && (T(!0), (0, a.startBrowserCheckout)(C.loadId), ! function(e, t, n, i) {
                        let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            a = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        a.searchParams.append("handoff_key", o), a.searchParams.append("redirect_to", r), l.default.post({
                            url: E.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h, C.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, h, x, T, C, t]), r.useEffect(() => {
                    I === C.loadId && _ === m.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [_, I, C, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(p.default, {}), (0, i.jsx)(S.PaymentPortalBody, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(S.PaymentPortalFooter, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(c.Step.PLAN_SELECT)
                        })
                    })]
                })
            }