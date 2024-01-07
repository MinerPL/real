            "use strict";
            s.r(t), s.d(t, {
                ELIGIBILITY_MODAL_KEY: function() {
                    return T
                },
                default: function() {
                    return g
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("670618"),
                r = s("191814"),
                o = s("423487"),
                d = s("395905"),
                u = s("600471"),
                c = s("782340"),
                E = s("134357"),
                _ = s("419143");
            let T = "role_subscriptions_eligibility_modal";

            function I(e) {
                let {
                    guild: t,
                    eligibility: n,
                    eligibilityLoading: i,
                    eligibilityError: r,
                    refreshEligibility: d
                } = e;
                return (0, a.jsxs)(l.Button, {
                    color: l.ButtonColors.CUSTOM,
                    className: E.ineligibleButton,
                    innerClassName: E.ineligibleButtonContent,
                    grow: !0,
                    onClick: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("702053").then(s.bind(s, "702053"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                eligibility: n,
                                eligibilityLoading: i,
                                eligibilityError: r,
                                refreshEligibility: d,
                                guildId: t.id
                            })
                        }, {
                            modalKey: T
                        })
                    },
                    size: l.Button.Sizes.LARGE,
                    children: [(0, a.jsx)(o.default, {
                        height: 16,
                        width: 16
                    }), c.default.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA]
                })
            }

            function S(e) {
                let {
                    guild: t,
                    checkboxText: s
                } = e, {
                    canSubmitAcceptance: o,
                    error: u,
                    loading: _,
                    submitAcceptTermsRequest: T
                } = (0, i.default)(t.id), [I, S] = n.useState(!1);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Checkbox, {
                        onChange: function() {
                            S(e => !e)
                        },
                        size: 20,
                        type: l.Checkbox.Types.INVERTED,
                        value: I,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: s
                        })
                    }), (0, a.jsx)(r.default, {
                        size: 24
                    }), (0, a.jsx)(l.Button, {
                        className: E.ctaButton,
                        disabled: !I || !o,
                        grow: !0,
                        onClick: T,
                        size: l.Button.Sizes.LARGE,
                        submitting: _,
                        children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
                    }), null != u && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.default, {
                            size: 24
                        }), (0, a.jsx)(d.default, {
                            children: u.getAnyErrorMessage()
                        })]
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    monetizationEligibility: s
                } = e, {
                    eligibilityLoading: n,
                    eligibilityError: l,
                    refreshEligibility: i,
                    eligibility: r,
                    eligibleForMonetization: o,
                    acceptTermsCheckboxText: d,
                    wasRejectedInV1: c
                } = s;
                return o ? c ? (0, a.jsx)(u.default, {
                    ...s
                }) : (0, a.jsx)(S, {
                    guild: t,
                    checkboxText: d
                }) : (0, a.jsx)(I, {
                    guild: t,
                    eligibility: r,
                    eligibilityLoading: n,
                    eligibilityError: l,
                    refreshEligibility: i
                })
            }

            function g(e) {
                let {
                    guild: t,
                    monetizationEligibility: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: E.ctaContainer,
                    children: [(0, a.jsx)("img", {
                        className: E.heroBanner,
                        src: _,
                        alt: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
                    }), (0, a.jsxs)("div", {
                        className: E.ctaContent,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
                        }), (0, a.jsx)(r.default, {
                            size: 12
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
                        }), (0, a.jsx)(r.default, {
                            size: 24
                        }), (0, a.jsx)(N, {
                            guild: t,
                            monetizationEligibility: s
                        })]
                    })]
                })
            }