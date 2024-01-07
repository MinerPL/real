            "use strict";
            s.r(t), s.d(t, {
                MarketingSections: function() {
                    return g
                },
                default: function() {
                    return f
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("759843"),
                l = s("77078"),
                i = s("428958"),
                r = s("205881"),
                o = s("724334"),
                d = s("756717"),
                u = s("395905"),
                c = s("219772"),
                E = s("222934"),
                _ = s("830388"),
                T = s("561496"),
                I = s("100072"),
                S = s("396076"),
                N = s("97743");

            function g(e) {
                let {
                    onboardingMarketing: t,
                    onboardingMarketingError: s
                } = e, n = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.FormDivider, {
                            className: N.sectionDivider
                        }), t]
                    })
                }, i = (0, a.jsx)(n, {
                    children: (0, a.jsx)(T.default, {})
                }, S.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS), r = (0, a.jsx)(n, {
                    children: (0, a.jsx)(E.default, {})
                }, S.CreatorMonetizationOnboardingMarketingSection.BENEFITS);
                return null != s || (null == t ? void 0 : t.sections) == null ? (0, a.jsxs)(a.Fragment, {
                    children: [i, r]
                }) : (0, a.jsx)(a.Fragment, {
                    children: t.sections.map(e => {
                        switch (e.type) {
                            case S.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS:
                                return i;
                            case S.CreatorMonetizationOnboardingMarketingSection.BENEFITS:
                                return r;
                            case S.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS:
                                return (0, a.jsx)(n, {
                                    children: (0, a.jsx)(_.default, {
                                        highlightedCreators: e.creators
                                    })
                                }, S.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS)
                        }
                    })
                })
            }

            function f(e) {
                let {
                    guild: t
                } = e, s = (0, d.default)(t), {
                    eligibilityLoading: E,
                    eligibilityError: _,
                    eligibility: T
                } = s, S = (0, r.useCreatorMonetizationIneligibleReasons)(T), {
                    isLoading: f,
                    error: A,
                    creatorMonetizationOnboardingMarketing: L
                } = (0, o.default)(t.id);
                return ((0, i.default)({
                    type: n.ImpressionTypes.PANE,
                    name: n.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
                    properties: {
                        guild_id: t.id,
                        is_owner: s.isGuildOwner,
                        is_eligible: s.eligibleForMonetization,
                        ineligible_reasons: S
                    }
                }, {
                    disableTrack: null == t.id || null == T
                }), E || null == T || f) ? (0, a.jsx)(l.Spinner, {}) : T.actionRequired ? (0, a.jsx)(I.default, {
                    guild: t
                }) : null != _ ? (0, a.jsx)(u.default, {
                    children: _.message
                }) : (0, a.jsxs)("div", {
                    className: N.container,
                    children: [(0, a.jsx)(c.default, {
                        guild: t,
                        monetizationEligibility: s
                    }), (0, a.jsx)(g, {
                        onboardingMarketing: L,
                        onboardingMarketingError: A
                    })]
                })
            }