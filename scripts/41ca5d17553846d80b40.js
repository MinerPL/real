(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75917"], {
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
            var l = n("872717"),
                r = n("913144"),
                i = n("271560"),
                s = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), l.default.get({
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
                    entitlementType: i
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await l.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: i
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
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
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
                    return i
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
            var l = n("913144");

            function r(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
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
                    return r
                }
            });
            var l = n("913144");

            function r() {
                l.default.dispatch({
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
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
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        639055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeDropperIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.629 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.5 2.5 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.161.41-.24.748-.632.827-1.1a5 5 0 0 1 1.394-2.704l4.829-4.828Z",
                        className: a
                    })
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        49097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SparklesIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M18.139 2.793c-.392-1.057-1.886-1.057-2.278 0l-.51 1.377a2 2 0 0 1-1.18 1.182l-1.378.51c-1.057.39-1.057 1.885 0 2.277l1.377.51a2 2 0 0 1 1.182 1.18l.51 1.378c.39 1.057 1.885 1.057 2.277 0l.51-1.377a2 2 0 0 1 1.18-1.182l1.378-.51c1.057-.39 1.057-1.885 0-2.277l-1.377-.51a2 2 0 0 1-1.182-1.18l-.51-1.378ZM10.594 9.11c-.547-1.48-2.64-1.48-3.188 0l-.841 2.273a2 2 0 0 1-1.182 1.182l-2.273.841c-1.48.547-1.48 2.64 0 3.188l2.273.841a2 2 0 0 1 1.182 1.182l.841 2.273c.548 1.48 2.64 1.48 3.188 0l.841-2.273a2 2 0 0 1 1.182-1.182l2.273-.841c1.48-.547 1.48-2.64 0-3.188l-2.273-.841a2 2 0 0 1-1.182-1.182l-.841-2.273Z",
                        className: a
                    })
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        449826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UndoIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2 8a1 1 0 0 1 2 0v3.536C5.928 8.799 8.94 7 12.375 7c4.237 0 7.83 2.738 9.54 6.595a1 1 0 1 1-1.83.81C18.645 11.15 15.697 9 12.376 9c-2.816 0-5.364 1.546-6.952 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
                        className: a
                    })
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
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, l.jsx)("path", {
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
                    return i
                }
            });
            var l = n("884691"),
                r = n("599110");
            let i = () => l.useContext(r.AnalyticsContext)
        },
        248559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                r = () => {
                    let [e, t] = (0, l.useState)(null);
                    return (0, l.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
                    }, []), e
                }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");

            function r(e) {
                let [t, n] = (0, l.useState)(!1), r = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [r]), t
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691");
            let r = l.createContext(void 0);
            var i = r
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("49111");

            function r(e, t) {
                return t !== l.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("871388"),
                r = n("49111");

            function i(e) {
                return (0, l.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return R
                },
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("446674"),
                s = n("77078"),
                a = n("305961"),
                o = n("145131"),
                u = n("599110"),
                c = n("335189"),
                d = n("473591"),
                f = n("980215"),
                E = n("879253"),
                h = n("709594"),
                _ = n("49111"),
                p = n("782340"),
                C = n("947399");

            function R(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: R,
                    isFetchingSettings: I,
                    isSavingSettings: m,
                    hasPendingChanges: v,
                    errors: g
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    settings: d.default.getSettings(n),
                    isFetchingSettings: d.default.isFetchingSettings(n),
                    isSavingSettings: d.default.isSavingSettings(),
                    hasPendingChanges: d.default.hasPendingChanges(),
                    errors: d.default.getErrors()
                })), S = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(n)), T = (0, f.useClydeProfilesEnabled)(S), [L, N] = r.useState(!1);
                r.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
                    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
                }), []), r.useEffect(() => {
                    (0, c.fetchClydeSettings)(n, !0)
                }, [n]), r.useEffect(() => {
                    (v || null != g) && N(!1)
                }, [v, g]);
                let x = async () => {
                    if (null == n || !d.default.hasPendingChanges()) return;
                    let e = d.default.getPendingUpdates();
                    await (0, c.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), N(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)("div", {
                            className: C.heading,
                            children: (0, l.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: p.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, l.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, l.jsx)(s.ScrollerAuto, {
                        className: C.content,
                        children: I || null == R ? (0, l.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [T && (0, l.jsx)(h.default, {
                                guildId: n
                            }), null != R && (0, l.jsx)("div", {
                                className: C.section,
                                children: (0, l.jsx)(E.ClydeEditProfileModalPersonalitySection, {
                                    settings: R
                                })
                            })]
                        })
                    }), (0, l.jsxs)(s.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: C.footer,
                        children: [(0, l.jsx)("div", {
                            className: C.resetButtonContainer,
                            children: (0, l.jsx)(s.Button, {
                                onClick: () => {
                                    (0, c.resetPendingChanges)(), u.default.track(_.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !v,
                                children: p.default.Messages.RESET
                            })
                        }), v && null == g && (0, l.jsx)("div", {
                            className: C.pendingChangesMessage,
                            children: p.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), L && (0, l.jsx)("div", {
                            className: C.successfullSaveMessage,
                            children: p.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != g && (0, l.jsx)("div", {
                            className: C.errorMessage,
                            children: p.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(s.Button, {
                                onClick: x,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: m,
                                disabled: !v,
                                children: p.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: r
                } = e;
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, l.jsx)(R, {
                        onClose: n,
                        guildId: r
                    })
                })
            }
        },
        879253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return C
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("65597"),
                s = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                c = n("599110"),
                d = n("335189"),
                f = n("473591"),
                E = n("680894"),
                h = n("49111"),
                _ = n("782340"),
                p = n("192731");

            function C(e) {
                var t;
                let {
                    settings: n
                } = e, [C, R] = r.useState(!1), [I, m] = r.useState(), {
                    pendingPersonality: v,
                    errors: g
                } = (0, i.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [S, T] = r.useState(), L = null != v && I === v, N = null != g && Number(g.code) === h.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? g.message : void 0, x = L ? _.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : _.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, l.jsxs)(a.default, {
                    title: _.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, l.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: p.description,
                        children: [_.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(s.Anchor, {
                            href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: _.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, l.jsx)(s.TextArea, {
                        value: null !== (t = null != v ? v : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, d.setPendingPersonality)(e)
                        },
                        placeholder: _.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: C,
                        autosize: !0
                    }), null != N ? (0, l.jsx)(s.FormErrorBlock, {
                        className: p.errorBlock,
                        children: N
                    }) : null, (0, l.jsxs)("div", {
                        className: p.generateButtonContainer,
                        children: [(0, l.jsx)(s.Button, {
                            color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: p.generateButton,
                            onClick: () => {
                                if (L && null != S) {
                                    (0, d.setPendingPersonality)(S), T(void 0);
                                    return
                                }
                                null != v && "" !== v.trim() && (c.default.track(h.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), R(!0), (0, d.generatePersonality)(v).then(e => {
                                    null != e && (T(v), m(e), (0, d.setPendingPersonality)(e, !0)), R(!1)
                                }))
                            },
                            disabled: null == v || "" === v.trim(),
                            submitting: C,
                            children: L ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: p.buttonIcon
                                }), _.default.Messages.UNDO]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: p.buttonIcon
                                }), _.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: x
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                s = n("446674"),
                a = n("184900"),
                o = n("11899"),
                u = n("447645"),
                c = n("569460"),
                d = n("52704"),
                f = n("121370"),
                E = n("26989"),
                h = n("305961"),
                _ = n("697218"),
                p = n("335189"),
                C = n("473591"),
                R = n("680894"),
                I = n("782340"),
                m = n("618641");

            function v(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: r,
                    pendingThemeColors: i
                } = (0, s.useStateFromStoresObject)([C.default], () => C.default.getPendingUpdates()), a = (0, s.useStateFromStores)([E.default], () => E.default.getMember(t, R.CLYDE_AI_USER_ID));
                return (0, l.jsxs)("div", {
                    className: m.editProfileSections,
                    children: [(0, l.jsx)(c.default, {
                        placeholder: I.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: r,
                        onGlobalNameChange: p.setPendingNick
                    }), (0, l.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: p.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: I.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, l.jsx)(d.default, {
                        guildId: t,
                        onBannerChange: p.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, l.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != i ? i : void 0,
                        onThemeColorsChange: p.setPendingThemeColors
                    })]
                })
            }

            function g(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: r,
                    pendingBanner: u,
                    pendingThemeColors: c
                } = (0, s.useStateFromStoresObject)([C.default], () => C.default.getPendingUpdates()), d = (0, s.useStateFromStores)([_.default], () => _.default.getUser(R.CLYDE_AI_USER_ID));
                i(null != d, "Clyde User must exist");
                let f = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(t));
                return (0, l.jsx)(o.default, {
                    className: m.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, l.jsx)(a.default, {
                        user: d,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: p.setPendingAvatar,
                        onBannerChange: p.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: r,
                        pendingBanner: u,
                        pendingThemeColors: null != c ? c : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, l.jsx)(v, {
                        guildId: t,
                        clydeUser: d
                    })
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
            var l = n("37983");
            n("884691");
            var r = n("748820"),
                i = n("77078"),
                s = n("112679"),
                a = n("55689"),
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
                    onComplete: _,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: C,
                    analyticsObject: R,
                    analyticsLocation: I,
                    analyticsSourceLocation: m,
                    isGift: v = !1,
                    giftMessage: g,
                    subscriptionTier: S,
                    trialId: T,
                    postSuccessGuild: L,
                    openInvoiceId: N,
                    applicationId: x,
                    referralTrialOfferId: A,
                    giftRecipient: M,
                    returnRef: P
                } = null != e ? e : {}, O = !1, b = (0, r.v4)();
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...i
                        } = n;
                        return (0, l.jsx)(e, {
                            ...i,
                            loadId: b,
                            subscriptionTier: S,
                            skuId: S,
                            isGift: v,
                            giftMessage: g,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == h || h(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                O = !0, null == _ || _(), !v && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: C,
                            analyticsObject: R,
                            analyticsLocation: I,
                            analyticsSourceLocation: m,
                            trialId: T,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: x,
                            referralTrialOfferId: A,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : R,
                            source: m,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: v,
                            eligible_for_trial: null != T,
                            application_id: x,
                            location_stack: C
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == h || h(O), O && (!v && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
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
                    return i
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
            var l = n("913144");
            let r = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                i = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
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
            let l, r;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                s = n("913144");

            function a() {
                l = !1, r = null
            }
            a();
            class o extends i.default.Store {
                get hasCompletedStepDuringSession() {
                    return l
                }
                get activeSubstep() {
                    return r
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(s.default, {
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
                    r = t
                },
                LOGOUT: function() {
                    a()
                }
            })
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return c
                },
                resolveReferralTrialOffer: function() {
                    return d
                }
            });
            var l = n("872717"),
                r = n("913144"),
                i = n("819689"),
                s = n("18494"),
                a = n("49111");
            let o = () => (r.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), l.default.get({
                    url: a.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), l.default.post({
                    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    var t;
                    let n = await l.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (e) {
                    if (r.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && i.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function d(e) {
                try {
                    var t;
                    let n = await l.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (t) {
                    r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("637612"),
                r = n("446674"),
                i = n("913144"),
                s = n("697218"),
                a = n("179935"),
                o = n("49111");
            let u = null,
                c = {},
                d = [],
                f = new Set,
                E = !1,
                h = new Set,
                _ = new Set,
                p = {},
                C = 0,
                R = null,
                I = () => !0;

            function m(e) {
                h.add(e)
            }

            function v(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => g(e))
            }

            function g(e) {
                let t = e.type === l.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!_.has(t) && !h.has(t)) {
                    var n;
                    n = t, h.add(n), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class S extends r.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], I)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !E && C < 5 && (null == R || R < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == d ? [] : d
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return p[e]
                }
                isResolving(e) {
                    return h.has(e)
                }
            }
            S.displayName = "ReferralTrialStore";
            var T = new S(i.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !h.has(t)) {
                        var l;
                        l = t, h.add(l), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    E = !1, u = t, d = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, C += 1, R = Date.now() + 1e3 * Math.pow(2, C)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    f.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    c[t] = n, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, a.fetchReferralsRemaining)(), p[t.id] = t, d = [...d, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (h.delete(t.id), _.add(t.id), p[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    h.delete(t), _.add(t)
                },
                LOAD_MESSAGES_SUCCESS: v,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    g(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: v,
                LOGOUT: function() {
                    u = null, c = {}, d = [], f = new Set, E = !1, h = new Set, _ = new Set, p = {}, C = 0, R = null
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
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return C
                }
            });
            var l = n("884691"),
                r = n("65597"),
                i = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let h = "nonSubscriber";
            async function _() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
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
                }), l = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                R(r, l, t, n)
            }

            function C(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                l.useEffect(() => {
                    R(s, i, t, n)
                }, [s, i, t, n])
            }

            function R(e, t, n, l) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), l && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                r = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = i;
            class a extends l.default.Store {
                initialize() {
                    s = i
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
                    return i
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
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
            var i = r
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var l = n("65597"),
                r = n("340412"),
                i = n("540692"),
                s = n("833516"),
                a = n("646718");

            function o(e) {
                var t, n, o, u;
                let c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    d = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    h = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    _ = (0, l.default)([i.default], () => void 0 === e ? null : i.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (o = null !== (n = null !== (t = null != c ? c : _) && void 0 !== t ? t : d) && void 0 !== n ? n : f) && void 0 !== o ? o : E) && void 0 !== u ? u : h
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return c
                }
            });
            var l = n("884691"),
                r = n("446674"),
                i = n("862337"),
                s = n("697218"),
                a = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [n, c] = l.useState(u(t)),
                    d = (0, r.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new i.Timeout,
                            l = () => {
                                let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(r, () => {
                                    !n && u(t) ? c(!0) : l()
                                })
                            };
                        return l(), () => e.stop()
                    }
                }, [n, t]), n || d ? null : t
            }
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("748820"),
                o = n("509043"),
                u = n("669491"),
                c = n("77078"),
                d = n("634634"),
                f = n("449918"),
                E = n("973262"),
                h = n("832132"),
                _ = n("771325"),
                p = n("49111"),
                C = n("782340"),
                R = n("727125");

            function I(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: i,
                    suggestedColors: I,
                    disabled: m,
                    label: v,
                    colorPickerMiddle: g,
                    colorPickerFooter: S,
                    showEyeDropper: T
                } = e, L = r.useRef(null), N = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), x = u.default.colors.BACKGROUND_ACCENT.css, A = (0, _.isColorDark)(i), M = (0, o.int2hex)(i), P = M === N ? x : M, O = (0, f.getColor)(A ? p.Color.WHITE_500 : p.Color.PRIMARY_530), b = (0, d.default)(g), y = (0, d.default)(S), [j, U] = r.useState((0, a.v4)());
                return r.useEffect(() => {
                    (b !== g || y !== S) && U((0, a.v4)())
                }, [S, g, y, b]), (0, l.jsx)(c.Popout, {
                    positionKey: j,
                    renderPopout: e => (0, l.jsx)(E.CustomColorPicker, {
                        ...e,
                        value: i,
                        onChange: t,
                        suggestedColors: I,
                        middle: g,
                        footer: S,
                        showEyeDropper: T
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, l.jsxs)("div", {
                            ref: L,
                            className: s(R.colorSwatch, {
                                [R.disabled]: m
                            }),
                            children: [(0, l.jsx)(c.Clickable, {
                                ...n,
                                tabIndex: m ? -1 : 0,
                                onClick: m ? p.NOOP : t,
                                style: {
                                    backgroundColor: M,
                                    borderColor: P
                                },
                                className: R.swatch,
                                "aria-label": C.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: L
                                },
                                children: (0, l.jsx)(h.default, {
                                    className: R.editPencilIcon,
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
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function c(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, l.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, l.jsx)(s.Clickable, {
                        ...e,
                        children: (0, l.jsx)(a.default, {
                            className: i(u.nitroWheel, n)
                        })
                    })
                })
            }
        },
        11899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("394846"),
                a = n("77078"),
                o = n("570697"),
                u = n("782340"),
                c = n("56438");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: r,
                    profilePreview: d,
                    previewTitle: f
                } = e, E = () => (0, l.jsx)(o.default, {
                    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: c.preview,
                    children: d
                });
                return (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsxs)(a.FormSection, {
                        className: c.profileCustomizationSection,
                        children: [s.isMobile && E(), (0, l.jsxs)("div", {
                            className: i(c.baseLayout, r),
                            children: [t, !s.isMobile && E()]
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
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("359223");
            let E = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function h(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: r,
                    sectionTitle: h,
                    changeAvatarButtonText: _,
                    guildId: p,
                    className: C,
                    disabled: R = !1,
                    isTryItOutFlow: I = !1,
                    forcedDivider: m,
                    withHighlight: v = !1
                } = e, g = v ? a.default : s.Button;
                return (0, l.jsx)(u.default, {
                    className: C,
                    title: h,
                    errors: n,
                    disabled: R,
                    forcedDivider: m,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(g, {
                            className: i({
                                [f.buttonHighlighted]: v
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, p, I, I ? E : void 0),
                            children: null != _ ? _ : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, l.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != p ? d.default.Messages.USER_SETTINGS_RESET_AVATAR : d.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("65597"),
                a = n("77078"),
                o = n("70723"),
                u = n("254490"),
                c = n("891653"),
                d = n("632892"),
                f = n("646718"),
                E = n("326908");

            function h(e) {
                let {
                    errors: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => (0, l.jsx)(a.Text, {
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

            function _(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: u,
                    children: _,
                    className: p,
                    errors: C,
                    disabled: R = !1,
                    hideDivider: I = !1,
                    showBorder: m = !1,
                    borderType: v,
                    hasBackground: g = !1,
                    forcedDivider: S = !1,
                    showPremiumIcon: T = !1
                } = e, L = (0, s.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, l.jsx)("div", {
                    className: i(E.customizationSection, p, {
                        [E.disabled]: R,
                        [E.hideDivider]: I,
                        [E.showBorder]: m,
                        [E.withDivider]: S
                    }),
                    children: (0, l.jsxs)(d.default, {
                        className: E.customizationSectionBorder,
                        backgroundClassName: E.customizationSectionBackground,
                        isShown: m && !L,
                        type: v,
                        hasBackground: g,
                        children: [(0, l.jsxs)(a.FormTitle, {
                            className: E.title,
                            id: r,
                            children: [t, T && (0, l.jsx)(c.default, {}), n]
                        }), null != u ? (0, l.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: E.sectionDescription,
                            children: u
                        }) : null, _, null != C && (0, l.jsx)(h, {
                            errors: C
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
            var l = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("570697"),
                s = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, l.jsx)(i.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, l.jsx)("div", {
                        children: (0, l.jsx)(r.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: s.DISPLAY_NAME_MAX_LENGTH,
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
                    return r
                },
                default: function() {
                    return d
                }
            });
            var l, r, i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("623682");
            (l = r || (r = {})).PREMIUM = "premium", l.LIMITED = "limited";
            let c = {
                [r.PREMIUM]: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                [r.LIMITED]: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var d = s.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: l = r.PREMIUM,
                    isShown: s,
                    hasBackground: a = !1,
                    className: d,
                    backgroundClassName: f
                } = e;
                if (!s) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                let {
                    border: E,
                    background: h
                } = c[l];
                return (0, i.jsx)("div", {
                    ref: t,
                    className: o(E, d),
                    children: (0, i.jsx)("div", {
                        className: o(a ? h : u.background, f),
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
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                c = n("75015"),
                d = n("782340"),
                f = n("650130");

            function E(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: r,
                    guildId: E,
                    className: h,
                    disabled: _ = !1,
                    showPremiumIcon: p = !0,
                    isTryItOutFlow: C = !1,
                    forcedDivider: R,
                    withHighlight: I = !1
                } = e, m = I ? a.default : s.Button;
                return (0, l.jsx)(u.default, {
                    className: h,
                    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: p,
                    errors: n,
                    disabled: _,
                    forcedDivider: R,
                    children: (0, l.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, l.jsx)(m, {
                            className: i({
                                [f.buttonHighlighted]: I
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, E, C, void 0),
                            children: d.default.Messages.CHANGE_BANNER
                        }), t && (0, l.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != E ? d.default.Messages.USER_SETTINGS_RESET_BANNER : d.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("969176"),
                a = n.n(s),
                o = n("669491"),
                u = n("77078"),
                c = n("462274"),
                d = n("217513"),
                f = n("528438"),
                E = n("719923"),
                h = n("409214"),
                _ = n("570697"),
                p = n("782340"),
                C = n("431416");

            function R(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: r,
                    onThemeColorsChange: s,
                    preventDisabled: R,
                    guildId: I,
                    className: m,
                    showPremiumIcon: v = !0,
                    showResetThemeButton: g = !1,
                    forcedDivider: S
                } = e, T = (0, d.default)(t.id, I), [L, N] = (0, f.default)(t, T, {
                    pendingThemeColors: r,
                    isPreview: !0
                }), x = E.default.canUsePremiumProfileCustomization(t), A = null != n ? n : t.getAvatarURL(I, 80), M = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), P = (0, c.useAvatarColors)(A, M, !1);
                if (null == L || null == N) return null;
                let O = e => {
                    let t = a(e, null == T ? void 0 : T.themeColors);
                    s(t ? void 0 : e)
                };
                return (0, l.jsx)(_.default, {
                    title: p.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !x && !R,
                    className: i(C.profileThemesSection, m),
                    showPremiumIcon: v,
                    forcedDivider: S,
                    children: (0, l.jsxs)("div", {
                        className: C.sectionContainer,
                        children: [(0, l.jsx)("div", {
                            className: C.sparkleContainer,
                            children: (0, l.jsx)(h.default, {
                                onChange: e => O([e, N]),
                                color: L,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: C.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: C.sparkleContainer,
                            children: (0, l.jsx)(h.default, {
                                onChange: e => O([L, e]),
                                color: N,
                                suggestedColors: P,
                                showEyeDropper: !0,
                                label: (0, l.jsx)(u.Text, {
                                    className: C.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), g && null != I && (0, l.jsx)(u.Button, {
                            className: C.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => O([null, null]),
                            children: p.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
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
                r = n("327037"),
                i = n("697218"),
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
                } = e, E = i.default.getUser(t), h = o !== a.ME ? o : void 0;
                if (null == E) return (0, r.fetchProfile)(t, {
                    friendToken: c,
                    guildId: h
                }).then(() => {
                    l.default.dispatch({
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
                (0, s.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: h
                }), l.default.dispatch({
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
                l.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        973262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DefaultColorButton: function() {
                    return v
                },
                CustomColorButton: function() {
                    return g
                },
                CustomColorPicker: function() {
                    return S
                },
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("974667"),
                o = n("509043"),
                u = n("77078"),
                c = n("248559"),
                d = n("449918"),
                f = n("526975"),
                E = n("36694"),
                h = n("422403"),
                _ = n("664336"),
                p = n("49111"),
                C = n("782340"),
                R = n("169225");
            let I = () => Promise.resolve();

            function m(e) {
                let {
                    color: t,
                    isDefault: n = !1,
                    isCustom: r = !1,
                    isSelected: i = !1,
                    disabled: c = !1,
                    style: f = {},
                    onClick: _,
                    "aria-label": C
                } = e, I = (0, a.useListItem)("color-".concat(t)), m = null != t ? (0, o.int2hex)(t) : f.backgroundColor, v = !1;
                return r && !i ? v = !0 : (r || i) && (v = (0, o.getDarkness)(t) > .1), (0, l.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, l.jsxs)("button", {
                        type: "button",
                        className: s(R.colorPickerSwatch, {
                            [R.disabled]: c,
                            [R.default]: n,
                            [R.custom]: r,
                            [R.noColor]: null == t
                        }),
                        disabled: c,
                        onClick: () => null == _ ? void 0 : _(t),
                        style: {
                            ...f,
                            backgroundColor: m
                        },
                        "aria-label": null != C ? C : m,
                        ...I,
                        children: [r ? (0, l.jsx)(h.default, {
                            className: R.colorPickerDropper,
                            foreground: R.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(v ? p.Color.WHITE_500 : p.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                t = 16;
                            if ((r || n) && (e = 32, t = 24), i) return (0, l.jsx)(E.default, {
                                width: e,
                                height: t,
                                color: (0, d.getColor)(v ? p.Color.WHITE_500 : p.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class v extends r.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: t,
                        value: n,
                        disabled: r
                    } = this.props;
                    return (0, l.jsx)(m, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === n || 0 === n,
                        onClick: t,
                        disabled: r
                    })
                }
            }
            class g extends r.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: t,
                        disabled: n,
                        "aria-label": r
                    } = this.props;
                    return (0, l.jsx)(m, {
                        isCustom: !0,
                        color: e,
                        isSelected: t === e,
                        disabled: n,
                        "aria-label": r
                    })
                }
            }
            let S = r.memo(e => {
                let {
                    value: t,
                    onChange: n,
                    onClose: i,
                    suggestedColors: s,
                    middle: a,
                    footer: d,
                    showEyeDropper: E
                } = e, p = (0, c.default)(), [I, m] = r.useState(() => {
                    let e = null != t ? t : 0,
                        n = (0, o.int2hex)(e);
                    return {
                        current: e,
                        pending: n,
                        input: n
                    }
                });
                r.useEffect(() => {
                    if (null == t || t === I.current) return;
                    let e = (0, o.int2hex)(t);
                    m({
                        current: t,
                        pending: e,
                        input: e
                    })
                }, [t, I]), r.useEffect(() => i, [i]);
                let v = e => {
                        let t = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, o.isValidHex)(t)) {
                            m(e => ({
                                ...e,
                                input: t
                            }));
                            return
                        }
                        let l = (0, o.hex2int)(t);
                        m({
                            current: l,
                            pending: t,
                            input: t
                        }), n(l)
                    },
                    g = async () => {
                        if (null != p) try {
                            let {
                                sRGBHex: e
                            } = await p.open();
                            v(e)
                        } catch {}
                    }, S = e => {
                        m(t => ({
                            ...t,
                            pending: e,
                            input: e
                        }))
                    }, T = e => {
                        n((0, o.hex2int)(e))
                    };
                return (0, l.jsxs)(u.Dialog, {
                    "aria-label": C.default.Messages.PICK_A_COLOR,
                    className: R.customColorPicker,
                    children: [(0, l.jsx)(f.default, {
                        onChange: e => {
                            let {
                                hex: t
                            } = e;
                            return S(t)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: t
                            } = e;
                            return T(t)
                        },
                        color: I.pending
                    }), a, (0, l.jsxs)("div", {
                        className: R.customColorPickerInputContainer,
                        children: [E && null != p && (0, l.jsx)(_.Icon, {
                            onClick: g,
                            tooltip: C.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: R.customColorPickerEyeDropper,
                            icon: h.default
                        }), (0, l.jsx)(u.TextInput, {
                            className: R.customColorPickerInput,
                            value: I.input,
                            onChange: v,
                            maxLength: 7
                        })]
                    }), null != s && s.length > 0 && (0, l.jsx)("div", {
                        className: R.suggestedColors,
                        children: s.map((e, t) => (0, l.jsx)(u.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: R.suggestedColor,
                            onClick: () => v(e)
                        }, "".concat(e, "-").concat(t)))
                    }), d]
                })
            });

            function T(e) {
                let {
                    className: t,
                    defaultColor: n,
                    customColor: r,
                    colors: i,
                    value: o,
                    disabled: u,
                    onChange: c,
                    renderDefaultButton: d,
                    renderCustomButton: f,
                    colorContainerClassName: E
                } = e, h = e => (0, l.jsx)("div", {
                    className: R.colorPickerRow,
                    children: e.map(e => (0, l.jsx)(m, {
                        color: e,
                        isSelected: e === o,
                        onClick: c,
                        disabled: u
                    }, e))
                }), _ = i.slice(0, i.length / 2), p = i.slice(i.length / 2, i.length), C = (0, a.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: I,
                    scrollToEnd: I
                });
                return (0, l.jsx)(a.ListNavigatorProvider, {
                    navigator: C,
                    children: (0, l.jsx)(a.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: i,
                                ...a
                            } = e;
                            return (0, l.jsxs)("div", {
                                className: s(R.container, t),
                                ref: i,
                                ...a,
                                children: [(0, l.jsx)("div", {
                                    className: s(R.defaultContainer, E),
                                    children: d({
                                        value: o,
                                        color: n,
                                        onChange: c,
                                        disabled: u
                                    })
                                }), (0, l.jsx)("div", {
                                    className: s(R.customContainer, E),
                                    children: f({
                                        value: o,
                                        customColor: r,
                                        disabled: u
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: R.presets,
                                    children: [h(_), h(p)]
                                })]
                            })
                        }
                    })
                })
            }
        },
        526975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("266937"),
                s = n("286458"),
                a = n("29799");
            let o = (0, i.CustomPicker)(e => (0, l.jsxs)("div", {
                className: a.wrapper,
                children: [(0, l.jsx)("div", {
                    className: a.saturation,
                    children: (0, l.jsx)(s.Saturation, {
                        ...e
                    })
                }), (0, l.jsx)("div", {
                    className: a.hue,
                    children: (0, l.jsx)(s.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var u = r.memo(o)
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: i,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), E = (0, a.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(u.flowerStarContainer, i),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(u.childContainer, {
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
                    return p
                },
                default: function() {
                    return R
                }
            });
            var l, r, i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (l = r || (r = {})).DEFAULT = "default", l.SMALL = "small";
            let h = {
                    [r.DEFAULT]: E.shineDefault,
                    [r.SMALL]: E.shineSmall
                },
                _ = {
                    [r.DEFAULT]: E.shineInnerDefault,
                    [r.SMALL]: E.shineInnerSmall
                };
            class p extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, i.jsx)(u.default.div, {
                        ...l,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, i.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: h[t],
                            children: (0, i.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: r.DEFAULT
            };
            let C = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: a,
                    pauseAnimation: u,
                    shineSize: f = r.DEFAULT,
                    shinePaused: h,
                    buttonShineClassName: _,
                    onlyShineOnHover: C,
                    ...R
                } = e, I = s.createRef(), m = (0, d.default)(I), v = !l && !a && !0 !== u && (!C || m);
                return (0, i.jsxs)(c.Button, {
                    buttonRef: I,
                    ...R,
                    className: o(E.shinyButton, n),
                    disabled: l,
                    submitting: a,
                    children: [t, v ? (0, i.jsx)(p, {
                        shinePaused: h,
                        className: o(E.buttonShine, C ? E.onlyShineOnHover : void 0, _),
                        shineSize: f
                    }) : null]
                })
            };
            C.ShineSizes = r;
            var R = C
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("384737"),
                a = n("448052"),
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
                        transition: _ = f.transition,
                        className: p,
                        foreground: C,
                        expanded: R,
                        ...I
                    } = e, {
                        enabled: m
                    } = (0, c.useRedesignIconContext)(), v = t;
                    if (!0 === R ? v = E.DOWN : !1 === R && (v = E.RIGHT), m) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: s.ChevronSmallDownIcon,
                            [E.LEFT]: a.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [v];
                        return (0, l.jsx)(e, {
                            ...I,
                            className: p,
                            width: n,
                            height: r,
                            color: h,
                            colorClass: C
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: i(p, _, v),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(I),
                        children: (0, l.jsx)("path", {
                            className: C,
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
            var _ = h
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("733154"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, i.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("505088"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, l.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, i.CircleXIcon)
        },
        422403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("639055"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, l.jsx)("path", {
                                className: s,
                                fill: r,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, i.EyeDropperIcon)
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("504318"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: r,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, i.PencilIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("75196"),
                i = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
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
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("998460"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: r,
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, i.GiftIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("876726"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, i.PlayIcon)
        },
        826432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("49097"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, i.SparklesIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("390300"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, i.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("287083"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, i.StageIcon)
        },
        204203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("449826"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: r,
                            className: i,
                            fillRule: "evenodd",
                            d: "m18.984 2.345-2.473 2.603c2.67 1.564 4.473 4.456 4.473 7.766 0 4.624-3.507 8.441-8 8.941v-2.02c3.387-.488 6-3.4 6-6.92 0-2.745-1.592-5.12-3.898-6.266l-3.102 3.266v-7.37h7ZM6.733 8.085 5.235 6.762a8.976 8.976 0 0 0-2.139 4.583h2.027a7 7 0 0 1 1.61-3.26Zm-3.717 5.26h2a6.938 6.938 0 0 0 1.369 3.553l-1.426 1.427a8.945 8.945 0 0 1-1.943-4.98Zm7.968 8.31a8.918 8.918 0 0 1-4.61-1.916l1.425-1.425a6.964 6.964 0 0 0 3.185 1.321v2.02Z",
                            clipRule: "evenodd"
                        })
                    })
                }, i.UndoIcon)
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return _
                },
                Divider: function() {
                    return p
                },
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                s = n.n(i),
                a = n("353386"),
                o = n("394846"),
                u = n("77078"),
                c = n("597590"),
                d = n("980428"),
                f = n("772280"),
                E = n("587974"),
                h = n("133934");
            let _ = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: r,
                        selected: i = !1,
                        disabled: a = !1,
                        showBadge: o = !1,
                        color: c,
                        foreground: d,
                        background: f,
                        icon: _,
                        onClick: p,
                        onContextMenu: C,
                        tooltip: R = null,
                        tooltipColor: I,
                        tooltipPosition: m = "bottom",
                        hideOnClick: v = !0,
                        role: g,
                        "aria-label": S,
                        "aria-hidden": T,
                        "aria-checked": L,
                        "aria-expanded": N,
                        "aria-haspopup": x
                    } = e, A = (0, l.jsx)(_, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: s(n, h.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: c
                    }), M = S;
                    return null == M && "string" == typeof R && (M = R), (0, l.jsx)(u.Tooltip, {
                        text: R,
                        color: I,
                        position: m,
                        hideOnClick: v,
                        children: e => {
                            let {
                                onMouseEnter: R,
                                onMouseLeave: I,
                                onFocus: m,
                                onBlur: v
                            } = e;
                            return null == p ? (0, l.jsx)("div", {
                                className: s(t, [h.iconWrapper]),
                                children: (0, l.jsx)(_, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: s(n, h.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != f ? f : void 0,
                                    color: c,
                                    "aria-hidden": T,
                                    onMouseEnter: R,
                                    onMouseLeave: I,
                                    onFocus: m,
                                    onBlur: v
                                })
                            }) : (0, l.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : p,
                                onContextMenu: a ? void 0 : C,
                                onMouseEnter: R,
                                onMouseLeave: I,
                                onFocus: m,
                                onBlur: v,
                                className: s(t, {
                                    [h.iconWrapper]: !0,
                                    [h.clickable]: !a && null != p,
                                    [h.selected]: i
                                }),
                                role: g,
                                "aria-label": M,
                                "aria-hidden": T,
                                "aria-checked": L,
                                "aria-haspopup": x,
                                "aria-expanded": N,
                                tabIndex: a || null == p ? -1 : 0,
                                children: [o ? (0, l.jsx)(E.default, {
                                    mask: E.default.Masks.HEADER_BAR_BADGE,
                                    children: A
                                }) : A, o ? (0, l.jsx)("span", {
                                    className: h.iconBadge
                                }) : null, r]
                            })
                        }
                    })
                },
                p = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: s(h.divider, t)
                    })
                },
                C = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: i,
                        childrenBottom: d,
                        toolbar: f,
                        onDoubleClick: E,
                        "aria-label": _,
                        "aria-labelledby": p,
                        role: C,
                        scrollable: R,
                        transparent: I = !1
                    } = e, m = r.useRef(null), v = r.useContext(c.default);
                    return (0, l.jsx)("section", {
                        className: s(t, h.container, {
                            [h.themed]: !I,
                            [h.transparent]: I,
                            [h.themedMobile]: o.isMobile
                        }),
                        "aria-label": _,
                        "aria-labelledby": p,
                        role: C,
                        ref: m,
                        children: (0, l.jsxs)(u.FocusRingScope, {
                            containerRef: m,
                            children: [(0, l.jsxs)("div", {
                                className: h.upperContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: s(h.children, n, {
                                        [h.scrollable]: R
                                    }),
                                    onDoubleClick: E,
                                    children: [o.isMobile && null != v ? (0, l.jsx)(a.default, {
                                        onClick: v,
                                        className: h.hamburger
                                    }) : null, i]
                                }), null != f ? (0, l.jsx)("div", {
                                    className: h.toolbar,
                                    children: f
                                }) : null]
                            }), d]
                        })
                    })
                };
            C.Icon = _, C.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: r,
                    onContextMenu: i,
                    onClick: a,
                    id: o,
                    muted: c = !1,
                    level: d = 1
                } = e, f = (0, l.jsx)(u.HeadingLevel, {
                    forceLevel: d,
                    children: (0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: c ? "header-secondary" : void 0,
                        className: s(t, h.title),
                        id: o,
                        children: r
                    })
                });
                return null != a ? (0, l.jsx)(u.Clickable, {
                    onClick: a,
                    onContextMenu: i,
                    className: s(n, h.titleWrapper),
                    children: f
                }) : (0, l.jsx)("div", {
                    className: s(n, h.titleWrapper),
                    onContextMenu: i,
                    children: f
                })
            }, C.Divider = p, C.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, l.jsx)(f.default, {
                    className: h.caret
                }) : (0, l.jsx)(d.default, {
                    className: h.caret
                })
            };
            var R = C
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var l = n("884691"),
                r = n("446674"),
                i = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = l.useContext(i.default);
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
            var l = n("817736"),
                r = n("118810");
            let i = {
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
                    let n = (0, l.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = i) {
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
            var l = n("884691"),
                r = n("748820"),
                i = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends l.Component {
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
                    return l.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: l
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new i.default({
                        root: t,
                        rootMargin: n,
                        threshold: l
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: l.createElement("span"),
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
                    return l.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var l = n("157590"),
                r = n("235855")
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("580420"),
                i = n.n(r),
                s = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...r
                    } = e;
                    return (0, l.jsxs)("button", {
                        type: "button",
                        className: i(s.btnHamburger, {
                            [s.btnHamburgerOpen]: t
                        }, n),
                        ...r,
                        children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
                    })
                }
        }
    }
]);