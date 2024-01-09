            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                l = s("65597"),
                i = s("77078"),
                u = s("521012"),
                o = s("701909"),
                d = s("394058"),
                c = s("641078"),
                _ = s("881155"),
                E = s("694540"),
                I = s("646718"),
                f = s("49111"),
                T = s("782340"),
                S = s("737047"),
                R = function(e) {
                    let {
                        isFullscreen: t
                    } = e, {
                        promotion: s
                    } = (0, E.useBogoPromotion)(), n = (0, l.default)([u.default], () => u.default.getPremiumTypeSubscription()), R = (0, c.useIsEligibleForBogoPromotion)();
                    if (!R) return null;
                    let p = new Date(s.endDate);
                    return (0, a.jsx)("div", {
                        className: r(S.banner, {
                            [S.bannerFullscreen]: t
                        }),
                        children: (0, a.jsxs)("div", {
                            className: S.bannerContent,
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)(i.Heading, {
                                    variant: "display-sm",
                                    color: "always-white",
                                    children: null == n ? T.default.Messages.BOGO_BUY_HEADLINE : T.default.Messages.BOGO_UPGRADE_HEADLINE
                                }), (0, a.jsx)(i.Text, {
                                    className: S.countdown,
                                    variant: "text-sm/medium",
                                    children: (0, a.jsx)(d.default, {
                                        endDate: p
                                    })
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: null == n ? T.default.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
                                        helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO)
                                    }) : T.default.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
                                        helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO)
                                    })
                                })]
                            }), (0, a.jsx)(_.default, {
                                buttonText: T.default.Messages.BOGO_CLAIM_OFFER,
                                buttonTextClassName: S.subscribeButtonText,
                                subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                                className: S.subscribeButton,
                                forceInverted: !0
                            })]
                        })
                    })
                }