(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61000"], {
        969176: function(e, t, n) {
            var i = n("354069");
            e.exports = function(e, t) {
                return i(e, t)
            }
        },
        188904: function(e, t, n) {
            "use strict";
            var i = {
                linear: function(e, t, n, i) {
                    return (n - t) * e / i + t
                },
                easeInQuad: function(e, t, n, i) {
                    return (n - t) * (e /= i) * e + t
                },
                easeOutQuad: function(e, t, n, i) {
                    return -(n - t) * (e /= i) * (e - 2) + t
                },
                easeInOutQuad: function(e, t, n, i) {
                    var r = n - t;
                    return (e /= i / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t
                },
                easeInCubic: function(e, t, n, i) {
                    return (n - t) * (e /= i) * e * e + t
                },
                easeOutCubic: function(e, t, n, i) {
                    return (n - t) * ((e = e / i - 1) * e * e + 1) + t
                },
                easeInOutCubic: function(e, t, n, i) {
                    var r = n - t;
                    return (e /= i / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t
                },
                easeInQuart: function(e, t, n, i) {
                    return (n - t) * (e /= i) * e * e * e + t
                },
                easeOutQuart: function(e, t, n, i) {
                    return -(n - t) * ((e = e / i - 1) * e * e * e - 1) + t
                },
                easeInOutQuart: function(e, t, n, i) {
                    var r = n - t;
                    return (e /= i / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t
                },
                easeInQuint: function(e, t, n, i) {
                    return (n - t) * (e /= i) * e * e * e * e + t
                },
                easeOutQuint: function(e, t, n, i) {
                    return (n - t) * ((e = e / i - 1) * e * e * e * e + 1) + t
                },
                easeInOutQuint: function(e, t, n, i) {
                    var r = n - t;
                    return (e /= i / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t
                },
                easeInSine: function(e, t, n, i) {
                    var r = n - t;
                    return -r * Math.cos(e / i * (Math.PI / 2)) + r + t
                },
                easeOutSine: function(e, t, n, i) {
                    return (n - t) * Math.sin(e / i * (Math.PI / 2)) + t
                },
                easeInOutSine: function(e, t, n, i) {
                    return -(n - t) / 2 * (Math.cos(Math.PI * e / i) - 1) + t
                },
                easeInExpo: function(e, t, n, i) {
                    return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / i - 1)) + t
                },
                easeOutExpo: function(e, t, n, i) {
                    var r = n - t;
                    return e == i ? t + r : r * (-Math.pow(2, -10 * e / i) + 1) + t
                },
                easeInOutExpo: function(e, t, n, i) {
                    var r = n - t;
                    return 0 === e ? t : e === i ? t + r : (e /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                },
                easeInCirc: function(e, t, n, i) {
                    return -(n - t) * (Math.sqrt(1 - (e /= i) * e) - 1) + t
                },
                easeOutCirc: function(e, t, n, i) {
                    return (n - t) * Math.sqrt(1 - (e = e / i - 1) * e) + t
                },
                easeInOutCirc: function(e, t, n, i) {
                    var r = n - t;
                    return (e /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                },
                easeInElastic: function(e, t, n, i) {
                    var r, l, s, a = n - t;
                    return (s = 1.70158, l = 0, r = a, 0 === e) ? t : 1 == (e /= i) ? t + a : (!l && (l = .3 * i), r < Math.abs(a) ? (r = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - s) * (2 * Math.PI) / l)) + t)
                },
                easeOutElastic: function(e, t, n, i) {
                    var r, l, s, a = n - t;
                    return (s = 1.70158, l = 0, r = a, 0 === e) ? t : 1 == (e /= i) ? t + a : (!l && (l = .3 * i), r < Math.abs(a) ? (r = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / r), r * Math.pow(2, -10 * e) * Math.sin((e * i - s) * (2 * Math.PI) / l) + a + t)
                },
                easeInOutElastic: function(e, t, n, i) {
                    var r, l, s, a = n - t;
                    return (s = 1.70158, l = 0, r = a, 0 === e) ? t : 2 == (e /= i / 2) ? t + a : (!l && (l = i * (.3 * 1.5)), r < Math.abs(a) ? (r = a, s = l / 4) : s = l / (2 * Math.PI) * Math.asin(a / r), e < 1) ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - s) * (2 * Math.PI) / l)) + t : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * i - s) * (2 * Math.PI) / l) * .5 + a + t
                },
                easeInBack: function(e, t, n, i, r) {
                    return void 0 === r && (r = 1.70158), (n - t) * (e /= i) * e * ((r + 1) * e - r) + t
                },
                easeOutBack: function(e, t, n, i, r) {
                    return void 0 === r && (r = 1.70158), (n - t) * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t
                },
                easeInOutBack: function(e, t, n, i, r) {
                    var l = n - t;
                    return (void 0 === r && (r = 1.70158), (e /= i / 2) < 1) ? l / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : l / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
                },
                easeInBounce: function(e, t, n, r) {
                    var l, s = n - t;
                    return l = i.easeOutBounce(r - e, 0, s, r), s - l + t
                },
                easeOutBounce: function(e, t, n, i) {
                    var r = n - t;
                    if ((e /= i) < 1 / 2.75) return r * (7.5625 * e * e) + t;
                    if (e < 2 / 2.75) return r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
                    if (e < 2.5 / 2.75) return r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
                    else return r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOutBounce: function(e, t, n, r) {
                    var l, s = n - t;
                    return e < r / 2 ? .5 * (l = i.easeInBounce(2 * e, 0, s, r)) + t : .5 * (l = i.easeOutBounce(2 * e - r, 0, s, r)) + .5 * s + t
                }
            };
            e.exports = i
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return i
                },
                rgbaToDataURL: function() {
                    return r
                },
                thumbHashToDataURL: function() {
                    return l
                }
            });

            function i(e) {
                let t = e[3],
                    n = 128 & e[2],
                    i = 128 & e[4];
                return (i ? n ? 5 : 7 : 7 & t) / (i ? 7 & t : n ? 5 : 7)
            }

            function r(e, t, n) {
                let i = 4 * e + 1,
                    r = 6 + t * (5 + i),
                    l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 73, 68, 65, 84, 120, 1],
                    s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    u = 0;
                for (let e = 0, r = 0, s = i - 1; e < t; e++, s += i - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & i, i >> 8, 255 & ~i, i >> 8 ^ 255, 0), u = (u + a) % 65521; r < s; r++) {
                        let e = 255 & n[r];
                        l.push(e), u = (u + (a = (a + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(u >> 8, 255 & u, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + r]
                    ])) {
                    let n = -1;
                    for (let i = e; i < t; i++) n ^= l[i], n = (n = n >>> 4 ^ s[15 & n]) >>> 4 ^ s[15 & n];
                    n = ~n, l[t++] = n >>> 24, l[t++] = n >> 16 & 255, l[t++] = n >> 8 & 255, l[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...l))
            }

            function l(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: r,
                        cos: l,
                        round: s
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, o = (63 & a) / 63, d = (a >> 6 & 63) / 31.5 - 1, c = (a >> 12 & 63) / 31.5 - 1, f = a >> 23, E = (u >> 3 & 63) / 63, _ = (u >> 9 & 63) / 63, h = u >> 15, I = r(3, h ? f ? 5 : 7 : 7 & u), S = r(3, h ? 7 & u : f ? 5 : 7), R = f ? (15 & e[5]) / 15 : 1, p = (e[5] >> 4) / 15, T = f ? 6 : 5, m = 0, L = (t, n, i) => {
                        let r = [];
                        for (let l = 0; l < n; l++)
                            for (let s = l ? 0 : 1; s * n < t * (n - l); s++) r.push(((e[T + (m >> 1)] >> ((1 & m++) << 2) & 15) / 7.5 - 1) * i);
                        return r
                    }, C = L(I, S, (a >> 18 & 31) / 31), g = L(3, 3, 1.25 * E), A = L(3, 3, 1.25 * _), N = f && L(5, 5, p), M = i(e), v = s(M > 1 ? 32 : 32 * M), P = s(M > 1 ? 32 / M : 32), O = new Uint8Array(v * P * 4), U = [], y = [];
                    for (let e = 0, i = 0; e < P; e++)
                        for (let s = 0; s < v; s++, i += 4) {
                            let a = o,
                                u = d,
                                E = c,
                                _ = R;
                            for (let e = 0, n = r(I, f ? 5 : 3); e < n; e++) U[e] = l(t / v * (s + .5) * e);
                            for (let n = 0, i = r(S, f ? 5 : 3); n < i; n++) y[n] = l(t / P * (e + .5) * n);
                            for (let e = 0, t = 0; e < S; e++)
                                for (let n = e ? 0 : 1, i = 2 * y[e]; n * S < I * (S - e); n++, t++) a += C[t] * U[n] * i;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, i = 2 * y[e]; n < 3 - e; n++, t++) {
                                    let e = U[n] * i;
                                    u += g[t] * e, E += A[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, i = 2 * y[e]; n < 5 - e; n++, t++) _ += N[t] * U[n] * i;
                            let h = a - 2 / 3 * u,
                                p = (3 * a - h + E) / 2,
                                T = p - E;
                            O[i] = r(0, 255 * n(1, p)), O[i + 1] = r(0, 255 * n(1, T)), O[i + 2] = r(0, 255 * n(1, h)), O[i + 3] = r(0, 255 * n(1, _))
                        }
                    return {
                        w: v,
                        h: P,
                        rgba: O
                    }
                }(e);
                return r(t.w, t.h, t.rgba)
            }
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return u
                },
                fetchGiftableEntitlements: function() {
                    return o
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
            async function u(e) {
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
            async function o() {
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
                    return u
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

            function u() {
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
        248559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691"),
                r = () => {
                    let [e, t] = (0, i.useState)(null);
                    return (0, i.useEffect)(() => {
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
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
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
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return R
                },
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                s = n("77078"),
                a = n("305961"),
                u = n("145131"),
                o = n("599110"),
                d = n("335189"),
                c = n("473591"),
                f = n("980215"),
                E = n("879253"),
                _ = n("709594"),
                h = n("49111"),
                I = n("782340"),
                S = n("947399");

            function R(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: R,
                    isFetchingSettings: p,
                    isSavingSettings: T,
                    hasPendingChanges: m,
                    errors: L
                } = (0, l.useStateFromStoresObject)([c.default], () => ({
                    settings: c.default.getSettings(n),
                    isFetchingSettings: c.default.isFetchingSettings(n),
                    isSavingSettings: c.default.isSavingSettings(),
                    hasPendingChanges: c.default.hasPendingChanges(),
                    errors: c.default.getErrors()
                })), C = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(n)), g = (0, f.useClydeProfilesEnabled)(C), [A, N] = r.useState(!1);
                r.useEffect(() => ((0, d.startEditingClydeProfile)(), () => {
                    (0, d.doneEditingClydeProfile)(), (0, d.resetPendingChanges)()
                }), []), r.useEffect(() => {
                    (0, d.fetchClydeSettings)(n, !0)
                }, [n]), r.useEffect(() => {
                    (m || null != L) && N(!1)
                }, [m, L]);
                let M = async () => {
                    if (null == n || !c.default.hasPendingChanges()) return;
                    let e = c.default.getPendingUpdates();
                    await (0, d.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), N(!0)
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)("div", {
                            className: S.heading,
                            children: (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: I.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, i.jsx)(s.ScrollerAuto, {
                        className: S.content,
                        children: p || null == R ? (0, i.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [g && (0, i.jsx)(_.default, {
                                guildId: n
                            }), null != R && (0, i.jsx)("div", {
                                className: S.section,
                                children: (0, i.jsx)(E.ClydeEditProfileModalPersonalitySection, {
                                    settings: R
                                })
                            })]
                        })
                    }), (0, i.jsxs)(s.ModalFooter, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: S.footer,
                        children: [(0, i.jsx)("div", {
                            className: S.resetButtonContainer,
                            children: (0, i.jsx)(s.Button, {
                                onClick: () => {
                                    (0, d.resetPendingChanges)(), o.default.track(h.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !m,
                                children: I.default.Messages.RESET
                            })
                        }), m && null == L && (0, i.jsx)("div", {
                            className: S.pendingChangesMessage,
                            children: I.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), A && (0, i.jsx)("div", {
                            className: S.successfullSaveMessage,
                            children: I.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != L && (0, i.jsx)("div", {
                            className: S.errorMessage,
                            children: I.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(s.Button, {
                                onClick: M,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: T,
                                disabled: !m,
                                children: I.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: r
                } = e;
                return (0, i.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, i.jsx)(R, {
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
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("65597"),
                s = n("77078"),
                a = n("570697"),
                u = n("826432"),
                o = n("204203"),
                d = n("599110"),
                c = n("335189"),
                f = n("473591"),
                E = n("680894"),
                _ = n("49111"),
                h = n("782340"),
                I = n("192731");

            function S(e) {
                var t;
                let {
                    settings: n
                } = e, [S, R] = r.useState(!1), [p, T] = r.useState(), {
                    pendingPersonality: m,
                    errors: L
                } = (0, l.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [C, g] = r.useState(), A = null != m && p === m, N = null != L && Number(L.code) === _.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? L.message : void 0, M = A ? h.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : h.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, i.jsxs)(a.default, {
                    title: h.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, i.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: I.description,
                        children: [h.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, i.jsx)(s.Anchor, {
                            href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: h.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, i.jsx)(s.TextArea, {
                        value: null !== (t = null != m ? m : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, c.setPendingPersonality)(e)
                        },
                        placeholder: h.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: S,
                        autosize: !0
                    }), null != N ? (0, i.jsx)(s.FormErrorBlock, {
                        className: I.errorBlock,
                        children: N
                    }) : null, (0, i.jsxs)("div", {
                        className: I.generateButtonContainer,
                        children: [(0, i.jsx)(s.Button, {
                            color: A ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: I.generateButton,
                            onClick: () => {
                                if (A && null != C) {
                                    (0, c.setPendingPersonality)(C), g(void 0);
                                    return
                                }
                                null != m && "" !== m.trim() && (d.default.track(_.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), R(!0), (0, c.generatePersonality)(m).then(e => {
                                    null != e && (g(m), T(e), (0, c.setPendingPersonality)(e, !0)), R(!1)
                                }))
                            },
                            disabled: null == m || "" === m.trim(),
                            submitting: S,
                            children: A ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.default, {
                                    className: I.buttonIcon
                                }), h.default.Messages.UNDO]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u.default, {
                                    className: I.buttonIcon
                                }), h.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, i.jsx)(s.Text, {
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
                    return L
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                l = n.n(r),
                s = n("446674"),
                a = n("184900"),
                u = n("11899"),
                o = n("447645"),
                d = n("569460"),
                c = n("52704"),
                f = n("121370"),
                E = n("26989"),
                _ = n("305961"),
                h = n("697218"),
                I = n("335189"),
                S = n("473591"),
                R = n("680894"),
                p = n("782340"),
                T = n("618641");

            function m(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: r,
                    pendingThemeColors: l
                } = (0, s.useStateFromStoresObject)([S.default], () => S.default.getPendingUpdates()), a = (0, s.useStateFromStores)([E.default], () => E.default.getMember(t, R.CLYDE_AI_USER_ID));
                return (0, i.jsxs)("div", {
                    className: T.editProfileSections,
                    children: [(0, i.jsx)(d.default, {
                        placeholder: p.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: r,
                        onGlobalNameChange: I.setPendingNick
                    }), (0, i.jsx)(o.default, {
                        guildId: t,
                        onAvatarChange: I.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: p.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, i.jsx)(c.default, {
                        guildId: t,
                        onBannerChange: I.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, i.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != l ? l : void 0,
                        onThemeColorsChange: I.setPendingThemeColors
                    })]
                })
            }

            function L(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: r,
                    pendingBanner: o,
                    pendingThemeColors: d
                } = (0, s.useStateFromStoresObject)([S.default], () => S.default.getPendingUpdates()), c = (0, s.useStateFromStores)([h.default], () => h.default.getUser(R.CLYDE_AI_USER_ID));
                l(null != c, "Clyde User must exist");
                let f = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(t));
                return (0, i.jsx)(u.default, {
                    className: T.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, i.jsx)(a.default, {
                        user: c,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: I.setPendingAvatar,
                        onBannerChange: I.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: r,
                        pendingBanner: o,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, i.jsx)(m, {
                        guildId: t,
                        clydeUser: c
                    })
                })
            }
        },
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("75196"),
                a = n("956089"),
                u = n("125835"),
                o = n("782340"),
                d = n("159163");

            function c(e) {
                return (0, i.jsx)("svg", {
                    ...(0, s.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function f(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: r = !1,
                    shouldInheritBackgroundColor: s = !1
                } = e;
                return (0, i.jsx)(u.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, i.jsx)(a.TextBadge, {
                        disableColor: !0,
                        className: l(d.tag, {
                            [d.inheritTextColor]: r,
                            [d.inheritBackgroundColor]: s
                        }),
                        text: o.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("642032"),
                a = n("767964");

            function u(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: r = !1,
                    hideStars: u
                } = e;
                return (0, i.jsxs)("span", {
                    className: l(a.container, t, {
                        [a.containerColored]: r
                    }),
                    children: [n, u ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            foreground: a.sparkleStarTopRight
                        }), (0, i.jsx)(s.default, {
                            foreground: a.sparkleStarRight
                        }), (0, i.jsx)(s.default, {
                            foreground: a.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        617917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("244201"),
                o = n("685665"),
                d = n("181114"),
                c = n("427459"),
                f = n("954296"),
                E = n("49111"),
                _ = n("782340"),
                h = n("500924"),
                I = e => {
                    let {
                        analyticsLocation: t,
                        analyticsSourceLocation: n,
                        guild: l,
                        buttonText: I,
                        targetBoostedGuildTier: S,
                        onClose: R = () => {},
                        closeLayer: p = () => {},
                        pauseAnimation: T = !1,
                        applicationId: m,
                        handleSubscribeModalClose: L,
                        withHighlight: C = !1,
                        ...g
                    } = e, {
                        analyticsLocations: A
                    } = (0, o.default)(), N = (0, u.useAppContext)(), M = N === E.AppContext.POPOUT, [v, P] = r.useState(!1), O = null != S ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(l, S), 1) : 1, U = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), y = async () => {
                        P(!0), await (0, f.addAppliedGuildBoosts)({
                            analyticsLocations: A,
                            analyticsLocation: t,
                            analyticsSourceLocation: n,
                            guild: l,
                            numberOfBoostsToAdd: O,
                            onClose: R,
                            closeLayer: p,
                            inPopout: M,
                            applicationId: m,
                            handleSubscribeModalClose: L
                        }), P(!1)
                    };
                    return null != U ? (0, i.jsx)(a.Tooltip, {
                        text: U,
                        "aria-label": !1,
                        children: e => (0, i.jsx)(d.default, {
                            ...e,
                            disabled: !0,
                            size: a.Button.Sizes.SMALL,
                            pauseAnimation: T,
                            ...g,
                            children: null != I ? I : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, i.jsx)(d.default, {
                        size: a.Button.Sizes.SMALL,
                        ...g,
                        className: s(g.className, {
                            [h.buttonHighlighted]: C
                        }),
                        submitting: v,
                        onClick: y,
                        pauseAnimation: T,
                        children: null != I ? I : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        954296: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addAppliedGuildBoosts: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("850068"),
                s = n("583367"),
                a = n("775433"),
                u = n("697218"),
                o = n("625634"),
                d = n("10514"),
                c = n("599110"),
                f = n("427459"),
                E = n("163732"),
                _ = n("49111");
            async function h(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: h,
                    analyticsSourceLocation: I,
                    numberOfBoostsToAdd: S,
                    onClose: R,
                    closeLayer: p,
                    onSubscriptionConfirmation: T,
                    guild: m,
                    handleSubscribeModalClose: L,
                    disablePremiumUpsell: C,
                    inPopout: g,
                    applicationId: A
                } = e, N = g ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, M = u.default.getCurrentUser();
                if (null == M) return;
                if (!M.verified) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("899917").then(n.bind(n, "899917"));
                        return t => {
                            let {
                                onClose: n,
                                ...r
                            } = t;
                            return (0, i.jsx)(e, {
                                ...r,
                                onClose: n
                            })
                        }
                    }, {
                        contextKey: N
                    });
                    return
                }
                let v = [];
                !d.default.isLoadedForPremiumSKUs() && v.push((0, a.fetchPremiumSubscriptionPlans)()), !o.default.hasFetched && (v.push(l.fetchSubscriptions()), v.push((0, s.fetchGuildBoostSlots)())), v.length > 0 && await Promise.allSettled(v);
                let P = (0, f.getAvailableGuildBoostSlots)(o.default.boostSlots),
                    O = P.length,
                    U = e => {
                        null == R || R(), null == L || L(e)
                    };
                if (O > 0 && (null == S || O >= S)) {
                    let e;
                    1 === O ? e = P.slice(0, 1) : null != S && (e = P.slice(0, S));
                    let t = await (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("247760").then(n.bind(n, "247760"));
                        return n => {
                            let {
                                onClose: r,
                                ...l
                            } = n;
                            return (0, i.jsx)(t, {
                                ...l,
                                onClose: e => {
                                    r(), U(e)
                                },
                                selectedGuild: m,
                                locationSection: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != t && (0, r.closeModal)(t), U(!1)
                        },
                        contextKey: N
                    })
                } else(0, E.default)({
                    analyticsLocations: t,
                    analyticsLocation: h,
                    analyticsSourceLocation: I,
                    guildId: m.id,
                    closeLayer: () => {
                        null == R || R(), null == p || p(), c.default.track(_.AnalyticEvents.MODAL_DISMISSED, {
                            type: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: h.section
                        })
                    },
                    totalNumberOfSlotsToAssign: null != S ? S : 1,
                    onCloseModal: U,
                    disablePremiumUpsell: C,
                    onSubscriptionConfirmation: T,
                    inPopout: g,
                    applicationId: A
                })
            }
        },
        163732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("404118"),
                s = n("850068"),
                a = n("775433"),
                u = n("521012"),
                o = n("599110"),
                d = n("719923"),
                c = n("49111"),
                f = n("782340");
            async function E(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: E,
                    analyticsSourceLocation: _,
                    guildId: h,
                    closeLayer: I,
                    onCloseModal: S,
                    totalNumberOfSlotsToAssign: R = 1,
                    disablePremiumUpsell: p,
                    onSubscriptionConfirmation: T,
                    inPopout: m,
                    applicationId: L
                } = e, C = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, g = u.default.getPremiumTypeSubscription();
                if (null != g && g.isPurchasedExternally && null != g.paymentGateway) {
                    null != I && I(), l.default.show({
                        title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[g.paymentGateway]
                        }),
                        body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[g.paymentGateway],
                            subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(g.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, s.fetchPaymentSources)(), (0, a.fetchPremiumSubscriptionPlans)()]);
                let A = await (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("860634").then(n.bind(n, "860634"));
                    return n => {
                        let {
                            transitionState: r,
                            onClose: l
                        } = n;
                        return (0, i.jsx)(e, {
                            transitionState: r,
                            onClose: e => {
                                l(), null == S || S(e)
                            },
                            analyticsLocations: t,
                            analyticsLocation: E,
                            analyticsSourceLocation: null != _ ? _ : E,
                            guildId: h,
                            totalNumberOfSlotsToAssign: R,
                            closeGuildPerksModal: I,
                            disablePremiumUpsell: p,
                            onSubscriptionConfirmation: T,
                            applicationId: L
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        o.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                            type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: E
                        })
                    },
                    onCloseRequest: () => {
                        null != A && (0, r.closeModal)(A), null == S || S(!1)
                    },
                    contextKey: C
                })
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                u = n.n(a),
                o = n("77078"),
                d = n("159885"),
                c = n("694187"),
                f = n("49111"),
                E = n("782340"),
                _ = n("911686");

            function h(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: s(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class I extends r.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, r, l;
                    let {
                        image: a,
                        hint: u,
                        name: I,
                        makeURL: S,
                        disabled: R,
                        onChange: p,
                        showIcon: T,
                        showIconDisabled: m,
                        className: L,
                        imageClassName: C,
                        iconClassName: g,
                        iconWrapperClassName: A,
                        icon: N,
                        hideSize: M,
                        imageStyle: v,
                        showRemoveButton: P,
                        maxFileSizeBytes: O,
                        onFileSizeError: U,
                        onOpenImageSelectModal: y,
                        "aria-label": b
                    } = this.props;
                    if (null != (t = null != a && /^data:/.test(a) ? a : S(a)) ? n = 'url("'.concat(t, '")') : null != I && (r = (0, i.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, d.getAcronym)(I)
                        })), R) return (0, i.jsx)("div", {
                        className: s(_.imageUploader, _.disabled, L),
                        children: (0, i.jsxs)("div", {
                            className: s(_.imageUploaderInner, C),
                            style: {
                                ...v,
                                backgroundImage: n
                            },
                            children: [r, m && (0, i.jsx)("div", {
                                className: s(_.imageUploaderIcon, _.imageUploaderIconDisabled, g),
                                children: N
                            })]
                        })
                    });
                    null != a ? l = (0, i.jsx)(o.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !M && (l = (0, i.jsx)("small", {
                        className: _.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let x = null !== (e = null != b ? b : u) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: s(_.imageUploader, L),
                        children: [(0, i.jsx)(o.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: T ? s(_.imageUploaderIconWrapper, A) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: s(_.imageUploaderInner, C),
                                    style: {
                                        ...v,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != y ? (0, i.jsx)(o.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": x,
                                        onClick: y
                                    }) : (0, i.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: p,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": x,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: U
                                    })]
                                }), null != u && (0, i.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), T && (0, i.jsx)(h, {
                                    className: g,
                                    icon: N
                                })]
                            })
                        }), P ? l : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            I.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var S = I
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
                s = n("112679"),
                a = n("55689"),
                u = n("855133"),
                o = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: h,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: S,
                    analyticsObject: R,
                    analyticsLocation: p,
                    analyticsSourceLocation: T,
                    isGift: m = !1,
                    giftMessage: L,
                    subscriptionTier: C,
                    trialId: g,
                    postSuccessGuild: A,
                    openInvoiceId: N,
                    applicationId: M,
                    referralTrialOfferId: v,
                    giftRecipient: P,
                    returnRef: O
                } = null != e ? e : {}, U = !1, y = (0, r.v4)();
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
                            subscriptionTier: C,
                            skuId: C,
                            isGift: m,
                            giftMessage: L,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == I || I())
                            },
                            onComplete: () => {
                                U = !0, null == h || h(), !m && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: S,
                            analyticsObject: R,
                            analyticsLocation: p,
                            analyticsSourceLocation: T,
                            trialId: g,
                            postSuccessGuild: A,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: M,
                            referralTrialOfferId: v,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != p ? p : R,
                            source: T,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != g,
                            application_id: M,
                            location_stack: S
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == _ || _(U), U && (!m && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return a
                },
                hasActiveTrial: function() {
                    return u
                },
                isEligibleTrialSub: function() {
                    return o
                },
                useCurrentPremiumTrialTier: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("697218"),
                l = n("521012"),
                s = n("646718");
            let a = () => {
                    let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                u = () => {
                    var e;
                    return (null === (e = l.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                o = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function d() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
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
                    return u
                },
                setNavigatedFromHelper: function() {
                    return o
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
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        70723: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                s = n("913144");

            function a() {
                i = !1, r = null
            }
            a();
            class u extends l.default.Store {
                get hasCompletedStepDuringSession() {
                    return i
                }
                get activeSubstep() {
                    return r
                }
            }
            u.displayName = "PremiumTutorialSessionStore";
            var o = new u(s.default, {
                SET_HAS_COMPLETED_STEP: function() {
                    i = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    i = !1
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
                    return u
                },
                checkRecipientEligibility: function() {
                    return o
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("819689"),
                s = n("18494"),
                a = n("49111");
            let u = () => (r.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), i.default.get({
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
                o = e => (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), i.default.post({
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
            async function d(e) {
                try {
                    var t;
                    let n = await i.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (e) {
                    if (r.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let n = await i.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
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
                    return g
                }
            });
            var i = n("637612"),
                r = n("446674"),
                l = n("913144"),
                s = n("697218"),
                a = n("179935"),
                u = n("49111");
            let o = null,
                d = {},
                c = [],
                f = new Set,
                E = !1,
                _ = new Set,
                h = new Set,
                I = {},
                S = 0,
                R = null,
                p = () => !0;

            function T(e) {
                _.add(e)
            }

            function m(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => L(e))
            }

            function L(e) {
                let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!h.has(t) && !_.has(t)) {
                    var n;
                    n = t, _.add(n), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
                }
            }
            class C extends r.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], p)
                }
                checkAndFetchReferralsRemaining() {
                    null == o && !E && S < 5 && (null == R || R < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), o
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return _.has(e)
                }
            }
            C.displayName = "ReferralTrialStore";
            var g = new C(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !_.has(t)) {
                        var i;
                        i = t, _.add(i), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
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
                    E = !1, o = t, c = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, S += 1, R = Date.now() + 1e3 * Math.pow(2, S)
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
                    d[t] = n, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, a.fetchReferralsRemaining)(), I[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (_.delete(t.id), h.add(t.id), I[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    _.delete(t), h.add(t)
                },
                LOAD_MESSAGES_SUCCESS: m,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    L(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: m,
                LOGOUT: function() {
                    o = null, d = {}, c = [], f = new Set, E = !1, _ = new Set, h = new Set, I = {}, S = 0, R = null
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function h() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
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

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                R(r, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([u.default], () => u.default.getCurrentUser());
                i.useEffect(() => {
                    R(s, l, t, n)
                }, [s, l, t, n])
            }

            function R(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && h(), i && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
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
            var u = new a(r.default, {
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
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return u
                }
            });
            var i = n("65597"),
                r = n("340412"),
                l = n("540692"),
                s = n("833516"),
                a = n("646718");

            function u(e) {
                var t, n, u, o;
                let d = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    _ = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    h = (0, i.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
                return null !== (o = null !== (u = null !== (n = null !== (t = null != d ? d : h) && void 0 !== t ? t : c) && void 0 !== n ? n : f) && void 0 !== u ? u : E) && void 0 !== o ? o : _
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return o
                },
                useTrialOffer: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("862337"),
                s = n("697218"),
                a = n("340412"),
                u = n("719923");

            function o(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [n, d] = i.useState(o(t)),
                    c = (0, r.useStateFromStores)([s.default], () => (0, u.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            i = () => {
                                let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(r, () => {
                                    !n && o(t) ? d(!0) : i()
                                })
                            };
                        return i(), () => e.stop()
                    }
                }, [n, t]), n || c ? null : t
            }
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("748820"),
                u = n("509043"),
                o = n("669491"),
                d = n("77078"),
                c = n("634634"),
                f = n("449918"),
                E = n("973262"),
                _ = n("832132"),
                h = n("771325"),
                I = n("49111"),
                S = n("782340"),
                R = n("727125");

            function p(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: l,
                    suggestedColors: p,
                    disabled: T,
                    label: m,
                    colorPickerMiddle: L,
                    colorPickerFooter: C,
                    showEyeDropper: g
                } = e, A = r.useRef(null), N = (0, d.useToken)(o.default.colors.BACKGROUND_PRIMARY).hex(), M = o.default.colors.BACKGROUND_ACCENT.css, v = (0, h.isColorDark)(l), P = (0, u.int2hex)(l), O = P === N ? M : P, U = (0, f.getColor)(v ? I.Color.WHITE_500 : I.Color.PRIMARY_530), y = (0, c.default)(L), b = (0, c.default)(C), [x, F] = r.useState((0, a.v4)());
                return r.useEffect(() => {
                    (y !== L || b !== C) && F((0, a.v4)())
                }, [C, L, b, y]), (0, i.jsx)(d.Popout, {
                    positionKey: x,
                    renderPopout: e => (0, i.jsx)(E.CustomColorPicker, {
                        ...e,
                        value: l,
                        onChange: t,
                        suggestedColors: p,
                        middle: L,
                        footer: C,
                        showEyeDropper: g
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            ref: A,
                            className: s(R.colorSwatch, {
                                [R.disabled]: T
                            }),
                            children: [(0, i.jsx)(d.Clickable, {
                                ...n,
                                tabIndex: T ? -1 : 0,
                                onClick: T ? I.NOOP : t,
                                style: {
                                    backgroundColor: P,
                                    borderColor: O
                                },
                                className: R.swatch,
                                "aria-label": S.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: A
                                },
                                children: (0, i.jsx)(_.default, {
                                    className: R.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: U
                                })
                            }), m]
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                a = n("216422"),
                u = n("782340"),
                o = n("881609");

            function d(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, i.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, i.jsx)(s.Clickable, {
                        ...e,
                        children: (0, i.jsx)(a.default, {
                            className: l(o.nitroWheel, n)
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("394846"),
                a = n("77078"),
                u = n("570697"),
                o = n("782340"),
                d = n("56438");

            function c(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: r,
                    profilePreview: c,
                    previewTitle: f
                } = e, E = () => (0, i.jsx)(u.default, {
                    title: null != f ? f : o.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: d.preview,
                    children: c
                });
                return (0, i.jsx)("div", {
                    className: n,
                    children: (0, i.jsxs)(a.FormSection, {
                        className: d.profileCustomizationSection,
                        children: [s.isMobile && E(), (0, i.jsxs)("div", {
                            className: l(d.baseLayout, r),
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
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                a = n("181114"),
                u = n("771325"),
                o = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("359223");
            let E = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function _(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: r,
                    sectionTitle: _,
                    changeAvatarButtonText: h,
                    guildId: I,
                    className: S,
                    disabled: R = !1,
                    isTryItOutFlow: p = !1,
                    forcedDivider: T,
                    withHighlight: m = !1
                } = e, L = m ? a.default : s.Button;
                return (0, i.jsx)(o.default, {
                    className: S,
                    title: _,
                    errors: n,
                    disabled: R,
                    forcedDivider: T,
                    children: (0, i.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, i.jsx)(L, {
                            className: l({
                                [f.buttonHighlighted]: m
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, u.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, I, p, p ? E : void 0),
                            children: null != h ? h : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, i.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != I ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("65597"),
                a = n("77078"),
                u = n("70723"),
                o = n("254490"),
                d = n("891653"),
                c = n("632892"),
                f = n("646718"),
                E = n("326908");

            function _(e) {
                let {
                    errors: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: t.map((e, t) => (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: E.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, o.sizeString)(t)
                        })
                    }, t))
                })
            }

            function h(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: o,
                    children: h,
                    className: I,
                    errors: S,
                    disabled: R = !1,
                    hideDivider: p = !1,
                    showBorder: T = !1,
                    borderType: m,
                    hasBackground: L = !1,
                    forcedDivider: C = !1,
                    showPremiumIcon: g = !1
                } = e, A = (0, s.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, i.jsx)("div", {
                    className: l(E.customizationSection, I, {
                        [E.disabled]: R,
                        [E.hideDivider]: p,
                        [E.showBorder]: T,
                        [E.withDivider]: C
                    }),
                    children: (0, i.jsxs)(c.default, {
                        className: E.customizationSectionBorder,
                        backgroundClassName: E.customizationSectionBackground,
                        isShown: T && !A,
                        type: m,
                        hasBackground: L,
                        children: [(0, i.jsxs)(a.FormTitle, {
                            className: E.title,
                            id: r,
                            children: [t, g && (0, i.jsx)(d.default, {}), n]
                        }), null != o ? (0, i.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: E.sectionDescription,
                            children: o
                        }) : null, h, null != S && (0, i.jsx)(_, {
                            errors: S
                        })]
                    })
                })
            }
        },
        569460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("570697"),
                s = n("49111"),
                a = n("782340");

            function u(e) {
                var t, n;
                return (0, i.jsx)(l.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(r.TextInput, {
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
                    return c
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("623682");
            (i = r || (r = {})).PREMIUM = "premium", i.LIMITED = "limited";
            let d = {
                [r.PREMIUM]: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                [r.LIMITED]: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var c = s.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: i = r.PREMIUM,
                    isShown: s,
                    hasBackground: a = !1,
                    className: c,
                    backgroundClassName: f
                } = e;
                if (!s) return (0, l.jsx)(l.Fragment, {
                    children: n
                });
                let {
                    border: E,
                    background: _
                } = d[i];
                return (0, l.jsx)("div", {
                    ref: t,
                    className: u(E, c),
                    children: (0, l.jsx)("div", {
                        className: u(a ? _ : o.background, f),
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                a = n("181114"),
                u = n("771325"),
                o = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("650130");

            function E(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: r,
                    guildId: E,
                    className: _,
                    disabled: h = !1,
                    showPremiumIcon: I = !0,
                    isTryItOutFlow: S = !1,
                    forcedDivider: R,
                    withHighlight: p = !1
                } = e, T = p ? a.default : s.Button;
                return (0, i.jsx)(o.default, {
                    className: _,
                    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: I,
                    errors: n,
                    disabled: h,
                    forcedDivider: R,
                    children: (0, i.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, i.jsx)(T, {
                            className: l({
                                [f.buttonHighlighted]: p
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, u.handleOpenSelectImageModal)(d.UploadTypes.BANNER, E, S, void 0),
                            children: c.default.Messages.CHANGE_BANNER
                        }), t && (0, i.jsx)(s.Button, {
                            className: f.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
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
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("969176"),
                a = n.n(s),
                u = n("669491"),
                o = n("77078"),
                d = n("462274"),
                c = n("217513"),
                f = n("528438"),
                E = n("719923"),
                _ = n("409214"),
                h = n("570697"),
                I = n("782340"),
                S = n("431416");

            function R(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: r,
                    onThemeColorsChange: s,
                    preventDisabled: R,
                    guildId: p,
                    className: T,
                    showPremiumIcon: m = !0,
                    showResetThemeButton: L = !1,
                    forcedDivider: C
                } = e, g = (0, c.default)(t.id, p), [A, N] = (0, f.default)(t, g, {
                    pendingThemeColors: r,
                    isPreview: !0
                }), M = E.default.canUsePremiumProfileCustomization(t), v = null != n ? n : t.getAvatarURL(p, 80), P = (0, o.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hex(), O = (0, d.useAvatarColors)(v, P, !1);
                if (null == A || null == N) return null;
                let U = e => {
                    let t = a(e, null == g ? void 0 : g.themeColors);
                    s(t ? void 0 : e)
                };
                return (0, i.jsx)(h.default, {
                    title: I.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !M && !R,
                    className: l(S.profileThemesSection, T),
                    showPremiumIcon: m,
                    forcedDivider: C,
                    children: (0, i.jsxs)("div", {
                        className: S.sectionContainer,
                        children: [(0, i.jsx)("div", {
                            className: S.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => U([e, N]),
                                color: A,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(o.Text, {
                                    className: S.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: S.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => U([A, e]),
                                color: N,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(o.Text, {
                                    className: S.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), L && null != p && (0, i.jsx)(o.Button, {
                            className: S.resetButton,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.SMALL,
                            onClick: () => U([null, null]),
                            children: I.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
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
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return u
                },
                closeUserProfileModal: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("327037"),
                l = n("697218"),
                s = n("506885"),
                a = n("49111");

            function u(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: u = a.ME,
                    channelId: o,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, E = l.default.getUser(t), _ = u !== a.ME ? u : void 0;
                if (null == E) return (0, r.fetchProfile)(t, {
                    friendToken: d,
                    guildId: _
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: u,
                        channelId: o,
                        friendToken: d,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, s.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: _
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: u,
                    channelId: o,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function o() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
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
                    return d
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                u = new Map;
            class o extends i.Component {
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
                        t = u.get(e);
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
                    let o = this.getVisibilityObserverId();
                    !u.has(o) && u.set(o, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = o
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