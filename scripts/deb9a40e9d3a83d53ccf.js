(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45797"], {
        850865: function(e, t, n) {
            var l = n("235446");
            e.exports = function(e, t) {
                return l(e, t)
            }
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return s
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var l = n("990746"),
                i = n("913144"),
                r = n("271560"),
                a = n("49111");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), l.default.get({
                    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (i.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: r
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await l.default.get({
                        url: a.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: a.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return s
                },
                clearError: function() {
                    return o
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                l.default.wait(() => l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        427027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: s
                    })
                })
            }
        },
        49097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SparklesIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.139 2.793c-.392-1.057-1.886-1.057-2.278 0l-.51 1.377a2 2 0 0 1-1.18 1.182l-1.378.51c-1.057.39-1.057 1.885 0 2.277l1.377.51a2 2 0 0 1 1.182 1.18l.51 1.378c.39 1.057 1.885 1.057 2.277 0l.51-1.377a2 2 0 0 1 1.18-1.182l1.378-.51c1.057-.39 1.057-1.885 0-2.277l-1.377-.51a2 2 0 0 1-1.182-1.18l-.51-1.378ZM10.594 9.11c-.547-1.48-2.64-1.48-3.188 0l-.841 2.273a2 2 0 0 1-1.182 1.182l-2.273.841c-1.48.547-1.48 2.64 0 3.188l2.273.841a2 2 0 0 1 1.182 1.182l.841 2.273c.548 1.48 2.64 1.48 3.188 0l.841-2.273a2 2 0 0 1 1.182-1.182l2.273-.841c1.48-.547 1.48-2.64 0-3.188l-2.273-.841a2 2 0 0 1-1.182-1.182l-.841-2.273Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        449826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UndoIcon: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 8a1 1 0 0 1 2 0v3.536C5.928 8.799 8.94 7 12.375 7c4.237 0 7.83 2.738 9.54 6.595a1 1 0 1 1-1.83.81C18.645 11.15 15.697 9 12.376 9c-2.816 0-5.364 1.546-6.952 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var l = n("773670"),
                i = n("599110");
            let r = () => l.useContext(i.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773670");

            function i(e) {
                let [t, n] = (0, l.useState)(!1), i = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [i]), t
            }
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("49111");

            function i(e, t) {
                return t !== l.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("871388"),
                i = n("49111");

            function r(e) {
                return (0, l.default)(e, i.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return C
                },
                default: function() {
                    return _
                }
            });
            var l = n("920040"),
                i = n("773670"),
                r = n("498225"),
                a = n("77078"),
                s = n("305961"),
                o = n("145131"),
                u = n("599110"),
                d = n("335189"),
                c = n("473591"),
                f = n("980215"),
                E = n("879253"),
                h = n("709594"),
                p = n("49111"),
                m = n("782340"),
                I = n("913594");

            function C(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: C,
                    isFetchingSettings: _,
                    isSavingSettings: g,
                    hasPendingChanges: v,
                    errors: S
                } = (0, r.useStateFromStoresObject)([c.default], () => ({
                    settings: c.default.getSettings(n),
                    isFetchingSettings: c.default.isFetchingSettings(n),
                    isSavingSettings: c.default.isSavingSettings(),
                    hasPendingChanges: c.default.hasPendingChanges(),
                    errors: c.default.getErrors()
                })), T = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(n)), R = (0, f.useClydeProfilesEnabled)(T), [N, A] = i.useState(!1);
                i.useEffect(() => ((0, d.startEditingClydeProfile)(), () => {
                    (0, d.doneEditingClydeProfile)(), (0, d.resetPendingChanges)()
                }), []), i.useEffect(() => {
                    (0, d.fetchClydeSettings)(n, !0)
                }, [n]), i.useEffect(() => {
                    (v || null != S) && A(!1)
                }, [v, S]);
                let M = async () => {
                    if (null == n || !c.default.hasPendingChanges()) return;
                    let e = c.default.getPendingUpdates();
                    await (0, d.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), A(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(a.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)("div", {
                            className: I.heading,
                            children: (0, l.jsx)(a.Heading, {
                                variant: "heading-xl/semibold",
                                children: m.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, l.jsx)(a.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, l.jsx)(a.ScrollerAuto, {
                        className: I.content,
                        children: _ || null == C ? (0, l.jsx)(a.Spinner, {
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [R && (0, l.jsx)(h.default, {
                                guildId: n
                            }), null != C && (0, l.jsx)("div", {
                                className: I.section,
                                children: (0, l.jsx)(E.ClydeEditProfileModalPersonalitySection, {
                                    settings: C
                                })
                            })]
                        })
                    }), (0, l.jsxs)(a.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: I.footer,
                        children: [(0, l.jsx)("div", {
                            className: I.resetButtonContainer,
                            children: (0, l.jsx)(a.Button, {
                                onClick: () => {
                                    (0, d.resetPendingChanges)(), u.default.track(p.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: a.ButtonColors.PRIMARY,
                                size: a.ButtonSizes.SMALL,
                                disabled: !v,
                                children: m.default.Messages.RESET
                            })
                        }), v && null == S && (0, l.jsx)("div", {
                            className: I.pendingChangesMessage,
                            children: m.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), N && (0, l.jsx)("div", {
                            className: I.successfullSaveMessage,
                            children: m.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != S && (0, l.jsx)("div", {
                            className: I.errorMessage,
                            children: m.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(a.Button, {
                                onClick: M,
                                color: a.ButtonColors.GREEN,
                                size: a.ButtonSizes.SMALL,
                                submitting: g,
                                disabled: !v,
                                children: m.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: i
                } = e;
                return (0, l.jsx)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.LARGE,
                    children: (0, l.jsx)(C, {
                        onClose: n,
                        guildId: i
                    })
                })
            }
        },
        879253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return I
                }
            });
            var l = n("920040"),
                i = n("773670"),
                r = n("744196"),
                a = n("77078"),
                s = n("570697"),
                o = n("826432"),
                u = n("204203"),
                d = n("599110"),
                c = n("335189"),
                f = n("473591"),
                E = n("680894"),
                h = n("49111"),
                p = n("782340"),
                m = n("29995");

            function I(e) {
                var t;
                let {
                    settings: n
                } = e, [I, C] = i.useState(!1), [_, g] = i.useState(), {
                    pendingPersonality: v,
                    errors: S
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [T, R] = i.useState(), N = null != v && _ === v, A = null != S && Number(S.code) === h.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? S.message : void 0, M = N ? p.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : p.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, l.jsxs)(s.default, {
                    title: p.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, l.jsxs)(a.FormText, {
                        type: a.FormText.Types.DESCRIPTION,
                        className: m.description,
                        children: [p.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(a.Anchor, {
                            href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: p.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, l.jsx)(a.TextArea, {
                        value: null !== (t = null != v ? v : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, c.setPendingPersonality)(e)
                        },
                        placeholder: p.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: I,
                        autosize: !0
                    }), null != A ? (0, l.jsx)(a.FormErrorBlock, {
                        className: m.errorBlock,
                        children: A
                    }) : null, (0, l.jsxs)("div", {
                        className: m.generateButtonContainer,
                        children: [(0, l.jsx)(a.Button, {
                            color: N ? a.ButtonColors.PRIMARY : a.ButtonColors.BRAND,
                            innerClassName: m.generateButton,
                            onClick: () => {
                                if (N && null != T) {
                                    (0, c.setPendingPersonality)(T), R(void 0);
                                    return
                                }
                                null != v && "" !== v.trim() && (d.default.track(h.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), C(!0), (0, c.generatePersonality)(v).then(e => {
                                    null != e && (R(v), g(e), (0, c.setPendingPersonality)(e, !0)), C(!1)
                                }))
                            },
                            disabled: null == v || "" === v.trim(),
                            submitting: I,
                            children: N ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: m.buttonIcon
                                }), p.default.Messages.UNDO]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: m.buttonIcon
                                }), p.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, l.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: M
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("161179"),
                r = n.n(i),
                a = n("498225"),
                s = n("184900"),
                o = n("11899"),
                u = n("447645"),
                d = n("569460"),
                c = n("52704"),
                f = n("121370"),
                E = n("26989"),
                h = n("305961"),
                p = n("697218"),
                m = n("335189"),
                I = n("473591"),
                C = n("680894"),
                _ = n("782340"),
                g = n("161362");

            function v(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: i,
                    pendingThemeColors: r
                } = (0, a.useStateFromStoresObject)([I.default], () => I.default.getPendingUpdates()), s = (0, a.useStateFromStores)([E.default], () => E.default.getMember(t, C.CLYDE_AI_USER_ID));
                return (0, l.jsxs)("div", {
                    className: g.editProfileSections,
                    children: [(0, l.jsx)(d.default, {
                        placeholder: _.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == s ? void 0 : s.nick,
                        pendingGlobalName: i,
                        onGlobalNameChange: m.setPendingNick
                    }), (0, l.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: m.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: _.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, l.jsx)(c.default, {
                        guildId: t,
                        onBannerChange: m.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, l.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != r ? r : void 0,
                        onThemeColorsChange: m.setPendingThemeColors
                    })]
                })
            }

            function S(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: i,
                    pendingBanner: u,
                    pendingThemeColors: d
                } = (0, a.useStateFromStoresObject)([I.default], () => I.default.getPendingUpdates()), c = (0, a.useStateFromStores)([p.default], () => p.default.getUser(C.CLYDE_AI_USER_ID));
                r(null != c, "Clyde User must exist");
                let f = (0, a.useStateFromStores)([h.default], () => h.default.getGuild(t));
                return (0, l.jsx)(o.default, {
                    className: g.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, l.jsx)(s.default, {
                        user: c,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: m.setPendingAvatar,
                        onBannerChange: m.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, l.jsx)(v, {
                        guildId: t,
                        clydeUser: c
                    })
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("990746"),
                i = n("913144"),
                r = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    r = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == r ? void 0 : r.id);
                try {
                    let t = await l.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: r
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: r.version,
                            description: r.description,
                            formFields: r.form_fields,
                            guild: r.guild
                        }
                    }), r
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await l.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, h = async (e, t) => {
                let n = await l.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, p = async (e, t) => {
                await l.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, m = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await l.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: r
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: r
                    }), r
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: h,
                enableVerificationForm: p,
                submitVerificationForm: m
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return r
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return p
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return m
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            });
            var l, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let r = new Set([i.VerificationFormFieldTypes.TERMS]),
                a = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                h = 1e3,
                p = 300,
                m = "Membership Gating",
                I = "in-app-member-verification";
            (l || (l = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), l = n("453265").default;
            let i = l.openMemberVerificationModal;
            l.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var l = n("710835"),
                i = n("659500"),
                r = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, l.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("551042"),
                r = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    r.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    r.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let r = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: r,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return p
                },
                default: function() {
                    return I
                }
            });
            var l = n("920040"),
                i = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("161179"),
                o = n.n(s),
                u = n("77078"),
                d = n("159885"),
                c = n("694187"),
                f = n("49111"),
                E = n("782340"),
                h = n("161962");

            function p(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, l.jsx)("div", {
                    className: a(h.imageUploaderIcon, t),
                    children: n
                })
            }
            class m extends i.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, i, r;
                    let {
                        image: s,
                        hint: o,
                        name: m,
                        makeURL: I,
                        disabled: C,
                        onChange: _,
                        showIcon: g,
                        showIconDisabled: v,
                        className: S,
                        imageClassName: T,
                        iconClassName: R,
                        iconWrapperClassName: N,
                        icon: A,
                        hideSize: M,
                        imageStyle: L,
                        showRemoveButton: x,
                        maxFileSizeBytes: P,
                        onFileSizeError: O,
                        onOpenImageSelectModal: y,
                        "aria-label": U
                    } = this.props;
                    if (null != (t = null != s && /^data:/.test(s) ? s : I(s)) ? n = 'url("'.concat(t, '")') : null != m && (i = (0, l.jsx)("div", {
                            className: h.imageUploaderAcronym,
                            children: (0, d.getAcronym)(m)
                        })), C) return (0, l.jsx)("div", {
                        className: a(h.imageUploader, h.disabled, S),
                        children: (0, l.jsxs)("div", {
                            className: a(h.imageUploaderInner, T),
                            style: {
                                ...L,
                                backgroundImage: n
                            },
                            children: [i, v && (0, l.jsx)("div", {
                                className: a(h.imageUploaderIcon, h.imageUploaderIconDisabled, R),
                                children: A
                            })]
                        })
                    });
                    null != s ? r = (0, l.jsx)(u.Anchor, {
                        className: h.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !M && (r = (0, l.jsx)("small", {
                        className: h.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let F = null !== (e = null != U ? U : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: a(h.imageUploader, S),
                        children: [(0, l.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: g ? a(h.imageUploaderIconWrapper, N) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: a(h.imageUploaderInner, T),
                                    style: {
                                        ...L,
                                        backgroundImage: n
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i
                                    }), null != y ? (0, l.jsx)(u.Clickable, {
                                        className: h.imageUploaderFileInput,
                                        "aria-label": F,
                                        onClick: y
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: _,
                                        className: h.imageUploaderFileInput,
                                        "aria-label": F,
                                        tabIndex: 0,
                                        maxFileSizeBytes: P,
                                        onFileSizeError: O
                                    })]
                                }), null != o && (0, l.jsx)("div", {
                                    className: h.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), g && (0, l.jsx)(p, {
                                    className: R,
                                    icon: A
                                })]
                            })
                        }), x ? r : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            m.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var I = m
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return C
                },
                updateImpersonating: function() {
                    return _
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return R
                }
            });
            var l = n("913144"),
                i = n("716241"),
                r = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                h = n("38654"),
                p = n("507950"),
                m = n("49111"),
                I = n("724210");

            function C(e, t) {
                E.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), v(e)
            }

            function _(e, t) {
                let n = h.default.getData(e);
                null != n && n.type === t.type && (E.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), v(e))
            }

            function g(e) {
                l.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function v(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    l = null != t && (0, I.isStaticChannelRoute)(t);
                if (!l && !d.default.can(m.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(m.Routes.CHANNEL(e, t.id))
                }
            }

            function S(e, t, n) {
                let l = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => l.add(e)), n.forEach(e => l.delete(e)), _(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: l
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        l = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (l.some(e => !t.roles.includes(e))) return !0;
                        let i = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            r = i.filter(e => !n.includes(e));
                        return r.length > 0 && S(e, r, []), !1
                    })
                }(e, t);
                let l = {};
                t.forEach(e => l[e] = n.roles[e]), _(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: l
                })
            }

            function R(e, t) {
                _(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("462567"),
                r = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: h,
                    onComplete: p,
                    onSubscriptionConfirmation: m,
                    analyticsLocations: I,
                    analyticsObject: C,
                    analyticsLocation: _,
                    analyticsSourceLocation: g,
                    isGift: v = !1,
                    giftMessage: S,
                    subscriptionTier: T,
                    trialId: R,
                    postSuccessGuild: N,
                    openInvoiceId: A,
                    applicationId: M,
                    referralTrialOfferId: L,
                    giftRecipient: x,
                    returnRef: P
                } = null != e ? e : {}, O = !1, y = (0, i.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...r
                        } = n;
                        return (0, l.jsx)(e, {
                            ...r,
                            loadId: y,
                            subscriptionTier: T,
                            skuId: T,
                            isGift: v,
                            giftMessage: S,
                            giftRecipient: x,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == h || h(e), e && (null == m || m())
                            },
                            onComplete: () => {
                                O = !0, null == p || p(), !v && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: I,
                            analyticsObject: C,
                            analyticsLocation: _,
                            analyticsSourceLocation: g,
                            trialId: R,
                            postSuccessGuild: N,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: M,
                            referralTrialOfferId: L,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != _ ? _ : C,
                            source: g,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: v,
                            eligible_for_trial: null != R,
                            application_id: M,
                            location_stack: I
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == h || h(O), O && (!v && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == m || m())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return s
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var l = n("913144");
            let i = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        70723: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("498225"),
                a = n("913144");

            function s() {
                l = !1, i = null
            }
            s();
            class o extends r.default.Store {
                get hasCompletedStepDuringSession() {
                    return l
                }
                get activeSubstep() {
                    return i
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(a.default, {
                SET_HAS_COMPLETED_STEP: function() {
                    l = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    l = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    let {
                        substep: t
                    } = e;
                    i = t
                },
                LOGOUT: function() {
                    s()
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return h
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return I
                }
            });
            var l = n("773670"),
                i = n("744196"),
                r = n("990746"),
                a = n("913144"),
                s = n("775433"),
                o = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let h = "nonSubscriber";
            async function p() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [h]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = c.default.shouldFetchPremiumLikelihood(), i = o.default.getCurrentUser();
                C(i, l, t, n)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, i.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, i.default)([o.default], () => o.default.getCurrentUser());
                l.useEffect(() => {
                    C(a, r, t, n)
                }, [a, r, t, n])
            }

            function C(e, t, n, l) {
                null != e && !(0, d.isPremium)(e) && n && (t && p(), l && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("498225"),
                i = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = r;
            class s extends l.default.Store {
                initialize() {
                    a = r
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var o = new s(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var r = i
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("920040"),
                i = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("462567"),
                o = n("253824"),
                u = n("912557"),
                d = n("77078"),
                c = n("634634"),
                f = n("449918"),
                E = n("973262"),
                h = n("832132"),
                p = n("771325"),
                m = n("49111"),
                I = n("782340"),
                C = n("936187");

            function _(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: r,
                    suggestedColors: _,
                    disabled: g,
                    label: v,
                    colorPickerMiddle: S,
                    colorPickerFooter: T,
                    showEyeDropper: R
                } = e, N = i.useRef(null), A = (0, d.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), M = u.default.colors.BACKGROUND_ACCENT.css, L = (0, p.isColorDark)(r), x = (0, o.int2hex)(r), P = x === A ? M : x, O = (0, f.getColor)(L ? m.Color.WHITE_500 : m.Color.PRIMARY_530), y = (0, c.default)(S), U = (0, c.default)(T), [F, j] = i.useState((0, s.v4)());
                return i.useEffect(() => {
                    (y !== S || U !== T) && j((0, s.v4)())
                }, [T, S, U, y]), (0, l.jsx)(d.Popout, {
                    positionKey: F,
                    renderPopout: e => (0, l.jsx)(E.CustomColorPicker, {
                        ...e,
                        value: r,
                        onChange: t,
                        suggestedColors: _,
                        middle: S,
                        footer: T,
                        showEyeDropper: R
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, l.jsxs)("div", {
                            ref: N,
                            className: a(C.colorSwatch, {
                                [C.disabled]: g
                            }),
                            children: [(0, l.jsx)(d.Clickable, {
                                ...n,
                                tabIndex: g ? -1 : 0,
                                onClick: g ? m.NOOP : t,
                                style: {
                                    backgroundColor: x,
                                    borderColor: P
                                },
                                className: C.swatch,
                                "aria-label": I.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: N
                                },
                                children: (0, l.jsx)(h.default, {
                                    className: C.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: O
                                })
                            }), v]
                        })
                    }
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("77078"),
                s = n("216422"),
                o = n("782340"),
                u = n("815074");

            function d(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, l.jsx)(a.Tooltip, {
                    text: t,
                    children: e => (0, l.jsx)(a.Clickable, {
                        ...e,
                        children: (0, l.jsx)(s.default, {
                            className: r(u.nitroWheel, n)
                        })
                    })
                })
            }
        },
        11899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("807403"),
                s = n("77078"),
                o = n("570697"),
                u = n("782340"),
                d = n("870327");

            function c(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: i,
                    profilePreview: c,
                    previewTitle: f
                } = e, E = () => (0, l.jsx)(o.default, {
                    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: d.preview,
                    children: c
                });
                return (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsxs)(s.FormSection, {
                        className: d.profileCustomizationSection,
                        children: [a.isMobile && E(), (0, l.jsxs)("div", {
                            className: r(d.baseLayout, i),
                            children: [t, !a.isMobile && E()]
                        })]
                    })
                })
            }
        },
        447645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("77078"),
                s = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("777768");
            let E = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function h(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: i,
                    sectionTitle: h,
                    changeAvatarButtonText: p,
                    guildId: m,
                    className: I,
                    disabled: C = !1,
                    isTryItOutFlow: _ = !1,
                    forcedDivider: g,
                    withHighlight: v = !1
                } = e, S = v ? s.default : a.Button;
                return (0, l.jsx)(u.default, {
                    className: I,
                    title: h,
                    errors: n,
                    disabled: C,
                    forcedDivider: g,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(S, {
                            className: r({
                                [f.buttonHighlighted]: v
                            }),
                            size: a.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, m, _, _ ? E : void 0),
                            children: null != p ? p : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, l.jsx)(a.Button, {
                            className: f.removeButton,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.SMALL,
                            onClick: () => i(null),
                            children: null != m ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("744196"),
                s = n("77078"),
                o = n("70723"),
                u = n("254490"),
                d = n("891653"),
                c = n("632892"),
                f = n("646718"),
                E = n("225087");

            function h(e) {
                let {
                    errors: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: E.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, u.sizeString)(t)
                        })
                    }, t))
                })
            }

            function p(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: i,
                    description: u,
                    children: p,
                    className: m,
                    errors: I,
                    disabled: C = !1,
                    hideDivider: _ = !1,
                    showBorder: g = !1,
                    borderType: v,
                    hasBackground: S = !1,
                    forcedDivider: T = !1,
                    showPremiumIcon: R = !1
                } = e, N = (0, a.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, l.jsx)("div", {
                    className: r(E.customizationSection, m, {
                        [E.disabled]: C,
                        [E.hideDivider]: _,
                        [E.showBorder]: g,
                        [E.withDivider]: T
                    }),
                    children: (0, l.jsxs)(c.default, {
                        className: E.customizationSectionBorder,
                        backgroundClassName: E.customizationSectionBackground,
                        isShown: g && !N,
                        type: v,
                        hasBackground: S,
                        children: [(0, l.jsxs)(s.FormTitle, {
                            className: E.title,
                            id: i,
                            children: [t, R && (0, l.jsx)(d.default, {}), n]
                        }), null != u ? (0, l.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: E.sectionDescription,
                            children: u
                        }) : null, p, null != I && (0, l.jsx)(h, {
                            errors: I
                        })]
                    })
                })
            }
        },
        569460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("77078"),
                r = n("570697"),
                a = n("49111"),
                s = n("782340");

            function o(e) {
                var t, n;
                return (0, l.jsx)(r.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: s.default.Messages.DISPLAY_NAME,
                    children: (0, l.jsx)("div", {
                        children: (0, l.jsx)(i.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: a.DISPLAY_NAME_MAX_LENGTH,
                            onChange: e.onGlobalNameChange,
                            value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ""
                        })
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var l, i, r = n("920040"),
                a = n("773670"),
                s = n("575482"),
                o = n.n(s),
                u = n("726186");
            (l = i || (i = {})).PREMIUM = "premium", l.LIMITED = "limited";
            let d = {
                [i.PREMIUM]: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                [i.LIMITED]: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var c = a.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: l = i.PREMIUM,
                    isShown: a,
                    hasBackground: s = !1,
                    className: c,
                    backgroundClassName: f
                } = e;
                if (!a) return (0, r.jsx)(r.Fragment, {
                    children: n
                });
                let {
                    border: E,
                    background: h
                } = d[l];
                return (0, r.jsx)("div", {
                    ref: t,
                    className: o(E, c),
                    children: (0, r.jsx)("div", {
                        className: o(s ? h : u.background, f),
                        children: n
                    })
                })
            })
        },
        52704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("77078"),
                s = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("225221");

            function E(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: i,
                    guildId: E,
                    className: h,
                    disabled: p = !1,
                    showPremiumIcon: m = !0,
                    isTryItOutFlow: I = !1,
                    forcedDivider: C,
                    withHighlight: _ = !1
                } = e, g = _ ? s.default : a.Button;
                return (0, l.jsx)(u.default, {
                    className: h,
                    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: m,
                    errors: n,
                    disabled: p,
                    forcedDivider: C,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(g, {
                            className: r({
                                [f.buttonHighlighted]: _
                            }),
                            size: a.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER, E, I, void 0),
                            children: c.default.Messages.CHANGE_BANNER
                        }), t && (0, l.jsx)(a.Button, {
                            className: f.removeButton,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.SMALL,
                            onClick: () => i(null),
                            children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("850865"),
                s = n.n(a),
                o = n("912557"),
                u = n("77078"),
                d = n("462274"),
                c = n("217513"),
                f = n("528438"),
                E = n("719923"),
                h = n("409214"),
                p = n("570697"),
                m = n("782340"),
                I = n("416638");

            function C(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: i,
                    onThemeColorsChange: a,
                    preventDisabled: C,
                    guildId: _,
                    className: g,
                    showPremiumIcon: v = !0,
                    showResetThemeButton: S = !1,
                    forcedDivider: T
                } = e, R = (0, c.default)(t.id, _), [N, A] = (0, f.default)(t, R, {
                    pendingThemeColors: i,
                    isPreview: !0
                }), M = E.default.canUsePremiumProfileCustomization(t), L = null != n ? n : t.getAvatarURL(_, 80), x = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), P = (0, d.useAvatarColors)(L, x, !1);
                if (null == N || null == A) return null;
                let O = e => {
                    let t = s(e, null == R ? void 0 : R.themeColors);
                    a(t ? void 0 : e)
                };
                return (0, l.jsx)(p.default, {
                    title: m.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !M && !C,
                    className: r(I.profileThemesSection, g),
                    showPremiumIcon: v,
                    forcedDivider: T,
                    children: (0, l.jsxs)("div", {
                        className: I.sectionContainer,
                        children: [(0, l.jsx)("div", {
                            className: I.sparkleContainer,
                            children: (0, l.jsx)(h.default, {
                                onChange: e => O([e, A]),
                                color: N,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: I.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: m.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: I.sparkleContainer,
                            children: (0, l.jsx)(h.default, {
                                onChange: e => O([N, e]),
                                color: A,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: I.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: m.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), S && null != _ && (0, l.jsx)(u.Button, {
                            className: I.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => O([null, null]),
                            children: m.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return o
                },
                closeUserProfileModal: function() {
                    return u
                }
            });
            var l = n("913144"),
                i = n("327037"),
                r = n("697218"),
                a = n("506885"),
                s = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = s.ME,
                    channelId: u,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, E = r.default.getUser(t), h = o !== s.ME ? o : void 0;
                if (null == E) return (0, i.fetchProfile)(t, {
                    friendToken: d,
                    guildId: h
                }).then(() => {
                    l.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: u,
                        friendToken: d,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, a.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: h
                }), l.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: u,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function u() {
                l.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        227116: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                CollectiblesCategorySkuId: function() {
                    return l
                },
                CollectiblesCategorySkuIdSets: function() {
                    return r
                }
            }), (i = l || (l = {})).FANTASY = "1144003461608906824", i.ANIME = "1144302037593497701", i.BREAKFAST = "1144054000099012659", i.DISXCORE = "1144058340327047249", i.HALLOWEEN = "1157410718711304313", i.FALL = "1157406994873991284";
            let r = {
                ALL: new Set(["1144003461608906824", "1144054000099012659", "1144058340327047249", "1144302037593497701", "1157406994873991284", "1157410718711304313"]),
                FALLOWEEN: new Set(["1157406994873991284", "1157410718711304313"])
            }
        },
        867946: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                CollectiblesItemType: function() {
                    return l
                }
            }), (i = l || (l = {}))[i.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", i[i.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        },
        895393: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == l || l.removeAllRanges(), null == l || l.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
                let r = document.execCommand("copy");
                return t.removeChild(i), r
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("377849"),
                i = n.n(l),
                r = n("666038");
            class a extends r.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040"),
                i = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("77078"),
                o = n("760607"),
                u = n("13681");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: d,
                    ...c
                } = e, f = i.Children.only(t), E = (0, s.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: a(u.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...c,
                        className: a(d, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return m
                },
                default: function() {
                    return C
                }
            });
            var l, i, r = n("920040"),
                a = n("773670"),
                s = n("575482"),
                o = n.n(s),
                u = n("28926"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                E = n("212407");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let h = {
                    [i.DEFAULT]: E.shineDefault,
                    [i.SMALL]: E.shineSmall
                },
                p = {
                    [i.DEFAULT]: E.shineInnerDefault,
                    [i.SMALL]: E.shineInnerSmall
                };
            class m extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...l,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: h[t],
                            children: (0, r.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            m.defaultProps = {
                shineSize: i.DEFAULT
            };
            let I = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: f = i.DEFAULT,
                    shinePaused: h,
                    buttonShineClassName: p,
                    onlyShineOnHover: I,
                    ...C
                } = e, _ = a.createRef(), g = (0, c.default)(_), v = !l && !s && !0 !== u && (!I || g);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: _,
                    ...C,
                    className: o(E.shinyButton, n),
                    disabled: l,
                    submitting: s,
                    children: [t, v ? (0, r.jsx)(m, {
                        shinePaused: h,
                        className: o(E.buttonShine, I ? E.onlyShineOnHover : void 0, p),
                        shineSize: f
                    }) : null]
                })
            };
            I.ShineSizes = i;
            var C = I
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                a = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("246604");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                h = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: h = "currentColor",
                        transition: p = f.transition,
                        className: m,
                        foreground: I,
                        expanded: C,
                        ..._
                    } = e, {
                        enabled: g
                    } = (0, d.useRedesignIconContext)(), v = t;
                    if (!0 === C ? v = E.DOWN : !1 === C && (v = E.RIGHT), g) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: a.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [v];
                        return (0, l.jsx)(e, {
                            ..._,
                            className: m,
                            width: n,
                            height: i,
                            color: h,
                            colorClass: I
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: r(m, p, v),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(_),
                        children: (0, l.jsx)("path", {
                            className: I,
                            fill: "none",
                            stroke: h,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            h.Directions = E;
            var p = h
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("733154"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("505088"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon)
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("504318"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: i = 24,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: i,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, r.PencilIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("998460"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("753809"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: r,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, l.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, r.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("434657"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: r,
                        foreground: s,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        className: r,
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(o),
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.LockIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("876726"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: i
                        })
                    })
                }, r.PlayIcon)
        },
        826432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("49097"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: r,
                        foreground: a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, r.SparklesIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("427027"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("287083"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, r.StageIcon)
        },
        204203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                r = n("449826"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            d: "m18.984 2.345-2.473 2.603c2.67 1.564 4.473 4.456 4.473 7.766 0 4.624-3.507 8.441-8 8.941v-2.02c3.387-.488 6-3.4 6-6.92 0-2.745-1.592-5.12-3.898-6.266l-3.102 3.266v-7.37h7ZM6.733 8.085 5.235 6.762a8.976 8.976 0 0 0-2.139 4.583h2.027a7 7 0 0 1 1.61-3.26Zm-3.717 5.26h2a6.938 6.938 0 0 0 1.369 3.553l-1.426 1.427a8.945 8.945 0 0 1-1.943-4.98Zm7.968 8.31a8.918 8.918 0 0 1-4.61-1.916l1.425-1.425a6.964 6.964 0 0 0 3.185 1.321v2.02Z",
                            clipRule: "evenodd"
                        })
                    })
                }, r.UndoIcon)
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var l = n("773670"),
                i = n("498225"),
                r = n("244201"),
                a = n("471671");

            function s() {
                let {
                    windowId: e
                } = l.useContext(r.default);
                return (0, i.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        }
    }
]);