(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12110"], {
        32974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("271560"),
                s = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: l
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: l
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: a
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        828049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RetryIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.985 9.985 0 0 0-8-4C6.477 2 2 6.477 2 12s4.477 10 10 10c2.38 0 4.57-.833 6.286-2.223a1 1 0 0 0-1.258-1.554A8 8 0 0 1 4 12Z",
                        className: a
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.983a3.645 3.645 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M21 11.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.173-.07.372.053.372.24Z",
                        className: a
                    })]
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: a
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e, t) {
                return t !== i.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("871388"),
                r = n("49111");

            function l(e) {
                return (0, i.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return s
                }
            });
            var i = n("65597"),
                r = n("42203"),
                l = n("337026");

            function s(e) {
                let t = (0, i.default)([r.default], () => r.default.getChannel(e)),
                    {
                        enabled: n
                    } = l.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var i = n("862205"),
                r = n("15733");
            let l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function a() {
                let {
                    paymentsBlocked: e
                } = l.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = s.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var o = l
        },
        805172: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: i = {}
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: i
                })
            }
        },
        161009: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("189293"),
                s = n("845962"),
                a = n("235898");

            function o() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: o
                } = (0, a.default)(), [u, c, d] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
                return (0, i.useEffect)(() => {
                    (0, l.fetchUserProfileEffects)()
                }, []), {
                    isFetching: e || u,
                    error: null != t ? t : c,
                    profileEffects: d,
                    categories: n,
                    purchases: o
                }
            }
        },
        235898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("875212"),
                s = n("21526"),
                a = n("853987"),
                o = n("775416");

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, l.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, l.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: n,
                    categories: u,
                    error: c
                } = function() {
                    var e;
                    let t = "useMaybeFetchCollectiblesCategories";
                    (0, l.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, l.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    });
                    let [n, o, u, c] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.isFetching, a.default.error, null !== (e = a.default.lastFetched) && void 0 !== e ? e : 0, a.default.categories]);
                    return (0, i.useEffect)(() => {
                        !(n || o || Date.now() - u < 6e5) && (0, s.fetchCollectiblesCategories)()
                    }, [n, u, o]), {
                        isFetching: n,
                        categories: c,
                        error: o
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: h,
                    isFetching: E,
                    purchases: C
                } = function() {
                    let e = "useFetchPurchases";
                    (0, l.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, l.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, n, a, u, c] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, s.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: a,
                        claimError: u,
                        isFetching: t,
                        purchases: c
                    }
                }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : h;
                return {
                    isFetching: n || E,
                    isFetchingCategories: n,
                    isFetchingPurchases: E,
                    isClaiming: d,
                    categories: u,
                    purchases: C,
                    error: p
                }
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function h(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: h,
                    onClose: E,
                    onComplete: C,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: _,
                    analyticsObject: I,
                    analyticsLocation: v,
                    analyticsSourceLocation: S,
                    isGift: m = !1,
                    giftMessage: g,
                    subscriptionTier: T,
                    trialId: L,
                    postSuccessGuild: A,
                    openInvoiceId: N,
                    applicationId: R,
                    referralTrialOfferId: P,
                    giftRecipient: M,
                    returnRef: O
                } = null != e ? e : {}, x = !1, y = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: y,
                            subscriptionTier: T,
                            skuId: T,
                            isGift: m,
                            giftMessage: g,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: h,
                            onClose: e => {
                                r(), null == E || E(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                x = !0, null == C || C(), !m && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: _,
                            analyticsObject: I,
                            analyticsLocation: v,
                            analyticsSourceLocation: S,
                            trialId: L,
                            postSuccessGuild: A,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: R,
                            referralTrialOfferId: P,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !x && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != v ? v : I,
                            source: S,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != L,
                            application_id: R,
                            location_stack: _
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == E || E(x), x && (!m && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return a
                }
            }), (l = i || (i = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.WINTER = 1] = "WINTER", (s = r || (r = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
            let a = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return _
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                h = n("49111");
            let E = "nonSubscriber";
            async function C() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                I(r, i, t, n)
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    I(s, l, t, n)
                }, [s, l, t, n])
            }

            function I(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && C(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var l = r
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("913144"),
                s = n("850068"),
                a = n("271938"),
                o = n("160299"),
                u = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([a.default], () => a.default.isAuthenticated());
                return i.useEffect(() => {
                    l.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return u
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("746379");
            var i = n("981980"),
                r = n("872717"),
                l = n("913144");
            n("253981");
            var s = n("140596"),
                a = n("49111");
            n("843455"), n("782340");

            function o() {
                s.default.getApplicationsShelfFetchState() === s.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(a.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                l.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), r.default.get({
                    url: a.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function c(e, t) {
                return r.default.delete(a.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("201155"),
                s = n("21121"),
                a = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, s.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, r.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, a.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, a.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let h = new Set(u.map(e => e.application.id)),
                    E = c.filter(e => !h.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: E,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        189293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserProfileEffects: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993");
            n("845962");
            var s = n("49111");
            let a = e => ({
                    id: e.id,
                    config: e
                }),
                o = async () => {
                    r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH"
                    });
                    try {
                        let {
                            body: e
                        } = await i.default.get(s.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(a);
                        r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                            profileEffects: n
                        })
                    } catch (e) {
                        throw r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }
        },
        889793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("265586"),
                s = n("446674"),
                a = n("77078"),
                o = n("54239"),
                u = n("812204"),
                c = n("685665"),
                d = n("21526"),
                f = n("853987"),
                h = n("775416"),
                E = n("805172"),
                C = n("491232"),
                p = n("161009"),
                _ = n("635956"),
                I = n("906932"),
                v = n("217513"),
                S = n("790618"),
                m = n("697218"),
                g = n("599110"),
                T = n("719923"),
                L = n("717262"),
                A = n("598854"),
                N = n("49111"),
                R = n("646718"),
                P = n("782340"),
                M = n("811855");

            function O(e) {
                let {
                    user: t,
                    purchase: n,
                    onApply: r,
                    onClose: l,
                    disableApplyButton: s,
                    category: u,
                    canUseCollectibles: c,
                    selectedProfileEffectID: d
                } = e, f = () => {
                    l(), (0, o.pushLayer)(N.Layers.COLLECTIBLES_SHOP)
                };
                return (0, i.jsx)(a.ModalFooter, {
                    className: M.modalFooter,
                    children: (0, i.jsxs)("div", {
                        className: M.buttonsRight,
                        children: [(0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: l,
                            children: P.default.Messages.CANCEL
                        }), (() => {
                            let e = null != n && (!(0, C.isPremiumCollectiblesPurchase)(n) || c);
                            if (e || null === d) return (0, i.jsx)(a.Button, {
                                onClick: r,
                                disabled: s,
                                children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let l = c || !(0, C.isPremiumCollectiblesCategory)(u);
                            return l ? (0, i.jsx)(a.Button, {
                                className: M.modalFooterShopButton,
                                onClick: f,
                                children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, i.jsx)(_.default, {
                                subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: T.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })()]
                    })
                })
            }

            function x(e) {
                let {
                    user: t,
                    categories: n,
                    purchases: l,
                    onClose: o,
                    initialSelectedProfileEffectID: u,
                    currentSavedEffectID: c
                } = e, d = (0, s.useStateFromStores)([S.default], () => S.default.getPendingProfileEffectID()), [p, _] = r.useMemo(() => {
                    let e = (0, C.groupProfileEffects)(n, l);
                    return [e.purchased, e.shopPreviews]
                }, [n, l]), [v, m] = r.useState(() => null != u ? u : void 0 !== d ? d : null == c ? null : null != c ? c : null), [g, N] = r.useMemo(() => {
                    var e;
                    let t = p.find(e => (null == e ? void 0 : e.id) === v),
                        n = null != t || null === v,
                        i = null !== (e = null != t ? t : _.find(e => (null == e ? void 0 : e.id) === v)) && void 0 !== e ? e : null;
                    return [i, n]
                }, [v, p, _]), {
                    category: R,
                    purchase: x
                } = (0, s.useStateFromStoresObject)([f.default, h.default], () => ({
                    category: f.default.getCategoryForProduct(null == g ? void 0 : g.skuId),
                    purchase: h.default.getPurchase(null == g ? void 0 : g.skuId)
                }), [g]), y = r.useRef(null), F = T.default.canUseCollectibles(t), {
                    shopForAllEnabled: U
                } = (0, E.default)({
                    location: "AvatarDecorationModal"
                }), b = v === (void 0 === d ? null != c ? c : null : d), w = r.useCallback(e => {
                    m(e)
                }, [m]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: M.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: M.modalHeadings,
                            children: (0, i.jsx)(a.HeadingLevel, {
                                component: (0, i.jsxs)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [P.default.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !F && !U && (0, i.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: P.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, i.jsx)(a.ModalCloseButton, {
                            className: M.modalCloseButton,
                            onClick: o
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: M.modalContent,
                        children: [(0, i.jsx)(A.default, {
                            user: t,
                            pendingProfileEffect: v,
                            selectedProfileEffectRef: y,
                            onSelect: w,
                            onClose: o
                        }), (0, i.jsx)(L.default, {
                            user: t,
                            canApplySelectedChange: N,
                            pendingProfileEffectRecord: g,
                            category: R,
                            purchase: x
                        })]
                    }), (0, i.jsx)(O, {
                        user: t,
                        onApply: () => {
                            (0, I.setNewPendingProfileEffectID)(v, c), o()
                        },
                        onClose: o,
                        category: R,
                        purchase: x,
                        canUseCollectibles: F,
                        selectedProfileEffectID: v,
                        disableApplyButton: b
                    })]
                })
            }

            function y(e) {
                var t;
                let {
                    transitionState: n,
                    analyticsLocations: o,
                    initialSelectedEffectID: f,
                    onClose: h
                } = e, {
                    isFetching: E,
                    categories: C,
                    purchases: _
                } = (0, p.default)(), I = (0, s.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
                    AnalyticsLocationProvider: S,
                    analyticsLocations: T
                } = (0, c.default)(o, u.default.EDIT_PROFILE_EFFECT_MODAL), L = (0, v.default)(null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : ""), A = null == L ? void 0 : L.profileEffectID;
                return r.useEffect(() => {
                    g.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: N.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: T
                    })
                }, [T]), r.useEffect(() => () => {
                    (0, d.setCollectiblesCategoryItemsViewed)({
                        categories: [...C.values()],
                        itemTypes: [l.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [C]), null == I ? null : (0, i.jsx)(S, {
                    children: (0, i.jsx)(a.ModalRoot, {
                        transitionState: n,
                        size: a.ModalSize.DYNAMIC,
                        className: M.modal,
                        children: E ? (0, i.jsx)(a.Spinner, {
                            className: M.spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(x, {
                            user: I,
                            categories: C,
                            purchases: _,
                            initialSelectedProfileEffectID: f,
                            currentSavedEffectID: A,
                            onClose: h
                        })
                    })
                })
            }
        },
        717262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                s = n("152584"),
                a = n("853987"),
                o = n("805172"),
                u = n("491232"),
                c = n("884351"),
                d = n("184900"),
                f = n("783142"),
                h = n("217513"),
                E = n("915639"),
                C = n("845579"),
                p = n("415167"),
                _ = n("790618"),
                I = n("697218");
            n("550515");
            var v = n("719923"),
                S = n("782340"),
                m = n("146252");
            let g = e => {
                    var t;
                    let {
                        effectIsOwned: n,
                        pendingProfileEffectRecord: s,
                        category: c,
                        purchase: d
                    } = e, f = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), h = (0, r.useStateFromStores)([a.default], () => a.default.getProduct(null == s ? void 0 : s.skuId)), C = (0, r.useStateFromStores)([E.default], () => E.default.locale), {
                        shopForAllEnabled: p
                    } = (0, o.default)({
                        location: "ProfileEffectPreview"
                    }), _ = v.default.canUseCollectibles(f), g = (0, u.isPremiumCollectiblesPurchase)(d), L = (0, u.isPremiumCollectiblesCategory)(c), A = !_ && g, N = T(A, L, _, p);
                    return null != s ? (0, i.jsx)("div", {
                        className: n ? m.effectDescriptionNoGradient : m.effectDescriptionBorderWithGradient,
                        children: (0, i.jsxs)("div", {
                            className: m.effectDescriptionContainer,
                            children: [(0, i.jsx)(l.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                className: m.effectName,
                                children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == h ? void 0 : h.name
                            }), (0, i.jsx)(l.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                className: m.effectDescription,
                                children: null != d ? d.summary : N
                            }), null != d && (0, i.jsxs)(l.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                className: m.effectPurchasedAt,
                                children: [S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                    date: d.purchasedAt.toLocaleDateString(C, {
                                        month: "long",
                                        year: "numeric"
                                    })
                                }), g && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("br", {}), S.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                                })]
                            })]
                        })
                    }) : null
                },
                T = (e, t, n, i) => e ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : !t && n || i ? S.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : S.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
            var L = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: l,
                    canApplySelectedChange: a,
                    category: o,
                    purchase: u
                } = e, {
                    pendingAvatar: E,
                    pendingBanner: I,
                    pendingBio: S,
                    pendingPronouns: T,
                    pendingGlobalName: L,
                    pendingAccentColor: A,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: R
                } = (0, r.useStateFromStoresObject)([_.default], () => {
                    let e = _.default.getAllPending(),
                        t = _.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), P = v.default.isPremium(n), M = (0, h.default)(n.id), O = !!(null == M ? void 0 : M.getPreviewBio(S).value), x = C.UseLegacyChatInput.useSetting(), y = x && null != S ? c.default.parse(void 0, S).content : S, F = v.default.canUsePremiumProfileCustomization(n), U = (null == M ? void 0 : M.canUsePremiumProfileCustomization) || F, b = {
                    user: n,
                    canUsePremiumCustomization: F,
                    onUpsellClick: p.default,
                    onAvatarChange: s.setPendingAvatar,
                    onBannerChange: f.setPendingBanner,
                    pendingBanner: I,
                    pendingBio: y,
                    pendingPronouns: T,
                    pendingAvatar: E,
                    pendingGlobalName: L,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: R,
                    pendingAccentColor: A,
                    pendingProfileEffectID: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
                    hideFakeActivity: O
                };
                return (0, i.jsxs)("div", {
                    className: U ? m.previewContainerWithTheme : m.previewContainerWithoutTheme,
                    children: [(0, i.jsx)(d.default, {
                        ...b,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, i.jsx)(g, {
                        effectIsOwned: a,
                        pendingProfileEffectRecord: l,
                        category: o,
                        purchase: u,
                        userIsPremium: P
                    })]
                })
            }
        },
        598854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("506838"),
                o = n("171210"),
                u = n("65597"),
                c = n("77078"),
                d = n("54239"),
                f = n("853987"),
                h = n("426497"),
                E = n("491232"),
                C = n("743826"),
                p = n("216422"),
                _ = n("468759"),
                I = n("600785"),
                v = n("956089"),
                S = n("719923"),
                m = n("845962"),
                g = n("326054"),
                T = n("49111"),
                L = n("782340"),
                A = n("361451"),
                N = n("513002");
            let R = () => 80,
                P = e => {
                    let {
                        children: t,
                        className: n,
                        isSelected: r = !1,
                        ...l
                    } = e;
                    return (0, i.jsx)(c.Clickable, {
                        className: s(A.effectGridItem, n, {
                            [A.selected]: r
                        }),
                        ...l,
                        onClick: l.onSelect,
                        children: t
                    })
                },
                M = e => {
                    var t;
                    let {
                        user: n,
                        profileEffect: l,
                        innerRef: s,
                        section: a,
                        isSelected: c,
                        ...d
                    } = e, C = (0, u.default)([m.default], () => m.default.getProfileEffectById(l.id)), _ = (0, u.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(l.skuId);
                        return (0, E.isPremiumCollectiblesCategory)(e)
                    }), T = (0, u.default)([h.default], () => h.default.isItemViewed(l)), R = r.useRef(null), {
                        accessibilityLabel: M,
                        thumbnailPreviewSrc: O,
                        title: x
                    } = null !== (t = null == C ? void 0 : C.config) && void 0 !== t ? t : {}, y = S.default.canUseCollectibles(n), F = a === g.Section.PREMIUM_PURCHASE && !y, [U, b] = r.useState(c);
                    return r.useEffect(() => {
                        c && b(!0)
                    }, [c]), (0, i.jsxs)(P, {
                        className: F && !c ? A.decorationGridItemChurned : void 0,
                        innerRef: null != s ? s : R,
                        isSelected: c,
                        ...d,
                        children: [(0, i.jsx)("img", {
                            src: N,
                            alt: M,
                            className: A.presetEffectBackground
                        }), (0, i.jsx)("img", {
                            className: A.presetEffectImg,
                            src: O,
                            alt: x
                        }), (() => {
                            let e = a === g.Section.PURCHASE || a === g.Section.PREMIUM_PURCHASE && y;
                            if (e) return null;
                            let t = !T && !c && !U;
                            return t ? (0, i.jsx)(v.PremiumBadge, {
                                className: A.newBadge,
                                text: (0, i.jsxs)("div", {
                                    className: A.newBadgeText,
                                    children: [(0, i.jsx)(I.default, {
                                        width: 12,
                                        height: 12
                                    }), L.default.Messages.NEW]
                                })
                            }) : (0, i.jsx)(v.IconBadge, {
                                icon: _ ? () => (0, i.jsx)(p.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, i.jsx)(I.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: o.default.BACKGROUND_ACCENT,
                                className: A.lockBadge
                            })
                        })()]
                    })
                };
            var O = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffect: r,
                    selectedProfileEffectRef: l,
                    onSelect: s,
                    onClose: o
                } = e, u = () => {
                    o(), (0, d.pushLayer)(T.Layers.COLLECTIBLES_SHOP)
                }, f = (0, g.default)(), h = null != r;
                return (0, i.jsx)("section", {
                    children: (0, i.jsx)(c.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: A.list,
                        columns: 3,
                        sections: f.map(e => {
                            let {
                                items: t
                            } = e;
                            return t.length
                        }),
                        renderItem: (e, t, o, d) => {
                            let {
                                section: E,
                                items: p
                            } = f[e];
                            return (0, a.match)(p[t]).with(g.NONE_ITEM, () => (0, i.jsxs)(P, {
                                style: {
                                    ...o
                                },
                                isSelected: !h,
                                onSelect: () => s(null),
                                children: [(0, i.jsx)(_.default, {
                                    className: A.notAllowedIcon
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: L.default.Messages.NONE
                                })]
                            }, d)).with(g.SHOP_ITEM, () => (0, i.jsxs)(P, {
                                style: o,
                                onSelect: u,
                                children: [(0, i.jsx)(C.default, {
                                    className: A.shopIcon
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: L.default.Messages.COLLECTIBLES_SHOP
                                })]
                            }, d)).otherwise(e => {
                                let t = r === e.id;
                                return (0, i.jsx)(M, {
                                    user: n,
                                    style: {
                                        ...o
                                    },
                                    section: E,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: () => s(e.id)
                                }, d)
                            })
                        },
                        renderSection: e => {
                            let {
                                header: t
                            } = f[e];
                            return (0, i.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, i.jsx)(c.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: () => 16,
                        getItemKey: (e, n) => {
                            var i;
                            return null !== (t = null === (i = f[e].items[n]) || void 0 === i ? void 0 : i.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: R,
                        removeEdgeItemGutters: !0
                    })
                })
            }
        },
        326054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Section: function() {
                    return r
                },
                NONE_ITEM: function() {
                    return C
                },
                SHOP_ITEM: function() {
                    return p
                },
                default: function() {
                    return _
                }
            });
            var i, r, l = n("884691"),
                s = n("917351"),
                a = n("65597"),
                o = n("853987"),
                u = n("775416"),
                c = n("805172"),
                d = n("491232"),
                f = n("697218"),
                h = n("719923"),
                E = n("782340");
            (i = r || (r = {})).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview";
            let C = {
                    id: "None"
                },
                p = {
                    id: "Shop"
                };
            var _ = () => {
                let e = (0, a.default)([f.default], () => f.default.getCurrentUser()),
                    t = h.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: n
                    } = (0, c.default)({
                        location: "useProfileEffectSections"
                    }),
                    i = (0, a.default)([u.default], () => u.default.purchases),
                    [_, I] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.categorySkuIdsByProductSkuId]);
                return (0, l.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, d.getProfileEffectsFromPurchases)(i), ...(0, d.getProfileEffectsFromCategories)(_)], "id"),
                        l = e.reduce((e, n) => {
                            let r = i.get(n.skuId),
                                l = (0, d.isPremiumCollectiblesPurchase)(r);
                            if (l) return e.premium_purchase.push(n), e;
                            if (null != r) return e.purchase.push(n), e;
                            let s = _.get(I[n.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(s)) {
                                let t = e.premium_purchase;
                                return t.push(n), e
                            }
                            return e.preview.push(n), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: []
                        }),
                        a = !!t || !!n || l.purchase.length > 0;
                    return [{
                        section: r.PURCHASE,
                        items: a ? [C, p, ...l.purchase] : [],
                        height: 12,
                        header: E.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: r.PREMIUM_PURCHASE,
                        items: l.premium_purchase,
                        height: 12,
                        header: E.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: r.PREVIEW,
                        items: l.preview,
                        height: 12,
                        header: E.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [_, i, I, t, n])
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        590456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserProfileSections: function() {
                    return l
                },
                UserProfileTypes: function() {
                    return s
                },
                getBadgeAsset: function() {
                    return o
                }
            });
            var i, r, l, s, a = n("49111");

            function o(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
            }(i = l || (l = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (r = s || (s = {})).POPOUT = "POPOUT", r.MODAL = "MODAL", r.SETTINGS = "SETTINGS", r.PANEL = "PANEL", r.CARD = "CARD", r.POMELO_POPOUT = "POMELO_POPOUT", r.CANCEL_MODAL = "CANCEL_MODAL"
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
            var i = n("913144"),
                r = n("327037"),
                l = n("697218"),
                s = n("506885"),
                a = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = a.ME,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, h = l.default.getUser(t), E = o !== a.ME ? o : void 0;
                if (null == h) return (0, r.fetchProfile)(t, {
                    friendToken: c,
                    guildId: E
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: u,
                        friendToken: c,
                        autoFocusNote: d,
                        analyticsLocation: f
                    })
                });
                (0, s.default)(t, h.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: E
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                })
            }

            function u() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        415167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("49111");

            function s() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("920067").then(n.bind(n, "920067"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        source: {
                            page: l.AnalyticsPages.USER_SETTINGS,
                            section: l.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                            object: l.AnalyticsObjects.BUTTON_CTA,
                            type: l.AnalyticsObjectTypes.BUY
                        }
                    })
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: s(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        275623: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("164538");

            function a(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)("div", {
                    className: l(s.gifTag, t),
                    ...n
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return I
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let E = {
                    [r.DEFAULT]: h.shineDefault,
                    [r.SMALL]: h.shineSmall
                },
                C = {
                    [r.DEFAULT]: h.shineInnerDefault,
                    [r.SMALL]: h.shineInnerSmall
                };
            class p extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, l.jsx)("div", {
                                className: C[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: r.DEFAULT
            };
            let _ = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: a,
                    pauseAnimation: u,
                    shineSize: f = r.DEFAULT,
                    shinePaused: E,
                    buttonShineClassName: C,
                    onlyShineOnHover: _,
                    ...I
                } = e, v = s.createRef(), S = (0, d.default)(v), m = !i && !a && !0 !== u && (!_ || S);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: v,
                    ...I,
                    className: o(h.shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, m ? (0, l.jsx)(p, {
                        shinePaused: E,
                        className: o(h.buttonShine, _ ? h.onlyShineOnHover : void 0, C),
                        shineSize: f
                    }) : null]
                })
            };
            _.ShineSizes = r;
            var I = _
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return o
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                a = () => (0, l.useLazyValue)(() => s()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: E = "currentColor",
                        transition: C = f.transition,
                        className: p,
                        foreground: _,
                        expanded: I,
                        ...v
                    } = e, {
                        enabled: S
                    } = (0, c.useRedesignIconContext)(), m = t;
                    if (!0 === I ? m = h.DOWN : !1 === I && (m = h.RIGHT), S) {
                        let e = {
                            [h.UP]: u.ChevronSmallUpIcon,
                            [h.DOWN]: s.ChevronSmallDownIcon,
                            [h.LEFT]: a.ChevronSmallLeftIcon,
                            [h.RIGHT]: o.ChevronSmallRightIcon
                        } [m];
                        return (0, i.jsx)(e, {
                            ...v,
                            className: p,
                            width: n,
                            height: r,
                            color: E,
                            colorClass: _
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(p, C, m),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(v),
                        children: (0, i.jsx)("path", {
                            className: _,
                            fill: "none",
                            stroke: E,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            E.Directions = h;
            var C = E
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        743826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("422244"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 23,
                        height: n = 18,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 23 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                            fill: r
                        })
                    })
                }, l.ShopIcon)
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: r,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, l.PencilIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        468759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    className: s,
                    foreground: a,
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    className: s,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.jsx)("path", {
                        className: a,
                        fill: l,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                })
            }
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: r
                        })
                    })
                }, l.PencilIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon)
        },
        550515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("828049"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z"
                        })
                    })
                }, l.RetryIcon)
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, l.LockIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, l.StageIcon)
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = l) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);