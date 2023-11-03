(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71879"], {
        144141: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-01_guild_onboarding_includes_rules",
                label: "Guild Onboarding includes rules experience",
                defaultConfig: {
                    includeRules: !1
                },
                treatments: [{
                    id: 1,
                    label: "Last page of onboarding is rules",
                    config: {
                        includeRules: !0
                    }
                }]
            });
            var r = n
        },
        126623: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                },
                useCustomizeCommunityPromptHelpText: function() {
                    return m
                }
            });
            var a = l("446674"),
                n = l("679653"),
                r = l("42203"),
                s = l("27618"),
                o = l("697218"),
                i = l("449008"),
                d = l("782340");

            function u(e, t, l) {
                return 0 === e.length ? "" : (l ? d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
                    count: e.length,
                    extraCount: Math.max(e.length - 2, 0),
                    role1: e[0],
                    role2: e[1],
                    itemHook: t
                })
            }

            function c(e) {
                var t, l, c;
                let {
                    guild: m,
                    prompt: f,
                    selectedRoleIds: h,
                    selectedChannelIds: g,
                    itemHook: x
                } = e, p = (0, a.useStateFromStoresArray)([r.default, o.default, s.default], () => Array.from(g).map(e => r.default.getChannel(e)).filter(i.isNotNullish).map(e => (0, n.computeChannelName)(e, o.default, s.default, !0))), v = Array.from(h).map(e => {
                    var l;
                    return null === (l = (null !== (t = null == m ? void 0 : m.roles) && void 0 !== t ? t : {})[e]) || void 0 === l ? void 0 : l.name
                }).filter(i.isNotNullish).map(e => "@".concat(e)), N = (null == f ? void 0 : f.singleSelect) ? "" : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS, C = "";
                if (0 === p.length && v.length > 0) N = u(v, x);
                else if (p.length > 0) {
                    ;
                    l = p, c = x, N = 0 === l.length ? "" : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                        count: l.length,
                        extraCount: Math.max(l.length - 2, 0),
                        channel1: l[0],
                        channel2: l[1],
                        itemHook: c
                    }), v.length > 0 && (C = u(v, x, !0))
                }
                return {
                    helpText: N,
                    helpTextAdditional: C
                }
            }

            function m(e) {
                var t;
                let {
                    guild: l,
                    prompt: u,
                    selectedRoleIds: c,
                    selectedChannelIds: m,
                    itemHook: f
                } = e, h = (0, a.useStateFromStoresArray)([r.default, o.default, s.default], () => Array.from(m).map(e => r.default.getChannel(e)).filter(i.isNotNullish).map(e => (0, n.computeChannelName)(e, o.default, s.default, !0))), g = Array.from(c).map(e => {
                    var a;
                    return null === (a = (null !== (t = null == l ? void 0 : l.roles) && void 0 !== t ? t : {})[e]) || void 0 === a ? void 0 : a.name
                }).filter(i.isNotNullish).map(e => "@".concat(e)), x = (null == u ? void 0 : u.singleSelect) ? "" : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
                return 0 === h.length && g.length > 0 ? x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                    count: g.length,
                    extraCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1],
                    itemHook: f
                }) : h.length > 0 && 0 === g.length ? x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                    count: h.length,
                    extraCount: Math.max(h.length - 2, 0),
                    channel1: h[0],
                    channel2: h[1],
                    itemHook: f
                }) : h.length > 0 && g.length > 0 && (x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
                    channelCount: h.length,
                    extraChannelCount: Math.max(h.length - 2, 0),
                    channel1: h[0],
                    channel2: h[1],
                    itemHook: f,
                    roleCount: g.length,
                    extraRoleCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1]
                })), {
                    helpText: x,
                    helpTextAdditional: ""
                }
            }
        },
        413896: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("414456"),
                s = l.n(r),
                o = l("301165"),
                i = l("446674"),
                d = l("77078"),
                u = l("851387"),
                c = l("528502"),
                m = l("731898"),
                f = l("206230"),
                h = l("895026"),
                g = l("38654"),
                x = l("393414"),
                p = l("305961"),
                v = l("313609"),
                N = l("315102"),
                C = l("284679"),
                j = l("103603"),
                E = l("921031"),
                O = l("863636"),
                I = l("471706"),
                _ = l("798796"),
                T = l("686692"),
                b = l("547840"),
                M = l("49111"),
                R = l("782340"),
                S = l("240805");
            async function A(e) {
                let t = await new Promise((t, l) => {
                    let a = new Image;
                    a.crossOrigin = "Anonymous", a.onerror = e => {
                        l(e), a.onerror = a.onload = null, a = null
                    }, a.onload = () => {
                        t((0, j.getPalette)(a, 2, 10)), a.onerror = a.onload = null, a = null
                    }, a.src = e
                });
                return null == t ? void 0 : t.map(e => {
                    let [t, l, a] = e;
                    return (0, C.rgbToHex)(t, l, a)
                })
            }

            function D(e) {
                let {
                    guildId: t
                } = e, l = (0, i.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
                    ref: r,
                    width: j,
                    height: D
                } = (0, m.default)(), [B, k] = n.useState(), L = (0, i.useStateFromStoresArray)([O.default], () => O.default.getOnboardingPromptsForOnboarding(t)), y = (0, i.useStateFromStores)([O.default], () => O.default.getEnabled(t)), P = n.useCallback((e, l, a) => {
                    E.default.selectOption(t, e, l, a)
                }, [t]), w = n.useCallback(() => {
                    E.default.completeOnboarding(t, L)
                }, [t, L]), U = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(t)), G = n.useMemo(() => null == U ? null : N.default.getGuildSplashURL({
                    id: U.id,
                    splash: U.splash
                }), [U]), F = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentOnboardingStep(t)), [H, q] = n.useState(null != G ? null : "cover");
                null != G && null == B && A(G).then(e => {
                    k(e[0])
                });
                let V = n.useCallback(e => {
                        q(F), E.default.setUserOnboardingStep(t, e)
                    }, [t, F]),
                    Y = (0, i.useStateFromStores)([g.default], () => g.default.isFullServerPreview(t)),
                    z = (0, i.useStateFromStores)([I.default], () => I.default.getOnboardingStatus(t)),
                    Q = null != L && L.length > 0,
                    W = n.useCallback(() => {
                        (0, I.isOnboarding)(z) && y && Q ? V(0) : w()
                    }, [z, y, Q, V, w]);
                n.useEffect(() => {
                    if (!I.default.shouldShowOnboarding(t)) return u.default.escapeToDefaultChannel(t);
                    (0, h.fetchMemberCounts)(t)
                }, [t]);
                let X = (0, o.useTransition)(F, {
                        config: o.config.default,
                        from: {
                            scale: .8,
                            opacity: 0
                        },
                        enter: {
                            scale: 1,
                            opacity: 1
                        },
                        immediate: l || "cover" !== H && null !== H
                    }),
                    K = I.default.shouldShowOnboarding(t),
                    Z = null == U;
                if (n.useEffect(() => {
                        if (!K || Z) {
                            let e = setTimeout(() => {
                                (0, x.transitionTo)(M.Routes.CHANNEL(t))
                            }, 1e3);
                            return () => clearTimeout(e)
                        }
                    }, [K, Z, t]), !I.default.shouldShowOnboarding(t) || null == U) return null;
                let J = () => {
                    switch (F) {
                        case "cover":
                            return (0, a.jsx)(_.default, {
                                guild: U,
                                onboardingStatus: I.GuildOnboardingStatus.READY,
                                onStart: W,
                                disableTracking: Y
                            });
                        case "rules":
                            return (0, a.jsx)(b.default, {
                                setCurrentStep: V,
                                previousPromptIndex: L.length - 1,
                                guild: U,
                                prompts: L,
                                completeOnboarding: w,
                                disableTracking: Y
                            });
                        case null:
                            return null;
                        default:
                            return (0, a.jsx)(T.default, {
                                guild: U,
                                prompts: L,
                                step: F,
                                selectOption: P,
                                completeOnboarding: w,
                                setCurrentStep: V,
                                disableTracking: Y
                            })
                    }
                };
                return (0, a.jsxs)("div", {
                    className: S.main,
                    ref: r,
                    children: [null != G ? (0, a.jsx)(v.default, {
                        className: s(S.artwork),
                        src: G,
                        width: j,
                        height: D,
                        imageClassName: S.cover
                    }) : (0, a.jsx)(c.default, {
                        className: S.artwork,
                        preserveAspectRatio: "xMinYMin slice"
                    }), null != B && (0, a.jsx)("div", {
                        className: S.gradient,
                        style: {
                            background: "linear-gradient(180deg, ".concat((0, C.hexOpacityToRgba)(B, .16), " 0%, ").concat((0, C.hexOpacityToRgba)(B, 1), " 100%)")
                        }
                    }), (0, a.jsx)("div", {
                        className: S.gradient
                    }), X((e, t, l) => {
                        let {
                            key: n
                        } = l;
                        return (0, a.jsx)(o.animated.div, {
                            style: e,
                            children: J()
                        }, n)
                    }), "cover" === F && (0, a.jsx)("div", {
                        className: S.bottomCenterContent,
                        children: (0, a.jsx)(d.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: R.default.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
                                privacyLink: M.MarketingURLs.PRIVACY
                            })
                        })
                    })]
                })
            }
        },
        686692: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("65597"),
                s = l("77078"),
                o = l("716241"),
                i = l("50926"),
                d = l("526253"),
                u = l("795228"),
                c = l("137215"),
                m = l("599110"),
                f = l("449008"),
                h = l("144141"),
                g = l("863636"),
                x = l("380710"),
                p = l("126623"),
                v = l("667712"),
                N = l("469242"),
                C = l("653138"),
                j = l("49111"),
                E = l("782340"),
                O = l("710362");

            function I(e, t) {
                return (0, a.jsx)("span", {
                    className: O.helpTextItem,
                    children: e
                }, t)
            }

            function _(e) {
                return null != e && h.default.getCurrentConfig({
                    location: "ba216b_1"
                }, {
                    autoTrackExposure: !0
                }).includeRules
            }

            function T(e) {
                let {
                    headerId: t,
                    guild: l,
                    step: n,
                    lastPrompt: o,
                    questionCount: i,
                    currentPrompt: d,
                    selectOption: m,
                    gotoPrevPrompt: f,
                    gotoNextPrompt: h,
                    completeOnboarding: v
                } = e, C = (0, r.useStateFromStoresArray)([g.default], () => g.default.getOnboardingResponsesForPrompt(l.id, d.id)), j = 0 === C.length && (null == d ? void 0 : d.required), _ = null == d ? void 0 : d.options.filter(e => C.includes(e.id)), T = (0, x.getSelectedRoleIds)(_), b = (0, x.getSelectedChannelIds)(_), M = 0 === C.length, {
                    helpText: R,
                    helpTextAdditional: S
                } = (0, p.default)({
                    guild: l,
                    prompt: d,
                    selectedRoleIds: T,
                    selectedChannelIds: b,
                    itemHook: I
                }), A = (0, u.default)(l.id, 1e3), D = d.options.map(e => ({
                    value: e.id,
                    ...e
                })), B = d.options.filter(e => C.includes(e.id)).map(e => e.id);
                return (0, a.jsx)("div", {
                    className: O.prompt,
                    children: (0, a.jsxs)("div", {
                        className: O.promptContent,
                        children: [(0, a.jsxs)(s.ScrollerThin, {
                            className: O.scrollerContent,
                            children: [(0, a.jsxs)("div", {
                                className: O.questionHeader,
                                children: [(0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: E.default.Messages.ONBOARDING_QUESTION_COUNT.format({
                                        currentQuestion: n + 1,
                                        questionCount: i
                                    })
                                }), d.required ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        className: O.headerSeparator,
                                        children: "\xb7"
                                    }), (0, a.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-brand",
                                        children: E.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                                    })]
                                }) : null]
                            }), (0, a.jsx)(s.Heading, {
                                className: O.title,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                id: t,
                                children: d.title
                            }), (0, a.jsx)(N.default, {
                                options: D,
                                value: B,
                                onChange: e => {
                                    let t = e.find(e => !C.includes(e.id)),
                                        l = e.map(e => e.id);
                                    if (null != t) m(d.id, t.id, !0);
                                    else {
                                        let e = C.filter(e => !l.includes(e)),
                                            t = d.options.filter(t => e.includes(t.id));
                                        t.forEach(e => {
                                            m(d.id, e.id, !1)
                                        })
                                    }
                                },
                                memberCounts: A
                            })]
                        }), (0, a.jsxs)("div", {
                            className: O.navButtons,
                            children: [(0, a.jsx)("div", {
                                className: O.leftButtons,
                                children: n > 0 && (0, a.jsxs)(s.Button, {
                                    className: O.button,
                                    innerClassName: O.buttonInner,
                                    onClick: () => f(C.length),
                                    size: s.Button.Sizes.MEDIUM,
                                    look: s.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.Button.Colors.PRIMARY,
                                    children: [(0, a.jsx)(c.default, {
                                        className: O.arrow,
                                        direction: c.default.Directions.LEFT
                                    }), E.default.Messages.BACK]
                                })
                            }), (0, a.jsxs)("div", {
                                className: O.rightButtons,
                                children: [(0, a.jsxs)(s.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [R, " ", S]
                                }), (0, a.jsx)(s.Tooltip, {
                                    text: j ? E.default.Messages.ONBOARDING_REQUIRED_QUESTION : null,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, a.jsx)(s.Button, {
                                            className: O.button,
                                            innerClassName: O.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onClick: () => o ? v() : h(C.length),
                                            disabled: j,
                                            size: s.Button.Sizes.MEDIUM,
                                            look: s.Button.Looks.FILLED,
                                            grow: !1,
                                            color: M ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                            children: o ? (0, a.jsxs)(a.Fragment, {
                                                children: [E.default.Messages.FINISH, (0, a.jsx)("span", {
                                                    className: O.finishEmoji,
                                                    role: "img",
                                                    "aria-hidden": !0,
                                                    children: "\uD83C\uDF89"
                                                })]
                                            }) : (0, a.jsxs)(a.Fragment, {
                                                children: [M ? E.default.Messages.SKIP : E.default.Messages.NEXT, (0, a.jsx)(c.default, {
                                                    className: O.arrow,
                                                    direction: c.default.Directions.RIGHT
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    headerId: t,
                    guild: l,
                    step: n,
                    lastPrompt: o,
                    questionCount: i,
                    currentPrompt: d,
                    selectOption: u,
                    gotoPrevPrompt: m,
                    gotoNextPrompt: f,
                    completeOnboarding: h
                } = e, N = (0, r.useStateFromStoresArray)([g.default], () => g.default.getOnboardingResponsesForPrompt(l.id, d.id)), C = 0 === N.length && (null == d ? void 0 : d.required), j = null == d ? void 0 : d.options.filter(e => N.includes(e.id)), _ = (0, x.getSelectedRoleIds)(j), T = (0, x.getSelectedChannelIds)(j), b = 0 === N.length, {
                    helpText: M,
                    helpTextAdditional: R
                } = (0, p.default)({
                    guild: l,
                    prompt: d,
                    selectedRoleIds: _,
                    selectedChannelIds: T,
                    itemHook: I
                });
                return (0, a.jsx)("div", {
                    className: O.prompt,
                    children: (0, a.jsxs)("div", {
                        className: O.promptContent,
                        children: [(0, a.jsxs)(s.ScrollerThin, {
                            className: O.scrollerContent,
                            children: [(0, a.jsxs)("div", {
                                className: O.questionHeader,
                                children: [(0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: E.default.Messages.ONBOARDING_QUESTION_COUNT.format({
                                        currentQuestion: n + 1,
                                        questionCount: i
                                    })
                                }), d.required ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        className: O.headerSeparator,
                                        children: "\xb7"
                                    }), (0, a.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-brand",
                                        children: E.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                                    })]
                                }) : null]
                            }), (0, a.jsx)(s.Heading, {
                                className: O.title,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                id: t,
                                children: d.title
                            }), (0, a.jsx)("div", {
                                className: O.promptOptions,
                                children: d.options.map(e => (0, a.jsx)(v.default, {
                                    guildId: l.id,
                                    option: e,
                                    onSelect: t => u(d.id, e.id, null != t && t),
                                    selected: N.includes(e.id)
                                }, e.id))
                            })]
                        }), (0, a.jsxs)("div", {
                            className: O.navButtons,
                            children: [(0, a.jsx)("div", {
                                className: O.leftButtons,
                                children: n > 0 && (0, a.jsxs)(s.Button, {
                                    className: O.button,
                                    innerClassName: O.buttonInner,
                                    onClick: () => m(N.length),
                                    size: s.Button.Sizes.MEDIUM,
                                    look: s.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.Button.Colors.PRIMARY,
                                    children: [(0, a.jsx)(c.default, {
                                        className: O.arrow,
                                        direction: c.default.Directions.LEFT
                                    }), E.default.Messages.BACK]
                                })
                            }), (0, a.jsxs)("div", {
                                className: O.rightButtons,
                                children: [(0, a.jsxs)(s.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [M, " ", R]
                                }), (0, a.jsx)(s.Tooltip, {
                                    text: C ? E.default.Messages.ONBOARDING_REQUIRED_QUESTION : null,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, a.jsx)(s.Button, {
                                            className: O.button,
                                            innerClassName: O.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onClick: () => o ? h() : f(N.length),
                                            disabled: C,
                                            size: s.Button.Sizes.MEDIUM,
                                            look: s.Button.Looks.FILLED,
                                            grow: !1,
                                            color: b ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                            children: o ? (0, a.jsxs)(a.Fragment, {
                                                children: [E.default.Messages.FINISH, (0, a.jsx)("span", {
                                                    className: O.finishEmoji,
                                                    role: "img",
                                                    "aria-hidden": !0,
                                                    children: "\uD83C\uDF89"
                                                })]
                                            }) : (0, a.jsxs)(a.Fragment, {
                                                children: [b ? E.default.Messages.SKIP : E.default.Messages.NEXT, (0, a.jsx)(c.default, {
                                                    className: O.arrow,
                                                    direction: c.default.Directions.RIGHT
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })]
                        })]
                    })
                })
            }

            function M(e) {
                let {
                    guild: t,
                    prompts: l,
                    step: s,
                    selectOption: u,
                    completeOnboarding: c,
                    setCurrentStep: h,
                    headerId: g,
                    disableTracking: x
                } = e, p = (0, r.default)([d.default], () => d.default.getRulesPrompt(t.id));
                n.useEffect(() => {
                    i.default.fetchVerificationForm(t.id)
                }, [t.id]);
                let v = l[s],
                    N = s + 1 >= l.length && !_(p),
                    E = l[0].required;
                n.useEffect(() => {
                    !x && m.default.track(j.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.id),
                        step: 0,
                        required: E
                    })
                }, [t.id, E, x]);
                let O = e => {
                        !x && (m.default.track(j.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(t.id),
                            step: s,
                            options_selected: e,
                            skipped: 0 === e,
                            back: !1,
                            in_onboarding: !0,
                            is_final_step: !1
                        }), s < l.length - 1 && m.default.track(j.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(t.id),
                            step: s,
                            required: l[s + 1].required
                        })), s + 1 < l.length ? h(s + 1) : _(p) && h("rules")
                    },
                    I = e => {
                        !x && (m.default.track(j.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(t.id),
                            step: s,
                            skipped: !1,
                            back: !0,
                            options_selected: e,
                            in_onboarding: !0,
                            is_final_step: !1
                        }), s > 0 && m.default.track(j.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(t.id),
                            step: s - 1,
                            required: l[s - 1].required
                        })), h(Math.max(0, s - 1))
                    };
                if (null == v) return null;
                switch (v.type) {
                    case C.OnboardingPromptType.MULTIPLE_CHOICE:
                        return (0, a.jsx)(b, {
                            guild: t,
                            headerId: g,
                            step: s,
                            questionCount: l.length,
                            currentPrompt: v,
                            lastPrompt: N,
                            selectOption: u,
                            gotoPrevPrompt: I,
                            gotoNextPrompt: O,
                            completeOnboarding: c
                        });
                    case C.OnboardingPromptType.DROPDOWN:
                        return (0, a.jsx)(T, {
                            guild: t,
                            headerId: g,
                            step: s,
                            questionCount: l.length,
                            currentPrompt: v,
                            lastPrompt: N,
                            selectOption: u,
                            gotoPrevPrompt: I,
                            gotoNextPrompt: O,
                            completeOnboarding: c
                        });
                    default:
                        (0, f.assertNever)(v.type)
                }
            }
        },
        667712: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("414456"),
                s = l.n(r),
                o = l("301165"),
                i = l("65597"),
                d = l("669491"),
                u = l("819855"),
                c = l("77078"),
                m = l("430568"),
                f = l("841098"),
                h = l("385976"),
                g = l("795228"),
                x = l("695284"),
                p = l("956089"),
                v = l("782340"),
                N = l("489319");

            function C(e) {
                var t;
                let {
                    guildId: l,
                    option: r,
                    selected: C,
                    onSelect: j,
                    hideMemberCount: E,
                    canBeNew: O
                } = e, I = (0, u.isThemeDark)((0, f.default)()), [_, T] = n.useState(!1), b = _ && !E, M = n.useRef(null), {
                    reducedMotion: R
                } = n.useContext(c.AccessibilityPreferencesContext), S = (0, i.default)([h.default], () => {
                    var e, l, a;
                    return (null === (e = r.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (t = null === (l = h.default.getCustomEmojiById(null === (a = r.emoji) || void 0 === a ? void 0 : a.id)) || void 0 === l ? void 0 : l.animated) && void 0 !== t && t
                }), A = (0, g.default)(l, 1e3), D = null == A || null == r.roleIds ? 0 : Math.max(...r.roleIds.map(e => A[e])), B = O && !C && r.isUnseen, k = (0, o.useSpring)({
                    transform: C || R.enabled ? "scale(1)" : "scale(0.7)",
                    opacity: C ? 1 : 0,
                    config: {
                        duration: 150
                    }
                }), L = (0, c.useToken)(d.default.colors.BACKGROUND_MODIFIER_ACCENT), y = (0, c.useToken)(d.default.unsafe_rawColors.BRAND_500), P = (0, o.useSpring)({
                    from: {
                        color: y.spring()
                    },
                    color: L.spring({
                        opacity: I ? .5 : .25
                    }),
                    config: {
                        duration: 300
                    },
                    delay: 500
                }), w = (0, o.useTransition)(b, {
                    from: {
                        transform: R.enabled ? "translateX(0)" : "translateX(8px)",
                        opacity: 0
                    },
                    enter: {
                        transform: "translateX(0)",
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    trail: 400,
                    config: {
                        duration: 150
                    }
                }), [U, G] = n.useState(!1);
                n.useEffect(() => {
                    if (b) return M.current = setTimeout(() => {
                        T(!1), M.current = null
                    }, 3e3), () => {
                        null != M.current && clearTimeout(M.current)
                    }
                }, [b]);
                let F = s(N.optionButtonWrapper, {
                        [N.selected]: C,
                        [N.pressed]: U
                    }),
                    H = B ? {
                        borderColor: P.color
                    } : {};
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.animated.div, {
                        style: H,
                        className: F,
                        children: (0, a.jsxs)(c.Clickable, {
                            className: s(N.optionButton),
                            onClick: () => {
                                T(!C), j(!C)
                            },
                            onMouseDown: () => G(!0),
                            onMouseUp: () => G(!1),
                            children: [null != r.emoji && (null != r.emoji.id || null != r.emoji.name) ? (0, a.jsx)(m.default, {
                                animated: r.emoji.animated || S,
                                className: N.buttonEmoji,
                                emojiId: r.emoji.id,
                                emojiName: r.emoji.name
                            }) : null, (0, a.jsxs)("div", {
                                className: N.buttonText,
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: r.title
                                }), r.description.length > 0 ? (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: r.description
                                }) : null]
                            }), (0, a.jsx)(o.animated.div, {
                                className: N.checkIcon,
                                style: k,
                                children: (0, a.jsx)(x.default, {
                                    width: 10,
                                    height: 10,
                                    color: d.default.unsafe_rawColors.WHITE_500.css
                                })
                            }), w((e, t) => D > 0 && t && (0, a.jsx)(o.animated.div, {
                                className: N.memberCount,
                                style: e,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: v.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                                        memberCount: D
                                    })
                                })
                            })), B && (0, a.jsx)(p.TextBadge, {
                                color: d.default.unsafe_rawColors.BRAND_260.css,
                                text: v.default.Messages.NEW,
                                className: N.newBadge
                            })]
                        })
                    })
                })
            }
        },
        469242: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("448105"),
                s = l.n(r),
                o = l("669491"),
                i = l("77078"),
                d = l("430568"),
                u = l("954419"),
                c = l("945330"),
                m = l("956089"),
                f = l("782340"),
                h = l("191134");

            function g(e) {
                return null != e && (null != e.id || null != e.name)
            }
            let x = {
                ...u.DEFAULT_SELECT_STYLES,
                control: (e, t) => {
                    let {
                        isDisabled: l,
                        menuIsOpen: a
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: l ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: a ? "8px 8px 0 0" : "8px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: l ? "not-allowed" : void 0,
                        pointerEvents: l ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                valueContainer: e => ({
                    ...e,
                    padding: "8px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    cursor: "text"
                }),
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start",
                    paddingTop: 4
                }),
                option: (e, t) => {
                    let {
                        isSelected: l,
                        isFocused: a
                    } = t;
                    return {
                        ...e,
                        ...l ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : a ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        },
                        "&:hover [data-hover=true]": {
                            opacity: 1
                        }
                    }
                }
            };

            function p(e) {
                let {
                    options: t,
                    value: l,
                    onChange: r,
                    canBeNew: p,
                    memberCounts: v
                } = e, N = e => {
                    e.preventDefault(), e.stopPropagation()
                }, C = n.useCallback(e => {
                    var n, s, o, u;
                    return (0, a.jsxs)("div", {
                        className: h.selectValuePill,
                        onMouseDown: N,
                        children: [g(e.emoji) && (0, a.jsx)(d.default, {
                            emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                            emojiName: null === (s = e.emoji) || void 0 === s ? void 0 : s.name,
                            animated: null !== (u = null === (o = e.emoji) || void 0 === o ? void 0 : o.animated) && void 0 !== u && u
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: e.title
                        }), (0, a.jsx)(i.Clickable, {
                            className: h.selectValuePillClose,
                            onClick: () => {
                                r(t.filter(t => l.includes(t.id) && t.id !== e.id))
                            },
                            children: (0, a.jsx)(c.default, {
                                className: h.selectValuePillCloseIcon
                            })
                        })]
                    })
                }, [r, t, l]), j = n.useCallback(e => {
                    var t, l, n, r;
                    let s = null == v || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => v[e])),
                        u = null != v && s > 0;
                    return (0, a.jsxs)("div", {
                        className: h.selectOption,
                        children: [(0, a.jsxs)("div", {
                            className: h.selectOptionTitle,
                            children: [g(e.emoji) && (0, a.jsx)(d.default, {
                                emojiId: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                                emojiName: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
                                animated: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.animated) && void 0 !== r && r
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: e.title
                            })]
                        }), p && e.isUnseen && (0, a.jsx)(m.TextBadge, {
                            color: o.default.unsafe_rawColors.BRAND_260.css,
                            text: f.default.Messages.NEW,
                            className: h.optionNewBadge
                        }), u && (0, a.jsx)("div", {
                            className: h.selectOptionMemberCount,
                            "data-hover": !0,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: f.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                                    memberCount: s
                                })
                            })
                        })]
                    })
                }, [p, v]), E = n.useCallback((e, t) => {
                    let {
                        data: l
                    } = e;
                    return 0 === t.length || s(t.toLowerCase(), l.title.toLowerCase())
                }, []);
                return (0, a.jsx)(u.default, {
                    styleOverrides: x,
                    clearable: !1,
                    isMulti: !0,
                    options: t,
                    onChange: r,
                    value: l,
                    closeMenuOnSelect: !1,
                    multiValueRenderer: C,
                    optionRenderer: j,
                    filterOption: E
                })
            }
        },
        547840: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("65597"),
                s = l("819855"),
                o = l("77078"),
                i = l("841098"),
                d = l("716241"),
                u = l("50926"),
                c = l("526253"),
                m = l("367376"),
                f = l("137215"),
                h = l("599110"),
                g = l("49111"),
                x = l("782340"),
                p = l("710362");

            function v(e) {
                var t;
                let {
                    guild: l,
                    prompts: v,
                    completeOnboarding: N,
                    setCurrentStep: C,
                    disableTracking: j,
                    previousPromptIndex: E
                } = e, O = n.useRef(null), I = (0, r.default)([c.default], () => c.default.getRulesPrompt(l.id)), [_, T] = n.useState(null !== (t = null == I ? void 0 : I.response) && void 0 !== t && t), b = (0, r.default)([c.default], () => c.default.get(l.id)), M = (0, i.default)(), R = n.useRef(null), S = n.useRef(null), A = (0, s.isThemeDark)(M) ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))" : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))", D = n.useCallback(async () => {
                    if (null != b && null != I) {
                        try {
                            await u.default.submitVerificationForm(l.id, {
                                ...b,
                                formFields: [{
                                    ...I,
                                    response: _
                                }]
                            })
                        } catch {}
                        N()
                    }
                }, [l.id, b, I, _, N]);

                function B(e) {
                    let [t] = e;
                    t.isIntersecting && T(!0)
                }
                return (n.useEffect(() => {
                    let e = new IntersectionObserver(B, {
                            root: R.current,
                            rootMargin: "0px",
                            threshold: 0
                        }),
                        t = S.current;
                    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
                        null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
                    }
                }, [S, R]), null == I) ? null : (0, a.jsx)("div", {
                    className: p.prompt,
                    children: (0, a.jsxs)("div", {
                        className: p.promptContent,
                        ref: R,
                        children: [(0, a.jsxs)(o.AdvancedScrollerThin, {
                            className: p.scrollerContent,
                            ref: O,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: x.default.Messages.ONBOARDING_RULES_STEP
                            }), (0, a.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                children: x.default.Messages.ONBOARDING_RULES_TITLE
                            }), (0, a.jsx)("div", {
                                className: p.termsFieldBody,
                                ref: S,
                                children: I.values.map((e, t) => (0, a.jsxs)("div", {
                                    className: p.termsRow,
                                    children: [(0, a.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: "".concat(t + 1, ".")
                                    }), (0, a.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: p.termsRowContent,
                                        children: m.default.parseGuildVerificationFormRule(e, !0, {
                                            channelId: l.rulesChannelId
                                        })
                                    })]
                                }, "term-".concat(t)))
                            })]
                        }), (0, a.jsx)("div", {
                            className: p.overlay,
                            style: {
                                background: A
                            }
                        }), (0, a.jsxs)("div", {
                            className: p.navButtons,
                            children: [(0, a.jsx)("div", {
                                className: p.leftButtons,
                                children: -1 !== E && (0, a.jsxs)(o.Button, {
                                    innerClassName: p.buttonInner,
                                    onClick: () => {
                                        !j && (h.default.track(g.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                                            ...(0, d.collectGuildAnalyticsMetadata)(l.id),
                                            step: -1,
                                            skipped: !1,
                                            back: !0,
                                            options_selected: 0,
                                            in_onboarding: !0,
                                            is_final_step: !1
                                        }), E >= 0 && h.default.track(g.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                                            ...(0, d.collectGuildAnalyticsMetadata)(l.id),
                                            step: E,
                                            required: v[E].required
                                        })), C(E)
                                    },
                                    size: o.Button.Sizes.MEDIUM,
                                    look: o.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.Button.Colors.PRIMARY,
                                    children: [(0, a.jsx)(f.default, {
                                        className: p.arrow,
                                        direction: f.default.Directions.LEFT
                                    }), x.default.Messages.BACK]
                                })
                            }), (0, a.jsxs)("div", {
                                className: p.rightButtons,
                                children: [(0, a.jsx)(o.Text, {
                                    className: p.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: _ ? x.default.Messages.MEMBER_VERIFICATION_READ_AGREE_RULES : x.default.Messages.MEMBER_VERIFICATION_MUST_READ_RULES
                                }), (0, a.jsxs)(o.Button, {
                                    innerClassName: p.buttonInner,
                                    onClick: D,
                                    disabled: !_,
                                    size: o.Button.Sizes.MEDIUM,
                                    look: o.Button.Looks.FILLED,
                                    grow: !1,
                                    color: o.Button.Colors.BRAND,
                                    children: [x.default.Messages.FINISH, (0, a.jsx)("span", {
                                        className: p.finishEmoji,
                                        role: "img",
                                        "aria-hidden": !0,
                                        children: "\uD83C\uDF89"
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        695284: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                r = l("269096"),
                s = l("75196"),
                o = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: l,
                        viewBox: "0 0 11 10",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.20096 9.92805L0.157959 5.88505L1.92496 4.11705L3.88196 6.07305L8.02396 0.274048L10.059 1.72705L4.20096 9.92805Z"
                        })
                    })
                }, r.CheckmarkLargeIcon)
        }
    }
]);