            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("913144"),
                o = s("850068"),
                d = s("775433"),
                u = s("174727"),
                c = s("308592"),
                E = s("866561"),
                _ = s("656142"),
                T = s("566171"),
                I = s("417385"),
                S = s("735201"),
                N = s("555158"),
                g = s("599110"),
                f = s("427459"),
                A = s("701909"),
                L = s("900938"),
                m = s("49111"),
                C = s("782340"),
                O = s("434659");

            function h(e) {
                let {
                    endsAt: t,
                    appliedGuildBoostsToMaintain: s,
                    tierName: n
                } = e, {
                    days: l,
                    hours: i
                } = (0, u.default)(t);
                return s <= 0 ? null : (0, a.jsx)(a.Fragment, {
                    children: 0 === l && 0 === i ? C.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN_SOON.format({
                        tierName: n,
                        numPremiumSubscriptions: s
                    }) : C.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN.format({
                        days: l,
                        hours: i,
                        tierName: n,
                        numPremiumSubscriptions: s
                    })
                })
            }

            function R(e) {
                let {
                    appliedGuildBoosts: t,
                    guildId: s
                } = e, n = (0, f.getGracePeriodEndingDate)(t, s), l = (0, f.getTierName)((0, f.getGuildTierFromAppliedBoostCount)(t.length, s));
                if (null == n || null == l) return null;
                let i = (0, f.appliedGuildBoostsRequiredForPerks)(t, s);
                return (0, a.jsxs)(N.default, {
                    messageType: N.HelpMessageTypes.WARNING,
                    children: [(0, a.jsx)("div", {
                        className: O.guildBoostingGracePeriodTitle,
                        children: C.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_TITLE.format()
                    }), (0, a.jsx)(h, {
                        endsAt: n,
                        appliedGuildBoostsToMaintain: i,
                        tierName: l
                    })]
                })
            }
            let D = e => {
                let {
                    isAnimatedTo: t,
                    onSetRef: s,
                    subscriptionCount: n,
                    tier: l,
                    tiers: i,
                    tierIndex: r,
                    guildId: o
                } = e;
                return (0, a.jsx)(I.default, {
                    subscriptionCount: n,
                    tier: l,
                    onSetRef: s,
                    isAnimatedTo: t,
                    hasBottomMargin: r !== i.length - 1,
                    guildId: o
                }, l.tier)
            };

            function M() {
                n.useEffect(() => {
                    r.default.wait(() => {
                        (0, o.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)()
                    })
                }, []);
                let e = (0, l.useStateFromStores)([L.default], () => L.default.getGuild()),
                    t = (0, l.useStateFromStores)([S.default], () => null != e ? S.default.getAppliedGuildBoostsForGuild(e.id) : null),
                    s = (0, c.useSubscriptionPlansLoaded)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H1,
                            children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TITLE
                        }), null != t && null != e ? (0, a.jsx)(R, {
                            appliedGuildBoosts: t,
                            guildId: e.id
                        }) : null, (0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: O.titleBlurb,
                            children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_BLURB.format({
                                helpdeskArticle: A.default.getArticleURL(m.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
                            })
                        })]
                    }), (0, a.jsx)(T.default, {
                        tiers: (0, f.getTiers)(null != e && e.hasFeature(m.GuildFeatures.COMMUNITY) && e.maxStageVideoChannelUsers >= m.MAX_STAGE_VIDEO_USER_LIMIT_TIER01),
                        renderTier: D
                    }), (0, a.jsx)("div", {
                        className: O.divider
                    }), s ? (0, a.jsx)(_.default, {}) : null, s ? (0, a.jsx)(E.default, {
                        onOpenPremiumClick: () => void g.default.track(m.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location: {
                                page: m.AnalyticsPages.GUILD_SETTINGS,
                                section: m.AnalyticsSections.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                object: m.AnalyticsObjects.BUTTON_CTA
                            }
                        })
                    }) : null]
                })
            }