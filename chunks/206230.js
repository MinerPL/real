            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("446674"),
                r = n("95410"),
                o = n("819855"),
                s = n("913144"),
                l = n("845579"),
                a = n("374363"),
                u = n("922932"),
                c = n("727538"),
                d = n("49111"),
                _ = n("894488");
            let f = {
                    fontSize: d.Accessibility.FONT_SIZE_DEFAULT,
                    zoom: d.Accessibility.ZOOM_DEFAULT,
                    keyboardModeEnabled: !1,
                    colorblindMode: !1,
                    lowContrastMode: !1,
                    saturation: 1,
                    desaturateUserColors: !1,
                    forcedColorsModalSeen: !1,
                    keyboardNavigationExplainerModalSeen: !1,
                    messageGroupSpacing: null,
                    systemPrefersReducedMotion: "no-preference",
                    systemPrefersCrossfades: !1,
                    prefersReducedMotion: "auto",
                    systemForcedColors: "none",
                    syncForcedColors: !0,
                    systemPrefersContrast: "no-preference",
                    alwaysShowLinkDecorations: !1,
                    roleStyle: "username",
                    submitButtonEnabled: !1,
                    syncProfileThemeWithUserTheme: !1,
                    contrastMode: c.AccessibilityContrastMode.DEFAULT
                },
                E = f,
                S = {
                    12: "font-size-12",
                    14: "font-size-14",
                    15: "font-size-15",
                    16: "font-size-16",
                    18: "font-size-18",
                    20: "font-size-20",
                    24: "font-size-24"
                };
            class g extends i.default.DeviceSettingsStore {
                initialize(e) {
                    this.waitFor(a.default), isNaN((E = {
                        ...f,
                        ...null != e ? e : null
                    }).fontSize) && (E.fontSize = d.Accessibility.FONT_SIZE_DEFAULT), 0 > _.MESSAGE_GROUP_SPACING.indexOf(null != E.messageGroupSpacing ? E.messageGroupSpacing : -1) && (E.messageGroupSpacing = null)
                }
                get fontScale() {
                    return E.fontSize / d.Accessibility.FONT_SIZE_DEFAULT * 100
                }
                get fontSize() {
                    return E.fontSize
                }
                get isFontScaledUp() {
                    return E.fontSize > d.Accessibility.FONT_SIZE_DEFAULT
                }
                get isFontScaledDown() {
                    return E.fontSize < d.Accessibility.FONT_SIZE_DEFAULT
                }
                get fontScaleClass() {
                    var e;
                    let t = null !== (e = S[this.fontSize]) && void 0 !== e ? e : "";
                    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
                }
                get zoom() {
                    return E.zoom
                }
                get isZoomedIn() {
                    return E.zoom > d.Accessibility.ZOOM_DEFAULT
                }
                get isZoomedOut() {
                    return E.zoom < d.Accessibility.ZOOM_DEFAULT
                }
                get keyboardModeEnabled() {
                    return E.keyboardModeEnabled
                }
                get colorblindMode() {
                    return E.colorblindMode
                }
                get lowContrastMode() {
                    return E.lowContrastMode
                }
                get saturation() {
                    return E.saturation
                }
                get desaturateUserColors() {
                    return E.desaturateUserColors
                }
                get forcedColorsModalSeen() {
                    return E.forcedColorsModalSeen
                }
                get keyboardNavigationExplainerModalSeen() {
                    return E.keyboardNavigationExplainerModalSeen
                }
                get messageGroupSpacing() {
                    return null != E.messageGroupSpacing ? E.messageGroupSpacing : l.MessageDisplayCompact.getSetting() ? _.DEFAULT_COMPACT_SPACING : _.DEFAULT_COZY_SPACING
                }
                get isMessageGroupSpacingIncreased() {
                    let e = l.MessageDisplayCompact.getSetting() ? _.DEFAULT_COMPACT_SPACING : _.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing > e
                }
                get isMessageGroupSpacingDecreased() {
                    let e = l.MessageDisplayCompact.getSetting() ? _.DEFAULT_COMPACT_SPACING : _.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing < e
                }
                get isSubmitButtonEnabled() {
                    return E.submitButtonEnabled
                }
                get syncProfileThemeWithUserTheme() {
                    return E.syncProfileThemeWithUserTheme
                }
                get systemPrefersReducedMotion() {
                    return E.systemPrefersReducedMotion
                }
                get rawPrefersReducedMotion() {
                    return E.prefersReducedMotion
                }
                get useReducedMotion() {
                    switch (E.prefersReducedMotion) {
                        case "no-preference":
                            return !1;
                        case "reduce":
                            return !0;
                        default:
                            return "reduce" === E.systemPrefersReducedMotion
                    }
                }
                get systemForcedColors() {
                    return E.systemForcedColors
                }
                get syncForcedColors() {
                    return E.syncForcedColors
                }
                get useForcedColors() {
                    return !!E.syncForcedColors && "active" === E.systemForcedColors || !1
                }
                get systemPrefersContrast() {
                    return E.systemPrefersContrast
                }
                get systemPrefersCrossfades() {
                    return E.systemPrefersCrossfades
                }
                get alwaysShowLinkDecorations() {
                    return E.alwaysShowLinkDecorations
                }
                get roleStyle() {
                    return E.roleStyle
                }
                get contrastMode() {
                    return E.contrastMode
                }
                getUserAgnosticState() {
                    return E
                }
            }
            g.displayName = "AccessibilityStore", g.persistKey = "AccessibilityStore", g.migrations = [() => {
                let e = {
                        FONT_SCALE: "a11yFontScale",
                        ZOOM: "a11yZoom",
                        COLORBLIND_MODE: "a11yColorblindMode"
                    },
                    t = r.default.get(e.FONT_SCALE) || 100,
                    n = r.default.get(e.ZOOM) || d.Accessibility.ZOOM_DEFAULT,
                    i = r.default.get(e.COLORBLIND_MODE) || !1;
                return r.default.remove(e.FONT_SCALE), r.default.remove(e.ZOOM), r.default.remove(e.COLORBLIND_MODE), {
                    fontScale: t,
                    zoom: n,
                    colorblindMode: i,
                    keyboardModeEnabled: !1
                }
            }, e => {
                let {
                    fontScale: t,
                    ...n
                } = e, i = 16;
                switch (t) {
                    case 82:
                        i = 12;
                        break;
                    case 92:
                        i = 15;
                        break;
                    case 100:
                        i = 16;
                        break;
                    case 110:
                        i = 18;
                        break;
                    case 125:
                        i = 20;
                        break;
                    case 150:
                        i = 24
                }
                return {
                    ...n,
                    fontSize: i
                }
            }, e => ({
                ...e,
                darkSidebar: !1
            }), e => ({
                ...e,
                messageGroupSpacing: null
            }), e => ({
                ...e,
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto"
            }), e => ({
                ...e,
                alwaysShowLinkDecorations: e.saturation <= o.LOW_SATURATION_THRESHOLD
            })];
            let h = new g(s.default, {
                ACCESSIBILITY_SET_FONT_SIZE: function(e) {
                    var t;
                    let n = (t = e.fontSize, d.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : d.Accessibility.FONT_SIZE_DEFAULT);
                    if (n > d.Accessibility.FONT_SIZE_MAX || n < d.Accessibility.FONT_SIZE_MIN || E.fontSize === n) return !1;
                    (E = {
                        ...E
                    }).fontSize = n
                },
                ACCESSIBILITY_SET_ZOOM: function(e) {
                    if (e.zoom < d.Accessibility.ZOOM_MIN || e.zoom > d.Accessibility.ZOOM_MAX || E.zoom === e.zoom) return !1;
                    (E = {
                        ...E
                    }).zoom = e.zoom, u.default.setZoomFactor(E.zoom)
                },
                ACCESSIBILITY_RESET_TO_DEFAULT: function() {
                    let e = E.fontSize !== d.Accessibility.FONT_SIZE_DEFAULT,
                        t = E.zoom !== d.Accessibility.ZOOM_DEFAULT;
                    if (!e && !t) return !1;
                    (E = {
                        ...E
                    }).fontSize !== d.Accessibility.FONT_SIZE_DEFAULT && (E.fontSize = d.Accessibility.FONT_SIZE_DEFAULT), E.zoom !== d.Accessibility.ZOOM_DEFAULT && (E.zoom = d.Accessibility.ZOOM_DEFAULT, u.default.setZoomFactor(E.zoom))
                },
                ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
                    if (E.keyboardModeEnabled) return !1;
                    (E = {
                        ...E
                    }).keyboardModeEnabled = !0
                },
                ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
                    if (!E.keyboardModeEnabled) return !1;
                    (E = {
                        ...E
                    }).keyboardModeEnabled = !1
                },
                ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
                    (E = {
                        ...E
                    }).colorblindMode = !E.colorblindMode
                },
                ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
                    (E = {
                        ...E
                    }).lowContrastMode = !E.lowContrastMode
                },
                ACCESSIBILITY_SET_SATURATION: function(e) {
                    (E = {
                        ...E
                    }).saturation = e.saturation
                },
                ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
                    (E = {
                        ...E
                    }).desaturateUserColors = !E.desaturateUserColors
                },
                ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
                    var t;
                    return E = {
                        ...E,
                        systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
                    }, !0
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
                    if (E.systemPrefersContrast === e.systemPrefersContrast) return !1;
                    E = {
                        ...E,
                        systemPrefersContrast: e.systemPrefersContrast
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
                    if (E.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
                    E = {
                        ...E,
                        systemPrefersReducedMotion: e.systemPrefersReducedMotion
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
                    if (E.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
                    E = {
                        ...E,
                        systemPrefersCrossfades: e.systemPrefersCrossfades
                    }
                },
                ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
                    if (E.prefersReducedMotion === e.prefersReducedMotion) return !1;
                    E = {
                        ...E,
                        prefersReducedMotion: e.prefersReducedMotion
                    }
                },
                ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
                    E.syncForcedColors = e.syncForcedColors
                },
                ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
                    E = {
                        ...E,
                        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
                    }
                },
                ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
                    E.roleStyle = e.roleStyle
                },
                ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
                    E.forcedColorsModalSeen = !0
                },
                KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
                    E = {
                        ...E,
                        keyboardNavigationExplainerModalSeen: !0
                    }
                },
                ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
                    let {
                        messageGroupSpacing: t
                    } = e;
                    E = {
                        ...E,
                        messageGroupSpacing: t
                    }
                },
                ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
                    (E = {
                        ...E
                    }).submitButtonEnabled = !E.submitButtonEnabled
                },
                ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
                    (E = {
                        ...E
                    }).syncProfileThemeWithUserTheme = !E.syncProfileThemeWithUserTheme
                },
                ACCESSIBILITY_SET_CONTRAST_MODE: function(e) {
                    let {
                        contrastMode: t
                    } = e;
                    E = {
                        ...E,
                        contrastMode: t
                    }
                }
            });
            var m = h