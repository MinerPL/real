(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14811"], {
        668542: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                a = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + a + "]*[" + r + "]"),
                l = RegExp("^[^" + r + "]*[" + a + "]")
        },
        212653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return c
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                u = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t) => {
                    for (var n in t || (t = {})) i.call(t, n) && u(e, n, t[n]);
                    if (a)
                        for (var n of a(t)) l.call(t, n) && u(e, n, t[n]);
                    return e
                };
            let s = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => s(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => s(t)(e)
                        }
                    }
                },
                c = (e, t) => (n, r, a) => {
                    let i, l, u = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let c = !1,
                        d = new Set,
                        f = new Set;
                    try {
                        i = u.getStorage()
                    } catch (e) {}
                    if (!i) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, a);
                    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let h = s(u.serialize),
                        p = () => {
                            let e;
                            let t = u.partialize(o({}, r()));
                            u.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), u.blacklist && u.blacklist.forEach(e => delete t[e]);
                            let n = h({
                                state: t,
                                version: u.version
                            }).then(e => i.setItem(u.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        E = a.setState;
                    a.setState = (e, t) => {
                        E(e, t), p()
                    };
                    let I = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), p()
                        }, r, a),
                        m = () => {
                            var e;
                            if (!i) return;
                            c = !1, d.forEach(e => e(r()));
                            let t = (null == (e = u.onRehydrateStorage) ? void 0 : e.call(u, r())) || void 0;
                            return s(i.getItem.bind(i))(u.name).then(e => {
                                if (e) return u.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === u.version) return e.state;
                                    if (u.migrate) return u.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = u.merge(e, null != (t = r()) ? t : I), !0), p()
                            }).then(() => {
                                null == t || t(l, void 0), c = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return a.persist = {
                        setOptions: e => {
                            u = o(o({}, u), e), e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == i ? void 0 : i.removeItem) || e.call(i, u.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => c,
                        onHydrate: e => (d.add(e), () => {
                            d.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, m(), l || I
                }
        },
        606863: function(e, t, n) {
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
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
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
                    colorClass: u = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
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
                    colorClass: u = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
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
                    colorClass: u = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: u
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
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("974889"),
                l = n("954016"),
                u = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: s,
                    openInPopout: c,
                    initialSelectedApplicationId: d,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: h = !1,
                    analyticsLocations: p
                } = e;
                c && (0, i.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let E = c ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
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
                        initialSelectedApplicationId: d,
                        enableSelectedTextChannelInvite: h,
                        analyticsLocations: p
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: E
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
                    return u
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

            function u(e) {
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
        15059: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return i
                },
                COMMON_CONFETTI_COLORS: function() {
                    return l
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return u
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return s
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var r = n("641900"),
                a = n("839491");
            let i = a,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n("606863"), i, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
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
                c = new r.Environment
        },
        750482: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                MonetizationListingImageAspectStable: function() {
                    return c
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("800090"),
                i = n("769846"),
                l = n("801765"),
                u = n("955735");
            let o = (0, a.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function s(e) {
                let {
                    listing: t,
                    imageSize: n,
                    alt: a,
                    ...i
                } = e, u = (0, l.useListingThumbnailUrl)(t, n);
                return (0, r.jsx)("img", {
                    src: u,
                    alt: a,
                    ...i
                })
            }

            function c(e) {
                let {
                    listing: t,
                    aspectRatio: n = 16 / 9,
                    height: a,
                    ...i
                } = e, s = (a - 2 * o) * n, c = (0, l.useListingThumbnailUrl)(t, s), d = (0, l.useListingThumbnailUrl)(t, s, {
                    shouldAnimate: !1
                });
                return (0, r.jsx)(u.default, {
                    src: c,
                    backgroundSrc: d,
                    aspectRatio: n,
                    ...i
                })
            }
        },
        891328: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                l = n("77078"),
                u = n("750482"),
                o = n("945330"),
                s = n("527247");

            function c(e) {
                let {
                    className: t,
                    onClose: n
                } = e;
                return (0, r.jsx)(l.Clickable, {
                    className: i(s.closeButtonContainer, t),
                    onClick: n,
                    children: (0, r.jsx)(o.default, {
                        width: 16,
                        height: 16,
                        className: s.closeButtonIcon
                    })
                })
            }

            function d(e) {
                let {
                    guildProductListing: t,
                    onClose: n,
                    className: a
                } = e;
                return (0, r.jsxs)(l.ModalHeader, {
                    className: i(s.header, a),
                    separator: !1,
                    children: [(0, r.jsx)(u.default, {
                        className: s.headerImage,
                        listing: t,
                        imageSize: 500,
                        alt: ""
                    }), (0, r.jsx)(c, {
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
            var r = n("920040");
            n("773670");
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
            var r = n("773670"),
                a = n("161179"),
                i = n.n(a),
                l = n("642906"),
                u = n("134666"),
                o = n("273093");

            function s(e) {
                let {
                    handleClose: t
                } = e, {
                    guildProductListing: n,
                    guildId: a
                } = (0, o.useGuildProductPurchaseContext)(), {
                    selectedSkuPricePreview: s
                } = (0, l.usePaymentContext)();
                return r.useEffect(() => {
                    i(null != s, "selectedSkuPricePreview cannot be null"), (0, u.openGuildProductPurchaseConfirmationModal)({
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
                    return c
                },
                GuildProductPurchaseContextProvider: function() {
                    return d
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("161179"),
                l = n.n(i),
                u = n("498225"),
                o = n("565559");
            let s = a.createContext(void 0);

            function c() {
                let e = a.useContext(s);
                return l(null != e, "GuildProductPurchaseContext not found"), e
            }

            function d(e) {
                let {
                    children: t,
                    guildProductListingId: n,
                    ...a
                } = e, i = (0, u.useStateFromStores)([o.default], () => o.default.getGuildProduct(n));
                return l(null != i, "guildProductListing cannot be null"), (0, r.jsx)(s.Provider, {
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
            var r = n("920040");
            n("773670");
            var a = n("85336"),
                i = n("891328"),
                l = n("273093"),
                u = n("91237");

            function o(e) {
                let {
                    onClose: t
                } = e, {
                    guildProductListing: n
                } = (0, l.useGuildProductPurchaseContext)();
                return (0, r.jsx)(i.default, {
                    guildProductListing: n,
                    className: u.header,
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
                    return v
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("812204"),
                i = n("685665"),
                l = n("642906"),
                u = n("85336"),
                o = n("385179"),
                s = n("262683"),
                c = n("946359"),
                d = n("724269"),
                f = n("99836"),
                h = n("217796"),
                p = n("357957"),
                E = n("671183"),
                I = n("273093"),
                m = n("880531"),
                T = n("809924");
            let C = [{
                key: null,
                renderStep: e => (0, r.jsx)(h.OneTimePaymentPredicateStep, {
                    ...e
                })
            }, {
                key: u.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(s.PaymentModalAddPaymentStep, {
                    ...e,
                    onReturn: () => {
                        let t = p.default.paymentSources;
                        0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(u.Step.REVIEW, {
                            trackedFromStep: u.Step.ADD_PAYMENT_STEPS
                        })
                    }
                })
            }, {
                key: u.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(d.default, {})
            }, {
                key: u.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(c.default, {})
            }, {
                key: u.Step.REVIEW,
                renderStep: e => (0, r.jsx)(f.PaymentModalReviewStep, {
                    ...e
                })
            }, {
                key: u.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(E.default, {
                    ...e
                })
            }];

            function v(e) {
                let {
                    guildProductContext: t,
                    sourceAnalyticsLocations: n,
                    applicationId: u,
                    ...s
                } = e, {
                    AnalyticsLocationProvider: c,
                    analyticsLocations: d
                } = (0, i.default)(n, a.default.GUILD_PRODUCT_PAYMENT_MODAL);
                return (0, r.jsx)(I.GuildProductPurchaseContextProvider, {
                    ...t,
                    children: (0, r.jsx)(c, {
                        children: (0, r.jsx)(l.PaymentContextProvider, {
                            stepConfigs: C,
                            applicationId: u,
                            skuIDs: [s.skuId],
                            activeSubscription: null,
                            purchaseType: T.PurchaseTypes.ONE_TIME,
                            children: (0, r.jsx)(o.PaymentModal, {
                                initialPlanId: null,
                                analyticsLocations: d,
                                renderHeader: m.renderGuildProductPurchaseHeader,
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
                    return l
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return o
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

            function u(e, t) {
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
                    return c
                }
            });
            var r = n("498225"),
                a = n("913144"),
                i = n("197881"),
                l = n("492397");
            let u = new Set,
                o = {};
            class s extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(l.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: o
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new s(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
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
                    return l
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var r = n("990746"),
                a = n("913144"),
                i = n("49111");

            function l(e, t, n, r) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: i,
                    onSuccess: l,
                    onFailure: u
                } = t;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: l,
                    onFailure: u
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
                    return E
                }
            });
            var i = n("498225"),
                l = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
            let c = {},
                d = {},
                f = {};

            function h(e) {
                delete c[e];
                let t = f[e];
                null != t && delete d[t], delete f[e]
            }
            class p extends i.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let r = f[t];
                        null != r && (e[r] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === s.InteractionState.FAILED) && (null == c[t] || c[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return r
                }
            }
            p.displayName = "InteractionStore";
            var E = new p(l.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: r,
                        onCreate: a,
                        onCancel: i,
                        onSuccess: l,
                        onFailure: u
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: s.InteractionState.QUEUED,
                        data: r,
                        onCreate: a,
                        onCancel: i,
                        onSuccess: l,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: r
                    } = e;
                    if (null == n) return !1;
                    let a = c[n];
                    if (null == a || a.state !== s.InteractionState.QUEUED) return !1;
                    a.state = s.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), h(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i) return !1;
                    null === (t = i.onFailure) || void 0 === t || t.call(i, r, a), i.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? h(n) : c[n] = {
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
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), h(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === s.InteractionState.FAILED && h(e)
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
                    return m
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                handleInteractionResponse: function() {
                    return v
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return S
                },
                canRetryInteractionData: function() {
                    return A
                }
            });
            var r, a, i = n("500947"),
                l = n("990746"),
                u = n("913144"),
                o = n("819689"),
                s = n("798609"),
                c = n("263024"),
                d = n("271938"),
                f = n("274800"),
                h = n("809810"),
                p = n("3765"),
                E = n("606981"),
                I = n("49111");

            function m(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : i.default.extractTimestamp(e) + 9e5
            }
            let T = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: a,
                    indices: u,
                    applicationId: o,
                    channelId: p,
                    guildId: E,
                    localState: m
                } = e, T = i.default.fromTimestamp(Date.now());
                if (!h.default.canQueueInteraction(n, T)) return;
                await c.default.unarchiveThreadIfNecessary(p), (0, f.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: u
                    },
                    onFailure: (e, t) => C(p, e, t)
                }), null != m && (0, f.queueInteractionComponentState)(n, T, m, u);
                let S = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: E,
                    channel_id: p,
                    message_flags: r,
                    message_id: n,
                    application_id: o,
                    session_id: d.default.getSessionId(),
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
                        }(m)
                    }
                };
                await l.default.post({
                    url: I.Endpoints.INTERACTIONS,
                    body: S,
                    timeout: 3e3
                }, e => {
                    v(T, p, E, e)
                })
            }, C = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, v = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var a;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === I.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let a = (0, E.getFirstSkemaError)(r.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && u.default.dispatch({
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
            (r = a || (a = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let S = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    l = e.state === I.MessageStates.SENT && m(e.id) < Date.now();
                let u = e.state === I.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : i.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    c = e.isCommandType();
                if (o && r === p.InteractionState.QUEUED || c && e.state === I.MessageStates.SENDING && null != t) return a.SENDING;
                if (o && r === p.InteractionState.CREATED || e.hasFlag(I.MessageFlags.LOADING) && !l) return a.CREATED;
                if (null != e.interaction && e.hasFlag(I.MessageFlags.LOADING) && l) return a.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(I.MessageFlags.LOADING) && u) return a.TIMED_OUT;
                else if (c && e.state === I.MessageStates.SEND_FAILED) return a.FAILED
            };

            function A(e) {
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
                    return a
                }
            });
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
                    return s
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("245187"),
                l = n("642906"),
                u = n("85336"),
                o = n("628738");

            function s(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: s,
                    hasFetchedSkus: c,
                    paymentSources: d,
                    hasFetchedPaymentSources: f,
                    application: h
                } = (0, l.usePaymentContext)(), [p, E] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != h;
                    c && f && e && E(!1)
                }, [c, f, h]), a.useEffect(() => {
                    !p && !s && (0 === Object.keys(d).length ? t(u.Step.ADD_PAYMENT_STEPS) : t(u.Step.REVIEW))
                }, [p, s, t, d]), p) ? (0, r.jsx)(o.default, {}) : s ? (0, r.jsx)(i.BlockedPaymentsContentModal, {
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
                    return h
                },
                sendGiftMessage: function() {
                    return p
                }
            });
            var r, a, i = n("161179"),
                l = n.n(i),
                u = n("450911"),
                o = n("819689"),
                s = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("78345");
            (r = a || (a = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let h = (e, t) => {
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
                p = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await u.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (l(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, d.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var r = n("773670"),
                a = n("377849"),
                i = n.n(a),
                l = n("638800"),
                u = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                s = i(o),
                c = (0, u.default)({
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

            function d() {
                let [e, t] = r.useState(() => s.isAfter(Date.now()));
                return r.useEffect(() => {
                    let n = new l.Timeout,
                        r = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : r()
                            })
                        };
                    return e && r(), () => n.stop()
                }), e
            }
            var f = c
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
                    return c
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("498225"),
                l = n("206230"),
                u = n("491605"),
                o = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, h = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [p, E] = a.useState(d), I = a.useRef((0, o.getGiftAnimationData)(t, p)), [m, T] = a.useState(null == f), [C, v] = a.useState(!1), [S, A] = a.useState(-1), O = () => {
                    I.current = (0, o.getGiftAnimationData)(t, p), A(e => e + 1)
                }, _ = () => {
                    T(!1), v(!0), A(-1), E(d)
                };
                a.useEffect(() => {
                    null == f && E(d)
                }, [f, d]), a.useEffect(() => {
                    if (null != f && S >= 0) {
                        _();
                        return
                    }
                    O()
                }, [t, f]), a.useEffect(() => {
                    (!C || null == f) && O()
                }, [p]), a.useEffect(() => {
                    C && (T(null == f), v(!1), O())
                }, [C]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(u.default, {
                    importData: I.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: S,
                    onComplete: null != f ? () => {
                        null != f && (E(f), T(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return O
                },
                closeThreadSidebar: function() {
                    return _
                },
                closeAndClearThreadSidebar: function() {
                    return g
                }
            });
            var r = n("161179"),
                a = n.n(r),
                i = n("427964"),
                l = n.n(i),
                u = n("913144"),
                o = n("295426"),
                s = n("244201"),
                c = n("716241"),
                d = n("565298"),
                f = n("393414"),
                h = n("144491"),
                p = n("845579"),
                E = n("474643"),
                I = n("18494"),
                m = n("800762"),
                T = n("659500"),
                C = n("648564"),
                v = n("49111"),
                S = n("724210");

            function A(e, t, n) {
                s.MainWindowDispatch.dispatch(v.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    u.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let i = I.default.getChannelId();
                e.parent_id !== i && !(0, S.isGuildHomeChannel)(i) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(v.Routes.CHANNEL_THREAD_VIEW((0, d.getGuildIdForGenericRedirect)(e), (0, S.isGuildHomeChannel)(i) ? S.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    T.ComponentDispatch.dispatch(v.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function O(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(v.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), s.MainWindowDispatch.dispatch(v.ComponentActions.POPOUT_CLOSE), I.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let r = E.default.getDraft(e.id, E.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = E.default.getDraft(e.id, E.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", E.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, E.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    u.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function _(e, t) {
                (0, f.transitionTo)(v.Routes.CHANNEL(e, (0, S.isGuildHomeChannel)(t) ? S.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function g(e) {
                u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.FirstThreadMessage
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.ThreadSettings
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
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("926001"),
                l = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
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
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("509317"),
                l = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
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
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("578478"),
                l = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
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
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("31745"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: i,
                        foreground: l
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, i.CirclePlusIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return u
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
                LayerProvider: l
            } = (0, r.createLayer)("Chat"), u = i, o = l;
            var s = a
        }
    }
]);