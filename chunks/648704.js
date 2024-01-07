            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("907002"),
                o = s("446674"),
                d = s("669491"),
                u = s("266491"),
                c = s("819855"),
                E = s("77078"),
                _ = s("841098"),
                T = s("206230"),
                I = s("716241"),
                S = s("137215"),
                N = s("965397"),
                g = s("599110"),
                f = s("659500"),
                A = s("900938"),
                L = s("851490"),
                m = s("131835"),
                C = s("435076"),
                O = s("642807"),
                h = s("330724"),
                R = s("136278"),
                D = s("397947"),
                M = s("259483"),
                G = s("867928"),
                x = s("545901"),
                p = s("706866"),
                U = s("764151"),
                v = s("832931"),
                j = s("49111"),
                P = s("782340"),
                y = s("505324");

            function b() {
                let e = (0, o.useStateFromStores)([A.default], () => A.default.getGuild());
                return null == e ? null : (0, a.jsx)(B, {
                    guild: e
                })
            }

            function B(e) {
                let {
                    guild: t
                } = e, l = t.id, A = (0, o.useStateFromStores)([D.default], () => D.default.getCurrentPage()), b = (0, G.default)(l), {
                    hasChanges: B,
                    hasConfiguredAnythingForCurrentStep: F,
                    hasErrors: H
                } = (0, o.useStateFromStoresObject)([D.default], () => ({
                    hasChanges: D.default.hasChanges(),
                    hasConfiguredAnythingForCurrentStep: D.default.hasConfiguredAnythingForCurrentStep(),
                    hasErrors: D.default.hasErrors()
                })), V = (0, o.useStateFromStores)([D.default], () => {
                    let e = (0, M.pageToEducationUpsellType)(A);
                    return null != e && !D.default.isEducationUpsellDismissed(e)
                }), k = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), w = (0, _.default)(), Y = n.useRef(null), [{
                    spring: K
                }, W] = (0, r.useSpring)(() => ({
                    spring: 0
                }));
                n.useEffect(() => {
                    function e() {
                        W({
                            spring: 1,
                            config: r.config.gentle
                        }), W({
                            spring: 0,
                            config: r.config.gentle,
                            delay: 1e3
                        })
                    }
                    return f.ComponentDispatch.subscribe(j.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                        f.ComponentDispatch.unsubscribe(j.ComponentActions.EMPHASIZE_NOTICE, e)
                    }
                }, [W]);
                let z = (0, E.useToken)(d.default.colors.BACKGROUND_FLOATING).hex(),
                    X = (0, E.useToken)(d.default.unsafe_rawColors.PRIMARY_160).hex(),
                    Z = (0, c.isThemeDark)(w) ? z : X,
                    J = K.to({
                        range: [0, 1],
                        output: [(0, E.useToken)(d.default.unsafe_rawColors.WHITE_500).hex(), (0, E.useToken)(d.default.colors.TEXT_NORMAL).hex()]
                    }),
                    Q = K.to({
                        range: [0, 1],
                        output: [Z, (0, E.useToken)(d.default.colors.STATUS_DANGER).hex()]
                    });
                if (b) {
                    if (A === M.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return (0, a.jsx)(p.GuildSettingsDefaultChannelsNotice, {});
                    if (A === M.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return (0, a.jsx)(v.GuildSettingsOnboardingPromptsNotice, {});
                    else if (A === M.GuildSettingsOnboardingPage.HOME_SETTINGS) return (0, a.jsx)(U.GuildSettingsHomeSettingsNotice, {})
                }
                let q = A === M.ONBOARDING_STEPS[M.ONBOARDING_STEPS.length - 1],
                    $ = async () => {
                        let e = R.default.advancedMode;
                        if (B) try {
                            if (A === M.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) await (0, L.saveDefaultChannels)(t).then(() => e ? (0, h.saveGuildOnboardingPrompts)(t, {
                                ignoreDefaultPrompt: !0
                            }) : Promise.resolve());
                            else if (A === M.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) await (0, h.saveGuildOnboardingPrompts)(t, {
                                ignoreDefaultPrompt: !0
                            });
                            else if (A === M.GuildSettingsOnboardingPage.HOME_SETTINGS) {
                                let e = O.default.getSettings();
                                await (0, C.saveHomeSettings)(t.id, e)
                            }
                        } catch {
                            return !1
                        }
                        return !0
                    }, ee = async () => {
                        g.default.track(j.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, I.collectGuildAnalyticsMetadata)(l),
                            step: M.GuildSettingsOnboardingPage[A],
                            back: !1,
                            skip: !B
                        }), (0, m.dismissEducationUpsell)((0, M.pageToEducationUpsellType)(A)), await $() && (0, m.goToNextOnboardingStep)(l, A)
                    }, et = async () => {
                        g.default.track(j.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, I.collectGuildAnalyticsMetadata)(l),
                            step: M.GuildSettingsOnboardingPage[A],
                            back: !0,
                            skip: !1
                        }), await $() && (0, m.goToPrevOnboardingStep)(l, A)
                    }, es = null;
                V && (A === M.GuildSettingsOnboardingPage.SAFETY_CHECK ? es = (0, a.jsx)(x.SafetyCheckUpsell, {}) : A === M.GuildSettingsOnboardingPage.DEFAULT_CHANNELS ? es = (0, a.jsx)(x.DefaultChannelsUpsell, {}) : A === M.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS ? es = (0, a.jsx)(x.CustomizationQuestionsUpsell, {}) : A === M.GuildSettingsOnboardingPage.HOME_SETTINGS && (es = (0, a.jsx)(x.HomeSettingsUpsell, {})));
                let ea = (0, a.jsx)(E.Button, {
                        className: i(y.button, {
                            [y.hidden]: V
                        }),
                        color: E.Button.Colors.PRIMARY,
                        look: E.Button.Looks.OUTLINED,
                        size: E.Button.Sizes.SMALL,
                        onClick: et,
                        disabled: V || H,
                        children: (0, a.jsxs)("span", {
                            className: y.button,
                            children: [(0, a.jsx)(S.default, {
                                className: y.arrow,
                                direction: S.default.Directions.LEFT
                            }), P.default.Messages.BACK]
                        })
                    }),
                    en = (0, a.jsx)(E.Button, {
                        className: y.button,
                        color: F ? E.Button.Colors.BRAND : E.Button.Colors.PRIMARY,
                        look: E.Button.Looks.FILLED,
                        size: E.Button.Sizes.SMALL,
                        onClick: ee,
                        disabled: V || H,
                        children: (0, a.jsxs)(r.animated.span, {
                            className: y.button,
                            style: {
                                color: J
                            },
                            children: [F ? P.default.Messages.NEXT : P.default.Messages.SKIP, (0, a.jsx)(S.default, {
                                className: y.arrow,
                                direction: S.default.Directions.RIGHT
                            })]
                        })
                    });
                return (0, a.jsx)(u.default, {
                    component: "div",
                    children: (0, a.jsx)(N.default, {
                        className: i(y.noticeRegion),
                        children: (0, a.jsx)(r.animated.div, {
                            className: y.container,
                            style: {
                                backgroundColor: Q
                            },
                            children: (0, a.jsxs)("div", {
                                className: y.flexContainer,
                                ref: Y,
                                children: [V ? (0, a.jsxs)("div", {
                                    className: y.educationUpsellRoot,
                                    children: [(0, a.jsx)("img", {
                                        className: i(y.wumpus, {
                                            [y.animated]: !k
                                        }),
                                        src: s("353773"),
                                        alt: "wumpus"
                                    }), (0, a.jsxs)("div", {
                                        className: y.educationUpsell,
                                        children: [es, (0, a.jsx)("div", {
                                            className: y.educationUpsellArrow
                                        })]
                                    })]
                                }) : null, (0, a.jsx)(E.FocusRingScope, {
                                    containerRef: Y,
                                    children: (0, a.jsxs)("div", {
                                        className: y.actions,
                                        children: [ea, (0, a.jsxs)("div", {
                                            className: y.next,
                                            children: [H ? (0, a.jsx)(E.Text, {
                                                variant: "text-sm/normal",
                                                color: "status-warning",
                                                children: P.default.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                                            }) : null, q ? null : en]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }