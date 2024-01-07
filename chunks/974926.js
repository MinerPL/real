            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Z
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("913144"),
                u = s("850068"),
                c = s("583367"),
                S = s("54239"),
                E = s("775433"),
                f = s("308592"),
                m = s("245187"),
                T = s("866561"),
                _ = s("656142"),
                g = s("93731"),
                h = s("556738"),
                I = s("239380"),
                N = s("305961"),
                p = s("677099"),
                C = s("625634"),
                A = s("357957"),
                O = s("521012"),
                x = s("476263"),
                M = s("628398"),
                R = s("163466"),
                v = s("46829"),
                L = s("118503"),
                D = s("273293"),
                P = s("272339"),
                j = s("682344"),
                b = s("290581"),
                U = s("893596"),
                y = s("959097"),
                B = s("698015"),
                F = s("599110"),
                G = s("449008"),
                k = s("701909"),
                w = s("889285"),
                H = s("334811"),
                V = s("49111"),
                Y = s("782340"),
                W = s("368862");
            let K = () => [{
                    description: Y.default.Messages.PREMIUM_GUILD_USER_FEATURE_MEMBER_BADGE,
                    icon: L.default,
                    iconClass: W.memberBadgeIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE,
                    overrideIcon: e => (0, a.jsx)("div", {
                        className: i(e, W.profileBadgeIcon)
                    })
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_USER_FEATURE_ROLE,
                    icon: j.default,
                    iconClass: W.roleIcon
                }],
                z = () => [{
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_EMOJI,
                    icon: (0, v.default),
                    iconClass: W.emojiIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_STICKERS,
                    icon: (0, U.default),
                    iconClass: W.stickerIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_AUDIO_QUALITY,
                    icon: (0, P.default),
                    iconClass: W.audioQualityIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_UPLOAD_SIZE,
                    icon: (0, B.default),
                    iconClass: W.uploadSizeIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_CUSTOMIZATION,
                    icon: (0, b.default),
                    iconClass: W.customizationIcon
                }, {
                    description: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURE_THREADS,
                    icon: (0, y.default),
                    iconClass: W.threadIcon
                }].filter(G.isNotNullish);

            function Q(e) {
                let {
                    guildId: t
                } = e, s = (0, r.useStateFromStores)([N.default], () => N.default.getGuild(t));
                return null == s ? null : (0, a.jsx)(o.Clickable, {
                    onClick: function() {
                        (0, I.transitionToGuild)(t, {
                            state: {
                                shouldShowSubscribeTooltip: !0
                            }
                        }), (0, S.popLayer)()
                    },
                    className: W.cardWrapper,
                    children: (0, a.jsxs)(R.default, {
                        className: W.card,
                        children: [(0, a.jsx)(x.default, {
                            guild: s,
                            size: x.default.Sizes.LARGE,
                            "aria-hidden": !0
                        }), (0, a.jsxs)("div", {
                            className: W.guildInfo,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: W.guildName,
                                children: s.name
                            }), (0, a.jsxs)("div", {
                                className: W.subscriptionInfo,
                                children: [(0, a.jsx)(L.default, {
                                    className: W.guildBoostingIcon
                                }), (0, a.jsx)(o.Text, {
                                    className: W.subscriberCount,
                                    variant: "text-sm/normal",
                                    children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                        subscriberCount: s.premiumSubscriberCount
                                    })
                                })]
                            })]
                        }), (0, a.jsx)(M.default, {
                            guildId: s.id,
                            subscriberCount: s.premiumSubscriberCount
                        })]
                    })
                })
            }

            function q() {
                let e = (0, r.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()),
                    t = e.slice(0, V.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING),
                    s = (0, f.useSubscriptionPlansLoaded)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: W.divider
                    }), (0, a.jsxs)("div", {
                        className: W.marketingLogo,
                        children: [(0, a.jsx)(D.default, {
                            className: W.marketingLogoIcon
                        }), (0, a.jsx)("div", {
                            className: W.marketingLogoImage
                        })]
                    }), (0, a.jsx)(o.Text, {
                        tag: "p",
                        className: W.marketingHeader,
                        variant: "heading-lg/semibold",
                        children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_HEADER
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_BLURB
                    }), (0, a.jsx)(o.Heading, {
                        className: W.featureHeaderTop,
                        variant: "heading-lg/semibold",
                        color: "header-secondary",
                        children: Y.default.Messages.PREMIUM_GUILD_USER_FEATURES_HEADER
                    }), (0, a.jsx)(h.default, {
                        features: K(),
                        columns: 3
                    }), (0, a.jsx)(o.Heading, {
                        className: W.featureHeader,
                        variant: "heading-lg/semibold",
                        color: "header-secondary",
                        children: Y.default.Messages.PREMIUM_GUILD_GUILD_FEATURES_HEADER
                    }), (0, a.jsx)(h.default, {
                        features: z(),
                        columns: 3
                    }), (0, a.jsx)(o.Text, {
                        className: W.guildFullFeatures,
                        variant: "text-md/normal",
                        children: Y.default.Messages.PREMIUM_GUILD_FULL_FEATURE_LIST.format({
                            helpdeskArticle: k.default.getArticleURL(V.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
                        })
                    }), (0, a.jsxs)("section", {
                        className: W.guildsSection,
                        children: [s ? (0, a.jsx)(_.default, {
                            className: W.guildSubscriptionHeading
                        }) : null, 0 === t.length ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: W.emptyGuilds
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-lg/bold",
                                className: W.emptyGuildsTitle,
                                children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_GUILDS_EMPTY_DESCRIPTION_TITLE
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: W.emptyGuildsText,
                                children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_GUILDS_EMPTY_DESCRIPTION_TEXT
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: W.guildsBlurb,
                                children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_GUILDS_BLURB
                            }), (0, a.jsx)("div", {
                                className: W.guilds,
                                children: t.map(e => (0, a.jsx)(Q, {
                                    guildId: e
                                }, e))
                            })]
                        })]
                    }), (0, a.jsx)(T.default, {
                        onOpenPremiumClick: () => void F.default.track(V.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location: {
                                page: V.AnalyticsPages.USER_SETTINGS,
                                section: V.AnalyticsSections.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                object: V.AnalyticsObjects.BUTTON_CTA
                            }
                        })
                    })]
                })
            }

            function Z() {
                n.useEffect(() => {
                    d.default.wait(() => {
                        u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, E.fetchPremiumSubscriptionPlans)(null, null, V.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let {
                    hasFetchedSubscriptions: e,
                    premiumSubscription: t
                } = (0, r.useStateFromStoresObject)([O.default], () => ({
                    hasFetchedSubscriptions: O.default.hasFetchedSubscriptions(),
                    premiumSubscription: O.default.getPremiumTypeSubscription()
                })), s = (0, f.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([A.default], () => A.default.hasFetchedPaymentSources), S = (0, r.useStateFromStores)([C.default], () => C.default.boostSlots), T = !e || !s || !l, {
                    enabled: _
                } = H.default.useExperiment({
                    location: "8b5d23_1"
                }, {
                    autoTrackExposure: !T
                });
                return T ? (0, a.jsx)("div", {
                    className: i(W.container, W.loading),
                    children: (0, a.jsx)(o.Spinner, {})
                }) : (0, a.jsxs)("div", {
                    className: W.container,
                    children: [(0, a.jsx)("div", {
                        className: W.background
                    }), (0, a.jsx)("div", {
                        className: W.content,
                        children: _ ? (0, a.jsx)(w.default, {
                            premiumSubscription: t
                        }) : (0, a.jsx)(o.HeadingLevel, {
                            component: Object.keys(S).length > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.FormTitle, {
                                    tag: "h1",
                                    children: Y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE
                                }), (0, a.jsx)(m.BlockedPaymentsWarning, {}), (0, a.jsx)(g.default, {})]
                            }) : null,
                            children: (0, a.jsx)(q, {})
                        })
                    })]
                })
            }