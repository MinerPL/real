(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62597"], {
        44771: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                i = s("884691"),
                n = s("414456"),
                r = s.n(n),
                l = s("917351"),
                d = s.n(l),
                u = s("77078"),
                c = s("164546"),
                o = s("513196"),
                T = s("42723"),
                m = s("605475"),
                E = s("49111"),
                h = s("782340"),
                I = s("279732");
            let _ = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
                f = () => {
                    var e;
                    return null !== (e = d.sample(_())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: s,
                    onSelect: n,
                    isSelected: l = !1,
                    tabIndex: d,
                    children: T
                } = e, [h, _] = i.useState(m.ICONS_BY_ID[t].name), S = t === o.PremiumAppIconIds.PIRATE, N = (0, u.useRadioItem)({
                    label: h,
                    isSelected: l
                });
                return (0, a.jsx)(u.Tooltip, {
                    text: h,
                    onTooltipShow: () => S && _(f()),
                    children: e => (0, a.jsxs)("div", {
                        className: I.appIconSelectionContainer,
                        children: [(0, a.jsx)(u.Clickable, {
                            ...e,
                            ...N,
                            tabIndex: null != d ? d : N.tabIndex,
                            className: r(I.appIconSelection, {
                                [I.selected]: l
                            }, s),
                            onClick: l ? E.NOOP : () => null == n ? void 0 : n(t),
                            children: T
                        }), l && (0, a.jsx)(c.SelectionCircle, {})]
                    })
                })
            }

            function S(e) {
                let {
                    icon: t,
                    isSelected: s,
                    disabled: i,
                    tabIndex: n,
                    onSelect: r
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: i ? void 0 : r,
                    isSelected: s,
                    id: t.id,
                    className: i ? I.disabled : void 0,
                    tabIndex: n,
                    children: (0, a.jsx)(T.default, {
                        id: t.id,
                        width: m.CUSTOM_BASE_SIZE
                    })
                })
            }
        },
        433724: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var i = s("446674"),
                n = s("77078"),
                r = s("913144"),
                l = s("891653"),
                d = s("476765"),
                u = s("805199"),
                c = s("44771"),
                o = s("605475"),
                T = s("782340"),
                m = s("143598");

            function E(e) {
                let {
                    className: t,
                    disabled: s,
                    renderCTAButtons: E
                } = e, [h, I] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen]), _ = (0, d.useUID)(), f = (0, n.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: _
                }), S = e => {
                    r.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...f,
                    className: m.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: m.header,
                            children: [(0, a.jsxs)("div", {
                                className: m.headings,
                                children: [I ? null : (0, a.jsxs)("div", {
                                    className: m.title,
                                    children: [(0, a.jsx)(n.Heading, {
                                        variant: "text-md/medium",
                                        children: T.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(l.default, {
                                        className: m.premiumIcon
                                    })]
                                }), (0, a.jsx)(n.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == E ? void 0 : E()]
                        }), (0, a.jsx)("div", {
                            className: m.presets,
                            children: o.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(c.default, {
                                icon: e,
                                isSelected: h === e.id,
                                onSelect: e => S(e),
                                disabled: s,
                                tabIndex: 0 !== t || s ? void 0 : 0
                            }, e.id))
                        })]
                    })
                })
            }
        },
        788434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openChangelog: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var i = s("77078"),
                n = s("234222");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, i.hasAnyModalOpen)()) && (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("170935").then(s.bind(s, "170935"));
                    return t => (0, a.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: n.CHANGELOG_MODAL_KEY
                })
            }
        },
        92130: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var i = e => {
                let {
                    fill: t,
                    className: s
                } = e;
                return (0, a.jsxs)("svg", {
                    className: s,
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: [(0, a.jsx)("g", {
                        id: "Frame_-_24px",
                        children: (0, a.jsx)("rect", {
                            y: "0",
                            fill: "none",
                            width: "24",
                            height: "24"
                        })
                    }), (0, a.jsx)("g", {
                        id: "Filled_Icons",
                        children: (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                fill: t,
                                d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10    C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z"
                            }), (0, a.jsx)("path", {
                                fill: t,
                                d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10    c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z"
                            })]
                        })
                    })]
                })
            }
        },
        164546: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SelectionCircle: function() {
                    return S
                },
                DefaultThemeSelection: function() {
                    return P
                },
                GradientThemeSelection: function() {
                    return C
                }
            }), s("794252");
            var a = s("37983");
            s("884691");
            var i = s("414456"),
                n = s.n(i),
                r = s("506838"),
                l = s("446674"),
                d = s("669491"),
                u = s("2662"),
                c = s("819855"),
                o = s("77078"),
                T = s("161778"),
                m = s("578706"),
                E = s("253539"),
                h = s("92130"),
                I = s("49111"),
                _ = s("782340"),
                f = s("823470");

            function S() {
                return (0, a.jsx)("div", {
                    className: f.selectionCircle,
                    children: (0, a.jsx)(m.default, {
                        className: f.checkmarkCircle,
                        foreground: f.checkmark,
                        backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function N(e) {
                let {
                    name: t,
                    className: s,
                    style: i,
                    onSelect: r,
                    isSelected: l = !1,
                    tabIndex: d,
                    children: u
                } = e, c = (0, o.useRadioItem)({
                    label: t,
                    isSelected: l
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: f.themeSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...c,
                            tabIndex: null != d ? d : c.tabIndex,
                            className: n(f.themeSelection, {
                                [f.selected]: l
                            }, s),
                            style: i,
                            onClick: l ? I.NOOP : r,
                            children: u
                        }), l && (0, a.jsx)(S, {})]
                    })
                })
            }

            function P(e) {
                let {
                    theme: t,
                    isSelected: s,
                    onSelect: i
                } = e, m = (0, l.useStateFromStores)([T.default], () => T.default.systemPrefersColorScheme), E = e => (0, c.isThemeLight)(e) ? d.default.unsafe_rawColors.PRIMARY_600.css : d.default.unsafe_rawColors.WHITE_500.css, S = (0, r.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: I.ThemeTypes.LIGHT
                }, () => f.lightIcon).with({
                    theme: I.ThemeTypes.LIGHT
                }, () => f.lightIcon).otherwise(() => f.darkIcon), P = (0, r.match)(t).with(I.ThemeTypes.LIGHT, () => _.default.Messages.THEME_LIGHT).with(I.ThemeTypes.DARK, () => _.default.Messages.THEME_DARK).with("system", () => _.default.Messages.THEME_SYSTEM).exhaustive(), C = (0, o.useRedesignIconContext)().enabled;
                return (0, a.jsx)(N, {
                    onSelect: i,
                    isSelected: s,
                    name: P,
                    className: n(f.defaultThemeSelection, S),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: f.iconWrapper,
                        children: C ? (0, a.jsx)(u.RefreshIcon, {
                            color: E(m)
                        }) : (0, a.jsx)(h.default, {
                            fill: E(m)
                        })
                    })
                })
            }

            function C(e) {
                let {
                    preset: t,
                    isSelected: s,
                    disabled: i,
                    tabIndex: r,
                    onSelect: l
                } = e, {
                    colors: d,
                    angle: u,
                    theme: o
                } = t, T = (0, E.getLinearGradientForBackgroundGradient)({
                    colors: d,
                    angle: u
                });
                return (0, a.jsx)(N, {
                    onSelect: i ? void 0 : l,
                    isSelected: s,
                    name: t.getName(),
                    className: n([i ? f.disabled : null, (0, c.isThemeDark)(o) ? f.darkOverlay : f.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(T)
                    },
                    tabIndex: r
                })
            }
        },
        648114: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ThemeSelectionGroupType: function() {
                    return a
                },
                trackClientThemeUpdated: function() {
                    return B
                },
                default: function() {
                    return z
                }
            }), s("794252"), s("222007");
            var a, i, n = s("37983"),
                r = s("884691"),
                l = s("414456"),
                d = s.n(l),
                u = s("506838"),
                c = s("446674"),
                o = s("151426"),
                T = s("819855"),
                m = s("77078"),
                E = s("452804"),
                h = s("206230"),
                I = s("812204"),
                _ = s("685665"),
                f = s("626301"),
                S = s("917247"),
                N = s("956597"),
                P = s("891653"),
                C = s("505093"),
                x = s("161778"),
                R = s("168973"),
                v = s("491605"),
                p = s("476765"),
                g = s("599110"),
                O = s("32531"),
                A = s("714657"),
                D = s("164546"),
                M = s("941719"),
                j = s("49111"),
                y = s("646718"),
                G = s("116319"),
                k = s("397336"),
                b = s("843455"),
                w = s("782340"),
                H = s("809404");
            (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
            let L = Object.freeze({
                    EDITOR: k.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: k.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                U = r.createContext({}),
                B = e => {
                    let {
                        isPersisted: t,
                        themeName: s,
                        analyticsLocations: a
                    } = e;
                    g.default.track(j.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: y.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: s,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                K = e => {
                    let {
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    } = e, i = (0, u.match)({
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => w.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, n.jsxs)("div", {
                        className: H.title,
                        children: [(0, n.jsx)(m.Heading, {
                            "aria-label": i,
                            variant: "text-md/medium",
                            children: i
                        }), (0, n.jsx)(P.default, {
                            className: H.premiumIcon
                        })]
                    })
                },
                F = e => {
                    var t, s;
                    let {
                        type: a,
                        isPreview: i,
                        isCoachmark: r
                    } = e, l = (null === (s = (0, S.usePremiumTrialOffer)()) || void 0 === s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2;
                    if (l && i) return null;
                    let d = (0, u.match)({
                        type: a,
                        isPreview: i,
                        isCoachmark: r
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: f.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: f.navigateToPremiumMarketingPage
                    })).otherwise(() => w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, n.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: d
                    })
                },
                W = e => {
                    let {
                        type: t,
                        children: s
                    } = e, a = (0, p.useUID)(), i = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), l = r.useMemo(() => ({
                        type: t,
                        delay: L[t]
                    }), [t]);
                    return (0, n.jsx)(U.Provider, {
                        value: l,
                        children: (0, n.jsx)("div", {
                            ...i,
                            className: H.container,
                            children: s
                        })
                    })
                };
            W.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: s
                } = r.useContext(U), {
                    analyticsLocations: a
                } = (0, _.default)(I.default.CLIENT_THEMES_THEME_SELECTOR), [i, l, u] = (0, c.useStateFromStoresArray)([x.default, R.default, A.default], () => [x.default.theme, null == A.default.gradientPreset, R.default.useSystemTheme === G.SystemThemeState.ON]), o = e => {
                    (0, O.resetBackgroundGradientPreset)(), B({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, E.saveClientTheme)({
                        theme: e
                    }, s)
                };
                return (0, n.jsxs)("section", {
                    className: d(H.presets, t),
                    children: [(0, n.jsx)(D.DefaultThemeSelection, {
                        theme: b.ThemeTypes.LIGHT,
                        isSelected: l && !u && (0, T.isThemeLight)(i),
                        onSelect: () => o(b.ThemeTypes.LIGHT)
                    }), (0, n.jsx)(D.DefaultThemeSelection, {
                        theme: b.ThemeTypes.DARK,
                        isSelected: l && !u && (0, T.isThemeDark)(i),
                        onSelect: () => o(b.ThemeTypes.DARK)
                    }), (0, n.jsx)(D.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: l && u,
                        onSelect: () => o("system")
                    })]
                })
            }, W.Gradient = e => {
                var t, a;
                let {
                    className: i,
                    renderCTAButtons: l,
                    disabled: d = !1
                } = e, {
                    type: u,
                    delay: T
                } = r.useContext(U), {
                    analyticsLocations: m
                } = (0, _.default)(I.default.CLIENT_THEMES_THEME_SELECTOR), [P, x, R] = (0, c.useStateFromStoresArray)([A.default], () => {
                    var e;
                    return [A.default.isPreview, A.default.isCoachmark, null === (e = A.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [p, g] = r.useState(!1), [j, k] = r.useState(-1), b = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion), L = (null === (a = (0, S.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2;
                r.useEffect(() => {
                    (j === M.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || R === o.BackgroundGradientPresetId.EASTER_EGG) && g(!0)
                }, [j, u, R]);
                let W = (e, t) => {
                    if ((0, O.updateBackgroundGradientPreset)(e.id), B({
                            isPersisted: !P,
                            analyticsLocations: m,
                            themeName: o.BackgroundGradientPresetId[e.id]
                        }), P) {
                        (0, C.setUseSystemTheme)(G.SystemThemeState.OFF);
                        return
                    }
                    if ((0, E.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, T), null != t) {
                        if (p && g(!1), t <= j || 0 === t) {
                            k(0);
                            return
                        }
                        k(e => e + 1)
                    }
                };
                return (0, n.jsxs)("section", {
                    className: i,
                    children: ["EDITOR" === u && P && L ? (0, n.jsx)(N.default, {
                        type: y.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
                        children: w.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: f.navigateToPremiumMarketingPage
                        })
                    }) : (0, n.jsxs)("div", {
                        className: H.header,
                        children: [(0, n.jsxs)("div", {
                            className: H.headings,
                            children: [(0, n.jsx)(K, {
                                type: u,
                                isPreview: P,
                                isCoachmark: x
                            }), (0, n.jsx)(F, {
                                type: u,
                                isPreview: P,
                                isCoachmark: x
                            })]
                        }), null == l ? void 0 : l()]
                    }), (0, n.jsxs)("div", {
                        className: H.presets,
                        children: [M.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== o.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, n.jsx)(D.GradientThemeSelection, {
                            preset: e,
                            isSelected: R === e.id,
                            onSelect: () => W(e, t),
                            disabled: d,
                            tabIndex: 0 !== t || d ? void 0 : 0
                        }, e.id)), (() => {
                            if (!p) return null;
                            let e = M.BACKGROUND_GRADIENT_PRESETS_MAP[o.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await s.el("922510").then(s.t.bind(s, "922510", 19));
                                return e
                            }
                            return (0, n.jsxs)("div", {
                                className: H.easterEggSelection,
                                children: [(0, n.jsx)(D.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: R === o.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => W(e)
                                }), (0, n.jsx)(v.default, {
                                    importData: t,
                                    shouldAnimate: !b,
                                    className: H.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var z = W
        },
        87469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, s("862205").createExperiment)({
                kind: "user",
                id: "2022-08_amoled_mode_web",
                label: "Enabled AMOLED Mode on Web",
                defaultConfig: {
                    enabledAMOLEDThemeOption: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled AMOLED Theme Option",
                    config: {
                        enabledAMOLEDThemeOption: !0
                    }
                }]
            })
        },
        505093: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setUseSystemTheme: function() {
                    return i
                }
            });
            var a = s("913144");

            function i(e) {
                a.default.dispatch({
                    type: "UNSYNCED_USER_SETTINGS_UPDATE",
                    settings: {
                        useSystemTheme: e
                    }
                })
            }
        }
    }
]);