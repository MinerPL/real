            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            }), s("222007");
            var a, l, n = s("37983"),
                i = s("884691"),
                C = s("77078"),
                _ = s("850068"),
                I = s("812204"),
                N = s("685665"),
                o = s("168973"),
                A = s("191814"),
                d = s("476765"),
                r = s("599110"),
                c = s("90592"),
                E = s("829805"),
                O = s("974"),
                S = s("49111"),
                u = s("782340"),
                T = s("306990");
            let L = e => {
                let [t, s] = i.useState(!1), [a, l] = i.useState(null), n = async t => {
                    try {
                        return s(!0), await _.cancelSubscription(t, e), !0
                    } catch (e) {
                        l(e)
                    } finally {
                        s(!1)
                    }
                };
                return {
                    cancelSubscription: n,
                    error: a,
                    submitting: t
                }
            };

            function P(e) {
                let {
                    transitionState: t,
                    application: s,
                    listing: a,
                    subscription: l,
                    guild: _,
                    onClose: P
                } = e, R = (0, d.useUID)(), {
                    analyticsLocations: U
                } = (0, N.default)(I.default.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
                    cancelSubscription: f,
                    error: p,
                    submitting: m
                } = L(U), [B, h] = i.useState(0), x = async () => {
                    let e = await f(l.id);
                    e && (o.default.disableApplicationSubscriptionCancellationSurvey ? P() : h(1))
                };
                i.useEffect(() => {
                    r.default.track(S.AnalyticEvents.CANCELLATION_FLOW_STARTED, {
                        location_stack: U
                    })
                }, [U]);
                let M = (0, c.isApplicationUserSubscription)(a.sku_flags);
                return (0, n.jsx)(C.ModalRoot, {
                    transitionState: t,
                    className: T.modal,
                    "aria-labelledby": R,
                    children: (0, n.jsxs)(C.Slides, {
                        activeSlide: B,
                        width: 440,
                        children: [(0, n.jsx)(C.Slide, {
                            id: 0,
                            children: (0, n.jsxs)("div", {
                                className: T.slideContainer,
                                children: [null != p ? (0, n.jsx)(C.FormErrorBlock, {
                                    children: p.message
                                }) : null, (0, n.jsxs)(C.ModalContent, {
                                    className: T.content,
                                    children: [(0, n.jsx)(A.default, {
                                        size: 16
                                    }), (0, n.jsxs)(E.ApplicationBenefitsModalContent, {
                                        children: [(0, n.jsx)(E.ApplicationBenefitsModalIcon, {
                                            application: s
                                        }), (0, n.jsx)(E.ApplicationBenefitsModalHeading, {
                                            id: R,
                                            children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({
                                                tier: a.name
                                            })
                                        }), (0, n.jsx)(E.ApplicationBenefitsModalDivider, {}), (0, n.jsx)(E.ApplicationBenefitsModalDescription, {
                                            title: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                                            description: M ? u.default.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                                                timestamp: l.currentPeriodEnd.getTime()
                                            }) : u.default.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                                                timestamp: l.currentPeriodEnd.getTime(),
                                                guildName: null == _ ? void 0 : _.name
                                            })
                                        }), (0, n.jsx)(E.ApplicationBenefitsModalBenefits, {
                                            benefits: a.sku_benefits.benefits
                                        })]
                                    })]
                                }), (0, n.jsxs)(C.ModalFooter, {
                                    className: T.footer,
                                    children: [(0, n.jsx)(C.Button, {
                                        color: C.Button.Colors.RED,
                                        onClick: x,
                                        submitting: m,
                                        children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
                                    }), (0, n.jsx)(C.Button, {
                                        look: C.Button.Looks.LINK,
                                        color: C.Button.Colors.PRIMARY,
                                        className: T.goBackButton,
                                        onClick: P,
                                        children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(C.Slide, {
                            id: 1,
                            children: (0, n.jsx)("div", {
                                className: T.slideContainer,
                                children: (0, n.jsx)(O.default, {
                                    application: s,
                                    subscriptionId: l.id,
                                    onClose: P
                                })
                            })
                        })]
                    })
                })
            }(l = a || (a = {}))[l.CANCEL = 0] = "CANCEL", l[l.SURVEY = 1] = "SURVEY"