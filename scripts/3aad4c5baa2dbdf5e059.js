(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41457"], {
        533662: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return W
                },
                match: function() {
                    return q
                }
            });
            let a = Symbol.for("@ts-pattern/matcher"),
                l = Symbol.for("@ts-pattern/isVariadic"),
                s = "@ts-pattern/anonymous-select-key",
                r = e => !!(e && "object" == typeof e),
                i = e => e && !!e[a],
                d = (e, t, n) => {
                    if (i(e)) {
                        let l = e[a](),
                            {
                                matched: s,
                                selections: r
                            } = l.match(t);
                        return s && r && Object.keys(r).forEach(e => n(e, r[e])), s
                    }
                    if (r(e)) {
                        if (!r(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let a = [],
                                s = [],
                                r = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                i(n) && n[l] ? r.push(n) : r.length ? s.push(n) : a.push(n)
                            }
                            if (r.length) {
                                if (r.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < a.length + s.length) return !1;
                                let e = t.slice(0, a.length),
                                    l = 0 === s.length ? [] : t.slice(-s.length),
                                    i = t.slice(a.length, 0 === s.length ? 1 / 0 : -s.length);
                                return a.every((t, a) => d(t, e[a], n)) && s.every((e, t) => d(e, l[t], n)) && (0 === r.length || d(r[0], i, n))
                            }
                            return e.length === t.length && e.every((e, a) => d(e, t[a], n))
                        }
                        return Object.keys(e).every(l => {
                            let s = e[l];
                            return (l in t || i(s) && "optional" === s[a]().matcherType) && d(s, t[l], n)
                        })
                    }
                    return Object.is(t, e)
                },
                u = e => {
                    var t, n, l;
                    return r(e) ? i(e) ? null != (t = null == (n = (l = e[a]()).getSelectionKeys) ? void 0 : n.call(l)) ? t : [] : Array.isArray(e) ? o(e, u) : o(Object.values(e), u) : []
                },
                o = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function c(e) {
                return Object.assign(e, {
                    optional: () => E(e),
                    and: t => f(e, t),
                    or: t => h(e, t),
                    select: t => void 0 === t ? C(e) : C(t, e)
                })
            }

            function E(e) {
                return c({
                    [a]: () => ({
                        match: t => {
                            let n = {},
                                a = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (u(e).forEach(e => a(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: d(e, t, a),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => u(e),
                        matcherType: "optional"
                    })
                })
            }
            let _ = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                T = (e, t) => {
                    for (let [n, a] of e.entries())
                        if (!t(a, n)) return !1;
                    return !0
                };

            function f() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [a]: () => ({
                        match: e => {
                            let n = {},
                                a = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => d(t, e, a)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(t, u),
                        matcherType: "and"
                    })
                })
            }

            function h() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [a]: () => ({
                        match: e => {
                            let n = {},
                                a = (e, t) => {
                                    n[e] = t
                                };
                            return o(t, u).forEach(e => a(e, void 0)), {
                                matched: t.some(t => d(t, e, a)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(t, u),
                        matcherType: "or"
                    })
                })
            }

            function I(e) {
                return {
                    [a]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function C() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let l = "string" == typeof t[0] ? t[0] : void 0,
                    r = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return c({
                    [a]: () => ({
                        match: e => {
                            let t = {
                                [null != l ? l : s]: e
                            };
                            return {
                                matched: void 0 === r || d(r, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != l ? l : s].concat(void 0 === r ? [] : u(r))
                    })
                })
            }

            function m(e) {
                return "number" == typeof e
            }

            function L(e) {
                return "string" == typeof e
            }

            function p(e) {
                return "bigint" == typeof e
            }
            let g = c(I(function(e) {
                    return !0
                })),
                A = e => Object.assign(c(e), {
                    startsWith: t => A(f(e, I(e => L(e) && e.startsWith(t)))),
                    endsWith: t => A(f(e, I(e => L(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return A(f(e, (n = t, I(e => L(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return A(f(e, (n = t, I(e => L(e) && e.length <= n))))
                    },
                    includes: t => A(f(e, I(e => L(e) && e.includes(t)))),
                    regex: t => A(f(e, I(e => L(e) && !!e.match(t))))
                }),
                N = A(I(L)),
                v = (e, t) => I(n => m(n) && e <= n && t >= n),
                M = e => I(t => m(t) && t < e),
                S = e => I(t => m(t) && t > e),
                y = e => I(t => m(t) && t <= e),
                D = e => I(t => m(t) && t >= e),
                G = () => I(e => m(e) && Number.isInteger(e)),
                U = () => I(e => m(e) && Number.isFinite(e)),
                O = () => I(e => m(e) && e > 0),
                x = () => I(e => m(e) && e < 0),
                R = e => Object.assign(c(e), {
                    between: (t, n) => R(f(e, v(t, n))),
                    lt: t => R(f(e, M(t))),
                    gt: t => R(f(e, S(t))),
                    lte: t => R(f(e, y(t))),
                    gte: t => R(f(e, D(t))),
                    int: () => R(f(e, G())),
                    finite: () => R(f(e, U())),
                    positive: () => R(f(e, O())),
                    negative: () => R(f(e, x()))
                }),
                j = R(I(m)),
                V = (e, t) => I(n => p(n) && e <= n && t >= n),
                P = e => I(t => p(t) && t < e),
                B = e => I(t => p(t) && t > e),
                b = e => I(t => p(t) && t <= e),
                H = e => I(t => p(t) && t >= e),
                w = () => I(e => p(e) && e > 0),
                F = () => I(e => p(e) && e < 0),
                Y = e => Object.assign(c(e), {
                    between: (t, n) => Y(f(e, V(t, n))),
                    lt: t => Y(f(e, P(t))),
                    gt: t => Y(f(e, B(t))),
                    lte: t => Y(f(e, b(t))),
                    gte: t => Y(f(e, H(t))),
                    positive: () => Y(f(e, w())),
                    negative: () => Y(f(e, F()))
                }),
                k = Y(I(p)),
                X = c(I(function(e) {
                    return "boolean" == typeof e
                })),
                Z = c(I(function(e) {
                    return "symbol" == typeof e
                })),
                z = c(I(function(e) {
                    return null == e
                }));
            var W = {
                __proto__: null,
                matcher: a,
                optional: E,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [l]: !0
                                })
                            }
                        })), {
                            optional: () => e(E(t)),
                            select: n => e(void 0 === n ? C(t) : C(n, t))
                        })
                    }({
                        [a]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    a = {};
                                if (0 === e.length) return u(n).forEach(e => {
                                    a[e] = []
                                }), {
                                    matched: !0,
                                    selections: a
                                };
                                let l = (e, t) => {
                                    a[e] = (a[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => d(n, e, l)),
                                    selections: a
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [a]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let a = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    l = t[0];
                                return {
                                    matched: _(e, e => d(l, e, a)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [a]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let a = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: a
                                };
                                let l = (e, t) => {
                                    a[e] = (a[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [s, r] = t;
                                return {
                                    matched: T(e, (e, t) => {
                                        let n = d(s, t, l),
                                            a = d(r, e, l);
                                        return n && a
                                    }),
                                    selections: a
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...u(t[0]), ...u(t[1])]
                        })
                    })
                },
                intersection: f,
                union: h,
                not: function(e) {
                    return c({
                        [a]: () => ({
                            match: t => ({
                                matched: !d(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: I,
                select: C,
                any: g,
                _: g,
                string: N,
                between: v,
                lt: M,
                gt: S,
                lte: y,
                gte: D,
                int: G,
                finite: U,
                positive: O,
                negative: x,
                number: j,
                betweenBigInt: V,
                ltBigInt: P,
                gtBigInt: B,
                lteBigInt: b,
                gteBigInt: H,
                positiveBigInt: w,
                negativeBigInt: F,
                bigint: k,
                boolean: X,
                symbol: Z,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return c(I((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return c(I(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => d(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return d(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let K = {
                matched: !1,
                value: void 0
            };

            function q(e) {
                return new J(e, K)
            }
            class J {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    if (this.state.matched) return this;
                    let l = n[n.length - 1],
                        r = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (r.push(n[0]), e = n[1]) : n.length > 2 && r.push(...n.slice(1, n.length - 1));
                    let i = !1,
                        u = {},
                        o = (e, t) => {
                            i = !0, u[e] = t
                        },
                        c = r.some(e => d(e, this.input, o)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: l(i ? s in u ? u[s] : u : this.input, this.input)
                        } : K;
                    return new J(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new J(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : K)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let e;
                    if (this.state.matched) return this.state.value;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(e))
                }
                returnType() {
                    return this
                }
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                i = n("77078"),
                d = n("102985"),
                u = n("79798"),
                o = n("754474"),
                c = n("158998"),
                E = n("782340"),
                _ = n("892802");

            function T(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let f = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: l,
                    botVerified: r,
                    discriminatorClass: d,
                    className: o,
                    usernameClass: c,
                    color: T,
                    botClass: f,
                    showStreamerModeTooltip: h
                } = e;
                return (0, a.jsxs)("div", {
                    className: s(_.info, o),
                    children: [(0, a.jsx)(i.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: h,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: s(_.username, c),
                            style: null != T ? {
                                color: T
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, a.jsx)("span", {
                        className: s(_.infoSpacing, d),
                        children: n
                    }) : void 0, null != l && (0, a.jsx)(u.default, {
                        type: l,
                        className: s(_.infoSpacing, f),
                        verified: r
                    })]
                })
            };
            var h = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: l,
                    forceUsername: s,
                    showAccountIdentifier: i,
                    overrideDiscriminator: u,
                    forcePomelo: E,
                    ..._
                } = e, h = (0, r.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), I = h || t || n.isNonUserBot(), C = n.toString(), m = c.default.getName(n), L = s ? C : null != l ? l : m, p = n.isPomelo() || E;
                if (p || L !== C) {
                    let e = L === C && p && s ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : L,
                        t = i && e !== "@".concat(C) ? c.default.getUserTag(n) : void 0;
                    return (0, a.jsx)(f, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: T(n),
                        showStreamerModeTooltip: h && e !== m,
                        ..._
                    })
                }
                return (0, a.jsx)(o.default, {
                    name: L,
                    botType: T(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: I || L !== C ? null : null != u ? u : n.discriminator,
                    ..._
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: i
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: i
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: i
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: i
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: i
                    })
                })
            }
        },
        501030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var a = n("872717"),
                l = n("49111");
            async function s(e, t, n) {
                let s = await a.default.get({
                    url: l.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: n
                    }
                });
                return s.body
            }
        },
        730647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DirectoryEntryTypes: function() {
                    return i
                },
                CreateOrAddGuildSlideTypes: function() {
                    return d
                },
                HubGuildTemplateId: function() {
                    return u
                },
                DirectoryEntryCategories: function() {
                    return o
                },
                getHubCategories: function() {
                    return f
                },
                getHubGuildTemplatesMap: function() {
                    return h
                }
            });
            var a, l, s, r, i, d, u, o, c = n("316693"),
                E = n("991170"),
                _ = n("49111"),
                T = n("782340");
            (a = i || (i = {}))[a.GUILD = 0] = "GUILD", a[a.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (l = d || (d = {})).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", (s = u || (u = {})).CREATE = "CREATE", s.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", s.HUB_STUDY = "HUB_STUDY", s.HUB_CLASS = "HUB_CLASS", s.HUB_SOCIAL = "HUB_SOCIAL", s.HUB_MAJOR = "HUB_MAJOR", s.HUB_DORM = "HUB_DORM", (r = o || (o = {}))[r.ALL = -1] = "ALL", r[r.UNCATEGORIZED = 0] = "UNCATEGORIZED", r[r.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", r[r.CLASS = 2] = "CLASS", r[r.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", r[r.MISC = 5] = "MISC";

            function f(e) {
                return "883060064561299456" === e ? [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function h() {
                return {
                    [u.CREATE]: {
                        id: u.CREATE,
                        code: "2TffvPucqHkN",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [u.HUB_SCHOOL_CLUB]: {
                        id: u.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: E.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: c.default.combine(E.default.DEFAULT, _.Permissions.MANAGE_ROLES, _.Permissions.MANAGE_CHANNELS, _.Permissions.KICK_MEMBERS, _.Permissions.BAN_MEMBERS, _.Permissions.MANAGE_NICKNAMES, _.Permissions.MANAGE_GUILD_EXPRESSIONS, _.Permissions.MANAGE_MESSAGES, _.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_STUDY]: {
                        id: u.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_CLASS]: {
                        id: u.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_SOCIAL]: {
                        id: u.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [u.HUB_MAJOR]: {
                        id: u.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_DORM]: {
                        id: u.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: _.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: _.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: _.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: _.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }
                }
            }
        },
        960757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                l = n("446674"),
                s = n("152475"),
                r = n("42203"),
                i = n("501030"),
                d = n("730647"),
                u = n("49111");
            let o = {
                can_broadcast: !1
            };

            function c(e, t, n) {
                let [c, E] = a.useState(o), [_, T] = a.useState(!1), f = a.useRef(!1), h = null == e ? void 0 : e.id, I = null == e ? void 0 : e.hasFeature(u.GuildFeatures.HAS_DIRECTORY_ENTRY);
                a.useEffect(() => {
                    if (!I) {
                        E(o);
                        return
                    }
                    if (f.current || null == h) return;
                    let e = async () => {
                        f.current = !0;
                        try {
                            let e = await (0, i.getDirectoryEntryBroadcastInfo)(h, d.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(o)
                        }
                        f.current = !1
                    };
                    e()
                }, [h, I, t]), a.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        T(!1);
                        return
                    }
                    T(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let C = (0, l.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(n, [r.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: C && _,
                    setBroadcastToDirectoryChannels: T,
                    canEveryoneRoleViewEvent: C
                }
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                l = n("446674"),
                s = n("817963"),
                r = n("923959"),
                i = n("305961"),
                d = n("957255"),
                u = n("49111"),
                o = (e, t) => {
                    let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = a.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        _ = (0, l.useStateFromStores)([d.default], () => {
                            if (d.default.can(u.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of E) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [E, n, o]);
                    return _
                }
        },
        799547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEventChannelsByType: function() {
                    return r
                },
                useGetEventChannelsByType: function() {
                    return i
                }
            });
            var a = n("446674"),
                l = n("817963");
            n("834052");
            var s = n("923959");

            function r(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let a = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    r = [];
                for (let {
                        channel: e
                    }
                    of a) {
                    let {
                        canCreateGuildEvent: n,
                        canManageAllEvents: a
                    } = (0, l.getManageResourcePermissions)(e), s = n || a;
                    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
                }
                return r
            }

            function i(e, t) {
                return (0, a.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
            }
            n("957255"), n("270161")
        },
        194250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("866227"),
                d = n.n(i),
                u = n("77078"),
                o = n("656913"),
                c = n("694187"),
                E = n("151642"),
                _ = n("29846"),
                T = n("777367"),
                f = n("398604"),
                h = n("189443"),
                I = n("822516"),
                C = n("93550"),
                m = n("953143"),
                L = n("745049"),
                p = n("75015"),
                g = n("837979"),
                A = n("782340"),
                N = n("505376");

            function v(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: n,
                    broadcastToDirectoryChannels: l,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return n.can_broadcast ? (0, a.jsxs)(u.FormItem, {
                    title: A.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: N.formItem,
                    children: [(0, a.jsx)(u.Tooltip, {
                        text: (0, a.jsx)(u.Text, {
                            className: N.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: A.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": A.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !r,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            children: (0, a.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                disabled: !r,
                                value: l,
                                onChange: (e, t) => s(t),
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: A.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, a.jsx)(u.Text, {
                        className: N.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: A.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function M(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: i,
                    editBroadcastInfoData: M,
                    error: S,
                    validationErrorMessage: y,
                    onChange: D,
                    canSetFocus: G = !1
                } = e, {
                    entityType: U,
                    channelId: O,
                    description: x,
                    name: R,
                    image: j,
                    scheduledEndTime: V,
                    scheduledStartTime: P,
                    autoStart: B,
                    recurrenceRule: b
                } = t, {
                    canUseEventsAutoStartToggle: H
                } = T.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != i ? i : ""
                }), w = (0, E.useStageBlockedUsersCount)(O), F = null != t && (0, f.isGuildScheduledEventActive)(t), Y = l.useMemo(() => {
                    let e = (0, I.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: d(P)
                    }
                }, [t, P]), k = l.useRef(null);
                l.useEffect(() => {
                    if (G) {
                        var e;
                        null === (e = k.current) || void 0 === e || e.focus()
                    }
                }, [G]);
                let X = e => {
                        D({
                            image: e
                        })
                    },
                    Z = (e, t) => {
                        if (null == e || void 0 === t) {
                            X(null);
                            return
                        }(0, u.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await n.el("57015").then(n.bind(n, "57015"));
                            return n => (0, a.jsx)(l, {
                                imgURI: e,
                                file: t,
                                onCrop: X,
                                uploadType: p.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...n
                            })
                        })
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: N.blockedUsersContainer,
                        children: null != O && !F && w > 0 && (0, a.jsx)(_.BlockedUsersNotice, {
                            channelId: O
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.form,
                        children: [(0, a.jsxs)(u.FormItem, {
                            title: A.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: N.topicFormItem,
                            required: !0,
                            children: [(0, a.jsx)(u.TextInput, {
                                className: N.textInput,
                                onChange: e => {
                                    D({
                                        name: e
                                    })
                                },
                                placeholder: A.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: g.MAX_STAGE_TOPIC_LENGTH,
                                value: R,
                                autoComplete: "off",
                                inputRef: k
                            }), null != S ? (0, a.jsx)(u.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: N.warning,
                                children: S.getAnyErrorMessage()
                            }) : null]
                        }), (0, a.jsx)(m.default, {
                            className: N.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: n
                                } = e, a = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                                null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (a.scheduledEndTime = t.add(1, "hour").toISOString()), D(a)
                            },
                            onRecurrenceChange: e => {
                                let t = Y.startDate;
                                if (null == t) return;
                                let n = (0, I.recurrenceOptionToRecurrenceRule)(e, t);
                                D({
                                    recurrenceRule: n
                                })
                            },
                            schedule: Y,
                            recurrenceRule: b,
                            showEndDate: U === L.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: U === L.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: F,
                            guildId: i
                        }), null != y ? (0, a.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: N.warning,
                            children: y
                        }) : null, H ? (0, a.jsx)(u.FormItem, {
                            className: r(N.formItem, N.autoStartToggle),
                            children: (0, a.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: B,
                                onChange: (e, t) => {
                                    D({
                                        autoStart: t
                                    })
                                },
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: A.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, a.jsx)(u.FormItem, {
                            title: A.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: N.formItem,
                            children: (0, a.jsx)(u.TextArea, {
                                className: N.descriptionInput,
                                placeholder: A.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: x,
                                onChange: e => {
                                    D({
                                        description: e
                                    })
                                },
                                maxLength: L.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, a.jsxs)(u.FormItem, {
                            title: A.default.Messages.GUILD_EVENT_IMAGE,
                            className: N.formItem,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: N.addImageHint,
                                children: A.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != j ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.default, {
                                    className: N.imagePreview,
                                    iconWrapperClassName: N.imagePreviewInner,
                                    image: j,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var n;
                                            return null !== (n = (0, C.default)((0, h.convertToFakeGuildEvent)(t, i, s))) && void 0 !== n ? n : null
                                        }
                                    },
                                    onChange: Z,
                                    hint: A.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, a.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    onClick: () => X(null),
                                    children: A.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, a.jsxs)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                children: [A.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, a.jsx)(c.default, {
                                    onChange: Z
                                })]
                            })]
                        }), (0, a.jsx)(v, {
                            editBroadcastInfoData: M
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a, l, s = n("37983"),
                r = n("884691"),
                i = n("446674"),
                d = n("77078"),
                u = n("970728"),
                o = n("206230"),
                c = n("526887"),
                E = n("960757"),
                _ = n("923959"),
                T = n("305961"),
                f = n("683911"),
                h = n("476765"),
                I = n("354023"),
                C = n("686904"),
                m = n("398604"),
                L = n("322224"),
                p = n("152475"),
                g = n("799547"),
                A = n("189443"),
                N = n("841363"),
                v = n("558286"),
                M = n("560309"),
                S = n("151859"),
                y = n("299342"),
                D = n("499950"),
                G = n("27754"),
                U = n("745049"),
                O = n("49111"),
                x = n("782340"),
                R = n("738021");
            let {
                INVITE_OPTIONS_7_DAYS: j,
                INVITE_OPTIONS_UNLIMITED: V
            } = I.default;

            function P(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: n
                } = r.useContext(c.ConfettiCannonContext);
                return r.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let a = e.getBoundingClientRect();
                    n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: a.left - 100,
                                y: a.top - 100
                            },
                            maxValue: {
                                x: a.left + 100,
                                y: a.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: a.right - 100,
                                y: a.top - 100
                            },
                            maxValue: {
                                x: a.right + 100,
                                y: a.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [n, t]), null
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    guildEventId: a,
                    editBroadcastInfoData: u,
                    isEdit: c,
                    formErrors: E,
                    transitionState: _,
                    loading: T,
                    error: I,
                    onChange: C,
                    onSave: L,
                    onClose: p,
                    createdEvent: g
                } = e, A = (0, h.useUID)(), N = r.useMemo(() => [{
                    slideId: l.ENTITY,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == E.entity,
                    userErrorMessage: E.entity
                }, {
                    slideId: l.SETTINGS,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == E.schedule && null == E.topic,
                    userErrorMessage: E.schedule
                }, {
                    slideId: l.PREVIEW,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [E]), G = Object.keys(l).length, U = (0, m.isGuildScheduledEventActive)(n), O = U ? l.SETTINGS : l.ENTITY, j = e => Math.max(0, Math.min(e, G - 1)), [V, B] = r.useState(O), [b, H] = r.useState(!1), w = r.useMemo(() => N.slice(0, V + 1).map(e => e.valid).every(Boolean), [N, V]), F = V >= N.length ? l.SUCCESS : N[j(V)].slideId, Y = F === l.SUCCESS, k = (0, v.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                k(Y);
                let X = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion),
                    Z = r.useRef(null),
                    z = e => {
                        H(!1), B(j(e))
                    };
                r.useEffect(() => {
                    null != g && z(l.SUCCESS)
                }, [null == g ? void 0 : g.id, z]);
                let W = () => {
                        if (!w) return;
                        let e = F === l.PREVIEW;
                        e ? L() : Y ? p() : z(V + 1)
                    },
                    K = () => {
                        z(V - 1)
                    },
                    q = x.default.Messages.NEXT;
                return F === l.PREVIEW && (q = c ? x.default.Messages.SAVE_EVENT : x.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": A,
                        size: d.ModalSize.DYNAMIC,
                        children: [!X && Y ? (0, s.jsx)(P, {
                            modal: Z.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: R.content,
                            scrollerRef: Z,
                            children: [!Y && (0, s.jsx)(f.default, {
                                steps: N.map(e => e.label),
                                stepIndex: V,
                                onClick: e => {
                                    e < V ? K() : e > V && W()
                                }
                            }), (0, s.jsxs)(d.Slides, {
                                activeSlide: F,
                                width: 440,
                                onSlideReady: e => {
                                    H(e === F)
                                },
                                children: [(0, s.jsx)(d.Slide, {
                                    id: l.ENTITY,
                                    children: (0, s.jsx)(M.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: E.entity,
                                        isSlideReady: b,
                                        onChange: C
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SETTINGS,
                                    children: (0, s.jsx)(y.default, {
                                        guildEvent: n,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: u,
                                        onChange: C,
                                        error: I,
                                        validationErrorMessage: E.schedule,
                                        isSlideReady: b
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.PREVIEW,
                                    children: (0, s.jsx)(S.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: a,
                                        error: I
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SUCCESS,
                                    children: (0, s.jsx)(D.default, {
                                        onClose: p,
                                        event: g
                                    })
                                })]
                            })]
                        }), !Y && (0, s.jsxs)(d.ModalFooter, {
                            className: R.footer,
                            children: [(0, s.jsxs)("div", {
                                className: R.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: p,
                                    children: x.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: W,
                                    disabled: !w,
                                    className: R.button,
                                    submitting: T,
                                    children: q
                                })]
                            }), F !== l.ENTITY && (0, s.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: K,
                                color: d.Button.Colors.LINK,
                                children: x.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: a,
                    transitionState: l,
                    onClose: o
                } = e, c = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(t)), f = (0, i.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(a), [a]), h = (0, i.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), I = (0, A.getInitialGuildEventData)(c, f, h), [v, M] = r.useState(I), [S] = r.useState((0, A.isEditingEvent)(f)), [y, D] = r.useState(null), R = e => {
                    var t;
                    let n = (0, p.isGuildEventInvitable)(e),
                        a = null !== (t = e.channel_id) && void 0 !== t ? t : null == h ? void 0 : h.id;
                    null != a && u.default.createInvite(a, {
                        max_age: j.value,
                        max_uses: V.value
                    }, O.InstantInviteSources.GUILD_EVENTS), n ? D(e) : o()
                }, P = (0, E.default)(c, null == f ? void 0 : f.id, v), [b, {
                    loading: H,
                    error: w
                }] = (0, C.default)(async () => {
                    if (null != y) return;
                    let e = {
                        broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
                    };
                    if (S && null != a) return await L.default.saveEvent(a, v, t, e), o();
                    let n = await L.default.createGuildEvent(v, t, e);
                    return R(n.body), n
                }), F = r.useMemo(() => (0, G.default)(v, S), [v, S]);
                return (0, s.jsx)(B, {
                    guildId: t,
                    guildEvent: v,
                    guildEventId: a,
                    editBroadcastInfoData: P,
                    isEdit: S,
                    formErrors: F,
                    transitionState: l,
                    loading: H,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var n;
                            let a = (0, N.getChannelTypeFromEntity)(e.entityType),
                                [l] = (0, g.getEventChannelsByType)(t, a);
                            e.channelId = null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null, e.entityType !== U.GuildScheduledEventEntityTypes.EXTERNAL && v.entityType === U.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        M(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        null != v.recurrenceRule && S ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await n.el("77078").then(n.bind(n, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: x.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: x.default.Messages.SAVE_EVENT,
                                cancelText: x.default.Messages.NEVERMIND,
                                onConfirm: b,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: x.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: x.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : b()
                    },
                    onClose: o,
                    createdEvent: y
                })
            }(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("866227"),
                r = n.n(s),
                i = n("446674"),
                d = n("77078"),
                u = n("679653"),
                o = n("42203"),
                c = n("305961"),
                E = n("957255"),
                _ = n("27618"),
                T = n("697218"),
                f = n("718550"),
                h = n("368121"),
                I = n("944633"),
                C = n("228427"),
                m = n("697468"),
                L = n("398604"),
                p = n("334683"),
                g = n("799547"),
                A = n("776863"),
                N = n("613767"),
                v = n("841363"),
                M = n("306939"),
                S = n("745049"),
                y = n("49111"),
                D = n("782340"),
                G = n("869785");
            let U = e => e === S.GuildScheduledEventEntityTypes.EXTERNAL,
                O = (e, t) => {
                    let n = o.default.getChannel(e);
                    if (null == n) return null;
                    let l = n.type === y.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, N.isChannelPublic)(n, t),
                        r = s ? h.default : I.default,
                        i = s ? C.default : m.default,
                        d = l ? i : r;
                    return (0, a.jsx)(d, {
                        height: 24,
                        className: G.channelOptionIcon
                    })
                },
                x = e => {
                    let {
                        guildId: t,
                        channelType: n,
                        channel: l,
                        onSelectChannel: s,
                        disabled: r,
                        entityType: i
                    } = e, o = n === y.ChannelTypes.GUILD_STAGE_VOICE, c = (0, N.isChannelPublic)(l, i), E = (0, g.useGetEventChannelsByType)(t, n);
                    return (0, a.jsxs)(d.FormItem, {
                        title: o ? D.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : D.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: G.options,
                        disabled: r,
                        required: !0,
                        children: [(0, a.jsx)(d.SearchableSelect, {
                            value: null == l ? void 0 : l.id,
                            options: E.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, T.default, _.default, !0)
                            })),
                            onChange: e => {
                                let t = E.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => O(null == e ? void 0 : e.value, i),
                            isDisabled: r
                        }), !c && (0, a.jsx)(d.Text, {
                            color: "header-secondary",
                            className: G.channelPrivate,
                            variant: "text-sm/normal",
                            children: D.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function R(e, t, n, a) {
                return t ? {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : n ? 0 === a && e !== S.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let j = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                V = e => t => {
                    var n;
                    e({
                        channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
                    })
                },
                P = (e, t) => n => {
                    let {
                        value: a
                    } = n, l = {
                        entityType: a,
                        scheduledEndTime: void 0
                    };
                    if (U(a)) {
                        var s;
                        let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
                        l.scheduledEndTime = e.toISOString()
                    }
                    e(l)
                };

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s,
                    isFocusReady: r
                } = e, {
                    entityType: u,
                    channelId: c
                } = n, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), _ = l.useRef(null);
                l.useEffect(() => {
                    if (r && U(u)) {
                        var e;
                        null === (e = _.current) || void 0 === e || e.focus()
                    }
                }, [r, u]);
                let T = j(s),
                    f = V(s),
                    h = (0, v.getLocationFromEventData)(n),
                    I = (0, v.getChannelTypeFromEntity)(u),
                    C = (0, L.isGuildScheduledEventActive)(n);
                return null == u || u === S.GuildScheduledEventEntityTypes.NONE ? null : U(u) ? (0, a.jsx)(d.FormItem, {
                    title: D.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: G.options,
                    required: !0,
                    children: (0, a.jsx)(d.TextInput, {
                        className: G.textInput,
                        onChange: T,
                        placeholder: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: S.MAX_EVENT_LOCATION_LENGTH,
                        value: null != h ? h : "",
                        inputRef: _
                    })
                }) : null == I ? null : (0, a.jsx)(x, {
                    guildId: t,
                    channelType: I,
                    onSelectChannel: f,
                    channel: E,
                    entityType: u,
                    disabled: C
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s
                } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), u = (0, p.default)(t, void 0), o = (0, p.default)(t, y.ChannelTypes.GUILD_VOICE), E = (0, p.default)(t, y.ChannelTypes.GUILD_STAGE_VOICE), _ = (0, g.useGetEventChannelsByType)(t, y.ChannelTypes.GUILD_VOICE), T = (0, A.useChannelsUserCanStartStageIn)(r), I = null == r ? void 0 : r.hasFeature(y.GuildFeatures.COMMUNITY), m = (0, L.isGuildScheduledEventActive)(n), N = P(s, n), v = l.useMemo(() => {
                    let e = [{
                        name: D.default.Messages.VOICE_CHANNEL,
                        value: S.GuildScheduledEventEntityTypes.VOICE,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: h.default,
                        ...R(S.GuildScheduledEventEntityTypes.VOICE, m, o, _.length)
                    }, {
                        name: D.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: S.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: f.default,
                        ...R(S.GuildScheduledEventEntityTypes.EXTERNAL, m, u, 0)
                    }];
                    return I ? [{
                        name: D.default.Messages.STAGE_CHANNEL,
                        value: S.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: C.default,
                        ...R(S.GuildScheduledEventEntityTypes.STAGE_INSTANCE, m, E, T.length)
                    }, ...e] : e
                }, [u, o, E, I, _.length, T.length, m]);
                return (0, a.jsx)(d.RadioGroup, {
                    value: n.entityType,
                    options: v,
                    onChange: N,
                    className: G.options
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    validationErrorMessage: s,
                    onChange: r,
                    isSlideReady: u = !1
                } = e, {
                    entityType: o
                } = l, _ = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), T = (0, A.useChannelsUserCanStartStageIn)(_), f = (0, i.useStateFromStores)([E.default], () => E.default.can(y.Permissions.MANAGE_CHANNELS, _)), h = null == _ ? void 0 : _.hasFeature(y.GuildFeatures.COMMUNITY), I = P(r, l), C = h && !U(o) && 0 === T.length && f && null != o;
                return (0, a.jsxs)("div", {
                    className: G.container,
                    children: [(0, a.jsx)(d.Heading, {
                        variant: "heading-xl/semibold",
                        className: G.header,
                        children: D.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, a.jsx)(d.Text, {
                        color: "header-secondary",
                        className: G.text,
                        variant: "text-sm/normal",
                        children: D.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, a.jsx)(b, {
                        guildId: t,
                        guildEvent: l,
                        onChange: r
                    }), (0, a.jsx)(B, {
                        guildId: t,
                        guildEvent: l,
                        isFocusReady: u,
                        onChange: r
                    }), C ? (0, a.jsx)(M.default, {
                        onClick: () => {
                            I({
                                value: S.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: D.default.Messages.STAGE_CHANNEL
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("581354").then(n.bind(n, "581354"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    channelType: y.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                r = n("77078"),
                i = n("419830"),
                d = n("267567"),
                u = n("42203"),
                o = n("305961"),
                c = n("697218"),
                E = n("718550"),
                _ = n("189443"),
                T = n("841363"),
                f = n("93550"),
                h = n("617347"),
                I = n("745049"),
                C = n("782340"),
                m = n("151990");

            function L(e) {
                var t, n, L, p;
                let {
                    guildId: g,
                    guildEvent: A,
                    guildEventId: N,
                    error: v
                } = e, M = l.useMemo(() => (0, _.convertToFakeGuildEvent)(A, g), [A, g]), {
                    channel_id: S,
                    name: y,
                    image: D,
                    description: G
                } = M, U = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(S), [S]), O = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(g), [g]), x = (0, T.getLocationFromEvent)(M), R = (0, s.useStateFromStores)([c.default], () => null != A.creatorId ? c.default.getUser(A.creatorId) : c.default.getCurrentUser(), [A.creatorId]), j = (0, s.useStateFromStores)([d.default], () => d.default.isLurking(g), [g]), V = (0, i.getChannelIconComponent)(U, O);
                return (0, a.jsxs)("div", {
                    className: m.content,
                    children: [(0, a.jsx)(h.default, {
                        className: m.previewCard,
                        guild: O,
                        channel: U,
                        location: null != x ? x : void 0,
                        creator: R,
                        name: y,
                        description: G,
                        imageSource: (L = (0, _.convertToFakeGuildEvent)(A, g, N), null == (p = D) && null == L.image ? null : null != p && /^data:/.test(p) ? p : (0, f.default)(L)),
                        isActive: !1,
                        isUserLurking: j,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: I.FAKE_EVENT_ID,
                        eventPreview: M
                    }), (0, a.jsxs)("div", {
                        className: m.textContainer,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: C.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, a.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: m.subheader,
                            children: null != location ? C.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : C.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (n = null == U ? void 0 : U.name) && void 0 !== n ? n : "",
                                channelHook: () => (0, a.jsxs)("div", {
                                    className: m.channelName,
                                    children: [null != V ? (0, a.jsx)(V, {
                                        width: 20,
                                        height: 20,
                                        className: m.icon
                                    }) : (0, a.jsx)(E.default, {
                                        height: 18,
                                        width: 18,
                                        className: m.locationIcon
                                    }), null !== (t = null == U ? void 0 : U.name) && void 0 !== t ? t : x]
                                })
                            })
                        }), null != v && (0, a.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: m.subheader,
                            children: v.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("194250"),
                r = n("782340"),
                i = n("11644");

            function d(e) {
                let {
                    isSlideReady: t,
                    ...n
                } = e;
                return (0, a.jsxs)("div", {
                    className: i.slideContainer,
                    children: [(0, a.jsxs)("div", {
                        className: i.header,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            className: i.text,
                            variant: "text-sm/normal",
                            children: r.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, a.jsx)(s.default, {
                        ...n,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                r = n("9294"),
                i = n("512027"),
                d = n("52393"),
                u = n("652453"),
                o = n("119184"),
                c = n("923959"),
                E = n("305961"),
                _ = n("330154"),
                T = n("943232"),
                f = n("945330"),
                h = n("599110"),
                I = n("306160"),
                C = n("354023"),
                m = n("841363"),
                L = n("49111"),
                p = n("782340"),
                g = n("131439");
            let {
                INVITE_OPTIONS_7_DAYS: A,
                INVITE_OPTIONS_UNLIMITED: N
            } = C.default;

            function v(e) {
                var t, n, v;
                let {
                    onClose: M,
                    event: S
                } = e, y = null == S ? void 0 : S.guild_id, D = (0, l.useStateFromStores)([c.default], () => {
                    var e;
                    return null != y ? null === (e = c.default.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id : null
                }, [y]), G = (0, l.useStateFromStores)([E.default], () => E.default.getGuild(y), [y]), U = (null == G ? void 0 : G.vanityURLCode) != null && (null == G ? void 0 : G.vanityURLCode.length) > 0, {
                    enabled: O
                } = i.default.useExperiment({
                    guildId: null != y ? y : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: U
                }), {
                    channel_id: x,
                    id: R
                } = null != S ? S : {}, j = (0, l.useStateFromStores)([_.default], () => {
                    let e = null != x ? x : D;
                    return null == e ? null : _.default.getInvite(e)
                }, [x, D]);
                if (null == S) return M(), null;
                let V = O && null !== (t = null == G ? void 0 : G.vanityURLCode) && void 0 !== t ? t : null == j ? void 0 : j.code,
                    P = null != V ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: V,
                        guildScheduledEventId: R
                    }) : null,
                    B = null == P || null == j,
                    b = (0, d.default)(null != P ? P : ""),
                    H = null !== (n = null == j ? void 0 : j.maxAge) && void 0 !== n ? n : A.value,
                    w = null !== (v = null == j ? void 0 : j.maxUses) && void 0 !== v ? v : N.value;
                return (0, a.jsxs)("div", {
                    className: g.container,
                    children: [(0, a.jsx)(s.Clickable, {
                        onClick: M,
                        className: g.close,
                        "aria-label": p.default.Messages.CLOSE,
                        children: (0, a.jsx)(f.default, {})
                    }), (0, a.jsx)(o.default, {
                        children: (0, a.jsx)("div", {
                            className: g.iconContainer,
                            children: (0, a.jsx)(T.default, {
                                height: 30,
                                width: 30,
                                className: g.icon
                            })
                        })
                    }), (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: g.header,
                        children: p.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.body,
                        children: p.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, a.jsxs)("div", {
                        className: g.invite,
                        children: [(0, a.jsx)(u.RawInviteCopyInputConnected, {
                            value: b,
                            autoFocus: !1,
                            onCopy: e => {
                                if (B) return;
                                (0, I.copy)(e);
                                let t = (0, m.getChannelTypeFromEntity)(S.entity_type);
                                h.default.track(L.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: S.guild_id,
                                    channel: x,
                                    channel_type: t,
                                    location: L.InstantInviteSources.GUILD_EVENTS,
                                    code: j.code,
                                    guild_scheduled_event_id: null == S ? void 0 : S.id
                                })
                            }
                        }), (null == G ? void 0 : G.vanityURLCode) == null && (0, a.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: g.inviteDetail,
                            children: (0, C.maxAgeString)(H, w)
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                r = n("139321"),
                i = n("597517"),
                d = n("782340"),
                u = n("8341"),
                o = n("533662");
            let c = () => (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, a.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, a.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, a.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function E(e) {
                let {
                    onClick: t
                } = e, n = (0, l.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return n ? null : (0, a.jsxs)("div", {
                    className: u.container,
                    children: [(0, a.jsxs)("div", {
                        className: u.content,
                        children: [(0, a.jsxs)("div", {
                            className: u.textContainer,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: u.descriptionText,
                                children: d.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: c
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: u.image,
                            children: (0, a.jsx)("img", {
                                src: o,
                                alt: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: u.footer,
                        children: [(0, a.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: u.button,
                            children: d.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, a.jsx)(s.Button, {
                            onClick: () => {
                                i.hideHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: d.default.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
        },
        27754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("866227"),
                l = n.n(a),
                s = n("841363"),
                r = n("822516"),
                i = n("745049"),
                d = n("782340");

            function u(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: n
                        } = e, a = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == a || "" === a.trim()) && null == n ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let n = (0, r.getScheduleFromEventData)(e),
                            {
                                entityType: a
                            } = e;
                        if (null == n || (null == n ? void 0 : n.startDate) == null) return d.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: u
                        } = n;
                        return a === i.GuildScheduledEventEntityTypes.EXTERNAL && null == u ? d.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(l()) ? d.default.Messages.GUILD_EVENT_PAST_START_DATE : null != u && null != s && u.isBefore(s) ? d.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != u && u.isBefore(l()) ? d.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, n = null == t || "" === t.trim();
                        return n ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var a = n("533613");
            n.es(a, t);
            var l = n("597517");
            n.es(l, t);
            var s = n("269596")
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return f
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                d = n.n(i),
                u = n("77078"),
                o = n("159885"),
                c = n("694187"),
                E = n("49111"),
                _ = n("782340"),
                T = n("911686");

            function f(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, a.jsx)("div", {
                    className: r(T.imageUploaderIcon, t),
                    children: n
                })
            }
            class h extends l.PureComponent {
                handleExternalFileChange(e) {
                    d(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, l, s;
                    let {
                        image: i,
                        hint: d,
                        name: h,
                        makeURL: I,
                        disabled: C,
                        onChange: m,
                        showIcon: L,
                        showIconDisabled: p,
                        className: g,
                        imageClassName: A,
                        iconClassName: N,
                        iconWrapperClassName: v,
                        icon: M,
                        hideSize: S,
                        imageStyle: y,
                        showRemoveButton: D,
                        maxFileSizeBytes: G,
                        onFileSizeError: U,
                        onOpenImageSelectModal: O,
                        "aria-label": x
                    } = this.props;
                    if (null != (t = null != i && /^data:/.test(i) ? i : I(i)) ? n = 'url("'.concat(t, '")') : null != h && (l = (0, a.jsx)("div", {
                            className: T.imageUploaderAcronym,
                            children: (0, o.getAcronym)(h)
                        })), C) return (0, a.jsx)("div", {
                        className: r(T.imageUploader, T.disabled, g),
                        children: (0, a.jsxs)("div", {
                            className: r(T.imageUploaderInner, A),
                            style: {
                                ...y,
                                backgroundImage: n
                            },
                            children: [l, p && (0, a.jsx)("div", {
                                className: r(T.imageUploaderIcon, T.imageUploaderIconDisabled, N),
                                children: M
                            })]
                        })
                    });
                    null != i ? s = (0, a.jsx)(u.Anchor, {
                        className: T.removeButton,
                        onClick: this.handleRemove,
                        children: _.default.Messages.REMOVE
                    }) : !S && (s = (0, a.jsx)("small", {
                        className: T.sizeInfo,
                        children: _.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let R = null !== (e = null != x ? x : d) && void 0 !== e ? e : _.default.Messages.CHANGE_AVATAR;
                    return (0, a.jsxs)("div", {
                        className: r(T.imageUploader, g),
                        children: [(0, a.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, a.jsxs)("div", {
                                className: L ? r(T.imageUploaderIconWrapper, v) : void 0,
                                children: [(0, a.jsxs)("div", {
                                    className: r(T.imageUploaderInner, A),
                                    style: {
                                        ...y,
                                        backgroundImage: n
                                    },
                                    children: [(0, a.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: l
                                    }), null != O ? (0, a.jsx)(u.Clickable, {
                                        className: T.imageUploaderFileInput,
                                        "aria-label": R,
                                        onClick: O
                                    }) : (0, a.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: m,
                                        className: T.imageUploaderFileInput,
                                        "aria-label": R,
                                        tabIndex: 0,
                                        maxFileSizeBytes: G,
                                        onFileSizeError: U
                                    })]
                                }), null != d && (0, a.jsx)("div", {
                                    className: T.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: d
                                }), L && (0, a.jsx)(f, {
                                    className: N,
                                    icon: M
                                })]
                            })
                        }), D ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            h.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var I = h
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                },
                PaymentPortalBody: function() {
                    return f
                },
                PaymentPortalFooter: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                d = n.n(i),
                u = n("817736"),
                o = n.n(u),
                c = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function T(e) {
                var t, n, s, i, u, o;
                let {
                    header: T,
                    isLargeModal: f,
                    stepProps: h
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...a
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: a
                    }
                }(e), {
                    step: I,
                    stepConfigs: C,
                    setBodyNode: m,
                    setFooterNode: L,
                    setModalOverlayNode: p,
                    setReadySlideId: g
                } = (0, E.usePaymentContext)(), A = C.find(e => e.key === I);
                l.useEffect(() => {
                    p(null)
                }, [I, p]), d(null != A, "Unknown step for current payment flow.");
                let N = null !== (u = null == A ? void 0 : null === (t = A.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    v = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.bodyClassName,
                    M = void 0 !== f && f ? _.sliderBodyLarge : null == A ? void 0 : null === (s = A.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, a.jsxs)(a.Fragment, {
                    children: [null === (o = null == A ? void 0 : null === (i = A.options) || void 0 === i ? void 0 : i.renderHeader) || void 0 === o || o ? T : null, A.renderStep(h), null == I || N ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.ModalContent, {
                            className: r(_.body, v),
                            children: (0, a.jsx)(c.Slides, {
                                activeSlide: I,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: C.filter(e => null != e.key).map(e => (0, a.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, a.jsx)("form", {
                                        className: r(_.sliderBody, M),
                                        ref: e => m(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, a.jsx)("div", {
                            ref: e => L(e)
                        }), (0, a.jsx)("div", {
                            ref: e => p(e)
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : o.createPortal(t, n)
            }

            function h(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : o.createPortal(t, n)
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(a.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(a.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return i.BotTagTypes
                },
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("79798"),
                i = n("988268"),
                d = n("888770"),
                u = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: l,
                        nameColor: i,
                        className: u,
                        botType: o,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: _,
                        botVerified: T = !1,
                        style: f,
                        useRemSizes: h = !1,
                        usernameIcon: I
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: s(u, d.nameTag),
                        style: f,
                        children: [(0, a.jsxs)("span", {
                            className: s(d.username, c),
                            style: null != i ? {
                                color: i
                            } : void 0,
                            children: [I, t]
                        }), null != n ? (0, a.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, a.jsx)(r.default, {
                            type: o,
                            invertColor: l,
                            className: s(_, d.bot),
                            verified: T,
                            useRemSizes: h
                        }) : null]
                    })
                }
        },
        683911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("77078"),
                i = n("258078"),
                d = n("549043");

            function u(e) {
                let {
                    steps: t,
                    stepIndex: n,
                    onClick: l
                } = e;
                return (0, a.jsx)("div", {
                    className: d.container,
                    children: t.map((e, t) => {
                        let u = n === t;
                        return (0, a.jsxs)(r.Clickable, {
                            onClick: () => l(t),
                            className: d.stepContainer,
                            children: [(0, a.jsx)("div", {
                                className: s(d.progressBar, {
                                    [d.selectedProgressBar]: u
                                })
                            }), (0, a.jsx)(i.default, {
                                color: u ? i.default.Colors.BRAND : i.default.Colors.MUTED,
                                size: i.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("384737"),
                i = n("448052"),
                d = n("748802"),
                u = n("260792"),
                o = n("77078"),
                c = n("75196"),
                E = n("4177");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                T = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: T = "currentColor",
                        transition: f = E.transition,
                        className: h,
                        foreground: I,
                        expanded: C,
                        ...m
                    } = e, {
                        enabled: L
                    } = (0, o.useRedesignIconContext)(), p = t;
                    if (!0 === C ? p = _.DOWN : !1 === C && (p = _.RIGHT), L) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: r.ChevronSmallDownIcon,
                            [_.LEFT]: i.ChevronSmallLeftIcon,
                            [_.RIGHT]: d.ChevronSmallRightIcon
                        } [p];
                        return (0, a.jsx)(e, {
                            ...m,
                            className: h,
                            width: n,
                            height: l,
                            color: T,
                            colorClass: I
                        })
                    }
                    return (0, a.jsx)("svg", {
                        className: s(h, f, p),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(m),
                        children: (0, a.jsx)("path", {
                            className: I,
                            fill: "none",
                            stroke: T,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            T.Directions = _;
            var f = T
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("504318"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: l = 24,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: l,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("469563"),
                r = n("163725"),
                i = n("75196"),
                d = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foregroundColor: r = l.default.unsafe_rawColors.RED_400.css,
                        foreground: d,
                        background: u,
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("rect", {
                            fill: r,
                            className: d,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, a.jsx)("path", {
                            fill: s,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, r.EyeSlashIcon)
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("851298"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: l
                        })]
                    })
                }, s.ImagePlusIcon)
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("304983"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: l,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("811513"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("876726"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, s.PlayIcon)
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("884691"),
                l = n("448993");

            function s(e, t) {
                let [n, s] = a.useState(!1), [r, i] = a.useState(null), d = async () => {
                    s(!0), i(null);
                    try {
                        let t = await e();
                        return s(!1), i(null), t
                    } catch (n) {
                        let e = new l.APIError(n);
                        return null == t || t(e), i(e), s(!1), null
                    }
                };
                return [d, {
                    loading: n,
                    error: r
                }]
            }
        }
    }
]);