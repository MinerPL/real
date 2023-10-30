(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34982"], {
        78349: function(t, e, n) {
            "use strict";
            t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (a = e[2].split("-")).shift(), r = a);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (a = e[6].split("-")).shift();
                    for (var a, u, c = []; a.length;) {
                        var s = a.shift();
                        1 === s.length ? u ? (o.push({
                            singleton: u,
                            extension: c
                        }), u = s, c = []) : u = s : c.push(s)
                    }
                    o.push({
                        singleton: u,
                        extension: c
                    })
                }
                var l = [];
                e[7] && ((l = e[7].split("-")).shift(), l.shift());
                var f = [];
                return e[8] && (f = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: o,
                        privateuse: l
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var a = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === a) continue t;
                    return !1
                }
                return !0
            }
        },
        458389: function(t, e, n) {
            var r = n("594140"),
                i = n("564414"),
                o = n("725502"),
                a = n("591350"),
                u = n("476540"),
                c = n("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    f = !n && !l && a(t),
                    h = !n && !l && !f && c(t),
                    g = n || l || f || h,
                    p = g ? r(t.length, String) : [],
                    d = p.length;
                for (var y in t)(e || s.call(t, y)) && !(g && ("length" == y || f && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, d))) && p.push(y);
                return p
            }
        },
        437083: function(t, e, n) {
            var r = n("561449"),
                i = n("877297");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        562132: function(t, e, n) {
            var r = n("33426"),
                i = n("136047"),
                o = n("270879"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
        },
        205873: function(t, e, n) {
            var r = n("733228"),
                i = n("541349"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                i = n("164099");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        594140: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        492692: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        957478: function(t, e, n) {
            var r = n("626785");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        561449: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        733228: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        541349: function(t, e, n) {
            var r = n("761197")(Object.keys, Object);
            t.exports = r
        },
        276440: function(t, e, n) {
            t = n.nmd(t);
            var r = n("447414"),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        761197: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        591350: function(t, e, n) {
            t = n.nmd(t);
            var r = n("690516"),
                i = n("221386"),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0;
            t.exports = c || i
        },
        381178: function(t, e, n) {
            var r = n("562132"),
                i = n("492692"),
                o = n("276440"),
                a = o && o.isTypedArray,
                u = a ? i(a) : r;
            t.exports = u
        },
        466731: function(t, e, n) {
            var r = n("458389"),
                i = n("205873"),
                o = n("603108");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                i = n("329252"),
                o = n("725502");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        221386: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        164099: function(t, e, n) {
            var r = n("957478"),
                i = n("466731");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function a(t, e) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(o);
                return a.current === o ? (n.current = t(), a.current = e) : !(0, i.default)(e, a.current) && (n.current = t(), a.current = e), n.current
            }
        },
        376507: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    o = new Uint8Array(i);
                for (let t = 0; t < r.length; t++) o[t] = r.charCodeAt(t);
                return i
            }

            function i(t) {
                let e = new Uint8Array(t),
                    n = "";
                for (let t of e) n += String.fromCharCode(t);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(e), n.d(e, {
                create: function() {
                    return m
                },
                get: function() {
                    return b
                }
            });
            var o = "copy",
                a = "convert";

            function u(t, e, n) {
                if (e === o) return n;
                if (e === a) return t(n);
                if (e instanceof Array) return n.map(n => u(t, e[0], n));
                if (e instanceof Object) {
                    let r = {};
                    for (let [i, o] of Object.entries(e)) {
                        if (o.derive) {
                            let t = o.derive(n);
                            void 0 !== t && (n[i] = t)
                        }
                        if (!(i in n)) {
                            if (o.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = u(t, o.schema, n[i])
                    }
                    return r
                }
            }

            function c(t, e) {
                return {
                    required: !0,
                    schema: t,
                    derive: e
                }
            }

            function s(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function l(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            var f = {
                    type: s(o),
                    id: s(a),
                    transports: l(o)
                },
                h = {
                    appid: l(o),
                    appidExclude: l(o),
                    credProps: l(o)
                },
                g = {
                    appid: l(o),
                    appidExclude: l(o),
                    credProps: l(o)
                },
                p = {
                    publicKey: s({
                        rp: s(o),
                        user: s({
                            id: s(a),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(a),
                        pubKeyCredParams: s(o),
                        timeout: l(o),
                        excludeCredentials: l([f]),
                        authenticatorSelection: l(o),
                        attestation: l(o),
                        extensions: l(h)
                    }),
                    signal: l(o)
                },
                d = {
                    type: s(o),
                    id: s(o),
                    rawId: s(a),
                    authenticatorAttachment: l(o),
                    response: s({
                        clientDataJSON: s(a),
                        attestationObject: s(a),
                        transports: c(o, t => {
                            var e;
                            return (null == (e = t.getTransports) ? void 0 : e.call(t)) || []
                        })
                    }),
                    clientExtensionResults: c(g, t => t.getClientExtensionResults())
                },
                y = {
                    mediation: l(o),
                    publicKey: s({
                        challenge: s(a),
                        timeout: l(o),
                        rpId: l(o),
                        allowCredentials: l([f]),
                        userVerification: l(o),
                        extensions: l(h)
                    }),
                    signal: l(o)
                },
                v = {
                    type: s(o),
                    id: s(o),
                    rawId: s(a),
                    authenticatorAttachment: l(o),
                    response: s({
                        clientDataJSON: s(a),
                        authenticatorData: s(a),
                        signature: s(a),
                        userHandle: s(a)
                    }),
                    clientExtensionResults: c(g, t => t.getClientExtensionResults())
                };
            async function m(t) {
                let e = await navigator.credentials.create(u(r, p, t));
                return u(i, d, e)
            }
            async function b(t) {
                let e = await navigator.credentials.get(u(r, y, t));
                return u(i, v, e)
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return H
                },
                match: function() {
                    return Q
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                a = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                c = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: o,
                                selections: a
                            } = i.match(e);
                        return o && a && Object.keys(a).forEach(t => n(t, a[t])), o
                    }
                    if (a(t)) {
                        if (!a(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                a = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    u = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => c(e, t[r], n)) && o.every((t, e) => c(t, i[e], n)) && (0 === a.length || c(a[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => c(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || u(o) && "optional" === o[r]().matcherType) && c(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function f(t) {
                return Object.assign(t, {
                    optional: () => h(t),
                    and: e => d(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function h(t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (s(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            let g = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                p = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function d() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => c(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return l(e, s).forEach(t => r(t, void 0)), {
                                matched: e.some(e => c(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "or"
                    })
                })
            }

            function v(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    a = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === a || c(a, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === a ? [] : s(a))
                    })
                })
            }

            function b(t) {
                return "number" == typeof t
            }

            function j(t) {
                return "string" == typeof t
            }

            function x(t) {
                return "bigint" == typeof t
            }
            let A = f(v(function(t) {
                    return !0
                })),
                w = t => Object.assign(f(t), {
                    startsWith: e => w(d(t, v(t => j(t) && t.startsWith(e)))),
                    endsWith: e => w(d(t, v(t => j(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return w(d(t, (n = e, v(t => j(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return w(d(t, (n = e, v(t => j(t) && t.length <= n))))
                    },
                    includes: e => w(d(t, v(t => j(t) && t.includes(e)))),
                    regex: e => w(d(t, v(t => j(t) && !!t.match(e))))
                }),
                O = w(v(j)),
                S = (t, e) => v(n => b(n) && t <= n && e >= n),
                E = t => v(e => b(e) && e < t),
                z = t => v(e => b(e) && e > t),
                k = t => v(e => b(e) && e <= t),
                B = t => v(e => b(e) && e >= t),
                C = () => v(t => b(t) && Number.isInteger(t)),
                I = () => v(t => b(t) && Number.isFinite(t)),
                K = () => v(t => b(t) && t > 0),
                T = () => v(t => b(t) && t < 0),
                P = t => Object.assign(f(t), {
                    between: (e, n) => P(d(t, S(e, n))),
                    lt: e => P(d(t, E(e))),
                    gt: e => P(d(t, z(e))),
                    lte: e => P(d(t, k(e))),
                    gte: e => P(d(t, B(e))),
                    int: () => P(d(t, C())),
                    finite: () => P(d(t, I())),
                    positive: () => P(d(t, K())),
                    negative: () => P(d(t, T()))
                }),
                R = P(v(b)),
                _ = (t, e) => v(n => x(n) && t <= n && e >= n),
                N = t => v(e => x(e) && e < t),
                U = t => v(e => x(e) && e > t),
                q = t => v(e => x(e) && e <= t),
                D = t => v(e => x(e) && e >= t),
                F = () => v(t => x(t) && t > 0),
                M = () => v(t => x(t) && t < 0),
                L = t => Object.assign(f(t), {
                    between: (e, n) => L(d(t, _(e, n))),
                    lt: e => L(d(t, N(e))),
                    gt: e => L(d(t, U(e))),
                    lte: e => L(d(t, q(e))),
                    gte: e => L(d(t, D(e))),
                    positive: () => L(d(t, F())),
                    negative: () => L(d(t, M()))
                }),
                W = L(v(x)),
                V = f(v(function(t) {
                    return "boolean" == typeof t
                })),
                J = f(v(function(t) {
                    return "symbol" == typeof t
                })),
                $ = f(v(function(t) {
                    return null == t
                }));
            var H = {
                __proto__: null,
                matcher: r,
                optional: h,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(h(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
                        })
                    }({
                        [r]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    r = {};
                                if (0 === t.length) return s(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => c(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: g(t, t => c(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
                        [r]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [o, a] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = c(o, e, i),
                                            r = c(a, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: d,
                union: y,
                not: function(t) {
                    return f({
                        [r]: () => ({
                            match: e => ({
                                matched: !c(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: v,
                select: m,
                any: A,
                _: A,
                string: O,
                between: S,
                lt: E,
                gt: z,
                lte: k,
                gte: B,
                int: C,
                finite: I,
                positive: K,
                negative: T,
                number: R,
                betweenBigInt: _,
                ltBigInt: N,
                gtBigInt: U,
                lteBigInt: q,
                gteBigInt: D,
                positiveBigInt: F,
                negativeBigInt: M,
                bigint: W,
                boolean: V,
                symbol: J,
                nullish: $,
                instanceOf: function(t) {
                    var e;
                    return f(v((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return f(v(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => c(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return c(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let G = {
                matched: !1,
                value: void 0
            };

            function Q(t) {
                return new X(t, G)
            }
            class X {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), t = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        l = (t, e) => {
                            u = !0, s[t] = e
                        },
                        f = a.some(t => c(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? o in s ? s[o] : s : this.input, this.input)
                        } : G;
                    return new X(this.input, f)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new X(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : G)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        }
    }
]);