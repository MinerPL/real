            "use strict";
            n.r(t), n.d(t, {
                ThemeSelectionGroupType: function() {
                    return a
                },
                trackClientThemeUpdated: function() {
                    return H
                },
                default: function() {
                    return W
                }
            }), n("794252"), n("222007");
            var a, i, s = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("506838"),
                d = n("446674"),
                c = n("151426"),
                f = n("819855"),
                m = n("77078"),
                _ = n("452804"),
                h = n("206230"),
                g = n("812204"),
                S = n("685665"),
                p = n("626301"),
                E = n("917247"),
                T = n("956597"),
                v = n("891653"),
                N = n("505093"),
                I = n("161778"),
                y = n("168973"),
                C = n("491605"),
                O = n("476765"),
                A = n("599110"),
                M = n("32531"),
                b = n("714657"),
                R = n("164546"),
                w = n("941719"),
                P = n("49111"),
                U = n("646718"),
                D = n("116319"),
                x = n("397336"),
                G = n("843455"),
                L = n("782340"),
                k = n("809404");
            (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
            let j = Object.freeze({
                    EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                F = l.createContext({}),
                H = e => {
                    let {
                        isPersisted: t,
                        themeName: n,
                        analyticsLocations: a
                    } = e;
                    A.default.track(P.AnalyticEvents.CLIENT_THEME_UPDATED, {
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
                    } = e, i = (0, o.match)({
                        type: t,
                        isPreview: n,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => L.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
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
                    let u = (0, o.match)({
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).otherwise(() => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, s.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: u
                    })
                },
                q = e => {
                    let {
                        type: t,
                        children: n
                    } = e, a = (0, O.useUID)(), i = (0, m.useRadioGroup)({
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
            q.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: n
                } = l.useContext(F), {
                    analyticsLocations: a
                } = (0, S.default)(g.default.CLIENT_THEMES_THEME_SELECTOR), [i, r, o] = (0, d.useStateFromStoresArray)([I.default, y.default, b.default], () => [I.default.theme, null == b.default.gradientPreset, y.default.useSystemTheme === D.SystemThemeState.ON]), c = e => {
                    (0, M.resetBackgroundGradientPreset)(), H({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, _.saveClientTheme)({
                        theme: e
                    }, n)
                };
                return (0, s.jsxs)("section", {
                    className: u(k.presets, t),
                    children: [(0, s.jsx)(R.DefaultThemeSelection, {
                        theme: G.ThemeTypes.LIGHT,
                        isSelected: r && !o && (0, f.isThemeLight)(i),
                        onSelect: () => c(G.ThemeTypes.LIGHT)
                    }), (0, s.jsx)(R.DefaultThemeSelection, {
                        theme: G.ThemeTypes.DARK,
                        isSelected: r && !o && (0, f.isThemeDark)(i),
                        onSelect: () => c(G.ThemeTypes.DARK)
                    }), (0, s.jsx)(R.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: r && o,
                        onSelect: () => c("system")
                    })]
                })
            }, q.Gradient = e => {
                var t, a;
                let {
                    className: i,
                    renderCTAButtons: r,
                    disabled: u = !1
                } = e, {
                    type: o,
                    delay: f
                } = l.useContext(F), {
                    analyticsLocations: m
                } = (0, S.default)(g.default.CLIENT_THEMES_THEME_SELECTOR), [v, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
                    var e;
                    return [b.default.isPreview, b.default.isCoachmark, null === (e = b.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [O, A] = l.useState(!1), [P, x] = l.useState(-1), G = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), j = (null === (a = (0, E.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
                l.useEffect(() => {
                    (P === w.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === o || y === c.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
                }, [P, o, y]);
                let q = (e, t) => {
                    if ((0, M.updateBackgroundGradientPreset)(e.id), H({
                            isPersisted: !v,
                            analyticsLocations: m,
                            themeName: c.BackgroundGradientPresetId[e.id]
                        }), v) {
                        (0, N.setUseSystemTheme)(D.SystemThemeState.OFF);
                        return
                    }
                    if ((0, _.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, f), null != t) {
                        if (O && A(!1), t <= P || 0 === t) {
                            x(0);
                            return
                        }
                        x(e => e + 1)
                    }
                };
                return (0, s.jsxs)("section", {
                    className: i,
                    children: ["EDITOR" === o && v && j ? (0, s.jsx)(T.default, {
                        type: U.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2,
                        children: L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: p.navigateToPremiumMarketingPage
                        })
                    }) : (0, s.jsxs)("div", {
                        className: k.header,
                        children: [(0, s.jsxs)("div", {
                            className: k.headings,
                            children: [(0, s.jsx)(B, {
                                type: o,
                                isPreview: v,
                                isCoachmark: I
                            }), (0, s.jsx)(Q, {
                                type: o,
                                isPreview: v,
                                isCoachmark: I
                            })]
                        }), null == r ? void 0 : r()]
                    }), (0, s.jsxs)("div", {
                        className: k.presets,
                        children: [w.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== c.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, s.jsx)(R.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === e.id,
                            onSelect: () => q(e, t),
                            disabled: u,
                            tabIndex: 0 !== t || u ? void 0 : 0
                        }, e.id)), (() => {
                            if (!O) return null;
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
                                children: [(0, s.jsx)(R.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => q(e)
                                }), (0, s.jsx)(C.default, {
                                    importData: t,
                                    shouldAnimate: !G,
                                    className: k.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var W = q