(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68333"], {
        489847: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ab3468632852f3725893.png"
        },
        94646: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, n) {
            "use strict";
            e.exports = n.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac20c9a7b69e25e9d680.png"
        },
        597704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1616ba0a324e68a4fff7.png"
        },
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        93902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");

            function a(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("974889"),
                i = n("954016"),
                o = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = i.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: C
                } = e;
                d && (0, l.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let h = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                return (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: s,
                        locationObject: u,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: C
                    })
                }, {
                    modalKey: i.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: h
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function a(e) {
                return {
                    textValue: e,
                    richValue: i(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return i
                },
                voidToOptionValue: function() {
                    return o
                }
            });
            let l = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function i(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : l
            }

            function o(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("516555"),
                i = n("172858"),
                o = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: o,
                        colors: s
                    } = e, [u, d] = a.useState(null), c = (0, l.useConfettiCannon)(n, u), [f, p] = a.useState(!1);
                    return a.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && p(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...i.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n.x,
                                        y: n.y
                                    },
                                    maxValue: {
                                        x: n.x + n.width,
                                        y: n.y + n.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * r))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [c, t, f]), (0, r.jsx)(l.SpriteCanvas, {
                        ref: d,
                        sprites: null != o ? o : i.COMMON_CONFETTI_SPRITES,
                        colors: null != s ? s : i.COMMON_CONFETTI_COLORS,
                        spriteWidth: i.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: i.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                i = n("65597"),
                o = n("854588"),
                s = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("268779"),
                p = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: a,
                        style: p,
                        children: C
                    } = e, h = (0, i.default)([s.default], () => s.default.saturation);
                    return (0, r.jsx)("div", {
                        className: l(f.banner, a),
                        style: (() => {
                            if (null == t) return p;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === h) return {
                                ...p,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - h);
                            return {
                                ...p,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: C
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return L
                },
                default: function() {
                    return P
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                o = n("516555"),
                s = n("627445"),
                u = n.n(s),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                p = n("206230"),
                C = n("812204"),
                h = n("685665"),
                E = n("606292"),
                m = n("688318"),
                S = n("38766"),
                _ = n("601095"),
                I = n("493390"),
                v = n("697218"),
                g = n("730297"),
                T = n("806410"),
                O = n("923702"),
                A = n("716120"),
                y = n("408381"),
                x = n("57940"),
                b = n("782340"),
                N = n("99242"),
                M = n("53708");
            let L = e => {
                var t, n;
                let {
                    product: l,
                    onClose: i,
                    confettiTarget: o,
                    confettiCanvas: s,
                    category: L,
                    analyticsLocations: P
                } = e, {
                    confettiColors: R,
                    confettiSprites: D,
                    backgroundColors: F,
                    buttonColors: j
                } = (0, x.default)(L), k = (0, d.default)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), H = (0, d.default)([p.default], () => p.default.useReducedMotion), w = null !== (t = l.items.find(g.isAvatarDecorationRecord)) && void 0 !== t ? t : null, B = null !== (n = l.items.find(T.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: U
                } = (0, m.default)({
                    user: k,
                    avatarDecorationOverride: w,
                    size: (0, E.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), G = a.useRef(null), {
                    analyticsLocations: V,
                    AnalyticsLocationProvider: z
                } = (0, h.default)([...P, C.default.COLLECTIBLES_COLLECTED_MODAL]), Z = (0, S.default)({
                    analyticsLocations: V
                });
                return null == w && null == B ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: N.modalInner,
                        ref: G,
                        style: null != F ? {
                            background: (0, y.getBackgroundGradient)(F)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: N.bannerContainer,
                            children: [(0, r.jsx)(A.default, {
                                asset: L.banner,
                                size: 440,
                                className: N.decorationBanner
                            }), null != w && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: M,
                                avatarDecoration: U,
                                className: N.avatarDecoration,
                                "aria-label": l.name
                            }), null != B && (0, r.jsx)("div", {
                                className: N.profileEffectShopPreview,
                                children: (0, r.jsx)(_.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == B ? void 0 : B.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: N.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: N.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: b.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: l.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != B ? b.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : b.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    if (i(), (0, f.popLayer)(), Z(), null != w)(0, E.openAvatarDecorationModal)({
                                        initialSelectedDecoration: l.items.find(g.isAvatarDecorationRecord),
                                        analyticsLocations: V
                                    });
                                    else if (null != B)(0, I.openProfileEffectModal)({
                                        analyticsLocations: V,
                                        initialSelectedEffectID: null == B ? void 0 : B.id
                                    })
                                },
                                style: null != j ? {
                                    background: (0, y.getBackgroundGradient)(j, 90)
                                } : void 0,
                                children: b.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: i,
                            className: N.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !H && (0, r.jsx)(O.default, {
                        confettiTarget: null != o ? o : G.current,
                        confettiCanvas: s,
                        sprites: D,
                        colors: R
                    })]
                })
            };
            var P = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: l,
                    onClose: s,
                    analyticsLocations: u
                } = e, d = a.useRef(new o.Environment), [f, p] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.ConfettiCanvas, {
                        ref: p,
                        className: N.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: i(N.modalInner, N.modalContentOverrides),
                            children: (0, r.jsx)(L, {
                                product: n,
                                category: l,
                                onClose: s,
                                confettiCanvas: f,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return r
                },
                getLogoSize: function() {
                    return a
                },
                getBackgroundGradient: function() {
                    return l
                }
            });
            let r = 1060,
                a = e => 3.8 * e,
                l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: n,
                            secondary: r
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(r.toHslString(), ")")
                }
        },
        57940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("656280"),
                a = n.n(r),
                l = n("635058"),
                i = n("65597"),
                o = n("669491"),
                s = n("206230"),
                u = n("388491"),
                d = n("172858");
            let c = a(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = a(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [l, i, o] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: l,
                        g: i,
                        b: o
                    })
                },
                C = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        l = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: l.setAlpha(.4)
                    }
                },
                h = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        l = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(l.isLight() ? f : c)
                    }
                },
                E = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l
                    } = e.toHsl();
                    return a({
                        h: n,
                        s: r * t,
                        l
                    })
                },
                m = {
                    [l.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: C("#146144", "#021A0E"),
                        buttonColors: h("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [l.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: C("#4B79B0", "#0F0E3A"),
                        buttonColors: h("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [l.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: C("#E8B26B", "#7A3A00"),
                        buttonColors: h("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [l.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: C("#732565", "#111D40"),
                        buttonColors: h(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [l.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: C("#5280DC", "#060F25"),
                        buttonColors: h("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [l.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: C("#FFC267", "#6C1A00"),
                        buttonColors: h("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var S = e => {
                let t = (0, i.default)([s.default], () => s.default.saturation);
                if (null == e) return {};
                let n = m[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: E(n.backgroundColors.primary, t),
                        secondary: E(n.backgroundColors.secondary, t),
                        border: E(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: E(n.buttonColors.primary, t),
                        secondary: E(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => E(a(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var r = n("913144"),
                a = n("599110"),
                l = n("49111");

            function i(e) {
                a.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                a = n("913144"),
                l = n("197881"),
                i = n("492397");
            let o = new Set,
                s = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(i.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(e))
                }
                hasHiddenHotspot(e) {
                    return o.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: s
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    o = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (o.has(t)) return !1;
                    o.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var a = n("597517");
            n.es(a, t);
            var l = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("516555"),
                i = n("812204"),
                o = n("685665"),
                s = n("642906"),
                u = n("85336"),
                d = n("385179"),
                c = n("292215"),
                f = n("158184"),
                p = n("337978"),
                C = n("49111"),
                h = n("843455"),
                E = n("322859");
            let m = (e, t, n) => (0, r.jsx)(p.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function S(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: p,
                    loadId: S,
                    skuId: _,
                    analyticsLocations: I,
                    returnRef: v
                } = e, {
                    analyticsLocations: g,
                    AnalyticsLocationProvider: T
                } = (0, o.default)([...I, i.default.COLLECTIBLES_PAYMENT_MODAL]), O = a.useRef(new l.Environment), [A, y] = a.useState(null), x = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: A,
                        analyticsLocations: g
                    }),
                    options: {
                        bodyClassName: E.modalOverrideBody,
                        sliderBodyClassName: E.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(T, {
                    children: [(0, r.jsx)(l.ConfettiCanvas, {
                        ref: y,
                        className: E.confettiCanvas,
                        environment: O.current
                    }), (0, r.jsx)(s.PaymentContextProvider, {
                        stepConfigs: x,
                        applicationId: C.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [_],
                        activeSubscription: null,
                        purchaseType: h.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: S,
                            applicationId: C.COLLECTIBLES_APPLICATION_ID,
                            skuId: _,
                            initialPlanId: null,
                            analyticsLocations: g,
                            transitionState: p,
                            renderHeader: m,
                            returnRef: v,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                i = n("65597"),
                o = n("853987"),
                s = n("658756"),
                u = n("642906"),
                d = n("650484"),
                c = n("367767");

            function f(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: a
                } = e, {
                    skusById: f,
                    selectedSkuId: p,
                    application: C
                } = (0, u.usePaymentContext)(), {
                    product: h,
                    category: E
                } = (0, i.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(p),
                    category: o.default.getCategoryForProduct(p)
                }));
                l(null != p, "Expected selectedSkuId"), l(null != C, "Expected application");
                let m = f[p];
                return (l(null != m, "Expected sku"), null == E || null == h) ? null : (0, r.jsxs)(d.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsx)(s.CollectiblesCollectedModalInner, {
                        product: h,
                        category: E,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: a
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalHeader: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("834897"),
                i = n("85336"),
                o = n("425480"),
                s = n("504898"),
                u = n("551290");
            let d = e => {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, l.default)(o.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === i.Step.CONFIRM || t === i.Step.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: s.headerContainer,
                    children: [!d && (0, r.jsx)("div", {
                        className: s.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: s.headerImage
                        })
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: s.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                i = n("77078"),
                o = n("642906"),
                s = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: a,
                    application: f
                } = (0, o.usePaymentContext)();
                l(null != a, "Expected selectedSkuId"), l(null != f, "Expected application");
                let p = n[a];
                l(null != p, "Expected sku");
                let C = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(u.PaymentPortalBody, {
                    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(i.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: C
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(i.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return E
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return m
                },
                SHARED_STEP_CONFIGS: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("357957"),
                l = n("85336"),
                i = n("262683"),
                o = n("946359"),
                s = n("724269"),
                u = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: l.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(i.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
                            onReturn: () => {
                                let t = a.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                                    trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                C = {
                    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                h = {
                    key: l.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(o.default, {})
                },
                E = {
                    key: l.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                m = {
                    key: l.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                S = [C, h]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return u
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("245187"),
                i = n("642906"),
                o = n("85336"),
                s = n("628738");

            function u(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: u,
                    hasFetchedSkus: d,
                    paymentSources: c,
                    hasFetchedPaymentSources: f,
                    application: p
                } = (0, i.usePaymentContext)(), [C, h] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != p;
                    d && f && e && h(!1)
                }, [d, f, p]), a.useEffect(() => {
                    !C && !u && (0 === Object.keys(c).length ? t(o.Step.ADD_PAYMENT_STEPS) : t(o.Step.REVIEW))
                }, [C, u, t, c]), C) ? (0, r.jsx)(s.default, {}) : u ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return a
                },
                getGiftAnimationData: function() {
                    return p
                },
                sendGiftMessage: function() {
                    return C
                }
            });
            var r, a, l = n("627445"),
                i = n.n(l),
                o = n("450911"),
                s = n("819689"),
                u = n("884351"),
                d = n("42203"),
                c = n("659632"),
                f = n("78345");
            (r = a || (a = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let p = (e, t) => {
                    let r;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            r = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            r = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            r = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            r = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return r
                },
                C = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await o.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (i(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, c.getGiftCodeURL)(t);
                    return s.default.sendMessage(n.id, u.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var r = n("884691"),
                a = n("866227"),
                l = n.n(a),
                i = n("862337"),
                o = n("296892");
            let s = new Date("2023-01-01T07:59:59.000Z"),
                u = l(s),
                d = (0, o.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
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

            function c() {
                let [e, t] = r.useState(() => u.isAfter(Date.now()));
                return r.useEffect(() => {
                    let n = new i.Timeout,
                        r = () => {
                            let e = u.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : r()
                            })
                        };
                    return e && r(), () => n.stop()
                }), e
            }
            var f = d
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("206230"),
                o = n("491605"),
                s = n("210721"),
                u = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), [C, h] = a.useState(c), E = a.useRef((0, s.getGiftAnimationData)(t, C)), [m, S] = a.useState(null == f), [_, I] = a.useState(!1), [v, g] = a.useState(-1), T = () => {
                    E.current = (0, s.getGiftAnimationData)(t, C), g(e => e + 1)
                }, O = () => {
                    S(!1), I(!0), g(-1), h(c)
                };
                a.useEffect(() => {
                    null == f && h(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && v >= 0) {
                        O();
                        return
                    }
                    T()
                }, [t, f]), a.useEffect(() => {
                    (!_ || null == f) && T()
                }, [C]), a.useEffect(() => {
                    _ && (S(null == f), I(!1), T())
                }, [_]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(o.default, {
                    importData: E.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: v,
                    onComplete: null != f ? () => {
                        null != f && (h(f), S(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        601095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                o = n("859498"),
                s = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: l = !1,
                        isPurchased: c
                    } = e, f = l ? 250 : .1, [p, C] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== l) C(!1);
                        else {
                            let e = setTimeout(() => {
                                C(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, l]), null != t) ? (0, r.jsxs)("div", {
                        className: i(u.previewContainer, {
                            [u.previewContainerAnimation]: l
                        }),
                        children: [(0, r.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: l ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !p && (0, r.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(s.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: l,
                                restartMethod: o.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return T
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return A
                }
            });
            var r = n("627445"),
                a = n.n(r),
                l = n("917351"),
                i = n.n(l),
                o = n("913144"),
                s = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                C = n("845579"),
                h = n("474643"),
                E = n("18494"),
                m = n("800762"),
                S = n("659500"),
                _ = n("648564"),
                I = n("49111"),
                v = n("724210");

            function g(e, t, n) {
                u.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE);
                let r = !i.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !C.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let l = E.default.getChannelId();
                e.parent_id !== l && !(0, v.isGuildHomeChannel)(l) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(I.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(l) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? _.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    S.ComponentDispatch.dispatch(I.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function T(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(I.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let r = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = h.default.getDraft(e.id, h.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", h.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, h.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    o.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function O(e, t) {
                (0, f.transitionTo)(I.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function A(e) {
                o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: h.DraftType.FirstThreadMessage
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: h.DraftType.ThreadSettings
                })
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("926001"),
                i = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon)
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("509317"),
                i = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: l,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, l.FolderIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("578478"),
                i = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, l.ImageIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return o
                },
                ChatLayerProvider: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var r = n("228256");
            let {
                Layer: a,
                LayerContainer: l,
                LayerProvider: i
            } = (0, r.createLayer)("Chat"), o = l, s = i;
            var u = a
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                o = n("627445"),
                s = n.n(o),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                C = n("368121"),
                h = n("523096"),
                E = n("587974"),
                m = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function _(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }

            function I(e) {
                return (0, r.jsx)("div", {
                    className: m.moreUsers,
                    children: e
                })
            }
            class v extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: l
                    } = this.props, i = [], o = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(o), u = 0;
                    for (; u < o && u < e.length;) {
                        var d;
                        let t = null == s && null == l && u === e.length - 1,
                            o = n(e[u], t, u);
                        i.push(t ? (0, r.jsx)("div", {
                            className: m.avatarContainer,
                            children: o
                        }, _(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, r.jsx)(E.default, {
                            className: m.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: E.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, _(e[u], u))), u++
                    }
                    return null != l ? i.push(l) : null != s && i.push(s), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: i,
                        users: o
                    } = this.props, s = Math.min(e, o.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(a.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > o.length) {
                                let e = n - o.length;
                                return (0, r.jsx)(a.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < o.length) {
                            let e = Math.min(o.length - s, 99);
                            return (0, r.jsx)(a.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(C.default, {
                        foreground: m.foreground,
                        className: m.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: l,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, C = n.find(e => null != e && e.id === f), h = o && null == p.default.getUser(f);
                    return (0, r.jsx)(u.Popout, {
                        position: "right",
                        preload: null == C ? void 0 : () => (0, d.default)(C.id, C.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (s(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: h && null != C ? C : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: i(e, m.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return m.size16;
                                    case S.SIZE_24:
                                        return m.size24;
                                    case S.SIZE_32:
                                        return m.size32;
                                    case S.SIZE_56:
                                        return m.size56;
                                    default:
                                        return m.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = a.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: a,
                            guildId: l,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: m.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                                    t = h.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: m.avatar
                                })
                            }
                        }
                        let o = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, i),
                            alt: e.username,
                            className: m.avatar
                        }, e.id);
                        return a ? (0, r.jsx)(u.Clickable, {
                            className: m.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, e.id) : o
                    }
                }
            }
            v.defaultProps = {
                max: 10,
                renderMoreUsers: I,
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var g = v
        }
    }
]);