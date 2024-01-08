            "use strict";
            r.r(e), r.d(e, {
                P: function() {
                    return G
                },
                match: function() {
                    return Y
                }
            }), r("222007"), r("424973"), r("70102"), r("808653");
            let i = Symbol.for("@ts-pattern/matcher"),
                n = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => !!(t && "object" == typeof t),
                s = t => t && !!t[i],
                f = (t, e, r) => {
                    if (s(t)) {
                        let n = t[i](),
                            {
                                matched: a,
                                selections: o
                            } = n.match(e);
                        return a && o && Object.keys(o).forEach(t => r(t, o[t])), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let i = [],
                                a = [],
                                o = [];
                            for (let e of t.keys()) {
                                let r = t[e];
                                s(r) && r[n] ? o.push(r) : o.length ? a.push(r) : i.push(r)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < i.length + a.length) return !1;
                                let t = e.slice(0, i.length),
                                    n = 0 === a.length ? [] : e.slice(-a.length),
                                    s = e.slice(i.length, 0 === a.length ? 1 / 0 : -a.length);
                                return i.every((e, i) => f(e, t[i], r)) && a.every((t, e) => f(t, n[e], r)) && (0 === o.length || f(o[0], s, r))
                            }
                            return t.length === e.length && t.every((t, i) => f(t, e[i], r))
                        }
                        return Object.keys(t).every(n => {
                            let a = t[n];
                            return (n in e || s(a) && "optional" === a[i]().matcherType) && f(a, e[n], r)
                        })
                    }
                    return Object.is(e, t)
                },
                h = t => {
                    var e, r, n;
                    return o(t) ? s(t) ? null != (e = null == (r = (n = t[i]()).getSelectionKeys) ? void 0 : r.call(n)) ? e : [] : Array.isArray(t) ? c(t, h) : c(Object.values(t), h) : []
                },
                c = (t, e) => t.reduce((t, r) => t.concat(e(r)), []);

            function u(t) {
                return Object.assign(t, {
                    optional: () => d(t),
                    and: e => b(t, e),
                    or: e => m(t, e),
                    select: e => void 0 === e ? v(t) : v(e, t)
                })
            }

            function d(t) {
                return u({
                    [i]: () => ({
                        match: e => {
                            let r = {},
                                i = (t, e) => {
                                    r[t] = e
                                };
                            return void 0 === e ? (h(t).forEach(t => i(t, void 0)), {
                                matched: !0,
                                selections: r
                            }) : {
                                matched: f(t, e, i),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => h(t),
                        matcherType: "optional"
                    })
                })
            }
            let l = (t, e) => {
                    for (let r of t)
                        if (!e(r)) return !1;
                    return !0
                },
                p = (t, e) => {
                    for (let [r, i] of t.entries())
                        if (!e(i, r)) return !1;
                    return !0
                };

            function b() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return u({
                    [i]: () => ({
                        match: t => {
                            let r = {},
                                i = (t, e) => {
                                    r[t] = e
                                };
                            return {
                                matched: e.every(e => f(e, t, i)),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => c(e, h),
                        matcherType: "and"
                    })
                })
            }

            function m() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return u({
                    [i]: () => ({
                        match: t => {
                            let r = {},
                                i = (t, e) => {
                                    r[t] = e
                                };
                            return c(e, h).forEach(t => i(t, void 0)), {
                                matched: e.some(e => f(e, t, i)),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => c(e, h),
                        matcherType: "or"
                    })
                })
            }

            function g(t) {
                return {
                    [i]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function v() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                let n = "string" == typeof e[0] ? e[0] : void 0,
                    o = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return u({
                    [i]: () => ({
                        match: t => {
                            let e = {
                                [null != n ? n : a]: t
                            };
                            return {
                                matched: void 0 === o || f(o, t, (t, r) => {
                                    e[t] = r
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != n ? n : a].concat(void 0 === o ? [] : h(o))
                    })
                })
            }

            function y(t) {
                return "number" == typeof t
            }

            function _(t) {
                return "string" == typeof t
            }

            function w(t) {
                return "bigint" == typeof t
            }
            let M = u(g(function(t) {
                    return !0
                })),
                S = t => Object.assign(u(t), {
                    startsWith: e => S(b(t, g(t => _(t) && t.startsWith(e)))),
                    endsWith: e => S(b(t, g(t => _(t) && t.endsWith(e)))),
                    minLength: e => {
                        var r;
                        return S(b(t, (r = e, g(t => _(t) && t.length >= r))))
                    },
                    maxLength: e => {
                        var r;
                        return S(b(t, (r = e, g(t => _(t) && t.length <= r))))
                    },
                    includes: e => S(b(t, g(t => _(t) && t.includes(e)))),
                    regex: e => S(b(t, g(t => _(t) && !!t.match(e))))
                }),
                k = S(g(_)),
                E = (t, e) => g(r => y(r) && t <= r && e >= r),
                A = t => g(e => y(e) && e < t),
                x = t => g(e => y(e) && e > t),
                B = t => g(e => y(e) && e <= t),
                R = t => g(e => y(e) && e >= t),
                I = () => g(t => y(t) && Number.isInteger(t)),
                C = () => g(t => y(t) && Number.isFinite(t)),
                j = () => g(t => y(t) && t > 0),
                T = () => g(t => y(t) && t < 0),
                P = t => Object.assign(u(t), {
                    between: (e, r) => P(b(t, E(e, r))),
                    lt: e => P(b(t, A(e))),
                    gt: e => P(b(t, x(e))),
                    lte: e => P(b(t, B(e))),
                    gte: e => P(b(t, R(e))),
                    int: () => P(b(t, I())),
                    finite: () => P(b(t, C())),
                    positive: () => P(b(t, j())),
                    negative: () => P(b(t, T()))
                }),
                z = P(g(y)),
                O = (t, e) => g(r => w(r) && t <= r && e >= r),
                L = t => g(e => w(e) && e < t),
                D = t => g(e => w(e) && e > t),
                N = t => g(e => w(e) && e <= t),
                q = t => g(e => w(e) && e >= t),
                U = () => g(t => w(t) && t > 0),
                F = () => g(t => w(t) && t < 0),
                K = t => Object.assign(u(t), {
                    between: (e, r) => K(b(t, O(e, r))),
                    lt: e => K(b(t, L(e))),
                    gt: e => K(b(t, D(e))),
                    lte: e => K(b(t, N(e))),
                    gte: e => K(b(t, q(e))),
                    positive: () => K(b(t, U())),
                    negative: () => K(b(t, F()))
                }),
                H = K(g(w)),
                Z = u(g(function(t) {
                    return "boolean" == typeof t
                })),
                W = u(g(function(t) {
                    return "symbol" == typeof t
                })),
                V = u(g(function(t) {
                    return null == t
                }));
            var G = {
                __proto__: null,
                matcher: i,
                optional: d,
                array: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function t(e) {
                        var r;
                        return Object.assign((r = e, Object.assign(r, {
                            *[Symbol.iterator]() {
                                yield Object.assign(r, {
                                    [n]: !0
                                })
                            }
                        })), {
                            optional: () => t(d(e)),
                            select: r => t(void 0 === r ? v(e) : v(r, e))
                        })
                    }({
                        [i]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = e[0],
                                    i = {};
                                if (0 === t.length) return h(r).forEach(t => {
                                    i[t] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let n = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => f(r, t, n)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : h(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return u({
                        [i]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let i = (t, e) => {
                                        r[t] = (r[t] || []).concat([e])
                                    },
                                    n = e[0];
                                return {
                                    matched: l(t, t => f(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : h(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return u({
                        [i]: () => ({
                            match: t => {
                                var r;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let n = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (r = e[0]) ? void 0 : r.toString()));
                                let [a, o] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let r = f(a, e, n),
                                            i = f(o, t, n);
                                        return r && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...h(e[0]), ...h(e[1])]
                        })
                    })
                },
                intersection: b,
                union: m,
                not: function(t) {
                    return u({
                        [i]: () => ({
                            match: e => ({
                                matched: !f(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: v,
                any: M,
                _: M,
                string: k,
                between: E,
                lt: A,
                gt: x,
                lte: B,
                gte: R,
                int: I,
                finite: C,
                positive: j,
                negative: T,
                number: z,
                betweenBigInt: O,
                ltBigInt: L,
                gtBigInt: D,
                lteBigInt: N,
                gteBigInt: q,
                positiveBigInt: U,
                negativeBigInt: F,
                bigint: H,
                boolean: Z,
                symbol: W,
                nullish: V,
                instanceOf: function(t) {
                    var e;
                    return u(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return u(g(function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => f(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, r] = e;
                            return f(t, r, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let X = {
                matched: !1,
                value: void 0
            };

            function Y(t) {
                return new J(t, X)
            }
            class J {
                with() {
                    let t;
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    if (this.state.matched) return this;
                    let n = r[r.length - 1],
                        o = [r[0]];
                    3 === r.length && "function" == typeof r[1] ? (o.push(r[0]), t = r[1]) : r.length > 2 && o.push(...r.slice(1, r.length - 1));
                    let s = !1,
                        h = {},
                        c = (t, e) => {
                            s = !0, h[t] = e
                        },
                        u = o.some(t => f(t, this.input, c)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: n(s ? a in h ? h[a] : h : this.input, this.input)
                        } : X;
                    return new J(this.input, u)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let r = !!t(this.input);
                    return new J(this.input, r ? {
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