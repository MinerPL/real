            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                },
                GuildSettingsOnboardingPromptsNotice: function() {
                    return M
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("45299"),
                o = s("419830"),
                d = s("863636"),
                u = s("380710"),
                c = s("593195"),
                E = s("256170"),
                _ = s("423487"),
                T = s("900938"),
                I = s("653274"),
                S = s("131835"),
                N = s("330724"),
                g = s("136278"),
                f = s("682327"),
                A = s("457461"),
                L = s("49111"),
                m = s("653138"),
                C = s("782340"),
                O = s("108852");

            function h(e) {
                let {
                    guildId: t,
                    prompts: s
                } = e, r = (0, l.useStateFromStores)([I.default], () => I.default.editedDefaultChannelIds), [d, T] = (0, u.useChannelCoverageForOnboarding)(t, s, [...r]), S = d.length, N = d.length + T.length, g = S / N * 100, f = Math.max(Math.ceil(85 * N / 100) - S, 0), [A, L] = n.useState(!1);
                return (0, a.jsxs)("div", {
                    className: O.channelCoverage,
                    children: [(0, a.jsxs)(i.Clickable, {
                        className: O.coverageHeader,
                        onClick: () => L(!A),
                        children: [(0, a.jsxs)("div", {
                            className: O.warningTextContainer,
                            children: [g <= 85 && (0, a.jsx)(_.default, {
                                width: 16,
                                height: 16,
                                className: O.warning
                            }), (0, a.jsx)(i.Text, {
                                className: O.coverageTitle,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: C.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_MISSING_CHANNELS.format({
                                    numChannelsMissing: N - S
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: O.progressContainer,
                            children: [(0, a.jsx)(i.Progress, {
                                className: O.coverageProgress,
                                foregroundColor: g > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: g
                            }), (0, a.jsx)(E.default, {
                                className: O.caret,
                                open: A
                            })]
                        })]
                    }), A ? (0, a.jsxs)("div", {
                        className: O.channelCoverageDetails,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: C.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_CHANNELS
                        }), (0, a.jsx)("div", {
                            className: O.channels,
                            children: T.map(e => {
                                var t;
                                let s = null !== (t = (0, o.getChannelIconComponent)(e)) && void 0 !== t ? t : c.default;
                                return (0, a.jsx)("div", {
                                    className: O.channelPill,
                                    children: (0, a.jsxs)(i.Text, {
                                        className: O.channel,
                                        variant: "text-xs/normal",
                                        color: "interactive-active",
                                        children: [(0, a.jsx)(s, {
                                            width: 12,
                                            height: 12
                                        }), e.name]
                                    })
                                }, e.id)
                            })
                        }), (0, a.jsx)("div", {
                            className: O.channelCoverageHint,
                            children: f > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(_.default, {
                                    width: 16,
                                    height: 16
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: C.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_ADD_HELP.format({
                                        numChannels: f
                                    })
                                })]
                            }) : (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.default.Messages.GUILD_NO_CHANNELS_HEADER
                            })
                        })]
                    }) : null]
                })
            }

            function R(e) {
                let {
                    saveOnClose: t
                } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.getGuild());
                return null == s ? null : (0, a.jsx)(D, {
                    guild: s,
                    saveOnClose: t
                })
            }

            function D(e) {
                let {
                    guild: t,
                    saveOnClose: s
                } = e, r = (0, l.useStateFromStores)([d.default], () => d.default.isLoading()), o = (0, l.useStateFromStores)([g.default], () => g.default.editedOnboardingPrompts), u = (0, l.useStateFromStores)([g.default], () => g.default.advancedMode), c = n.useRef(!1);
                if (n.useEffect(() => {
                        !r && !c.current && 0 === o.length && (c.current = !0, !u && (0, N.editGuildOnboardingPrompts)(t, [(0, m.getDefaultPrompt)()], !1))
                    }), n.useEffect(() => {
                        if (s) return () => {
                            (0, N.saveGuildOnboardingPrompts)(t, {
                                ignoreDefaultPrompt: !0
                            }).catch(() => {})
                        }
                    }, [s]), null == t) return null;
                let E = async () => {
                    try {
                        await (0, N.saveGuildOnboardingPrompts)(t), await (0, S.startPreview)(t.id)
                    } catch {}
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.Heading, {
                        className: O.header,
                        variant: "heading-lg/extrabold",
                        children: u ? C.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : C.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: C.default.Messages.ONBOARDING_PROMPT_SETTINGS_SUBHEADER
                    }), (0, a.jsxs)("div", {
                        className: O.links,
                        children: [(0, a.jsx)(i.Anchor, {
                            target: "_blank",
                            href: L.MarketingURLs.GUILD_ONBOARDING_EXAMPLES,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                color: "text-link",
                                children: C.default.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
                            })
                        }), (0, a.jsx)("div", {
                            className: O.dot
                        }), (0, a.jsx)(i.Anchor, {
                            onClick: E,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                color: "text-link",
                                children: C.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
                            })
                        }), (0, a.jsx)("div", {
                            className: O.dot
                        }), (0, a.jsx)(f.AdvancedModeToggle, {
                            guildId: t.id
                        })]
                    }), (0, a.jsx)(h, {
                        guildId: t.id,
                        prompts: o
                    }), (0, a.jsx)("div", {
                        className: O.prompts,
                        children: r ? (0, a.jsx)(i.Spinner, {}) : (0, a.jsx)(A.default, {
                            postjoinOnly: u,
                            guildId: t.id
                        })
                    })]
                })
            }

            function M() {
                let e = (0, l.useStateFromStores)([T.default], () => T.default.getGuild()),
                    t = (0, l.useStateFromStores)([g.default], () => g.default.submitting);
                return null == e ? null : (0, a.jsx)(r.default, {
                    onSave: () => {
                        try {
                            (0, N.saveGuildOnboardingPrompts)(e)
                        } catch {}
                    },
                    onReset: N.resetGuildOnboardingPrompts,
                    submitting: t,
                    onSaveText: C.default.Messages.SAVE
                })
            }