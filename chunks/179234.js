            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("759843"),
                l = s("77078"),
                i = s("428958"),
                r = s("724334"),
                o = s("191814"),
                d = s("223984"),
                u = s("264742"),
                c = s("459662"),
                E = s("782340"),
                _ = s("666118"),
                T = s("419143");

            function I(e) {
                let {
                    config: t
                } = e, {
                    noticeText: s,
                    ctaLabel: n,
                    ctaClickable: i,
                    onCtaClicked: r
                } = t;
                return (0, a.jsxs)("div", {
                    className: _.ctaContainer,
                    children: [(0, a.jsx)("img", {
                        className: _.heroBanner,
                        src: T,
                        alt: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
                    }), (0, a.jsxs)("div", {
                        className: _.ctaContent,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
                        }), (0, a.jsx)(o.default, {
                            size: 12
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
                        }), (0, a.jsx)(o.default, {
                            size: 24
                        }), (0, a.jsx)(u.default, {
                            className: _.waitlist,
                            color: d.MessageBlockColors.BROWN,
                            buttonPosition: u.WarningBlockButtonPosition.RIGHT,
                            notice: s,
                            ctaLabel: n,
                            ctaDisabled: !i,
                            ctaClassName: _.waitlistCtaButton,
                            onClick: r
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    guild: t,
                    config: s
                } = e, {
                    isLoading: o,
                    error: d,
                    creatorMonetizationOnboardingMarketing: u
                } = (0, r.default)(t.id);
                return ((0, i.default)({
                    type: n.ImpressionTypes.PANE,
                    name: n.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
                    properties: {
                        guild_id: t.id
                    }
                }), o) ? (0, a.jsx)(l.Spinner, {}) : (0, a.jsxs)("div", {
                    className: _.container,
                    children: [(0, a.jsx)(I, {
                        config: s
                    }), (0, a.jsx)(c.MarketingSections, {
                        onboardingMarketing: u,
                        onboardingMarketingError: d
                    })]
                })
            }