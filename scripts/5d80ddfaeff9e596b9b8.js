(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16403"], {
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                i = n("974889"),
                l = n("954016"),
                o = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: C = !1,
                    analyticsLocations: E
                } = e;
                d && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let p = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
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
                        enableSelectedTextChannelInvite: C,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: p
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
                    richValue: l(e)
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
                    return l
                },
                voidToOptionValue: function() {
                    return o
                }
            });
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
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
                i = n("516555"),
                l = n("172858"),
                o = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: o,
                        colors: s
                    } = e, [u, d] = a.useState(null), c = (0, i.useConfettiCannon)(n, u), [f, C] = a.useState(!1);
                    return a.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && C(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
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
                    }, [c, t, f]), (0, r.jsx)(i.SpriteCanvas, {
                        ref: d,
                        sprites: null != o ? o : l.COMMON_CONFETTI_SPRITES,
                        colors: null != s ? s : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("65597"),
                o = n("854588"),
                s = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: a,
                        style: C,
                        children: E
                    } = e, p = (0, l.default)([s.default], () => s.default.saturation);
                    return (0, r.jsx)("div", {
                        className: i(f.banner, a),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === p) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - p);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return P
                },
                default: function() {
                    return M
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                o = n("516555"),
                s = n("627445"),
                u = n.n(s),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                C = n("206230"),
                E = n("812204"),
                p = n("685665"),
                h = n("606292"),
                m = n("688318"),
                S = n("38766"),
                _ = n("601095"),
                T = n("493390"),
                I = n("697218"),
                O = n("730297"),
                v = n("806410"),
                g = n("923702"),
                A = n("716120"),
                y = n("408381"),
                b = n("57940"),
                x = n("782340"),
                N = n("99242"),
                L = n("53708");
            let P = e => {
                var t, n;
                let {
                    product: i,
                    onClose: l,
                    confettiTarget: o,
                    confettiCanvas: s,
                    category: P,
                    analyticsLocations: M
                } = e, {
                    confettiColors: D,
                    confettiSprites: R,
                    backgroundColors: F,
                    buttonColors: j
                } = (0, b.default)(P), k = (0, d.default)([I.default], () => {
                    let e = I.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), H = (0, d.default)([C.default], () => C.default.useReducedMotion), B = null !== (t = i.items.find(O.isAvatarDecorationRecord)) && void 0 !== t ? t : null, w = null !== (n = i.items.find(v.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: G
                } = (0, m.default)({
                    user: k,
                    avatarDecorationOverride: B,
                    size: (0, h.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), V = a.useRef(null), {
                    analyticsLocations: U,
                    AnalyticsLocationProvider: Y
                } = (0, p.default)([...M, E.default.COLLECTIBLES_COLLECTED_MODAL]), W = (0, S.default)({
                    analyticsLocations: U
                });
                return null == B && null == w ? null : (0, r.jsxs)(Y, {
                    children: [(0, r.jsxs)("div", {
                        className: N.modalInner,
                        ref: V,
                        style: null != F ? {
                            background: (0, y.getBackgroundGradient)(F)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: N.bannerContainer,
                            children: [(0, r.jsx)(A.default, {
                                asset: P.banner,
                                size: 440,
                                className: N.decorationBanner
                            }), null != B && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: L,
                                avatarDecoration: G,
                                className: N.avatarDecoration,
                                "aria-label": i.name
                            }), null != w && (0, r.jsx)("div", {
                                className: N.profileEffectShopPreview,
                                children: (0, r.jsx)(_.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == w ? void 0 : w.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: N.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: N.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: i.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != w ? x.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    if (l(), (0, f.popLayer)(), W(), null != B)(0, h.openAvatarDecorationModal)({
                                        initialSelectedDecoration: i.items.find(O.isAvatarDecorationRecord),
                                        analyticsLocations: U
                                    });
                                    else if (null != w)(0, T.openProfileEffectModal)({
                                        analyticsLocations: U,
                                        initialSelectedEffectID: null == w ? void 0 : w.id
                                    })
                                },
                                style: null != j ? {
                                    background: (0, y.getBackgroundGradient)(j, 90)
                                } : void 0,
                                children: x.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: N.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !H && (0, r.jsx)(g.default, {
                        confettiTarget: null != o ? o : V.current,
                        confettiCanvas: s,
                        sprites: R,
                        colors: D
                    })]
                })
            };
            var M = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: i,
                    onClose: s,
                    analyticsLocations: u
                } = e, d = a.useRef(new o.Environment), [f, C] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.ConfettiCanvas, {
                        ref: C,
                        className: N.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: l(N.modalInner, N.modalContentOverrides),
                            children: (0, r.jsx)(P, {
                                product: n,
                                category: i,
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
                    return i
                }
            });
            let r = 1060,
                a = e => 3.8 * e,
                i = function(e) {
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
                i = n("635058"),
                l = n("65597"),
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
                C = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [i, l, o] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: i,
                        g: l,
                        b: o
                    })
                },
                E = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        i = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: i.setAlpha(.4)
                    }
                },
                p = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        i = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(i.isLight() ? f : c)
                    }
                },
                h = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l: i
                    } = e.toHsl();
                    return a({
                        h: n,
                        s: r * t,
                        l: i
                    })
                },
                m = {
                    [i.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: p("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [i.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: p("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [i.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: p("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [i.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: p(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [i.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: p("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [i.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: p("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var S = e => {
                let t = (0, l.default)([s.default], () => s.default.saturation);
                if (null == e) return {};
                let n = m[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: h(n.backgroundColors.primary, t),
                        secondary: h(n.backgroundColors.secondary, t),
                        border: h(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(n.buttonColors.primary, t),
                        secondary: h(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => h(a(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
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
                i = n("49111");

            function l(e) {
                a.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
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
                i = n("197881"),
                l = n("492397");
            let o = new Set,
                s = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(l.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(e))
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
                    return i.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var a = n("597517");
            n.es(a, t);
            var i = n("269596")
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
                i = n("516555"),
                l = n("812204"),
                o = n("685665"),
                s = n("642906"),
                u = n("85336"),
                d = n("385179"),
                c = n("292215"),
                f = n("158184"),
                C = n("337978"),
                E = n("49111"),
                p = n("843455"),
                h = n("322859");
            let m = (e, t, n) => (0, r.jsx)(C.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function S(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: C,
                    loadId: S,
                    skuId: _,
                    analyticsLocations: T,
                    returnRef: I
                } = e, {
                    analyticsLocations: O,
                    AnalyticsLocationProvider: v
                } = (0, o.default)([...T, l.default.COLLECTIBLES_PAYMENT_MODAL]), g = a.useRef(new i.Environment), [A, y] = a.useState(null), b = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: A,
                        analyticsLocations: O
                    }),
                    options: {
                        bodyClassName: h.modalOverrideBody,
                        sliderBodyClassName: h.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(v, {
                    children: [(0, r.jsx)(i.ConfettiCanvas, {
                        ref: y,
                        className: h.confettiCanvas,
                        environment: g.current
                    }), (0, r.jsx)(s.PaymentContextProvider, {
                        stepConfigs: b,
                        applicationId: E.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [_],
                        activeSubscription: null,
                        purchaseType: p.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: S,
                            applicationId: E.COLLECTIBLES_APPLICATION_ID,
                            skuId: _,
                            initialPlanId: null,
                            analyticsLocations: O,
                            transitionState: C,
                            renderHeader: m,
                            returnRef: I,
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
                i = n.n(a),
                l = n("65597"),
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
                    selectedSkuId: C,
                    application: E
                } = (0, u.usePaymentContext)(), {
                    product: p,
                    category: h
                } = (0, l.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(C),
                    category: o.default.getCategoryForProduct(C)
                }));
                i(null != C, "Expected selectedSkuId"), i(null != E, "Expected application");
                let m = f[C];
                return (i(null != m, "Expected sku"), null == h || null == p) ? null : (0, r.jsxs)(d.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsx)(s.CollectiblesCollectedModalInner, {
                        product: p,
                        category: h,
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
                i = n("834897"),
                l = n("85336"),
                o = n("425480"),
                s = n("504898"),
                u = n("551290");
            let d = e => {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, i.default)(o.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === l.Step.CONFIRM || t === l.Step.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
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
                i = n.n(a),
                l = n("77078"),
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
                i(null != a, "Expected selectedSkuId"), i(null != f, "Expected application");
                let C = n[a];
                i(null != C, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: C.name
                });
                return (0, r.jsxs)(u.PaymentPortalBody, {
                    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(l.Button, {
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
                    return C
                },
                REVIEW_STEP_CONFIG: function() {
                    return h
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
                i = n("85336"),
                l = n("262683"),
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
                C = {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                            onReturn: () => {
                                let t = a.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
                                    trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                p = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(o.default, {})
                },
                h = {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                m = {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                S = [E, p]
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
                i = n("245187"),
                l = n("642906"),
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
                    application: C
                } = (0, l.usePaymentContext)(), [E, p] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != C;
                    d && f && e && p(!1)
                }, [d, f, C]), a.useEffect(() => {
                    !E && !u && (0 === Object.keys(c).length ? t(o.Step.ADD_PAYMENT_STEPS) : t(o.Step.REVIEW))
                }, [E, u, t, c]), E) ? (0, r.jsx)(s.default, {}) : u ? (0, r.jsx)(i.BlockedPaymentsContentModal, {
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
                    return C
                },
                sendGiftMessage: function() {
                    return E
                }
            });
            var r, a, i = n("627445"),
                l = n.n(i),
                o = n("450911"),
                s = n("819689"),
                u = n("884351"),
                d = n("42203"),
                c = n("659632"),
                f = n("78345");
            (r = a || (a = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let C = (e, t) => {
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
                E = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await o.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (l(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
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
                i = n.n(a),
                l = n("862337"),
                o = n("296892");
            let s = new Date("2023-01-01T07:59:59.000Z"),
                u = i(s),
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
                    let n = new l.Timeout,
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
                    return i
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
            var i = a
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
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
            var i = a
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
                i = n("446674"),
                l = n("206230"),
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
                } = e, C = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, p] = a.useState(c), h = a.useRef((0, s.getGiftAnimationData)(t, E)), [m, S] = a.useState(null == f), [_, T] = a.useState(!1), [I, O] = a.useState(-1), v = () => {
                    h.current = (0, s.getGiftAnimationData)(t, E), O(e => e + 1)
                }, g = () => {
                    S(!1), T(!0), O(-1), p(c)
                };
                a.useEffect(() => {
                    null == f && p(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && I >= 0) {
                        g();
                        return
                    }
                    v()
                }, [t, f]), a.useEffect(() => {
                    (!_ || null == f) && v()
                }, [E]), a.useEffect(() => {
                    _ && (S(null == f), T(!1), v())
                }, [_]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(o.default, {
                    importData: h.current,
                    shouldAnimate: !C && d,
                    className: n,
                    versionKey: I,
                    onComplete: null != f ? () => {
                        null != f && (p(f), S(!0))
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
                i = n("414456"),
                l = n.n(i),
                o = n("859498"),
                s = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: i = !1,
                        isPurchased: c
                    } = e, f = i ? 250 : .1, [C, E] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== i) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, i]), null != t) ? (0, r.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: i
                        }),
                        children: [(0, r.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: i ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !C && (0, r.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(s.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: i,
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
                    return O
                },
                openThreadSidebarForCreating: function() {
                    return v
                },
                closeThreadSidebar: function() {
                    return g
                },
                closeAndClearThreadSidebar: function() {
                    return A
                }
            });
            var r = n("627445"),
                a = n.n(r),
                i = n("917351"),
                l = n.n(i),
                o = n("913144"),
                s = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                C = n("144491"),
                E = n("845579"),
                p = n("474643"),
                h = n("18494"),
                m = n("800762"),
                S = n("659500"),
                _ = n("648564"),
                T = n("49111"),
                I = n("724210");

            function O(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, C.transitionToThread)(e, n) : (0, C.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let i = h.default.getChannelId();
                e.parent_id !== i && !(0, I.isGuildHomeChannel)(i) && (0, C.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, I.isGuildHomeChannel)(i) ? I.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? _.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    S.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function v(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), h.default.getChannelId() !== e.id && (0, C.transitionToChannel)(e.id);
                let r = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
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

            function g(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, I.isGuildHomeChannel)(t) ? I.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
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
                    draftType: p.DraftType.FirstThreadMessage
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
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
                i = n("926001"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon)
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
                i = n("509317"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon)
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
                i = n("578478"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, i.ImageIcon)
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
                LayerContainer: i,
                LayerProvider: l
            } = (0, r.createLayer)("Chat"), o = i, s = l;
            var u = a
        }
    }
]);