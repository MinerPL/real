(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86514"], {
        268258: function(e, t, l) {
            "use strict";
            l("222007"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringSimilarity = void 0;
            t.stringSimilarity = function(e, t, l, n) {
                if (void 0 === l && (l = 2), void 0 === n && (n = !1), !n && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < l || t.length < l) return 0;
                for (var a = new Map, s = 0; s < e.length - (l - 1); s++) {
                    var r = e.substr(s, l);
                    a.set(r, a.has(r) ? a.get(r) + 1 : 1)
                }
                for (var i = 0, u = 0; u < t.length - (l - 1); u++) {
                    var o = t.substr(u, l),
                        d = a.has(o) ? a.get(o) : 0;
                    d > 0 && (a.set(o, d - 1), i++)
                }
                return 2 * i / (e.length + t.length - (l - 1) * 2)
            }, t.default = t.stringSimilarity
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
        17137: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BrowserIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Z",
                        className: i
                    })]
                })
            }
        },
        265614: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ScreenIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        className: i
                    })
                })
            }
        },
        619335: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
                }
            });
            var n = l("274870"),
                a = l("116320"),
                s = l("617559"),
                r = l("213523"),
                i = l("593195"),
                u = l("361777"),
                o = l("497757"),
                d = l("774223"),
                c = l("991497"),
                f = l("393621"),
                m = l("905999"),
                S = l("660074"),
                C = l("990745"),
                E = l("190986"),
                h = l("721618"),
                p = l("733160"),
                g = l("990864"),
                _ = l("274652"),
                N = l("922744"),
                I = l("155207"),
                x = l("745183"),
                v = l("368121"),
                A = l("944633"),
                R = l("228427"),
                T = l("959097"),
                L = l("656038"),
                M = l("49111");

            function O(e, t) {
                switch (e.type) {
                    case M.ChannelTypes.DM:
                        return a.default;
                    case M.ChannelTypes.GROUP_DM:
                        let l = (0, n.getIsBroadcastingGDM)(e.id);
                        return l ? d.default : I.default;
                    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return _.default;
                        if ((0, L.default)(e)) return g.default;
                        else return p.default;
                    case M.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, L.default)(e)) return u.default;
                        else return i.default;
                    case M.ChannelTypes.GUILD_FORUM:
                        let O = e.isMediaChannel();
                        if (e.isNSFW()) return O ? h.default : m.default;
                        if ((0, L.default)(e)) return O ? E.default : f.default;
                        else return O ? C.default : c.default;
                    case M.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return h.default;
                        if ((0, L.default)(e)) return E.default;
                        else return C.default;
                    case M.ChannelTypes.GUILD_STAGE_VOICE:
                        return R.default;
                    case M.ChannelTypes.GUILD_VOICE:
                        if ((0, L.default)(e)) return A.default;
                        return v.default;
                    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case M.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return N.default;
                        if (e.isForumPost()) return S.default;
                        else return T.default;
                    case M.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return N.default;
                        return x.default;
                    case M.ChannelTypes.GUILD_DIRECTORY:
                        return s.default;
                    default:
                        return null
                }
            }
        },
        187001: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var n = l("37983"),
                a = l("884691"),
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
                C = () => {
                    let e = (0, r.useAnalyticsContext)(),
                        {
                            analyticsLocations: t
                        } = (0, i.default)();
                    return a.useEffect(() => {
                        o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                            location: e.location,
                            location_stack: t
                        })
                    }, []), (0, n.jsx)(s.FormItem, {
                        className: S.modalContent,
                        children: (0, n.jsxs)("div", {
                            className: m.nitroUpsellContainer,
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    className: m.nitroUpsellTitle,
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
                                }), (0, n.jsx)(s.Text, {
                                    className: m.nitroUpsellSubtitle,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
                                })]
                            }), (0, n.jsx)(s.Button, {
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
                    return A
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
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
                C = l("13798"),
                E = l("386045"),
                h = l("30591"),
                p = l("803725"),
                g = l("49111"),
                _ = l("994428"),
                N = l("782340"),
                I = l("173266"),
                x = l("770420");
            let v = e => {
                let {
                    clipsEnabled: t,
                    isAnimationDone: l,
                    guildId: s,
                    children: r
                } = e, m = (0, i.useStateFromStores)([E.default], () => E.default.getHardwareClassification()), C = m === h.ClipsHardwareClassification.MEETS_MINIMUM || m === h.ClipsHardwareClassification.UNKNOWN, x = m === h.ClipsHardwareClassification.BELOW_MINIMUM, v = l && (C || x) && !t, [A, R] = (0, c.useGetDismissibleContent)(v ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), T = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                a.useEffect(() => {
                    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }, [t]);
                let L = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t(), R(_.ContentDismissActionType.UNKNOWN)
                };
                return (0, n.jsx)(o.Popout, {
                    shouldShow: T,
                    position: "right",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, n.jsx)(f.default, {
                            dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: I.clipsEducationArt,
                            position: "right",
                            header: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: I.clipsEducationHeader,
                            body: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), x ? (0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: I.warningText,
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: S.default.getArticleURL(g.HelpdeskArticles.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: e => {
                                (0, p.updateClipsEnabled)({
                                    clipsEnabled: !0,
                                    guildId: s,
                                    trackAnalytics: !0
                                }), L(e)
                            },
                            onClose: e => {
                                L(e, t)
                            }
                        })
                    },
                    children: () => r
                })
            };
            var A = function(e) {
                let {
                    isAnimationDone: t,
                    guildId: l
                } = e, a = (0, i.useStateFromStores)([E.default], () => E.default.getSettings().clipsEnabled), s = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP));
                r(null != s, "Clips keybind should be set");
                let u = C.toString(s.shortcut, !0);
                return (0, n.jsx)(o.FormItem, {
                    title: N.default.Messages.CLIPS_SETTINGS,
                    titleClassName: x.formItemTitle,
                    className: x.modalContent,
                    children: (0, n.jsxs)("div", {
                        className: I.container,
                        children: [(0, n.jsx)(v, {
                            clipsEnabled: a,
                            guildId: l,
                            isAnimationDone: t,
                            children: (0, n.jsx)(o.FormSwitch, {
                                className: I.formSwitch,
                                value: a,
                                onChange: e => (0, p.updateClipsEnabled)({
                                    clipsEnabled: e,
                                    guildId: l,
                                    trackAnalytics: !0
                                }),
                                hideBorder: !0,
                                children: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: I.description,
                            children: N.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: u,
                                keybindHook: () => (0, n.jsx)("span", {
                                    className: I.keybindHintKeys,
                                    children: (0, n.jsx)(o.KeyCombo, {
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
                    return C
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
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
                C = a.forwardRef(function(e, t) {
                    let {
                        body: l,
                        header: s,
                        artClassName: C,
                        headerClassName: E,
                        contentClassName: h,
                        tryItText: p,
                        dismissText: g,
                        onTryFeature: _,
                        onClose: N,
                        className: I,
                        inlineArt: x = !1,
                        isPremiumFeature: v = !1,
                        shouldUseHorizontalButtons: A = !1,
                        showGIFTag: R = !1,
                        dismissibleContent: T,
                        position: L = "top",
                        align: M = "center",
                        art: O,
                        isPremiumEarlyAccess: j = !1,
                        maxWidth: D = 280
                    } = e, P = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [b, U] = a.useState(!1), {
                        ref: y,
                        width: G
                    } = (0, u.default)();

                    function H(e) {
                        (0, o.markDismissibleContentAsDismissed)(T, {
                            dismissAction: e
                        })
                    }
                    return a.useEffect(() => {
                        var e, t;
                        let l = (null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                        !b && l > D && U(!0)
                    }, [b, G, y, D]), a.useEffect(() => {
                        (0, o.requestMarkDismissibleContentAsShown)(T)
                    }, [T]), (0, n.jsx)("div", {
                        className: I,
                        ref: t,
                        children: (0, n.jsxs)("div", {
                            className: r(S.content, h, {
                                [S.contentNoArt]: null == C || x,
                                [S.contentPremium]: v || j
                            }),
                            children: [(0, n.jsxs)("div", {
                                className: r(C, x ? S.artInline : S.artAbsolute),
                                children: [R && (0, n.jsx)(d.default, {
                                    className: S.gifTag
                                }), O]
                            }), (0, n.jsxs)("div", {
                                className: S.body,
                                children: [(0, n.jsxs)(i.Heading, {
                                    className: r(v ? S.headerWithPremiumIcon : S.header, E),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [v && !j ? (0, n.jsx)(c.default, {
                                        className: S.premiumIcon
                                    }) : null, j ? (0, n.jsxs)(i.Text, {
                                        color: "always-white",
                                        variant: "eyebrow",
                                        className: S.earlyAccessBadgeContainer,
                                        children: [(0, n.jsx)(c.default, {
                                            className: S.earlyAccessIcon
                                        }), (0, n.jsx)("span", {
                                            className: S.earlyAccessText,
                                            children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                        })]
                                    }) : null, s]
                                }), null == l ? null : "string" == typeof l ? (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: l
                                }) : l]
                            }), (0, n.jsx)("div", {
                                ref: y,
                                className: b || !A ? S.buttonContainerVertical : S.buttonContainerHorizontal,
                                children: null != _ ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(i.Button, {
                                        className: S.button,
                                        size: P,
                                        onClick: e => {
                                            null == N || N(e), _(e), H(f.ContentDismissActionType.PRIMARY)
                                        },
                                        color: v || j ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
                                        look: v || j ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
                                        children: null != p ? p : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                    }), (0, n.jsx)(i.Button, {
                                        className: S.button,
                                        size: P,
                                        onClick: e => {
                                            null == N || N(e), H(f.ContentDismissActionType.DISMISS)
                                        },
                                        color: v || j ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
                                        look: v || j ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
                                        children: null != g ? g : m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                    })]
                                }) : (0, n.jsx)(i.Button, {
                                    className: S.button,
                                    size: i.Button.Sizes.MAX,
                                    onClick: e => {
                                        null == N || N(e), H(f.ContentDismissActionType.PRIMARY)
                                    },
                                    color: i.Button.Colors.WHITE,
                                    children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                })
                            }), (0, n.jsx)("div", {
                                className: r(S.pointer, {
                                    [S.bottomPointer]: "top" === L,
                                    [S.centerLeftPointer]: "right" === L && "center" === M,
                                    [S.topLeftPointer]: "right" === L && "top" === M
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
            var n = l("862205");
            let a = (0, n.createExperiment)({
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
            var s = a
        },
        288207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            }), l("222007");
            let n = new Set(["nvidia"]);

            function a(e) {
                for (let t of Object.keys(e)) {
                    let l = e[t];
                    if (null != l && null == l.error && n.has(t)) return !0
                }
                return !1
            }
        },
        439792: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var n = l("570277"),
                a = l.n(n),
                s = l("773336");
            let r = {
                [s.PlatformTypes.WINDOWS]: {
                    nvidia: "<=537.58.0"
                }
            };

            function i(e) {
                let t = r[(0, s.getPlatform)()];
                if (null == t) return !1;
                for (let l of Object.keys(e)) {
                    let n = e[l],
                        s = t[l];
                    if (null == n || null == s || null != n.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(n);
                    if (!a.satisfies(r, s)) return !0
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
            }), l("222007");
            var n = l("773356"),
                a = l("686298");

            function s(e, t, l) {
                let s = a.ApplicationStreamPresetValues[e];
                for (let a of s)
                    if ((0, n.default)(e, a.resolution, a.fps, t, l)) return [a.resolution, a.fps];
                return null
            }
        },
        709496: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var n = l("570277"),
                a = l.n(n),
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
                    let n = e[l],
                        s = t[l];
                    if (null == n || null == s || null != n.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(n);
                    if (!a.satisfies(r, s)) return !0
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
            var n = l("862205");
            let a = (0, n.createExperiment)({
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
            var s = a
        },
        767960: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var n = l("446674"),
                a = l("913144"),
                s = l("773336"),
                r = l("50885"),
                i = l("288207"),
                u = l("439792"),
                o = l("709496");
            let d = !1,
                c = !0,
                f = !1;
            class m extends n.default.Store {
                initialize() {
                    !(!s.isPlatformEmbedded || __OVERLAY__) && r.default.getGPUDriverVersions().then(e => {
                        d = (0, o.default)(e), c = (0, i.default)(e), f = (0, u.default)(e), this.emitChange()
                    })
                }
                get GPUDriversOutdated() {
                    return d
                }
                get canUseHardwareAcceleration() {
                    return c
                }
                get problematicGPUDriver() {
                    return f
                }
                getState() {
                    return {
                        GPUDriversOutdated: d,
                        canUseHardwareAcceleration: c,
                        problematicGPUDriver: f
                    }
                }
            }
            m.displayName = "StreamingCapabilitiesStore";
            var S = new m(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        streamingCapabilitiesStoreState: t
                    } = e;
                    d = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
                }
            })
        },
        375202: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("819068");

            function a(e, t) {
                if (__OVERLAY__) {
                    let e = t.getGame(),
                        l = (0, n.getPID)();
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
            var n = l("570277"),
                a = l.n(n),
                s = l("229353"),
                r = l("49671"),
                i = l("42887"),
                u = l("773336"),
                o = l("706530"),
                d = l("353927"),
                c = l("782340");

            function f() {
                if (!i.default.supports(d.Features.SOUNDSHARE)) return s.GO_LIVE_SCREENSHARE_NO_SOUND;
                if ((0, u.isWindows)() && !a.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
                if ((0, u.isMac)() && !a.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
                return null
            }
        },
        75974: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("808653"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                r = l.n(s),
                i = l("268258"),
                u = l("446674"),
                o = l("77078"),
                d = l("42887"),
                c = l("326620"),
                f = l("32649"),
                m = l("782340"),
                S = l("389915"),
                C = l("770420"),
                E = l("926622");

            function h(e) {
                let {
                    selectedSource: t,
                    onChangeVideoDeviceSource: l,
                    onChangeAudioDevice: s
                } = e, h = (0, f.default)(), p = (0, u.useStateFromStores)([d.default], () => d.default.getInputDevices()), [g, _] = a.useState(function(e, t, l) {
                    if (null != t && null != l) {
                        let n = t.find(t => t.id === e);
                        if (null == n) return;
                        let a = r.reduce(l, (e, t) => (0, i.stringSimilarity)(n.name, t.name) > (0, i.stringSimilarity)(n.name, e.name) ? t : e);
                        if (null != a) return a.id
                    }
                }(t.id, h, p));
                return null != g && s(g), (0, n.jsx)(a.Fragment, {
                    children: (0, n.jsxs)(o.FormItem, {
                        title: "Capture Device",
                        className: C.modalContent,
                        children: [(0, n.jsx)(o.FormItem, {
                            className: E.marginTop8,
                            children: (0, n.jsxs)(c.default, {
                                children: [(0, n.jsx)("span", {
                                    className: S.ellipsisText,
                                    children: t.name
                                }), (0, n.jsx)(o.Button, {
                                    className: S.changeButton,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.Button.Sizes.SMALL,
                                    onClick: l,
                                    children: m.default.Messages.CHANGE
                                })]
                            })
                        }), (0, n.jsx)(o.FormItem, {
                            className: E.marginTop8,
                            title: m.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: g,
                                className: E.marginaTop8,
                                onChange: e => {
                                    _(e), s(e)
                                },
                                options: r.map(p, e => {
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
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
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
                C = l("524939");

            function E(e) {
                let {
                    selectedChannelId: t,
                    guildId: l,
                    onChangeSelectedChannelId: E
                } = e, h = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()), p = (0, a.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), g = (0, a.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), _ = p.map(e => {
                    var l;
                    return {
                        name: (0, n.jsx)(f.default, {
                            channel: e,
                            users: null === (l = g[e.id]) || void 0 === l ? void 0 : l.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== (null == h ? void 0 : h.id)
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
                return (0, n.jsx)(m.default, {
                    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: C.channelSelectScrollerInner,
                    children: (0, n.jsx)(s.RadioGroup, {
                        options: _,
                        value: t,
                        itemInfoClassName: C.channelInfoWrapper,
                        itemTitleClassName: C.channelTitleWrapper,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return E(t)
                        }
                    })
                })
            }
        },
        636909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return q
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("446674"),
                u = l("77078"),
                o = l("79112"),
                d = l("299285"),
                c = l("454273"),
                f = l("56947"),
                m = l("187001"),
                S = l("504219"),
                C = l("845579"),
                E = l("42203"),
                h = l("525065"),
                p = l("305961"),
                g = l("42887"),
                _ = l("568307"),
                N = l("18494"),
                I = l("697218"),
                x = l("703370"),
                v = l("145131"),
                A = l("953109"),
                R = l("476263"),
                T = l("267675"),
                L = l("423487"),
                M = l("233437"),
                O = l("599110"),
                j = l("449008"),
                D = l("701909"),
                P = l("773336"),
                b = l("767960"),
                U = l("375202"),
                y = l("916262"),
                G = l("75974"),
                H = l("359812"),
                V = l("273405"),
                w = l("326620"),
                F = l("985997"),
                k = l("16750"),
                B = l("706530"),
                W = l("49111"),
                z = l("782340"),
                K = l("183351"),
                Y = l("770420");

            function Z(e) {
                let {
                    selectedSource: t,
                    selectSource: l,
                    sourceChanged: a,
                    onChangeSource: s
                } = e, r = (0, i.useStateFromStores)([_.default, x.default], () => (0, P.isWindows)() ? (0, U.default)(_.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([_.default], () => _.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(j.isNotNullish), [c]), m = null;
                if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
                let S = (0, k.default)(r, t, c),
                    C = a ? f.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === (null == S ? void 0 : S.id)
                    }) : o,
                    E = null != t && t.id.startsWith("screen") ? T.default : M.default;
                return (0, n.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitleVerySlim,
                    children: (0, n.jsxs)(w.default, {
                        children: [null != C ? (0, n.jsx)(A.default, {
                            game: C,
                            size: A.default.Sizes.XSMALL,
                            className: K.selectedIcon
                        }) : (0, n.jsx)(E, {
                            className: K.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: K.ellipsisText,
                            children: m
                        }), l ? (0, n.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: s,
                            children: z.default.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function J(e) {
                let {
                    onChange: t,
                    guildId: l
                } = e, a = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(l));
                return null == a ? (t(), null) : (0, n.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitle,
                    children: (0, n.jsxs)(w.default, {
                        children: [(0, n.jsx)(R.default, {
                            guild: a,
                            size: R.default.Sizes.SMALLER,
                            className: K.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: K.ellipsisText,
                            children: a.toString()
                        }), (0, n.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: t,
                            children: z.default.Messages.CHANGE
                        })]
                    })
                })
            }

            function X(e) {
                let {
                    text: t
                } = e;
                return (0, n.jsxs)(v.default, {
                    align: v.default.Align.CENTER,
                    className: K.warning,
                    children: [(0, n.jsx)(L.default, {
                        className: K.warningIcon
                    }), (0, n.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: t
                    })]
                })
            }

            function Q(e) {
                let {
                    guildId: t
                } = e, l = (0, i.useStateFromStores)([h.default], () => {
                    var e;
                    return null !== (e = h.default.getMemberCount(t)) && void 0 !== e ? e : 0
                }), s = C.NotifyFriendsOnGoLive.useSetting(), o = a.useCallback((e, t) => {
                    C.NotifyFriendsOnGoLive.updateSetting(t), O.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                        value: t
                    })
                }, []), d = l >= 2 && l <= B.STREAM_NOTIFY_GUILD_MAX_SIZE;
                return d ? (0, n.jsx)(u.FormItem, {
                    className: r(Y.modalContent, K.checkboxRow),
                    children: (0, n.jsx)(u.Checkbox, {
                        value: !!s,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: o,
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: z.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function q(e) {
                let {
                    selectedSource: t,
                    selectedFPS: l,
                    selectedChannelId: s,
                    selectedPreset: r,
                    selectedResolution: u,
                    sourceChanged: d,
                    guildId: C,
                    selectSource: h,
                    selectGuild: p,
                    onClose: _,
                    onChangeSelectedFPS: x,
                    onChangeSelectedResolution: v,
                    onChangeSelectedPreset: A,
                    onChangeSelectedChannelId: R,
                    onChangeSource: T,
                    onChangeAudioDevice: L,
                    onChangeGuild: M,
                    isAnimationDone: O
                } = e, j = (0, i.useStateFromStores)([N.default, E.default], () => E.default.getChannel(N.default.getVoiceChannelId())), P = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), U = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), w = (0, i.useStateFromStores)([g.default], () => g.default.getSoundshareEnabled()), k = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), B = (0, f.useEnableClips)(), K = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !B
                }), Y = (0, y.default)();
                null != t && t.id.startsWith("screen") && !g.default.supportsScreenSoundshare() ? Y = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == Y && g.default.supportsEnableSoundshare() && w !== W.SoundshareEnableState.ENABLED && (Y = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: () => {
                        _(), o.default.open(W.UserSettingsSections.VOICE)
                    }
                }));
                let q = B ? (0, n.jsx)(S.default, {
                        guildId: C,
                        isAnimationDone: O
                    }) : K ? (0, n.jsx)(m.default, {}) : void 0,
                    $ = !!(null == t ? void 0 : t.id.startsWith("camera")),
                    ee = null != k && k.verified && !k.bot,
                    et = null != j && !(0, c.isPrivateGuildChannel)(j);
                return (0, n.jsxs)(a.Fragment, {
                    children: [$ ? (0, n.jsx)(G.default, {
                        selectedSource: t,
                        onChangeVideoDeviceSource: T,
                        onChangeAudioDevice: L
                    }) : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(Z, {
                            selectSource: h,
                            sourceChanged: d,
                            onChangeSource: T,
                            selectedSource: t
                        }), null != Y ? (0, n.jsx)(X, {
                            text: Y
                        }) : null]
                    }), p && null != C ? (0, n.jsx)(J, {
                        guildId: C,
                        onChange: M
                    }) : null, null != j ? (0, n.jsx)(V.default, {
                        channel: j
                    }) : (0, n.jsx)(H.default, {
                        guildId: C,
                        selectedChannelId: s,
                        onChangeSelectedChannelId: R
                    }), null != C && ee && et ? (0, n.jsx)(Q, {
                        guildId: C
                    }) : null, P ? (0, n.jsx)(X, {
                        text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, U ? (0, n.jsx)(X, {
                        text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                            helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
                        })
                    }) : null, (0, n.jsx)(F.default, {
                        selectedPreset: r,
                        selectedFPS: l,
                        selectedResolution: u,
                        guildId: C,
                        onClose: _,
                        onFPSChange: x,
                        onResolutionChange: v,
                        onPresetChange: A,
                        captureDeviceSelected: $
                    }), q]
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
            var n = l("37983");
            l("884691");
            var a = l("446674"),
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
                } = e, l = (0, a.useStateFromStores)([r.default], () => r.default.getId()), f = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceStatesForChannel(t), [t]);
                return (0, n.jsx)(s.FormItem, {
                    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: c.modalContent,
                    titleClassName: c.formItemTitle,
                    children: (0, n.jsx)(o.default, {
                        children: (0, n.jsx)(u.default, {
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
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("145912");

            function i(e) {
                let {
                    separator: t = !1
                } = e;
                return (0, n.jsx)("div", {
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
                    return B
                }
            }), l("222007");
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("627445"),
                u = l.n(i),
                o = l("301165"),
                d = l("446674"),
                c = l("77078"),
                f = l("404118"),
                m = l("987317"),
                S = l("990766"),
                C = l("901582"),
                E = l("299285"),
                h = l("928609"),
                p = l("268491"),
                g = l("42203"),
                _ = l("305961"),
                N = l("42887"),
                I = l("568307"),
                x = l("18494"),
                v = l("697218"),
                A = l("703370"),
                R = l("145131"),
                T = l("476765"),
                L = l("599110"),
                M = l("773336"),
                O = l("50885"),
                j = l("773356"),
                D = l("7738"),
                P = l("375202"),
                b = l("636909"),
                U = l("934054"),
                y = l("23922"),
                G = l("16750"),
                H = l("686298"),
                V = l("49111"),
                w = l("180524"),
                F = l("782340"),
                k = l("770420");
            (a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

            function B(e) {
                var t, n, a, i;
                let {
                    selectGuild: B = !1,
                    selectSource: W = !0,
                    guildId: z,
                    analyticsLocation: K,
                    onClose: Y,
                    transitionState: Z
                } = e, {
                    preset: J,
                    resolution: X,
                    fps: Q
                } = (0, d.useStateFromStoresObject)([p.default], () => p.default.getState()), q = (0, d.useStateFromStores)([x.default, g.default], () => g.default.getChannel(x.default.getVoiceChannelId())), $ = (0, d.useStateFromStores)([I.default, A.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null), ee = (0, d.useStateFromStores)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), et = (0, d.useStateFromStores)([_.default], () => {
                    var e;
                    return null === (e = _.default.getGuild(z)) || void 0 === e ? void 0 : e.premiumTier
                }), [el, en] = null !== (t = (0, D.default)(J, ee, et)) && void 0 !== t ? t : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30];
                J !== H.ApplicationStreamPresets.PRESET_CUSTOM && (X = el, Q = en);
                let ea = (0, T.useUID)();
                let [es, er] = r.useState((a = B, i = W, a ? 0 : i ? 1 : 2)), [ei, eu] = r.useState(null), [eo, ed] = r.useState(!1), [ec, ef] = r.useState(null), [em, eS] = r.useState(null), [eC, eE] = r.useState(null), [eh, ep] = r.useState(J), [eg, e_] = r.useState(X), [eN, eI] = r.useState(Q), [ex, ev] = r.useState(null != z ? z : null), eA = null !== (n = null == q ? void 0 : q.id) && void 0 !== n ? n : ec;
                r.useEffect(() => {
                    let e = (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? E.default.getApplication(e.id) : null;
                    L.default.track(V.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: K
                    })
                }, [K]);

                function eR() {
                    ! function() {
                        var e, t;
                        u(null != $ || null != em, "got nothing to stream");
                        let l = null !== (e = null == q ? void 0 : q.id) && void 0 !== e ? e : ec;
                        u(null != l, "Received null target channel ID");
                        let n = g.default.getChannel(l),
                            a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : z;
                        null == q && m.default.selectVoiceChannel(l);
                        let s = eh,
                            r = eg,
                            i = eN;
                        !(0, j.default)(s, r, i, ee, et) && (s = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, i = H.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: s,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, G.default)($, em, I.default.getRunningGames()),
                            d = !(0, M.isWindows)() || null == o || (null == em ? void 0 : em.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(a, l, {
                            pid: c,
                            sourceId: null == c && null != em ? em.id : null,
                            sourceName: null == c && null != em ? em.name : null,
                            audioSourceId: eC
                        }), (async () => {
                            let e = await h.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), Y()
                }
                let eT = r.useCallback((e, t, l) => {
                    let n = (0, D.default)(e, ee, et),
                        [a, s] = null != n ? n : [t, l];
                    if (e !== eh && (t = a, l = s), !(0, j.default)(e, t, l, ee, et)) {
                        let [e, n] = (0, D.default)(H.ApplicationStreamPresets.PRESET_VIDEO, ee, et);
                        t = e, l = n
                    }
                    l !== eN && eI(l), t !== eg && e_(t), a !== t || s !== l ? ep(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eh && ep(e)
                }, [ee, et, eN, eg, eh]);
                async function eL(e) {
                    if (e.preventDefault(), 1 === es) return er(2);
                    let t = (0, G.default)($, em, I.default.getRunningGames()),
                        n = O.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, M.isMac)() && null != em) {
                        let e = await N.default.getMediaEngine().getDesktopSources(),
                            t = em.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var a, r;
                            a = t, r = e, L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: a,
                                screens: r.length
                            }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                                header: F.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: F.default.Messages.OKAY,
                                cancelText: F.default.Messages.CANCEL,
                                onConfirm: () => O.default.relaunch(),
                                ...e,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: F.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    n ? ! function() {
                        var e;
                        let t = null !== (e = null == $ ? void 0 : $.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, s.jsx)(e, {
                                ...l,
                                handleStream: eR,
                                pid: t
                            })
                        })
                    }() : eR()
                }
                let eM = r.useCallback(e => {
                        eS(e), null != e && (er(2), ed(!0))
                    }, []),
                    eO = r.useCallback(e => {
                        ev(e), er(W ? 1 : 2)
                    }, [W]),
                    ej = function(e) {
                        switch (e) {
                            case 1:
                                return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case 2:
                                return null;
                            default:
                                return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(es),
                    eD = (0, s.jsx)(c.ModalHeader, {
                        className: k.modalHeader,
                        separator: !1,
                        children: (0, s.jsxs)(R.default, {
                            direction: R.default.Direction.VERTICAL,
                            align: R.default.Align.CENTER,
                            className: k.header,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: ea,
                                className: k.headerText,
                                children: F.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != ej ? (0, s.jsx)(c.Text, {
                                className: k.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: ej
                            }) : null]
                        })
                    }),
                    eP = (0, s.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: es,
                        width: 480,
                        onSlideReady: eu,
                        children: [(0, s.jsx)(c.Slide, {
                            id: 0,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(U.default, {
                                    onSelectGuild: eO
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 1,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(y.default, {
                                    selectedSource: em,
                                    onChangeSelectedSource: eM
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 2,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(b.default, {
                                    selectedChannelId: ec,
                                    selectedPreset: eh,
                                    selectedResolution: eg,
                                    selectedSource: em,
                                    selectedFPS: eN,
                                    sourceChanged: eo,
                                    selectSource: W,
                                    onChangeSelectedFPS: e => eT(eh, eg, e),
                                    onChangeSelectedResolution: e => eT(eh, e, eN),
                                    onChangeSelectedPreset: e => eT(e, eg, eN),
                                    onChangeSelectedChannelId: ef,
                                    onChangeSelectedSource: eM,
                                    onChangeSource: () => er(1),
                                    onChangeAudioDevice: e => eE(e),
                                    onChangeGuild: () => er(0),
                                    onClose: Y,
                                    guildId: ex,
                                    selectGuild: B,
                                    isAnimationDone: 2 === ei && Z === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    eb = function(e, t, l, n) {
                        switch (e) {
                            case 1:
                                return t ? 0 : null;
                            case 2:
                                if (n) return 1;
                                if (!l && t) return 0;
                                return null;
                            default:
                                return null
                        }
                    }(es, B, W, eo),
                    eU = 2 !== es || null == em && null == $ || null == eA,
                    ey = (0, s.jsxs)(c.ModalFooter, {
                        justify: null == eb ? R.default.Justify.START : R.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eU,
                            autoFocus: !0,
                            children: F.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == eb ? (0, s.jsx)(c.Button, {
                            className: k.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: Y,
                            children: F.default.Messages.CANCEL
                        }) : (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => er(eb),
                            children: F.default.Messages.BACK
                        })]
                    });
                return (0, s.jsx)(C.default, {
                    page: V.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, s.jsxs)(c.ModalRoot, {
                        "aria-labelledby": ea,
                        transitionState: Z,
                        size: c.ModalSize.DYNAMIC,
                        className: k.modalSize,
                        children: [(0, s.jsx)(c.ModalCloseButton, {
                            onClick: Y,
                            className: k.modalCloseButton
                        }), (0, s.jsx)("div", {
                            className: k.art
                        }), (0, s.jsxs)("form", {
                            onSubmit: eL,
                            children: [eD, eP, ey]
                        })]
                    })
                })
            }
        },
        934054: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("881410");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("923959"),
                c = l("305961"),
                f = l("957255"),
                m = l("677099"),
                S = l("476263"),
                C = l("461380"),
                E = l("223913"),
                h = l("644169"),
                p = l("782340"),
                g = l("770420"),
                _ = l("305013");

            function N(e) {
                let {
                    guildId: t,
                    onClick: l
                } = e, a = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, E.canStreamInChannel)(t, c.default, f.default)
                }));
                return null != a && s ? (0, n.jsxs)(o.Clickable, {
                    onClick: () => l(t),
                    className: _.guildRow,
                    children: [(0, n.jsx)(S.default, {
                        guild: a,
                        size: S.default.Sizes.SMALL,
                        className: _.guildIcon
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: _.guildName,
                        children: a.toString()
                    }), (0, n.jsx)(C.default, {
                        direction: C.default.Directions.RIGHT,
                        className: _.guildArrow
                    })]
                }) : null
            }

            function I(e) {
                let {
                    onSelectGuild: t
                } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
                return (0, n.jsx)(h.default, {
                    title: p.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: s(_.guildScroller, g.marginBottom),
                    children: i.flatMap(l, e => {
                        let {
                            guildIds: l
                        } = e;
                        return l.map(e => (0, n.jsx)(N, {
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
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
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
                    selected: a = !1
                } = e, m = (0, i.default)(t), S = null;
                null != l && l.length > 0 && (S = (0, n.jsx)(o.default, {
                    guildId: t.guild_id,
                    className: f.voiceUserList,
                    users: l,
                    renderUser: e => {
                        if (null == e) return null;
                        let l = d.default.getName(t.guild_id, t.id, e),
                            a = e.getAvatarURL(t.guild_id, 24);
                        return (0, n.jsx)(r.TooltipContainer, {
                            text: l,
                            children: (0, n.jsx)("img", {
                                src: null != a ? a : void 0,
                                "aria-label": e.username,
                                alt: "",
                                className: f.avatar
                            })
                        })
                    },
                    renderMoreUsers: e => {
                        let a = l.slice(4),
                            s = function(e, t) {
                                let l = t.id,
                                    n = t.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1])
                                }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1]),
                                    nickname2: d.default.getName(n, l, e[2])
                                }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(a, t);
                        return (0, n.jsx)("div", {
                            children: (0, n.jsx)(r.TooltipContainer, {
                                text: s,
                                children: (0, n.jsx)("div", {
                                    className: f.userListOverflow,
                                    children: e
                                })
                            })
                        })
                    },
                    max: 5,
                    showUserPopout: !1
                }));
                let C = (0, u.default)(t);
                return (0, n.jsxs)("div", {
                    className: s(f.channelInfo, {
                        [f.selected]: a
                    }),
                    children: [(0, n.jsx)(C, {
                        className: f.channelIcon
                    }), (0, n.jsx)("div", {
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
            var n = l("37983");
            l("884691");
            var a = l("58893");

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: a.card,
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
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
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
                } = e, f = a.useRef(null), [m, S] = a.useState(!1), [C, E] = a.useState(!1), h = a.useCallback(() => {
                    let {
                        current: e
                    } = f;
                    null != e && (S(!e.isScrolledToTop()), E(!e.isScrolledToBottom()))
                }, []);
                return a.useLayoutEffect(() => h(), []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: r(d.title, d.scrollWrapper),
                        children: [(0, n.jsx)(i.FormTitle, {
                            className: o.formItemTitle,
                            children: t
                        }), (0, n.jsx)(u.default, {
                            separator: m
                        })]
                    }), (0, n.jsx)("div", {
                        className: l,
                        children: (0, n.jsx)(i.AdvancedScroller, {
                            ref: f,
                            className: r(d.scrollerInner, s, {
                                [d.bottomSeparator]: C
                            }),
                            onScroll: h,
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
                    return O
                }
            }), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
            var n = l("37983"),
                a = l("884691"),
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
                C = l("703370"),
                E = l("145131"),
                h = l("162933"),
                p = l("773336"),
                g = l("301834"),
                _ = l("756898"),
                N = l("375202"),
                I = l("321443"),
                x = l("444276"),
                v = l("353927"),
                A = l("782340"),
                R = l("45122");
            async function T() {
                let e = m.default.getVideoDevices(),
                    t = (0, o.default)(m.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
                        width: 176,
                        height: 99
                    }),
                    l = L(),
                    n = await l,
                    a = await t,
                    s = a.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
                    r = function(e, t) {
                        let l = {};
                        return t.forEach(e => {
                            l[e.id] = e
                        }), e.forEach(e => {
                            l[e.id] = e
                        }), Object.values(l).sort((e, t) => M(t) - M(e))
                    }(a.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), n),
                    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
                    c = Object.entries(e).filter(e => {
                        let [t, l] = e;
                        return !l.disabled
                    }).map((e, t) => {
                        let [l, n] = e, a = d[t % d.length], s = Uint8Array.from(atob(a), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
                        return {
                            id: "camera:" + n.id,
                            name: n.name,
                            url: r
                        }
                    });
                return {
                    windowSources: r,
                    screenSources: s,
                    cameraSources: c
                }
            }
            async function L() {
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
                            n = e.name,
                            a = t.icon;
                        return null != l && null != n && null != a ? {
                            id: "window:".concat(l),
                            name: n,
                            url: "data:image/bmp;base64,".concat(a)
                        } : null
                    }));
                return t.filter(e => null !== e)
            }

            function M(e) {
                let t = (0, p.isWindows)() ? (0, N.default)(S.default, C.default) : null,
                    l = S.default.getRunningGames();
                return null != t && (0, _.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, _.default)(e.id, t.windowHandle)) ? 1 : 0
            }

            function O(e) {
                let {
                    selectedSource: t,
                    onChangeSelectedSource: l
                } = e, {
                    enableGoLiveCaptureCard: s
                } = g.default.useExperiment({
                    location: "GoLive_Source_Select"
                }), i = m.default.supports(v.Features.GO_LIVE_HARDWARE), [o, f] = a.useState(null), [S, C] = a.useState(null), [p, _] = a.useState(null), N = null != p && p.length > 0, [L, M] = a.useState(u.DesktopSources.WINDOW), [O, j] = a.useState(!1), D = a.useRef(null), P = a.useRef(new d.Interval);
                a.useEffect(() => {
                    let e = P.current;
                    return T().then(e => {
                        let {
                            screenSources: t,
                            windowSources: l,
                            cameraSources: n
                        } = e;
                        f(t), C(l), _(n)
                    }), e.start(1e3, async () => {
                        let {
                            screenSources: e,
                            windowSources: t,
                            cameraSources: l
                        } = await T();
                        f(e), C(t), _(l)
                    }), () => {
                        e.stop()
                    }
                }, []);
                let b = a.useCallback(e => {
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
                                return p
                        }
                    }(L);
                if (null == U) return (0, n.jsx)(E.default, {
                    className: R.spinner,
                    justify: E.default.Justify.CENTER,
                    align: E.default.Align.CENTER,
                    children: (0, n.jsx)(c.Spinner, {})
                });
                let y = U.map(e => {
                    let {
                        id: a
                    } = e, s = (null == t ? void 0 : t.id) === a;
                    return (0, n.jsx)(c.Clickable, {
                        className: r(R.tile, {
                            [R.selected]: s
                        }),
                        onClick: () => l(e, null),
                        children: (0, n.jsx)(x.default, {
                            source: e,
                            selectedSource: t
                        }, e.id)
                    }, a)
                });

                function G() {
                    let e = D.current;
                    null != e && j(!e.isScrolledToTop())
                }
                return (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: R.segmentContainer,
                        children: [(0, n.jsx)(I.default, {
                            separator: O
                        }), (0, n.jsx)(c.SegmentedControl, {
                            options: function() {
                                let e = [{
                                    name: A.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: u.DesktopSources.WINDOW
                                }, {
                                    name: A.default.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: u.DesktopSources.SCREEN
                                }];
                                return s && i && N && e.push({
                                    name: A.default.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: u.DesktopSources.CAMERA
                                }), e
                            }(),
                            value: L,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return M(t)
                            },
                            className: R.segmentControl,
                            optionClassName: R.segmentControlOption
                        })]
                    }), L === u.DesktopSources.CAMERA ? (0, n.jsx)("div", {
                        className: R.sourceContainer,
                        children: (0, n.jsx)(c.AdvancedScroller, {
                            ref: b,
                            className: R.sourceScroller,
                            onScroll: G,
                            children: (0, n.jsx)(h.default, {
                                layout: h.default.Layout.WRAP,
                                columns: 2,
                                className: R.sourceContainer,
                                children: y
                            })
                        })
                    }) : (0, n.jsx)(c.AdvancedScroller, {
                        ref: b,
                        className: R.sourceScroller,
                        onScroll: G,
                        children: (0, n.jsx)(h.default, {
                            layout: h.default.Layout.WRAP,
                            columns: 2,
                            className: R.sourceContainer,
                            children: y
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
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("145131"),
                u = l("45122");

            function o(e) {
                let {
                    source: t,
                    selectedSource: l
                } = e, {
                    id: a,
                    name: o,
                    url: d
                } = t, c = (null == l ? void 0 : l.id) === a;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(i.default, {
                        direction: i.default.Direction.VERTICAL,
                        justify: i.default.Justify.CENTER,
                        align: i.default.Align.CENTER,
                        children: [(0, n.jsx)(i.default, {
                            justify: i.default.Justify.CENTER,
                            align: i.default.Align.CENTER,
                            children: (0, n.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(d, ")")
                                },
                                className: s(u.sourceThumbnail, {
                                    [u.selected]: c
                                })
                            })
                        }), (0, n.jsx)(r.Text, {
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
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("627445"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("901582"),
                c = l("997289"),
                f = l("56947"),
                m = l("506317"),
                S = l("305961"),
                C = l("697218"),
                E = l("140848"),
                h = l("145131"),
                p = l("216422"),
                g = l("719923"),
                _ = l("773356"),
                N = l("480862"),
                I = l("686298"),
                x = l("49111"),
                v = l("646718"),
                A = l("782340"),
                R = l("770420"),
                T = l("986916"),
                L = l("926622");

            function M(e) {
                let {
                    analyticsLocation: t,
                    onClose: a
                } = e;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("754534").then(l.bind(l, "754534"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        onCloseParent: a,
                        analyticsSource: t
                    })
                })
            }

            function O() {
                return (0, n.jsxs)("div", {
                    className: T.toolTipTextContainer,
                    children: [(0, n.jsx)(p.default, {
                        className: s(T.premiumIcon, T.premiumIconColor)
                    }), (0, n.jsx)(o.Text, {
                        className: T.upsellText,
                        variant: "text-sm/medium",
                        children: A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function j(e) {
                let t, l, {
                        type: a,
                        selected: r,
                        needsPremium: i,
                        analyticsLocation: u,
                        onClick: d,
                        onClose: c
                    } = e,
                    {
                        value: f,
                        label: m
                    } = a;
                return i ? (t = (0, n.jsx)(o.TooltipContainer, {
                    tooltipClassName: T.tooltip,
                    spacing: 12,
                    "aria-label": A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                    text: (0, n.jsx)(O, {}),
                    children: (0, n.jsx)(h.default, {
                        align: h.default.Align.CENTER,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: T.selectorNitroText,
                            children: m
                        })
                    })
                }), l = () => M({
                    analyticsLocation: u,
                    onClose: c
                })) : (t = (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: r ? T.selectorTextSelected : T.selectorText,
                    children: m
                }), l = () => d(f)), {
                    content: t,
                    className: s(r ? T.selectorButtonSelected : T.selectorButton, {
                        [T.selectorButtonPremiumRequired]: i
                    }),
                    onClick: l
                }
            }

            function D(e) {
                let {
                    onClose: t,
                    selectedPreset: l,
                    selectedResolution: a,
                    selectedFPS: s,
                    onResolutionChange: r,
                    onFPSChange: p,
                    onPresetChange: O,
                    guildId: D,
                    captureDeviceSelected: P
                } = e, b = (0, u.useStateFromStores)([C.default], () => {
                    let e = C.default.getCurrentUser();
                    return i(null != e, "StreamSettings: user cannot be undefined"), e
                }), U = g.default.isPremiumExactly(b, v.PremiumTypes.TIER_0), y = g.default.isPremium(b), G = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getGuild(D)) || void 0 === e ? void 0 : e.premiumTier
                }), {
                    location: H
                } = (0, c.useAnalyticsContext)(), {
                    enabled: V
                } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
                    location: "a87c74_1"
                }, {
                    autoTrackExposure: U,
                    disable: !U
                }), w = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !1
                }), F = (V || !y) && !w, k = P ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, B = {
                    ...H,
                    section: x.AnalyticsSections.STREAM_SETTINGS
                }, W = (0, n.jsx)(E.default, {
                    buttons: k.map(e => j({
                        type: e,
                        selected: e.value === a,
                        needsPremium: !(0, _.default)(l, e.value, s, b, G),
                        analyticsLocation: B,
                        onClick: () => r(e.value),
                        onClose: t
                    }))
                }), z = (0, n.jsx)(E.default, {
                    buttons: I.ApplicationStreamFPSButtons.map(e => j({
                        type: e,
                        selected: e.value === s,
                        needsPremium: !(0, _.default)(l, a, e.value, b, G),
                        analyticsLocation: B,
                        onClick: () => p(e.value),
                        onClose: t
                    }))
                }), K = [{
                    value: I.ApplicationStreamPresets.PRESET_VIDEO,
                    label: A.default.Messages.STREAM_PRESET_VIDEO
                }, ...P ? [] : [{
                    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: A.default.Messages.STREAM_PRESET_DOCUMENTS
                }], {
                    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
                    label: A.default.Messages.STREAM_PRESET_CUSTOM
                }], Y = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(h.default, {
                        children: (0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.STREAM_RESOLUTION,
                            titleClassName: R.formItemTitleSlim,
                            className: T.documentModeGroup,
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: A.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                    fps: s
                                })
                            })
                        })
                    }), F ? (0, n.jsx)(N.default, {
                        message: A.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                        onClose: t,
                        openStreamUpsellModal: M
                    }) : null]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(h.default, {
                        children: [(0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.STREAM_RESOLUTION,
                            className: T.settingsGroup,
                            titleClassName: R.formItemTitleSlim,
                            children: W
                        }), (0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.SCREENSHARE_FRAME_RATE,
                            className: T.settingsGroup,
                            titleClassName: R.formItemTitleSlim,
                            children: z
                        })]
                    }), F ? (0, n.jsx)(N.default, {
                        onClose: t,
                        openStreamUpsellModal: M
                    }) : null]
                });
                return (0, n.jsx)(d.default, {
                    ...B,
                    children: (0, n.jsx)(o.FormItem, {
                        title: A.default.Messages.STREAM_QUALITY,
                        titleClassName: R.formItemTitle,
                        className: R.modalContent,
                        children: (0, n.jsxs)("div", {
                            className: T.qualitySettingsContainer,
                            children: [(0, n.jsx)(o.SingleSelect, {
                                value: l,
                                className: L.marginTop8,
                                options: K,
                                onChange: e => O(e)
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
                    return C
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("685665"),
                u = l("649844"),
                o = l("216422"),
                d = l("353487"),
                c = l("49111"),
                f = l("646718"),
                m = l("782340"),
                S = l("139191");

            function C(e) {
                let {
                    message: t,
                    onClose: l,
                    openStreamUpsellModal: a
                } = e, C = d.default.useExperiment({
                    location: "371fea_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    analyticsLocations: E
                } = (0, i.default)(), h = {
                    section: c.AnalyticsSections.STREAM_SETTINGS,
                    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
                    objectType: c.AnalyticsObjectTypes.BUY
                }, p = () => (d.default.trackExposure({
                    location: "371fea_2"
                }), C.enabled) ? (0, u.default)({
                    initialPlanId: null,
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: E,
                    analyticsObject: h
                }) : a({
                    analyticsLocation: h,
                    onClose: l
                });
                return (0, n.jsxs)(r.Clickable, {
                    onClick: () => {
                        p()
                    },
                    className: s(S.upsellBanner, S.gradientBackground),
                    children: [(0, n.jsxs)("div", {
                        className: S.iconTextContainer,
                        children: [(0, n.jsx)(o.default, {
                            className: S.iconColor
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: S.upsellText,
                            children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, n.jsx)(r.Text, {
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
                    return a
                }
            }), l("222007");
            var n = l("42887");

            function a() {
                let e = n.default.getVideoDevices(),
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
                    return a
                }
            });
            var n = l("756898");

            function a(e, t, l) {
                return null == t ? e : l.find(e => (0, n.default)(t.id, e.windowHandle))
            }
        },
        506317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                NitroBasicHDStreamingUpsellExperiment: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
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
        140848: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("108037");
            let u = e => {
                let {
                    data: t,
                    disabled: l
                } = e, {
                    content: a,
                    className: u,
                    onClick: o,
                    disabled: d
                } = t;
                return (0, n.jsx)(r.FocusRing, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: s(i.item, u),
                        onClick: o,
                        disabled: l || d,
                        children: a
                    })
                })
            };
            var o = e => {
                let {
                    buttons: t,
                    disabled: l,
                    className: a
                } = e;
                return (0, n.jsx)("div", {
                    role: "group",
                    className: s(i.group, a),
                    children: t.map((e, t) => (0, n.jsx)(u, {
                        data: e,
                        disabled: l
                    }, t))
                })
            }
        },
        162933: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("414456"),
                u = l.n(i),
                o = l("145131"),
                d = l("773712");
            (n = a || (a = {})).WRAP = "wrap", n.STACK = "stack";
            class c extends r.PureComponent {
                renderChildren() {
                    let e;
                    let {
                        children: t,
                        layout: l,
                        columns: n
                    } = this.props;
                    switch (l) {
                        case "stack":
                            e = "100%";
                            break;
                        case "wrap":
                            e = "".concat(1 / n * 100, "%")
                    }
                    return t.map((t, l) => (0, s.jsx)(o.default.Child, {
                        className: d.tile,
                        basis: e,
                        grow: 0,
                        children: t
                    }, l))
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsx)(o.default, {
                        className: u(e, d.grid),
                        wrap: o.default.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                }
            }
            c.Layout = a, c.defaultProps = {
                children: [],
                layout: "wrap",
                columns: 4
            };
            var f = c
        },
        267675: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("265614"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"
                        })
                    })
                }, s.ScreenIcon, void 0, {
                    size: 24
                })
        },
        922744: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("782926"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z"
                        })]
                    })
                }, s.ThreadIcon, void 0, {
                    size: 24
                })
        },
        745183: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("782926"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z"
                        })]
                    })
                }, s.ThreadIcon, void 0, {
                    size: 24
                })
        },
        233437: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("17137"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z"
                        })]
                    })
                }, s.BrowserIcon, void 0, {
                    size: 24
                })
        },
        351720: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("424973"), l("222007");
            var n = l("627445"),
                a = l.n(n),
                s = l("773179"),
                r = l.n(s),
                i = l("353927");

            function u(e, t, l) {
                let n = window.DiscordNative;
                a(null != n, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], l = null != l ? l : {
                    width: 150,
                    height: 150
                };
                let s = [];
                return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.SCREEN)), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== t.length && s.push(n.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: l
                })), Promise.all(s).then(e => r.flatten(e))
            }
        }
    }
]);