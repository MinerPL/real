(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59185"], {
        659291: function(e, _, a) {
            "use strict";
            a.r(_), a.d(_, {
                default: function() {
                    return H
                }
            }), a("424973"), a("222007");
            var s, R, t = a("37983"),
                l = a("884691"),
                N = a("917351"),
                E = a.n(N),
                n = a("775560"),
                o = a("77078"),
                S = a("510928"),
                T = a("476765"),
                u = a("258078"),
                C = a("599110"),
                i = a("719923"),
                r = a("646708"),
                O = a("49111"),
                d = a("782340"),
                I = a("468565");
            let U = () => {
                let e = E.shuffle([{
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_NO_LONGER_SUPPORT_DISCORD",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_NO_LONGER_SUPPORT_DISCORD
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_UNDERSTAND_NITRO",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_UNDERSTAND_NITRO
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_LIKE_MONTHLY_SUBS",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_LIKE_MONTHLY_SUBS
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_DIDNT_FEEL_WORTH",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_DIDNT_FEEL_WORTH
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_NEED_SPECIFIC_FEAT",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_NEED_SPECIFIC_FEAT
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_USE_DISCORD_OFTEN",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_DONT_USE_DISCORD_OFTEN
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_WANT_TO_SWITCH_TIERS",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_WANT_TO_SWITCH_TIERS
                }, {
                    value: "NITRO_CHURN_SURVEY_ANSWER_CHOICE_CANT_AFFORD",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_CHOICE_CANT_AFFORD
                }]);
                return e.push({
                    value: "NITRO_CHURN_SURVEY_ANSWER_OTHER",
                    name: d.default.Messages.NITRO_CHURN_SURVEY_ANSWER_OTHER
                }), e
            };
            (R = s || (s = {}))[R.SURVEY = 0] = "SURVEY", R[R.THANKS = 1] = "THANKS";
            var H = e => {
                let [_, a] = l.useState(), [s, R] = l.useState(""), [N, E] = l.useState(0), H = (0, n.useStableMemo)(U, []), c = "NITRO_CHURN_SURVEY_ANSWER_OTHER" === _, m = (0, T.useUID)(), M = null != e.premiumType ? (0, i.getPremiumTypeDisplayName)(e.premiumType) : null;
                return null === M ? null : (0, t.jsxs)(o.ModalRoot, {
                    "aria-labelledby": m,
                    size: o.ModalSize.DYNAMIC,
                    className: I.modal,
                    role: "dialog",
                    transitionState: e.transitionState,
                    children: [(0, t.jsx)(S.default, {
                        premiumType: e.premiumType,
                        onClose: e.onClose
                    }), (0, t.jsx)(o.ModalContent, {
                        children: (0, t.jsxs)(o.Slides, {
                            activeSlide: N,
                            width: 408,
                            children: [(0, t.jsxs)(o.Slide, {
                                id: 0,
                                children: [(0, t.jsx)(u.default, {
                                    strong: !0,
                                    id: m,
                                    size: u.default.Sizes.SIZE_24,
                                    className: I.title,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_TITLE.format({
                                        subscriptionName: M
                                    })
                                }), (0, t.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: I.subtitle,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_SUBTITLE.format({
                                        subscriptionName: M
                                    })
                                }), (0, t.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: I.question,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_QUESTION.format({
                                        subscriptionName: M
                                    })
                                }), null != H && (0, t.jsx)(o.RadioGroup, {
                                    size: o.RadioGroup.Sizes.SMALL,
                                    value: _,
                                    options: H,
                                    onChange: e => a(e.value)
                                }), c && (0, t.jsx)(o.TextInput, {
                                    autoFocus: !0,
                                    className: I.otherField,
                                    placeholder: d.default.Messages.NITRO_CHURN_SURVEY_OTHER_PLACEHOLDER,
                                    value: s,
                                    onChange: R
                                })]
                            }), (0, t.jsx)(o.Slide, {
                                id: 1,
                                children: (0, t.jsx)(r.ThankYouModalContent, {})
                            })]
                        })
                    }), 0 === N && (0, t.jsx)(o.ModalFooter, {
                        children: (0, t.jsx)("div", {
                            className: I.footer,
                            children: (0, t.jsx)(o.Button, {
                                disabled: null == _,
                                onClick: () => {
                                    C.default.track(O.AnalyticEvents.SURVEY_SUBMITTED, {
                                        survey_type: "Nitro Cancellation",
                                        question_1: "NITRO_CHURN_SURVEY_QUESTION",
                                        answer_1: c ? s : _,
                                        is_other_1: c
                                    }), E(1)
                                },
                                color: o.Button.Colors.BRAND,
                                children: d.default.Messages.SUBMIT
                            })
                        })
                    }), 1 === N && (0, t.jsx)(r.ThankYouModalFooter, {
                        onClose: e.onClose
                    })]
                })
            }
        },
        646708: function(e, _, a) {
            "use strict";
            a.r(_), a.d(_, {
                ThankYouModalContent: function() {
                    return N
                },
                ThankYouModalFooter: function() {
                    return E
                }
            });
            var s = a("37983");
            a("884691");
            var R = a("77078"),
                t = a("782340"),
                l = a("306611");

            function N() {
                return (0, s.jsxs)(R.ModalContent, {
                    children: [(0, s.jsx)(R.Text, {
                        className: l.title,
                        variant: "text-sm/semibold",
                        children: t.default.Messages.PREMIUM_SURVEY_THANK_YOU
                    }), (0, s.jsx)(R.Text, {
                        className: l.subtitle,
                        variant: "text-sm/normal",
                        children: t.default.Messages.PREMIUM_SURVEY_WE_APPRECIATE_IT
                    })]
                })
            }

            function E(e) {
                return (0, s.jsx)(R.ModalFooter, {
                    children: (0, s.jsx)("div", {
                        className: l.footer,
                        children: (0, s.jsx)(R.Button, {
                            onClick: () => {
                                e.onClose()
                            },
                            color: R.Button.Colors.BRAND,
                            children: t.default.Messages.PREMIUM_NO_PROBLEM
                        })
                    })
                })
            }
        }
    }
]);