            "use strict";
            s.r(e), s.d(e, {
                P: function() {
                    return G
                },
                match: function() {
                    return X
                }
            }), s("222007"), s("424973"), s("70102"), s("808653");
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                n = "@ts-pattern/anonymous-select-key",
                c = t => !!(t && "object" == typeof t),
                o = t => t && !!t[r],
                f = (t, e, s) => {
                    if (o(t)) {
                        let i = t[r](),
                            {
                                matched: n,
                                selections: c
                            } = i.match(e);
                        return n && c && Object.keys(c).forEach(t => s(t, c[t])), n
                    }
                    if (c(t)) {
                        if (!c(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                n = [],
                                c = [];
                            for (let e of t.keys()) {
                                let s = t[e];
                                o(s) && s[i] ? c.push(s) : c.length ? n.push(s) : r.push(s)
                            }
                            if (c.length) {
                                if (c.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + n.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === n.length ? [] : e.slice(-n.length),
                                    o = e.slice(r.length, 0 === n.length ? 1 / 0 : -n.length);
                                return r.every((e, r) => f(e, t[r], s)) && n.every((t, e) => f(t, i[e], s)) && (0 === c.length || f(c[0], o, s))
                            }
                            return t.length === e.length && t.every((t, r) => f(t, e[r], s))
                        }
                        return Object.keys(t).every(i => {
                            let n = t[i];
                            return (i in e || o(n) && "optional" === n[r]().matcherType) && f(n, e[i], s)
                        })
                    }
                    return Object.is(e, t)
                },
                u = t => {
                    var e, s, i;
                    return c(t) ? o(t) ? null != (e = null == (s = (i = t[r]()).getSelectionKeys) ? void 0 : s.call(i)) ? e : [] : Array.isArray(t) ? a(t, u) : a(Object.values(t), u) : []
                },
                a = (t, e) => t.reduce((t, s) => t.concat(e(s)), []);

            function d(t) {
                return Object.assign(t, {
                    optional: () => p(t),
                    and: e => l(t, e),
                    or: e => g(t, e),
                    select: e => void 0 === e ? x(t) : x(e, t)
                })
            }

            function p(t) {
                return d({
                    [r]: () => ({
                        match: e => {
                            let s = {},
                                r = (t, e) => {
                                    s[t] = e
                                };
                            return void 0 === e ? (u(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: s
                            }) : {
                                matched: f(t, e, r),
                                selections: s
                            }
                        },
                        getSelectionKeys: () => u(t),
                        matcherType: "optional"
                    })
                })
            }
            let b = (t, e) => {
                    for (let s of t)
                        if (!e(s)) return !1;
                    return !0
                },
                h = (t, e) => {
                    for (let [s, r] of t.entries())
                        if (!e(r, s)) return !1;
                    return !0
                };

            function l() {
                for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                return d({
                    [r]: () => ({
                        match: t => {
                            let s = {},
                                r = (t, e) => {
                                    s[t] = e
                                };
                            return {
                                matched: e.every(e => f(e, t, r)),
                                selections: s
                            }
                        },
                        getSelectionKeys: () => a(e, u),
                        matcherType: "and"
                    })
                })
            }

            function g() {
                for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                return d({
                    [r]: () => ({
                        match: t => {
                            let s = {},
                                r = (t, e) => {
                                    s[t] = e
                                };
                            return a(e, u).forEach(t => r(t, void 0)), {
                                matched: e.some(e => f(e, t, r)),
                                selections: s
                            }
                        },
                        getSelectionKeys: () => a(e, u),
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

            function x() {
                for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    c = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return d({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : n]: t
                            };
                            return {
                                matched: void 0 === c || f(c, t, (t, s) => {
                                    e[t] = s
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : n].concat(void 0 === c ? [] : u(c))
                    })
                })
            }

            function m(t) {
                return "number" == typeof t
            }

            function y(t) {
                return "string" == typeof t
            }

            function _(t) {
                return "bigint" == typeof t
            }
            let w = d(v(function(t) {
                    return !0
                })),
                M = t => Object.assign(d(t), {
                    startsWith: e => M(l(t, v(t => y(t) && t.startsWith(e)))),
                    endsWith: e => M(l(t, v(t => y(t) && t.endsWith(e)))),
                    minLength: e => {
                        var s;
                        return M(l(t, (s = e, v(t => y(t) && t.length >= s))))
                    },
                    maxLength: e => {
                        var s;
                        return M(l(t, (s = e, v(t => y(t) && t.length <= s))))
                    },
                    includes: e => M(l(t, v(t => y(t) && t.includes(e)))),
                    regex: e => M(l(t, v(t => y(t) && !!t.match(e))))
                }),
                S = M(v(y)),
                k = (t, e) => v(s => m(s) && t <= s && e >= s),
                E = t => v(e => m(e) && e < t),
                A = t => v(e => m(e) && e > t),
                B = t => v(e => m(e) && e <= t),
                I = t => v(e => m(e) && e >= t),
                R = () => v(t => m(t) && Number.isInteger(t)),
                j = () => v(t => m(t) && Number.isFinite(t)),
                C = () => v(t => m(t) && t > 0),
                O = () => v(t => m(t) && t < 0),
                P = t => Object.assign(d(t), {
                    between: (e, s) => P(l(t, k(e, s))),
                    lt: e => P(l(t, E(e))),
                    gt: e => P(l(t, A(e))),
                    lte: e => P(l(t, B(e))),
                    gte: e => P(l(t, I(e))),
                    int: () => P(l(t, R())),
                    finite: () => P(l(t, j())),
                    positive: () => P(l(t, C())),
                    negative: () => P(l(t, O()))
                }),
                T = P(v(m)),
                D = (t, e) => v(s => _(s) && t <= s && e >= s),
                z = t => v(e => _(e) && e < t),
                L = t => v(e => _(e) && e > t),
                N = t => v(e => _(e) && e <= t),
                q = t => v(e => _(e) && e >= t),
                U = () => v(t => _(t) && t > 0),
                F = () => v(t => _(t) && t < 0),
                K = t => Object.assign(d(t), {
                    between: (e, s) => K(l(t, D(e, s))),
                    lt: e => K(l(t, z(e))),
                    gt: e => K(l(t, L(e))),
                    lte: e => K(l(t, N(e))),
                    gte: e => K(l(t, q(e))),
                    positive: () => K(l(t, U())),
                    negative: () => K(l(t, F()))
                }),
                H = K(v(_)),
                W = d(v(function(t) {
                    return "boolean" == typeof t
                })),
                V = d(v(function(t) {
                    return "symbol" == typeof t
                })),
                Z = d(v(function(t) {
                    return null == t
                }));
            var G = {
                __proto__: null,
                matcher: r,
                optional: p,
                array: function() {
                    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    return function t(e) {
                        var s;
                        return Object.assign((s = e, Object.assign(s, {
                            *[Symbol.iterator]() {
                                yield Object.assign(s, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(p(e)),
                            select: s => t(void 0 === s ? x(e) : x(s, e))
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
                                let s = e[0],
                                    r = {};
                                if (0 === t.length) return u(s).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => f(s, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : u(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    return d({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let s = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: s
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = (t, e) => {
                                        s[t] = (s[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: b(t, t => f(i, t, r)),
                                    selections: s
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : u(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    return d({
                        [r]: () => ({
                            match: t => {
                                var s;
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
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (s = e[0]) ? void 0 : s.toString()));
                                let [n, c] = e;
                                return {
                                    matched: h(t, (t, e) => {
                                        let s = f(n, e, i),
                                            r = f(c, t, i);
                                        return s && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...u(e[0]), ...u(e[1])]
                        })
                    })
                },
                intersection: l,
                union: g,
                not: function(t) {
                    return d({
                        [r]: () => ({
                            match: e => ({
                                matched: !f(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: v,
                select: x,
                any: w,
                _: w,
                string: S,
                between: k,
                lt: E,
                gt: A,
                lte: B,
                gte: I,
                int: R,
                finite: j,
                positive: C,
                negative: O,
                number: T,
                betweenBigInt: D,
                ltBigInt: z,
                gtBigInt: L,
                lteBigInt: N,
                gteBigInt: q,
                positiveBigInt: U,
                negativeBigInt: F,
                bigint: H,
                boolean: W,
                symbol: V,
                nullish: Z,
                instanceOf: function(t) {
                    var e;
                    return d(v((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return d(v(function() {
                        for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => f(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, s] = e;
                            return f(t, s, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let $ = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Y(t, $)
            }
            class Y {
                with() {
                    let t;
                    for (var e = arguments.length, s = Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = s[s.length - 1],
                        c = [s[0]];
                    3 === s.length && "function" == typeof s[1] ? (c.push(s[0]), t = s[1]) : s.length > 2 && c.push(...s.slice(1, s.length - 1));
                    let o = !1,
                        u = {},
                        a = (t, e) => {
                            o = !0, u[t] = e
                        },
                        d = c.some(t => f(t, this.input, a)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(o ? n in u ? u[n] : u : this.input, this.input)
                        } : $;
                    return new Y(this.input, d)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let s = !!t(this.input);
                    return new Y(this.input, s ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : $)
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