(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84791"], {
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
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("516555"),
                l = n("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: s,
                        colors: i
                    } = e, [u, d] = a.useState(null), c = (0, o.useConfettiCannon)(n, u), [f, C] = a.useState(!1);
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
                    }, [c, t, f]), (0, r.jsx)(o.SpriteCanvas, {
                        ref: d,
                        sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
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
                o = n.n(a),
                l = n("65597"),
                s = n("854588"),
                i = n("206230"),
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
                    } = e, p = (0, l.default)([i.default], () => i.default.saturation);
                    return (0, r.jsx)("div", {
                        className: o(f.banner, a),
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
                            let r = (0, u.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - p);
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
                    return D
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                s = n("516555"),
                i = n("627445"),
                u = n.n(i),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                C = n("206230"),
                E = n("812204"),
                p = n("685665"),
                h = n("606292"),
                S = n("688318"),
                m = n("38766"),
                O = n("601095"),
                g = n("493390"),
                v = n("697218"),
                b = n("730297"),
                I = n("806410"),
                _ = n("923702"),
                T = n("716120"),
                y = n("408381"),
                A = n("57940"),
                x = n("782340"),
                L = n("99242"),
                N = n("53708");
            let P = e => {
                var t, n;
                let {
                    product: o,
                    onClose: l,
                    confettiTarget: s,
                    confettiCanvas: i,
                    category: P,
                    analyticsLocations: D
                } = e, {
                    confettiColors: F,
                    confettiSprites: M,
                    backgroundColors: R,
                    buttonColors: k
                } = (0, A.default)(P), B = (0, d.default)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), H = (0, d.default)([C.default], () => C.default.useReducedMotion), j = null !== (t = o.items.find(b.isAvatarDecorationRecord)) && void 0 !== t ? t : null, w = null !== (n = o.items.find(I.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: G
                } = (0, S.default)({
                    user: B,
                    avatarDecorationOverride: j,
                    size: (0, h.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), U = a.useRef(null), {
                    analyticsLocations: z,
                    AnalyticsLocationProvider: V
                } = (0, p.default)([...D, E.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, m.default)({
                    analyticsLocations: z
                });
                return null == j && null == w ? null : (0, r.jsxs)(V, {
                    children: [(0, r.jsxs)("div", {
                        className: L.modalInner,
                        ref: U,
                        style: null != R ? {
                            background: (0, y.getBackgroundGradient)(R)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: L.bannerContainer,
                            children: [(0, r.jsx)(T.default, {
                                asset: P.banner,
                                size: 440,
                                className: L.decorationBanner
                            }), null != j && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: N,
                                avatarDecoration: G,
                                className: L.avatarDecoration,
                                "aria-label": o.name
                            }), null != w && (0, r.jsx)("div", {
                                className: L.profileEffectShopPreview,
                                children: (0, r.jsx)(O.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == w ? void 0 : w.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: L.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: L.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: o.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != w ? x.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    if (l(), (0, f.popLayer)(), Y(), null != j)(0, h.openAvatarDecorationModal)({
                                        initialSelectedDecoration: o.items.find(b.isAvatarDecorationRecord),
                                        analyticsLocations: z
                                    });
                                    else if (null != w)(0, g.openProfileEffectModal)({
                                        analyticsLocations: z,
                                        initialSelectedEffectID: null == w ? void 0 : w.id
                                    })
                                },
                                style: null != k ? {
                                    background: (0, y.getBackgroundGradient)(k, 90)
                                } : void 0,
                                children: x.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: L.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !H && (0, r.jsx)(_.default, {
                        confettiTarget: null != s ? s : U.current,
                        confettiCanvas: i,
                        sprites: M,
                        colors: F
                    })]
                })
            };
            var D = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: o,
                    onClose: i,
                    analyticsLocations: u
                } = e, d = a.useRef(new s.Environment), [f, C] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ConfettiCanvas, {
                        ref: C,
                        className: L.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: l(L.modalInner, L.modalContentOverrides),
                            children: (0, r.jsx)(P, {
                                product: n,
                                category: o,
                                onClose: i,
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
                    return o
                }
            });
            let r = 1060,
                a = e => 3.8 * e,
                o = function(e) {
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
                    return m
                }
            });
            var r = n("656280"),
                a = n.n(r),
                o = n("635058"),
                l = n("65597"),
                s = n("669491"),
                i = n("206230"),
                u = n("388491"),
                d = n("172858");
            let c = a(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = a(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                C = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [o, l, s] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: o,
                        g: l,
                        b: s
                    })
                },
                E = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        o = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: o.setAlpha(.4)
                    }
                },
                p = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        o = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(o.isLight() ? f : c)
                    }
                },
                h = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l: o
                    } = e.toHsl();
                    return a({
                        h: n,
                        s: r * t,
                        l: o
                    })
                },
                S = {
                    [o.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: p("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [o.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: p("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [o.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: p("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [o.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: p(s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [o.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: p("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [o.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: p("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var m = e => {
                let t = (0, l.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let n = S[e.skuId];
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
                    return s
                },
                clearHotspotOverride: function() {
                    return i
                }
            });
            var r = n("913144"),
                a = n("599110"),
                o = n("49111");

            function l(e) {
                a.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function i(e) {
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
                o = n("197881"),
                l = n("492397");
            let s = new Set,
                i = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (i = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && i[e];
                    return !(l.CONFERENCE_MODE_ENABLED || o.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return i[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: i
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
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    i[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var a = n("597517");
            n.es(a, t);
            var o = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("516555"),
                l = n("812204"),
                s = n("685665"),
                i = n("642906"),
                u = n("85336"),
                d = n("385179"),
                c = n("292215"),
                f = n("158184"),
                C = n("337978"),
                E = n("49111"),
                p = n("843455"),
                h = n("322859");
            let S = (e, t, n) => (0, r.jsx)(C.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function m(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: C,
                    loadId: m,
                    skuId: O,
                    analyticsLocations: g,
                    returnRef: v
                } = e, {
                    analyticsLocations: b,
                    AnalyticsLocationProvider: I
                } = (0, s.default)([...g, l.default.COLLECTIBLES_PAYMENT_MODAL]), _ = a.useRef(new o.Environment), [T, y] = a.useState(null), A = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: T,
                        analyticsLocations: b
                    }),
                    options: {
                        bodyClassName: h.modalOverrideBody,
                        sliderBodyClassName: h.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(I, {
                    children: [(0, r.jsx)(o.ConfettiCanvas, {
                        ref: y,
                        className: h.confettiCanvas,
                        environment: _.current
                    }), (0, r.jsx)(i.PaymentContextProvider, {
                        stepConfigs: A,
                        applicationId: E.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [O],
                        activeSubscription: null,
                        purchaseType: p.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: m,
                            applicationId: E.COLLECTIBLES_APPLICATION_ID,
                            skuId: O,
                            initialPlanId: null,
                            analyticsLocations: b,
                            transitionState: C,
                            renderHeader: S,
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
                o = n.n(a),
                l = n("65597"),
                s = n("853987"),
                i = n("658756"),
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
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    product: s.default.getProduct(C),
                    category: s.default.getCategoryForProduct(C)
                }));
                o(null != C, "Expected selectedSkuId"), o(null != E, "Expected application");
                let S = f[C];
                return (o(null != S, "Expected sku"), null == h || null == p) ? null : (0, r.jsxs)(d.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsx)(i.CollectiblesCollectedModalInner, {
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
                o = n("834897"),
                l = n("85336"),
                s = n("425480"),
                i = n("504898"),
                u = n("551290");
            let d = e => {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, o.default)(s.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === l.Step.CONFIRM || t === l.Step.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: i.headerContainer,
                    children: [!d && (0, r.jsx)("div", {
                        className: i.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i.headerImage
                        })
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: i.closeButton,
                        onClick: n
                    })]
                })
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
            var r, a, o = n("627445"),
                l = n.n(o),
                s = n("450911"),
                i = n("819689"),
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
                    let n = await s.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (l(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, c.getGiftCodeURL)(t);
                    return i.default.sendMessage(n.id, u.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
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
                o = n("446674"),
                l = n("206230"),
                s = n("491605"),
                i = n("210721"),
                u = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, C = (0, o.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, p] = a.useState(c), h = a.useRef((0, i.getGiftAnimationData)(t, E)), [S, m] = a.useState(null == f), [O, g] = a.useState(!1), [v, b] = a.useState(-1), I = () => {
                    h.current = (0, i.getGiftAnimationData)(t, E), b(e => e + 1)
                }, _ = () => {
                    m(!1), g(!0), b(-1), p(c)
                };
                a.useEffect(() => {
                    null == f && p(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && v >= 0) {
                        _();
                        return
                    }
                    I()
                }, [t, f]), a.useEffect(() => {
                    (!O || null == f) && I()
                }, [E]), a.useEffect(() => {
                    O && (m(null == f), g(!1), I())
                }, [O]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(s.default, {
                    importData: h.current,
                    shouldAnimate: !C && d,
                    className: n,
                    versionKey: v,
                    onComplete: null != f ? () => {
                        null != f && (p(f), m(!0))
                    } : void 0,
                    loop: S
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
                o = n("414456"),
                l = n.n(o),
                s = n("859498"),
                i = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: o = !1,
                        isPurchased: c
                    } = e, f = o ? 250 : .1, [C, E] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== o) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, o]), null != t) ? (0, r.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: o
                        }),
                        children: [(0, r.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: o ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !C && (0, r.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: o,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);