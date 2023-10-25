(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76457"], {
        668542: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), i.test(t)) ? "rtl" : c.test(t) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                o = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + o + "]*[" + r + "]"),
                c = RegExp("^[^" + r + "]*[" + o + "]")
        },
        238455: function(t, e, n) {
            var r = n("63533"),
                o = n("651558"),
                i = n("349046"),
                c = n("153997"),
                u = n("820458"),
                a = n("663652"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = i(t),
                    l = !n && o(t),
                    S = !n && !l && c(t),
                    h = !n && !l && !S && a(t),
                    f = n || l || S || h,
                    A = f ? r(t.length, String) : [],
                    M = A.length;
                for (var E in t)(e || s.call(t, E)) && !(f && ("length" == E || S && ("offset" == E || "parent" == E) || h && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, M))) && A.push(E);
                return A
            }
        },
        291002: function(t, e, n) {
            var r = n("109633"),
                o = n("261711");
            t.exports = function(t) {
                return o(r(t))
            }
        },
        85722: function(t, e, n) {
            var r = n("616691"),
                o = n("960052"),
                i = n("509492"),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && o(t.length) && !!c[r(t)]
            }
        },
        891183: function(t, e, n) {
            var r = n("356827"),
                o = n("57100"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return o(t);
                var e = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        773988: function(t, e, n) {
            var r = n("261711"),
                o = n("211919");
            t.exports = function(t) {
                return r(o(t))
            }
        },
        63533: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        870686: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        109521: function(t, e, n) {
            var r = n("107327");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        109633: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        356827: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        57100: function(t, e, n) {
            var r = n("676315")(Object.keys, Object);
            t.exports = r
        },
        961077: function(t, e, n) {
            t = n.nmd(t);
            var r = n("71890"),
                o = "object" == typeof e && e && !e.nodeType && e,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                c = i && i.exports === o && r.process,
                u = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        676315: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        261711: function(t, e, n) {
            var r = n("54506");
            t.exports = function(t, e) {
                var n = -1,
                    o = t.length,
                    i = o - 1;
                for (e = void 0 === e ? o : e; ++n < e;) {
                    var c = r(n, i),
                        u = t[c];
                    t[c] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        153997: function(t, e, n) {
            t = n.nmd(t);
            var r = n("619146"),
                o = n("108028"),
                i = "object" == typeof e && e && !e.nodeType && e,
                c = i && "object" == typeof t && t && !t.nodeType && t,
                u = c && c.exports === i ? r.Buffer : void 0,
                a = u ? u.isBuffer : void 0;
            t.exports = a || o
        },
        663652: function(t, e, n) {
            var r = n("85722"),
                o = n("870686"),
                i = n("961077"),
                c = i && i.isTypedArray,
                u = c ? o(c) : r;
            t.exports = u
        },
        905269: function(t, e, n) {
            var r = n("238455"),
                o = n("891183"),
                i = n("355653");
            t.exports = function(t) {
                return i(t) ? r(t) : o(t)
            }
        },
        906288: function(t, e, n) {
            var r = n("291002"),
                o = n("773988"),
                i = n("349046");
            t.exports = function(t) {
                return (i(t) ? r : o)(t)
            }
        },
        108028: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        211919: function(t, e, n) {
            var r = n("109521"),
                o = n("905269");
            t.exports = function(t) {
                return null == t ? [] : r(t, o(t))
            }
        },
        505143: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return Q
                },
                match: function() {
                    return k
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                o = Symbol.for("@ts-pattern/isVariadic"),
                i = "@ts-pattern/anonymous-select-key",
                c = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                a = (t, e, n) => {
                    if (u(t)) {
                        let o = t[r](),
                            {
                                matched: i,
                                selections: c
                            } = o.match(e);
                        return i && c && Object.keys(c).forEach(t => n(t, c[t])), i
                    }
                    if (c(t)) {
                        if (!c(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                i = [],
                                c = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[o] ? c.push(n) : c.length ? i.push(n) : r.push(n)
                            }
                            if (c.length) {
                                if (c.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + i.length) return !1;
                                let t = e.slice(0, r.length),
                                    o = 0 === i.length ? [] : e.slice(-i.length),
                                    u = e.slice(r.length, 0 === i.length ? 1 / 0 : -i.length);
                                return r.every((e, r) => a(e, t[r], n)) && i.every((t, e) => a(t, o[e], n)) && (0 === c.length || a(c[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => a(t, e[r], n))
                        }
                        return Object.keys(t).every(o => {
                            let i = t[o];
                            return (o in e || u(i) && "optional" === i[r]().matcherType) && a(i, e[o], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, o;
                    return c(t) ? u(t) ? null != (e = null == (n = (o = t[r]()).getSelectionKeys) ? void 0 : n.call(o)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function S(t) {
                return Object.assign(t, {
                    optional: () => h(t),
                    and: e => M(t, e),
                    or: e => E(t, e),
                    select: e => void 0 === e ? C(t) : C(e, t)
                })
            }

            function h(t) {
                return S({
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
                                matched: a(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            let f = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                A = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function M() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return S({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => a(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "and"
                    })
                })
            }

            function E() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return S({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return l(e, s).forEach(t => r(t, void 0)), {
                                matched: e.some(e => a(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "or"
                    })
                })
            }

            function T(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function C() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let o = "string" == typeof e[0] ? e[0] : void 0,
                    c = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return S({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != o ? o : i]: t
                            };
                            return {
                                matched: void 0 === c || a(c, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != o ? o : i].concat(void 0 === c ? [] : s(c))
                    })
                })
            }

            function G(t) {
                return "number" == typeof t
            }

            function p(t) {
                return "string" == typeof t
            }

            function g(t) {
                return "bigint" == typeof t
            }
            let I = S(T(function(t) {
                    return !0
                })),
                y = t => Object.assign(S(t), {
                    startsWith: e => y(M(t, T(t => p(t) && t.startsWith(e)))),
                    endsWith: e => y(M(t, T(t => p(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return y(M(t, (n = e, T(t => p(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return y(M(t, (n = e, T(t => p(t) && t.length <= n))))
                    },
                    includes: e => y(M(t, T(t => p(t) && t.includes(e)))),
                    regex: e => y(M(t, T(t => p(t) && !!t.match(e))))
                }),
                B = y(T(p)),
                L = (t, e) => T(n => G(n) && t <= n && e >= n),
                R = t => T(e => G(e) && e < t),
                N = t => T(e => G(e) && e > t),
                d = t => T(e => G(e) && e <= t),
                K = t => T(e => G(e) && e >= t),
                v = () => T(t => G(t) && Number.isInteger(t)),
                O = () => T(t => G(t) && Number.isFinite(t)),
                P = () => T(t => G(t) && t > 0),
                m = () => T(t => G(t) && t < 0),
                U = t => Object.assign(S(t), {
                    between: (e, n) => U(M(t, L(e, n))),
                    lt: e => U(M(t, R(e))),
                    gt: e => U(M(t, N(e))),
                    lte: e => U(M(t, d(e))),
                    gte: e => U(M(t, K(e))),
                    int: () => U(M(t, v())),
                    finite: () => U(M(t, O())),
                    positive: () => U(M(t, P())),
                    negative: () => U(M(t, m()))
                }),
                b = U(T(G)),
                D = (t, e) => T(n => g(n) && t <= n && e >= n),
                F = t => T(e => g(e) && e < t),
                H = t => T(e => g(e) && e > t),
                W = t => T(e => g(e) && e <= t),
                V = t => T(e => g(e) && e >= t),
                j = () => T(t => g(t) && t > 0),
                Z = () => T(t => g(t) && t < 0),
                Y = t => Object.assign(S(t), {
                    between: (e, n) => Y(M(t, D(e, n))),
                    lt: e => Y(M(t, F(e))),
                    gt: e => Y(M(t, H(e))),
                    lte: e => Y(M(t, W(e))),
                    gte: e => Y(M(t, V(e))),
                    positive: () => Y(M(t, j())),
                    negative: () => Y(M(t, Z()))
                }),
                w = Y(T(g)),
                x = S(T(function(t) {
                    return "boolean" == typeof t
                })),
                J = S(T(function(t) {
                    return "symbol" == typeof t
                })),
                _ = S(T(function(t) {
                    return null == t
                }));
            var Q = {
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
                                    [o]: !0
                                })
                            }
                        })), {
                            optional: () => t(h(e)),
                            select: n => t(void 0 === n ? C(e) : C(n, e))
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
                                let o = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => a(n, t, o)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return S({
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
                                    o = e[0];
                                return {
                                    matched: f(t, t => a(o, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return S({
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
                                let o = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [i, c] = e;
                                return {
                                    matched: A(t, (t, e) => {
                                        let n = a(i, e, o),
                                            r = a(c, t, o);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: M,
                union: E,
                not: function(t) {
                    return S({
                        [r]: () => ({
                            match: e => ({
                                matched: !a(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: T,
                select: C,
                any: I,
                _: I,
                string: B,
                between: L,
                lt: R,
                gt: N,
                lte: d,
                gte: K,
                int: v,
                finite: O,
                positive: P,
                negative: m,
                number: b,
                betweenBigInt: D,
                ltBigInt: F,
                gtBigInt: H,
                lteBigInt: W,
                gteBigInt: V,
                positiveBigInt: j,
                negativeBigInt: Z,
                bigint: w,
                boolean: x,
                symbol: J,
                nullish: _,
                instanceOf: function(t) {
                    var e;
                    return S(T((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return S(T(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => a(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return a(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let X = {
                matched: !1,
                value: void 0
            };

            function k(t) {
                return new z(t, X)
            }
            class z {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let o = n[n.length - 1],
                        c = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (c.push(n[0]), t = n[1]) : n.length > 2 && c.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        l = (t, e) => {
                            u = !0, s[t] = e
                        },
                        S = c.some(t => a(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: o(u ? i in s ? s[i] : s : this.input, this.input)
                        } : X;
                    return new z(this.input, S)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new z(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : X)
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
        },
        148606: function(t, e, n) {
            "use strict";
            var r, o;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return r
                },
                CountryCodesSets: function() {
                    return i
                }
            }), (o = r || (r = {})).AD = "AD", o.AE = "AE", o.AF = "AF", o.AG = "AG", o.AI = "AI", o.AL = "AL", o.AM = "AM", o.AO = "AO", o.AQ = "AQ", o.AR = "AR", o.AS = "AS", o.AT = "AT", o.AU = "AU", o.AW = "AW", o.AX = "AX", o.AZ = "AZ", o.BA = "BA", o.BB = "BB", o.BD = "BD", o.BE = "BE", o.BF = "BF", o.BG = "BG", o.BH = "BH", o.BI = "BI", o.BJ = "BJ", o.BL = "BL", o.BM = "BM", o.BN = "BN", o.BO = "BO", o.BQ = "BQ", o.BR = "BR", o.BS = "BS", o.BT = "BT", o.BV = "BV", o.BW = "BW", o.BY = "BY", o.BZ = "BZ", o.CA = "CA", o.CC = "CC", o.CD = "CD", o.CF = "CF", o.CG = "CG", o.CH = "CH", o.CI = "CI", o.CK = "CK", o.CL = "CL", o.CM = "CM", o.CN = "CN", o.CO = "CO", o.CR = "CR", o.CU = "CU", o.CV = "CV", o.CW = "CW", o.CX = "CX", o.CY = "CY", o.CZ = "CZ", o.DE = "DE", o.DJ = "DJ", o.DK = "DK", o.DM = "DM", o.DO = "DO", o.DZ = "DZ", o.EC = "EC", o.EE = "EE", o.EG = "EG", o.EH = "EH", o.ER = "ER", o.ES = "ES", o.ET = "ET", o.FI = "FI", o.FJ = "FJ", o.FK = "FK", o.FM = "FM", o.FO = "FO", o.FR = "FR", o.GA = "GA", o.GB = "GB", o.GD = "GD", o.GE = "GE", o.GF = "GF", o.GG = "GG", o.GH = "GH", o.GI = "GI", o.GL = "GL", o.GM = "GM", o.GN = "GN", o.GP = "GP", o.GQ = "GQ", o.GR = "GR", o.GS = "GS", o.GT = "GT", o.GU = "GU", o.GW = "GW", o.GY = "GY", o.HK = "HK", o.HM = "HM", o.HN = "HN", o.HR = "HR", o.HT = "HT", o.HU = "HU", o.ID = "ID", o.IE = "IE", o.IL = "IL", o.IM = "IM", o.IN = "IN", o.IO = "IO", o.IQ = "IQ", o.IR = "IR", o.IS = "IS", o.IT = "IT", o.JE = "JE", o.JM = "JM", o.JO = "JO", o.JP = "JP", o.KE = "KE", o.KG = "KG", o.KH = "KH", o.KI = "KI", o.KM = "KM", o.KN = "KN", o.KP = "KP", o.KR = "KR", o.KW = "KW", o.KY = "KY", o.KZ = "KZ", o.LA = "LA", o.LB = "LB", o.LC = "LC", o.LI = "LI", o.LK = "LK", o.LR = "LR", o.LS = "LS", o.LT = "LT", o.LU = "LU", o.LV = "LV", o.LY = "LY", o.MA = "MA", o.MC = "MC", o.MD = "MD", o.ME = "ME", o.MF = "MF", o.MG = "MG", o.MH = "MH", o.MK = "MK", o.ML = "ML", o.MM = "MM", o.MN = "MN", o.MO = "MO", o.MP = "MP", o.MQ = "MQ", o.MR = "MR", o.MS = "MS", o.MT = "MT", o.MU = "MU", o.MV = "MV", o.MW = "MW", o.MX = "MX", o.MY = "MY", o.MZ = "MZ", o.NA = "NA", o.NC = "NC", o.NE = "NE", o.NF = "NF", o.NG = "NG", o.NI = "NI", o.NL = "NL", o.NO = "NO", o.NP = "NP", o.NR = "NR", o.NU = "NU", o.NZ = "NZ", o.OM = "OM", o.PA = "PA", o.PE = "PE", o.PF = "PF", o.PG = "PG", o.PH = "PH", o.PK = "PK", o.PL = "PL", o.PM = "PM", o.PN = "PN", o.PR = "PR", o.PS = "PS", o.PT = "PT", o.PW = "PW", o.PY = "PY", o.QA = "QA", o.RE = "RE", o.RO = "RO", o.RS = "RS", o.RU = "RU", o.RW = "RW", o.SA = "SA", o.SB = "SB", o.SC = "SC", o.SD = "SD", o.SE = "SE", o.SG = "SG", o.SH = "SH", o.SI = "SI", o.SJ = "SJ", o.SK = "SK", o.SL = "SL", o.SM = "SM", o.SN = "SN", o.SO = "SO", o.SR = "SR", o.SS = "SS", o.ST = "ST", o.SV = "SV", o.SX = "SX", o.SY = "SY", o.SZ = "SZ", o.TC = "TC", o.TD = "TD", o.TF = "TF", o.TG = "TG", o.TH = "TH", o.TJ = "TJ", o.TK = "TK", o.TL = "TL", o.TM = "TM", o.TN = "TN", o.TO = "TO", o.TR = "TR", o.TT = "TT", o.TV = "TV", o.TW = "TW", o.TZ = "TZ", o.UA = "UA", o.UG = "UG", o.UM = "UM", o.US = "US", o.UY = "UY", o.UZ = "UZ", o.VA = "VA", o.VC = "VC", o.VE = "VE", o.VG = "VG", o.VI = "VI", o.VN = "VN", o.VU = "VU", o.WF = "WF", o.WS = "WS", o.YE = "YE", o.YT = "YT", o.ZA = "ZA", o.ZM = "ZM", o.ZW = "ZW", o.XK = "XK", o.AC = "AC", o.AN = "AN", o.DG = "DG", o.EL = "EL", o.IC = "IC", o.MI = "MI", o.TP = "TP", o.WK = "WK";
            let i = {
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
        895393: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = document.body;
                if (null == e) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = t, o.contentEditable = "true", o.style.visibility = "none", e.appendChild(o), n.selectNodeContents(o), null == r || r.removeAllRanges(), null == r || r.addRange(n), o.focus(), o.setSelectionRange(0, t.length);
                let i = document.execCommand("copy");
                return e.removeChild(o), i
            }
            n.r(e), n.d(e, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);