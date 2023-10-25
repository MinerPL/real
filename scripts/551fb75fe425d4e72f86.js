(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59185"], {
        659291: function(e, _, a) {
            "use strict";
            a.r(_), a.d(_, {
                default: function() {
                    return H
                }
            });
            var s, R, t = a("920040"),
                l = a("773670"),
                N = a("427964"),
                E = a.n(N),
                n = a("365444"),
                o = a("77078"),
                S = a("510928"),
                T = a("476765"),
                u = a("258078"),
                C = a("599110"),
                i = a("719923"),
                r = a("646708"),
                O = a("49111"),
                d = a("782340"),
                U = a("881085");
            let I = () => {
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
            (s = R || (R = {}))[s.SURVEY = 0] = "SURVEY", s[s.THANKS = 1] = "THANKS";
            var H = e => {
                let [_, a] = l.useState(), [s, N] = l.useState(""), [E, H] = l.useState(R.SURVEY), c = (0, n.useStableMemo)(I, []), A = "NITRO_CHURN_SURVEY_ANSWER_OTHER" === _, m = (0, T.useUID)(), M = null != e.premiumType ? (0, i.getPremiumTypeDisplayName)(e.premiumType) : null;
                return null === M ? null : (0, t.jsxs)(o.ModalRoot, {
                    "aria-labelledby": m,
                    size: o.ModalSize.DYNAMIC,
                    className: U.modal,
                    role: "dialog",
                    transitionState: e.transitionState,
                    children: [(0, t.jsx)(S.default, {
                        premiumType: e.premiumType,
                        onClose: e.onClose
                    }), (0, t.jsx)(o.ModalContent, {
                        children: (0, t.jsxs)(o.Slides, {
                            activeSlide: E,
                            width: 408,
                            children: [(0, t.jsxs)(o.Slide, {
                                id: R.SURVEY,
                                children: [(0, t.jsx)(u.default, {
                                    strong: !0,
                                    id: m,
                                    size: u.default.Sizes.SIZE_24,
                                    className: U.title,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_TITLE.format({
                                        subscriptionName: M
                                    })
                                }), (0, t.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: U.subtitle,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_SUBTITLE.format({
                                        subscriptionName: M
                                    })
                                }), (0, t.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: U.question,
                                    children: d.default.Messages.NITRO_CHURN_SURVEY_QUESTION.format({
                                        subscriptionName: M
                                    })
                                }), null != c && (0, t.jsx)(o.RadioGroup, {
                                    size: o.RadioGroup.Sizes.SMALL,
                                    value: _,
                                    options: c,
                                    onChange: e => a(e.value)
                                }), A && (0, t.jsx)(o.TextInput, {
                                    autoFocus: !0,
                                    className: U.otherField,
                                    placeholder: d.default.Messages.NITRO_CHURN_SURVEY_OTHER_PLACEHOLDER,
                                    value: s,
                                    onChange: N
                                })]
                            }), (0, t.jsx)(o.Slide, {
                                id: R.THANKS,
                                children: (0, t.jsx)(r.ThankYouModalContent, {})
                            })]
                        })
                    }), E === R.SURVEY && (0, t.jsx)(o.ModalFooter, {
                        children: (0, t.jsx)("div", {
                            className: U.footer,
                            children: (0, t.jsx)(o.Button, {
                                disabled: null == _,
                                onClick: () => {
                                    C.default.track(O.AnalyticEvents.SURVEY_SUBMITTED, {
                                        survey_type: "Nitro Cancellation",
                                        question_1: "NITRO_CHURN_SURVEY_QUESTION",
                                        answer_1: A ? s : _,
                                        is_other_1: A
                                    }), H(R.THANKS)
                                },
                                color: o.Button.Colors.BRAND,
                                children: d.default.Messages.SUBMIT
                            })
                        })
                    }), E === R.THANKS && (0, t.jsx)(r.ThankYouModalFooter, {
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
            var s = a("920040");
            a("773670");
            var R = a("77078"),
                t = a("782340"),
                l = a("173095");

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