            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("151426"),
                d = s("77078"),
                u = s("10641"),
                c = s("233706"),
                E = s("137215"),
                _ = s("900938"),
                T = s("851490"),
                I = s("131835"),
                S = s("330724"),
                N = s("136278"),
                g = s("397947"),
                f = s("259483"),
                A = s("867928"),
                L = s("706866"),
                m = s("764151"),
                C = s("887313"),
                O = s("832931"),
                h = s("584027"),
                R = s("614840"),
                D = s("782340"),
                M = s("917323");

            function G() {
                let e = (0, r.useStateFromStores)([_.default], () => _.default.getGuildId());
                return null == e ? null : (0, a.jsx)(x, {
                    guildId: e
                })
            }

            function x(e) {
                let t, {
                        guildId: s
                    } = e,
                    l = (0, r.useStateFromStores)([g.default], () => g.default.getCurrentPage()),
                    _ = (0, r.useStateFromStores)([g.default], () => {
                        let e = (0, f.pageToEducationUpsellType)(l);
                        return null != e && !g.default.isEducationUpsellDismissed(e)
                    }),
                    N = (0, A.default)(s),
                    G = !N && _,
                    {
                        homeSettingsEnabled: x
                    } = (0, c.useOnboardingHomeAdminExperiment)(s);
                switch (n.useEffect(() => {
                        (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE)
                    }, []), l) {
                    case f.GuildSettingsOnboardingPage.LANDING:
                        t = N ? (0, a.jsx)(C.default, {
                            completed: !0,
                            guildId: s
                        }) : (0, a.jsx)(h.default, {});
                        break;
                    case f.GuildSettingsOnboardingPage.SAFETY_CHECK:
                        t = (0, a.jsx)(R.default, {
                            hideChangelog: !0
                        });
                        break;
                    case f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS:
                        t = (0, a.jsx)(L.default, {
                            saveOnClose: !N
                        });
                        break;
                    case f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS:
                        t = (0, a.jsx)(O.default, {
                            saveOnClose: !N
                        });
                        break;
                    case f.GuildSettingsOnboardingPage.HOME_SETTINGS:
                        t = (0, a.jsx)(m.default, {
                            saveOnClose: !N
                        });
                        break;
                    case f.GuildSettingsOnboardingPage.REVIEW:
                        t = (0, a.jsx)(C.default, {
                            completed: N,
                            guildId: s
                        })
                }
                return (0, a.jsxs)("div", {
                    className: i(M.onboardingContainer, {
                        [M.upsellOnTop]: G
                    }),
                    children: [!N && l !== f.GuildSettingsOnboardingPage.LANDING && (0, a.jsx)(p, {
                        setOnboardingStep: I.setOnboardingStep,
                        page: l,
                        homeSettingsEnabled: x
                    }), N && l !== f.GuildSettingsOnboardingPage.LANDING && (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.Button, {
                            innerClassName: M.backButton,
                            look: d.Button.Looks.BLANK,
                            size: d.Button.Sizes.MIN,
                            onClick: () => {
                                (0, S.resetGuildOnboardingPrompts)(), (0, T.resetDefaultChannels)(), (0, I.setOnboardingStep)(f.GuildSettingsOnboardingPage.LANDING)
                            },
                            children: [(0, a.jsx)(E.default, {
                                className: M.arrow,
                                direction: E.default.Directions.LEFT
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: D.default.Messages.BACK
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        children: t
                    })]
                })
            }

            function p(e) {
                let {
                    page: t,
                    setOnboardingStep: s,
                    homeSettingsEnabled: n
                } = e, l = (0, r.useStateFromStores)([g.default], () => g.default.hasErrors()), o = e => {
                    if (!l) return () => s(e)
                }, u = (0, r.useStateFromStores)([N.default], () => N.default.advancedMode);
                return (0, a.jsxs)("div", {
                    className: M.progressContainer,
                    children: [(0, a.jsxs)(d.Clickable, {
                        className: i(M.progressBarContainer, M.clickableProgressBar),
                        onClick: o(f.GuildSettingsOnboardingPage.SAFETY_CHECK),
                        children: [(0, a.jsx)("div", {
                            className: i(M.progressBar, {
                                [M.progressBarCurrent]: t === f.GuildSettingsOnboardingPage.SAFETY_CHECK
                            })
                        }), (0, a.jsx)(d.Text, {
                            color: t === f.GuildSettingsOnboardingPage.SAFETY_CHECK ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_SAFETY.format({
                                stepNumber: 1
                            })
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: i(M.progressBarContainer, M.clickableProgressBar),
                        onClick: o(f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS),
                        children: [(0, a.jsx)("div", {
                            className: i(M.progressBar, {
                                [M.progressBarCurrent]: t === f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS
                            })
                        }), (0, a.jsx)(d.Text, {
                            color: t === f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: u ? D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS_ADVANCED.format({
                                stepNumber: 2
                            }) : D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS.format({
                                stepNumber: 2
                            })
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: i(M.progressBarContainer, M.clickableProgressBar),
                        onClick: o(f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS),
                        children: [(0, a.jsx)("div", {
                            className: i(M.progressBar, {
                                [M.progressBarCurrent]: t === f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS
                            })
                        }), (0, a.jsx)(d.Text, {
                            color: t === f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: u ? D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS_ADVANCED.format({
                                stepNumber: 3
                            }) : D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS.format({
                                stepNumber: 3
                            })
                        })]
                    }), n && (0, a.jsxs)(d.Clickable, {
                        className: i(M.progressBarContainer, M.clickableProgressBar),
                        onClick: o(f.GuildSettingsOnboardingPage.HOME_SETTINGS),
                        children: [(0, a.jsx)("div", {
                            className: i(M.progressBar, {
                                [M.progressBarCurrent]: t === f.GuildSettingsOnboardingPage.HOME_SETTINGS
                            })
                        }), (0, a.jsx)(d.Text, {
                            color: t === f.GuildSettingsOnboardingPage.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_HOME.format({
                                stepNumber: 4
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: M.progressBarContainer,
                        children: [(0, a.jsx)("div", {
                            className: i(M.progressBar, {
                                [M.progressBarCurrent]: t === f.GuildSettingsOnboardingPage.REVIEW
                            })
                        }), (0, a.jsx)(d.Text, {
                            color: t === f.GuildSettingsOnboardingPage.REVIEW ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: D.default.Messages.GUILD_ONBOARDING_SETUP_STEP_REVIEW.format({
                                stepNumber: 3 + (n ? 1 : 0) + 1
                            })
                        })]
                    })]
                })
            }