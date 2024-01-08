            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return W
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("748820"),
                i = s("86758"),
                r = s("446674"),
                o = s("872717"),
                d = s("151426"),
                u = s("669491"),
                c = s("77078"),
                E = s("655772"),
                _ = s("10641"),
                T = s("597517"),
                I = s("915639"),
                S = s("525065"),
                N = s("305961"),
                g = s("37785"),
                f = s("68238"),
                A = s("956089"),
                L = s("599110"),
                m = s("199938"),
                C = s("592407"),
                O = s("738216"),
                h = s("692541"),
                R = s("900938"),
                D = s("49111"),
                M = s("994428"),
                G = s("533613"),
                x = s("782340"),
                p = s("383353"),
                U = s("330808"),
                v = s("424596"),
                j = s("284776"),
                P = s("101332"),
                y = s("831153"),
                b = s("432392"),
                B = s("933861"),
                F = s("877026"),
                H = s("775113");
            let V = function(e, t, s) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        n = null;
                    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (n = x.default.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : n = x.default.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({
                        percentage: (0, i.truncateAndLocalizeNumber)(Math.abs(t), s)
                    }), {
                        localizedNumber: null != e ? "".concat((0, i.truncateAndLocalizeNumber)(e, s)).concat(a ? "%" : "") : x.default.Messages.NOT_AVAILABLE,
                        subtext: n,
                        isTrendingUp: t > 0,
                        isTrendingDown: t < 0
                    }
                },
                w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t || e === D.AbortCodes.NOT_ENOUGH_GUILD_MEMBERS ? (0, a.jsx)(c.FormErrorBlock, {
                        icon: f.default,
                        className: p.notEnoughMembersError,
                        backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
                        children: x.default.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
                    }) : null == e ? null : (0, a.jsx)(c.FormErrorBlock, {
                        backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
                        children: x.default.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
                    })
                };

            function k(e) {
                L.default.track(D.AnalyticEvents.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
                    guild_id: e
                });
                let t = null == e ? D.RelativeMarketingURLs.DEVELOPER_PORTAL : D.RelativeMarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                    s = (0, l.v4)();
                return o.default.post({
                    url: D.Endpoints.HANDOFF,
                    body: {
                        key: s
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let a = e.body.handoff_token;
                    window.open(D.MarketingURLs.DEVELOPER_PORTAL_LOGIN_HANDOFF(s, a, t))
                }, () => {
                    window.open(t)
                })
            }
            let Y = () => {
                let [e, t] = n.useState(!1), s = (0, r.useStateFromStores)([R.default], () => R.default.getGuildId());
                return (0, a.jsx)(c.Button, {
                    className: p.developerPortalCta,
                    onClick: () => {
                        t(!0), k(s).then(() => {
                            t(!1)
                        })
                    },
                    submitting: e,
                    children: x.default.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
                })
            };

            function K(e) {
                let {
                    guildId: t
                } = e, {
                    hasAccessRate: s,
                    accessRate: l
                } = (0, r.useStateFromStoresObject)([h.default], () => h.default.getMemberInsights(t)), i = (0, r.useStateFromStores)([S.default], () => {
                    var e;
                    return null !== (e = S.default.getMemberCount()) && void 0 !== e ? e : 0
                }), {
                    showAccessRate: o
                } = (0, m.useGuildAccessRateInsightExperiment)(t, !s);
                if (n.useEffect(() => {
                        o && ((0, _.requestMarkDismissibleContentAsShown)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW, {
                            dismissAction: M.ContentDismissActionType.AUTO
                        }))
                    }, [o]), !o || !s || null == l) return null;
                let E = 10 * Math.ceil((1 - l) * 10),
                    T = H,
                    I = null,
                    N = null;
                return l >= .9 ? (T = H, I = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
                    ratingHook: (e, t) => (0, a.jsx)("span", {
                        className: p.ratingVeryGood,
                        children: e
                    }, t)
                }), N = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({
                    accessRate: 10
                })) : l >= (i > 1e4 ? .7 : .8) ? (T = B, I = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
                    ratingHook: (e, t) => (0, a.jsx)("span", {
                        className: p.ratingGood,
                        children: e
                    }, t)
                }), N = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
                    accessRate: E
                })) : l >= .5 ? (T = F, I = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
                    ratingHook: (e, t) => (0, a.jsx)("span", {
                        className: p.ratingNeutral,
                        children: e
                    }, t)
                }), N = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
                    accessRate: E
                })) : (T = b, I = x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
                    ratingHook: (e, t) => (0, a.jsx)("span", {
                        className: p.ratingBad,
                        children: e
                    }, t)
                }), N = 100 === E ? x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
                    accessRate: E
                }) : x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({
                    accessRate: E
                })), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        className: p.insightsTitle,
                        children: [x.default.Messages.MEMBER_INSIGHTS_SERVER_ACCESS, (0, a.jsx)(A.TextBadge, {
                            text: x.default.Messages.BETA,
                            color: u.default.unsafe_rawColors.BRAND_500.css,
                            className: p.betaTag
                        })]
                    }), (0, a.jsxs)("div", {
                        className: p.memberInsightsContainer,
                        children: [(0, a.jsxs)("div", {
                            className: p.insightsHeader,
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                className: p.insightsIcon,
                                src: T
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    className: p.title,
                                    children: I
                                }), (0, a.jsxs)(c.Text, {
                                    className: p.description,
                                    variant: "text-sm/normal",
                                    children: [N, (0, a.jsx)(c.TooltipContainer, {
                                        text: x.default.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
                                        className: p.insightsTooltip,
                                        children: (0, a.jsx)(f.default, {
                                            className: p.insightsTooltipIcon
                                        })
                                    })]
                                })]
                            })]
                        }), l < .9 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: p.divider
                            }), (0, a.jsx)(c.Text, {
                                className: p.tips,
                                variant: "text-sm/semibold",
                                children: x.default.Messages.MEMBER_INSIGHTS_TIPS.format()
                            }), (0, a.jsxs)("div", {
                                className: p.insightsActions,
                                children: [(0, a.jsxs)("div", {
                                    className: p.insightAction,
                                    children: [(0, a.jsx)("img", {
                                        alt: "",
                                        className: p.actionIcon,
                                        src: j
                                    }), (0, a.jsx)(c.Text, {
                                        className: p.actionText,
                                        variant: "text-sm/normal",
                                        children: x.default.Messages.ACCESS_RATE_ACTION_SIMPLIFY
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: p.dividerInline
                                }), (0, a.jsxs)("div", {
                                    className: p.insightAction,
                                    children: [(0, a.jsx)("img", {
                                        alt: "",
                                        className: p.actionIcon,
                                        src: P
                                    }), (0, a.jsx)(c.Text, {
                                        className: p.actionText,
                                        variant: "text-sm/normal",
                                        children: x.default.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: p.dividerInline
                                }), (0, a.jsxs)("div", {
                                    className: p.insightAction,
                                    children: [(0, a.jsx)("img", {
                                        alt: "",
                                        className: p.actionIcon,
                                        src: v
                                    }), (0, a.jsx)(c.Text, {
                                        className: p.actionText,
                                        variant: "text-sm/normal",
                                        children: x.default.Messages.ACCESS_RATE_ACTION_BOTS.format({
                                            integrationsHook: (e, t) => (0, a.jsx)(g.default, {
                                                onClick: () => C.default.setSection(D.GuildSettingsSections.INTEGRATIONS),
                                                className: p.link,
                                                children: e
                                            }, t)
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: p.dividerInline
                                }), (0, a.jsxs)("div", {
                                    className: p.insightAction,
                                    children: [(0, a.jsx)("img", {
                                        alt: "",
                                        className: p.actionIcon,
                                        src: U
                                    }), (0, a.jsx)(c.Text, {
                                        className: p.actionText,
                                        variant: "text-sm/normal",
                                        children: x.default.Messages.ACCESS_RATE_ACTION_AUDIT
                                    })]
                                })]
                            })]
                        }) : (0, a.jsx)("div", {
                            className: p.insightsActions,
                            children: (0, a.jsxs)("div", {
                                className: p.insightAction,
                                children: [(0, a.jsx)("img", {
                                    alt: "",
                                    className: p.actionIcon,
                                    src: y
                                }), (0, a.jsx)(c.Text, {
                                    className: p.actionText,
                                    variant: "text-sm/normal",
                                    children: x.default.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
                                        insightsHook: (e, s) => (0, a.jsx)(g.default, {
                                            onClick: () => k(t),
                                            className: p.link,
                                            children: e
                                        }, s)
                                    })
                                })]
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: p.divider
                    }), (0, a.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        className: p.insightsTitle,
                        children: x.default.Messages.SERVER_INSIGHTS
                    })]
                })
            }
            var W = () => {
                let e = (0, r.useStateFromStores)([R.default], () => R.default.getGuildId()),
                    t = (0, r.useStateFromStores)([S.default], () => S.default.getMemberCount(e)),
                    s = (0, r.useStateFromStores)([N.default], () => N.default.getGuild(e)),
                    l = (0, r.useStateFromStores)([I.default], () => I.default.locale),
                    {
                        analytics: i,
                        errorCode: o
                    } = (0, r.useStateFromStoresObject)([h.default], () => ({
                        analytics: null != e ? h.default.getOverviewAnalytics(e) : null,
                        errorCode: h.default.getError()
                    })),
                    d = null == t || null == s || null != t && t < 500 && null != s && !s.hasFeature(D.GuildFeatures.PARTNERED) && !s.hasFeature(D.GuildFeatures.VERIFIED);
                n.useEffect(() => {
                    null != e && !d && ((0, O.fetchEngagementOverview)(e), (0, O.fetchGrowthActivationOverview)(e), (0, O.fetchGrowthActivationRetention)(e))
                }, [e, d]), n.useEffect(() => {
                    (0, T.hideHotspot)(G.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
                }, []);
                let u = null != i ? (0, a.jsx)("div", {
                    className: p.guildAnalyticsOverviewWrapper,
                    children: (0, a.jsxs)("div", {
                        className: p.overviewData,
                        children: [(0, a.jsx)(E.default, {
                            title: x.default.Messages.WEEKLY_VISITORS,
                            tooltipText: x.default.Messages.VISITORS_INFO,
                            ...V(i.visitors, i.visitorsChange, l)
                        }), (0, a.jsx)(E.default, {
                            title: x.default.Messages.WEEKLY_COMMUNICATORS,
                            tooltipText: x.default.Messages.COMMUNICATORS_INFO,
                            ...V(i.communicators, i.communicatorsChange, l)
                        }), (0, a.jsx)(E.default, {
                            title: x.default.Messages.WEEKLY_NEW_MEMBERS,
                            ...V(i.newMembers, i.newMembersChange, l)
                        }), (0, a.jsx)(E.default, {
                            title: x.default.Messages.WEEKLY_NEW_MEMBER_RETENTION,
                            tooltipText: x.default.Messages.NEW_MEMBER_RETENTION_INFO,
                            ...V(i.pctRetained, i.pctRetainedChange, l, !0)
                        })]
                    })
                }) : null;
                return (0, a.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: x.default.Messages.SERVER_INSIGHTS,
                    children: [(0, a.jsx)(c.FormText, {
                        type: c.FormTextTypes.DESCRIPTION,
                        children: x.default.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
                    }), w(o, d), null != e ? (0, a.jsx)(K, {
                        guildId: e
                    }) : null, (0, a.jsxs)("div", {
                        className: p.developerPortalCtaWrapper,
                        children: [(0, a.jsx)("div", {
                            className: p.placeholderImage
                        }), (0, a.jsx)(c.Text, {
                            className: p.developerPortalCtaText,
                            variant: "text-sm/normal",
                            children: x.default.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
                        }), (0, a.jsx)(Y, {})]
                    }), u]
                })
            }