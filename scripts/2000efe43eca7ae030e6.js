(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59028"], {
        13399: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (i = t[2].split("-")).shift(), r = i);
                var l = [];
                t[5] && (l = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (i = t[6].split("-")).shift();
                    for (var i, o, s = []; i.length;) {
                        var u = i.shift();
                        1 === u.length ? o ? (a.push({
                            singleton: o,
                            extension: s
                        }), o = u, s = []) : o = u : s.push(u)
                    }
                    a.push({
                        singleton: o,
                        extension: s
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
                        variant: l,
                        extension: a,
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
        238455: function(e, t, n) {
            var r = n("63533"),
                l = n("651558"),
                a = n("349046"),
                i = n("153997"),
                o = n("820458"),
                s = n("663652"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    c = !n && l(e),
                    d = !n && !c && i(e),
                    E = !n && !c && !d && s(e),
                    _ = n || c || d || E,
                    f = _ ? r(e.length, String) : [],
                    I = f.length;
                for (var S in e)(t || u.call(e, S)) && !(_ && ("length" == S || d && ("offset" == S || "parent" == S) || E && ("buffer" == S || "byteLength" == S || "byteOffset" == S) || o(S, I))) && f.push(S);
                return f
            }
        },
        291002: function(e, t, n) {
            var r = n("109633"),
                l = n("261711");
            e.exports = function(e) {
                return l(r(e))
            }
        },
        85722: function(e, t, n) {
            var r = n("616691"),
                l = n("960052"),
                a = n("509492"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && l(e.length) && !!i[r(e)]
            }
        },
        891183: function(e, t, n) {
            var r = n("356827"),
                l = n("57100"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return l(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        773988: function(e, t, n) {
            var r = n("261711"),
                l = n("211919");
            e.exports = function(e) {
                return r(l(e))
            }
        },
        63533: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        870686: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        109521: function(e, t, n) {
            var r = n("107327");
            e.exports = function(e, t) {
                return r(t, function(t) {
                    return e[t]
                })
            }
        },
        109633: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        356827: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        57100: function(e, t, n) {
            var r = n("676315")(Object.keys, Object);
            e.exports = r
        },
        961077: function(e, t, n) {
            e = n.nmd(e);
            var r = n("71890"),
                l = "object" == typeof t && t && !t.nodeType && t,
                a = l && "object" == typeof e && e && !e.nodeType && e,
                i = a && a.exports === l && r.process,
                o = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return i && i.binding && i.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        676315: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        261711: function(e, t, n) {
            var r = n("54506");
            e.exports = function(e, t) {
                var n = -1,
                    l = e.length,
                    a = l - 1;
                for (t = void 0 === t ? l : t; ++n < t;) {
                    var i = r(n, a),
                        o = e[i];
                    e[i] = e[n], e[n] = o
                }
                return e.length = t, e
            }
        },
        153997: function(e, t, n) {
            e = n.nmd(e);
            var r = n("619146"),
                l = n("108028"),
                a = "object" == typeof t && t && !t.nodeType && t,
                i = a && "object" == typeof e && e && !e.nodeType && e,
                o = i && i.exports === a ? r.Buffer : void 0,
                s = o ? o.isBuffer : void 0;
            e.exports = s || l
        },
        663652: function(e, t, n) {
            var r = n("85722"),
                l = n("870686"),
                a = n("961077"),
                i = a && a.isTypedArray,
                o = i ? l(i) : r;
            e.exports = o
        },
        905269: function(e, t, n) {
            var r = n("238455"),
                l = n("891183"),
                a = n("355653");
            e.exports = function(e) {
                return a(e) ? r(e) : l(e)
            }
        },
        906288: function(e, t, n) {
            var r = n("291002"),
                l = n("773988"),
                a = n("349046");
            e.exports = function(e) {
                return (a(e) ? r : l)(e)
            }
        },
        108028: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        211919: function(e, t, n) {
            var r = n("109521"),
                l = n("905269");
            e.exports = function(e) {
                return null == e ? [] : r(e, l(e))
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
        663481: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        37598: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        742148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return r
                },
                rgbaToDataURL: function() {
                    return l
                },
                thumbHashToDataURL: function() {
                    return a
                }
            });

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function l(e, t, n) {
                let r = 4 * e + 1,
                    l = 6 + t * (5 + r),
                    a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
                    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    o = 1,
                    s = 0;
                for (let e = 0, l = 0, i = r - 1; e < t; e++, i += r - 1)
                    for (a.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), s = (s + o) % 65521; l < i; l++) {
                        let e = 255 & n[l];
                        a.push(e), s = (s + (o = (o + e) % 65521)) % 65521
                    }
                for (let [e, t] of(a.push(s >> 8, 255 & s, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + l]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= a[r], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
                    n = ~n, a[t++] = n >>> 24, a[t++] = n >> 16 & 255, a[t++] = n >> 8 & 255, a[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...a))
            }

            function a(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: l,
                        cos: a,
                        round: i
                    } = Math, o = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, u = (63 & o) / 63, c = (o >> 6 & 63) / 31.5 - 1, d = (o >> 12 & 63) / 31.5 - 1, E = o >> 23, _ = (s >> 3 & 63) / 63, f = (s >> 9 & 63) / 63, I = s >> 15, S = l(3, I ? E ? 5 : 7 : 7 & s), T = l(3, I ? 7 & s : E ? 5 : 7), C = E ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, N = E ? 6 : 5, p = 0, O = (t, n, r) => {
                        let l = [];
                        for (let a = 0; a < n; a++)
                            for (let i = a ? 0 : 1; i * n < t * (n - a); i++) l.push(((e[N + (p >> 1)] >> ((1 & p++) << 2) & 15) / 7.5 - 1) * r);
                        return l
                    }, R = O(S, T, (o >> 18 & 31) / 31), h = O(3, 3, 1.25 * _), L = O(3, 3, 1.25 * f), P = E && O(5, 5, A), D = r(e), M = i(D > 1 ? 32 : 32 * D), g = i(D > 1 ? 32 / D : 32), m = new Uint8Array(M * g * 4), v = [], U = [];
                    for (let e = 0, r = 0; e < g; e++)
                        for (let i = 0; i < M; i++, r += 4) {
                            let o = u,
                                s = c,
                                _ = d,
                                f = C;
                            for (let e = 0, n = l(S, E ? 5 : 3); e < n; e++) v[e] = a(t / M * (i + .5) * e);
                            for (let n = 0, r = l(T, E ? 5 : 3); n < r; n++) U[n] = a(t / g * (e + .5) * n);
                            for (let e = 0, t = 0; e < T; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n * T < S * (T - e); n++, t++) o += R[t] * v[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                                    let e = v[n] * r;
                                    s += h[t] * e, _ += L[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) f += P[t] * v[n] * r;
                            let I = o - 2 / 3 * s,
                                A = (3 * o - I + _) / 2,
                                N = A - _;
                            m[r] = l(0, 255 * n(1, A)), m[r + 1] = l(0, 255 * n(1, N)), m[r + 2] = l(0, 255 * n(1, I)), m[r + 3] = l(0, 255 * n(1, f))
                        }
                    return {
                        w: M,
                        h: g,
                        rgba: m
                    }
                }(e);
                return l(t.w, t.h, t.rgba)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return i
                }
            });
            var r = n("913144");

            function l(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function i() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return i
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
                }
            });
            var r = n("913144");

            function l(e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function i() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                r.default.wait(() => r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var r = n("913144");

            function l() {
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
            var r = n("990746"),
                l = n("173333"),
                a = n("913144"),
                i = n("211895"),
                o = n("26092"),
                s = n("599110"),
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
                        (0, i.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: i,
                            emailToken: o,
                            password: f,
                            avatar: I,
                            newPassword: S,
                            discriminator: T
                        } = e, {
                            close: C
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: i,
                                    email_token: o,
                                    password: f,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                a = l.default.get(d.DEVICE_TOKEN),
                                s = (0, E.getDevicePushProvider)();
                            null != s && null != a && (t.push_provider = s, t.push_token = a);
                            let u = l.default.get(d.DEVICE_VOIP_TOKEN);
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
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return s.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != f && null != S && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), C ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
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
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("534904"),
                i = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: a.warnIcon
                        }), (0, r.jsx)(l.Text, {
                            className: a.warnText,
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
            var r = n("920040"),
                l = n("773670"),
                a = n("575482"),
                i = n.n(a),
                o = n("77078"),
                s = n("782340"),
                u = n("430230");
            class c extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: T,
                        errorMessage: C,
                        retrySuccess: A
                    } = this.state, N = l.Children.count(a) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, p = null != I ? (0, r.jsxs)(o.Text, {
                        className: i(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: i(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, O = A ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != f ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: f
                                }) : null, N, O, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : C
                                    }) : null, p]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        stroke: "string" == typeof i ? i : i.css,
                        strokeLinecap: "round",
                        strokeWidth: "2",
                        d: "M21 12H3",
                        className: o
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        404061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SmileIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.799 1.169a1 1 0 0 1 1.388.275A3.496 3.496 0 0 0 11.999 16a3.495 3.495 0 0 0 2.912-1.556 1 1 0 0 1 1.662 1.112A5.496 5.496 0 0 1 12 18a5.496 5.496 0 0 1-4.573-2.444A1 1 0 0 1 7.7 14.17Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        596256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773670"),
                l = n("365444"),
                a = n("638800");

            function i(e, t) {
                let [n, i] = (0, r.useState)(e), o = (0, l.useLazyValue)(() => new a.Timeout);
                (0, r.useEffect)(() => () => o.stop(), [o]);
                let s = (0, r.useCallback)(n => {
                    i(n), n !== e && o.start(t, () => i(e))
                }, [t, e, o]);
                return [n, s]
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("287727");
            var r = n("913144");
            class l {
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
                    return l
                }
            });
            var r = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), a = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
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
                    return i
                }
            });
            var r = n("605250"),
                l = n("802493");
            let a = new r.default("GuildStickers");
            var i = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return a.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    l.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let a = l.default.stickersTransaction(r);
                    for (let r of (a.putAll(e, t), n)) a.delete(e, r)
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
            var r, l, a, i;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return l
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (i = l || (l = {}))[i.BOT = 0] = "BOT", i[i.SERVER = 1] = "SERVER", i[i.SYSTEM_DM = 2] = "SYSTEM_DM", i[i.OFFICIAL = 3] = "OFFICIAL", i[i.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", i[i.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", i[i.AI = 6] = "AI", i[i.REMIX = 7] = "REMIX"
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return N
                },
                BlockedPaymentsContentModal: function() {
                    return p
                },
                BlockedPaymentsWarning: function() {
                    return O
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("912557"),
                o = n("819855"),
                s = n("77078"),
                u = n("841098"),
                c = n("145131"),
                d = n("423487"),
                E = n("701909"),
                _ = n("619935"),
                f = n("49111"),
                I = n("782340"),
                S = n("54271"),
                T = n("584503"),
                C = n("45656");

            function A(e) {
                let {
                    className: t
                } = e, n = (0, u.default)(), l = (0, o.isThemeDark)(n) ? T : C;
                return (0, r.jsxs)("div", {
                    className: a(S.container, t),
                    children: [(0, r.jsx)(s.Heading, {
                        className: S.header,
                        variant: "heading-xl/semibold",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(s.Text, {
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
                        src: l,
                        className: S.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function N() {
                return (0, r.jsx)(A, {
                    className: S.settings
                })
            }

            function p(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ModalHeader, {
                        className: S.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(s.ModalContent, {
                        className: S.blockedPaymentsModalContent,
                        children: (0, r.jsx)(A, {
                            className: S.modal
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    className: t
                } = e, n = (0, _.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(s.Card, {
                    className: a(S.blockedPaymentsWarning, t),
                    type: s.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: S.blockedPaymentsWarningIcon,
                        color: i.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: E.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        772051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return l
                },
                default: function() {
                    return o
                }
            });
            var r, l, a = n("862205");
            (r = l || (l = {}))[r.None = 0] = "None", r[r.DefaultOn = 1] = "DefaultOn", r[r.DefaultOff = 2] = "DefaultOff", r[r.ComingSoon = 3] = "ComingSoon", r[r.ClydeProfiles = 4] = "ClydeProfiles";
            let i = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: l.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: l.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: l.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: l.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: l.ClydeProfiles
                    }
                }]
            });
            var o = i
        },
        254927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return a
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2023-06_clyde_ai_gdm",
                label: "Clyde in DMs/GDMs",
                defaultConfig: {
                    isClydeEnabledinGdms: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable clyde in gdms",
                    config: {
                        isClydeEnabledinGdms: !0
                    }
                }]
            });

            function a() {
                let {
                    isClydeEnabledinGdms: e
                } = l.getCurrentConfig({
                    location: "38acdb_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        980215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useClydeExperiment: function() {
                    return u
                },
                useClydeProfilesEnabled: function() {
                    return c
                },
                useClydeEnabled: function() {
                    return d
                },
                getClydeEnabled: function() {
                    return _
                },
                getClydeExperimentEnabled: function() {
                    return f
                },
                canUseCustomClydeProfiles: function() {
                    return I
                }
            }), n("773670"), n("498225");
            var r = n("305961"),
                l = n("957255"),
                a = n("772051"),
                i = n("254927"),
                o = n("49111"),
                s = n("724210");

            function u(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    l = a.default.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return l
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u(e, t);
                return n === a.ClydeExperimentState.ClydeProfiles
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = u(e, n);
                return E(r, e, t)
            }

            function E(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(s.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, i.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = r.default.getGuildIds().some(e => f(r.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== a.ClydeExperimentState.None && l.default.can(o.Permissions.USE_CLYDE_AI, n)
            }

            function _(e, t) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    i = a.default.getCurrentConfig({
                        guildId: l,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return E(i, e, t)
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = S(e, t);
                return n !== a.ClydeExperimentState.None
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return S(e, t) === a.ClydeExperimentState.ClydeProfiles
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return a.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = n("710984").default
        },
        115279: function(e, t, n) {
            "use strict";
            var r, l, a, i, o, s, u, c, d, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return a
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return o
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return C
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                REACTION_PICKER_TAB_ID: function() {
                    return p
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return O
                },
                SuperReactionBalanceLocations: function() {
                    return s
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return R
                },
                GIF_PICKER_TAB_ID: function() {
                    return h
                },
                EMOJI_SIZE_MAP: function() {
                    return L
                },
                EMOJI_ROW_SIZE: function() {
                    return P
                }
            }), (u = r || (r = {})).GUILD = "GUILD", u.PACK = "PACK", u.UNICODE = "UNICODE", u.RECENT = "RECENT", u.CUSTOM = "CUSTOM", u.SEARCH_RESULTS = "SEARCH_RESULTS", u.FAVORITES = "FAVORITES", u.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", u.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = l || (l = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = a || (a = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = i || (i = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = o || (o = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let S = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                C = "soundboard-picker-tab-panel",
                A = "soundboard-picker-tab",
                N = "reaction-picker-tab-panel",
                p = "reaction-picker-tab",
                O = "super-reaction-picker-tab";
            (s || (s = {})).TOOLTIP = "tooltip";
            let R = "gif-picker-tab-panel",
                h = "gif-picker-tab",
                L = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                P = 9
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
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("75196"),
                o = n("956089"),
                s = n("125835"),
                u = n("782340"),
                c = n("936676");

            function d(e) {
                return (0, r.jsx)("svg", {
                    ...(0, i.default)({
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
                    shouldInheritTextColor: l = !1,
                    shouldInheritBackgroundColor: i = !1
                } = e;
                return (0, r.jsx)(s.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, r.jsx)(o.TextBadge, {
                        disableColor: !0,
                        className: a(c.tag, {
                            [c.inheritTextColor]: l,
                            [c.inheritBackgroundColor]: i
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
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("642032"),
                o = n("529028");

            function s(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: l = !1,
                    hideStars: s
                } = e;
                return (0, r.jsxs)("span", {
                    className: a(o.container, t, {
                        [o.containerColored]: l
                    }),
                    children: [n, s ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.default, {
                            foreground: o.sparkleStarTopRight
                        }), (0, r.jsx)(i.default, {
                            foreground: o.sparkleStarRight
                        }), (0, r.jsx)(i.default, {
                            foreground: o.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (l = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", l.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", l.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", l.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", l.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", l.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", l.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", l.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", l.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", l.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", l.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", l.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", l.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", l.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", l.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", l.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", l.HUB_NEW = "HUB_NEW", l.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", l.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", l.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", l.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", l.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", l.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", l.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", l.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", l.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", l.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", l.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", l.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", l.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", l.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", l.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", l.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", l.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", l.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", l.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", l.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", l.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return i
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var r = n("126617"),
                l = n("833858");
            let a = "event";

            function i(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, l.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let i = r.parse(n),
                    o = (0, l.getFirstQueryStringValue)(i[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
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
            var r = n("744196"),
                l = n("862205"),
                a = n("697218"),
                i = n("719923"),
                o = n("782340");
            let s = (0, l.createExperiment)({
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
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: a
                    } = n, o = i.default.isPremium(t);
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: o ? r : a
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
                        config: s.getCurrentConfig({
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
                    }, l = (0, r.default)([a.default], () => a.default.getCurrentUser()), i = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = u({
                        user: l,
                        config: i
                    }), E = o && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                E = (0, l.createExperiment)({
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
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
                    return l
                },
                default: function() {
                    return _
                }
            });
            var r, l, a = n("920040");
            n("773670");
            var i = n("77078"),
                o = n("145131"),
                s = n("181114"),
                u = n("376641"),
                c = n("782340"),
                d = n("167127");
            (r = l || (l = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
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
                    onPrimary: C,
                    secondaryText: A,
                    onSecondary: N
                } = e;
                return (0, a.jsxs)(i.ModalFooter, {
                    justify: o.default.Justify.BETWEEN,
                    align: o.default.Align.CENTER,
                    children: [(() => {
                        if (null == E || null == f) return null;
                        let e = E === l.PURCHASE ? s.default : i.Button,
                            t = {
                                innerClassName: d.button,
                                type: _,
                                disabled: S,
                                submitting: T,
                                color: E === l.CONTINUE ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
                                onClick: C
                            };
                        return null != I ? (0, a.jsx)(i.Tooltip, {
                            text: I,
                            children: n => (0, a.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == r ? null : (0, a.jsx)(r, {
                                    className: d.primaryIcon
                                }), f]
                            })
                        }) : (0, a.jsxs)(e, {
                            ...t,
                            children: [null == r ? null : (0, a.jsx)(r, {
                                className: d.primaryIcon
                            }), f]
                        })
                    })(), null == A ? null : (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        onClick: N,
                        children: A
                    }), (0, a.jsx)(u.default, {}), null == t ? null : (0, a.jsx)(i.Button, {
                        className: d.back,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            E.CTAType = l;
            var _ = E
        },
        376641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("77078"),
                o = n("600785"),
                s = n("782340"),
                u = n("993446"),
                c = n("705562");

            function d() {
                return (0, r.jsxs)("div", {
                    className: a(u.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, r.jsx)(o.default, {
                        className: u.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        children: s.default.Messages.BILLING_SECURE
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
            var r = n("920040"),
                l = n("773670"),
                a = n("575482"),
                i = n.n(a),
                o = n("161179"),
                s = n.n(o),
                u = n("865768"),
                c = n.n(u),
                d = n("77078"),
                E = n("642906"),
                _ = n("442750");

            function f(e) {
                var t, n, a, o, u, c;
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
                    stepConfigs: C,
                    setBodyNode: A,
                    setFooterNode: N,
                    setModalOverlayNode: p,
                    setReadySlideId: O
                } = (0, E.usePaymentContext)(), R = C.find(e => e.key === T);
                l.useEffect(() => {
                    p(null)
                }, [T, p]), s(null != R, "Unknown step for current payment flow.");
                let h = null !== (u = null == R ? void 0 : null === (t = R.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    L = null == R ? void 0 : null === (n = R.options) || void 0 === n ? void 0 : n.bodyClassName,
                    P = void 0 !== I && I ? _.sliderBodyLarge : null == R ? void 0 : null === (a = R.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (c = null == R ? void 0 : null === (o = R.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === c || c ? f : null, R.renderStep(S), null == T || h ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.ModalContent, {
                            className: i(_.body, L),
                            children: (0, r.jsx)(d.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: e => O(e),
                                children: C.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: i(_.sliderBody, P),
                                        ref: e => A(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => N(e)
                        }), (0, r.jsx)("div", {
                            ref: e => p(e)
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
            var r = n("920040");
            n("773670");
            var l = n("462567"),
                a = n("77078"),
                i = n("112679"),
                o = n("55689"),
                s = n("855133"),
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
                    analyticsObject: C,
                    analyticsLocation: A,
                    analyticsSourceLocation: N,
                    isGift: p = !1,
                    giftMessage: O,
                    subscriptionTier: R,
                    trialId: h,
                    postSuccessGuild: L,
                    openInvoiceId: P,
                    applicationId: D,
                    referralTrialOfferId: M,
                    giftRecipient: g,
                    returnRef: m
                } = null != e ? e : {}, v = !1, U = (0, l.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...a
                        } = n;
                        return (0, r.jsx)(e, {
                            ...a,
                            loadId: U,
                            subscriptionTier: R,
                            skuId: R,
                            isGift: p,
                            giftMessage: O,
                            giftRecipient: g,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                l(), null == f || f(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                v = !0, null == I || I(), !p && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: T,
                            analyticsObject: C,
                            analyticsLocation: A,
                            analyticsSourceLocation: N,
                            trialId: h,
                            postSuccessGuild: L,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: P,
                            applicationId: D,
                            referralTrialOfferId: M,
                            returnRef: m
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : C,
                            source: N,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: p,
                            eligible_for_trial: null != h,
                            application_id: D,
                            location_stack: T
                        }), (0, i.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == f || f(v), v && (!p && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
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
            var r = n("714480"),
                l = n("988415"),
                a = n("701909"),
                i = n("153160"),
                o = n("49111"),
                s = n("809924"),
                u = n("782340");
            let c = new Set([s.CurrencyCodes.ARS, s.CurrencyCodes.CLP, s.CurrencyCodes.COP]),
                d = new Set([s.CurrencyCodes.USD, s.CurrencyCodes.JPY]),
                E = {
                    [o.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [o.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [o.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [o.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [o.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [o.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [o.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [o.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [o.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [o.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [o.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [o.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [o.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [o.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [o.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [o.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                _ = [o.PaymentSourceTypes.EPS, o.PaymentSourceTypes.BANCONTACT, o.PaymentSourceTypes.IDEAL, o.PaymentSourceTypes.SOFORT, o.PaymentSourceTypes.GIROPAY, o.PaymentSourceTypes.SEPA_DEBIT, o.PaymentSourceTypes.PAYSAFE_CARD],
                f = (e, t, n, r) => {
                    if (null == e) return "";
                    let a = (0, l.getI18NCountryName)(e);
                    if (t === s.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
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
                        currency: C,
                        paymentSourceTypes: A
                    } = t, N = 0 !== A.length, p = S(I), O = (0, i.formatPrice)(T, C, {
                        style: "currency",
                        currency: C,
                        currencyDisplay: "symbol",
                        localeOverride: p
                    }), R = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: C.toUpperCase(),
                        localizedPriceWithCurrencySymbol: O
                    });
                    if (d.has(C) && (R = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: O
                        })), c.has(C) && (R = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: C.toUpperCase(),
                            localizedPriceWithCurrencySymbol: O
                        })), null != n && !n.hasPremiumNitroMonthly && (R = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: C.toUpperCase()
                        })), C === s.CurrencyCodes.EUR && (R = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, l.getI18NCountryName)(I),
                            currencyISOCode: C.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: C.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING)
                        })), N) {
                        let e = _.filter(e => A.includes(e)),
                            t = A.filter(e => !_.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.call(E)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        A.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let l = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        R = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: l.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, l.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: R,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(o.HelpdeskArticles.LOCALIZED_PRICING)
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
            var r = n("773670"),
                l = n("498225"),
                a = n("990746"),
                i = n("448993"),
                o = n("195358"),
                s = n("521012"),
                u = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: l,
                    applyEntitlements: s = !1,
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
                    code: l,
                    apply_entitlements: s,
                    currency: d,
                    renewal: E,
                    metadata: _
                };
                try {
                    let e = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return o.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function E(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: l,
                    renewal: s,
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
                    payment_source_id: l,
                    renewal: s,
                    apply_entitlements: E,
                    currency: d
                };
                try {
                    let e = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: f,
                            location_stack: _
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return o.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return o.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, i] = (0, r.useState)(null), [o, u] = (0, r.useState)(null), c = (0, l.useStateFromStores)([s.default], () => s.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), i(null);
                            let n = await t();
                            !e && i(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [a, o]
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
                    return o
                },
                hasActiveTrial: function() {
                    return s
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return c
                }
            });
            var r = n("498225"),
                l = n("697218"),
                a = n("521012"),
                i = n("646718");
            let o = () => {
                    let e = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                s = () => {
                    var e;
                    return (null === (e = a.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === i.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === i.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === i.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === i.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function c() {
                let e = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    t = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return i
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var r = n("913144");
            let l = () => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    r.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                i = () => {
                    r.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
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
                    return i
                }
            });
            var r = n("773670"),
                l = n("85336"),
                a = n("286350");

            function i(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: i,
                    purchaseScene: o,
                    errorScene: s,
                    successScene: u
                } = e, [c, d] = (0, r.useState)(i);
                return (0, r.useEffect)(() => {
                    t === a.PurchaseState.PURCHASING ? d(o) : t === a.PurchaseState.FAIL && d(s)
                }, [t, o, s]), (0, r.useEffect)(() => {
                    n === l.Step.CONFIRM && d(u)
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
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("153160"),
                o = n("646718"),
                s = n("782340"),
                u = n("22633");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: l,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: E = !1
                } = e, _ = (0, i.formatPrice)(t, n), f = null;
                return l === o.SubscriptionIntervalTypes.YEAR ? f = s.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: _
                }) : l === o.SubscriptionIntervalTypes.MONTH && 1 === d ? f = s.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: _
                }) : l === o.SubscriptionIntervalTypes.MONTH && d > 1 && (f = s.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: _,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: a(u.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == l || E ? (0, r.jsx)("strong", {
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
            var r = n("920040"),
                l = n("773670"),
                a = n("575482"),
                i = n.n(a),
                o = n("125264");
            let s = l.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: l
                } = e;
                return (0, r.jsx)("div", {
                    className: i(o.wrapper, {
                        [o.wrapperActive]: n
                    }),
                    ref: t,
                    children: l
                })
            });
            var u = s
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return i
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var r, l, a = n("773336");
            let i = null;

            function o() {
                return (0, a.isAndroid)(), null
            }(r = l || (l = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return a
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return i
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return s
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
            let a = 32,
                i = 5,
                o = "DEFAULT";
            (l = r || (r = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let s = {
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
                    return g
                }
            });
            var r, l, a = n("427964"),
                i = n.n(a),
                o = n("498225"),
                s = n("913144"),
                u = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                S = n("397336");
            (r = l || (l = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                C = new Map,
                A = new Set,
                N = l.NOT_FETCHED,
                p = l.NOT_FETCHED,
                O = new Set,
                R = new Map,
                h = !1;

            function L(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let P = i.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function D(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == r[e] && A.delete(e)
            }
            class M extends o.default.Store {
                initialize() {
                    this.waitFor(c.default), D(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(O),
                        localSoundboardMutes: Array.from(A)
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
                    return p === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return N === l.FETCHING
                }
                shouldFetchDefaultSounds() {
                    return N === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return N === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = R.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != C.get(e)
                }
                isFavoriteSound(e) {
                    return O.has(e)
                }
                getFavorites() {
                    return O
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return h
                }
                hasFetchedAllSounds() {
                    return p === l.FETCHED && N === l.FETCHED
                }
            }
            M.displayName = "SoundboardStore";
            var g = new M(s.default, {
                LOGOUT: function() {
                    T.clear(), C.clear(), R.clear(), h = !1, p = l.NOT_FETCHED, N = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    p = l.FETCHING
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
                        l = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != l && !(l < 0) && (r.splice(l, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: l,
                        userId: a
                    } = e, i = (null !== (n = C.get(l)) && void 0 !== n ? n : 0) + 1, o = (null !== (r = R.get(a)) && void 0 !== r ? r : 0) + 1;
                    C.set(l, i), R.set(a, o), a !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (h = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: l
                    } = e, a = (null !== (t = C.get(r)) && void 0 !== t ? t : 0) - 1, i = (null !== (n = R.get(l)) && void 0 !== n ? n : 0) - 1;
                    a <= 0 ? C.delete(r) : C.set(r, a), i <= 0 ? R.delete(l) : R.set(l, i)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    P(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    C.clear(), R.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, a;
                        O = new Set(null !== (a = null == r ? void 0 : null === (l = r.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== a ? a : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && D(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), N = l.FETCHED
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
                    }), p = l.FETCHED
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
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), O = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
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
                    return b
                }
            });
            var r, l, a = n("379279"),
                i = n("498225"),
                o = n("913144"),
                s = n("802493"),
                u = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                S = n("161585"),
                T = n("24373"),
                C = n("49111");
            (r = l || (l = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let A = 2,
                N = new Map,
                p = new Map,
                O = null,
                R = [],
                h = null,
                L = !1,
                P = new Map,
                D = (e, t) => {
                    P = new Map(P.set(e, t))
                },
                M = 1e3 * C.Durations.HOUR,
                g = () => {
                    if (0 !== A) return;
                    let e = s.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => a.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !P.has(e)) {
                                for (let t of n) m(t, !0, I.default.getGuild(e));
                                D(e, n)
                            }
                    }
                },
                m = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    p.set(e.id, e), t && v(e, n)
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == O) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: S.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = R.find(t => t.id === e.pack_id),
                            l = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: S.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: S.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), O.set(e.id, l)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let l = d.default.getByName(n),
                            a = {
                                type: S.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            i = [r, a];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && i.push({
                                type: S.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            O.set(e.id, i);
                            return
                        }
                        i.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => i.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), O.set(e.id, i)
                    }
                },
                U = (e, t, n) => {
                    N.set(e.id, e);
                    let r = [...R];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), R = r
                    }(t || n) && e.stickers.forEach(e => m(e))
                },
                y = () => {
                    P.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => v(e, n))
                    }), R.forEach(e => {
                        e.stickers.forEach(e => v(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => m(t, !0, e)), D(e.id, e.stickers))
            }
            class B extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return g(), null == O && (O = new Map, y()), O
                }
                get hasLoadedStickerPacks() {
                    return null != h && h + M > Date.now()
                }
                get isFetchingStickerPacks() {
                    return L
                }
                getStickerById(e) {
                    return !p.has(e) && g(), p.get(e)
                }
                getStickerPack(e) {
                    return N.get(e)
                }
                getPremiumPacks() {
                    return R
                }
                isPremiumPack(e) {
                    return R.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return P
                }
                getAllStickersIterator() {
                    return g(), p.values()
                }
                getAllGuildStickers() {
                    return g(), P
                }
                getStickersByGuildId(e) {
                    return g(), P.get(e)
                }
            }
            B.displayName = "StickersStore";
            var b = new B(o.default, {
                BACKGROUND_SYNC: () => {
                    O = null, p = new Map, P = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    O = null, p = new Map, P = new Map, t.forEach(G), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (G(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = P.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != O && O.delete(e.id), p.delete(e.id)
                    }), P.delete(n.id), P = new Map(P)
                },
                LOGOUT: () => {
                    A = 0, R = [], p.clear(), N.clear(), O = null, P.clear(), P = new Map(P), L = !1, h = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    L = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => U(e, !0)), h = Date.now(), L = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    U(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => m(e)), D(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: l
                    } = e, a = null !== (t = P.get(r)) && void 0 !== t ? t : [];
                    D(r, [...null !== (n = a.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), m(l)
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
                    } = e, l = e => {
                        let t;
                        let n = p.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, a = null !== (t = P.get(n)) && void 0 !== t ? t : [], i = a.filter(e => null == r.find(t => t.id === e.id));
                    i.forEach(e => {
                        p.delete(e.id), null != O && O.delete(e.id)
                    });
                    let o = r.map(e => l(e));
                    o.forEach(e => m(e)), D(n, o)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
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
                    return a
                },
                canSuppressNotifications: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var r = n("729912");
            let l = "@silent",
                a = new RegExp("^".concat(l, "(\\s|$)"));

            function i() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function o(e) {
                return i() && null != e.match(a) ? [!0, e.substring(l.length).trim()] : [!1, e]
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("913144"),
                l = n("54239"),
                a = n("49111");

            function i() {
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
                }), (0, l.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, l, a, i;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return l
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return s
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
            }), (a = r || (r = {}))[a.BACKGROUND = 0] = "BACKGROUND", (i = l || (l = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
            let o = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                s = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((e, t, n) => ({
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
        434976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        722303: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        746304: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                AudioSettingsDefaultVolumes: function() {
                    return r
                }
            }), (l = r || (r = {}))[l.USER = 100] = "USER", l[l.STREAM = 18] = "STREAM"
        },
        148606: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                CountryCodes: function() {
                    return r
                },
                CountryCodesSets: function() {
                    return a
                }
            }), (l = r || (r = {})).AD = "AD", l.AE = "AE", l.AF = "AF", l.AG = "AG", l.AI = "AI", l.AL = "AL", l.AM = "AM", l.AO = "AO", l.AQ = "AQ", l.AR = "AR", l.AS = "AS", l.AT = "AT", l.AU = "AU", l.AW = "AW", l.AX = "AX", l.AZ = "AZ", l.BA = "BA", l.BB = "BB", l.BD = "BD", l.BE = "BE", l.BF = "BF", l.BG = "BG", l.BH = "BH", l.BI = "BI", l.BJ = "BJ", l.BL = "BL", l.BM = "BM", l.BN = "BN", l.BO = "BO", l.BQ = "BQ", l.BR = "BR", l.BS = "BS", l.BT = "BT", l.BV = "BV", l.BW = "BW", l.BY = "BY", l.BZ = "BZ", l.CA = "CA", l.CC = "CC", l.CD = "CD", l.CF = "CF", l.CG = "CG", l.CH = "CH", l.CI = "CI", l.CK = "CK", l.CL = "CL", l.CM = "CM", l.CN = "CN", l.CO = "CO", l.CR = "CR", l.CU = "CU", l.CV = "CV", l.CW = "CW", l.CX = "CX", l.CY = "CY", l.CZ = "CZ", l.DE = "DE", l.DJ = "DJ", l.DK = "DK", l.DM = "DM", l.DO = "DO", l.DZ = "DZ", l.EC = "EC", l.EE = "EE", l.EG = "EG", l.EH = "EH", l.ER = "ER", l.ES = "ES", l.ET = "ET", l.FI = "FI", l.FJ = "FJ", l.FK = "FK", l.FM = "FM", l.FO = "FO", l.FR = "FR", l.GA = "GA", l.GB = "GB", l.GD = "GD", l.GE = "GE", l.GF = "GF", l.GG = "GG", l.GH = "GH", l.GI = "GI", l.GL = "GL", l.GM = "GM", l.GN = "GN", l.GP = "GP", l.GQ = "GQ", l.GR = "GR", l.GS = "GS", l.GT = "GT", l.GU = "GU", l.GW = "GW", l.GY = "GY", l.HK = "HK", l.HM = "HM", l.HN = "HN", l.HR = "HR", l.HT = "HT", l.HU = "HU", l.ID = "ID", l.IE = "IE", l.IL = "IL", l.IM = "IM", l.IN = "IN", l.IO = "IO", l.IQ = "IQ", l.IR = "IR", l.IS = "IS", l.IT = "IT", l.JE = "JE", l.JM = "JM", l.JO = "JO", l.JP = "JP", l.KE = "KE", l.KG = "KG", l.KH = "KH", l.KI = "KI", l.KM = "KM", l.KN = "KN", l.KP = "KP", l.KR = "KR", l.KW = "KW", l.KY = "KY", l.KZ = "KZ", l.LA = "LA", l.LB = "LB", l.LC = "LC", l.LI = "LI", l.LK = "LK", l.LR = "LR", l.LS = "LS", l.LT = "LT", l.LU = "LU", l.LV = "LV", l.LY = "LY", l.MA = "MA", l.MC = "MC", l.MD = "MD", l.ME = "ME", l.MF = "MF", l.MG = "MG", l.MH = "MH", l.MK = "MK", l.ML = "ML", l.MM = "MM", l.MN = "MN", l.MO = "MO", l.MP = "MP", l.MQ = "MQ", l.MR = "MR", l.MS = "MS", l.MT = "MT", l.MU = "MU", l.MV = "MV", l.MW = "MW", l.MX = "MX", l.MY = "MY", l.MZ = "MZ", l.NA = "NA", l.NC = "NC", l.NE = "NE", l.NF = "NF", l.NG = "NG", l.NI = "NI", l.NL = "NL", l.NO = "NO", l.NP = "NP", l.NR = "NR", l.NU = "NU", l.NZ = "NZ", l.OM = "OM", l.PA = "PA", l.PE = "PE", l.PF = "PF", l.PG = "PG", l.PH = "PH", l.PK = "PK", l.PL = "PL", l.PM = "PM", l.PN = "PN", l.PR = "PR", l.PS = "PS", l.PT = "PT", l.PW = "PW", l.PY = "PY", l.QA = "QA", l.RE = "RE", l.RO = "RO", l.RS = "RS", l.RU = "RU", l.RW = "RW", l.SA = "SA", l.SB = "SB", l.SC = "SC", l.SD = "SD", l.SE = "SE", l.SG = "SG", l.SH = "SH", l.SI = "SI", l.SJ = "SJ", l.SK = "SK", l.SL = "SL", l.SM = "SM", l.SN = "SN", l.SO = "SO", l.SR = "SR", l.SS = "SS", l.ST = "ST", l.SV = "SV", l.SX = "SX", l.SY = "SY", l.SZ = "SZ", l.TC = "TC", l.TD = "TD", l.TF = "TF", l.TG = "TG", l.TH = "TH", l.TJ = "TJ", l.TK = "TK", l.TL = "TL", l.TM = "TM", l.TN = "TN", l.TO = "TO", l.TR = "TR", l.TT = "TT", l.TV = "TV", l.TW = "TW", l.TZ = "TZ", l.UA = "UA", l.UG = "UG", l.UM = "UM", l.US = "US", l.UY = "UY", l.UZ = "UZ", l.VA = "VA", l.VC = "VC", l.VE = "VE", l.VG = "VG", l.VI = "VI", l.VN = "VN", l.VU = "VU", l.WF = "WF", l.WS = "WS", l.YE = "YE", l.YT = "YT", l.ZA = "ZA", l.ZM = "ZM", l.ZW = "ZW", l.XK = "XK", l.AC = "AC", l.AN = "AN", l.DG = "DG", l.EL = "EL", l.IC = "IC", l.MI = "MI", l.TP = "TP", l.WK = "WK";
            let a = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        989901: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return r
                }
            }), (l = r || (r = {})).MATCH_ALL = "match_all", l.MATCH_SOME = "match_some"
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("666038");
            class l extends r.default {
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
                    return C
                }
            });
            var r = n("498225"),
                l = n("913144"),
                a = n("619340"),
                i = n("376556"),
                o = n("450205"),
                s = n("813006"),
                u = n("49111");
            let c = new Set([u.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                S = e => {
                    E = e.filter(e => !c.has(e.type) && i.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
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
            var C = new T(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    S(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
                            }))
                        }));
                        S(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: l
                    } = e, a = E.find(e => e.id === n && e.type === t);
                    if (null == a) return !1;
                    null != r && (a.revoked = r), null != l && (a.accessToken = l)
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
            var r = n("498225"),
                l = n("913144"),
                a = n("9294"),
                i = n("49111");
            let o = {},
                s = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    l = o[e],
                    s = null != l ? {
                        state: i.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: i.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(s), o = {
                    ...o,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [s.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? i.InviteStates.BANNED : i.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: i.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = i.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = i.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = i.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = i.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = i.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = i.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, c(e.code, e => {
                        e.state = i.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = i.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = i.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = i.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("427964"),
                l = n.n(r),
                a = n("498225"),
                i = n("913144"),
                o = n("697218"),
                s = n("49111");
            let u = s.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                S = null,
                T = !1,
                C = !1,
                A = null,
                N = null,
                p = null,
                O = [],
                R = null,
                h = null;

            function L(e) {
                var t, n, r, l, a, i;
                let c = o.default.getCurrentUser();
                if (null == c) return P();
                d = null !== (t = e.section) && void 0 !== t ? t : d, R = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), C = !!e.openWithoutBackstack, u = s.FormStates.OPEN, f = {}, S = {
                    ...I = {
                        [s.UserSettingsSections.ACCOUNT]: {
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
                }, N = null !== (r = e.onClose) && void 0 !== r ? r : null, p = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, O = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], h = null !== (i = e.impressionSource) && void 0 !== i ? i : null
            }

            function P() {
                u = s.FormStates.CLOSED, T = !1, I = null, R = null, S = null, c = null, d = null, E = {}, _ = {}, N = null, p = null, O = [], h = null
            }

            function D() {
                u = s.FormStates.OPEN, f = {}
            }
            class M extends a.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || A === s.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(S, I)
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
                    return C
                }
                getProps() {
                    return {
                        submitting: u === s.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: S,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: C,
                        analyticsLocation: p,
                        analyticsLocations: O,
                        initialSection: R,
                        impressionSource: h
                    }
                }
                get onClose() {
                    return N
                }
            }
            M.displayName = "UserSettingsModalStore";
            var g = new M(i.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, L(e)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: P,
                LOGOUT: P,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = s.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== s.FormStates.SUBMITTING) return !1;
                    u = s.FormStates.OPEN, d = s.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, p = null, O = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
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
                    let n = S[s.UserSettingsSections.ACCOUNT];
                    S[s.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    D(), null != e && (S = {
                        ...I = {
                            [s.UserSettingsSections.ACCOUNT]: {
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
                    return A = e.tab, null == d && A === s.DrawerTabTypes.USER_SETTINGS && L({
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
                    return s
                }
            });
            var l = n("498225"),
                a = n("913144");
            let i = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class o extends l.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : i
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
            o.displayName = "ApplicationStoreUserSettingsStore", o.persistKey = "ApplicationStoreUserSettingsStore", o.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var s = new o(a.default, {
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
                    return o
                },
                GradientCssUrls: function() {
                    return s
                },
                default: function() {
                    return S
                }
            });
            var r = n("920040"),
                l = n("773670"),
                a = n("462567"),
                i = n("912557");
            let o = Object.freeze({
                    PREMIUM_TIER_0: (0, a.v4)(),
                    PREMIUM_TIER_1: (0, a.v4)(),
                    PREMIUM_TIER_2: (0, a.v4)(),
                    PREMIUM_GUILD: (0, a.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, a.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.v4)()
                }),
                s = {
                    PREMIUM_TIER_0: "url(#".concat(o.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(o.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(o.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(o.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(o.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(o.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                E = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                _ = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, r.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                I = l.memo(function() {
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
                    return P
                },
                PremiumPaymentGuildAnimation: function() {
                    return U
                }
            });
            var r, l, a, i, o, s, u, c, d = n("920040"),
                E = n("773670"),
                _ = n("575482"),
                f = n.n(_),
                I = n("623829"),
                S = n("28926"),
                T = n("273108"),
                C = n("115994");
            (r = o || (o = {})).NORMAL = "normal", r.SPEED_START = "speed_start", r.SPEED_LOOP = "speed_loop", r.FINISH = "finish", r.IDLE = "idle";
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
                    return n.el("391009").then(n.t.bind(n, "391009", 19)).then(e => {
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
                        pause: l,
                        pauseWhileUnfocused: a
                    } = this.props;
                    return (0, d.jsx)(T.default, {
                        className: f(C.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: l ? o.IDLE : t,
                        sceneSegments: A,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: a,
                        pause: l
                    })
                }
            }
            N.Scenes = o, (l = s || (s = {})).NORMAL = "normal", l.SPEED_START = "speed_start", l.SPEED_LOOP = "speed_loop", l.FINISH = "finish", l.IDLE = "idle";
            let p = {
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
                    return n.el("163485").then(n.t.bind(n, "163485", 19)).then(e => {
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
                        pause: l,
                        pauseWhileUnfocused: a
                    } = this.props;
                    return (0, d.jsx)(T.default, {
                        className: f(C.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: l ? s.IDLE : t,
                        sceneSegments: p,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: a,
                        pause: l
                    })
                }
            }
            O.Scenes = s, (a = u || (u = {})).IDLE_ENTRY = "idle_entry", a.IDLE_LOOP = "idle_loop", a.BOOST_START = "boost_start", a.BOOST_LOOP = "boost_loop", a.BOOST_END = "boost_end", a.VICTORY = "victory", a.ERROR = "error";
            let R = {
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
            class h extends E.PureComponent {
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
                        className: C.panningAnimation,
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
            class P extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case P.Scenes.IDLE_ENTRY:
                            return P.Scenes.IDLE_LOOP;
                        case P.Scenes.BOOST_START:
                            return P.Scenes.BOOST_LOOP;
                        case P.Scenes.BOOST_END:
                            return P.Scenes.VICTORY;
                        case P.Scenes.VICTORY:
                            return P.Scenes.IDLE_ENTRY;
                        case P.Scenes.ERROR:
                            return P.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("606935").then(n.t.bind(n, "606935", 19)).then(e => {
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
                        className: f(C.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: C.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: C.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: C.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(h, {
                                className: C.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(h, {
                                className: C.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(T.default, {
                            className: C.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? u.IDLE_LOOP : t,
                            sceneSegments: R,
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
            P.Scenes = u, (i = c || (c = {})).ENTRY = "entry", i.IDLE = "idle", i.STARS = "stars", i.ERROR = "error", i.SUCCESS = "success";
            let D = {
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
                M = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                g = [{
                    left: 29,
                    top: 100,
                    color: M.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: M.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: M.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: M.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: M.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: M.PINK
                }],
                m = Object.freeze({
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

            function v(e) {
                let {
                    animate: t
                } = e, [n, r] = E.useState(0), l = (0, I.useSprings)(g.length, g.map((e, l) => {
                    let a = l > 0 ? m.DELAY_STAGGER * l + Math.random() * (m.DELAY_MAX - m.DELAY_MIN) + m.DELAY_MIN : 0,
                        i = Math.random() * (m.SIZE_MAX - m.SIZE_MIN) + m.SIZE_MIN;
                    return {
                        from: {
                            scale: m.SCALE_INITIAL,
                            rotate: m.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: i,
                            height: i
                        },
                        to: async e => {
                            t ? (await e({
                                scale: m.SCALE_MIDDLE,
                                rotate: m.ROTATE_MIDDLE,
                                delay: a,
                                config: {
                                    duration: m.DURATION_MIDDLE,
                                    easing: m.EASING_MIDDLE
                                }
                            }), await e({
                                scale: m.SCALE_END,
                                rotate: m.ROTATE_END,
                                config: {
                                    duration: m.DURATION_END,
                                    easing: m.EASING_END
                                }
                            }), await e({
                                scale: m.SCALE_INITIAL,
                                rotate: m.ROTATE_INITIAL,
                                immediate: !0
                            }), l === g.length - 1 && r(n + 1)) : await e({
                                scale: m.SCALE_INITIAL,
                                rotate: m.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: l.map((e, t) => {
                        let n = g[t];
                        return (0, d.jsx)(I.animated.svg, {
                            style: e,
                            className: C.guildStar,
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
            class U extends E.PureComponent {
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
                    return n.el("53302").then(n.t.bind(n, "53302", 19)).then(e => {
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
                        onSceneComplete: l,
                        pauseWhileUnfocused: a
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: f(C.guildWrapper, e),
                        children: [(0, d.jsx)(T.default, {
                            className: C.guildBackground,
                            importData: this.importData,
                            nextScene: n ? c.IDLE : t,
                            sceneSegments: D,
                            onScenePlay: r,
                            onSceneComplete: l,
                            pauseWhileUnfocused: a,
                            pause: n
                        }), (0, d.jsx)(v, {
                            animate: !n && t === c.STARS
                        })]
                    })
                }
            }
            U.Scenes = c
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040"),
                l = n("773670"),
                a = n("575482"),
                i = n.n(a),
                o = n("498225"),
                s = n("206230"),
                u = n("471671"),
                c = n("724063");
            class d extends l.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: l,
                        isWindowFocused: a,
                        useReducedMotion: i
                    } = this.props, [o, {
                        default: s
                    }] = await Promise.all([e(), n.el("552280").then(n.t.bind(n, "552280", 21))]);
                    null != this.animationRef && (this.animation = s.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: o
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !a || l || i) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: l,
                        pauseWhileUnfocused: a,
                        pause: i,
                        isWindowFocused: o,
                        useReducedMotion: s
                    } = this.props;
                    l !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(l), null != this.animation && (a && !e.isWindowFocused && o && !s && !0 !== i ? this.animation.play() : (s || a && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && i ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !i && !s && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== l && i && (this.playScene(l), null === (r = this.animation) || void 0 === r || r.pause())
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
                    } = this.props, l = n[e], a = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || l.BEG !== a.BEG || l.END !== a.END) && this.animation.playSegments([l.BEG, l.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var i;
                        null === (i = this.animation) || void 0 === i || i.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: i(this.props.className, c.wrapper)
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
                } = e, l = (0, o.useStateFromStores)([u.default], () => u.default.isFocused()), a = (0, o.useStateFromStores)([s.default], () => s.default.useReducedMotion);
                return (0, r.jsx)(d, {
                    ...n,
                    isWindowFocused: l,
                    useReducedMotion: a,
                    ref: t
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return s
                }
            });
            var r = n("552473"),
                l = n.n(r),
                a = n("365444");
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                o = () => (0, a.useLazyValue)(() => i()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                i = n("384737"),
                o = n("448052"),
                s = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                E = n("246604");
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
                        height: l = 24,
                        color: f = "currentColor",
                        transition: I = E.transition,
                        className: S,
                        foreground: T,
                        expanded: C,
                        ...A
                    } = e, {
                        enabled: N
                    } = (0, c.useRedesignIconContext)(), p = t;
                    if (!0 === C ? p = _.DOWN : !1 === C && (p = _.RIGHT), N) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: i.ChevronSmallDownIcon,
                            [_.LEFT]: o.ChevronSmallLeftIcon,
                            [_.RIGHT]: s.ChevronSmallRightIcon
                        } [p];
                        return (0, r.jsx)(e, {
                            ...A,
                            className: S,
                            width: n,
                            height: l,
                            color: f,
                            colorClass: T
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: a(S, I, p),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(A),
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
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("404061"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    })
                }, a.SmileIcon)
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("75196");

            function a(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = "currentColor",
                    foreground: i,
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: a,
                        className: i
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: a,
                        className: i
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("763377"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, a.CircleQuestionIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("202909"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: a = "0 0 24 24",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: a,
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, a.NitroWheelIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("424823"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon)
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("434657"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, a.LockIcon)
        },
        642032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("75196");

            function a(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: a = "currentColor",
                    foreground: i,
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)({
                        ...o
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 ".concat(t, " ").concat(n),
                    className: i,
                    fill: a,
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
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("457802"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, a.MinusIcon)
        },
        719347: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return a
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return i
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return o
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return s
                }
            });
            let a = 550,
                i = 350,
                o = 40;
            (l = r || (r = {})).STATIC = "STATIC", l.RESPONSIVE = "RESPONSIVE", l.MOSAIC = "MOSAIC";
            let s = 20
        },
        956089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeShapes: function() {
                    return s
                },
                getBadgeWidthForValue: function() {
                    return u
                },
                getBadgeCountString: function() {
                    return c
                },
                NumberBadge: function() {
                    return d
                },
                TextBadge: function() {
                    return E
                },
                PremiumBadge: function() {
                    return _
                },
                IconBadge: function() {
                    return f
                },
                CircleBadge: function() {
                    return I
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l);
            n("77078");
            var i = n("20606");
            n("782340");
            var o = n("460671");
            let s = {
                ROUND: o.baseShapeRound,
                ROUND_LEFT: o.baseShapeRoundLeft,
                ROUND_RIGHT: o.baseShapeRoundRight,
                SQUARE: ""
            };

            function u(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function c(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let d = e => {
                    let {
                        count: t,
                        color: n = i.default.STATUS_DANGER,
                        disableColor: l = !1,
                        shape: d = s.ROUND,
                        className: E,
                        style: _,
                        ...f
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(E, o.numberBadge, d),
                        style: {
                            backgroundColor: l ? void 0 : n,
                            width: u(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ..._
                        },
                        ...f,
                        children: c(t)
                    })
                },
                E = e => {
                    let {
                        text: t,
                        className: n,
                        color: l = i.default.STATUS_DANGER,
                        shape: u = s.ROUND,
                        disableColor: c = !1,
                        style: d,
                        ...E
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(n, o.textBadge, u),
                        style: {
                            backgroundColor: c ? void 0 : l,
                            ...d
                        },
                        ...E,
                        children: t
                    })
                },
                _ = e => {
                    let {
                        text: t,
                        className: n,
                        ...l
                    } = e;
                    return (0, r.jsx)(E, {
                        className: a(o.premiumBadge, n),
                        text: t,
                        ...l
                    })
                },
                f = e => {
                    let {
                        icon: t,
                        className: n,
                        color: l = i.default.STATUS_DANGER,
                        shape: u = s.ROUND,
                        disableColor: c = !1,
                        style: d
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(n, o.iconBadge, u),
                        style: {
                            backgroundColor: c ? void 0 : l,
                            ...d
                        },
                        children: (0, r.jsx)(t, {
                            className: o.icon
                        })
                    })
                },
                I = e => {
                    let {
                        className: t,
                        color: n = i.default.INTERACTIVE_ACTIVE,
                        shape: l = s.ROUND,
                        disableColor: u = !1,
                        style: c,
                        ...d
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(t, o.circleBadge, l),
                        style: {
                            backgroundColor: u ? void 0 : n,
                            ...c
                        },
                        ...d
                    })
                }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("427964"),
                l = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, l;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("697218"),
                i = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: i = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = e;
                if (null == r) {
                    null == s || s();
                    return
                }
                let c = r(f, d, i);

                function d() {
                    null == s || s()
                }

                function E(e) {
                    l(c), n(e)
                }

                function _(e) {
                    l(c), a(e)
                }

                function f(e) {
                    return o(c, f, d, {
                        ...i,
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
                    o(c, f, d, {
                        ...i,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: l,
                    mfaCodeHandler: a = s,
                    isModalOpen: i = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, s;
                    if (l = e, s = i, l.body && 60008 === l.body.code || s && 429 === l.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: l = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, i.resolveThunk)(l) ? s : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
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
                    return l
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function l(e) {
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
                    return i
                }
            });
            var r = n("990746"),
                l = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, i = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, l.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...i,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = r.properties;
                        "function" == typeof r.properties && (o = r.properties(e)), (0, l.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...i,
                            ...o
                        }), n(e)
                    })
                })
            }
            var i = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("551042"),
                a = n("920636");
            let i = (e, t, n) => function(l) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(i(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, l.updateModal)(e, i(t, n, r))
            }
        }
    }
]);