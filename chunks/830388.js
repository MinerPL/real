            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("430568"),
                o = s("545158"),
                d = s("20606"),
                u = s("813006"),
                c = s("476263"),
                E = s("191814"),
                _ = s("111462"),
                T = s("120856"),
                I = s("915675"),
                S = s("782340"),
                N = s("702864");

            function g(e) {
                let {
                    subscribers: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: N.guildSubscriberCount,
                    children: [(0, a.jsx)("div", {
                        className: N.subscriberCountValue,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: t
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.subscriberCountText,
                        children: [(0, a.jsx)(I.default, {
                            color: d.default.WHITE
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBSCRIBERS_LABEL
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    guildName: t,
                    guildIcon: s,
                    guildAvatarUrl: n,
                    subscriberCount: l
                } = e, r = new u.default({
                    name: t,
                    icon: s
                });
                return (0, a.jsxs)("div", {
                    className: N.guildCardHeader,
                    children: [(0, a.jsx)(c.default, {
                        className: N.guildCardHeaderAvatar,
                        iconSrc: n,
                        guild: r,
                        size: c.default.Sizes.LARGE
                    }), (0, a.jsxs)("div", {
                        className: N.guildCardHeaderTitle,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            children: t
                        }), null != l && (0, a.jsx)(g, {
                            subscribers: l
                        })]
                    })]
                })
            }

            function A(e) {
                let {
                    quote: t,
                    quoteAttribution: s,
                    quoteAttributionTitle: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: N.guildCardQuote,
                    children: [(0, a.jsx)(i.Text, {
                        variant: "text-lg/normal",
                        color: "interactive-active",
                        children: t
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "interactive-active",
                        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_QUOTE_ATTRIBUTION.format({
                            attributionName: s,
                            attributionTitle: null != n ? n : S.default.Messages.GUILD_OWNER
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    emojisToShow: t,
                    notShownEmojiCount: s,
                    storePageUrl: n
                } = e, d = null != t && t.length > 0, u = () => {
                    null != n && (0, o.default)(n)
                };
                return (0, a.jsx)("div", {
                    className: N.guildPremiumEmojis,
                    children: d ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            color: "header-primary",
                            className: N.premiumEmojisTitle,
                            children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_CARD_PREMIUM_EMOJI_TITLE
                        }), (0, a.jsxs)("div", {
                            className: N.premiumEmojisRow,
                            children: [(0, a.jsxs)("div", {
                                className: l(N.emojisContainer, null != s && N.fullEmojisContainer),
                                children: [t.map(e => (0, a.jsx)(r.default, {
                                    className: N.emoji,
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated
                                }, e.id)), null != s && (0, a.jsx)("div", {
                                    className: N.extraEmojiCount,
                                    children: (0, a.jsxs)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-normal",
                                        children: ["+", s]
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(i.Button, {
                                    className: N.viewServerButton,
                                    innerClassName: N.viewServerButtonText,
                                    color: i.Button.Colors.CUSTOM,
                                    disabled: null == n,
                                    onClick: u,
                                    children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
                                })
                            })]
                        })]
                    }) : (0, a.jsx)(i.Button, {
                        className: l(N.viewServerButton, N.roundedEdges),
                        innerClassName: N.viewServerButtonText,
                        color: i.Button.Colors.CUSTOM,
                        disabled: null == n,
                        onClick: u,
                        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
                    })
                })
            }

            function m(e) {
                let {
                    highlightedCreatorGuild: t
                } = e, {
                    guild_id: s,
                    quote: n,
                    quote_attribution: l,
                    quote_attribution_title: r
                } = t, o = (0, _.default)(s, 4, 60), {
                    isLoading: d,
                    hasAllImperativeDetails: u
                } = o;
                if (d) return (0, a.jsx)("div", {
                    className: N.guildCard,
                    children: (0, a.jsx)(i.Spinner, {})
                });
                if (!u) return null;
                let {
                    guildIcon: c,
                    guildName: E,
                    guildAvatarUrl: T,
                    subscriberCount: I,
                    emojisToShow: S,
                    notShownEmojiCount: g,
                    storePageUrl: m
                } = o.details;
                return (0, a.jsxs)("div", {
                    className: N.guildCard,
                    children: [(0, a.jsx)(f, {
                        guildIcon: c,
                        guildName: E,
                        guildAvatarUrl: T,
                        subscriberCount: I
                    }), (0, a.jsx)(A, {
                        quote: n,
                        quoteAttribution: l,
                        quoteAttributionTitle: r
                    }), (0, a.jsx)(L, {
                        emojisToShow: S,
                        notShownEmojiCount: g,
                        storePageUrl: m
                    })]
                })
            }

            function C(e) {
                let {
                    highlightedCreators: t
                } = e;
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_GUILD_SECTION_TITLE
                    }), (0, a.jsx)(E.default, {
                        size: 24
                    }), (0, a.jsx)(T.default, {
                        carouselClassName: N.creatorGuildCarousel,
                        items: t,
                        renderItem: e => (0, a.jsx)(m, {
                            highlightedCreatorGuild: e
                        }),
                        intervalBetweenAutomaticItemRotations: 7e3
                    })]
                })
            }