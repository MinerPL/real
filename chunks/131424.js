            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("65597"),
                r = s("77078"),
                o = s("95039"),
                d = s("617917"),
                u = s("305961"),
                c = s("476263"),
                S = s("118503"),
                E = s("277703"),
                f = s("16988"),
                m = s("427459"),
                T = s("49111"),
                _ = s("782340"),
                g = s("396375");

            function h(e) {
                let {
                    className: t,
                    extraLongSparkle: s
                } = e, n = 48, i = 18;
                return s && (n = 61, i = 22), (0, a.jsx)("div", {
                    className: l(g.sideSparkleContainer, t),
                    style: {
                        height: n
                    },
                    children: (0, a.jsx)(f.default, {
                        className: l(g.sparkle, g.sideSparkle),
                        style: {
                            top: i
                        }
                    })
                })
            }
            var I = function(e) {
                let {
                    className: t,
                    guildId: s,
                    boostingVariant: n,
                    showSparkes: I
                } = e, N = (0, i.default)([u.default], () => u.default.getGuild(s), [s]);
                return null == N ? (0, a.jsx)("div", {
                    className: l(t, g.guildContainer),
                    children: (0, a.jsx)("div", {
                        className: g.guildInfoContainer,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-lg/bold",
                            children: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
                        })
                    })
                }) : (0, a.jsxs)("div", {
                    className: l(t, g.guildContainer),
                    children: [(0, a.jsx)(c.default, {
                        className: g.guildIcon,
                        guild: N,
                        size: c.default.Sizes.LARGER
                    }), (0, a.jsxs)("div", {
                        className: g.guildInfoContainer,
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-lg/bold",
                            children: N.name
                        }), (0, a.jsxs)("div", {
                            className: g.guildBoostStatsContainer,
                            children: [(0, a.jsx)(S.default, {
                                className: g.guildBoostBadge,
                                width: 16,
                                height: 16
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/bold",
                                color: "text-muted",
                                children: _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                                    subscriptions: N.premiumSubscriberCount
                                })
                            }), (0, a.jsx)("div", {
                                className: g.separator
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/bold",
                                color: "text-muted",
                                children: (0, m.getTierName)(N.premiumTier, {
                                    useLevels: !1
                                })
                            })]
                        })]
                    }), n ? (0, a.jsx)(d.default, {
                        guild: N,
                        analyticsLocation: {
                            page: T.AnalyticsPages.GUILD_BOOSTING_USER_SETTINGS,
                            section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                            object: T.AnalyticsObjects.BUTTON_CTA,
                            objectType: T.AnalyticsObjectTypes.BUY
                        },
                        pauseAnimation: !0,
                        size: r.Button.Sizes.MEDIUM,
                        color: r.Button.Colors.PRIMARY,
                        buttonText: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
                    }) : (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            (0, o.openGuildBoostingMarketingModal)({
                                guildId: N.id,
                                location: {
                                    section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
                                }
                            })
                        },
                        size: r.Button.Sizes.MEDIUM,
                        children: _.default.Messages.NAVIGATE_TO_GUILD
                    }), I && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(h, {
                            className: g.sparkle1
                        }), (0, a.jsx)(E.default, {
                            className: l(g.sparkle, g.sparkle2)
                        }), (0, a.jsx)(h, {
                            className: g.sparkle3,
                            extraLongSparkle: !0
                        }), (0, a.jsx)(f.default, {
                            className: l(g.sparkle, g.sparkle4)
                        })]
                    })]
                })
            }