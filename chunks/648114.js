            "use strict";
            s.r(t), s.d(t, {
                ThemeSelectionGroupType: function() {
                    return a
                },
                trackClientThemeUpdated: function() {
                    return Q
                },
                default: function() {
                    return K
                }
            }), s("794252"), s("222007");
            var a, n, r = s("37983"),
                i = s("884691"),
                l = s("414456"),
                u = s.n(l),
                d = s("506838"),
                c = s("446674"),
                o = s("151426"),
                E = s("819855"),
                T = s("77078"),
                _ = s("452804"),
                S = s("206230"),
                m = s("812204"),
                f = s("685665"),
                h = s("626301"),
                I = s("917247"),
                p = s("956597"),
                N = s("891653"),
                R = s("505093"),
                C = s("161778"),
                g = s("168973"),
                v = s("491605"),
                x = s("476765"),
                A = s("599110"),
                P = s("32531"),
                U = s("714657"),
                y = s("164546"),
                O = s("941719"),
                D = s("49111"),
                w = s("646718"),
                M = s("116319"),
                G = s("397336"),
                L = s("843455"),
                j = s("782340"),
                H = s("809404");
            (n = a || (a = {})).EDITOR = "EDITOR", n.SETTINGS = "SETTINGS";
            let k = Object.freeze({
                    EDITOR: G.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: G.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                b = i.createContext({}),
                Q = e => {
                    let {
                        isPersisted: t,
                        themeName: s,
                        analyticsLocations: a
                    } = e;
                    A.default.track(D.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: w.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: s,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                F = e => {
                    let {
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    } = e, n = (0, d.match)({
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => j.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, r.jsxs)("div", {
                        className: H.title,
                        children: [(0, r.jsx)(T.Heading, {
                            "aria-label": n,
                            variant: "text-md/medium",
                            children: n
                        }), (0, r.jsx)(N.default, {
                            className: H.premiumIcon
                        })]
                    })
                },
                B = e => {
                    var t, s;
                    let {
                        type: a,
                        isPreview: n,
                        isCoachmark: i
                    } = e, l = (null === (s = (0, I.usePremiumTrialOffer)()) || void 0 === s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2;
                    if (l && n) return null;
                    let u = (0, d.match)({
                        type: a,
                        isPreview: n,
                        isCoachmark: i
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: h.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: h.navigateToPremiumMarketingPage
                    })).otherwise(() => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, r.jsx)(T.Heading, {
                        variant: "text-sm/normal",
                        children: u
                    })
                },
                q = e => {
                    let {
                        type: t,
                        children: s
                    } = e, a = (0, x.useUID)(), n = (0, T.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), l = i.useMemo(() => ({
                        type: t,
                        delay: k[t]
                    }), [t]);
                    return (0, r.jsx)(b.Provider, {
                        value: l,
                        children: (0, r.jsx)("div", {
                            ...n,
                            className: H.container,
                            children: s
                        })
                    })
                };
            q.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: s
                } = i.useContext(b), {
                    analyticsLocations: a
                } = (0, f.default)(m.default.CLIENT_THEMES_THEME_SELECTOR), [n, l, d] = (0, c.useStateFromStoresArray)([C.default, g.default, U.default], () => [C.default.theme, null == U.default.gradientPreset, g.default.useSystemTheme === M.SystemThemeState.ON]), o = e => {
                    (0, P.resetBackgroundGradientPreset)(), Q({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, _.saveClientTheme)({
                        theme: e
                    }, s)
                };
                return (0, r.jsxs)("section", {
                    className: u(H.presets, t),
                    children: [(0, r.jsx)(y.DefaultThemeSelection, {
                        theme: L.ThemeTypes.LIGHT,
                        isSelected: l && !d && (0, E.isThemeLight)(n),
                        onSelect: () => o(L.ThemeTypes.LIGHT)
                    }), (0, r.jsx)(y.DefaultThemeSelection, {
                        theme: L.ThemeTypes.DARK,
                        isSelected: l && !d && (0, E.isThemeDark)(n),
                        onSelect: () => o(L.ThemeTypes.DARK)
                    }), (0, r.jsx)(y.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: l && d,
                        onSelect: () => o("system")
                    })]
                })
            }, q.Gradient = e => {
                var t, a;
                let {
                    className: n,
                    renderCTAButtons: l,
                    disabled: u = !1
                } = e, {
                    type: d,
                    delay: E
                } = i.useContext(b), {
                    analyticsLocations: T
                } = (0, f.default)(m.default.CLIENT_THEMES_THEME_SELECTOR), [N, C, g] = (0, c.useStateFromStoresArray)([U.default], () => {
                    var e;
                    return [U.default.isPreview, U.default.isCoachmark, null === (e = U.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [x, A] = i.useState(!1), [D, G] = i.useState(-1), L = (0, c.useStateFromStores)([S.default], () => S.default.useReducedMotion), k = (null === (a = (0, I.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2;
                i.useEffect(() => {
                    (D === O.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === d || g === o.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
                }, [D, d, g]);
                let q = (e, t) => {
                    if ((0, P.updateBackgroundGradientPreset)(e.id), Q({
                            isPersisted: !N,
                            analyticsLocations: T,
                            themeName: o.BackgroundGradientPresetId[e.id]
                        }), N) {
                        (0, R.setUseSystemTheme)(M.SystemThemeState.OFF);
                        return
                    }
                    if ((0, _.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, E), null != t) {
                        if (x && A(!1), t <= D || 0 === t) {
                            G(0);
                            return
                        }
                        G(e => e + 1)
                    }
                };
                return (0, r.jsxs)("section", {
                    className: n,
                    children: ["EDITOR" === d && N && k ? (0, r.jsx)(p.default, {
                        type: w.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2,
                        children: j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: h.navigateToPremiumMarketingPage
                        })
                    }) : (0, r.jsxs)("div", {
                        className: H.header,
                        children: [(0, r.jsxs)("div", {
                            className: H.headings,
                            children: [(0, r.jsx)(F, {
                                type: d,
                                isPreview: N,
                                isCoachmark: C
                            }), (0, r.jsx)(B, {
                                type: d,
                                isPreview: N,
                                isCoachmark: C
                            })]
                        }), null == l ? void 0 : l()]
                    }), (0, r.jsxs)("div", {
                        className: H.presets,
                        children: [O.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== o.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, r.jsx)(y.GradientThemeSelection, {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => q(e, t),
                            disabled: u,
                            tabIndex: 0 !== t || u ? void 0 : 0
                        }, e.id)), (() => {
                            if (!x) return null;
                            let e = O.BACKGROUND_GRADIENT_PRESETS_MAP[o.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await s.el("922510").then(s.t.bind(s, "922510", 19));
                                return e
                            }
                            return (0, r.jsxs)("div", {
                                className: H.easterEggSelection,
                                children: [(0, r.jsx)(y.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: g === o.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => q(e)
                                }), (0, r.jsx)(v.default, {
                                    importData: t,
                                    shouldAnimate: !L,
                                    className: H.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var K = q