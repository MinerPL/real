(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13426"], {
        32974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
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
            var i = n("872717"),
                r = n("913144"),
                l = n("271560"),
                a = n("49111");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                        url: a.Endpoints.ENTITLEMENTS_FOR_USER,
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
                        url: a.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return a
                },
                updateAddressInfo: function() {
                    return s
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

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
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
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return d
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return f
                },
                fetchPremiumSubscriptionPlans: function() {
                    return E
                },
                resetSubscriptionPlanData: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("333805"),
                a = n("160299"),
                s = n("745279"),
                o = n("850068"),
                u = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        s = {};
                    null != t && (s.country_code = t), null != n && (s.payment_source_id = n), null != c && (s.include_unpublished = c), null != d && (s.revenue_surface = d), l.query = s, !a.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let f = await i.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: f.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, s.captureBillingException)(t), new l.default(t)
                }
            }

            function f(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function E(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(i => d(i, e, t, void 0, n)))
            }

            function h() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: s
                    })
                })
            }
        },
        828049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RetryIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.985 9.985 0 0 0-8-4C6.477 2 2 6.477 2 12s4.477 10 10 10c2.38 0 4.57-.833 6.286-2.223a1 1 0 0 0-1.258-1.554A8 8 0 0 1 4 12Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4Zm7 0a1 1 0 0 0-1 1v3.983a2.43 2.43 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Zm4 9.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.174-.07.372.053.372.24Z",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
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
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = r || (r = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
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
                    return a
                }
            });
            var i = n("65597"),
                r = n("42203"),
                l = n("337026");

            function a(e) {
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
                    return s
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
                a = (0, i.createExperiment)({
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

            function s() {
                let {
                    paymentsBlocked: e
                } = l.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = a.useExperiment({
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
                a = n("845962"),
                s = n("235898");

            function o() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: o
                } = (0, s.default)(), [u, c, d] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.isFetching, a.default.fetchError, a.default.profileEffects]);
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
                    return c
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("875212"),
                a = n("21526"),
                s = n("853987"),
                o = n("563775"),
                u = n("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, l.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, l.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                }), (0, o.default)({
                    location: t
                });
                let {
                    isFetching: n,
                    categories: c,
                    error: d
                } = function() {
                    var e;
                    let t = "useMaybeFetchCollectiblesCategories";
                    (0, l.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, l.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: t
                    });
                    let [n, u, c, d] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.error, null !== (e = s.default.lastFetched) && void 0 !== e ? e : 0, s.default.categories]);
                    return (0, i.useEffect)(() => {
                        !(n || u || Date.now() - c < 6e5) && (0, a.fetchCollectiblesCategories)()
                    }, [n, c, u]), {
                        isFetching: n,
                        categories: d,
                        error: u
                    }
                }(), {
                    isClaiming: f,
                    fetchError: E,
                    claimError: h,
                    isFetching: p,
                    purchases: C
                } = function() {
                    let e = "useFetchPurchases";
                    (0, l.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, l.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: e
                    });
                    let [t, n, s, c, d] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, a.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: s,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), _ = null !== (e = null != d ? d : E) && void 0 !== e ? e : h;
                return {
                    isFetching: n || p,
                    isFetchingCategories: n,
                    isFetchingPurchases: p,
                    isClaiming: f,
                    categories: c,
                    purchases: C,
                    error: _
                }
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = c.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, h = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, p = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, C = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var _ = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: h,
                enableVerificationForm: p,
                submitVerificationForm: C
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
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
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
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
                    return C
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return _
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                a = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                f = 150,
                E = 150,
                h = 1e3,
                p = 300,
                C = "Membership Gating",
                _ = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
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
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
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
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("77078"),
                c = n("159885"),
                d = n("694187"),
                f = n("49111"),
                E = n("782340"),
                h = n("911686");

            function p(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: a(h.imageUploaderIcon, t),
                    children: n
                })
            }
            class C extends r.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, r, l;
                    let {
                        image: s,
                        hint: o,
                        name: C,
                        makeURL: _,
                        disabled: I,
                        onChange: T,
                        showIcon: m,
                        showIconDisabled: g,
                        className: v,
                        imageClassName: S,
                        iconClassName: A,
                        iconWrapperClassName: N,
                        icon: L,
                        hideSize: R,
                        imageStyle: M,
                        showRemoveButton: O,
                        maxFileSizeBytes: P,
                        onFileSizeError: F,
                        onOpenImageSelectModal: y,
                        "aria-label": x
                    } = this.props;
                    if (null != (t = null != s && /^data:/.test(s) ? s : _(s)) ? n = 'url("'.concat(t, '")') : null != C && (r = (0, i.jsx)("div", {
                            className: h.imageUploaderAcronym,
                            children: (0, c.getAcronym)(C)
                        })), I) return (0, i.jsx)("div", {
                        className: a(h.imageUploader, h.disabled, v),
                        children: (0, i.jsxs)("div", {
                            className: a(h.imageUploaderInner, S),
                            style: {
                                ...M,
                                backgroundImage: n
                            },
                            children: [r, g && (0, i.jsx)("div", {
                                className: a(h.imageUploaderIcon, h.imageUploaderIconDisabled, A),
                                children: L
                            })]
                        })
                    });
                    null != s ? l = (0, i.jsx)(u.Anchor, {
                        className: h.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !R && (l = (0, i.jsx)("small", {
                        className: h.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let w = null !== (e = null != x ? x : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: a(h.imageUploader, v),
                        children: [(0, i.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: m ? a(h.imageUploaderIconWrapper, N) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: a(h.imageUploaderInner, S),
                                    style: {
                                        ...M,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != y ? (0, i.jsx)(u.Clickable, {
                                        className: h.imageUploaderFileInput,
                                        "aria-label": w,
                                        onClick: y
                                    }) : (0, i.jsx)(d.default, {
                                        ref: this.inputRef,
                                        onChange: T,
                                        className: h.imageUploaderFileInput,
                                        "aria-label": w,
                                        tabIndex: 0,
                                        maxFileSizeBytes: P,
                                        onFileSizeError: F
                                    })]
                                }), null != o && (0, i.jsx)("div", {
                                    className: h.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), m && (0, i.jsx)(p, {
                                    className: A,
                                    icon: L
                                })]
                            })
                        }), O ? l : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            C.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var _ = C
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return I
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return m
                },
                updateImpersonatedChannels: function() {
                    return v
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return A
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                h = n("38654"),
                p = n("507950"),
                C = n("49111"),
                _ = n("724210");

            function I(e, t) {
                E.default.track(C.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function T(e, t) {
                let n = h.default.getData(e);
                null != n && n.type === t.type && (E.default.track(C.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function m(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = d.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, _.isStaticChannelRoute)(t);
                if (!i && !c.default.can(C.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(C.Routes.CHANNEL(e, t.id))
                }
            }

            function v(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), T(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function S(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && v(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), T(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function A(e, t) {
                T(e, {
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
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: h,
                    onComplete: p,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: _,
                    analyticsObject: I,
                    analyticsLocation: T,
                    analyticsSourceLocation: m,
                    isGift: g = !1,
                    giftMessage: v,
                    subscriptionTier: S,
                    trialId: A,
                    postSuccessGuild: N,
                    openInvoiceId: L,
                    applicationId: R,
                    referralTrialOfferId: M,
                    giftRecipient: O,
                    returnRef: P
                } = null != e ? e : {}, F = !1, y = (0, r.v4)();
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
                            subscriptionTier: S,
                            skuId: S,
                            isGift: g,
                            giftMessage: v,
                            giftRecipient: O,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == h || h(e), e && (null == C || C())
                            },
                            onComplete: () => {
                                F = !0, null == p || p(), !g && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: _,
                            analyticsObject: I,
                            analyticsLocation: T,
                            analyticsSourceLocation: m,
                            trialId: A,
                            postSuccessGuild: N,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: R,
                            referralTrialOfferId: M,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !F && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != T ? T : I,
                            source: m,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != A,
                            application_id: R,
                            location_stack: _
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == h || h(F), F && (!g && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == C || C())
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
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
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
            var i, r, l, a;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return s
                }
            }), (l = i || (i = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.WINTER = 1] = "WINTER", (a = r || (r = {}))[a.SNOWGLOBE = 1] = "SNOWGLOBE", a[a.BOX = 2] = "BOX", a[a.CUP = 3] = "CUP", a[a.STANDARD_BOX = 4] = "STANDARD_BOX", a[a.CAKE = 5] = "CAKE", a[a.CHEST = 6] = "CHEST", a[a.COFFEE = 7] = "COFFEE";
            let s = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return h
                },
                maybeFetchPremiumLikelihood: function() {
                    return C
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return _
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                a = n("913144"),
                s = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
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
                    } = await l.default.get({
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

            function C(e) {
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
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    I(a, l, t, n)
                }, [a, l, t, n])
            }

            function I(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && p(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
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
                a = l;
            class s extends i.default.Store {
                initialize() {
                    a = l
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var o = new s(r.default, {
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
                a = n("850068"),
                s = n("271938"),
                o = n("160299"),
                u = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([s.default], () => s.default.isAuthenticated());
                return i.useEffect(() => {
                    l.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && a.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
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
            var a = n("140596"),
                s = n("49111");
            n("843455"), n("782340");

            function o() {
                a.default.getApplicationsShelfFetchState() === a.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(s.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
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
                    url: s.Endpoints.CHANNEL_INTEGRATIONS(e),
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
                return r.default.delete(s.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
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
                a = n("21121"),
                s = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, a.useInMainTabsExperiment)();
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
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let E = new Set(u.map(e => e.application.id)),
                    h = c.filter(e => !E.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: h,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i, r, l = n("446674"),
                a = n("913144"),
                s = n("653047"),
                o = n("946028");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FETCH_FAILED = 3] = "FETCH_FAILED";
            let u = new Map,
                c = new Map,
                d = [],
                f = r.NOT_FETCHED,
                E = [];
            class h extends l.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = u.get(e)) && void 0 !== t ? t : E
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = u.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return u
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : r.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return f
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function p(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            h.displayName = "PrivateChannelIntegrationStore";
            let C = new h(a.default, {
                LOGOUT() {
                    u.clear()
                },
                CONNECTION_OPEN() {
                    u.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || c.get(t) !== r.FETCH_FAILED) return !1;
                    c.set(t, r.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    f = r.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(s.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), f = r.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    f = r.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    u.set(t, null), c.set(t, r.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    u.set(t, p(n.map(o.createPrivateChannelIntegration))), c.set(t, r.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, r.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    u.set(t.channel_id, p([...n, (0, o.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, o.createPrivateChannelIntegration)(t),
                        r = n.findIndex(e => e.application.id === i.application.id),
                        l = [...n]; - 1 === r ? l.push(i) : l[r] = i, u.set(i.channel_id, p(l))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = u.get(t);
                    if (null == i) return !1;
                    u.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return u.delete(t.id)
                }
            });
            var _ = C
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
            var a = n("49111");
            let s = e => ({
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
                        } = await i.default.get(a.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(s);
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
                    return L
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("265586"),
                a = n("446674"),
                s = n("77078"),
                o = n("54239"),
                u = n("812204"),
                c = n("685665"),
                d = n("21526"),
                f = n("491232"),
                E = n("161009"),
                h = n("906932"),
                p = n("217513"),
                C = n("790618"),
                _ = n("697218"),
                I = n("599110"),
                T = n("717262"),
                m = n("598854"),
                g = n("49111"),
                v = n("782340"),
                S = n("811855");

            function A(e) {
                let {
                    onApply: t,
                    onClose: n,
                    canApplySelectedChange: r,
                    disableApplyButton: l
                } = e, a = r ? (0, i.jsx)(s.Button, {
                    onClick: t,
                    disabled: l,
                    children: v.default.Messages.PROFILE_EFFECT_MODAL_APPLY
                }) : (0, i.jsx)(s.Button, {
                    className: S.goToShopButton,
                    onClick: () => {
                        n(), (0, o.pushLayer)(g.Layers.COLLECTIBLES_SHOP)
                    },
                    children: v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                });
                return (0, i.jsx)(s.ModalFooter, {
                    className: S.modalFooter,
                    children: (0, i.jsxs)("div", {
                        className: S.buttonsRight,
                        children: [(0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            onClick: n,
                            children: v.default.Messages.CANCEL
                        }), a]
                    })
                })
            }

            function N(e) {
                let {
                    user: t,
                    purchasedProfileEffects: n,
                    previewEffects: l,
                    onClose: o,
                    initialSelectedProfileEffectID: u,
                    currentSavedEffectID: c
                } = e, d = (0, a.useStateFromStores)([C.default], () => C.default.getPendingProfileEffectID()), [f, E] = r.useState(() => null != u ? u : void 0 !== d ? d : null == c ? null : null != c ? c : null), [p, _] = r.useMemo(() => {
                    var e;
                    let t = n.find(e => (null == e ? void 0 : e.id) === f),
                        i = null != t || null === f,
                        r = null !== (e = null != t ? t : l.find(e => (null == e ? void 0 : e.id) === f)) && void 0 !== e ? e : null;
                    return [r, i]
                }, [f, n, l]), I = r.useRef(null), g = f === (void 0 === d ? null != c ? c : null : d), N = r.useCallback(e => {
                    E(e)
                }, [E]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        separator: !1,
                        className: S.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: S.modalHeadings,
                            children: (0, i.jsx)(s.HeadingLevel, {
                                component: (0, i.jsxs)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [v.default.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !1
                            })
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            className: S.modalCloseButton,
                            onClick: o
                        })]
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: S.modalContent,
                        children: [(0, i.jsx)(m.default, {
                            user: t,
                            pendingProfileEffect: f,
                            selectedProfileEffectRef: I,
                            purchasedProfileEffects: n,
                            previewEffects: l,
                            onSelect: N,
                            onClose: o
                        }), (0, i.jsx)(T.default, {
                            user: t,
                            canApplySelectedChange: _,
                            pendingProfileEffectRecord: p
                        })]
                    }), (0, i.jsx)(A, {
                        onApply: () => {
                            (0, h.setNewPendingProfileEffectID)(f, c), o()
                        },
                        onClose: o,
                        canApplySelectedChange: _,
                        disableApplyButton: g
                    })]
                })
            }

            function L(e) {
                var t;
                let {
                    transitionState: n,
                    analyticsLocations: o,
                    initialSelectedEffectID: h,
                    onClose: C
                } = e, {
                    isFetching: T,
                    categories: m,
                    purchases: v
                } = (0, E.default)(), A = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
                    AnalyticsLocationProvider: L,
                    analyticsLocations: R
                } = (0, c.default)(o, u.default.EDIT_PROFILE_EFFECT_MODAL), [M, O] = r.useMemo(() => {
                    let e = (0, f.groupProfileEffects)(m, v);
                    return [e.purchased, e.shopPreviews]
                }, [m, v]), P = (0, p.default)(null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : ""), F = null == P ? void 0 : P.profileEffectID;
                return r.useEffect(() => {
                    I.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: g.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: R
                    })
                }, [R]), r.useEffect(() => () => {
                    (0, d.setCollectiblesCategoryItemsViewed)({
                        categories: [...m.values()],
                        itemTypes: [l.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [m]), null == A ? null : (0, i.jsx)(L, {
                    children: (0, i.jsx)(s.ModalRoot, {
                        transitionState: n,
                        size: s.ModalSize.DYNAMIC,
                        className: S.modal,
                        children: T ? (0, i.jsx)(s.Spinner, {
                            className: S.spinner,
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(N, {
                            user: A,
                            purchasedProfileEffects: M,
                            previewEffects: O,
                            initialSelectedProfileEffectID: h,
                            currentSavedEffectID: F,
                            onClose: C
                        })
                    })
                })
            }
        },
        717262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("152584"),
                s = n("853987"),
                o = n("775416"),
                u = n("805172"),
                c = n("884351"),
                d = n("184900"),
                f = n("783142"),
                E = n("217513"),
                h = n("915639"),
                p = n("845579"),
                C = n("415167"),
                _ = n("790618");
            n("550515");
            var I = n("719923"),
                T = n("782340"),
                m = n("146252");
            let g = e => {
                var t;
                let {
                    effectIsOwned: n,
                    pendingProfileEffectRecord: a,
                    userIsPremium: c
                } = e, d = (0, r.useStateFromStores)([o.default], () => o.default.getPurchase(null == a ? void 0 : a.skuId)), f = (0, r.useStateFromStores)([s.default], () => s.default.getProduct(null == a ? void 0 : a.skuId)), E = (0, r.useStateFromStores)([h.default], () => h.default.locale), {
                    shopForAllEnabled: p
                } = (0, u.default)({
                    location: "ProfileEffectPreview"
                }), C = c || p ? T.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : T.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
                return null != a ? (0, i.jsx)("div", {
                    className: n ? m.effectDescriptionNoGradient : m.effectDescriptionBorderWithGradient,
                    children: (0, i.jsxs)("div", {
                        className: m.effectDescriptionContainer,
                        children: [(0, i.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: m.effectName,
                            children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == f ? void 0 : f.name
                        }), (0, i.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: m.effectDescription,
                            children: null != d ? d.summary : C
                        }), null != d && (0, i.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: m.effectPurchasedAt,
                            children: T.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: d.purchasedAt.toLocaleDateString(E, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            var v = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: l,
                    canApplySelectedChange: s
                } = e, {
                    pendingAvatar: o,
                    pendingBanner: u,
                    pendingBio: h,
                    pendingPronouns: T,
                    pendingGlobalName: v,
                    pendingAccentColor: S,
                    pendingAvatarDecoration: A,
                    pendingThemeColors: N
                } = (0, r.useStateFromStoresObject)([_.default], () => {
                    let e = _.default.getAllPending(),
                        t = _.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), L = I.default.isPremium(n), R = (0, E.default)(n.id), M = !!(null == R ? void 0 : R.getPreviewBio(h).value), O = p.UseLegacyChatInput.useSetting(), P = O && null != h ? c.default.parse(void 0, h).content : h, F = I.default.canUsePremiumProfileCustomization(n), y = (null == R ? void 0 : R.canUsePremiumProfileCustomization) || F, x = {
                    user: n,
                    canUsePremiumCustomization: F,
                    onUpsellClick: C.default,
                    onAvatarChange: a.setPendingAvatar,
                    onBannerChange: f.setPendingBanner,
                    pendingBanner: u,
                    pendingBio: P,
                    pendingPronouns: T,
                    pendingAvatar: o,
                    pendingGlobalName: v,
                    pendingAvatarDecoration: A,
                    pendingThemeColors: N,
                    pendingAccentColor: S,
                    pendingProfileEffectID: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
                    hideFakeActivity: M
                };
                return (0, i.jsxs)("div", {
                    className: y ? m.previewContainerWithTheme : m.previewContainerWithoutTheme,
                    children: [(0, i.jsx)(d.default, {
                        ...x,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, i.jsx)(g, {
                        effectIsOwned: s,
                        pendingProfileEffectRecord: l,
                        userIsPremium: L
                    })]
                })
            }
        },
        598854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, r, l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("506838"),
                c = n("171210"),
                d = n("65597"),
                f = n("77078"),
                E = n("54239"),
                h = n("426497"),
                p = n("805172"),
                C = n("743826"),
                _ = n("468759"),
                I = n("600785"),
                T = n("956089"),
                m = n("719923"),
                g = n("845962"),
                v = n("49111"),
                S = n("782340"),
                A = n("361451"),
                N = n("513002");
            (i = r || (r = {}))[i.PURCHASED = 0] = "PURCHASED", i[i.PREVIEW = 1] = "PREVIEW";
            let L = () => 80,
                R = e => {
                    let {
                        children: t,
                        isSelected: n = !1,
                        ...i
                    } = e;
                    return (0, l.jsx)(f.Clickable, {
                        className: o(A.effectGridItem, {
                            [A.selected]: n
                        }),
                        ...i,
                        onClick: i.onSelect,
                        children: t
                    })
                },
                M = e => {
                    var t;
                    let {
                        profileEffect: n,
                        innerRef: i,
                        section: s,
                        isSelected: o,
                        ...u
                    } = e, f = (0, d.default)([g.default], () => g.default.getProfileEffectById(n.id)), E = (0, d.default)([h.default], () => h.default.isItemViewed(n)), p = a.useRef(null), {
                        accessibilityLabel: C,
                        thumbnailPreviewSrc: _,
                        title: m
                    } = null !== (t = null == f ? void 0 : f.config) && void 0 !== t ? t : {}, [v, L] = a.useState(o);
                    return a.useEffect(() => {
                        o && L(!0)
                    }, [o]), (0, l.jsxs)(R, {
                        innerRef: null != i ? i : p,
                        isSelected: o,
                        ...u,
                        children: [(0, l.jsx)("img", {
                            src: N,
                            alt: C,
                            className: A.presetEffectBackground
                        }), (0, l.jsx)("img", {
                            className: A.presetEffectImg,
                            src: _,
                            alt: m
                        }), (() => {
                            let e = s === r.PURCHASED;
                            if (e) return null;
                            let t = !E && !o && !v;
                            return t ? (0, l.jsx)(T.PremiumBadge, {
                                className: A.newBadge,
                                text: (0, l.jsxs)("div", {
                                    className: A.newBadgeText,
                                    children: [(0, l.jsx)(I.default, {
                                        width: 12,
                                        height: 12
                                    }), S.default.Messages.NEW]
                                })
                            }) : (0, l.jsx)(T.IconBadge, {
                                icon: () => (0, l.jsx)(I.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: c.default.BACKGROUND_ACCENT,
                                className: A.lockBadge
                            })
                        })()]
                    })
                },
                O = {
                    id: -2
                },
                P = {
                    id: -1
                };
            var F = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffect: i,
                    selectedProfileEffectRef: s,
                    purchasedProfileEffects: o,
                    previewEffects: c,
                    onSelect: d,
                    onClose: h
                } = e, I = () => {
                    h(), (0, E.pushLayer)(v.Layers.COLLECTIBLES_SHOP)
                }, T = m.default.canUsePremiumProfileCustomization(n), g = o.length > 0, {
                    shopForAllEnabled: N
                } = (0, p.default)({
                    location: "ProfileEffectSelection"
                }), F = 0 === c.length, y = a.useMemo(() => {
                    let e = {
                            section: r.PURCHASED,
                            items: [O, P, ...o],
                            header: S.default.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                        },
                        t = {
                            section: r.PREVIEW,
                            items: c,
                            header: S.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                        },
                        n = !!g || T || N;
                    return F ? [e] : n ? [e, t] : [t]
                }, [o, c, T, g, F, N]), x = null != i;
                return (0, l.jsx)("section", {
                    children: (0, l.jsx)(f.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: A.list,
                        columns: 3,
                        sections: y.map(e => {
                            let {
                                items: t
                            } = e;
                            return t.length
                        }),
                        renderItem: (e, t, n, r) => {
                            let {
                                section: a,
                                items: o
                            } = y[e];
                            return (0, u.match)(o[t]).with(O, () => (0, l.jsxs)(R, {
                                style: {
                                    ...n
                                },
                                isSelected: !x,
                                onSelect: () => d(null),
                                children: [(0, l.jsx)(_.default, {
                                    className: A.notAllowedIcon
                                }), (0, l.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: S.default.Messages.NONE
                                })]
                            }, r)).with(P, () => (0, l.jsxs)(R, {
                                style: n,
                                onSelect: I,
                                children: [(0, l.jsx)(C.default, {
                                    className: A.shopIcon
                                }), (0, l.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: S.default.Messages.COLLECTIBLES_SHOP
                                })]
                            }, r)).otherwise(e => {
                                let t = i === e.id;
                                return (0, l.jsx)(M, {
                                    style: {
                                        ...n
                                    },
                                    section: a,
                                    profileEffect: e,
                                    innerRef: t ? s : void 0,
                                    isSelected: t,
                                    onSelect: () => d(e.id)
                                }, r)
                            })
                        },
                        renderSection: e => {
                            let {
                                header: t
                            } = y[e];
                            return (0, l.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, l.jsx)(f.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: () => 16,
                        getItemKey: (e, n) => {
                            var i;
                            return null !== (t = null === (i = y[e].items[n]) || void 0 === i ? void 0 : i.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: L,
                        removeEdgeItemGutters: !0
                    })
                })
            }
        },
        590456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserProfileSections: function() {
                    return l
                },
                UserProfileTypes: function() {
                    return a
                },
                getBadgeAsset: function() {
                    return o
                }
            });
            var i, r, l, a, s = n("49111");

            function o(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(s.Endpoints.BADGE_ICON(e))
            }(i = l || (l = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (r = a || (a = {})).POPOUT = "POPOUT", r.MODAL = "MODAL", r.SETTINGS = "SETTINGS", r.PANEL = "PANEL", r.CARD = "CARD", r.POMELO_POPOUT = "POMELO_POPOUT", r.CANCEL_MODAL = "CANCEL_MODAL"
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
                a = n("506885"),
                s = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = s.ME,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, E = l.default.getUser(t), h = o !== s.ME ? o : void 0;
                if (null == E) return (0, r.fetchProfile)(t, {
                    friendToken: c,
                    guildId: h
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
                (0, a.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: h
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("49111");

            function a() {
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
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                a = n("376556"),
                s = n("450205"),
                o = n("813006"),
                u = n("49111");
            let c = new Set([u.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                E = [],
                h = {},
                p = {},
                C = e => {
                    f = e.filter(e => !c.has(e.type) && a.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class _ extends i.default.Store {
                isJoining(e) {
                    return h[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return f
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return f.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return p[e] || !1
                }
            }
            _.displayName = "ConnectedAccountsStore";
            var I = new _(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    C(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        C(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    h[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = f.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function a() {
                l = []
            }
            class s extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            s.displayName = "LayerStore";
            var o = new s(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("414055"),
                s = n("12287"),
                o = n("988268"),
                u = n("782340"),
                c = n("647431");
            let d = e => {
                let t, {
                        invertColor: n = !1,
                        type: r = o.BotTagTypes.BOT,
                        className: d,
                        verified: f,
                        hideIcon: E = !1,
                        useRemSizes: h = !1,
                        children: p = []
                    } = e,
                    C = null,
                    _ = u.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (r) {
                    case o.BotTagTypes.SYSTEM_DM:
                    case o.BotTagTypes.OFFICIAL:
                        f = !0, _ = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, C = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case o.BotTagTypes.SERVER:
                        C = u.default.Messages.BOT_TAG_SERVER;
                        break;
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        C = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case o.BotTagTypes.STAFF_ONLY_DM:
                        C = u.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case o.BotTagTypes.AI:
                        f = !0, _ = u.default.Messages.AI_GENERATED_TOOLTIP, C = u.default.Messages.AI_TAG;
                        break;
                    case o.BotTagTypes.REMIX:
                        f = !1, C = u.default.Messages.REMIXING_TAG;
                        break;
                    case o.BotTagTypes.BOT:
                    default:
                        C = u.default.Messages.BOT_TAG_BOT
                }
                let I = r === o.BotTagTypes.ORIGINAL_POSTER,
                    T = r === o.BotTagTypes.REMIX,
                    m = null;
                f && (m = (0, i.jsx)(a.Tooltip, {
                    text: _,
                    align: "center",
                    position: "top",
                    children: e => (0, i.jsx)(s.default, {
                        ...e,
                        className: c.botTagVerified
                    })
                })), t = r === o.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
                let g = e => (0, i.jsxs)("span", {
                    ...e,
                    className: l(d, t, h ? c.rem : c.px, {
                        [c.botTagOP]: I,
                        [c.botTagRemix]: T
                    }),
                    children: [E ? null : m, p, (0, i.jsx)("span", {
                        className: c.botText,
                        children: C
                    })]
                });
                switch (r) {
                    case o.BotTagTypes.REMIX:
                        return (0, i.jsx)(a.Tooltip, {
                            text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => g(e)
                        });
                    case o.BotTagTypes.ORIGINAL_POSTER:
                        return (0, i.jsx)(a.Tooltip, {
                            text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => g(e)
                        });
                    default:
                        return g()
                }
            };
            d.Types = o.BotTagTypes;
            var f = d
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
                a = n.n(l),
                s = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), E = (0, s.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: a(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...d,
                        className: a(c, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: E
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("164538");

            function s(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)("div", {
                    className: l(a.gifTag, t),
                    ...n
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return I
                }
            });
            var i, r, l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let h = {
                    [r.DEFAULT]: E.shineDefault,
                    [r.SMALL]: E.shineSmall
                },
                p = {
                    [r.DEFAULT]: E.shineInnerDefault,
                    [r.SMALL]: E.shineInnerSmall
                };
            class C extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: h[t],
                            children: (0, l.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: r.DEFAULT
            };
            let _ = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: f = r.DEFAULT,
                    shinePaused: h,
                    buttonShineClassName: p,
                    onlyShineOnHover: _,
                    ...I
                } = e, T = a.createRef(), m = (0, d.default)(T), g = !i && !s && !0 !== u && (!_ || m);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: T,
                    ...I,
                    className: o(E.shinyButton, n),
                    disabled: i,
                    submitting: s,
                    children: [t, g ? (0, l.jsx)(C, {
                        shinePaused: h,
                        className: o(E.buttonShine, _ ? E.onlyShineOnHover : void 0, p),
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
                    return a
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, l.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
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
                        height: r = 24,
                        color: h = "currentColor",
                        transition: p = f.transition,
                        className: C,
                        foreground: _,
                        expanded: I,
                        ...T
                    } = e, {
                        enabled: m
                    } = (0, c.useRedesignIconContext)(), g = t;
                    if (!0 === I ? g = E.DOWN : !1 === I && (g = E.RIGHT), m) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: a.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [g];
                        return (0, i.jsx)(e, {
                            ...T,
                            className: C,
                            width: n,
                            height: r,
                            color: h,
                            colorClass: _
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(C, p, g),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(T),
                        children: (0, i.jsx)("path", {
                            className: _,
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
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("422244"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 23,
                        height: n = 18,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
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
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: a,
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
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
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("753809"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                className: l,
                                fill: r,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, i.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, l.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: s,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        className: l,
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(o),
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.LockIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: s,
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
                    className: a,
                    foreground: s,
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    className: a,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.jsx)("path", {
                        className: s,
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("828049"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("427027"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                }, l.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
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
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("276825"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                a = n("471671");

            function s() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class a {
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
            let a = (0, r.v4)(),
                s = new Map,
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
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, r.v4)()) : this.elementId = a;
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