            "use strict";
            n.r(t), n.d(t, {
                ThemeSelectionGroupType: function() {
                    return a
                },
                trackClientThemeUpdated: function() {
                    return H
                },
                default: function() {
                    return q
                }
            }), n("794252"), n("222007");
            var a, i, s = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("506838"),
                d = n("446674"),
                c = n("151426"),
                f = n("819855"),
                m = n("77078"),
                h = n("452804"),
                g = n("206230"),
                _ = n("812204"),
                S = n("685665"),
                p = n("626301"),
                E = n("917247"),
                T = n("956597"),
                v = n("891653"),
                N = n("505093"),
                y = n("161778"),
                I = n("168973"),
                C = n("491605"),
                A = n("476765"),
                O = n("599110"),
                R = n("32531"),
                M = n("714657"),
                b = n("164546"),
                w = n("941719"),
                P = n("49111"),
                U = n("646718"),
                x = n("116319"),
                D = n("397336"),
                L = n("843455"),
                G = n("782340"),
                k = n("809404");
            (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
            let j = Object.freeze({
                    EDITOR: D.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: D.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                F = l.createContext({}),
                H = e => {
                    let {
                        isPersisted: t,
                        themeName: n,
                        analyticsLocations: a
                    } = e;
                    O.default.track(P.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: U.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: n,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                B = e => {
                    let {
                        type: t,
                        isPreview: n,
                        isCoachmark: a
                    } = e, i = (0, u.match)({
                        type: t,
                        isPreview: n,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => G.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, s.jsxs)("div", {
                        className: k.title,
                        children: [(0, s.jsx)(m.Heading, {
                            "aria-label": i,
                            variant: "text-md/medium",
                            children: i
                        }), (0, s.jsx)(v.default, {
                            className: k.premiumIcon
                        })]
                    })
                },
                Q = e => {
                    var t, n;
                    let {
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    } = e, r = (null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
                    if (r && i) return null;
                    let o = (0, u.match)({
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).otherwise(() => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, s.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: o
                    })
                },
                W = e => {
                    let {
                        type: t,
                        children: n
                    } = e, a = (0, A.useUID)(), i = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), r = l.useMemo(() => ({
                        type: t,
                        delay: j[t]
                    }), [t]);
                    return (0, s.jsx)(F.Provider, {
                        value: r,
                        children: (0, s.jsx)("div", {
                            ...i,
                            className: k.container,
                            children: n
                        })
                    })
                };
            W.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: n
                } = l.useContext(F), {
                    analyticsLocations: a
                } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [i, r, u] = (0, d.useStateFromStoresArray)([y.default, I.default, M.default], () => [y.default.theme, null == M.default.gradientPreset, I.default.useSystemTheme === x.SystemThemeState.ON]), c = e => {
                    (0, R.resetBackgroundGradientPreset)(), H({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, h.saveClientTheme)({
                        theme: e
                    }, n)
                };
                return (0, s.jsxs)("section", {
                    className: o(k.presets, t),
                    children: [(0, s.jsx)(b.DefaultThemeSelection, {
                        theme: L.ThemeTypes.LIGHT,
                        isSelected: r && !u && (0, f.isThemeLight)(i),
                        onSelect: () => c(L.ThemeTypes.LIGHT)
                    }), (0, s.jsx)(b.DefaultThemeSelection, {
                        theme: L.ThemeTypes.DARK,
                        isSelected: r && !u && (0, f.isThemeDark)(i),
                        onSelect: () => c(L.ThemeTypes.DARK)
                    }), (0, s.jsx)(b.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: r && u,
                        onSelect: () => c("system")
                    })]
                })
            }, W.Gradient = e => {
                var t, a;
                let {
                    className: i,
                    renderCTAButtons: r,
                    disabled: o = !1
                } = e, {
                    type: u,
                    delay: f
                } = l.useContext(F), {
                    analyticsLocations: m
                } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [v, y, I] = (0, d.useStateFromStoresArray)([M.default], () => {
                    var e;
                    return [M.default.isPreview, M.default.isCoachmark, null === (e = M.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [A, O] = l.useState(!1), [P, D] = l.useState(-1), L = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), j = (null === (a = (0, E.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
                l.useEffect(() => {
                    (P === w.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || I === c.BackgroundGradientPresetId.EASTER_EGG) && O(!0)
                }, [P, u, I]);
                let W = (e, t) => {
                    if ((0, R.updateBackgroundGradientPreset)(e.id), H({
                            isPersisted: !v,
                            analyticsLocations: m,
                            themeName: c.BackgroundGradientPresetId[e.id]
                        }), v) {
                        (0, N.setUseSystemTheme)(x.SystemThemeState.OFF);
                        return
                    }
                    if ((0, h.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, f), null != t) {
                        if (A && O(!1), t <= P || 0 === t) {
                            D(0);
                            return
                        }
                        D(e => e + 1)
                    }
                };
                return (0, s.jsxs)("section", {
                    className: i,
                    children: ["EDITOR" === u && v && j ? (0, s.jsx)(T.default, {
                        type: U.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2,
                        children: G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: p.navigateToPremiumMarketingPage
                        })
                    }) : (0, s.jsxs)("div", {
                        className: k.header,
                        children: [(0, s.jsxs)("div", {
                            className: k.headings,
                            children: [(0, s.jsx)(B, {
                                type: u,
                                isPreview: v,
                                isCoachmark: y
                            }), (0, s.jsx)(Q, {
                                type: u,
                                isPreview: v,
                                isCoachmark: y
                            })]
                        }), null == r ? void 0 : r()]
                    }), (0, s.jsxs)("div", {
                        className: k.presets,
                        children: [w.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== c.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, s.jsx)(b.GradientThemeSelection, {
                            preset: e,
                            isSelected: I === e.id,
                            onSelect: () => W(e, t),
                            disabled: o,
                            tabIndex: 0 !== t || o ? void 0 : 0
                        }, e.id)), (() => {
                            if (!A) return null;
                            let e = w.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                                return e
                            }
                            return (0, s.jsxs)("div", {
                                className: k.easterEggSelection,
                                children: [(0, s.jsx)(b.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: I === c.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => W(e)
                                }), (0, s.jsx)(C.default, {
                                    importData: t,
                                    shouldAnimate: !L,
                                    className: k.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var q = W