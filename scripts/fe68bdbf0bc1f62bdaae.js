(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77414"], {
        282941: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            });
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
                E = s("90592"),
                c = s("829805"),
                S = s("974"),
                O = s("49111"),
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
                    subscription: _,
                    guild: P,
                    onClose: R
                } = e, U = (0, d.useUID)(), {
                    analyticsLocations: f
                } = (0, N.default)(I.default.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
                    cancelSubscription: p,
                    error: m,
                    submitting: B
                } = L(f), [h, x] = i.useState(l.CANCEL), M = async () => {
                    let e = await p(_.id);
                    e && (o.default.disableApplicationSubscriptionCancellationSurvey ? R() : x(l.SURVEY))
                };
                i.useEffect(() => {
                    r.default.track(O.AnalyticEvents.CANCELLATION_FLOW_STARTED, {
                        location_stack: f
                    })
                }, [f]);
                let j = (0, E.isApplicationUserSubscription)(a.sku_flags);
                return (0, n.jsx)(C.ModalRoot, {
                    transitionState: t,
                    className: T.modal,
                    "aria-labelledby": U,
                    children: (0, n.jsxs)(C.Slides, {
                        activeSlide: h,
                        width: 440,
                        children: [(0, n.jsx)(C.Slide, {
                            id: l.CANCEL,
                            children: (0, n.jsxs)("div", {
                                className: T.slideContainer,
                                children: [null != m ? (0, n.jsx)(C.FormErrorBlock, {
                                    children: m.message
                                }) : null, (0, n.jsxs)(C.ModalContent, {
                                    className: T.content,
                                    children: [(0, n.jsx)(A.default, {
                                        size: 16
                                    }), (0, n.jsxs)(c.ApplicationBenefitsModalContent, {
                                        children: [(0, n.jsx)(c.ApplicationBenefitsModalIcon, {
                                            application: s
                                        }), (0, n.jsx)(c.ApplicationBenefitsModalHeading, {
                                            id: U,
                                            children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({
                                                tier: a.name
                                            })
                                        }), (0, n.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, n.jsx)(c.ApplicationBenefitsModalDescription, {
                                            title: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                                            description: j ? u.default.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                                                timestamp: _.currentPeriodEnd.getTime()
                                            }) : u.default.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                                                timestamp: _.currentPeriodEnd.getTime(),
                                                guildName: null == P ? void 0 : P.name
                                            })
                                        }), (0, n.jsx)(c.ApplicationBenefitsModalBenefits, {
                                            benefits: a.sku_benefits.benefits
                                        })]
                                    })]
                                }), (0, n.jsxs)(C.ModalFooter, {
                                    className: T.footer,
                                    children: [(0, n.jsx)(C.Button, {
                                        color: C.Button.Colors.RED,
                                        onClick: M,
                                        submitting: B,
                                        children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
                                    }), (0, n.jsx)(C.Button, {
                                        look: C.Button.Looks.LINK,
                                        color: C.Button.Colors.PRIMARY,
                                        className: T.goBackButton,
                                        onClick: R,
                                        children: u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(C.Slide, {
                            id: l.SURVEY,
                            children: (0, n.jsx)("div", {
                                className: T.slideContainer,
                                children: (0, n.jsx)(S.default, {
                                    application: s,
                                    subscriptionId: _.id,
                                    onClose: R
                                })
                            })
                        })]
                    })
                })
            }(a = l || (l = {}))[a.CANCEL = 0] = "CANCEL", a[a.SURVEY = 1] = "SURVEY"
        },
        974: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("77078"),
                i = s("452804"),
                C = s("191814"),
                _ = s("599110"),
                I = s("49111"),
                N = s("782340"),
                o = s("606351");
            let A = [{
                value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
                nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
            }, {
                value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
                nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
            }, {
                value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
                nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
            }, {
                value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
                nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
            }, {
                value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
                nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
            }];

            function d(e) {
                let {
                    application: t,
                    subscriptionId: s,
                    onClose: d
                } = e, [r, E] = l.useState(!1), [c, S] = l.useState(null), [O, u] = l.useState(""), T = l.useCallback(() => {
                    null != c && (_.default.track(I.AnalyticEvents.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                        answer: c,
                        application_id: t.id,
                        reason: O,
                        subscription_id: s
                    }), d())
                }, [t.id, s, c, d, O]);
                return l.useEffect(() => {
                    i.default.updatedUnsyncedSettings({
                        disableApplicationSubscriptionCancellationSurvey: r
                    })
                }, [r]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n.ModalHeader, {
                        className: o.headerContainer,
                        separator: !1,
                        children: [(0, a.jsxs)("div", {
                            className: o.titleContainer,
                            children: [(0, a.jsx)(n.Text, {
                                className: o.headerTitle,
                                variant: "text-lg/semibold",
                                children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
                            }), (0, a.jsx)(n.ModalCloseButton, {
                                className: o.modalCloseButton,
                                onClick: d
                            })]
                        }), (0, a.jsx)(C.default, {
                            size: 8
                        }), (0, a.jsx)(n.Text, {
                            className: o.headerSubtitle,
                            variant: "text-md/medium",
                            children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
                        })]
                    }), (0, a.jsxs)(n.ModalContent, {
                        children: [(0, a.jsx)("div", {
                            className: o.answerChoicesContainer,
                            children: (0, a.jsx)(n.RadioGroup, {
                                value: c,
                                options: A.map(e => {
                                    let {
                                        nameGetter: t,
                                        value: s
                                    } = e;
                                    return {
                                        name: t(),
                                        value: s
                                    }
                                }),
                                onChange: e => S(e.value),
                                withTransparentBackground: !0
                            })
                        }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === c && (0, a.jsx)(n.TextInput, {
                            autoFocus: !0,
                            className: o.otherField,
                            placeholder: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
                            value: O,
                            onChange: u
                        })]
                    }), (0, a.jsxs)(n.ModalFooter, {
                        className: o.footer,
                        children: [(0, a.jsx)(n.Button, {
                            onClick: T,
                            color: n.Button.Colors.BRAND,
                            disabled: null == c,
                            children: N.default.Messages.SUBMIT
                        }), (0, a.jsx)(n.Checkbox, {
                            type: n.Checkbox.Types.INVERTED,
                            value: r,
                            onChange: (e, t) => E(t),
                            size: 20,
                            className: o.checkbox,
                            children: (0, a.jsx)(n.Text, {
                                variant: "text-sm/medium",
                                children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
                            })
                        })]
                    })]
                })
            }
        }
    }
]);