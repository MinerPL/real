            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("997289"),
                r = s("716241"),
                o = s("863636"),
                d = s("129092"),
                u = s("233706"),
                c = s("305961"),
                E = s("423487"),
                _ = s("898260"),
                T = s("599110"),
                I = s("131835"),
                S = s("435076"),
                N = s("642807"),
                g = s("330724"),
                f = s("259483"),
                A = s("682327"),
                L = s("671932"),
                m = s("49111"),
                C = s("782340"),
                O = s("48887");

            function h(e) {
                let {
                    guildId: t,
                    completed: s
                } = e, {
                    homeSettingsEnabled: l
                } = (0, u.useOnboardingHomeAdminExperiment)(t), d = (0, n.useStateFromStores)([o.default], () => o.default.getEnabled(t)), {
                    location: c
                } = (0, i.useAnalyticsContext)();
                c.object = s ? m.AnalyticsObjects.ONBOARDING_EDIT : m.AnalyticsObjects.ONBOARDING_REVIEW;
                let E = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    d ? (await (0, g.enableGuildOnboarding)(t, !1), T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                        ...(0, r.collectGuildAnalyticsMetadata)(t),
                        action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.TOGGLE_DISABLED],
                        location: c
                    })) : (await (0, g.enableGuildOnboarding)(t, !0), e && (0, S.enableHomeSettings)(t, !0), s ? T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                        ...(0, r.collectGuildAnalyticsMetadata)(t),
                        action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.TOGGLE_ENABLED],
                        location: c
                    }) : T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                        ...(0, r.collectGuildAnalyticsMetadata)(t),
                        step: f.GuildSettingsOnboardingPage[f.GuildSettingsOnboardingPage.REVIEW],
                        back: !1,
                        skip: !1,
                        completed: !0
                    }))
                }, N = () => {
                    T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                        ...(0, r.collectGuildAnalyticsMetadata)(t),
                        action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.PREVIEW],
                        location: c
                    }), (0, I.startPreview)(t)
                }, A = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(L.DefaultChannelsOverviewItem, {
                        guildId: t,
                        onEdit: () => {
                            T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                                ...(0, r.collectGuildAnalyticsMetadata)(t),
                                action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.EDIT_DEFAULT_CHANNELS],
                                location: c
                            }), (0, I.setOnboardingStep)(f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS)
                        },
                        disableGoodStatus: s
                    }), (0, a.jsx)(_.default, {
                        className: O.divider
                    }), (0, a.jsx)(L.CustomizationQuestionsOverviewItem, {
                        guildId: t,
                        onEdit: () => {
                            T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                                ...(0, r.collectGuildAnalyticsMetadata)(t),
                                action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c
                            }), (0, I.setOnboardingStep)(f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS)
                        },
                        disableGoodStatus: s
                    }), l && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(_.default, {
                            className: O.divider
                        }), (0, a.jsx)(L.HomeSettingsOverviewItem, {
                            guildId: t,
                            onEdit: () => {
                                T.default.track(m.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                                    ...(0, r.collectGuildAnalyticsMetadata)(t),
                                    action_taken: f.GuildSettingsCTAs[f.GuildSettingsCTAs.EDIT_HOME_SETTINGS],
                                    location: c
                                }), (0, I.setOnboardingStep)(f.GuildSettingsOnboardingPage.HOME_SETTINGS)
                            },
                            disableGoodStatus: s
                        })]
                    })]
                });
                return s ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(R, {
                        guildId: t,
                        handlePreview: N
                    }), (0, a.jsx)(D, {}), (0, a.jsxs)("div", {
                        className: O.content,
                        children: [(0, a.jsx)(M, {
                            guildId: t,
                            handleOnboardingToggle: E
                        }), A]
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: O.content,
                        children: [(0, a.jsx)(G, {
                            guildId: t,
                            handleOnboardingToggle: E,
                            handlePreview: N
                        }), A]
                    }), (0, a.jsx)(x, {
                        guildId: t
                    })]
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    handlePreview: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: O.header,
                        children: C.default.Messages.GUILD_SETTINGS_ONBOARDING
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: O.subheader,
                        children: C.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE
                    }), (0, a.jsxs)("div", {
                        className: O.help,
                        children: [(0, a.jsx)(l.Anchor, {
                            target: "_blank",
                            href: m.MarketingURLs.GUILD_ONBOARDING_EXAMPLES,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-link",
                                children: C.default.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
                            })
                        }), (0, a.jsx)("div", {
                            className: O.helpSeparator
                        }), (0, a.jsx)(l.Anchor, {
                            onClick: s,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-link",
                                children: C.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
                            })
                        }), (0, a.jsx)("div", {
                            className: O.helpSeparator
                        }), (0, a.jsx)(A.AdvancedModeToggle, {
                            guildId: t
                        })]
                    })]
                })
            }

            function D() {
                let e = "• ";
                return (0, a.jsxs)("div", {
                    className: O.notice,
                    children: [(0, a.jsx)("img", {
                        className: O.wumpus,
                        src: s("353773"),
                        alt: "wumpus"
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            className: O.header,
                            children: C.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_HEADER
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, C.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_2]
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: [e, C.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_3]
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    handleOnboardingToggle: s
                } = e, i = (0, L.useOnboardingCanBeEnabled)(t), r = (0, n.useStateFromStores)([o.default], () => o.default.getEnabled(t));
                return (0, a.jsxs)("div", {
                    className: O.review,
                    children: [(0, a.jsxs)("div", {
                        className: O.reviewHeaderText,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: r ? C.default.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_ENABLED : C.default.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_DISABLED
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: r ? C.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_ENABLED : C.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_DISABLED
                        })]
                    }), (0, a.jsx)(l.Switch, {
                        checked: r,
                        onChange: () => s(!1),
                        disabled: !r && !i
                    })]
                })
            }

            function G(e) {
                let {
                    guildId: t,
                    handleOnboardingToggle: s,
                    handlePreview: i
                } = e, r = (0, L.useOnboardingCanBeEnabled)(t), o = (0, n.useStateFromStores)([N.default], () => N.default.getSettings()), u = (0, d.isSettingsValid)(o);
                return (0, a.jsxs)("div", {
                    className: O.reviewHeader,
                    children: [(0, a.jsxs)("div", {
                        className: O.reviewHeaderText,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: r ? C.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE : C.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE_INCOMPLETE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: r ? C.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION : C.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION_INCOMPLETE
                        })]
                    }), (0, a.jsxs)("div", {
                        className: O.reviewActions,
                        children: [(0, a.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.OUTLINED,
                            onClick: i,
                            children: C.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
                        }), (0, a.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.BRAND,
                            onClick: () => s(u),
                            disabled: !r,
                            children: C.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_ENABLE_ONBOARDING
                        })]
                    })]
                })
            }

            function x(e) {
                let {
                    guildId: t
                } = e, s = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t));
                return null == s || s.verificationLevel < m.VerificationLevels.VERY_HIGH ? null : (0, a.jsxs)("div", {
                    className: O.rolesWarning,
                    children: [(0, a.jsx)(E.default, {
                        width: 16,
                        height: 16,
                        className: O.warningIcon
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: C.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW_ROLES_WARNING
                    })]
                })
            }