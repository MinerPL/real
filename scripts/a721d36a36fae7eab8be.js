(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71529"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (u = t[2].split("-")).shift(), r = u);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var l = [];
                if (t[6]) {
                    (u = t[6].split("-")).shift();
                    for (var u, s, a = []; u.length;) {
                        var o = u.shift();
                        1 === o.length ? s ? (l.push({
                            singleton: s,
                            extension: a
                        }), s = o, a = []) : s = o : a.push(o)
                    }
                    l.push({
                        singleton: s,
                        extension: a
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
                u = n("591350"),
                s = n("476540"),
                a = n("381178"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && i(e),
                    d = !n && !c && u(e),
                    _ = !n && !c && !d && a(e),
                    E = n || c || d || _,
                    f = E ? r(e.length, String) : [],
                    I = f.length;
                for (var T in e)(t || o.call(e, T)) && !(E && ("length" == T || d && ("offset" == T || "parent" == T) || _ && ("buffer" == T || "byteLength" == T || "byteOffset" == T) || s(T, I))) && f.push(T);
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
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && i(e.length) && !!u[r(e)]
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
                u = l && l.exports === i && r.process,
                s = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return u && u.binding && u.binding("util")
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
                    var u = r(n, l),
                        s = e[u];
                    e[u] = e[n], e[n] = s
                }
                return e.length = t, e
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                i = n("221386"),
                l = "object" == typeof t && t && !t.nodeType && t,
                u = l && "object" == typeof e && e && !e.nodeType && e,
                s = u && u.exports === l ? r.Buffer : void 0,
                a = s ? s.isBuffer : void 0;
            e.exports = a || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                l = n("276440"),
                u = l && l.isTypedArray,
                s = u ? i(u) : r;
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
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
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
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    s = 1,
                    a = 0;
                for (let e = 0, i = 0, u = r - 1; e < t; e++, u += r - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), a = (a + s) % 65521; i < u; i++) {
                        let e = 255 & n[i];
                        l.push(e), a = (a + (s = (s + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(a >> 8, 255 & a, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= l[r], n = (n = n >>> 4 ^ u[15 & n]) >>> 4 ^ u[15 & n];
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
                        round: u
                    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, a = e[3] | e[4] << 8, o = (63 & s) / 63, c = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, _ = s >> 23, E = (a >> 3 & 63) / 63, f = (a >> 9 & 63) / 63, I = a >> 15, T = i(3, I ? _ ? 5 : 7 : 7 & a), S = i(3, I ? 7 & a : _ ? 5 : 7), p = _ ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, O = _ ? 6 : 5, N = 0, C = (t, n, r) => {
                        let i = [];
                        for (let l = 0; l < n; l++)
                            for (let u = l ? 0 : 1; u * n < t * (n - l); u++) i.push(((e[O + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, P = C(T, S, (s >> 18 & 31) / 31), L = C(3, 3, 1.25 * E), g = C(3, 3, 1.25 * f), R = _ && C(5, 5, A), h = r(e), D = u(h > 1 ? 32 : 32 * h), U = u(h > 1 ? 32 / h : 32), m = new Uint8Array(D * U * 4), v = [], M = [];
                    for (let e = 0, r = 0; e < U; e++)
                        for (let u = 0; u < D; u++, r += 4) {
                            let s = o,
                                a = c,
                                E = d,
                                f = p;
                            for (let e = 0, n = i(T, _ ? 5 : 3); e < n; e++) v[e] = l(t / D * (u + .5) * e);
                            for (let n = 0, r = i(S, _ ? 5 : 3); n < r; n++) M[n] = l(t / U * (e + .5) * n);
                            for (let e = 0, t = 0; e < S; e++)
                                for (let n = e ? 0 : 1, r = 2 * M[e]; n * S < T * (S - e); n++, t++) s += P[t] * v[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * M[e]; n < 3 - e; n++, t++) {
                                    let e = v[n] * r;
                                    a += L[t] * e, E += g[t] * e
                                }
                            if (_)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * M[e]; n < 5 - e; n++, t++) f += R[t] * v[n] * r;
                            let I = s - 2 / 3 * a,
                                A = (3 * s - I + E) / 2,
                                O = A - E;
                            m[r] = i(0, 255 * n(1, A)), m[r + 1] = i(0, 255 * n(1, O)), m[r + 2] = i(0, 255 * n(1, I)), m[r + 3] = i(0, 255 * n(1, f))
                        }
                    return {
                        w: D,
                        h: U,
                        rgba: m
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
                    return u
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

            function u() {
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
                    return u
                },
                updateAddressInfo: function() {
                    return s
                },
                clearError: function() {
                    return a
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

            function u() {
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

            function a() {
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
                u = n("211895"),
                s = n("26092"),
                a = n("599110"),
                o = n("315102"),
                c = n("730622"),
                d = n("49111"),
                _ = n("191349"),
                E = n("782340"),
                f = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, u.default)(e, t, n)
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
                            email: u,
                            emailToken: s,
                            password: f,
                            avatar: I,
                            newPassword: T,
                            discriminator: S
                        } = e, {
                            close: p
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: s,
                                    password: f,
                                    avatar: I,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != S && "" !== S ? S : void 0
                                },
                                l = i.default.get(d.DEVICE_TOKEN),
                                a = (0, _.getDevicePushProvider)();
                            null != a && null != l && (t.push_provider = a, t.push_token = l);
                            let o = i.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), r.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return a.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != f && null != T && l.default.dispatch({
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
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("135898"),
                u = function(e) {
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
                u = n.n(l),
                s = n("77078"),
                a = n("782340"),
                o = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: _,
                        transitionState: E,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: S,
                        errorMessage: p,
                        retrySuccess: A
                    } = this.state, O = i.Children.count(l) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: o.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, N = null != I ? (0, r.jsxs)(s.Text, {
                        className: u(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: u(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, C = A ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: E,
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
                                    className: o.spacing,
                                    children: f
                                }) : null, O, C, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != c ? c : p
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: d || 0 === S.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("775560"),
                l = n("862337");

            function u(e, t) {
                let [n, u] = (0, r.useState)(e), s = (0, i.useLazyValue)(() => new l.Timeout);
                (0, r.useEffect)(() => () => s.stop(), [s]);
                let a = (0, r.useCallback)(n => {
                    u(n), n !== e && s.start(t, () => u(e))
                }, [t, e, s]);
                return [n, a]
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
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return u
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return s
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return a
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var r = n("476765"),
                i = n("782340");
            let l = (0, r.uid)(),
                u = (0, r.uid)(),
                s = (0, r.uid)(),
                a = (0, r.uid)();

            function o() {
                [{
                    id: l,
                    text: ","
                }, {
                    id: u,
                    text: ","
                }, {
                    id: s,
                    text: i.default.Messages.REACTIONS
                }, {
                    id: a,
                    text: i.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, r = document.getElementById(t);
                    null == r && ((r = document.createElement("div")).setAttribute("id", t), r.innerText = n, r.style.display = "none", document.body.appendChild(r))
                })
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("605250"),
                i = n("802493");
            let l = new r.default("GuildStickers");
            var u = new class e {
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
            var r, i, l, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = i || (i = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return O
                },
                BlockedPaymentsContentModal: function() {
                    return N
                },
                BlockedPaymentsWarning: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("669491"),
                s = n("819855"),
                a = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                _ = n("701909"),
                E = n("619935"),
                f = n("49111"),
                I = n("782340"),
                T = n("653842"),
                S = n("584503"),
                p = n("45656");

            function A(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), i = (0, s.isThemeDark)(n) ? S : p;
                return (0, r.jsxs)("div", {
                    className: l(T.container, t),
                    children: [(0, r.jsx)(a.Heading, {
                        className: T.header,
                        variant: "heading-xl/semibold",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(a.Text, {
                        className: T.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: I.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: I.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: _.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: i,
                        className: T.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function O() {
                return (0, r.jsx)(A, {
                    className: T.settings
                })
            }

            function N(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.ModalHeader, {
                        className: T.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(a.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(a.ModalContent, {
                        className: T.blockedPaymentsModalContent,
                        children: (0, r.jsx)(A, {
                            className: T.modal
                        })
                    })]
                })
            }

            function C(e) {
                let {
                    className: t
                } = e, n = (0, E.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(a.Card, {
                    className: l(T.blockedPaymentsWarning, t),
                    type: a.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: T.blockedPaymentsWarningIcon,
                        color: u.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: _.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = n("171210").default
        },
        115279: function(e, t, n) {
            "use strict";
            var r, i, l, u, s, a, o, c, d, _, E;
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
                    return T
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return S
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return a
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return P
                },
                GIF_PICKER_TAB_ID: function() {
                    return L
                },
                EMOJI_SIZE_MAP: function() {
                    return g
                },
                EMOJI_ROW_SIZE: function() {
                    return R
                }
            }), (o = r || (r = {})).GUILD = "GUILD", o.PACK = "PACK", o.UNICODE = "UNICODE", o.RECENT = "RECENT", o.CUSTOM = "CUSTOM", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.FAVORITES = "FAVORITES", o.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", o.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = i || (i = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = l || (l = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (_ = u || (u = {}))[_.EMOJI = 0] = "EMOJI", _[_.NSFW = 1] = "NSFW";
            let I = -1;
            (E = s || (s = {}))[E.MEDIUM = 40] = "MEDIUM", E[E.LARGE = 48] = "LARGE";
            let T = "emoji-picker-tab-panel",
                S = "emoji-picker-tab",
                p = "soundboard-picker-tab-panel",
                A = "soundboard-picker-tab",
                O = "reaction-picker-tab-panel",
                N = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (a || (a = {})).TOOLTIP = "tooltip";
            let P = "gif-picker-tab-panel",
                L = "gif-picker-tab",
                g = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                R = 9
        },
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return d
                },
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("75196"),
                s = n("956089"),
                a = n("125835"),
                o = n("782340"),
                c = n("159163");

            function d(e) {
                return (0, r.jsx)("svg", {
                    ...(0, u.default)({
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

            function _(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: i = !1,
                    shouldInheritBackgroundColor: u = !1
                } = e;
                return (0, r.jsx)(a.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, r.jsx)(s.TextBadge, {
                        disableColor: !0,
                        className: l(c.tag, {
                            [c.inheritTextColor]: i,
                            [c.inheritBackgroundColor]: u
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("642032"),
                s = n("767964");

            function a(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: i = !1,
                    hideStars: a
                } = e;
                return (0, r.jsxs)("span", {
                    className: l(s.container, t, {
                        [s.containerColored]: i
                    }),
                    children: [n, a ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.default, {
                            foreground: s.sparkleStarTopRight
                        }), (0, r.jsx)(u.default, {
                            foreground: s.sparkleStarRight
                        }), (0, r.jsx)(u.default, {
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
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function u(e, t) {
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

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(u[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function o(e) {
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
                    return E
                }
            });
            var r = n("65597"),
                i = n("862205"),
                l = n("697218"),
                u = n("719923"),
                s = n("782340");
            let a = (0, i.createExperiment)({
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
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: r,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, s = u.default.isPremium(t);
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
                    } : o({
                        user: t,
                        config: a.getCurrentConfig({
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
                    }, i = (0, r.default)([l.default], () => l.default.getCurrentUser()), u = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = o({
                        user: i,
                        config: u
                    }), _ = s && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                _ = (0, i.createExperiment)({
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
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
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
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                l = n("77078"),
                u = n("112679"),
                s = n("55689"),
                a = n("855133"),
                o = n("599110"),
                c = n("659500"),
                d = n("49111"),
                _ = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: f,
                    onComplete: I,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: S,
                    analyticsObject: p,
                    analyticsLocation: A,
                    analyticsSourceLocation: O,
                    isGift: N = !1,
                    giftMessage: C,
                    subscriptionTier: P,
                    trialId: L,
                    postSuccessGuild: g,
                    openInvoiceId: R,
                    applicationId: h,
                    referralTrialOfferId: D,
                    giftRecipient: U,
                    returnRef: m
                } = null != e ? e : {}, v = !1, M = (0, i.v4)();
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
                            subscriptionTier: P,
                            skuId: P,
                            isGift: N,
                            giftMessage: C,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == f || f(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                v = !0, null == I || I(), !N && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: S,
                            analyticsObject: p,
                            analyticsLocation: A,
                            analyticsSourceLocation: O,
                            trialId: L,
                            postSuccessGuild: g,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: h,
                            referralTrialOfferId: D,
                            returnRef: m
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : p,
                            source: O,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != L,
                            application_id: h,
                            location_stack: S
                        }), (0, u.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == f || f(v), v && (!N && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return _
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
                u = n("153160"),
                s = n("49111"),
                a = n("843455"),
                o = n("782340");
            let c = new Set([a.CurrencyCodes.ARS, a.CurrencyCodes.CLP, a.CurrencyCodes.COP]),
                d = new Set([a.CurrencyCodes.USD, a.CurrencyCodes.JPY]),
                _ = {
                    [s.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [s.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [s.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [s.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [s.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [s.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [s.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [s.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [s.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [s.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [s.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [s.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [s.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [s.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [s.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [s.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                E = [s.PaymentSourceTypes.EPS, s.PaymentSourceTypes.BANCONTACT, s.PaymentSourceTypes.IDEAL, s.PaymentSourceTypes.SOFORT, s.PaymentSourceTypes.GIROPAY, s.PaymentSourceTypes.SEPA_DEBIT, s.PaymentSourceTypes.PAYSAFE_CARD],
                f = (e, t, n, r) => {
                    if (null == e) return "";
                    let l = (0, i.getI18NCountryName)(e);
                    if (t === a.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
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
                        amount: S,
                        currency: p,
                        paymentSourceTypes: A
                    } = t, O = 0 !== A.length, N = T(I), C = (0, u.formatPrice)(S, p, {
                        style: "currency",
                        currency: p,
                        currencyDisplay: "symbol",
                        localeOverride: N
                    }), P = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: p.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(p) && (P = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(p) && (P = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: p.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (P = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: p.toUpperCase()
                        })), p === a.CurrencyCodes.EUR && (P = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, i.getI18NCountryName)(I),
                            currencyISOCode: p.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: p.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        })), O) {
                        let e = E.filter(e => A.includes(e)),
                            t = A.filter(e => !E.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.call(_)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        A.length >= 3 && r.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let i = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        P = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: i.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, i.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: P,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: O ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                T = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return l
                }
            });
            var r = n("79112"),
                i = n("49111");
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                r.default.open(i.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return _
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return T
                },
                getItemUnitPriceWithDiscount: function() {
                    return S
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("872717"),
                u = n("448993"),
                s = n("195358"),
                a = n("521012"),
                o = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: a = !1,
                    currency: d,
                    renewal: _,
                    metadata: E
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
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
                    apply_entitlements: a,
                    currency: d,
                    renewal: _,
                    metadata: E
                };
                try {
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function _(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: i,
                    renewal: a,
                    currency: d,
                    applyEntitlements: _ = !1,
                    analyticsLocations: E,
                    analyticsLocation: f
                } = e;
                null != r && (r = (0, o.coerceExistingItemsToNewItemInterval)(r));
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
                    renewal: a,
                    apply_entitlements: _,
                    currency: d
                };
                try {
                    let e = await l.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: f,
                            location_stack: E
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function E(e) {
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
                } = e, [l, u] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), c = (0, i.useStateFromStores)([a.default], () => a.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), u(null);
                            let n = await t();
                            !e && u(n)
                        } catch (t) {
                            !e && o(t)
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
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? _(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function T(e) {
                let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function S(e) {
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
                    return a
                },
                isEligibleTrialSub: function() {
                    return o
                },
                useCurrentPremiumTrialTier: function() {
                    return c
                }
            });
            var r = n("446674"),
                i = n("697218"),
                l = n("521012"),
                u = n("646718");
            let s = () => {
                    let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                a = () => {
                    var e;
                    return (null === (e = l.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                o = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === u.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === u.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

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
                    return u
                },
                setCanPlayWowMoment: function() {
                    return s
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return o
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
                u = () => {
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
                a = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return _
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("862337"),
                u = n("697218"),
                s = n("340412"),
                a = n("719923"),
                o = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                var n;
                if (null == e) return !1;
                let r = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => o.SubscriptionPlanInfo[e].skuId));
                return r.has(t)
            }

            function _() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = r.useState(c(e)),
                    d = (0, i.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let r = new l.Timeout,
                        i = () => {
                            let l = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == r || r.start(l, () => {
                                !t && c(e) ? n(!0) : i()
                            })
                        };
                    return i(), () => r.stop()
                }, [t, e]), t || d ? null : e
            }
        },
        22368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("85336"),
                l = n("286350");

            function u(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: u,
                    purchaseScene: s,
                    errorScene: a,
                    successScene: o
                } = e, [c, d] = (0, r.useState)(u);
                return (0, r.useEffect)(() => {
                    t === l.PurchaseState.PURCHASING ? d(s) : t === l.PurchaseState.FAIL && d(a)
                }, [t, s, a]), (0, r.useEffect)(() => {
                    n === i.Step.CONFIRM && d(o)
                }, [n, o]), [c, d]
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("446674"),
                s = n("77078"),
                a = n("79112"),
                o = n("685665"),
                c = n("788506"),
                d = n("649844"),
                _ = n("393414"),
                E = n("797647"),
                f = n("697218"),
                I = n("521012"),
                T = n("471671"),
                S = n("181114"),
                p = n("978679"),
                A = n("216422"),
                O = n("719923"),
                N = n("646718"),
                C = n("49111"),
                P = n("782340"),
                L = n("683437"),
                g = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: g,
                        size: R,
                        className: h,
                        trialId: D,
                        isTrialCTA: U,
                        buttonText: m,
                        buttonTextClassName: v,
                        postSuccessGuild: M,
                        onSubscribeModalClose: y,
                        premiumModalAnalyticsLocation: G,
                        showIcon: b = !0,
                        disableShine: B,
                        applicationId: k,
                        giftMessage: x,
                        overrideDisabledButtonText: F,
                        shinyButtonClassName: w,
                        ...H
                    } = e, j = (0, u.useStateFromStores)([f.default], () => f.default.getCurrentUser()), V = (0, u.useStateFromStores)([T.default], () => T.default.isFocused()), Y = (0, u.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                        analyticsLocations: K
                    } = (0, o.default)(), W = e => {
                        if (e.preventDefault(), null == j) {
                            (0, _.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == g || g(e), (null == Y ? void 0 : Y.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), a.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: l,
                                subscriptionTier: u,
                                trialId: a,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: _,
                                premiumModalAnalyticsLocation: E,
                                applicationId: f,
                                giftMessage: I
                            } = e;
                            if (!t) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, r.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!i) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, r.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let T = C.AnalyticsObjectTypes.BUY;
                            null != a ? T = C.AnalyticsObjectTypes.TRIAL : l && (T = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: l,
                                initialPlanId: null,
                                subscriptionTier: u,
                                analyticsLocations: _,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: T,
                                    ...E
                                },
                                trialId: a,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: f,
                                giftMessage: I
                            })
                        }({
                            isClaimed: j.isClaimed(),
                            isVerified: j.verified,
                            isGift: t,
                            subscriptionTier: i,
                            trialId: D,
                            postSuccessGuild: M,
                            onSubscribeModalClose: y,
                            analyticsLocations: K,
                            premiumModalAnalyticsLocation: G,
                            applicationId: k,
                            giftMessage: x
                        })
                    };
                    if (U) return (0, r.jsxs)(s.Button, {
                        size: R,
                        className: h,
                        innerClassName: L.premiumSubscribeButton,
                        look: s.Button.Looks.INVERTED,
                        onClick: W,
                        ...H,
                        children: [b && (0, r.jsx)(A.default, {
                            className: L.premiumIcon
                        }), (0, r.jsx)("span", {
                            className: l(L.buttonText, v),
                            children: null != m ? m : P.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, r.jsxs)(s.Button, {
                        size: R,
                        className: h,
                        innerClassName: L.giftButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: W,
                        ...H,
                        children: [(0, r.jsx)(p.default, {
                            className: L.giftIcon
                        }), (0, r.jsx)("span", {
                            className: l(L.buttonText, v),
                            children: null != m ? m : P.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = P.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Z = null != Y ? (0, O.getPremiumPlanItem)(Y) : null,
                        J = null != Z ? O.default.getPremiumType(Z.planId) : null == j ? void 0 : j.premiumType,
                        X = i === N.PremiumSubscriptionSKUs.TIER_2 && null != J && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(J);
                    X && (z = P.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let q = null != Y && Y.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(Y.planId) && !X,
                        Q = q ? null != F ? F : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, r = null, i = null;
                            if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: r,
                                disabledButtonTooltipText: i
                            };
                            let l = null != t ? N.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != l ? N.PremiumTypeOrder[l] : null,
                                s = null != n ? N.PremiumTypeOrder[n] : null;
                            return null != s && null != u && u < s ? (r = P.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (r = P.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === N.PremiumTypes.TIER_2 && (i = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: r,
                                disabledButtonTooltipText: i
                            }
                        }({
                            ctaSubscriptionSkuId: i,
                            currentPremiumType: J
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, r.jsxs)(S.default, {
                            disabled: q,
                            onClick: W,
                            innerClassName: L.premiumSubscribeButton,
                            color: i === N.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            size: R,
                            className: w,
                            wrapperClassName: h,
                            pauseAnimation: !V || B,
                            ...H,
                            ...e,
                            children: [b && (0, r.jsx)(A.default, {
                                className: L.premiumIcon
                            }), (0, r.jsx)("span", {
                                className: l(L.buttonText, v),
                                children: null !== (n = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : m) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, r.jsx)(s.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
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
                u = n("153160"),
                s = n("646718"),
                a = n("782340"),
                o = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: _ = !1
                } = e, E = (0, u.formatPrice)(t, n), f = null;
                return i === s.SubscriptionIntervalTypes.YEAR ? f = a.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: E
                }) : i === s.SubscriptionIntervalTypes.MONTH && 1 === d ? f = a.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: E
                }) : i === s.SubscriptionIntervalTypes.MONTH && d > 1 && (f = a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: E,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: l(o.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || _ ? (0, r.jsx)("strong", {
                        children: E
                    }) : f
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                s = n("849085");
            let a = i.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: i
                } = e;
                return (0, r.jsx)("div", {
                    className: u(s.wrapper, {
                        [s.wrapperActive]: n
                    }),
                    ref: t,
                    children: i
                })
            });
            var o = a
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return u
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var r, i, l = n("773336");
            let u = null;

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
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let l = 32,
                u = 5,
                s = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var r, i, l = n("917351"),
                u = n.n(l),
                s = n("446674"),
                a = n("913144"),
                o = n("845579"),
                c = n("374363"),
                d = n("697218"),
                _ = n("599110"),
                E = n("829536"),
                f = n("846325"),
                I = n("49111"),
                T = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let S = new Map,
                p = new Map,
                A = new Set,
                O = i.NOT_FETCHED,
                N = i.NOT_FETCHED,
                C = new Set,
                P = new Map,
                L = !1;

            function g(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let R = u.debounce(e => {
                _.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function h(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == r[e] && A.delete(e)
            }
            class D extends s.default.Store {
                initialize() {
                    this.waitFor(c.default), h(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(f.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return N === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return O === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = P.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return L
                }
                hasFetchedAllSounds() {
                    return N === i.FETCHED && O === i.FETCHED
                }
            }
            D.displayName = "SoundboardStore";
            var U = new D(a.default, {
                LOGOUT: function() {
                    S.clear(), p.clear(), P.clear(), L = !1, N = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    N = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: g,
                GUILD_SOUNDBOARD_SOUND_UPDATE: g,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let r = S.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), S.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: l
                    } = e, u = (null !== (n = p.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = P.get(l)) && void 0 !== r ? r : 0) + 1;
                    p.set(i, u), P.set(l, s), l !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (L = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, l = (null !== (t = p.get(r)) && void 0 !== t ? t : 0) - 1, u = (null !== (n = P.get(i)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? p.delete(r) : p.set(r, l), u <= 0 ? P.delete(i) : P.set(i, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), P.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, l;
                        C = new Set(null !== (l = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && h(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(f.DEFAULT_SOUND_GUILD_ID, t), O = i.FETCHED
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
                        S.set(t, n)
                    }), N = i.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
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
                u = n("446674"),
                s = n("913144"),
                a = n("802493"),
                o = n("595525"),
                c = n("212084"),
                d = n("867805"),
                _ = n("267567"),
                E = n("813006"),
                f = n("778689"),
                I = n("305961"),
                T = n("161585"),
                S = n("24373"),
                p = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let A = 2,
                O = new Map,
                N = new Map,
                C = null,
                P = [],
                L = null,
                g = !1,
                R = new Map,
                h = (e, t) => {
                    R = new Map(R.set(e, t))
                },
                D = 1e3 * p.Durations.HOUR,
                U = () => {
                    if (0 !== A) return;
                    let e = a.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !R.has(e)) {
                                for (let t of n) m(t, !0, I.default.getGuild(e));
                                h(e, n)
                            }
                    }
                },
                m = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    N.set(e.id, e), t && v(e, n)
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == C) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, S.isStandardSticker)(e)) {
                        let t = P.find(t => t.id === e.pack_id),
                            i = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), C.set(e.id, i)
                    } else if ((0, S.isGuildSticker)(e) && null != n) {
                        let i = d.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [r, l];
                        if (null != t) {
                            let e = (t instanceof(0, E.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            C.set(e.id, u);
                            return
                        }
                        u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, u)
                    }
                },
                M = (e, t, n) => {
                    O.set(e.id, e);
                    let r = [...P];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), P = r
                    }(t || n) && e.stickers.forEach(e => m(e))
                },
                y = () => {
                    R.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => v(e, n))
                    }), P.forEach(e => {
                        e.stickers.forEach(e => v(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => m(t, !0, e)), h(e.id, e.stickers))
            }
            class b extends u.default.Store {
                initialize() {
                    this.waitFor(a.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return U(), null == C && (C = new Map, y()), C
                }
                get hasLoadedStickerPacks() {
                    return null != L && L + D > Date.now()
                }
                get isFetchingStickerPacks() {
                    return g
                }
                getStickerById(e) {
                    return !N.has(e) && U(), N.get(e)
                }
                getStickerPack(e) {
                    return O.get(e)
                }
                getPremiumPacks() {
                    return P
                }
                isPremiumPack(e) {
                    return P.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return R
                }
                getAllStickersIterator() {
                    return U(), N.values()
                }
                getAllGuildStickers() {
                    return U(), R
                }
                getStickersByGuildId(e) {
                    return U(), R.get(e)
                }
            }
            b.displayName = "StickersStore";
            var B = new b(s.default, {
                BACKGROUND_SYNC: () => {
                    C = null, N = new Map, R = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, N = new Map, R = new Map, t.forEach(G), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (G(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = R.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != C && C.delete(e.id), N.delete(e.id)
                    }), R.delete(n.id), R = new Map(R)
                },
                LOGOUT: () => {
                    A = 0, P = [], N.clear(), O.clear(), C = null, R.clear(), R = new Map(R), g = !1, L = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    g = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), L = Date.now(), g = !1
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
                    n.forEach(e => m(e)), h(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, l = null !== (t = R.get(r)) && void 0 !== t ? t : [];
                    h(r, [...null !== (n = l.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), m(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    m(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = N.get(e.id);
                        return null != n && (0, S.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = R.get(n)) && void 0 !== t ? t : [], u = l.filter(e => null == r.find(t => t.id === e.id));
                    u.forEach(e => {
                        N.delete(e.id), null != C && C.delete(e.id)
                    });
                    let s = r.map(e => i(e));
                    s.forEach(e => m(e)), h(n, s)
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
                    return u
                },
                default: function() {
                    return s
                }
            });
            var r = n("729912");
            let i = "@silent",
                l = new RegExp("^".concat(i, "(\\s|$)"));

            function u() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return u() && null != e.match(l) ? [!0, e.substring(i.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return i
                }
            });
            var r = n("723251");

            function i(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: i,
                    min: l,
                    max: u,
                    cos: s,
                    round: a
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, _ = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, f = o >> 23, I = (c >> 3 & 63) / 63, T = (c >> 9 & 63) / 63, S = c >> 15, p = u(3, S ? f ? 5 : 7 : 7 & c), A = u(3, S ? 7 & c : f ? 5 : 7), O = f ? (15 & e[5]) / 15 : 1, N = (e[5] >> 4) / 15, C = f ? 6 : 5, P = 0, L = (t, n, r) => {
                    let i = [];
                    for (let l = 0; l < n; l++)
                        for (let u = l ? 0 : 1; u * n < t * (n - l); u++) i.push(((e[C + (P >> 1)] >> ((1 & P++) << 2) & 15) / 7.5 - 1) * r);
                    return i
                }, g = L(p, A, (o >> 18 & 31) / 31 / 2), R = L(3, 3, I * n), h = L(3, 3, T * n), D = f ? L(5, 5, N) : [], U = (0, r.thumbHashToApproximateAspectRatio)(e), m = a(U > 1 ? 32 : 32 * U), v = a(U > 1 ? 32 / U : 32), M = new Uint8Array(m * v * 4), y = [], G = [];
                for (let e = 0, n = 0; e < v; e++)
                    for (let r = 0; r < m; r++, n += 4) {
                        let a = d,
                            o = _,
                            c = E,
                            I = O;
                        for (let e = 0, t = u(p, f ? 5 : 3); e < t; e++) y[e] = s(i / m * (r + .5) * e);
                        for (let t = 0, n = u(A, f ? 5 : 3); t < n; t++) G[t] = s(i / v * (e + .5) * t);
                        for (let e = 0, n = 0; e < A; e++)
                            for (let r = e ? 0 : 1, i = 2 * G[e]; r * A < p * (A - e); r++, n++) !(r > t) && !(e > t) && (a += g[n] * y[r] * i);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, r = 2 * G[e]; n < 3 - e; n++, t++) {
                                let e = y[n] * r;
                                o += R[t] * e, c += h[t] * e
                            }
                        if (f)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, r = 2 * G[e]; n < 5 - e; n++, t++) I += D[t] * y[n] * r;
                        let T = a - 2 / 3 * o,
                            S = (3 * a - T + c) / 2,
                            N = S - c;
                        M[n] = u(0, 255 * l(1, S)), M[n + 1] = u(0, 255 * l(1, N)), M[n + 2] = u(0, 255 * l(1, T)), M[n + 3] = u(0, 255 * l(1, I))
                    }
                return {
                    w: m,
                    h: v,
                    rgba: M
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("913144"),
                i = n("54239"),
                l = n("49111");

            function u() {
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
            var r, i, l, u;
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
                    return a
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return o
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (l = r || (r = {}))[l.BACKGROUND = 0] = "BACKGROUND", (u = i || (i = {}))[u.OPTION_1 = 0] = "OPTION_1", u[u.OPTION_2 = 1] = "OPTION_2", u[u.OPTION_3 = 2] = "OPTION_3", u[u.OPTION_4 = 3] = "OPTION_4", u[u.OPTION_7 = 7] = "OPTION_7", u[u.OPTION_8 = 8] = "OPTION_8", u[u.OPTION_9 = 9] = "OPTION_9", u[u.OPTION_10 = 10] = "OPTION_10";
            let s = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10],
                a = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10, i.OPTION_1, i.OPTION_2, i.OPTION_3, i.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                o = "blur",
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
                u = n("376556"),
                s = n("450205"),
                a = n("813006"),
                o = n("49111");
            let c = new Set([o.PlatformTypes.CONTACTS]),
                d = !0,
                _ = [],
                E = [],
                f = {},
                I = {},
                T = e => {
                    _ = e.filter(e => !c.has(e.type) && u.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class S extends r.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            S.displayName = "ConnectedAccountsStore";
            var p = new S(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        T(t)
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
                    } = e, l = _.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != r && (l.revoked = r), null != i && (l.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                u = n("49111");
            let s = {},
                a = {},
                o = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    a = null != i ? {
                        state: u.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(a), s = {
                    ...s,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [a.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            _.displayName = "InviteStore";
            var E = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, c(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("913144"),
                s = n("697218"),
                a = n("49111");
            let o = a.FormStates.CLOSED,
                c = null,
                d = null,
                _ = {},
                E = {},
                f = {},
                I = null,
                T = null,
                S = !1,
                p = !1,
                A = null,
                O = null,
                N = null,
                C = [],
                P = null,
                L = null;

            function g(e) {
                var t, n, r, i, l, u;
                let c = s.default.getCurrentUser();
                if (null == c) return R();
                d = null !== (t = e.section) && void 0 !== t ? t : d, P = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (_[d] = e.subsection), null != e.scrollPosition && null != d && (E[d] = e.scrollPosition), p = !!e.openWithoutBackstack, o = a.FormStates.OPEN, f = {}, T = {
                    ...I = {
                        [a.UserSettingsSections.ACCOUNT]: {
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
                }, O = null !== (r = e.onClose) && void 0 !== r ? r : null, N = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, C = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], L = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function R() {
                o = a.FormStates.CLOSED, S = !1, I = null, P = null, T = null, c = null, d = null, _ = {}, E = {}, O = null, N = null, C = [], L = null
            }

            function h() {
                o = a.FormStates.OPEN, f = {}
            }
            class D extends l.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != T && null != I && (!!this.isOpen() || A === a.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(T, I)
                }
                isOpen() {
                    return S
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? _[d] : null
                }
                getScrollPosition() {
                    return null != d ? E[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: o === a.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? _[d] : null,
                        scrollPosition: null != d ? E[d] : null,
                        settings: T,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: N,
                        analyticsLocations: C,
                        initialSection: P,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return O
                }
            }
            D.displayName = "UserSettingsModalStore";
            var U = new D(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    S = !0, g(e)
                },
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = a.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== a.FormStates.SUBMITTING) return !1;
                    o = a.FormStates.OPEN, d = a.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, N = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == T && (T = {});
                    let n = T[a.UserSettingsSections.ACCOUNT];
                    T[a.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: h,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    h(), null != e && (T = {
                        ...I = {
                            [a.UserSettingsSections.ACCOUNT]: {
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
                    return A = e.tab, null == d && A === a.DrawerTabTypes.USER_SETTINGS && g({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("697218"),
                u = n("719923"),
                s = n("521012");
            let a = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                o = a;

            function c() {
                o.userTrialOffers = {}, o.userDiscounts = {}, o.userOffersLastFetchedAtDate = void 0
            }
            let d = () => !0;

            function _() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscounts = {}, !0)
            }
            class E extends r.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : a, this.waitFor(l.default), this.syncWith([l.default], d), this.syncWith([s.default], _)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return o.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return o.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != o.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != o.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = o.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = l.default.getCurrentUser();
                    return (0, u.isPremium)(e) ? [] : Object.values(o.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return o
                }
                forceReset() {
                    c()
                }
            }
            E.displayName = "UserOfferStore", E.persistKey = "UserOfferStore";
            var f = new E(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : c(), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    o.userTrialOffers[t.trial_id] = t, o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && c(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscounts = {}) : null != n && (o.userDiscounts[n.discount_id] = n, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (o.userTrialOffers[t.trial_id] = t), null != n && (o.userDiscounts[n.discount_id] = n), o.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: c
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                l = n("913144");
            let u = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class s extends i.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : u
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
            var a = new s(l.default, {
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
                u = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == r) {
                    null == a || a();
                    return
                }
                let c = r(f, d, u);

                function d() {
                    null == a || a()
                }

                function _(e) {
                    i(c), n(e)
                }

                function E(e) {
                    i(c), l(e)
                }

                function f(e) {
                    return s(c, f, d, {
                        ...u,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: _,
                        reject: E,
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
                        ...u,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = a,
                    isModalOpen: u = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, a;
                    if (i = e, a = u, i.body && 60008 === i.body.code || a && 429 === i.status) return l({
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
                    ((0, u.resolveThunk)(i) ? a : o)({
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
                    return u
                }
            });
            var r = n("872717"),
                i = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: r,
                    ...l
                } = t, u = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...u,
                            ...s
                        }), n(e)
                    })
                })
            }
            var u = {
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let u = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, r) {
                return (0, i.updateModal)(e, u(t, n, r))
            }
        }
    }
]);