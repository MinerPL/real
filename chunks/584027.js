            "use strict";
            n.r(t), n.d(t, {
                OnboardingPreview: function() {
                    return x
                },
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                d = n("716241"),
                o = n("798796"),
                u = n("75061"),
                c = n("233706"),
                N = n("749623"),
                _ = n("768596"),
                I = n("305961"),
                E = n("697218"),
                f = n("593195"),
                O = n("36694"),
                S = n("991497"),
                m = n("733160"),
                T = n("599110"),
                D = n("900938"),
                g = n("131835"),
                A = n("259483"),
                G = n("49111"),
                h = n("782340"),
                L = n("247757");
            let R = () => [{
                    emoji: "\uD83E\uDDD9",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
                    selected: !0
                }, {
                    emoji: "\uD83C\uDFA4",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
                    selected: !1
                }, {
                    emoji: "\uD83D\uDC40",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
                    selected: !1
                }],
                p = () => [{
                    channelIcon: () => (0, a.jsx)(m.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
                    selected: !1
                }, {
                    channelIcon: () => (0, a.jsx)(S.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
                    selected: !0
                }];

            function x(e) {
                let {
                    isTooltip: t = !1
                } = e, n = R();
                t && n.pop();
                let l = t ? (0, a.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        color: "header-primary",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP
                    }) : (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE
                    }),
                    i = t ? (0, a.jsx)(r.Text, {
                        variant: "text-xxs/normal",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format()
                    }) : (0, a.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format()
                    });
                return (0, a.jsxs)("div", {
                    className: s(L.upsellPreview, L.spacingLarge, {
                        [L.tooltip]: t
                    }),
                    children: [l, (0, a.jsx)("div", {
                        className: L.spacingSmall,
                        children: n.map((e, t) => {
                            let {
                                emoji: n,
                                emojiDescription: l,
                                title: i,
                                selected: d
                            } = e;
                            return (0, a.jsxs)("div", {
                                className: s(L.previewListItem, {
                                    [L.selected]: d
                                }),
                                children: [(0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": l,
                                    children: n
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-primary",
                                    children: i
                                }), d && (0, a.jsx)("div", {
                                    className: L.checkboxCircle,
                                    children: (0, a.jsx)(O.default, {
                                        className: L.checkmark
                                    })
                                })]
                            }, t)
                        })
                    }), i]
                })
            }

            function P() {
                let e = [{
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
                    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
                    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES
                }];
                return (0, a.jsx)(u.TestimonialHero, {
                    testimonials: e
                })
            }

            function M() {
                let e = (0, i.useStateFromStores)([D.default], () => D.default.getGuildId()),
                    t = (0, i.useStateFromStores)([I.default], () => I.default.getGuild(e)),
                    n = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
                    {
                        homeSettingsEnabled: l
                    } = (0, c.useOnboardingHomeAdminExperiment)(null != e ? e : "");
                return null == e || null == t || null == n ? null : (0, a.jsxs)("div", {
                    className: L.upsellContainer,
                    children: [(0, a.jsxs)("div", {
                        className: L.upsellHeader,
                        children: [(0, a.jsxs)("div", {
                            className: L.islands,
                            children: [(0, a.jsx)(o.LeftIslands, {}), (0, a.jsx)(o.MainIsland, {
                                guild: t,
                                mainIslandClassName: L.mainIsland,
                                balloonDogClassName: L.balloonDog
                            }), (0, a.jsx)(o.RightIslands, {})]
                        }), (0, a.jsxs)("div", {
                            className: L.upsellHeaderText,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: L.upsellButtons,
                            children: (0, a.jsx)(r.Button, {
                                onClick: function() {
                                    null != e && (T.default.track(G.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                        ...(0, d.collectGuildAnalyticsMetadata)(e),
                                        step: A.GuildSettingsOnboardingPage[A.GuildSettingsOnboardingPage.LANDING],
                                        back: !1,
                                        skip: !1
                                    }), (0, g.goToNextOnboardingStep)(e, A.GuildSettingsOnboardingPage.LANDING))
                                },
                                color: r.Button.Colors.BRAND,
                                disabled: !1,
                                children: h.default.Messages.CHECK_IT_OUT
                            })
                        })]
                    }), (0, a.jsx)(r.FormDivider, {}), (0, a.jsx)(P, {}), (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)("div", {
                        className: L.valuesContainer,
                        children: [(0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsx)(x, {}), (0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE
                                })]
                            })]
                        }), l && (0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: s(L.upsellPreview, L.spacingLarge),
                                children: [(0, a.jsx)(_.default, {
                                    guildId: e,
                                    welcomeMessage: {
                                        authorIds: [n.id],
                                        message: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE
                                    }
                                }), (0, a.jsx)(N.NewMemberAction, {
                                    channelId: e,
                                    title: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                    channelName: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                }), (0, a.jsx)(N.NewMemberAction, {
                                    channelId: e,
                                    title: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                    channelName: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsx)("div", {
                                className: s(L.upsellPreview, L.spacingLarge),
                                children: p().map((e, t) => {
                                    let {
                                        channelIcon: n,
                                        channel: l,
                                        selected: i
                                    } = e;
                                    return (0, a.jsxs)("div", {
                                        className: s(L.previewListItem, L.spaceBetween, {
                                            [L.selected]: i
                                        }),
                                        children: [(0, a.jsxs)("div", {
                                            className: L.channel,
                                            children: [n(), (0, a.jsx)(r.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                children: l
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: s(L.checkbox, {
                                                [L.selected]: i
                                            }),
                                            children: i && (0, a.jsx)(O.default, {
                                                className: L.checkmark
                                            })
                                        })]
                                    }, t)
                                })
                            }), (0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE
                                })]
                            })]
                        })]
                    })]
                })
            }