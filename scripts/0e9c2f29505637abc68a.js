(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72952"], {
        22230: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a2a4e4f7ee423cd6bbcd.mov"
        },
        318342: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21a45210eb71c8dd143f.webm"
        },
        604448: function(e, t, s) {
            "use strict";
            e.exports = s.p + "8bc05ae4c6f108b651eb.mov"
        },
        788936: function(e, t, s) {
            "use strict";
            e.exports = s.p + "8088275f2bba6c7b1ae1.webm"
        },
        833572: function(e, t, s) {
            "use strict";
            e.exports = s.p + "baded936da3290c1c243.mov"
        },
        90976: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1f710ae2375e133a76c4.webm"
        },
        170486: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a139e1ef9370869a38c5.mov"
        },
        664182: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d71df05a611472844848.webm"
        },
        406915: function(e, t, s) {
            "use strict";
            let i;
            s.r(t), s.d(t, {
                prefetch: function() {
                    return w
                },
                PremiumSubscriptionWowMomentForHelper: function() {
                    return C
                },
                default: function() {
                    return h
                }
            }), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007");
            var u = s("37983"),
                r = s("884691"),
                a = s("301165"),
                n = s("446674"),
                o = s("913144"),
                l = s("206230"),
                O = s("58608"),
                T = s("599110"),
                m = s("560528"),
                I = s("659500"),
                c = s("855133"),
                d = s("824986"),
                _ = s("921228"),
                p = s("848877"),
                M = s("22230"),
                N = s("604448"),
                E = s("833572"),
                S = s("170486"),
                f = s("49111"),
                P = s("600608"),
                R = s("318342"),
                A = s("788936"),
                U = s("90976"),
                b = s("664182");
            async function w(e) {
                try {
                    o.default.dispatch({
                        type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !0
                    });
                    let t = e ? N : A;
                    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? E : U : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? S : b);
                    let s = fetch(t).then(async e => {
                            let t = await e.blob(),
                                s = window.URL.createObjectURL(t);
                            return s
                        }),
                        i = fetch(e ? M : R).then(async e => {
                            let t = await e.blob(),
                                s = window.URL.createObjectURL(t);
                            return s
                        }),
                        [u, r] = await Promise.all([s, i]);
                    o.default.dispatch({
                        type: "PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                        wumpusMedia: u,
                        helperMedia: r
                    })
                } catch (e) {
                    o.default.dispatch({
                        type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !1
                    }), (0, c.setIsPersistentHelperHidden)(!1)
                }
            }

            function C() {
                let [e, t] = r.useState(!0), s = (0, n.useStateFromStores)([d.default], () => d.default.wowMomentHelperMedia), i = (0, m.supportsHEVCAlpha)();
                return (0, u.jsx)("div", {
                    children: e && null !== s && (0, u.jsx)(O.default, {
                        className: P.videoWrapperForHelper,
                        autoPlay: !0,
                        onEnded: () => {
                            t(!1), (0, c.setCanPlayWowMoment)(!1)
                        },
                        children: (0, u.jsx)("source", {
                            src: s,
                            type: i ? "video/mp4" : "video/webm"
                        })
                    })
                })
            }
            var h = function() {
                let e = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion),
                    t = (0, _.useIsPremiumTutorialEnabled)("PremiumSubscriptionWowMoment"),
                    {
                        wumpusMedia: s,
                        helperMedia: o,
                        isFetchingMedia: M,
                        canPlayWowMoment: N
                    } = (0, n.useStateFromStoresObject)([d.default], () => ({
                        wumpusMedia: d.default.wowMomentWumpusMedia,
                        helperMedia: d.default.wowMomentHelperMedia,
                        isFetchingMedia: d.default.isFetchingWowMomentMedia,
                        canPlayWowMoment: d.default.canPlayWowMoment
                    })),
                    [E, S] = r.useState(!1),
                    R = (0, m.getChromeVersion)(),
                    A = (0, m.supportsHEVCAlpha)(),
                    U = R > 52 || -1 === R || A,
                    b = A ? "video/mp4" : "video/webm",
                    C = U && !e && N && t && null === s && null === o && !1 === M;
                C && w(A), r.useEffect(() => {
                    function t() {
                        let t = (0, _.isPremiumTutorialEnabled)("PremiumSubscriptionWowMoment-maybeActivateWowMoment", !e && U);
                        t && (S(!0), i = setTimeout(() => {
                            S(!1), D(!0), T.default.track(f.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: p.WowMomentTypes.GRADIENT_HIGHLIGHT
                            })
                        }, 2e3)), e && ((0, c.setCanPlayWowMoment)(!1), (0, c.setIsPersistentHelperHidden)(!1)), !U && (0, c.setIsPersistentHelperHidden)(!1)
                    }
                    return I.ComponentDispatch.subscribe(f.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
                        I.ComponentDispatch.unsubscribe(f.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t)
                    }
                }, [e, U]);
                let [h, D] = r.useState(!1), [L, g] = r.useState(!1), G = (0, a.useSpring)({
                    opacity: h ? .2 : 0,
                    config: {
                        duration: 100
                    },
                    immediate: e
                }), F = (0, a.useSpring)({
                    x: L ? "100%" : "-100%",
                    config: {
                        duration: 500
                    },
                    immediate: e || !L
                });
                return r.useEffect(() => {
                    let e = -1;
                    return h && (e = window.setTimeout(() => {
                        g(!0)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [h]), r.useEffect(() => {
                    let e = -1;
                    return L && (e = window.setTimeout(() => {
                        g(!1), D(!1), (0, c.setIsPersistentHelperHidden)(!1)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [L]), (0, u.jsxs)("div", {
                    className: P.wrapper,
                    children: [E && null !== s && (0, u.jsx)(O.default, {
                        autoPlay: !0,
                        className: P.videoWrapper,
                        onPlay: () => {
                            clearTimeout(i), T.default.track(f.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: p.WowMomentTypes.WUMPUS_FLIGHT
                            })
                        },
                        onTimeUpdate: e => {
                            e.currentTarget.currentTime > 4 && ((0, c.setCanPlayWowMoment)(!0), (0, c.setIsPersistentHelperHidden)(!1))
                        },
                        onEnded: () => {
                            S(!1)
                        },
                        children: (0, u.jsx)("source", {
                            src: s,
                            type: b
                        })
                    }), (0, u.jsx)(a.animated.div, {
                        className: P.gadientHighlight,
                        style: G
                    }), (0, u.jsx)(a.animated.div, {
                        className: P.swipeWrapper,
                        style: F,
                        children: (0, u.jsxs)("svg", {
                            className: P.swipe,
                            viewBox: "0 0 848 1024",
                            fill: "none",
                            children: [(0, u.jsx)("path", {
                                d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                                fill: "white"
                            }), (0, u.jsx)("path", {
                                d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                                fill: "white"
                            })]
                        })
                    })]
                })
            }
        },
        35099: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setActiveSubstep: function() {
                    return u
                }
            });
            var i = s("913144");
            let u = e => {
                i.default.dispatch({
                    type: "SET_ACTIVE_SUBSTEP",
                    substep: e
                })
            }
        },
        105185: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSubsteps: function() {
                    return r
                }
            });
            var i = s("305961"),
                u = s("646718");
            let r = e => {
                let t = i.default.getGuildCount();
                return e === u.PremiumTutorialSteps.PROFILE_CUSTOMIZATION ? (0, u.PremiumTutorialSubstepsOrder)[e].filter(e => {
                    if (e === u.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_GUILD_PROFILES) return 0 !== t;
                    return !0
                }) : u.PremiumTutorialSubstepsOrder[e]
            }
        },
        848877: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                WowMomentTypes: function() {
                    return u
                },
                getBodyCopyForSubstep: function() {
                    return m
                },
                getNextSubstep: function() {
                    return I
                },
                getPreviousSubstep: function() {
                    return c
                },
                dismissPremiumTutorialFlow: function() {
                    return d
                },
                getHighlightOffsets: function() {
                    return _
                },
                shouldDismissOnUnmount: function() {
                    return p
                },
                dismissPremiumTutorialTooltip: function() {
                    return M
                }
            });
            var i, u, r = s("10641"),
                a = s("855133"),
                n = s("921228"),
                o = s("35099"),
                l = s("105185"),
                O = s("646718"),
                T = s("782340");
            (i = u || (u = {})).WUMPUS_FLIGHT = "wumpus_flight", i.GRADIENT_HIGHLIGHT = "gradient_highlight";
            let m = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    switch (e) {
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_AVATAR:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_AVATAR;
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS;
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_BANNER:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_BANNER;
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_THEME:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_THEME;
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_GUILD_PROFILES:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_GUILD_PROFILES;
                        case O.PremiumTutorialSubsteps.BOOSTING_GUILD_MENU_ITEM:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_BOOSTING_GUILD_MENU_ITEM;
                        case O.PremiumTutorialSubsteps.BOOSTING_GUILD_BANNER:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_BOOSTING_GUILD_BANNER;
                        case O.PremiumTutorialSubsteps.CUSTOM_EMOJI_GENERAL:
                            return t ? T.default.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_GENERAL2.format() : T.default.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_GENERAL_UNFORMATTED;
                        case O.PremiumTutorialSubsteps.CUSTOM_EMOJI_TRY_IT_OUT:
                            return T.default.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_ANIMATED_EMOJI
                    }
                },
                I = (e, t) => {
                    if (null == t) return null;
                    let s = null,
                        i = (0, l.getSubsteps)(e),
                        u = i.findIndex(e => e === t);
                    return -1 !== u && u !== i.length - 1 && (s = i[u + 1]), s
                },
                c = (e, t) => {
                    if (null == t) return null;
                    let s = null,
                        i = (0, l.getSubsteps)(e),
                        u = i.findIndex(e => e === t);
                    return u > 0 && (s = i[u - 1]), s
                },
                d = e => {
                    let t = (0, n.isPremiumTutorialEnabled)("dismissPremiumTutorialFlow-".concat(e));
                    t && ((0, a.setHasCompletedStep)(), (0, r.markDismissibleContentAsDismissed)(e), (0, o.setActiveSubstep)(null), (0, a.setNavigatedFromHelper)(!1))
                },
                _ = e => {
                    switch (e) {
                        case O.PremiumTutorialSubsteps.CUSTOM_EMOJI_GENERAL:
                        case O.PremiumTutorialSubsteps.CUSTOM_EMOJI_TRY_IT_OUT:
                            return [-8, -8, -1, -8];
                        case O.PremiumTutorialSubsteps.BOOSTING_GUILD_BANNER:
                            return ["-10%", "10%", "-10%", "10%"];
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_AVATAR:
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS:
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_BANNER:
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_GUILD_PROFILES:
                        case O.PremiumTutorialSubsteps.PROFILE_CUSTOMIZATION_THEME:
                        case O.PremiumTutorialSubsteps.BOOSTING_GUILD_MENU_ITEM:
                        default:
                            return [-12, -12, 12, -12]
                    }
                },
                p = e => {
                    switch (e) {
                        case O.PremiumTutorialSteps.PROFILE_CUSTOMIZATION:
                        case O.PremiumTutorialSteps.BOOSTING:
                            return !1;
                        case O.PremiumTutorialSteps.CUSTOM_EMOJI:
                        default:
                            return !0
                    }
                },
                M = e => {
                    (0, n.isPremiumTutorialEnabled)("dismissPremiumTutorialTooltip-".concat(e)) && (0, r.markDismissibleContentAsDismissed)(e)
                }
        }
    }
]);