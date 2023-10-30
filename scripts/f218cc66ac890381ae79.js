(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31326"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (a = t[2].split("-")).shift(), r = a);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var l = [];
                if (t[6]) {
                    (a = t[6].split("-")).shift();
                    for (var a, s, o = []; a.length;) {
                        var u = a.shift();
                        1 === u.length ? s ? (l.push({
                            singleton: s,
                            extension: o
                        }), s = u, o = []) : s = u : o.push(u)
                    }
                    l.push({
                        singleton: s,
                        extension: o
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: l,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        458389: function(e, t, n) {
            var r = n("594140"),
                i = n("564414"),
                l = n("725502"),
                a = n("591350"),
                s = n("476540"),
                o = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && i(e),
                    d = !n && !c && a(e),
                    E = !n && !c && !d && o(e),
                    _ = n || c || d || E,
                    f = _ ? r(e.length, String) : [],
                    I = f.length;
                for (var S in e)(t || u.call(e, S)) && !(_ && ("length" == S || d && ("offset" == S || "parent" == S) || E && ("buffer" == S || "byteLength" == S || "byteOffset" == S) || s(S, I))) && f.push(S);
                return f
            }
        },
        437083: function(e, t, n) {
            var r = n("561449"),
                i = n("877297");
            e.exports = function(e) {
                return i(r(e))
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                l = n("270879"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && i(e.length) && !!a[r(e)]
            }
        },
        205873: function(e, t, n) {
            var r = n("733228"),
                i = n("541349"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        329252: function(e, t, n) {
            var r = n("877297"),
                i = n("164099");
            e.exports = function(e) {
                return r(i(e))
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        957478: function(e, t, n) {
            var r = n("626785");
            e.exports = function(e, t) {
                return r(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        733228: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                i = "object" == typeof t && t && !t.nodeType && t,
                l = i && "object" == typeof e && e && !e.nodeType && e,
                a = l && l.exports === i && r.process,
                s = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        877297: function(e, t, n) {
            var r = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length,
                    l = i - 1;
                for (t = void 0 === t ? i : t; ++n < t;) {
                    var a = r(n, l),
                        s = e[a];
                    e[a] = e[n], e[n] = s
                }
                return e.length = t, e
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                i = n("221386"),
                l = "object" == typeof t && t && !t.nodeType && t,
                a = l && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === l ? r.Buffer : void 0,
                o = s ? s.isBuffer : void 0;
            e.exports = o || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                l = n("276440"),
                a = l && l.isTypedArray,
                s = a ? i(a) : r;
            e.exports = s
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                l = n("603108");
            e.exports = function(e) {
                return l(e) ? r(e) : i(e)
            }
        },
        375128: function(e, t, n) {
            var r = n("437083"),
                i = n("329252"),
                l = n("725502");
            e.exports = function(e) {
                return (l(e) ? r : i)(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        164099: function(e, t, n) {
            var r = n("957478"),
                i = n("466731");
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return r
                },
                rgbaToDataURL: function() {
                    return i
                },
                thumbHashToDataURL: function() {
                    return l
                }
            });

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function i(e, t, n) {
                let r = 4 * e + 1,
                    i = 6 + t * (5 + r),
                    l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    s = 1,
                    o = 0;
                for (let e = 0, i = 0, a = r - 1; e < t; e++, a += r - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + s) % 65521; i < a; i++) {
                        let e = 255 & n[i];
                        l.push(e), o = (o + (s = (s + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(o >> 8, 255 & o, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= l[r], n = (n = n >>> 4 ^ a[15 & n]) >>> 4 ^ a[15 & n];
                    n = ~n, l[t++] = n >>> 24, l[t++] = n >> 16 & 255, l[t++] = n >> 8 & 255, l[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...l))
            }

            function l(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: i,
                        cos: l,
                        round: a
                    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, u = (63 & s) / 63, c = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, E = s >> 23, _ = (o >> 3 & 63) / 63, f = (o >> 9 & 63) / 63, I = o >> 15, S = i(3, I ? E ? 5 : 7 : 7 & o), T = i(3, I ? 7 & o : E ? 5 : 7), p = E ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, N = E ? 6 : 5, A = 0, O = (t, n, r) => {
                        let i = [];
                        for (let l = 0; l < n; l++)
                            for (let a = l ? 0 : 1; a * n < t * (n - l); a++) i.push(((e[N + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, h = O(S, T, (s >> 18 & 31) / 31), R = O(3, 3, 1.25 * _), L = O(3, 3, 1.25 * f), g = E && O(5, 5, C), m = r(e), P = a(m > 1 ? 32 : 32 * m), D = a(m > 1 ? 32 / m : 32), v = new Uint8Array(P * D * 4), U = [], M = [];
                    for (let e = 0, r = 0; e < D; e++)
                        for (let a = 0; a < P; a++, r += 4) {
                            let s = u,
                                o = c,
                                _ = d,
                                f = p;
                            for (let e = 0, n = i(S, E ? 5 : 3); e < n; e++) U[e] = l(t / P * (a + .5) * e);
                            for (let n = 0, r = i(T, E ? 5 : 3); n < r; n++) M[n] = l(t / D * (e + .5) * n);
                            for (let e = 0, t = 0; e < T; e++)
                                for (let n = e ? 0 : 1, r = 2 * M[e]; n * T < S * (T - e); n++, t++) s += h[t] * U[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * M[e]; n < 3 - e; n++, t++) {
                                    let e = U[n] * r;
                                    o += R[t] * e, _ += L[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * M[e]; n < 5 - e; n++, t++) f += g[t] * U[n] * r;
                            let I = s - 2 / 3 * o,
                                C = (3 * s - I + _) / 2,
                                N = C - _;
                            v[r] = i(0, 255 * n(1, C)), v[r + 1] = i(0, 255 * n(1, N)), v[r + 2] = i(0, 255 * n(1, I)), v[r + 3] = i(0, 255 * n(1, f))
                        }
                    return {
                        w: P,
                        h: D,
                        rgba: v
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return a
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
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
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                r.default.wait(() => r.default.dispatch({
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
            var r = n("913144");

            function i() {
                r.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("872717"),
                i = n("95410"),
                l = n("913144"),
                a = n("211895"),
                s = n("26092"),
                o = n("599110"),
                u = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                f = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
                            emailToken: s,
                            password: f,
                            avatar: I,
                            newPassword: S,
                            discriminator: T
                        } = e, {
                            close: p
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: s,
                                    password: f,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                l = i.default.get(d.DEVICE_TOKEN),
                                o = (0, E.getDevicePushProvider)();
                            null != o && null != l && (t.push_provider = o, t.push_token = l);
                            let u = i.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), r.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != f && null != S && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), p ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: l.warnIcon
                        }), (0, r.jsx)(i.Text, {
                            className: l.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("782340"),
                u = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: T,
                        errorMessage: p,
                        retrySuccess: C
                    } = this.state, N = i.Children.count(l) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, A = null != I ? (0, r.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, O = C ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != f ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: f
                                }) : null, N, O, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : p
                                    }) : null, A]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        stroke: "string" == typeof a ? a : a.css,
                        strokeLinecap: "round",
                        strokeWidth: "2",
                        d: "M21 12H3",
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        404061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SmileIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.799 1.169a1 1 0 0 1 1.388.275A3.496 3.496 0 0 0 11.999 16a3.495 3.495 0 0 0 2.912-1.556 1 1 0 0 1 1.662 1.112A5.496 5.496 0 0 1 12 18a5.496 5.496 0 0 1-4.573-2.444A1 1 0 0 1 7.7 14.17Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        596256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("775560"),
                l = n("862337");

            function a(e, t) {
                let [n, a] = (0, r.useState)(e), s = (0, i.useLazyValue)(() => new l.Timeout);
                (0, r.useEffect)(() => () => s.stop(), [s]);
                let o = (0, r.useCallback)(n => {
                    a(n), n !== e && s.start(t, () => a(e))
                }, [t, e, s]);
                return [n, o]
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("704744");
            var r = n("913144");
            class i {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("605250"),
                i = n("802493");
            let l = new r.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return l.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    i.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    i.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    i.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let l = i.default.stickersTransaction(r);
                    for (let r of (l.putAll(e, t), n)) l.delete(e, r)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return N
                },
                BlockedPaymentsContentModal: function() {
                    return A
                },
                BlockedPaymentsWarning: function() {
                    return O
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("669491"),
                s = n("819855"),
                o = n("77078"),
                u = n("841098"),
                c = n("145131"),
                d = n("423487"),
                E = n("701909"),
                _ = n("619935"),
                f = n("49111"),
                I = n("782340"),
                S = n("653842"),
                T = n("584503"),
                p = n("45656");

            function C(e) {
                let {
                    className: t
                } = e, n = (0, u.default)(), i = (0, s.isThemeDark)(n) ? T : p;
                return (0, r.jsxs)("div", {
                    className: l(S.container, t),
                    children: [(0, r.jsx)(o.Heading, {
                        className: S.header,
                        variant: "heading-xl/semibold",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(o.Text, {
                        className: S.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: I.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: I.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: E.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: i,
                        className: S.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function N() {
                return (0, r.jsx)(C, {
                    className: S.settings
                })
            }

            function A(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.ModalHeader, {
                        className: S.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(o.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(o.ModalContent, {
                        className: S.blockedPaymentsModalContent,
                        children: (0, r.jsx)(C, {
                            className: S.modal
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    className: t
                } = e, n = (0, _.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(o.Card, {
                    className: l(S.blockedPaymentsWarning, t),
                    type: o.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: S.blockedPaymentsWarningIcon,
                        color: a.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: E.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var r, i, l, a, s, o, u, c, d, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return i
                },
                EmojiSubCategory: function() {
                    return l
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return C
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                REACTION_PICKER_TAB_ID: function() {
                    return A
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return O
                },
                SuperReactionBalanceLocations: function() {
                    return o
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                GIF_PICKER_TAB_ID: function() {
                    return R
                },
                EMOJI_SIZE_MAP: function() {
                    return L
                },
                EMOJI_ROW_SIZE: function() {
                    return g
                }
            }), (u = r || (r = {})).GUILD = "GUILD", u.PACK = "PACK", u.UNICODE = "UNICODE", u.RECENT = "RECENT", u.CUSTOM = "CUSTOM", u.SEARCH_RESULTS = "SEARCH_RESULTS", u.FAVORITES = "FAVORITES", u.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", u.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = i || (i = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = l || (l = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = a || (a = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = s || (s = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let S = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                p = "soundboard-picker-tab-panel",
                C = "soundboard-picker-tab",
                N = "reaction-picker-tab-panel",
                A = "reaction-picker-tab",
                O = "super-reaction-picker-tab";
            (o || (o = {})).TOOLTIP = "tooltip";
            let h = "gif-picker-tab-panel",
                R = "gif-picker-tab",
                L = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                g = 9
        },
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return d
                },
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("75196"),
                s = n("956089"),
                o = n("125835"),
                u = n("782340"),
                c = n("159163");

            function d(e) {
                return (0, r.jsx)("svg", {
                    ...(0, a.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function E(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: i = !1,
                    shouldInheritBackgroundColor: a = !1
                } = e;
                return (0, r.jsx)(o.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, r.jsx)(s.TextBadge, {
                        disableColor: !0,
                        className: l(c.tag, {
                            [c.inheritTextColor]: i,
                            [c.inheritBackgroundColor]: a
                        }),
                        text: u.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("642032"),
                s = n("767964");

            function o(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: i = !1,
                    hideStars: o
                } = e;
                return (0, r.jsxs)("span", {
                    className: l(s.container, t, {
                        [s.containerColored]: i
                    }),
                    children: [n, o ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a.default, {
                            foreground: s.sparkleStarTopRight
                        }), (0, r.jsx)(a.default, {
                            foreground: s.sparkleStarRight
                        }), (0, r.jsx)(a.default, {
                            foreground: s.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var r = n("65597"),
                i = n("862205"),
                l = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: r,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, s = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: s ? r : l
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, r.default)([l.default], () => l.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = u({
                        user: i,
                        config: a
                    }), E = s && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                E = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        159149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAType: function() {
                    return i
                },
                default: function() {
                    return _
                }
            });
            var r, i, l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("145131"),
                o = n("181114"),
                u = n("376641"),
                c = n("782340"),
                d = n("198699");
            (r = i || (i = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
            let E = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: r,
                    primaryCTA: E,
                    primaryType: _,
                    primaryText: f,
                    primaryTooltip: I,
                    primaryDisabled: S,
                    primarySubmitting: T,
                    onPrimary: p,
                    secondaryText: C,
                    onSecondary: N
                } = e;
                return (0, l.jsxs)(a.ModalFooter, {
                    justify: s.default.Justify.BETWEEN,
                    align: s.default.Align.CENTER,
                    children: [(() => {
                        if (null == E || null == f) return null;
                        let e = E === i.PURCHASE ? o.default : a.Button,
                            t = {
                                innerClassName: d.button,
                                type: _,
                                disabled: S,
                                submitting: T,
                                color: E === i.CONTINUE ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                                onClick: p
                            };
                        return null != I ? (0, l.jsx)(a.Tooltip, {
                            text: I,
                            children: n => (0, l.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == r ? null : (0, l.jsx)(r, {
                                    className: d.primaryIcon
                                }), f]
                            })
                        }) : (0, l.jsxs)(e, {
                            ...t,
                            children: [null == r ? null : (0, l.jsx)(r, {
                                className: d.primaryIcon
                            }), f]
                        })
                    })(), null == C ? null : (0, l.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: N,
                        children: C
                    }), (0, l.jsx)(u.default, {}), null == t ? null : (0, l.jsx)(a.Button, {
                        className: d.back,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            E.CTAType = i;
            var _ = E
        },
        376641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                s = n("600785"),
                o = n("782340"),
                u = n("980638"),
                c = n("173791");

            function d() {
                return (0, r.jsxs)("div", {
                    className: l(u.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, r.jsx)(s.default, {
                        className: u.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: o.default.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("817736"),
                c = n.n(u),
                d = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function f(e) {
                var t, n, l, s, u, c;
                let {
                    header: f,
                    isLargeModal: I,
                    stepProps: S
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...r
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: r
                    }
                }(e), {
                    step: T,
                    stepConfigs: p,
                    setBodyNode: C,
                    setFooterNode: N,
                    setModalOverlayNode: A,
                    setReadySlideId: O
                } = (0, E.usePaymentContext)(), h = p.find(e => e.key === T);
                i.useEffect(() => {
                    A(null)
                }, [T, A]), o(null != h, "Unknown step for current payment flow.");
                let R = null !== (u = null == h ? void 0 : null === (t = h.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    L = null == h ? void 0 : null === (n = h.options) || void 0 === n ? void 0 : n.bodyClassName,
                    g = void 0 !== I && I ? _.sliderBodyLarge : null == h ? void 0 : null === (l = h.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (c = null == h ? void 0 : null === (s = h.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === c || c ? f : null, h.renderStep(S), null == T || R ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.ModalContent, {
                            className: a(_.body, L),
                            children: (0, r.jsx)(d.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: e => O(e),
                                children: p.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: a(_.sliderBody, g),
                                        ref: e => C(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => N(e)
                        }), (0, r.jsx)("div", {
                            ref: e => A(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function S(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                l = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: f,
                    onComplete: I,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: T,
                    analyticsObject: p,
                    analyticsLocation: C,
                    analyticsSourceLocation: N,
                    isGift: A = !1,
                    giftMessage: O,
                    subscriptionTier: h,
                    trialId: R,
                    postSuccessGuild: L,
                    openInvoiceId: g,
                    applicationId: m,
                    referralTrialOfferId: P,
                    giftRecipient: D,
                    returnRef: v
                } = null != e ? e : {}, U = !1, M = (0, i.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...l
                        } = n;
                        return (0, r.jsx)(e, {
                            ...l,
                            loadId: M,
                            subscriptionTier: h,
                            skuId: h,
                            isGift: A,
                            giftMessage: O,
                            giftRecipient: D,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                i(), null == f || f(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                U = !0, null == I || I(), !A && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: T,
                            analyticsObject: p,
                            analyticsLocation: C,
                            analyticsSourceLocation: N,
                            trialId: R,
                            postSuccessGuild: L,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: g,
                            applicationId: m,
                            referralTrialOfferId: P,
                            returnRef: v
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : p,
                            source: N,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != R,
                            application_id: m,
                            location_stack: T
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == f || f(U), U && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return E
                },
                getLocalizedPricingNotice: function() {
                    return f
                },
                getLocalizedPricingBannerStrings: function() {
                    return I
                }
            });
            var r = n("592861"),
                i = n("988415"),
                l = n("701909"),
                a = n("153160"),
                s = n("49111"),
                o = n("843455"),
                u = n("782340");
            let c = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
                d = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
                E = {
                    [s.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [s.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [s.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [s.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [s.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [s.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [s.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [s.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [s.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [s.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [s.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [s.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [s.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [s.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [s.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [s.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                _ = [s.PaymentSourceTypes.EPS, s.PaymentSourceTypes.BANCONTACT, s.PaymentSourceTypes.IDEAL, s.PaymentSourceTypes.SOFORT, s.PaymentSourceTypes.GIROPAY, s.PaymentSourceTypes.SEPA_DEBIT, s.PaymentSourceTypes.PAYSAFE_CARD],
                f = (e, t, n, r) => {
                    if (null == e) return "";
                    let l = (0, i.getI18NCountryName)(e);
                    if (t === o.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: l
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: l
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: l
                    })
                },
                I = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: f
                    } = e, {
                        countryCode: I,
                        amount: T,
                        currency: p,
                        paymentSourceTypes: C
                    } = t, N = 0 !== C.length, A = S(I), O = (0, a.formatPrice)(T, p, {
                        style: "currency",
                        currency: p,
                        currencyDisplay: "symbol",
                        localeOverride: A
                    }), h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: p.toUpperCase(),
                        localizedPriceWithCurrencySymbol: O
                    });
                    if (d.has(p) && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: O
                        })), c.has(p) && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: p.toUpperCase(),
                            localizedPriceWithCurrencySymbol: O
                        })), null != n && !n.hasPremiumNitroMonthly && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: p.toUpperCase()
                        })), p === o.CurrencyCodes.EUR && (h = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, i.getI18NCountryName)(I),
                            currencyISOCode: p.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: p.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        })), N) {
                        let e = _.filter(e => C.includes(e)),
                            t = C.filter(e => !_.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.call(E)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        C.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let i = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        h = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: i.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, i.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: h,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: N ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                S = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return E
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return S
                },
                getItemUnitPriceWithDiscount: function() {
                    return T
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("872717"),
                a = n("448993"),
                s = n("195358"),
                o = n("521012"),
                u = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: E,
                    metadata: _
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let f = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: i,
                    apply_entitlements: o,
                    currency: d,
                    renewal: E,
                    metadata: _
                };
                try {
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function E(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: i,
                    renewal: o,
                    currency: d,
                    applyEntitlements: E = !1,
                    analyticsLocations: _,
                    analyticsLocation: f
                } = e;
                null != r && (r = (0, u.coerceExistingItemsToNewItemInterval)(r));
                let I = {
                    items: null === (t = r) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: i,
                    renewal: o,
                    apply_entitlements: E,
                    currency: d
                };
                try {
                    let e = await l.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: f,
                            location_stack: _
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await l.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [l, a] = (0, r.useState)(null), [s, u] = (0, r.useState)(null), c = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), a(null);
                            let n = await t();
                            !e && a(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [l, s]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function S(e) {
                let t = (0, r.useCallback)(() => _(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function T(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return s
                },
                hasActiveTrial: function() {
                    return o
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return c
                }
            });
            var r = n("446674"),
                i = n("697218"),
                l = n("521012"),
                a = n("646718");
            let s = () => {
                    let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                o = () => {
                    var e;
                    return (null === (e = l.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function c() {
                let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    t = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return i
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
            var r = n("913144");
            let i = () => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    r.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    r.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        22368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("85336"),
                l = n("286350");

            function a(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: a,
                    purchaseScene: s,
                    errorScene: o,
                    successScene: u
                } = e, [c, d] = (0, r.useState)(a);
                return (0, r.useEffect)(() => {
                    t === l.PurchaseState.PURCHASING ? d(s) : t === l.PurchaseState.FAIL && d(o)
                }, [t, s, o]), (0, r.useEffect)(() => {
                    n === i.Step.CONFIRM && d(u)
                }, [n, u]), [c, d]
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("153160"),
                s = n("646718"),
                o = n("782340"),
                u = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: E = !1
                } = e, _ = (0, a.formatPrice)(t, n), f = null;
                return i === s.SubscriptionIntervalTypes.YEAR ? f = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: _
                }) : i === s.SubscriptionIntervalTypes.MONTH && 1 === d ? f = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: _
                }) : i === s.SubscriptionIntervalTypes.MONTH && d > 1 && (f = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: _,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: l(u.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || E ? (0, r.jsx)("strong", {
                        children: _
                    }) : f
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("849085");
            let o = i.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: i
                } = e;
                return (0, r.jsx)("div", {
                    className: a(s.wrapper, {
                        [s.wrapperActive]: n
                    }),
                    ref: t,
                    children: i
                })
            });
            var u = o
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var r, i, l = n("773336");
            let a = null;

            function s() {
                return (0, l.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let l = 32,
                a = 5,
                s = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var r, i, l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                o = n("913144"),
                u = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                S = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                p = new Map,
                C = new Set,
                N = i.NOT_FETCHED,
                A = i.NOT_FETCHED,
                O = new Set,
                h = new Map,
                R = !1;

            function L(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let g = a.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function m(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? C.add(e) : C.delete(e);
                for (let e of C.keys()) null == r[e] && C.delete(e)
            }
            class P extends s.default.Store {
                initialize() {
                    this.waitFor(c.default), m(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(O),
                        localSoundboardMutes: Array.from(C)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(f.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return A === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return N === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return N === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return N === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = h.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return O.has(e)
                }
                getFavorites() {
                    return O
                }
                isLocalSoundboardMuted(e) {
                    return C.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return R
                }
                hasFetchedAllSounds() {
                    return A === i.FETCHED && N === i.FETCHED
                }
            }
            P.displayName = "SoundboardStore";
            var D = new P(o.default, {
                LOGOUT: function() {
                    T.clear(), p.clear(), h.clear(), R = !1, A = i.NOT_FETCHED, N = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: L,
                GUILD_SOUNDBOARD_SOUND_UPDATE: L,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let r = T.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: l
                    } = e, a = (null !== (n = p.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = h.get(l)) && void 0 !== r ? r : 0) + 1;
                    p.set(i, a), h.set(l, s), l !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (R = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, l = (null !== (t = p.get(r)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? p.delete(r) : p.set(r, l), a <= 0 ? h.delete(i) : h.set(i, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    g(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), h.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, l;
                        O = new Set(null !== (l = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== l ? l : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && m(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), N = i.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        T.set(t, n)
                    }), A = i.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    C.has(t) ? C.delete(t) : C.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), O = new Set(t.favoritedSoundIds), C = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var r, i, l = n("102053"),
                a = n("446674"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                S = n("161585"),
                T = n("24373"),
                p = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let C = 2,
                N = new Map,
                A = new Map,
                O = null,
                h = [],
                R = null,
                L = !1,
                g = new Map,
                m = (e, t) => {
                    g = new Map(g.set(e, t))
                },
                P = 1e3 * p.Durations.HOUR,
                D = () => {
                    if (0 !== C) return;
                    let e = o.default.database();
                    if (null == e) return;
                    C = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !g.has(e)) {
                                for (let t of n) v(t, !0, I.default.getGuild(e));
                                m(e, n)
                            }
                    }
                },
                v = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    A.set(e.id, e), t && U(e, n)
                },
                U = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == O) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: S.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = h.find(t => t.id === e.pack_id),
                            i = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: S.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: S.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), O.set(e.id, i)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let i = d.default.getByName(n),
                            l = {
                                type: S.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [r, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: S.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            O.set(e.id, a);
                            return
                        }
                        a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), O.set(e.id, a)
                    }
                },
                M = (e, t, n) => {
                    N.set(e.id, e);
                    let r = [...h];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), h = r
                    }(t || n) && e.stickers.forEach(e => v(e))
                },
                y = () => {
                    g.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => U(e, n))
                    }), h.forEach(e => {
                        e.stickers.forEach(e => U(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => v(t, !0, e)), m(e.id, e.stickers))
            }
            class x extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== C
                }
                get stickerMetadata() {
                    return D(), null == O && (O = new Map, y()), O
                }
                get hasLoadedStickerPacks() {
                    return null != R && R + P > Date.now()
                }
                get isFetchingStickerPacks() {
                    return L
                }
                getStickerById(e) {
                    return !A.has(e) && D(), A.get(e)
                }
                getStickerPack(e) {
                    return N.get(e)
                }
                getPremiumPacks() {
                    return h
                }
                isPremiumPack(e) {
                    return h.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return g
                }
                getAllStickersIterator() {
                    return D(), A.values()
                }
                getAllGuildStickers() {
                    return D(), g
                }
                getStickersByGuildId(e) {
                    return D(), g.get(e)
                }
            }
            x.displayName = "StickersStore";
            var B = new x(s.default, {
                BACKGROUND_SYNC: () => {
                    O = null, A = new Map, g = new Map, C = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    O = null, A = new Map, g = new Map, t.forEach(G), C = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (G(t), 1 === C && null == t.stickers && null != t.stickerUpdates && (C = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = g.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != O && O.delete(e.id), A.delete(e.id)
                    }), g.delete(n.id), g = new Map(g)
                },
                LOGOUT: () => {
                    C = 0, h = [], A.clear(), N.clear(), O = null, g.clear(), g = new Map(g), L = !1, R = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    L = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), R = Date.now(), L = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    M(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => v(e)), m(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, l = null !== (t = g.get(r)) && void 0 !== t ? t : [];
                    m(r, [...null !== (n = l.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), v(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    v(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = A.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = g.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == r.find(t => t.id === e.id));
                    a.forEach(e => {
                        A.delete(e.id), null != O && O.delete(e.id)
                    });
                    let s = r.map(e => i(e));
                    s.forEach(e => v(e)), m(n, s)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return l
                },
                canSuppressNotifications: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var r = n("729912");
            let i = "@silent",
                l = new RegExp("^".concat(i, "(\\s|$)"));

            function a() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return a() && null != e.match(l) ? [!0, e.substring(i.length).trim()] : [!1, e]
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("913144"),
                i = n("54239"),
                l = n("49111");

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, i.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, l, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (l = r || (r = {}))[l.BACKGROUND = 0] = "BACKGROUND", (a = i || (i = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let s = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10],
                o = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10, i.OPTION_1, i.OPTION_2, i.OPTION_3, i.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class i extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("619340"),
                a = n("376556"),
                s = n("450205"),
                o = n("813006"),
                u = n("49111");
            let c = new Set([u.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                S = e => {
                    E = e.filter(e => !c.has(e.type) && a.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var p = new T(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    S(t)
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
                        S(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: i
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != r && (l.revoked = r), null != i && (l.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                a = n("49111");
            let s = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    o = null != i ? {
                        state: a.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                a = n("913144"),
                s = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                S = null,
                T = !1,
                p = !1,
                C = null,
                N = null,
                A = null,
                O = [],
                h = null,
                R = null;

            function L(e) {
                var t, n, r, i, l, a;
                let c = s.default.getCurrentUser();
                if (null == c) return g();
                d = null !== (t = e.section) && void 0 !== t ? t : d, h = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), p = !!e.openWithoutBackstack, u = o.FormStates.OPEN, f = {}, S = {
                    ...I = {
                        [o.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, N = null !== (r = e.onClose) && void 0 !== r ? r : null, A = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, O = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], R = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function g() {
                u = o.FormStates.CLOSED, T = !1, I = null, h = null, S = null, c = null, d = null, E = {}, _ = {}, N = null, A = null, O = [], R = null
            }

            function m() {
                u = o.FormStates.OPEN, f = {}
            }
            class P extends l.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || C === o.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(S, I)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? _[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: S,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: A,
                        analyticsLocations: O,
                        initialSection: h,
                        impressionSource: R
                    }
                }
                get onClose() {
                    return N
                }
            }
            P.displayName = "UserSettingsModalStore";
            var D = new P(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, L(e)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: g,
                LOGOUT: g,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, d = o.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, A = null, O = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[o.UserSettingsSections.ACCOUNT];
                    S[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    m(), null != e && (S = {
                        ...I = {
                            [o.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return C = e.tab, null == d && C === o.DrawerTabTypes.USER_SETTINGS && L({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("913144");
            let a = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class s extends i.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : a
                }
                getState() {
                    return r
                }
                get hasAcceptedStoreTerms() {
                    return r.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return r.hasAcceptedEulaIds.includes(e)
                }
            }
            s.displayName = "ApplicationStoreUserSettingsStore", s.persistKey = "ApplicationStoreUserSettingsStore", s.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new s(l.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    r.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (r.hasAcceptedEulaIds.includes(t)) return !1;
                    r.hasAcceptedEulaIds.push(t)
                }
            })
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return s
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("748820"),
                a = n("669491");
            let s = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(s.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(s.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(s.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(s.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(s.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(s.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                E = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                _ = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                I = i.memo(function() {
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), E(), _(), f()]
                    })
                }, () => !0);
            var S = I
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return N
                },
                PremiumPaymentAnimationTier1: function() {
                    return O
                },
                PremiumPaymentAnimationTier2: function() {
                    return g
                },
                PremiumPaymentGuildAnimation: function() {
                    return M
                }
            });
            var r, i, l, a, s, o, u, c, d = n("37983"),
                E = n("884691"),
                _ = n("414456"),
                f = n.n(_),
                I = n("301165"),
                S = n("458960"),
                T = n("273108"),
                p = n("635233");
            (r = s || (s = {})).NORMAL = "normal", r.SPEED_START = "speed_start", r.SPEED_LOOP = "speed_loop", r.FINISH = "finish", r.IDLE = "idle";
            let C = {
                [s.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [s.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [s.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [s.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [s.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class N extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case N.Scenes.SPEED_START:
                            return N.Scenes.SPEED_LOOP;
                        case N.Scenes.FINISH:
                            return N.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(T.default, {
                        className: f(p.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? s.IDLE : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            N.Scenes = s, (i = o || (o = {})).NORMAL = "normal", i.SPEED_START = "speed_start", i.SPEED_LOOP = "speed_loop", i.FINISH = "finish", i.IDLE = "idle";
            let A = {
                [o.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [o.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [o.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [o.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [o.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class O extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case O.Scenes.SPEED_START:
                            return O.Scenes.SPEED_LOOP;
                        case O.Scenes.FINISH:
                            return O.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("549988").then(n.t.bind(n, "549988", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(T.default, {
                        className: f(p.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? o.IDLE : t,
                        sceneSegments: A,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            O.Scenes = o, (l = u || (u = {})).IDLE_ENTRY = "idle_entry", l.IDLE_LOOP = "idle_loop", l.BOOST_START = "boost_start", l.BOOST_LOOP = "boost_loop", l.BOOST_END = "boost_end", l.VICTORY = "victory", l.ERROR = "error";
            let h = {
                [u.IDLE_ENTRY]: {
                    BEG: 0,
                    END: 50
                },
                [u.IDLE_LOOP]: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                [u.BOOST_START]: {
                    BEG: 230,
                    END: 275
                },
                [u.BOOST_LOOP]: {
                    BEG: 275,
                    END: 290
                },
                [u.BOOST_END]: {
                    BEG: 386,
                    END: 455
                },
                [u.VICTORY]: {
                    BEG: 470,
                    END: 525
                },
                [u.ERROR]: {
                    BEG: 290,
                    END: 375
                }
            };
            class R extends E.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: p.panningAnimation,
                        children: [(0, d.jsx)(S.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(S.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let L = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: S.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class g extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case g.Scenes.IDLE_ENTRY:
                            return g.Scenes.IDLE_LOOP;
                        case g.Scenes.BOOST_START:
                            return g.Scenes.BOOST_LOOP;
                        case g.Scenes.BOOST_END:
                            return g.Scenes.VICTORY;
                        case g.Scenes.VICTORY:
                            return g.Scenes.IDLE_ENTRY;
                        case g.Scenes.ERROR:
                            return g.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    S.default.parallel([S.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), S.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(L.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(L.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    S.default.parallel([S.default.timing(this.foregroundAnimation.y, {
                        toValue: L.BOOST_START.toValue,
                        duration: L.BOOST_START.duration,
                        delay: L.BOOST_START.delay
                    }), S.default.timing(this.backgroundAnimation.y, {
                        toValue: L.BOOST_START.toValue,
                        duration: 1.2 * L.BOOST_START.duration,
                        delay: L.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: f(p.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: p.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: p.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: p.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(R, {
                                className: p.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(R, {
                                className: p.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(T.default, {
                            className: p.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? u.IDLE_LOOP : t,
                            sceneSegments: h,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: r,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new S.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new S.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), S.default.timing(this.backgroundAnimation.x, {
                            toValue: L.IDLE_LOOP.toValue,
                            duration: 1.2 * L.IDLE_LOOP.duration,
                            easing: S.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), S.default.timing(this.foregroundAnimation.x, {
                            toValue: L.IDLE_LOOP.toValue,
                            duration: L.IDLE_LOOP.duration,
                            easing: L.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case u.IDLE_ENTRY:
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case u.ERROR:
                                this.animateError();
                                break;
                            case u.BOOST_START:
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            g.Scenes = u, (a = c || (c = {})).ENTRY = "entry", a.IDLE = "idle", a.STARS = "stars", a.ERROR = "error", a.SUCCESS = "success";
            let m = {
                    [c.ENTRY]: {
                        BEG: 0,
                        END: 180
                    },
                    [c.IDLE]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.STARS]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.ERROR]: {
                        BEG: 360,
                        END: 540
                    },
                    [c.SUCCESS]: {
                        BEG: 540,
                        END: 778
                    }
                },
                P = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                D = [{
                    left: 29,
                    top: 100,
                    color: P.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: P.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: P.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: P.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: P.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: P.PINK
                }],
                v = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: S.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: S.default.Easing.bezier(0, -.01, .99, 0)
                });

            function U(e) {
                let {
                    animate: t
                } = e, [n, r] = E.useState(0), i = (0, I.useSprings)(D.length, D.map((e, i) => {
                    let l = i > 0 ? v.DELAY_STAGGER * i + Math.random() * (v.DELAY_MAX - v.DELAY_MIN) + v.DELAY_MIN : 0,
                        a = Math.random() * (v.SIZE_MAX - v.SIZE_MIN) + v.SIZE_MIN;
                    return {
                        from: {
                            scale: v.SCALE_INITIAL,
                            rotate: v.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: a,
                            height: a
                        },
                        to: async e => {
                            t ? (await e({
                                scale: v.SCALE_MIDDLE,
                                rotate: v.ROTATE_MIDDLE,
                                delay: l,
                                config: {
                                    duration: v.DURATION_MIDDLE,
                                    easing: v.EASING_MIDDLE
                                }
                            }), await e({
                                scale: v.SCALE_END,
                                rotate: v.ROTATE_END,
                                config: {
                                    duration: v.DURATION_END,
                                    easing: v.EASING_END
                                }
                            }), await e({
                                scale: v.SCALE_INITIAL,
                                rotate: v.ROTATE_INITIAL,
                                immediate: !0
                            }), i === D.length - 1 && r(n + 1)) : await e({
                                scale: v.SCALE_INITIAL,
                                rotate: v.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = D[t];
                        return (0, d.jsx)(I.animated.svg, {
                            style: e,
                            className: p.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, d.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class M extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case c.ENTRY:
                        case c.ERROR:
                        case c.SUCCESS:
                            return c.IDLE;
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: r,
                        onSceneComplete: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: f(p.guildWrapper, e),
                        children: [(0, d.jsx)(T.default, {
                            className: p.guildBackground,
                            importData: this.importData,
                            nextScene: n ? c.IDLE : t,
                            sceneSegments: m,
                            onScenePlay: r,
                            onSceneComplete: i,
                            pauseWhileUnfocused: l,
                            pause: n
                        }), (0, d.jsx)(U, {
                            animate: !n && t === c.STARS
                        })]
                    })
                }
            }
            M.Scenes = c
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("206230"),
                u = n("471671"),
                c = n("629758");
            class d extends i.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: i,
                        isWindowFocused: l,
                        useReducedMotion: a
                    } = this.props, [s, {
                        default: o
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 21))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !l || i || a) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: i,
                        pauseWhileUnfocused: l,
                        pause: a,
                        isWindowFocused: s,
                        useReducedMotion: o
                    } = this.props;
                    i !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(i), null != this.animation && (l && !e.isWindowFocused && s && !o && !0 !== a ? this.animation.play() : (o || l && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && a && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: r
                    } = this.props, i = n[e], l = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || i.BEG !== l.BEG || i.END !== l.END) && this.animation.playSegments([i.BEG, i.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var a;
                        null === (a = this.animation) || void 0 === a || a.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: a(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var E = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, i = (0, s.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, r.jsx)(d, {
                    ...n,
                    isWindowFocused: i,
                    useReducedMotion: l,
                    ref: t
                })
            }
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
            var r = n("995008"),
                i = n.n(r),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
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
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                E = n("4177");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                f = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: f = "currentColor",
                        transition: I = E.transition,
                        className: S,
                        foreground: T,
                        expanded: p,
                        ...C
                    } = e, {
                        enabled: N
                    } = (0, c.useRedesignIconContext)(), A = t;
                    if (!0 === p ? A = _.DOWN : !1 === p && (A = _.RIGHT), N) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: a.ChevronSmallDownIcon,
                            [_.LEFT]: s.ChevronSmallLeftIcon,
                            [_.RIGHT]: o.ChevronSmallRightIcon
                        } [A];
                        return (0, r.jsx)(e, {
                            ...C,
                            className: S,
                            width: n,
                            height: i,
                            color: f,
                            colorClass: T
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(S, I, A),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(C),
                        children: (0, r.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = _;
            var I = f
        },
        46829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("404061"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    })
                }, l.SmileIcon)
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: l,
                        className: a
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: l,
                        className: a
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("763377"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, l.CircleQuestionIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("202909"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("424823"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("434657"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, l.LockIcon)
        },
        642032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: l = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)({
                        ...s
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 ".concat(t, " ").concat(n),
                    className: a,
                    fill: l,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("457802"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, l.MinusIcon)
        },
        719347: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return l
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return a
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return s
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let l = 550,
                a = 350,
                s = 40;
            (i = r || (r = {})).STATIC = "STATIC", i.RESPONSIVE = "RESPONSIVE", i.MOSAIC = "MOSAIC";
            let o = 20
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("697218"),
                a = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == r) {
                    null == o || o();
                    return
                }
                let c = r(f, d, a);

                function d() {
                    null == o || o()
                }

                function E(e) {
                    i(c), n(e)
                }

                function _(e) {
                    i(c), l(e)
                }

                function f(e) {
                    return s(c, f, d, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(c, f, d, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = o,
                    isModalOpen: a = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = a, i.body && 60008 === i.body.code || o && 429 === i.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...s
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                i = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: r,
                    ...l
                } = t, a = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...a,
                            ...s
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return l(r.default.get, e, "get")
                },
                post: function(e) {
                    return l(r.default.post, e, "post")
                },
                put: function(e) {
                    return l(r.default.put, e, "put")
                },
                patch: function(e) {
                    return l(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, r) {
                return (0, i.updateModal)(e, a(t, n, r))
            }
        }
    }
]);