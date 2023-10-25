(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52777"], {
        212653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                o = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                s = (e, t) => {
                    for (var n in t || (t = {})) i.call(t, n) && o(e, n, t[n]);
                    if (a)
                        for (var n of a(t)) l.call(t, n) && o(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, r, a) => {
                    let i, l, o = s({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => s(s({}, t), e)
                    }, t);
                    (o.blacklist || o.whitelist) && console.warn("The ".concat(o.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        i = o.getStorage()
                    } catch (e) {}
                    if (!i) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(o.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, a);
                    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(o.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let p = u(o.serialize),
                        C = () => {
                            let e;
                            let t = o.partialize(s({}, r()));
                            o.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = o.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), o.blacklist && o.blacklist.forEach(e => delete t[e]);
                            let n = p({
                                state: t,
                                version: o.version
                            }).then(e => i.setItem(o.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        h = a.setState;
                    a.setState = (e, t) => {
                        h(e, t), C()
                    };
                    let E = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), C()
                        }, r, a),
                        m = () => {
                            var e;
                            if (!i) return;
                            d = !1, c.forEach(e => e(r()));
                            let t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, r())) || void 0;
                            return u(i.getItem.bind(i))(o.name).then(e => {
                                if (e) return o.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === o.version) return e.state;
                                    if (o.migrate) return o.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = o.merge(e, null != (t = r()) ? t : E), !0), C()
                            }).then(() => {
                                null == t || t(l, void 0), d = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return a.persist = {
                        setOptions: e => {
                            o = s(s({}, o), e), e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == i ? void 0 : i.removeItem) || e.call(i, o.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, m(), l || E
                }
        },
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
            var r = n("920040");
            n("773670");
            var a = n("912557"),
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
            var r = n("773670");

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
            var r = n("920040");
            n("773670");
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
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: C
                } = e;
                d && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
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
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
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
            var r = n("920040"),
                a = n("773670"),
                i = n("641900"),
                l = n("15059"),
                o = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: o,
                        colors: s
                    } = e, [u, d] = a.useState(null), c = (0, i.useConfettiCannon)(n, u), [f, p] = a.useState(!1);
                    return a.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && p(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
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
                    return p
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                l = n("744196"),
                o = n("541736"),
                s = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("331022"),
                p = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: a,
                        style: p,
                        children: C
                    } = e, h = (0, l.default)([s.default], () => s.default.saturation);
                    return (0, r.jsx)("div", {
                        className: i(f.banner, a),
                        style: (() => {
                            if (null == t) return p;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n
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
                    return M
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                o = n("641900"),
                s = n("161179"),
                u = n.n(s),
                d = n("744196"),
                c = n("77078"),
                f = n("54239"),
                p = n("206230"),
                C = n("812204"),
                h = n("685665"),
                E = n("606292"),
                m = n("688318"),
                S = n("38766"),
                v = n("601095"),
                g = n("493390"),
                _ = n("697218"),
                I = n("730297"),
                T = n("806410"),
                O = n("923702"),
                y = n("716120"),
                b = n("408381"),
                A = n("57940"),
                N = n("782340"),
                x = n("484986"),
                P = n("53708");
            let L = e => {
                var t, n;
                let {
                    product: i,
                    onClose: l,
                    confettiTarget: o,
                    confettiCanvas: s,
                    category: L,
                    analyticsLocations: M
                } = e, {
                    confettiColors: D,
                    confettiSprites: R,
                    backgroundColors: F,
                    buttonColors: j
                } = (0, A.default)(L), w = (0, d.default)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), k = (0, d.default)([p.default], () => p.default.useReducedMotion), H = null !== (t = i.items.find(I.isAvatarDecorationRecord)) && void 0 !== t ? t : null, B = null !== (n = i.items.find(T.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: G
                } = (0, m.default)({
                    user: w,
                    avatarDecorationOverride: H,
                    size: (0, E.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), V = a.useRef(null), {
                    analyticsLocations: U,
                    AnalyticsLocationProvider: z
                } = (0, h.default)([...M, C.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, S.default)({
                    analyticsLocations: U
                });
                return null == H && null == B ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: x.modalInner,
                        ref: V,
                        style: null != F ? {
                            background: (0, b.getBackgroundGradient)(F)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: x.bannerContainer,
                            children: [(0, r.jsx)(y.default, {
                                asset: L.banner,
                                size: 440,
                                className: x.decorationBanner
                            }), null != H && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: P,
                                avatarDecoration: G,
                                className: x.avatarDecoration,
                                "aria-label": i.name
                            }), null != B && (0, r.jsx)("div", {
                                className: x.profileEffectShopPreview,
                                children: (0, r.jsx)(v.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == B ? void 0 : B.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: x.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: x.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: i.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != B ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    if (l(), (0, f.popLayer)(), Y(), null != H)(0, E.openAvatarDecorationModal)({
                                        initialSelectedDecoration: i.items.find(I.isAvatarDecorationRecord),
                                        analyticsLocations: U
                                    });
                                    else if (null != B)(0, g.openProfileEffectModal)({
                                        analyticsLocations: U,
                                        initialSelectedEffectID: null == B ? void 0 : B.id
                                    })
                                },
                                style: null != j ? {
                                    background: (0, b.getBackgroundGradient)(j, 90)
                                } : void 0,
                                children: N.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: x.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !k && (0, r.jsx)(O.default, {
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
                } = e, d = a.useRef(new o.Environment), [f, p] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.ConfettiCanvas, {
                        ref: p,
                        className: x.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: l(x.modalInner, x.modalContentOverrides),
                            children: (0, r.jsx)(L, {
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
            var r = n("109926"),
                a = n.n(r),
                i = n("227116"),
                l = n("744196"),
                o = n("912557"),
                s = n("206230"),
                u = n("388491"),
                d = n("15059");
            let c = a(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = a(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [i, l, o] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: i,
                        g: l,
                        b: o
                    })
                },
                C = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        i = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: i.setAlpha(.4)
                    }
                },
                h = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        i = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(i.isLight() ? f : c)
                    }
                },
                E = (e, t) => {
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
                        backgroundColors: C("#146144", "#021A0E"),
                        buttonColors: h("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [i.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: C("#4B79B0", "#0F0E3A"),
                        buttonColors: h("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [i.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: C("#E8B26B", "#7A3A00"),
                        buttonColors: h("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [i.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: C("#732565", "#111D40"),
                        buttonColors: h(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [i.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: C("#5280DC", "#060F25"),
                        buttonColors: h("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [i.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: C("#FFC267", "#6C1A00"),
                        buttonColors: h("#F5A142", "#E4760E"),
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
            var r = n("498225"),
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
            var r = n("920040"),
                a = n("773670"),
                i = n("641900"),
                l = n("812204"),
                o = n("685665"),
                s = n("642906"),
                u = n("85336"),
                d = n("385179"),
                c = n("292215"),
                f = n("158184"),
                p = n("337978"),
                C = n("49111"),
                h = n("809924"),
                E = n("149144");
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
                    skuId: v,
                    analyticsLocations: g,
                    returnRef: _
                } = e, {
                    analyticsLocations: I,
                    AnalyticsLocationProvider: T
                } = (0, o.default)([...g, l.default.COLLECTIBLES_PAYMENT_MODAL]), O = a.useRef(new i.Environment), [y, b] = a.useState(null), A = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: y,
                        analyticsLocations: I
                    }),
                    options: {
                        bodyClassName: E.modalOverrideBody,
                        sliderBodyClassName: E.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(T, {
                    children: [(0, r.jsx)(i.ConfettiCanvas, {
                        ref: b,
                        className: E.confettiCanvas,
                        environment: O.current
                    }), (0, r.jsx)(s.PaymentContextProvider, {
                        stepConfigs: A,
                        applicationId: C.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [v],
                        activeSubscription: null,
                        purchaseType: h.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: S,
                            applicationId: C.COLLECTIBLES_APPLICATION_ID,
                            skuId: v,
                            initialPlanId: null,
                            analyticsLocations: I,
                            transitionState: p,
                            renderHeader: m,
                            returnRef: _,
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
            var r = n("920040");
            n("773670");
            var a = n("161179"),
                i = n.n(a),
                l = n("744196"),
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
                } = (0, l.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(p),
                    category: o.default.getCategoryForProduct(p)
                }));
                i(null != p, "Expected selectedSkuId"), i(null != C, "Expected application");
                let m = f[p];
                return (i(null != m, "Expected sku"), null == E || null == h) ? null : (0, r.jsxs)(d.PaymentPortalBody, {
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
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("834897"),
                l = n("85336"),
                o = n("425480"),
                s = n("955211"),
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
            var r = n("920040");
            n("773670");
            var a = n("161179"),
                i = n.n(a),
                l = n("77078"),
                o = n("642906"),
                s = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("659854");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: a,
                    application: f
                } = (0, o.usePaymentContext)();
                i(null != a, "Expected selectedSkuId"), i(null != f, "Expected application");
                let p = n[a];
                i(null != p, "Expected sku");
                let C = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
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
                            children: C
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
            var r = n("920040");
            n("773670");
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
                p = {
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
                C = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                h = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(o.default, {})
                },
                E = {
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
                S = [C, h]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return u
                }
            });
            var r = n("920040"),
                a = n("773670"),
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
                    application: p
                } = (0, l.usePaymentContext)(), [C, h] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != p;
                    d && f && e && h(!1)
                }, [d, f, p]), a.useEffect(() => {
                    !C && !u && (0 === Object.keys(c).length ? t(o.Step.ADD_PAYMENT_STEPS) : t(o.Step.REVIEW))
                }, [C, u, t, c]), C) ? (0, r.jsx)(s.default, {}) : u ? (0, r.jsx)(i.BlockedPaymentsContentModal, {
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
            var r, a, i = n("161179"),
                l = n.n(i),
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
                            r = () => n.el("729943").then(n.t.bind(n, "729943", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            r = () => n.el("5754").then(n.t.bind(n, "5754", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            r = () => n.el("132631").then(n.t.bind(n, "132631", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("376058").then(n.t.bind(n, "376058", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("588315").then(n.t.bind(n, "588315", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("31805").then(n.t.bind(n, "31805", 19)).then(e => {
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
                                    r = () => n.el("298104").then(n.t.bind(n, "298104", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("482376").then(n.t.bind(n, "482376", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("278985").then(n.t.bind(n, "278985", 19)).then(e => {
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
                                    r = () => n.el("748733").then(n.t.bind(n, "748733", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("294698").then(n.t.bind(n, "294698", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("726130").then(n.t.bind(n, "726130", 19)).then(e => {
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
                                    r = () => n.el("179448").then(n.t.bind(n, "179448", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("772933").then(n.t.bind(n, "772933", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("461087").then(n.t.bind(n, "461087", 19)).then(e => {
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
            var r = n("773670"),
                a = n("377849"),
                i = n.n(a),
                l = n("638800"),
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
            var r = n("920040"),
                a = n("773670"),
                i = n("498225"),
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
                } = e, p = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [C, h] = a.useState(c), E = a.useRef((0, s.getGiftAnimationData)(t, C)), [m, S] = a.useState(null == f), [v, g] = a.useState(!1), [_, I] = a.useState(-1), T = () => {
                    E.current = (0, s.getGiftAnimationData)(t, C), I(e => e + 1)
                }, O = () => {
                    S(!1), g(!0), I(-1), h(c)
                };
                a.useEffect(() => {
                    null == f && h(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && _ >= 0) {
                        O();
                        return
                    }
                    T()
                }, [t, f]), a.useEffect(() => {
                    (!v || null == f) && T()
                }, [C]), a.useEffect(() => {
                    v && (S(null == f), g(!1), T())
                }, [v]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(o.default, {
                    importData: E.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: _,
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
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                o = n("859498"),
                s = n("309501"),
                u = n("399510"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: i = !1,
                        isPurchased: c
                    } = e, f = i ? 250 : .1, [p, C] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== i) C(!1);
                        else {
                            let e = setTimeout(() => {
                                C(!1)
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
                        }), !p && (0, r.jsx)("div", {
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
                    return I
                },
                openThreadSidebarForCreating: function() {
                    return T
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return y
                }
            });
            var r = n("161179"),
                a = n.n(r),
                i = n("427964"),
                l = n.n(i),
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
                v = n("648564"),
                g = n("49111"),
                _ = n("724210");

            function I(e, t, n) {
                u.MainWindowDispatch.dispatch(g.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !C.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let i = E.default.getChannelId();
                e.parent_id !== i && !(0, _.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(g.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, _.isGuildHomeChannel)(i) ? _.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? v.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    S.ComponentDispatch.dispatch(g.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function T(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(g.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(g.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
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
                (0, f.transitionTo)(g.Routes.CHANNEL(e, (0, _.isGuildHomeChannel)(t) ? _.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function y(e) {
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
        391845: function(e, t, n) {
            "use strict";

            function r() {
                let e = Promise.resolve(null);
                return t => new Promise((n, r) => {
                    e = e.then(t).then(n, r)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return r
                }
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
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
            var r = n("920040");
            n("773670");
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
            var r = n("920040");
            n("773670");
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