            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                l = s("77078"),
                i = s("812204"),
                u = s("685665"),
                o = s("53253"),
                d = s("635956"),
                c = s("782340"),
                _ = s("903610"),
                E = s("35257"),
                I = s("871938"),
                T = e => {
                    let {
                        className: t
                    } = e, {
                        AnalyticsLocationProvider: s
                    } = (0, u.default)(i.default.PREMIUM_MARKETING_GIFT_SECTION), n = (0, o.useIsSeasonalGiftingActive)(), {
                        enabled: T
                    } = o.SeasonalGiftingMarketingExperiment.useExperiment({
                        location: "GiftNitro"
                    }, {
                        autoTrackExposure: n
                    }), f = T && n;
                    return (0, a.jsx)(s, {
                        children: (0, a.jsx)("div", {
                            className: r(_.container, t),
                            style: {
                                backgroundImage: "url(".concat(f ? I : E, ")")
                            },
                            children: (0, a.jsxs)("div", {
                                className: _.textContainer,
                                children: [(0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/extrabold",
                                    className: _.heading,
                                    children: f ? c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : c.default.Messages.GIFT_NITRO
                                }), (0, a.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    children: f ? c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                                }), (0, a.jsx)(d.default, {
                                    isGift: !0,
                                    className: _.giftCardButton,
                                    look: l.Button.Looks.OUTLINED,
                                    buttonText: c.default.Messages.GIFT_NITRO,
                                    buttonTextClassName: _.giftButtonCTA,
                                    color: l.Button.Colors.CUSTOM
                                })]
                            })
                        })
                    })
                }