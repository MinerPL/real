(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86514"], {
        149154: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                distance: function() {
                    return r
                }
            });
            let a = new Uint32Array(65536),
                n = (e, t) => {
                    let l = e.length,
                        n = t.length,
                        s = 1 << l - 1,
                        r = -1,
                        i = 0,
                        u = l,
                        o = l;
                    for (; o--;) a[e.charCodeAt(o)] |= 1 << o;
                    for (o = 0; o < n; o++) {
                        let e = a[t.charCodeAt(o)],
                            l = e | i;
                        e |= (e & r) + r ^ r, i |= ~(e | r), r &= e, i & s && u++, r & s && u--, r = r << 1 | ~(l | (i = i << 1 | 1)), i &= l
                    }
                    for (o = l; o--;) a[e.charCodeAt(o)] = 0;
                    return u
                },
                s = (e, t) => {
                    let l = t.length,
                        n = e.length,
                        s = [],
                        r = [],
                        i = Math.ceil(l / 32),
                        u = Math.ceil(n / 32);
                    for (let e = 0; e < i; e++) r[e] = -1, s[e] = 0;
                    let o = 0;
                    for (; o < u - 1; o++) {
                        let i = 0,
                            u = -1,
                            d = 32 * o,
                            c = Math.min(32, n) + d;
                        for (let t = d; t < c; t++) a[e.charCodeAt(t)] |= 1 << t;
                        for (let e = 0; e < l; e++) {
                            let l = a[t.charCodeAt(e)],
                                n = r[e / 32 | 0] >>> e & 1,
                                o = s[e / 32 | 0] >>> e & 1,
                                d = l | i,
                                c = ((l | o) & u) + u ^ u | l | o,
                                f = i | ~(c | u),
                                m = u & c;
                            f >>> 31 ^ n && (r[e / 32 | 0] ^= 1 << e), m >>> 31 ^ o && (s[e / 32 | 0] ^= 1 << e), f = f << 1 | n, u = (m = m << 1 | o) | ~(d | f), i = f & d
                        }
                        for (let t = d; t < c; t++) a[e.charCodeAt(t)] = 0
                    }
                    let d = 0,
                        c = -1,
                        f = 32 * o,
                        m = Math.min(32, n - f) + f;
                    for (let t = f; t < m; t++) a[e.charCodeAt(t)] |= 1 << t;
                    let S = n;
                    for (let e = 0; e < l; e++) {
                        let l = a[t.charCodeAt(e)],
                            i = r[e / 32 | 0] >>> e & 1,
                            u = s[e / 32 | 0] >>> e & 1,
                            o = l | d,
                            f = ((l | u) & c) + c ^ c | l | u,
                            m = d | ~(f | c),
                            E = c & f;
                        S += m >>> n - 1 & 1, S -= E >>> n - 1 & 1, m >>> 31 ^ i && (r[e / 32 | 0] ^= 1 << e), E >>> 31 ^ u && (s[e / 32 | 0] ^= 1 << e), m = m << 1 | i, c = (E = E << 1 | u) | ~(o | m), d = m & o
                    }
                    for (let t = f; t < m; t++) a[e.charCodeAt(t)] = 0;
                    return S
                },
                r = (e, t) => {
                    if (e.length < t.length) {
                        let l = t;
                        t = e, e = l
                    }
                    return 0 === t.length ? e.length : e.length <= 32 ? n(e, t) : s(e, t)
                }
        },
        64847: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c038718481fa8dc048db.svg"
        },
        366801: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ee16b3ebdee5b68090dc.svg"
        },
        267218: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8a9877b68c4ef6b46419.svg"
        },
        187001: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
                r = l("997289"),
                i = l("685665"),
                u = l("649844"),
                o = l("599110"),
                d = l("49111"),
                c = l("646718"),
                f = l("782340"),
                m = l("999125"),
                S = l("770420"),
                E = () => {
                    let e = (0, r.useAnalyticsContext)(),
                        {
                            analyticsLocations: t
                        } = (0, i.default)();
                    return n.useEffect(() => {
                        o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                            location: e.location,
                            location_stack: t
                        })
                    }, []), (0, a.jsx)(s.FormItem, {
                        className: S.modalContent,
                        children: (0, a.jsxs)("div", {
                            className: m.nitroUpsellContainer,
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)(s.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    className: m.nitroUpsellTitle,
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
                                }), (0, a.jsx)(s.Text, {
                                    className: m.nitroUpsellSubtitle,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
                                })]
                            }), (0, a.jsx)(s.Button, {
                                look: s.Button.Looks.INVERTED,
                                onClick: () => {
                                    (0, u.default)({
                                        subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: t
                                    })
                                },
                                children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
                            })]
                        })
                    })
                }
        },
        504219: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("627445"),
                r = l.n(s),
                i = l("446674"),
                u = l("151426"),
                o = l("77078"),
                d = l("10641"),
                c = l("235145"),
                f = l("369964"),
                m = l("227602"),
                S = l("701909"),
                E = l("13798"),
                C = l("386045"),
                _ = l("30591"),
                h = l("803725"),
                N = l("49111"),
                g = l("782340"),
                I = l("173266"),
                p = l("770420");
            let A = e => {
                let {
                    clipsEnabled: t,
                    isAnimationDone: l,
                    guildId: s,
                    children: r
                } = e, m = (0, i.useStateFromStores)([C.default], () => C.default.getHardwareClassification()), E = m === _.ClipsHardwareClassification.MEETS_MINIMUM || m === _.ClipsHardwareClassification.UNKNOWN, p = m === _.ClipsHardwareClassification.BELOW_MINIMUM, A = l && (E || p) && !t, [x, R] = (0, c.useGetDismissibleContent)(A ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), T = x === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                n.useEffect(() => {
                    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }, [t]);
                let O = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t(), R()
                };
                return (0, a.jsx)(o.Popout, {
                    shouldShow: T,
                    position: "right",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(f.default, {
                            dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: I.clipsEducationArt,
                            position: "right",
                            header: g.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: I.clipsEducationHeader,
                            body: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: g.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), p ? (0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: I.warningText,
                                    children: g.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: S.default.getArticleURL(N.HelpdeskArticles.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: g.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: e => {
                                (0, h.updateClipsEnabled)({
                                    clipsEnabled: !0,
                                    guildId: s,
                                    trackAnalytics: !0
                                }), O(e)
                            },
                            onClose: e => {
                                O(e, t)
                            }
                        })
                    },
                    children: () => r
                })
            };
            var x = function(e) {
                let {
                    isAnimationDone: t,
                    guildId: l
                } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getSettings().clipsEnabled), s = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(N.GlobalKeybindActions.SAVE_CLIP));
                r(null != s, "Clips keybind should be set");
                let u = E.toString(s.shortcut, !0);
                return (0, a.jsx)(o.FormItem, {
                    title: g.default.Messages.CLIPS_SETTINGS,
                    titleClassName: p.formItemTitle,
                    className: p.modalContent,
                    children: (0, a.jsxs)("div", {
                        className: I.container,
                        children: [(0, a.jsx)(A, {
                            clipsEnabled: n,
                            guildId: l,
                            isAnimationDone: t,
                            children: (0, a.jsx)(o.FormSwitch, {
                                className: I.formSwitch,
                                value: n,
                                onChange: e => (0, h.updateClipsEnabled)({
                                    clipsEnabled: e,
                                    guildId: l,
                                    trackAnalytics: !0
                                }),
                                hideBorder: !0,
                                children: g.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: I.description,
                            children: g.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: u,
                                keybindHook: () => (0, a.jsx)("span", {
                                    className: I.keybindHintKeys,
                                    children: (0, a.jsx)(o.KeyCombo, {
                                        className: I.keybindShortcut,
                                        shortcut: u
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        369964: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("77078"),
                u = l("731898"),
                o = l("10641"),
                d = l("275623"),
                c = l("216422"),
                f = l("994428"),
                m = l("782340"),
                S = l("804920"),
                E = n.forwardRef(function(e, t) {
                    let {
                        body: l,
                        header: s,
                        artClassName: E,
                        headerClassName: C,
                        contentClassName: _,
                        tryItText: h,
                        onTryFeature: N,
                        onClose: g,
                        className: I,
                        inlineArt: p = !1,
                        isPremiumFeature: A = !1,
                        shouldUseHorizontalButtons: x = !1,
                        showGIFTag: R = !1,
                        dismissibleContent: T,
                        position: O = "top",
                        art: v,
                        isPremiumEarlyAccess: L = !1,
                        maxWidth: M = 280
                    } = e, j = x ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [D, P] = n.useState(!1), {
                        ref: b,
                        width: U
                    } = (0, u.default)();

                    function G(e) {
                        (0, o.markDismissibleContentAsDismissed)(T, {
                            dismissAction: e
                        })
                    }
                    return n.useEffect(() => {
                        var e, t;
                        let l = (null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                        !D && l > M && P(!0)
                    }, [D, U, b, M]), n.useEffect(() => {
                        (0, o.requestMarkDismissibleContentAsShown)(T)
                    }, [T]), (0, a.jsx)("div", {
                        className: I,
                        ref: t,
                        children: (0, a.jsxs)("div", {
                            className: r(S.content, _, {
                                [S.contentNoArt]: null == E || p,
                                [S.contentPremium]: A || L
                            }),
                            children: [(0, a.jsxs)("div", {
                                className: r(E, p ? S.artInline : S.artAbsolute),
                                children: [R && (0, a.jsx)(d.default, {
                                    className: S.gifTag
                                }), v]
                            }), (0, a.jsxs)("div", {
                                className: S.body,
                                children: [(0, a.jsxs)(i.Heading, {
                                    className: r(A ? S.headerWithPremiumIcon : S.header, C),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [A && !L ? (0, a.jsx)(c.default, {
                                        className: S.premiumIcon
                                    }) : null, L ? (0, a.jsxs)(i.Text, {
                                        color: "always-white",
                                        variant: "eyebrow",
                                        className: S.earlyAccessBadgeContainer,
                                        children: [(0, a.jsx)(c.default, {
                                            className: S.earlyAccessIcon
                                        }), (0, a.jsx)("span", {
                                            className: S.earlyAccessText,
                                            children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                        })]
                                    }) : null, s]
                                }), null == l ? null : "string" == typeof l ? (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: l
                                }) : l]
                            }), (0, a.jsx)("div", {
                                ref: b,
                                className: D || !x ? S.buttonContainerVertical : S.buttonContainerHorizontal,
                                children: null != N ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(i.Button, {
                                        className: S.button,
                                        size: j,
                                        onClick: e => {
                                            null == g || g(e), N(e), G(f.ContentDismissActionType.PRIMARY)
                                        },
                                        color: A || L ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
                                        look: A || L ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
                                        children: null != h ? h : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                    }), (0, a.jsx)(i.Button, {
                                        className: S.button,
                                        size: j,
                                        onClick: e => {
                                            null == g || g(e), G(f.ContentDismissActionType.DISMISS)
                                        },
                                        color: A || L ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
                                        look: A || L ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
                                        children: m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                    })]
                                }) : (0, a.jsx)(i.Button, {
                                    className: S.button,
                                    size: i.Button.Sizes.MAX,
                                    onClick: e => {
                                        null == g || g(e), G(f.ContentDismissActionType.PRIMARY)
                                    },
                                    color: i.Button.Colors.WHITE,
                                    children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                })
                            }), (0, a.jsx)("div", {
                                className: r(S.pointer, {
                                    [S.bottomPointer]: "top" === O,
                                    [S.leftPointer]: "right" === O
                                })
                            })]
                        })
                    })
                })
        },
        301834: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-06_golive_capture_card",
                label: "GoLive Capture Card Support",
                defaultConfig: {
                    enableGoLiveCaptureCard: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable go live capture card support",
                    config: {
                        enableGoLiveCaptureCard: !0
                    }
                }]
            });
            var s = n
        },
        288207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            let a = new Set(["nvidia"]);

            function n(e) {
                for (let t of Object.keys(e)) {
                    let l = e[t];
                    if (null != l && null == l.error && a.has(t)) return !0
                }
                return !1
            }
        },
        7738: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("773356"),
                n = l("686298");

            function s(e, t, l) {
                let s = n.ApplicationStreamPresetValues[e];
                for (let n of s)
                    if ((0, a.default)(e, n.resolution, n.fps, t, l)) return [n.resolution, n.fps];
                return null
            }
        },
        709496: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("570277"),
                n = l.n(a),
                s = l("773336");
            let r = {
                [s.PlatformTypes.WINDOWS]: {
                    nvidia: ">=397.93.0"
                }
            };

            function i(e) {
                let t = r[(0, s.getPlatform)()];
                if (null == t) return !1;
                for (let l of Object.keys(e)) {
                    let a = e[l],
                        s = t[l];
                    if (null == a || null == s || null != a.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(a);
                    if (!n.satisfies(r, s)) return !0
                }
                return !1
            }
        },
        353487: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2022-06_inline_streaming_premium_upsell_behavior",
                label: "Inline Streaming Premium Upsell Behavior",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = n
        },
        767960: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("446674"),
                n = l("913144"),
                s = l("773336"),
                r = l("50885"),
                i = l("288207"),
                u = l("709496");
            let o = !1,
                d = !0;
            class c extends a.default.Store {
                initialize() {
                    !(!s.isPlatformEmbedded || __OVERLAY__) && r.default.getGPUDriverVersions().then(e => {
                        o = (0, u.default)(e), d = (0, i.default)(e), this.emitChange()
                    })
                }
                get GPUDriversOutdated() {
                    return o
                }
                get canUseHardwareAcceleration() {
                    return d
                }
                getState() {
                    return {
                        GPUDriversOutdated: o,
                        canUseHardwareAcceleration: d
                    }
                }
            }
            c.displayName = "StreamingCapabilitiesStore";
            var f = new c(n.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        streamingCapabilitiesStoreState: t
                    } = e;
                    o = t.GPUDriversOutdated, d = t.canUseHardwareAcceleration
                }
            })
        },
        375202: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("819068");

            function n(e, t) {
                if (__OVERLAY__) {
                    let e = t.getGame(),
                        l = (0, a.getPID)();
                    return null == e || null == l ? null : {
                        id: e.id,
                        pid: l,
                        pidPath: [],
                        nativeProcessObserverId: 0,
                        hidden: !1,
                        elevated: !1,
                        name: e.name,
                        lastFocused: 0,
                        exePath: "",
                        exeName: "",
                        cmdLine: "",
                        processName: "",
                        distributor: null,
                        windowHandle: null,
                        fullscreenType: 0
                    }
                }
                return e.getVisibleGame()
            }
        },
        916262: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("570277"),
                n = l.n(a),
                s = l("229353"),
                r = l("49671"),
                i = l("42887"),
                u = l("773336"),
                o = l("706530"),
                d = l("353927"),
                c = l("782340");

            function f() {
                var e, t;
                if (!i.default.supports(d.Features.SOUNDSHARE)) return s.GO_LIVE_SCREENSHARE_NO_SOUND;
                if ((0, u.isWindows)() && !n.satisfies(null === (e = r.default) || void 0 === e ? void 0 : e.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
                if ((0, u.isMac)() && !n.satisfies(null === (t = r.default) || void 0 === t ? void 0 : t.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
                return null
            }
        },
        75974: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("149154"),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("42887"),
                c = l("326620"),
                f = l("32649"),
                m = l("782340"),
                S = l("389915"),
                E = l("770420"),
                C = l("926622");

            function _(e) {
                let {
                    selectedSource: t,
                    onChangeVideoDeviceSource: l,
                    onChangeAudioDevice: r
                } = e, _ = (0, f.default)(), h = (0, u.useStateFromStores)([d.default], () => d.default.getInputDevices()), [N, g] = n.useState(function(e, t, l) {
                    if (null != t && null != l) {
                        let a = t.find(t => t.id === e);
                        if (null == a) return;
                        let n = i.reduce(l, (e, t) => (0, s.distance)(a.name, t.name) < (0, s.distance)(a.name, e.name) ? t : e);
                        if (null != n) return n.id
                    }
                }(t.id, _, h));
                return null != N && r(N), (0, a.jsx)(n.Fragment, {
                    children: (0, a.jsxs)(o.FormItem, {
                        title: "Capture Device",
                        className: E.modalContent,
                        children: [(0, a.jsx)(o.FormItem, {
                            className: C.marginTop8,
                            children: (0, a.jsxs)(c.default, {
                                children: [(0, a.jsx)("span", {
                                    className: S.ellipsisText,
                                    children: t.name
                                }), (0, a.jsx)(o.Button, {
                                    className: S.changeButton,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.Button.Sizes.SMALL,
                                    onClick: l,
                                    children: m.default.Messages.CHANGE
                                })]
                            })
                        }), (0, a.jsx)(o.FormItem, {
                            className: C.marginTop8,
                            title: m.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, a.jsx)(o.SingleSelect, {
                                value: N,
                                className: C.marginaTop8,
                                onChange: e => {
                                    g(e), r(e)
                                },
                                options: i.map(h, e => {
                                    let {
                                        id: t,
                                        name: l
                                    } = e;
                                    return {
                                        value: t,
                                        label: l
                                    }
                                })
                            })
                        })]
                    })
                })
            }
        },
        359812: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                s = l("77078"),
                r = l("923959"),
                i = l("305961"),
                u = l("957255"),
                o = l("697218"),
                d = l("316133"),
                c = l("223913"),
                f = l("379385"),
                m = l("644169"),
                S = l("782340"),
                E = l("524939");

            function C(e) {
                let {
                    selectedChannelId: t,
                    guildId: l,
                    onChangeSelectedChannelId: C
                } = e, _ = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = (0, n.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), N = (0, n.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), g = h.map(e => {
                    var l;
                    return {
                        name: (0, a.jsx)(f.default, {
                            channel: e,
                            users: null === (l = N[e.id]) || void 0 === l ? void 0 : l.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== (null == _ ? void 0 : _.id)
                            }).map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            }),
                            selected: e.id === t
                        }),
                        value: e.id
                    }
                });
                return (0, a.jsx)(m.default, {
                    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: E.channelSelectScrollerInner,
                    children: (0, a.jsx)(s.RadioGroup, {
                        options: g,
                        value: t,
                        itemInfoClassName: E.channelInfoWrapper,
                        itemTitleClassName: E.channelTitleWrapper,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return C(t)
                        }
                    })
                })
            }
        },
        636909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Z
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("446674"),
                u = l("77078"),
                o = l("79112"),
                d = l("454273"),
                c = l("56947"),
                f = l("187001"),
                m = l("504219"),
                S = l("845579"),
                E = l("42203"),
                C = l("546463"),
                _ = l("525065"),
                h = l("305961"),
                N = l("42887"),
                g = l("568307"),
                I = l("18494"),
                p = l("697218"),
                A = l("703370"),
                x = l("145131"),
                R = l("953109"),
                T = l("109024"),
                O = l("267675"),
                v = l("423487"),
                L = l("233437"),
                M = l("599110"),
                j = l("449008"),
                D = l("773336"),
                P = l("767960"),
                b = l("375202"),
                U = l("916262"),
                G = l("75974"),
                F = l("359812"),
                k = l("273405"),
                y = l("326620"),
                B = l("985997"),
                w = l("16750"),
                V = l("706530"),
                H = l("49111"),
                W = l("782340"),
                z = l("183351"),
                K = l("770420");

            function Y(e) {
                let {
                    selectedSource: t,
                    selectSource: l,
                    sourceChanged: n,
                    onChangeSource: s
                } = e, r = (0, i.useStateFromStores)([g.default, A.default], () => (0, D.isWindows)() ? (0, b.default)(g.default, A.default) : null), o = (0, i.useStateFromStores)([C.default], () => (null == r ? void 0 : r.id) != null ? C.default.getGame(r.id) : null), d = (0, i.useStateFromStores)([g.default], () => g.default.getRunningGames()), c = (0, i.useStateFromStoresArray)([C.default], () => d.map(e => null != e.id ? C.default.getGame(e.id) : null).filter(j.isNotNullish), [d]), f = null;
                if (null != t ? f = t.name : null != r && (f = r.name), null == f) return null;
                let m = (0, w.default)(r, t, d),
                    S = n ? c.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === (null == m ? void 0 : m.id)
                    }) : o,
                    E = null != t && t.id.startsWith("screen") ? O.default : L.default;
                return (0, a.jsx)(u.FormItem, {
                    title: W.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: K.modalContent,
                    titleClassName: K.formItemTitleVerySlim,
                    children: (0, a.jsxs)(y.default, {
                        children: [null != S ? (0, a.jsx)(R.default, {
                            game: S,
                            size: R.default.Sizes.XSMALL,
                            className: z.selectedIcon
                        }) : (0, a.jsx)(E, {
                            className: z.selectedIcon
                        }), (0, a.jsx)("span", {
                            className: z.ellipsisText,
                            children: f
                        }), l ? (0, a.jsx)(u.Button, {
                            className: z.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: s,
                            children: W.default.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function J(e) {
                let {
                    onChange: t,
                    guildId: l
                } = e, n = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(l));
                return null == n ? (t(), null) : (0, a.jsx)(u.FormItem, {
                    title: W.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: K.modalContent,
                    titleClassName: K.formItemTitle,
                    children: (0, a.jsxs)(y.default, {
                        children: [(0, a.jsx)(T.default, {
                            guild: n,
                            size: T.default.Sizes.SMALLER,
                            className: z.selectedIcon
                        }), (0, a.jsx)("span", {
                            className: z.ellipsisText,
                            children: n.toString()
                        }), (0, a.jsx)(u.Button, {
                            className: z.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: t,
                            children: W.default.Messages.CHANGE
                        })]
                    })
                })
            }

            function X(e) {
                let {
                    text: t
                } = e;
                return (0, a.jsxs)(x.default, {
                    align: x.default.Align.CENTER,
                    className: z.warning,
                    children: [(0, a.jsx)(v.default, {
                        className: z.warningIcon
                    }), (0, a.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: t
                    })]
                })
            }

            function Q(e) {
                var t;
                let {
                    guildId: l
                } = e, s = (0, i.useStateFromStores)([_.default], () => null !== (t = _.default.getMemberCount(l)) && void 0 !== t ? t : 0), o = S.NotifyFriendsOnGoLive.useSetting(), d = n.useCallback((e, t) => {
                    S.NotifyFriendsOnGoLive.updateSetting(t), M.default.track(H.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                        value: t
                    })
                }, []), c = s >= 2 && s <= V.STREAM_NOTIFY_GUILD_MAX_SIZE;
                return c ? (0, a.jsx)(u.FormItem, {
                    className: r(K.modalContent, z.checkboxRow),
                    children: (0, a.jsx)(u.Checkbox, {
                        value: !!o,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: d,
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: W.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function Z(e) {
                let {
                    selectedSource: t,
                    selectedFPS: l,
                    selectedChannelId: s,
                    selectedPreset: r,
                    selectedResolution: u,
                    sourceChanged: S,
                    guildId: C,
                    selectSource: _,
                    selectGuild: h,
                    onClose: g,
                    onChangeSelectedFPS: A,
                    onChangeSelectedResolution: x,
                    onChangeSelectedPreset: R,
                    onChangeSelectedChannelId: T,
                    onChangeSource: O,
                    onChangeAudioDevice: v,
                    onChangeGuild: L,
                    isAnimationDone: M
                } = e, j = (0, i.useStateFromStores)([I.default, E.default], () => E.default.getChannel(I.default.getVoiceChannelId())), D = (0, i.useStateFromStores)([P.default], () => P.default.GPUDriversOutdated), b = (0, i.useStateFromStores)([N.default], () => N.default.getSoundshareEnabled()), y = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser()), w = (0, c.useEnableClips)(), V = (0, c.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !w
                }), z = (0, U.default)();
                null != t && t.id.startsWith("screen") ? z = W.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == z && N.default.supportsEnableSoundshare() && b !== H.SoundshareEnableState.ENABLED && (z = W.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: () => {
                        g(), o.default.open(H.UserSettingsSections.VOICE)
                    }
                }));
                let K = w ? (0, a.jsx)(m.default, {
                        guildId: C,
                        isAnimationDone: M
                    }) : V ? (0, a.jsx)(f.default, {}) : void 0,
                    Z = !!(null == t ? void 0 : t.id.startsWith("camera")),
                    q = null != y && y.verified && !y.bot,
                    $ = null != j && !(0, d.isPrivateGuildChannel)(j);
                return (0, a.jsxs)(n.Fragment, {
                    children: [Z ? (0, a.jsx)(G.default, {
                        selectedSource: t,
                        onChangeVideoDeviceSource: O,
                        onChangeAudioDevice: v
                    }) : (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(Y, {
                            selectSource: _,
                            sourceChanged: S,
                            onChangeSource: O,
                            selectedSource: t
                        }), null != z ? (0, a.jsx)(X, {
                            text: z
                        }) : null]
                    }), h && null != C ? (0, a.jsx)(J, {
                        guildId: C,
                        onChange: L
                    }) : null, null != j ? (0, a.jsx)(k.default, {
                        channel: j
                    }) : (0, a.jsx)(F.default, {
                        guildId: C,
                        selectedChannelId: s,
                        onChangeSelectedChannelId: T
                    }), null != C && q && $ ? (0, a.jsx)(Q, {
                        guildId: C
                    }) : null, D ? (0, a.jsx)(X, {
                        text: W.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0, a.jsx)(B.default, {
                        selectedPreset: r,
                        selectedFPS: l,
                        selectedResolution: u,
                        guildId: C,
                        onClose: g,
                        onFPSChange: A,
                        onResolutionChange: x,
                        onPresetChange: R,
                        captureDeviceSelected: Z
                    }), K]
                })
            }
        },
        273405: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                s = l("77078"),
                r = l("271938"),
                i = l("316133"),
                u = l("379385"),
                o = l("326620"),
                d = l("782340"),
                c = l("770420");

            function f(e) {
                let {
                    channel: t
                } = e, l = (0, n.useStateFromStores)([r.default], () => r.default.getId()), f = (0, n.useStateFromStores)([i.default], () => i.default.getVoiceStatesForChannel(t), [t]);
                return (0, a.jsx)(s.FormItem, {
                    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: c.modalContent,
                    titleClassName: c.formItemTitle,
                    children: (0, a.jsx)(o.default, {
                        children: (0, a.jsx)(u.default, {
                            channel: t,
                            users: f.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== l
                            }).map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            })
                        })
                    })
                })
            }
        },
        321443: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("145912");

            function i(e) {
                let {
                    separator: t = !1
                } = e;
                return (0, a.jsx)("div", {
                    className: s(r.divider, {
                        [r.separator]: t
                    })
                })
            }
        },
        451863: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var a, n, s = l("37983"),
                r = l("884691"),
                i = l("627445"),
                u = l.n(i),
                o = l("301165"),
                d = l("446674"),
                c = l("77078"),
                f = l("404118"),
                m = l("987317"),
                S = l("990766"),
                E = l("901582"),
                C = l("928609"),
                _ = l("268491"),
                h = l("42203"),
                N = l("546463"),
                g = l("305961"),
                I = l("42887"),
                p = l("568307"),
                A = l("18494"),
                x = l("697218"),
                R = l("703370"),
                T = l("145131"),
                O = l("476765"),
                v = l("599110"),
                L = l("773336"),
                M = l("50885"),
                j = l("773356"),
                D = l("7738"),
                P = l("375202"),
                b = l("636909"),
                U = l("934054"),
                G = l("23922"),
                F = l("16750"),
                k = l("686298"),
                y = l("49111"),
                B = l("180524"),
                w = l("782340"),
                V = l("770420");
            (a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

            function H(e) {
                var t, a, i, H;
                let {
                    selectGuild: W = !1,
                    selectSource: z = !0,
                    guildId: K,
                    analyticsLocation: Y,
                    onClose: J,
                    transitionState: X
                } = e, {
                    preset: Q,
                    resolution: Z,
                    fps: q
                } = (0, d.useStateFromStoresObject)([_.default], () => _.default.getState()), $ = (0, d.useStateFromStores)([A.default, h.default], () => h.default.getChannel(A.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([p.default, R.default], () => (0, L.isWindows)() ? (0, P.default)(p.default, R.default) : null), et = (0, d.useStateFromStores)([x.default], () => {
                    let e = x.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), el = (0, d.useStateFromStores)([g.default], () => {
                    var e;
                    return null === (e = g.default.getGuild(K)) || void 0 === e ? void 0 : e.premiumTier
                }), [ea, en] = null !== (t = (0, D.default)(Q, et, el)) && void 0 !== t ? t : [k.ApplicationStreamResolutions.RESOLUTION_720, k.ApplicationStreamFPS.FPS_30];
                Q !== k.ApplicationStreamPresets.PRESET_CUSTOM && (Z = ea, q = en);
                let es = (0, O.useUID)();
                let [er, ei] = r.useState((i = W, H = z, i ? n.GUILD : H ? n.SOURCE : n.CONFIRM)), [eu, eo] = r.useState(null), [ed, ec] = r.useState(!1), [ef, em] = r.useState(null), [eS, eE] = r.useState(null), [eC, e_] = r.useState(null), [eh, eN] = r.useState(Q), [eg, eI] = r.useState(Z), [ep, eA] = r.useState(q), [ex, eR] = r.useState(null != K ? K : null), eT = null !== (a = null == $ ? void 0 : $.id) && void 0 !== a ? a : ef;
                r.useEffect(() => {
                    let e = (0, L.isWindows)() ? (0, P.default)(p.default, R.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? N.default.getGame(e.id) : null;
                    v.default.track(y.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: Y
                    })
                }, [Y]);

                function eO() {
                    ! function() {
                        var e, t;
                        u(null != ee || null != eS, "got nothing to stream");
                        let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : ef;
                        u(null != l, "Received null target channel ID");
                        let a = h.default.getChannel(l),
                            n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : K;
                        null == $ && m.default.selectVoiceChannel(l);
                        let s = eh,
                            r = eg,
                            i = ep;
                        !(0, j.default)(s, r, i, et, el) && (s = k.ApplicationStreamPresets.PRESET_VIDEO, r = k.ApplicationStreamResolutions.RESOLUTION_720, i = k.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: s,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, F.default)(ee, eS, p.default.getRunningGames()),
                            d = !(0, L.isWindows)() || null == o || (null == eS ? void 0 : eS.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(n, l, {
                            pid: c,
                            sourceId: null == c && null != eS ? eS.id : null,
                            sourceName: null == c && null != eS ? eS.name : null,
                            audioSourceId: eC
                        }), (async () => {
                            let e = await C.default.hasPermission(B.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: w.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: w.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), J()
                }
                let ev = r.useCallback((e, t, l) => {
                    let a = (0, D.default)(e, et, el),
                        [n, s] = null != a ? a : [t, l];
                    if (e !== eh && (t = n, l = s), !(0, j.default)(e, t, l, et, el)) {
                        let [e, a] = (0, D.default)(k.ApplicationStreamPresets.PRESET_VIDEO, et, el);
                        t = e, l = a
                    }
                    l !== ep && eA(l), t !== eg && eI(t), n !== t || s !== l ? eN(k.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eh && eN(e)
                }, [et, el, ep, eg, eh]);
                async function eL(e) {
                    if (e.preventDefault(), er === n.SOURCE) return ei(n.CONFIRM);
                    let t = (0, F.default)(ee, eS, p.default.getRunningGames()),
                        a = M.default.supportsFeature(y.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, L.isMac)() && null != eS) {
                        let e = await I.default.getMediaEngine().getDesktopSources(),
                            t = eS.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var r, i;
                            r = t, i = e, v.default.track(y.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: r,
                                screens: i.length
                            }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                                header: w.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: w.default.Messages.OKAY,
                                cancelText: w.default.Messages.CANCEL,
                                onConfirm: () => M.default.relaunch(),
                                ...e,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: w.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    a ? ! function() {
                        var e;
                        let t = null !== (e = null == ee ? void 0 : ee.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, s.jsx)(e, {
                                ...l,
                                handleStream: eO,
                                pid: t
                            })
                        })
                    }() : eO()
                }
                let eM = r.useCallback(e => {
                        eE(e), null != e && (ei(n.CONFIRM), ec(!0))
                    }, []),
                    ej = r.useCallback(e => {
                        eR(e), ei(z ? n.SOURCE : n.CONFIRM)
                    }, [z]),
                    eD = function(e) {
                        switch (e) {
                            case n.SOURCE:
                                return w.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case n.CONFIRM:
                                return null;
                            case n.GUILD:
                            default:
                                return w.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(er),
                    eP = (0, s.jsx)(c.ModalHeader, {
                        className: V.modalHeader,
                        separator: !1,
                        children: (0, s.jsxs)(T.default, {
                            direction: T.default.Direction.VERTICAL,
                            align: T.default.Align.CENTER,
                            className: V.header,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: es,
                                className: V.headerText,
                                children: w.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != eD ? (0, s.jsx)(c.Text, {
                                className: V.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: eD
                            }) : null]
                        })
                    }),
                    eb = (0, s.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: er,
                        width: 480,
                        onSlideReady: eo,
                        children: [(0, s.jsx)(c.Slide, {
                            id: n.GUILD,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(U.default, {
                                    onSelectGuild: ej
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: n.SOURCE,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(G.default, {
                                    selectedSource: eS,
                                    onChangeSelectedSource: eM
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: n.CONFIRM,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(b.default, {
                                    selectedChannelId: ef,
                                    selectedPreset: eh,
                                    selectedResolution: eg,
                                    selectedSource: eS,
                                    selectedFPS: ep,
                                    sourceChanged: ed,
                                    selectSource: z,
                                    onChangeSelectedFPS: e => ev(eh, eg, e),
                                    onChangeSelectedResolution: e => ev(eh, e, ep),
                                    onChangeSelectedPreset: e => ev(e, eg, ep),
                                    onChangeSelectedChannelId: em,
                                    onChangeSelectedSource: eM,
                                    onChangeSource: () => ei(n.SOURCE),
                                    onChangeAudioDevice: e => e_(e),
                                    onChangeGuild: () => ei(n.GUILD),
                                    onClose: J,
                                    guildId: ex,
                                    selectGuild: W,
                                    isAnimationDone: eu === n.CONFIRM && X === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    eU = function(e, t, l, a) {
                        switch (e) {
                            case n.SOURCE:
                                return t ? n.GUILD : null;
                            case n.CONFIRM:
                                if (a) return n.SOURCE;
                                if (!l && t) return n.GUILD;
                                return null;
                            case n.GUILD:
                            default:
                                return null
                        }
                    }(er, W, z, ed),
                    eG = er !== n.CONFIRM || null == eS && null == ee || null == eT,
                    eF = (0, s.jsxs)(c.ModalFooter, {
                        justify: null == eU ? T.default.Justify.START : T.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eG,
                            autoFocus: !0,
                            children: w.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == eU ? (0, s.jsx)(c.Button, {
                            className: V.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: J,
                            children: w.default.Messages.CANCEL
                        }) : (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => ei(eU),
                            children: w.default.Messages.BACK
                        })]
                    });
                return (0, s.jsx)(E.default, {
                    page: y.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, s.jsxs)(c.ModalRoot, {
                        "aria-labelledby": es,
                        transitionState: X,
                        size: c.ModalSize.DYNAMIC,
                        className: V.modalSize,
                        children: [(0, s.jsx)(c.ModalCloseButton, {
                            onClick: J,
                            className: V.modalCloseButton
                        }), (0, s.jsx)("div", {
                            className: V.art
                        }), (0, s.jsxs)("form", {
                            onSubmit: eL,
                            children: [eP, eb, eF]
                        })]
                    })
                })
            }
        },
        934054: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("923959"),
                c = l("305961"),
                f = l("957255"),
                m = l("677099"),
                S = l("109024"),
                E = l("461380"),
                C = l("223913"),
                _ = l("644169"),
                h = l("782340"),
                N = l("770420"),
                g = l("305013");

            function I(e) {
                let {
                    guildId: t,
                    onClick: l
                } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, C.canStreamInChannel)(t, c.default, f.default)
                }));
                return null != n && s ? (0, a.jsxs)(o.Clickable, {
                    onClick: () => l(t),
                    className: g.guildRow,
                    children: [(0, a.jsx)(S.default, {
                        guild: n,
                        size: S.default.Sizes.SMALL,
                        className: g.guildIcon
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: g.guildName,
                        children: n.toString()
                    }), (0, a.jsx)(E.default, {
                        direction: E.default.Directions.RIGHT,
                        className: g.guildArrow
                    })]
                }) : null
            }

            function p(e) {
                let {
                    onSelectGuild: t
                } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
                return (0, a.jsx)(_.default, {
                    title: h.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: s(g.guildScroller, N.marginBottom),
                    children: i.flatMap(l, e => {
                        let {
                            guildIds: l
                        } = e;
                        return l.map(e => (0, a.jsx)(I, {
                            guildId: e,
                            onClick: t
                        }, e))
                    })
                })
            }
        },
        379385: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("679653"),
                u = l("619335"),
                o = l("811305"),
                d = l("387111"),
                c = l("782340"),
                f = l("890514");

            function m(e) {
                let {
                    channel: t,
                    users: l,
                    selected: n = !1
                } = e, m = (0, i.default)(t), S = null;
                null != l && l.length > 0 && (S = (0, a.jsx)(o.default, {
                    guildId: t.guild_id,
                    className: f.voiceUserList,
                    users: l,
                    renderUser: e => {
                        if (null == e) return null;
                        let l = d.default.getName(t.guild_id, t.id, e),
                            n = e.getAvatarURL(t.guild_id, 24);
                        return (0, a.jsx)(r.TooltipContainer, {
                            text: l,
                            children: (0, a.jsx)("img", {
                                src: null != n ? n : void 0,
                                "aria-label": e.username,
                                alt: "",
                                className: f.avatar
                            })
                        })
                    },
                    renderMoreUsers: e => {
                        let n = l.slice(4),
                            s = function(e, t) {
                                let l = t.id,
                                    a = t.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1])
                                }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1]),
                                    nickname2: d.default.getName(a, l, e[2])
                                }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(n, t);
                        return (0, a.jsx)("div", {
                            children: (0, a.jsx)(r.TooltipContainer, {
                                text: s,
                                children: (0, a.jsx)("div", {
                                    className: f.userListOverflow,
                                    children: e
                                })
                            })
                        })
                    },
                    max: 5,
                    showUserPopout: !1
                }));
                let E = (0, u.default)(t);
                return (0, a.jsxs)("div", {
                    className: s(f.channelInfo, {
                        [f.selected]: n
                    }),
                    children: [(0, a.jsx)(E, {
                        className: f.channelIcon
                    }), (0, a.jsx)("div", {
                        className: f.channelName,
                        children: m
                    }), S]
                })
            }
        },
        326620: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("58893");

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: n.card,
                    children: t
                })
            }
        },
        644169: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("77078"),
                u = l("321443"),
                o = l("770420"),
                d = l("348004");

            function c(e) {
                let {
                    title: t,
                    scrollerClassName: l,
                    scrollerInnerClassName: s,
                    children: c
                } = e, f = n.useRef(null), [m, S] = n.useState(!1), [E, C] = n.useState(!1), _ = n.useCallback(() => {
                    let {
                        current: e
                    } = f;
                    null != e && (S(!e.isScrolledToTop()), C(!e.isScrolledToBottom()))
                }, []);
                return n.useLayoutEffect(() => _(), []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(d.title, d.scrollWrapper),
                        children: [(0, a.jsx)(i.FormTitle, {
                            className: o.formItemTitle,
                            children: t
                        }), (0, a.jsx)(u.default, {
                            separator: m
                        })]
                    }), (0, a.jsx)("div", {
                        className: l,
                        children: (0, a.jsx)(i.AdvancedScroller, {
                            ref: f,
                            className: r(d.scrollerInner, s, {
                                [d.bottomSeparator]: E
                            }),
                            onScroll: _,
                            children: c
                        })
                    })]
                })
            }
        },
        23922: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("723251"),
                u = l("771281"),
                o = l("351720"),
                d = l("862337"),
                c = l("77078"),
                f = l("823411"),
                m = l("42887"),
                S = l("568307"),
                E = l("703370"),
                C = l("145131"),
                _ = l("162933"),
                h = l("773336"),
                N = l("301834"),
                g = l("756898"),
                I = l("375202"),
                p = l("321443"),
                A = l("444276"),
                x = l("353927"),
                R = l("782340"),
                T = l("45122");
            async function O() {
                let e = m.default.getVideoDevices(),
                    t = (0, o.default)(m.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
                        width: 176,
                        height: 99
                    }),
                    l = v(),
                    a = await l,
                    n = await t,
                    s = n.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
                    r = function(e, t) {
                        let l = {};
                        return t.forEach(e => {
                            l[e.id] = e
                        }), e.forEach(e => {
                            l[e.id] = e
                        }), Object.values(l).sort((e, t) => L(t) - L(e))
                    }(n.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), a),
                    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
                    c = Object.entries(e).filter(e => {
                        let [t, l] = e;
                        return !l.disabled
                    }).map((e, t) => {
                        let [l, a] = e, n = d[t % d.length], s = Uint8Array.from(atob(n), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
                        return {
                            id: "camera:" + a.id,
                            name: a.name,
                            url: r
                        }
                    });
                return {
                    windowSources: r,
                    screenSources: s,
                    cameraSources: c
                }
            }
            async function v() {
                let e = S.default.getRunningGames(),
                    t = await Promise.all(e.map(async e => {
                        let t;
                        if (null == e.name) return null;
                        try {
                            t = await f.default.identifyGame(e.pid, e.name)
                        } catch (e) {
                            return null
                        }
                        let l = e.windowHandle,
                            a = e.name,
                            n = t.icon;
                        return null != l && null != a && null != n ? {
                            id: "window:".concat(l),
                            name: a,
                            url: "data:image/bmp;base64,".concat(n)
                        } : null
                    }));
                return t.filter(e => null !== e)
            }

            function L(e) {
                let t = (0, h.isWindows)() ? (0, I.default)(S.default, E.default) : null,
                    l = S.default.getRunningGames();
                return null != t && (0, g.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, g.default)(e.id, t.windowHandle)) ? 1 : 0
            }

            function M(e) {
                let {
                    selectedSource: t,
                    onChangeSelectedSource: l
                } = e, {
                    enableGoLiveCaptureCard: s
                } = N.default.useExperiment({
                    location: "GoLive_Source_Select"
                }), i = m.default.supports(x.Features.GO_LIVE_HARDWARE), [o, f] = n.useState(null), [S, E] = n.useState(null), [h, g] = n.useState(null), I = null != h && h.length > 0, [v, L] = n.useState(u.DesktopSources.WINDOW), [M, j] = n.useState(!1), D = n.useRef(null), P = n.useRef(new d.Interval);
                n.useEffect(() => {
                    let e = P.current;
                    return O().then(e => {
                        let {
                            screenSources: t,
                            windowSources: l,
                            cameraSources: a
                        } = e;
                        f(t), E(l), g(a)
                    }), e.start(1e3, async () => {
                        let {
                            screenSources: e,
                            windowSources: t,
                            cameraSources: l
                        } = await O();
                        f(e), E(t), g(l)
                    }), () => {
                        e.stop()
                    }
                }, []);
                let b = n.useCallback(e => {
                        if (null !== e) {
                            var t;
                            D.current = e, j((t = !e.isScrolledToTop(), t))
                        }
                    }, []),
                    U = function(e) {
                        switch (e) {
                            case u.DesktopSources.WINDOW:
                                return S;
                            case u.DesktopSources.SCREEN:
                                return o;
                            case u.DesktopSources.CAMERA:
                                return h
                        }
                    }(v);
                if (null == U) return (0, a.jsx)(C.default, {
                    className: T.spinner,
                    justify: C.default.Justify.CENTER,
                    align: C.default.Align.CENTER,
                    children: (0, a.jsx)(c.Spinner, {})
                });
                let G = U.map(e => {
                    let {
                        id: n
                    } = e, s = (null == t ? void 0 : t.id) === n;
                    return (0, a.jsx)(c.Clickable, {
                        className: r(T.tile, {
                            [T.selected]: s
                        }),
                        onClick: () => l(e, null),
                        children: (0, a.jsx)(A.default, {
                            source: e,
                            selectedSource: t
                        }, e.id)
                    }, n)
                });

                function F() {
                    let e = D.current;
                    null != e && j(!e.isScrolledToTop())
                }
                return (0, a.jsxs)(n.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: T.segmentContainer,
                        children: [(0, a.jsx)(p.default, {
                            separator: M
                        }), (0, a.jsx)(c.SegmentedControl, {
                            options: function() {
                                let e = [{
                                    name: R.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: u.DesktopSources.WINDOW
                                }, {
                                    name: R.default.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: u.DesktopSources.SCREEN
                                }];
                                return s && i && I && e.push({
                                    name: R.default.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: u.DesktopSources.CAMERA
                                }), e
                            }(),
                            value: v,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return L(t)
                            },
                            className: T.segmentControl,
                            optionClassName: T.segmentControlOption
                        })]
                    }), v === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
                        className: T.sourceContainer,
                        children: (0, a.jsx)(c.AdvancedScroller, {
                            ref: b,
                            className: T.sourceScroller,
                            onScroll: F,
                            children: (0, a.jsx)(_.default, {
                                layout: _.default.Layout.WRAP,
                                columns: 2,
                                className: T.sourceContainer,
                                children: G
                            })
                        })
                    }) : (0, a.jsx)(c.AdvancedScroller, {
                        ref: b,
                        className: T.sourceScroller,
                        onScroll: F,
                        children: (0, a.jsx)(_.default, {
                            layout: _.default.Layout.WRAP,
                            columns: 2,
                            className: T.sourceContainer,
                            children: G
                        })
                    })]
                })
            }
        },
        444276: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("145131"),
                u = l("45122");

            function o(e) {
                let {
                    source: t,
                    selectedSource: l
                } = e, {
                    id: n,
                    name: o,
                    url: d
                } = t, c = (null == l ? void 0 : l.id) === n;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(i.default, {
                        direction: i.default.Direction.VERTICAL,
                        justify: i.default.Justify.CENTER,
                        align: i.default.Align.CENTER,
                        children: [(0, a.jsx)(i.default, {
                            justify: i.default.Justify.CENTER,
                            align: i.default.Align.CENTER,
                            children: (0, a.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(d, ")")
                                },
                                className: s(u.sourceThumbnail, {
                                    [u.selected]: c
                                })
                            })
                        }), (0, a.jsx)(r.Text, {
                            className: s(u.sourceName, {
                                [u.selected]: c
                            }),
                            variant: "text-sm/normal",
                            children: o
                        })]
                    })
                })
            }
        },
        985997: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("627445"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("901582"),
                c = l("997289"),
                f = l("56947"),
                m = l("506317"),
                S = l("305961"),
                E = l("697218"),
                C = l("140848"),
                _ = l("145131"),
                h = l("216422"),
                N = l("719923"),
                g = l("773356"),
                I = l("480862"),
                p = l("686298"),
                A = l("49111"),
                x = l("646718"),
                R = l("782340"),
                T = l("770420"),
                O = l("986916"),
                v = l("926622");

            function L(e) {
                let {
                    analyticsLocation: t,
                    onClose: n
                } = e;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("754534").then(l.bind(l, "754534"));
                    return l => (0, a.jsx)(e, {
                        ...l,
                        onCloseParent: n,
                        analyticsSource: t
                    })
                })
            }

            function M() {
                return (0, a.jsxs)("div", {
                    className: O.toolTipTextContainer,
                    children: [(0, a.jsx)(h.default, {
                        className: s(O.premiumIcon, O.premiumIconColor)
                    }), (0, a.jsx)(o.Text, {
                        className: O.upsellText,
                        variant: "text-sm/medium",
                        children: R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function j(e) {
                let t, l, {
                        type: n,
                        selected: r,
                        needsPremium: i,
                        analyticsLocation: u,
                        onClick: d,
                        onClose: c
                    } = e,
                    {
                        value: f,
                        label: m
                    } = n;
                return i ? (t = (0, a.jsx)(o.TooltipContainer, {
                    tooltipClassName: O.tooltip,
                    spacing: 12,
                    "aria-label": R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                    text: (0, a.jsx)(M, {}),
                    children: (0, a.jsx)(_.default, {
                        align: _.default.Align.CENTER,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: O.selectorNitroText,
                            children: m
                        })
                    })
                }), l = () => L({
                    analyticsLocation: u,
                    onClose: c
                })) : (t = (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: r ? O.selectorTextSelected : O.selectorText,
                    children: m
                }), l = () => d(f)), {
                    content: t,
                    className: s(r ? O.selectorButtonSelected : O.selectorButton, {
                        [O.selectorButtonPremiumRequired]: i
                    }),
                    onClick: l
                }
            }

            function D(e) {
                let {
                    onClose: t,
                    selectedPreset: l,
                    selectedResolution: n,
                    selectedFPS: s,
                    onResolutionChange: r,
                    onFPSChange: h,
                    onPresetChange: M,
                    guildId: D,
                    captureDeviceSelected: P
                } = e, b = (0, u.useStateFromStores)([E.default], () => {
                    let e = E.default.getCurrentUser();
                    return i(null != e, "StreamSettings: user cannot be undefined"), e
                }), U = N.default.isPremiumExactly(b, x.PremiumTypes.TIER_0), G = N.default.isPremium(b), F = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getGuild(D)) || void 0 === e ? void 0 : e.premiumTier
                }), {
                    location: k
                } = (0, c.useAnalyticsContext)(), {
                    enabled: y
                } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
                    location: "a87c74_1"
                }, {
                    autoTrackExposure: U,
                    disable: !U
                }), B = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !1
                }), w = (y || !G) && !B, V = P ? p.GoLiveDeviceResolutionButtons : p.ApplicationStreamResolutionButtons, H = {
                    ...k,
                    section: A.AnalyticsSections.STREAM_SETTINGS
                }, W = (0, a.jsx)(C.default, {
                    buttons: V.map(e => j({
                        type: e,
                        selected: e.value === n,
                        needsPremium: !(0, g.default)(l, e.value, s, b, F),
                        analyticsLocation: H,
                        onClick: () => r(e.value),
                        onClose: t
                    }))
                }), z = (0, a.jsx)(C.default, {
                    buttons: p.ApplicationStreamFPSButtons.map(e => j({
                        type: e,
                        selected: e.value === s,
                        needsPremium: !(0, g.default)(l, n, e.value, b, F),
                        analyticsLocation: H,
                        onClick: () => h(e.value),
                        onClose: t
                    }))
                }), K = [{
                    value: p.ApplicationStreamPresets.PRESET_VIDEO,
                    label: R.default.Messages.STREAM_PRESET_VIDEO
                }, ...P ? [] : [{
                    value: p.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: R.default.Messages.STREAM_PRESET_DOCUMENTS
                }], {
                    value: p.ApplicationStreamPresets.PRESET_CUSTOM,
                    label: R.default.Messages.STREAM_PRESET_CUSTOM
                }], Y = l === p.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(_.default, {
                        children: (0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            titleClassName: T.formItemTitleSlim,
                            className: O.documentModeGroup,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                    fps: s
                                })
                            })
                        })
                    }), w ? (0, a.jsx)(I.default, {
                        message: R.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                        onClose: t,
                        openStreamUpsellModal: L
                    }) : null]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(_.default, {
                        children: [(0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            className: O.settingsGroup,
                            titleClassName: T.formItemTitleSlim,
                            children: W
                        }), (0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.SCREENSHARE_FRAME_RATE,
                            className: O.settingsGroup,
                            titleClassName: T.formItemTitleSlim,
                            children: z
                        })]
                    }), w ? (0, a.jsx)(I.default, {
                        onClose: t,
                        openStreamUpsellModal: L
                    }) : null]
                });
                return (0, a.jsx)(d.default, {
                    ...H,
                    children: (0, a.jsx)(o.FormItem, {
                        title: R.default.Messages.STREAM_QUALITY,
                        titleClassName: T.formItemTitle,
                        className: T.modalContent,
                        children: (0, a.jsxs)("div", {
                            className: O.qualitySettingsContainer,
                            children: [(0, a.jsx)(o.SingleSelect, {
                                value: l,
                                className: v.marginTop8,
                                options: K,
                                onChange: e => M(e)
                            }), Y]
                        })
                    })
                })
            }
        },
        480862: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("685665"),
                u = l("649844"),
                o = l("216422"),
                d = l("353487"),
                c = l("49111"),
                f = l("646718"),
                m = l("782340"),
                S = l("139191");

            function E(e) {
                let {
                    message: t,
                    onClose: l,
                    openStreamUpsellModal: n
                } = e, E = d.default.useExperiment({
                    location: "371fea_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    analyticsLocations: C
                } = (0, i.default)(), _ = {
                    section: c.AnalyticsSections.STREAM_SETTINGS,
                    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
                    objectType: c.AnalyticsObjectTypes.BUY
                }, h = () => (d.default.trackExposure({
                    location: "371fea_2"
                }), E.enabled) ? (0, u.default)({
                    initialPlanId: null,
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: C,
                    analyticsObject: _
                }) : n({
                    analyticsLocation: _,
                    onClose: l
                });
                return (0, a.jsxs)(r.Clickable, {
                    onClick: () => {
                        h()
                    },
                    className: s(S.upsellBanner, S.gradientBackground),
                    children: [(0, a.jsxs)("div", {
                        className: S.iconTextContainer,
                        children: [(0, a.jsx)(o.default, {
                            className: S.iconColor
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: S.upsellText,
                            children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        className: S.textLink,
                        children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
        },
        32649: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("42887");

            function n() {
                let e = a.default.getVideoDevices(),
                    t = Object.entries(e).map(e => {
                        let [t, l] = e;
                        return {
                            id: "camera:" + l.id,
                            name: l.name,
                            url: ""
                        }
                    });
                return t
            }
        },
        16750: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("756898");

            function n(e, t, l) {
                return null == t ? e : l.find(e => (0, a.default)(t.id, e.windowHandle))
            }
        },
        506317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                NitroBasicHDStreamingUpsellExperiment: function() {
                    return n
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-01_nitro_basic_hd_streaming_upsell",
                label: "Nitro Basic HD Streaming Upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable upsell",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        351720: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("627445"),
                n = l.n(a),
                s = l("773179"),
                r = l.n(s),
                i = l("353927");

            function u(e, t, l) {
                let a = window.DiscordNative;
                n(null != a, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], l = null != l ? l : {
                    width: 150,
                    height: 150
                };
                let s = [];
                return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.SCREEN)), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== t.length && s.push(a.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: l
                })), Promise.all(s).then(e => r.flatten(e))
            }
        }
    }
]);