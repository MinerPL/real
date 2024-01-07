            "use strict";
            s.r(t), s.d(t, {
                useOnboardingCanBeEnabled: function() {
                    return h
                },
                DefaultChannelsOverviewItem: function() {
                    return R
                },
                CustomizationQuestionsOverviewItem: function() {
                    return D
                },
                HomeSettingsOverviewItem: function() {
                    return M
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("863636"),
                o = s("380710"),
                d = s("129092"),
                u = s("233706"),
                c = s("538137"),
                E = s("593195"),
                _ = s("36694"),
                T = s("564875"),
                I = s("620193"),
                S = s("423487"),
                N = s("435076"),
                g = s("642807"),
                f = s("682327"),
                A = s("653138"),
                L = s("782340"),
                m = s("967476");

            function C(e) {
                let t, {
                    title: s,
                    description: n,
                    icon: l,
                    hasStarted: r,
                    status: o,
                    onEdit: d,
                    extra: u
                } = e;
                switch (o) {
                    case "good":
                        t = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(_.default, {
                                width: 16,
                                height: 16,
                                className: m.checkmark
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/semibold",
                                color: "status-positive",
                                className: m.statusText,
                                children: L.default.Messages.DEFAULT_CHANNELS_GOOD
                            })]
                        });
                        break;
                    case "warning":
                        t = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(S.default, {
                                width: 16,
                                height: 16,
                                className: m.warning
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/semibold",
                                color: "status-warning",
                                className: m.statusText,
                                children: L.default.Messages.ONBOARDING_PROMPTS_WARNING
                            })]
                        });
                        break;
                    case "required":
                        t = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(S.default, {
                                width: 16,
                                height: 16,
                                className: m.danger
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/semibold",
                                color: "status-danger",
                                className: m.statusText,
                                children: L.default.Messages.REQUIRED
                            })]
                        })
                }
                return (0, a.jsxs)("div", {
                    className: m.onboardingStepContainer,
                    children: [(0, a.jsxs)("div", {
                        className: m.leftContainer,
                        children: [(0, a.jsx)("div", {
                            className: m.iconContainer,
                            children: l
                        }), (0, a.jsxs)("div", {
                            className: m.onboardingStepText,
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: s
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: r && "required" === o ? "status-danger" : "text-normal",
                                children: n
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: m.rightContainer,
                        children: [t, u, r ? (0, a.jsx)(i.Button, {
                            className: m.cta,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.OUTLINED,
                            borderColor: i.Button.BorderColors.PRIMARY,
                            onClick: d,
                            children: L.default.Messages.EDIT
                        }) : (0, a.jsxs)(i.Button, {
                            className: m.cta,
                            innerClassName: m.ctaInner,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.PRIMARY,
                            onClick: d,
                            children: [L.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_SET_UP, (0, a.jsx)(c.default, {
                                width: 12,
                                height: 12
                            })]
                        })]
                    })]
                })
            }

            function O(e) {
                let t = (0, l.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(e)),
                    [s, a] = (0, o.useChattableDefaultChannels)(e, t);
                return a.length >= A.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING && s.length >= A.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
            }

            function h(e) {
                let t = O(e),
                    s = (0, f.useAdvancedModeReady)(e);
                return t || s
            }

            function R(e) {
                var t, s, n, i;
                let {
                    guildId: d,
                    onEdit: u,
                    disableGoodStatus: c
                } = e, _ = (0, l.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(d)), T = (0, l.useStateFromStores)([r.default], () => (0, o.getMinimumSetOfDefaultChannelIds)(d, r.default.getDefaultChannelIds(d), r.default.getOnboardingPrompts(d)).length), [, I] = (0, o.useChattableDefaultChannels)(d, _), S = I.length, N = O(d), g = (0, f.useAdvancedModeReady)(d), h = (0, l.useStateFromStores)([r.default], () => r.default.isAdvancedMode(d));
                let R = (t = N, s = h, n = S, i = T, s ? L.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS_ADVANCED.format({
                    numDefaultChannels: n,
                    numFromQuestions: i - n
                }) : t ? L.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS.format({
                    numDefaultChannels: n
                }) : L.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NOT_ENOUGH_DEFAULT_CHANNELS.format({
                    numDefaultChannels: A.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    numChattableChannels: A.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
                }));
                return (0, a.jsx)(C, {
                    title: h ? L.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_ADVANCED : L.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS,
                    description: R,
                    icon: (0, a.jsx)(E.default, {
                        width: 24,
                        height: 24,
                        className: m.channelIcon
                    }),
                    hasStarted: S > 0 || h,
                    status: N || g ? c ? "none" : "good" : "required",
                    onEdit: u
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    onEdit: s,
                    disableGoodStatus: n
                } = e, i = (0, l.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(t)), d = (0, l.useStateFromStoresArray)([r.default], () => r.default.getOnboardingPrompts(t)), u = d.length, [c, E] = (0, o.useChannelCoverageForOnboarding)(t, d, i), _ = c.length, I = c.length + E.length, S = _ / I * 100, N = (0, l.useStateFromStores)([r.default], () => r.default.isAdvancedMode(t)), g = u > 0, f = "none";
                return g && (S >= 85 && !n ? f = "good" : S < 85 && (f = "warning")), (0, a.jsx)(C, {
                    title: N ? L.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : L.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER,
                    description: L.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE.format({
                        numChannels: _,
                        numTotalChannels: I,
                        channelsHook: (e, t) => (0, a.jsx)("span", {
                            style: {
                                color: S > 85 ? "var(--header-primary)" : "var(--status-warning)"
                            },
                            children: e
                        }, t)
                    }),
                    icon: (0, a.jsx)(T.default, {
                        width: 24,
                        height: 24,
                        className: m.channelIcon
                    }),
                    hasStarted: g,
                    status: f,
                    onEdit: s
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    onEdit: s,
                    disableGoodStatus: o
                } = e, c = (0, l.useStateFromStores)([g.default], () => g.default.getSettings()), E = (0, l.useStateFromStores)([r.default], () => r.default.getEnabled(t)), {
                    serverGuideOptional: _
                } = (0, u.useOptionalOnboardingHomeAdminExperiment)(t), T = (0, d.isSettingsValid)(c), S = c.enabled, f = n.useCallback(() => {
                    (0, N.enableHomeSettings)(t, !S)
                }, [t, S]), A = !(0, d.isSettingsEmpty)(c), O = "none";
                A && (T && !o ? O = "good" : !T && (O = "required"));
                let h = L.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_DESCRIPTION;
                T ? !A && (h = L.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_NOT_STARTED_DESCRIPTION) : h = L.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_INVALID_DESCRIPTION;
                let R = null;
                return A && _ && E && (R = (0, a.jsx)(i.Switch, {
                    className: m.inlineSwitch,
                    checked: S,
                    onChange: f,
                    disabled: !T
                })), (0, a.jsx)(C, {
                    title: L.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_TITLE,
                    description: h,
                    icon: (0, a.jsx)(I.default, {
                        width: 24,
                        height: 24,
                        className: m.channelIcon
                    }),
                    hasStarted: A,
                    status: O,
                    onEdit: s,
                    extra: R
                })
            }