(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71392"], {
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: l
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
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("974889"),
                u = n("954016"),
                l = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: s,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = u.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: E
                } = e;
                d && (0, i.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let h = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                return (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: s,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: u.ACTIVITY_SHELF_WEB_MODAL_KEY,
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
                    richValue: u(e)
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
                    return u
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function u(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function l(e) {
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
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return i
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return l
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return s
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var r = n("516555"),
                a = n("839491");
            let i = a,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                l = [n("890450"), i, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                o = 28,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: o
                    }
                },
                d = new r.Environment
        },
        750482: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                MonetizationListingImageAspectStable: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("617258"),
                i = n("769846"),
                u = n("801765"),
                l = n("955735");
            let o = (0, a.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function s(e) {
                let {
                    listing: t,
                    imageSize: n,
                    alt: a,
                    ...i
                } = e, l = (0, u.useListingThumbnailUrl)(t, n);
                return (0, r.jsx)("img", {
                    src: l,
                    alt: a,
                    ...i
                })
            }

            function d(e) {
                let {
                    listing: t,
                    aspectRatio: n = 16 / 9,
                    height: a,
                    ...i
                } = e, s = (a - 2 * o) * n, d = (0, u.useListingThumbnailUrl)(t, s), c = (0, u.useListingThumbnailUrl)(t, s, {
                    shouldAnimate: !1
                });
                return (0, r.jsx)(l.default, {
                    src: d,
                    backgroundSrc: c,
                    aspectRatio: n,
                    ...i
                })
            }
        },
        891328: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                u = n("77078"),
                l = n("750482"),
                o = n("945330"),
                s = n("516864");

            function d(e) {
                let {
                    className: t,
                    onClose: n
                } = e;
                return (0, r.jsx)(u.Clickable, {
                    className: i(s.closeButtonContainer, t),
                    onClick: n,
                    children: (0, r.jsx)(o.default, {
                        width: 16,
                        height: 16,
                        className: s.closeButtonIcon
                    })
                })
            }

            function c(e) {
                let {
                    guildProductListing: t,
                    onClose: n,
                    className: a
                } = e;
                return (0, r.jsxs)(u.ModalHeader, {
                    className: i(s.header, a),
                    separator: !1,
                    children: [(0, r.jsx)(l.default, {
                        className: s.headerImage,
                        listing: t,
                        imageSize: 500,
                        alt: ""
                    }), (0, r.jsx)(d, {
                        className: s.closeButton,
                        onClose: n
                    })]
                })
            }
        },
        134666: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildProductPurchaseConfirmationModal: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078");

            function i(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("392977").then(n.bind(n, "392977"));
                    return n => (0, r.jsx)(t, {
                        ...e,
                        ...n
                    })
                })
            }
        },
        671183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("627445"),
                i = n.n(a),
                u = n("642906"),
                l = n("134666"),
                o = n("273093");

            function s(e) {
                let {
                    handleClose: t
                } = e, {
                    guildProductListing: n,
                    guildId: a
                } = (0, o.useGuildProductPurchaseContext)(), {
                    selectedSkuPricePreview: s
                } = (0, u.usePaymentContext)();
                return r.useEffect(() => {
                    i(null != s, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
                        guildId: a,
                        guildProductListingId: n.id,
                        skuPricePreview: s
                    }), t()
                }, []), null
            }
        },
        273093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildProductPurchaseContext: function() {
                    return d
                },
                GuildProductPurchaseContextProvider: function() {
                    return c
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("627445"),
                u = n.n(i),
                l = n("446674"),
                o = n("565559");
            let s = a.createContext(void 0);

            function d() {
                let e = a.useContext(s);
                return u(null != e, "GuildProductPurchaseContext not found"), e
            }

            function c(e) {
                let {
                    children: t,
                    guildProductListingId: n,
                    ...a
                } = e, i = (0, l.useStateFromStores)([o.default], () => o.default.getGuildProduct(n));
                return u(null != i, "guildProductListing cannot be null"), (0, r.jsx)(s.Provider, {
                    value: {
                        guildProductListing: i,
                        ...a
                    },
                    children: t
                })
            }
        },
        880531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderGuildProductPurchaseHeader: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("85336"),
                i = n("891328"),
                u = n("273093"),
                l = n("780022");

            function o(e) {
                let {
                    onClose: t
                } = e, {
                    guildProductListing: n
                } = (0, u.useGuildProductPurchaseContext)();
                return (0, r.jsx)(i.default, {
                    guildProductListing: n,
                    className: l.header,
                    onClose: t
                })
            }
            let s = (e, t, n) => n === a.Step.CONFIRM ? null : (0, r.jsx)(o, {
                onClose: () => t(!1)
            })
        },
        191131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("812204"),
                i = n("685665"),
                u = n("635357"),
                l = n("642906"),
                o = n("85336"),
                s = n("385179"),
                d = n("262683"),
                c = n("946359"),
                f = n("724269"),
                p = n("99836"),
                E = n("217796"),
                h = n("357957"),
                I = n("671183"),
                T = n("273093"),
                C = n("880531"),
                A = n("843455");
            let m = [{
                key: null,
                renderStep: e => (0, r.jsx)(E.OneTimePaymentPredicateStep, {
                    ...e
                })
            }, {
                key: o.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(d.PaymentModalAddPaymentStep, {
                    ...e,
                    onReturn: () => {
                        let t = h.default.paymentSources;
                        0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(o.Step.REVIEW, {
                            trackedFromStep: o.Step.ADD_PAYMENT_STEPS
                        })
                    }
                })
            }, {
                key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(f.default, {})
            }, {
                key: o.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(c.default, {})
            }, {
                key: o.Step.REVIEW,
                renderStep: e => (0, r.jsx)(p.PaymentModalReviewStep, {
                    ...e
                })
            }, {
                key: o.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(I.default, {
                    ...e
                })
            }];

            function S(e) {
                let {
                    guildProductContext: t,
                    sourceAnalyticsLocations: n,
                    applicationId: o,
                    ...d
                } = e, {
                    AnalyticsLocationProvider: c,
                    analyticsLocations: f
                } = (0, i.default)(n, a.default.GUILD_PRODUCT_PAYMENT_MODAL);
                return (0, r.jsx)(T.GuildProductPurchaseContextProvider, {
                    ...t,
                    children: (0, r.jsx)(c, {
                        children: (0, r.jsx)(l.PaymentContextProvider, {
                            stepConfigs: m,
                            applicationId: o,
                            skuIDs: [d.skuId],
                            activeSubscription: null,
                            purchaseType: A.PurchaseTypes.ONE_TIME,
                            children: (0, r.jsx)(u.GiftContextProvider, {
                                children: (0, r.jsx)(s.PaymentModal, {
                                    initialPlanId: null,
                                    analyticsLocations: f,
                                    renderHeader: C.renderGuildProductPurchaseHeader,
                                    ...d
                                })
                            })
                        })
                    })
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var r = n("913144"),
                a = n("599110"),
                i = n("49111");

            function u(e) {
                a.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
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
            }), n("222007");
            var r = n("446674"),
                a = n("913144"),
                i = n("197881"),
                u = n("492397");
            let l = new Set,
                o = {};
            class s extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(u.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
                        hotspotOverrides: o
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new s(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    l = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (l.has(t)) return !1;
                    l.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
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
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return u
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var r = n("872717"),
                a = n("913144"),
                i = n("49111");

            function u(e, t, n, r) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: i,
                    onSuccess: u,
                    onFailure: l
                } = t;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: u,
                    onFailure: l
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await r.default.get({
                    url: i.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    a.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: r
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let r, a;
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("446674"),
                u = n("913144"),
                l = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                f = {};

            function p(e) {
                delete d[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class E extends i.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let r = f[t];
                        null != r && (e[r] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return r
                }
            }
            E.displayName = "InteractionStore";
            var h = new E(u.default, {
                LOGOUT: function() {
                    d = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: r,
                        onCreate: a,
                        onCancel: i,
                        onSuccess: u,
                        onFailure: l
                    } = e;
                    null != n && (c[n] = t, f[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: r,
                        onCreate: a,
                        onCancel: i,
                        onSuccess: u,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: r
                    } = e;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a || a.state !== s.InteractionState.QUEUED) return !1;
                    a.state = s.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let r = d[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), p(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onFailure) || void 0 === t || t.call(i, r, a), i.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? p(n) : d[n] = {
                        ...i,
                        state: s.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), p(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && p(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    a = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    r = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    r = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return r
                }
            }), (a = r || (r = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return T
                },
                executeMessageComponentInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return m
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return S
                },
                canRetryInteractionData: function() {
                    return _
                }
            }), n("222007");
            var r, a, i = n("249654"),
                u = n("872717"),
                l = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                E = n("3765"),
                h = n("606981"),
                I = n("49111");

            function T(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : i.default.extractTimestamp(e) + 9e5
            }
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: a,
                    indices: l,
                    applicationId: o,
                    channelId: E,
                    guildId: h,
                    localState: T
                } = e, C = i.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, C)) return;
                await d.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: l
                    },
                    onFailure: (e, t) => A(E, e, t)
                }), null != T && (0, f.queueInteractionComponentState)(n, C, T, l);
                let S = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: h,
                    channel_id: E,
                    message_flags: r,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(T)
                    }
                };
                await u.default.post({
                    url: I.Endpoints.INTERACTIONS,
                    body: S,
                    timeout: 3e3
                }, e => {
                    m(C, E, h, e)
                })
            }, A = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, m = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var a;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === I.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let a = (0, h.getFirstSkemaError)(r.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (a = r.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (a = r || (r = {}))[a.SENDING = 0] = "SENDING", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED", a[a.TIMED_OUT = 3] = "TIMED_OUT";
            let S = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    a = e.state === I.MessageStates.SENT && T(e.id) < Date.now();
                let u = e.state === I.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : i.default.extractTimestamp(n) + 3e3) < Date.now(),
                    l = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    o = e.isCommandType();
                if (l && r === E.InteractionState.QUEUED || o && e.state === I.MessageStates.SENDING && null != t) return 0;
                if (l && r === E.InteractionState.CREATED || e.hasFlag(I.MessageFlags.LOADING) && !a) return 1;
                if (null != e.interaction && e.hasFlag(I.MessageFlags.LOADING) && a) return 3;
                else if (null != e.interaction && !e.hasFlag(I.MessageFlags.LOADING) && u) return 3;
                else if (o && e.state === I.MessageStates.SEND_FAILED) return 2
            };

            function _(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return a
                }
            }), n("222007");
            let r = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[r];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, i] of Object.entries(t))
                        if (a !== r && null != i && "object" == typeof i) return e(i, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                i = n("627445"),
                u = n.n(i),
                l = n("245187"),
                o = n("635357"),
                s = n("642906"),
                d = n("85336"),
                c = n("628738"),
                f = n("49111");

            function p(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: i,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: h,
                    application: I,
                    skusById: T,
                    selectedSkuId: C
                } = (0, s.usePaymentContext)(), {
                    isGift: A
                } = (0, o.useGiftContext)(), [m, S] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != I;
                    p && h && e && S(!1)
                }, [p, h, I]), a.useEffect(() => {
                    if (m || i) return;
                    u(null != C, "Expected selectedSkuId");
                    let e = T[C];
                    if (A && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [m, i, t, E, A, T, C]), m) ? (0, r.jsx)(c.default, {}) : i ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
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
            }), n("222007"), n("70102");
            var r = n("37983"),
                a = n("884691"),
                i = n("446674"),
                u = n("206230"),
                l = n("491605"),
                o = n("210721"),
                s = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), [E, h] = a.useState(c), I = a.useRef((0, o.getGiftAnimationData)(t, E)), [T, C] = a.useState(null == f), [A, m] = a.useState(!1), [S, _] = a.useState(-1), v = () => {
                    I.current = (0, o.getGiftAnimationData)(t, E), _(e => e + 1)
                }, N = () => {
                    C(!1), m(!0), _(-1), h(c)
                };
                a.useEffect(() => {
                    null == f && h(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && S >= 0) {
                        N();
                        return
                    }
                    v()
                }, [t, f]), a.useEffect(() => {
                    (!A || null == f) && v()
                }, [E]), a.useEffect(() => {
                    A && (C(null == f), m(!1), v())
                }, [A]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(l.default, {
                    importData: I.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: S,
                    onComplete: null != f ? () => {
                        null != f && (h(f), C(!0))
                    } : void 0,
                    loop: T
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return _
                },
                openThreadSidebarForCreating: function() {
                    return v
                },
                closeThreadSidebar: function() {
                    return N
                },
                closeAndClearThreadSidebar: function() {
                    return O
                }
            });
            var r = n("627445"),
                a = n.n(r),
                i = n("917351"),
                u = n.n(i),
                l = n("913144"),
                o = n("295426"),
                s = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                E = n("845579"),
                h = n("474643"),
                I = n("18494"),
                T = n("800762"),
                C = n("659500"),
                A = n("648564"),
                m = n("49111"),
                S = n("724210");

            function _(e, t, n) {
                s.MainWindowDispatch.dispatch(m.ComponentActions.POPOUT_CLOSE);
                let r = !u.isEmpty(T.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let i = I.default.getChannelId();
                e.parent_id !== i && !(0, S.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(m.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, S.isGuildHomeChannel)(i) ? S.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? A.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    C.ComponentDispatch.dispatch(m.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function v(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(m.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), s.MainWindowDispatch.dispatch(m.ComponentActions.POPOUT_CLOSE), I.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let r = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = h.default.getDraft(e.id, h.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", h.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, h.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function N(e, t) {
                (0, f.transitionTo)(m.Routes.CHANNEL(e, (0, S.isGuildHomeChannel)(t) ? S.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: h.DraftType.FirstThreadMessage
                }), l.default.dispatch({
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("926001"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
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
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("509317"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("578478"),
                u = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
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
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return l
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return s
                }
            });
            var r = n("228256");
            let {
                Layer: a,
                LayerContainer: i,
                LayerProvider: u
            } = (0, r.createLayer)("Chat"), l = i, o = u;
            var s = a
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return C
                },
                default: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                u = n.n(i),
                l = n("627445"),
                o = n.n(l),
                s = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                h = n("523096"),
                I = n("587974"),
                T = n("494101");
            let C = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function A(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class m extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: i
                    } = this.props, u = [], l = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(l), s = 0;
                    for (; s < l && s < e.length;) {
                        var d;
                        let t = null == o && null == i && s === e.length - 1,
                            l = n(e[s], t, s);
                        u.push(t ? (0, r.jsx)("div", {
                            className: T.avatarContainer,
                            children: l
                        }, A(null !== (d = e[s]) && void 0 !== d ? d : null, s)) : (0, r.jsx)(I.default, {
                            className: T.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, A(e[s], s))), s++
                    }
                    return null != i ? u.push(i) : null != o && u.push(o), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: u,
                        users: l
                    } = this.props, o = Math.min(e, l.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(a.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > l.length) {
                                let e = n - l.length;
                                return (0, r.jsx)(a.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < l.length) {
                            let e = Math.min(l.length - o, 99);
                            return (0, r.jsx)(a.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(E.default, {
                        foreground: T.foreground,
                        className: T.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: i,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), h = l && null == p.default.getUser(f);
                    return (0, r.jsx)(s.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === i && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: h && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: u(e, T.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.SIZE_24;
                                switch (e) {
                                    case C.SIZE_16:
                                        return T.size16;
                                    case C.SIZE_24:
                                        return T.size24;
                                    case C.SIZE_32:
                                        return T.size32;
                                    case C.SIZE_56:
                                        return T.size56;
                                    default:
                                        return T.size24
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
                            guildId: i,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: T.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                                    t = h.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: T.avatar
                                })
                            }
                        }
                        let l = (0, r.jsx)("img", {
                            src: e.getAvatarURL(i, u),
                            alt: e.username,
                            className: T.avatar
                        }, e.id);
                        return a ? (0, r.jsx)(s.Clickable, {
                            className: T.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: l
                        }, e.id) : l
                    }
                }
            }
            m.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: T.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: C.SIZE_24
            };
            var S = m
        }
    }
]);