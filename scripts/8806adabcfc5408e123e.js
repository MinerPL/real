(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84166"], {
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
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(e, t) {
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
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return u
                },
                COMMON_CONFETTI_COLORS: function() {
                    return a
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
                i = n("839491");
            let u = i,
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                l = [n("890450"), u, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
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
            var i = n("617258"),
                u = n("769846"),
                a = n("801765"),
                l = n("955735");
            let o = (0, i.cssValueToNumber)(u.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function s(e) {
                let {
                    listing: t,
                    imageSize: n,
                    alt: i,
                    ...u
                } = e, l = (0, a.useListingThumbnailUrl)(t, n);
                return (0, r.jsx)("img", {
                    src: l,
                    alt: i,
                    ...u
                })
            }

            function d(e) {
                let {
                    listing: t,
                    aspectRatio: n = 16 / 9,
                    height: i,
                    ...u
                } = e, s = (i - 2 * o) * n, d = (0, a.useListingThumbnailUrl)(t, s), c = (0, a.useListingThumbnailUrl)(t, s, {
                    shouldAnimate: !1
                });
                return (0, r.jsx)(l.default, {
                    src: d,
                    backgroundSrc: c,
                    aspectRatio: n,
                    ...u
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
            var i = n("414456"),
                u = n.n(i),
                a = n("77078"),
                l = n("750482"),
                o = n("945330"),
                s = n("516864");

            function d(e) {
                let {
                    className: t,
                    onClose: n
                } = e;
                return (0, r.jsx)(a.Clickable, {
                    className: u(s.closeButtonContainer, t),
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
                    className: i
                } = e;
                return (0, r.jsxs)(a.ModalHeader, {
                    className: u(s.header, i),
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
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078");

            function u(e) {
                (0, i.openModalLazy)(async () => {
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
                i = n("627445"),
                u = n.n(i),
                a = n("642906"),
                l = n("134666"),
                o = n("273093");

            function s(e) {
                let {
                    handleClose: t
                } = e, {
                    guildProductListing: n,
                    guildId: i
                } = (0, o.useGuildProductPurchaseContext)(), {
                    selectedSkuPricePreview: s
                } = (0, a.usePaymentContext)();
                return r.useEffect(() => {
                    u(null != s, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
                        guildId: i,
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
                i = n("884691"),
                u = n("627445"),
                a = n.n(u),
                l = n("446674"),
                o = n("565559");
            let s = i.createContext(void 0);

            function d() {
                let e = i.useContext(s);
                return a(null != e, "GuildProductPurchaseContext not found"), e
            }

            function c(e) {
                let {
                    children: t,
                    guildProductListingId: n,
                    ...i
                } = e, u = (0, l.useStateFromStores)([o.default], () => o.default.getGuildProduct(n));
                return a(null != u, "guildProductListing cannot be null"), (0, r.jsx)(s.Provider, {
                    value: {
                        guildProductListing: u,
                        ...i
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
            var i = n("85336"),
                u = n("891328"),
                a = n("273093"),
                l = n("780022");

            function o(e) {
                let {
                    onClose: t
                } = e, {
                    guildProductListing: n
                } = (0, a.useGuildProductPurchaseContext)();
                return (0, r.jsx)(u.default, {
                    guildProductListing: n,
                    className: l.header,
                    onClose: t
                })
            }
            let s = (e, t, n) => n === i.Step.CONFIRM ? null : (0, r.jsx)(o, {
                onClose: () => t(!1)
            })
        },
        191131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                u = n("685665"),
                a = n("642906"),
                l = n("85336"),
                o = n("385179"),
                s = n("262683"),
                d = n("946359"),
                c = n("724269"),
                f = n("99836"),
                E = n("217796"),
                m = n("357957"),
                T = n("671183"),
                p = n("273093"),
                I = n("880531"),
                S = n("843455");
            let _ = [{
                key: null,
                renderStep: e => (0, r.jsx)(E.OneTimePaymentPredicateStep, {
                    ...e
                })
            }, {
                key: l.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(s.PaymentModalAddPaymentStep, {
                    ...e,
                    onReturn: () => {
                        let t = m.default.paymentSources;
                        0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                            trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                        })
                    }
                })
            }, {
                key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(c.default, {})
            }, {
                key: l.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(d.default, {})
            }, {
                key: l.Step.REVIEW,
                renderStep: e => (0, r.jsx)(f.PaymentModalReviewStep, {
                    ...e
                })
            }, {
                key: l.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(T.default, {
                    ...e
                })
            }];

            function C(e) {
                let {
                    guildProductContext: t,
                    sourceAnalyticsLocations: n,
                    applicationId: l,
                    ...s
                } = e, {
                    AnalyticsLocationProvider: d,
                    analyticsLocations: c
                } = (0, u.default)(n, i.default.GUILD_PRODUCT_PAYMENT_MODAL);
                return (0, r.jsx)(p.GuildProductPurchaseContextProvider, {
                    ...t,
                    children: (0, r.jsx)(d, {
                        children: (0, r.jsx)(a.PaymentContextProvider, {
                            stepConfigs: _,
                            applicationId: l,
                            skuIDs: [s.skuId],
                            activeSubscription: null,
                            purchaseType: S.PurchaseTypes.ONE_TIME,
                            children: (0, r.jsx)(o.PaymentModal, {
                                initialPlanId: null,
                                analyticsLocations: c,
                                renderHeader: I.renderGuildProductPurchaseHeader,
                                ...s
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
                    return a
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var r = n("913144"),
                i = n("599110"),
                u = n("49111");

            function a(e) {
                i.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
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
            });
            var r = n("446674"),
                i = n("913144"),
                u = n("197881"),
                a = n("492397");
            let l = new Set,
                o = {};
            class s extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(a.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (n || !l.has(e))
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
            var d = new s(i.default, {
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
                    return u.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var i = n("597517");
            n.es(i, t);
            var u = n("269596")
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return a
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
                i = n("913144"),
                u = n("49111");

            function a(e, t, n, r) {
                i.default.dispatch({
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
                    onCreate: u,
                    onSuccess: a,
                    onFailure: l
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: u,
                    onSuccess: a,
                    onFailure: l
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await r.default.get({
                    url: u.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
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
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var u = n("446674"),
                a = n("913144"),
                l = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                f = {};

            function E(e) {
                delete d[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class m extends u.default.Store {
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
                    return i
                }
                getIFrameModalKey() {
                    return r
                }
            }
            m.displayName = "InteractionStore";
            var T = new m(a.default, {
                LOGOUT: function() {
                    d = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: r,
                        onCreate: i,
                        onCancel: u,
                        onSuccess: a,
                        onFailure: l
                    } = e;
                    null != n && (c[n] = t, f[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: u,
                        onSuccess: a,
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
                    let i = d[n];
                    if (null == i || i.state !== s.InteractionState.QUEUED) return !1;
                    i.state = s.InteractionState.CREATED, null === (t = i.onCreate) || void 0 === t || t.call(i, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let r = d[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), E(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: i
                    } = e;
                    if (null == n) return !1;
                    let u = d[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, r, i), u.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? E(n) : d[n] = {
                        ...u,
                        state: s.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: i
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
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), E(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && E(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    i = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    r = void 0, i = void 0
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
            var r, i;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.QUEUED = 0] = "QUEUED", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return I
                },
                executeMessageComponentInteraction: function() {
                    return S
                },
                handleInteractionResponse: function() {
                    return C
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return A
                },
                canRetryInteractionData: function() {
                    return P
                }
            });
            var r, i, u = n("249654"),
                a = n("872717"),
                l = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                E = n("809810"),
                m = n("3765"),
                T = n("606981"),
                p = n("49111");

            function I(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : u.default.extractTimestamp(e) + 9e5
            }
            let S = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: i,
                    indices: l,
                    applicationId: o,
                    channelId: m,
                    guildId: T,
                    localState: I
                } = e, S = u.default.fromTimestamp(Date.now());
                if (!E.default.canQueueInteraction(n, S)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(S, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: l
                    },
                    onFailure: (e, t) => _(m, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, S, I, l);
                let A = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: S,
                    guild_id: T,
                    channel_id: m,
                    message_flags: r,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: i,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(I)
                    }
                };
                await a.default.post({
                    url: p.Endpoints.INTERACTIONS,
                    body: A,
                    timeout: 3e3
                }, e => {
                    C(S, m, T, e)
                })
            }, _ = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, C = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === p.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, T.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let A = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    a = e.state === p.MessageStates.SENT && I(e.id) < Date.now();
                let l = e.state === p.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : u.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (o && r === m.InteractionState.QUEUED || d && e.state === p.MessageStates.SENDING && null != t) return i.SENDING;
                if (o && r === m.InteractionState.CREATED || e.hasFlag(p.MessageFlags.LOADING) && !a) return i.CREATED;
                if (null != e.interaction && e.hasFlag(p.MessageFlags.LOADING) && a) return i.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(p.MessageFlags.LOADING) && l) return i.TIMED_OUT;
                else if (d && e.state === p.MessageStates.SEND_FAILED) return i.FAILED
            };

            function P(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return i
                }
            });
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, u] of Object.entries(t))
                        if (i !== r && null != u && "object" == typeof u) return e(u, null != n ? n : i);
                    return null
                }(e, void 0)
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return E
                },
                sendGiftMessage: function() {
                    return m
                }
            });
            var r, i, u = n("627445"),
                a = n.n(u),
                l = n("450911"),
                o = n("819689"),
                s = n("884351"),
                d = n("42203"),
                c = n("659632"),
                f = n("78345");
            (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let E = (e, t) => {
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
                                case i.IDLE:
                                    r = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
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
                                case i.IDLE:
                                    r = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
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
                                case i.IDLE:
                                    r = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
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
                                case i.IDLE:
                                    r = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
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
                m = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await l.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (a(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, c.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return u
                },
                default: function() {
                    return T
                }
            });
            var r, i, u, a = n("446674"),
                l = n("913144"),
                o = n("521012"),
                s = n("565785"),
                d = n("646718");
            (r = u || (u = {})).FILE_UPLOAD = "file_upload", r.STICKER_PICKER = "sticker_picker", r.EMOJI_PICKER = "emoji_picker", r.BOOSTING_FLOW = "boosting_flow";
            let c = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function f() {
                c = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function E() {
                let e = new Date;
                e.setDate(e.getDate() + 14), c.tutorialExpirationTime = e.getTime()
            }
            class m extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e), c.isPersistentHelperHidden = !1, c.canPlayWowMoment = !1, c.isFetchingWowMomentMedia = !1, c.wowMomentWumpusMediaUrl = null, c.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return c
                }
                get isPersistentCoachmarkCollapsed() {
                    return c.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == c.hasFlowStartEventBeenEmitted[e] && (c.hasFlowStartEventBeenEmitted[e] = !1), c.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return c.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return c.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return c.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return c.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return c.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return c.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return c.tutorialExpirationTime
                }
            }
            m.displayName = "PremiumTutorialStore", m.persistKey = "PremiumTutorialStore", m.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (i = e.hasFlowStartEventBeenEmitted) && void 0 !== i ? i : {}
            })];
            var T = new m(l.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    c.isPersistentCoachmarkCollapsed = !c.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    c.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    f()
                },
                RESET_PREMIUM_TUTORIAL_STORE: f,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    c.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    c.wowMomentWumpusMediaUrl = t, c.wowMomentHelperMediaUrl = n, c.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    c.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && E()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == o.default.getPremiumSubscription(!1) && null == c.tutorialExpirationTime && E()
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var u = i
        },
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var u = i
        },
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return _
                },
                isPremiumTutorialEnabled: function() {
                    return P
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return h
                }
            });
            var r = n("884691"),
                i = n("446674"),
                u = n("151426"),
                a = n("850068"),
                l = n("10641"),
                o = n("374363"),
                s = n("697218"),
                d = n("521012"),
                c = n("719923"),
                f = n("324878"),
                E = n("824986"),
                m = n("694768"),
                T = n("565785"),
                p = n("646718");
            let I = () => {
                    let e = (0, i.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, l.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                S = () => {
                    let e = (0, f.useHasActiveTrial)(),
                        t = (0, l.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        o = (0, c.isPremiumExactly)(n, p.PremiumTypes.TIER_2),
                        E = (0, i.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        m = (0, i.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        T = !e && o;
                    r.useEffect(() => {
                        T && !E && !t && (0, a.fetchMostRecentSubscription)()
                    }, [T, E, t]);
                    let I = T && E && null == m;
                    return I && !t
                };

            function _(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = I() && n,
                    {
                        enabled: u
                    } = m.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    a = (0, i.useStateFromStores)([E.default], () => E.default.tutorialExpirationTime),
                    l = new Date().getTime(),
                    o = (0, i.useStateFromStores)([d.default], () => {
                        var e, n;
                        return null !== (t = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = S() && n,
                    c = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && l - o < 18e5,
                        disable: !s
                    }).enabled && null != a && a > l;
                return u || c
            }
            let C = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, l.isDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                A = () => {
                    let e = (0, f.hasActiveTrial)(),
                        t = (0, l.isDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        r = (0, c.isPremiumExactly)(n, p.PremiumTypes.TIER_2),
                        i = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        o = d.default.getPreviousPremiumTypeSubscription();
                    return !i && r && !t && (0, a.fetchMostRecentSubscription)(), !t && !e && r && i && null == o
                },
                P = function(e) {
                    var t, n, r;
                    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        u = C() && i,
                        {
                            enabled: a
                        } = m.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !u,
                            autoTrackExposure: u
                        }),
                        l = new Date().getTime(),
                        o = E.default.tutorialExpirationTime,
                        s = null !== (r = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== r ? r : 0,
                        c = A() && i,
                        f = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && l - s < 18e5
                        }).enabled && null != o && o > l;
                    return a || f
                },
                O = [];

            function M() {
                return p.PremiumTutorialStepOrder.filter(e => (0, l.isDismissibleContentDismissed)(e))
            }

            function h() {
                return function(e, t) {
                    let n = _("useMemoizedValueSyncedWithDismissibleContents"),
                        u = (0, i.useStateFromStores)([o.default], () => {
                            var e;
                            return null === (e = o.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return r.useMemo(() => n ? e() : t, [n, t, e, u])
                }(M, O)
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
                i = n("884691"),
                u = n("446674"),
                a = n("206230"),
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
                } = e, E = (0, u.useStateFromStores)([a.default], () => a.default.useReducedMotion), [m, T] = i.useState(c), p = i.useRef((0, o.getGiftAnimationData)(t, m)), [I, S] = i.useState(null == f), [_, C] = i.useState(!1), [A, P] = i.useState(-1), O = () => {
                    p.current = (0, o.getGiftAnimationData)(t, m), P(e => e + 1)
                }, M = () => {
                    S(!1), C(!0), P(-1), T(c)
                };
                i.useEffect(() => {
                    null == f && T(c)
                }, [f, c]), i.useEffect(() => {
                    if (null != f && A >= 0) {
                        M();
                        return
                    }
                    O()
                }, [t, f]), i.useEffect(() => {
                    (!_ || null == f) && O()
                }, [m]), i.useEffect(() => {
                    _ && (S(null == f), C(!1), O())
                }, [_]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(l.default, {
                    importData: p.current,
                    shouldAnimate: !E && d,
                    className: n,
                    versionKey: A,
                    onComplete: null != f ? () => {
                        null != f && (T(f), S(!0))
                    } : void 0,
                    loop: I
                })
            }
        }
    }
]);