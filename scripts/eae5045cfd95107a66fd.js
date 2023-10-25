(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87174"], {
        238455: function(t, e, n) {
            var r = n("63533"),
                i = n("651558"),
                o = n("349046"),
                c = n("153997"),
                u = n("820458"),
                a = n("663652"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    S = !n && !l && c(t),
                    h = !n && !l && !S && a(t),
                    f = n || l || S || h,
                    A = f ? r(t.length, String) : [],
                    E = A.length;
                for (var M in t)(e || s.call(t, M)) && !(f && ("length" == M || S && ("offset" == M || "parent" == M) || h && ("buffer" == M || "byteLength" == M || "byteOffset" == M) || u(M, E))) && A.push(M);
                return A
            }
        },
        291002: function(t, e, n) {
            var r = n("109633"),
                i = n("261711");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        85722: function(t, e, n) {
            var r = n("616691"),
                i = n("960052"),
                o = n("509492"),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!c[r(t)]
            }
        },
        891183: function(t, e, n) {
            var r = n("356827"),
                i = n("57100"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        773988: function(t, e, n) {
            var r = n("261711"),
                i = n("211919");
            t.exports = function(t) {
                return r(i(t))
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
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                c = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
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
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var c = r(n, o),
                        u = t[c];
                    t[c] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        153997: function(t, e, n) {
            t = n.nmd(t);
            var r = n("619146"),
                i = n("108028"),
                o = "object" == typeof e && e && !e.nodeType && e,
                c = o && "object" == typeof t && t && !t.nodeType && t,
                u = c && c.exports === o ? r.Buffer : void 0,
                a = u ? u.isBuffer : void 0;
            t.exports = a || i
        },
        663652: function(t, e, n) {
            var r = n("85722"),
                i = n("870686"),
                o = n("961077"),
                c = o && o.isTypedArray,
                u = c ? i(c) : r;
            t.exports = u
        },
        905269: function(t, e, n) {
            var r = n("238455"),
                i = n("891183"),
                o = n("355653");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        906288: function(t, e, n) {
            var r = n("291002"),
                i = n("773988"),
                o = n("349046");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        108028: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        211919: function(t, e, n) {
            var r = n("109521"),
                i = n("905269");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
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
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                c = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                a = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: o,
                                selections: c
                            } = i.match(e);
                        return o && c && Object.keys(c).forEach(t => n(t, c[t])), o
                    }
                    if (c(t)) {
                        if (!c(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                c = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? c.push(n) : c.length ? o.push(n) : r.push(n)
                            }
                            if (c.length) {
                                if (c.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    u = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => a(e, t[r], n)) && o.every((t, e) => a(t, i[e], n)) && (0 === c.length || a(c[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => a(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || u(o) && "optional" === o[r]().matcherType) && a(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return c(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function S(t) {
                return Object.assign(t, {
                    optional: () => h(t),
                    and: e => E(t, e),
                    or: e => M(t, e),
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

            function E() {
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

            function M() {
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
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    c = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return S({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === c || a(c, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === c ? [] : s(c))
                    })
                })
            }

            function I(t) {
                return "number" == typeof t
            }

            function G(t) {
                return "string" == typeof t
            }

            function g(t) {
                return "bigint" == typeof t
            }
            let p = S(T(function(t) {
                    return !0
                })),
                N = t => Object.assign(S(t), {
                    startsWith: e => N(E(t, T(t => G(t) && t.startsWith(e)))),
                    endsWith: e => N(E(t, T(t => G(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return N(E(t, (n = e, T(t => G(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return N(E(t, (n = e, T(t => G(t) && t.length <= n))))
                    },
                    includes: e => N(E(t, T(t => G(t) && t.includes(e)))),
                    regex: e => N(E(t, T(t => G(t) && !!t.match(e))))
                }),
                y = N(T(G)),
                B = (t, e) => T(n => I(n) && t <= n && e >= n),
                L = t => T(e => I(e) && e < t),
                R = t => T(e => I(e) && e > t),
                d = t => T(e => I(e) && e <= t),
                K = t => T(e => I(e) && e >= t),
                v = () => T(t => I(t) && Number.isInteger(t)),
                O = () => T(t => I(t) && Number.isFinite(t)),
                P = () => T(t => I(t) && t > 0),
                m = () => T(t => I(t) && t < 0),
                U = t => Object.assign(S(t), {
                    between: (e, n) => U(E(t, B(e, n))),
                    lt: e => U(E(t, L(e))),
                    gt: e => U(E(t, R(e))),
                    lte: e => U(E(t, d(e))),
                    gte: e => U(E(t, K(e))),
                    int: () => U(E(t, v())),
                    finite: () => U(E(t, O())),
                    positive: () => U(E(t, P())),
                    negative: () => U(E(t, m()))
                }),
                b = U(T(I)),
                D = (t, e) => T(n => g(n) && t <= n && e >= n),
                F = t => T(e => g(e) && e < t),
                H = t => T(e => g(e) && e > t),
                V = t => T(e => g(e) && e <= t),
                W = t => T(e => g(e) && e >= t),
                j = () => T(t => g(t) && t > 0),
                Z = () => T(t => g(t) && t < 0),
                Y = t => Object.assign(S(t), {
                    between: (e, n) => Y(E(t, D(e, n))),
                    lt: e => Y(E(t, F(e))),
                    gt: e => Y(E(t, H(e))),
                    lte: e => Y(E(t, V(e))),
                    gte: e => Y(E(t, W(e))),
                    positive: () => Y(E(t, j())),
                    negative: () => Y(E(t, Z()))
                }),
                w = Y(T(g)),
                J = S(T(function(t) {
                    return "boolean" == typeof t
                })),
                _ = S(T(function(t) {
                    return "symbol" == typeof t
                })),
                x = S(T(function(t) {
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
                                    [i]: !0
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
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => a(n, t, i)),
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
                                    i = e[0];
                                return {
                                    matched: f(t, t => a(i, t, r)),
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
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [o, c] = e;
                                return {
                                    matched: A(t, (t, e) => {
                                        let n = a(o, e, i),
                                            r = a(c, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: E,
                union: M,
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
                any: p,
                _: p,
                string: y,
                between: B,
                lt: L,
                gt: R,
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
                lteBigInt: V,
                gteBigInt: W,
                positiveBigInt: j,
                negativeBigInt: Z,
                bigint: w,
                boolean: J,
                symbol: _,
                nullish: x,
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
                return new q(t, X)
            }
            class q {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        c = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (c.push(n[0]), t = n[1]) : n.length > 2 && c.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        l = (t, e) => {
                            u = !0, s[t] = e
                        },
                        S = c.some(t => a(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? o in s ? s[o] : s : this.input, this.input)
                        } : X;
                    return new q(this.input, S)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new q(this.input, n ? {
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
            var r, i;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return r
                },
                CountryCodesSets: function() {
                    return o
                }
            }), (i = r || (r = {})).AD = "AD", i.AE = "AE", i.AF = "AF", i.AG = "AG", i.AI = "AI", i.AL = "AL", i.AM = "AM", i.AO = "AO", i.AQ = "AQ", i.AR = "AR", i.AS = "AS", i.AT = "AT", i.AU = "AU", i.AW = "AW", i.AX = "AX", i.AZ = "AZ", i.BA = "BA", i.BB = "BB", i.BD = "BD", i.BE = "BE", i.BF = "BF", i.BG = "BG", i.BH = "BH", i.BI = "BI", i.BJ = "BJ", i.BL = "BL", i.BM = "BM", i.BN = "BN", i.BO = "BO", i.BQ = "BQ", i.BR = "BR", i.BS = "BS", i.BT = "BT", i.BV = "BV", i.BW = "BW", i.BY = "BY", i.BZ = "BZ", i.CA = "CA", i.CC = "CC", i.CD = "CD", i.CF = "CF", i.CG = "CG", i.CH = "CH", i.CI = "CI", i.CK = "CK", i.CL = "CL", i.CM = "CM", i.CN = "CN", i.CO = "CO", i.CR = "CR", i.CU = "CU", i.CV = "CV", i.CW = "CW", i.CX = "CX", i.CY = "CY", i.CZ = "CZ", i.DE = "DE", i.DJ = "DJ", i.DK = "DK", i.DM = "DM", i.DO = "DO", i.DZ = "DZ", i.EC = "EC", i.EE = "EE", i.EG = "EG", i.EH = "EH", i.ER = "ER", i.ES = "ES", i.ET = "ET", i.FI = "FI", i.FJ = "FJ", i.FK = "FK", i.FM = "FM", i.FO = "FO", i.FR = "FR", i.GA = "GA", i.GB = "GB", i.GD = "GD", i.GE = "GE", i.GF = "GF", i.GG = "GG", i.GH = "GH", i.GI = "GI", i.GL = "GL", i.GM = "GM", i.GN = "GN", i.GP = "GP", i.GQ = "GQ", i.GR = "GR", i.GS = "GS", i.GT = "GT", i.GU = "GU", i.GW = "GW", i.GY = "GY", i.HK = "HK", i.HM = "HM", i.HN = "HN", i.HR = "HR", i.HT = "HT", i.HU = "HU", i.ID = "ID", i.IE = "IE", i.IL = "IL", i.IM = "IM", i.IN = "IN", i.IO = "IO", i.IQ = "IQ", i.IR = "IR", i.IS = "IS", i.IT = "IT", i.JE = "JE", i.JM = "JM", i.JO = "JO", i.JP = "JP", i.KE = "KE", i.KG = "KG", i.KH = "KH", i.KI = "KI", i.KM = "KM", i.KN = "KN", i.KP = "KP", i.KR = "KR", i.KW = "KW", i.KY = "KY", i.KZ = "KZ", i.LA = "LA", i.LB = "LB", i.LC = "LC", i.LI = "LI", i.LK = "LK", i.LR = "LR", i.LS = "LS", i.LT = "LT", i.LU = "LU", i.LV = "LV", i.LY = "LY", i.MA = "MA", i.MC = "MC", i.MD = "MD", i.ME = "ME", i.MF = "MF", i.MG = "MG", i.MH = "MH", i.MK = "MK", i.ML = "ML", i.MM = "MM", i.MN = "MN", i.MO = "MO", i.MP = "MP", i.MQ = "MQ", i.MR = "MR", i.MS = "MS", i.MT = "MT", i.MU = "MU", i.MV = "MV", i.MW = "MW", i.MX = "MX", i.MY = "MY", i.MZ = "MZ", i.NA = "NA", i.NC = "NC", i.NE = "NE", i.NF = "NF", i.NG = "NG", i.NI = "NI", i.NL = "NL", i.NO = "NO", i.NP = "NP", i.NR = "NR", i.NU = "NU", i.NZ = "NZ", i.OM = "OM", i.PA = "PA", i.PE = "PE", i.PF = "PF", i.PG = "PG", i.PH = "PH", i.PK = "PK", i.PL = "PL", i.PM = "PM", i.PN = "PN", i.PR = "PR", i.PS = "PS", i.PT = "PT", i.PW = "PW", i.PY = "PY", i.QA = "QA", i.RE = "RE", i.RO = "RO", i.RS = "RS", i.RU = "RU", i.RW = "RW", i.SA = "SA", i.SB = "SB", i.SC = "SC", i.SD = "SD", i.SE = "SE", i.SG = "SG", i.SH = "SH", i.SI = "SI", i.SJ = "SJ", i.SK = "SK", i.SL = "SL", i.SM = "SM", i.SN = "SN", i.SO = "SO", i.SR = "SR", i.SS = "SS", i.ST = "ST", i.SV = "SV", i.SX = "SX", i.SY = "SY", i.SZ = "SZ", i.TC = "TC", i.TD = "TD", i.TF = "TF", i.TG = "TG", i.TH = "TH", i.TJ = "TJ", i.TK = "TK", i.TL = "TL", i.TM = "TM", i.TN = "TN", i.TO = "TO", i.TR = "TR", i.TT = "TT", i.TV = "TV", i.TW = "TW", i.TZ = "TZ", i.UA = "UA", i.UG = "UG", i.UM = "UM", i.US = "US", i.UY = "UY", i.UZ = "UZ", i.VA = "VA", i.VC = "VC", i.VE = "VE", i.VG = "VG", i.VI = "VI", i.VN = "VN", i.VU = "VU", i.WF = "WF", i.WS = "WS", i.YE = "YE", i.YT = "YT", i.ZA = "ZA", i.ZM = "ZM", i.ZW = "ZW", i.XK = "XK", i.AC = "AC", i.AN = "AN", i.DG = "DG", i.EL = "EL", i.IC = "IC", i.MI = "MI", i.TP = "TP", i.WK = "WK";
            let o = {
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
        757364: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                GuildInviteFlags: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", i[i.IS_VIEWED = 2] = "IS_VIEWED", i[i.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        895393: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = document.body;
                if (null == e) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t, i.contentEditable = "true", i.style.visibility = "none", e.appendChild(i), n.selectNodeContents(i), null == r || r.removeAllRanges(), null == r || r.addRange(n), i.focus(), i.setSelectionRange(0, t.length);
                let o = document.execCommand("copy");
                return e.removeChild(i), o
            }
            n.r(e), n.d(e, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);