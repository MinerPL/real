(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40770"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                a = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + a + "]*[" + r + "]"),
                l = RegExp("^[^" + r + "]*[" + a + "]")
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return q
                },
                match: function() {
                    return J
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                a = Symbol.for("@ts-pattern/isVariadic"),
                i = "@ts-pattern/anonymous-select-key",
                l = e => !!(e && "object" == typeof e),
                s = e => e && !!e[r],
                u = (e, t, n) => {
                    if (s(e)) {
                        let a = e[r](),
                            {
                                matched: i,
                                selections: l
                            } = a.match(t);
                        return i && l && Object.keys(l).forEach(e => n(e, l[e])), i
                    }
                    if (l(e)) {
                        if (!l(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                i = [],
                                l = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                s(n) && n[a] ? l.push(n) : l.length ? i.push(n) : r.push(n)
                            }
                            if (l.length) {
                                if (l.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + i.length) return !1;
                                let e = t.slice(0, r.length),
                                    a = 0 === i.length ? [] : t.slice(-i.length),
                                    s = t.slice(r.length, 0 === i.length ? 1 / 0 : -i.length);
                                return r.every((t, r) => u(t, e[r], n)) && i.every((e, t) => u(e, a[t], n)) && (0 === l.length || u(l[0], s, n))
                            }
                            return e.length === t.length && e.every((e, r) => u(e, t[r], n))
                        }
                        return Object.keys(e).every(a => {
                            let i = e[a];
                            return (a in t || s(i) && "optional" === i[r]().matcherType) && u(i, t[a], n)
                        })
                    }
                    return Object.is(t, e)
                },
                o = e => {
                    var t, n, a;
                    return l(e) ? s(e) ? null != (t = null == (n = (a = e[r]()).getSelectionKeys) ? void 0 : n.call(a)) ? t : [] : Array.isArray(e) ? d(e, o) : d(Object.values(e), o) : []
                },
                d = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function c(e) {
                return Object.assign(e, {
                    optional: () => f(e),
                    and: t => p(e, t),
                    or: t => g(e, t),
                    select: t => void 0 === t ? S(e) : S(t, e)
                })
            }

            function f(e) {
                return c({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (o(e).forEach(e => r(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(e),
                        matcherType: "optional"
                    })
                })
            }
            let h = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                m = (e, t) => {
                    for (let [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function p() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "and"
                    })
                })
            }

            function g() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return d(t, o).forEach(e => r(e, void 0)), {
                                matched: t.some(t => u(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "or"
                    })
                })
            }

            function E(e) {
                return {
                    [r]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function S() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let a = "string" == typeof t[0] ? t[0] : void 0,
                    l = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return c({
                    [r]: () => ({
                        match: e => {
                            let t = {
                                [null != a ? a : i]: e
                            };
                            return {
                                matched: void 0 === l || u(l, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != a ? a : i].concat(void 0 === l ? [] : o(l))
                    })
                })
            }

            function _(e) {
                return "number" == typeof e
            }

            function v(e) {
                return "string" == typeof e
            }

            function T(e) {
                return "bigint" == typeof e
            }
            let y = c(E(function(e) {
                    return !0
                })),
                I = e => Object.assign(c(e), {
                    startsWith: t => I(p(e, E(e => v(e) && e.startsWith(t)))),
                    endsWith: t => I(p(e, E(e => v(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return I(p(e, (n = t, E(e => v(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return I(p(e, (n = t, E(e => v(e) && e.length <= n))))
                    },
                    includes: t => I(p(e, E(e => v(e) && e.includes(t)))),
                    regex: t => I(p(e, E(e => v(e) && !!e.match(t))))
                }),
                C = I(E(v)),
                L = (e, t) => E(n => _(n) && e <= n && t >= n),
                R = e => E(t => _(t) && t < e),
                M = e => E(t => _(t) && t > e),
                A = e => E(t => _(t) && t <= e),
                b = e => E(t => _(t) && t >= e),
                N = () => E(e => _(e) && Number.isInteger(e)),
                O = () => E(e => _(e) && Number.isFinite(e)),
                x = () => E(e => _(e) && e > 0),
                U = () => E(e => _(e) && e < 0),
                D = e => Object.assign(c(e), {
                    between: (t, n) => D(p(e, L(t, n))),
                    lt: t => D(p(e, R(t))),
                    gt: t => D(p(e, M(t))),
                    lte: t => D(p(e, A(t))),
                    gte: t => D(p(e, b(t))),
                    int: () => D(p(e, N())),
                    finite: () => D(p(e, O())),
                    positive: () => D(p(e, x())),
                    negative: () => D(p(e, U()))
                }),
                F = D(E(_)),
                j = (e, t) => E(n => T(n) && e <= n && t >= n),
                P = e => E(t => T(t) && t < e),
                w = e => E(t => T(t) && t > e),
                B = e => E(t => T(t) && t <= e),
                G = e => E(t => T(t) && t >= e),
                H = () => E(e => T(e) && e > 0),
                k = () => E(e => T(e) && e < 0),
                K = e => Object.assign(c(e), {
                    between: (t, n) => K(p(e, j(t, n))),
                    lt: t => K(p(e, P(t))),
                    gt: t => K(p(e, w(t))),
                    lte: t => K(p(e, B(t))),
                    gte: t => K(p(e, G(t))),
                    positive: () => K(p(e, H())),
                    negative: () => K(p(e, k()))
                }),
                V = K(E(T)),
                W = c(E(function(e) {
                    return "boolean" == typeof e
                })),
                z = c(E(function(e) {
                    return "symbol" == typeof e
                })),
                Y = c(E(function(e) {
                    return null == e
                }));
            var q = {
                __proto__: null,
                matcher: r,
                optional: f,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [a]: !0
                                })
                            }
                        })), {
                            optional: () => e(f(t)),
                            select: n => e(void 0 === n ? S(t) : S(n, t))
                        })
                    }({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    r = {};
                                if (0 === e.length) return o(n).forEach(e => {
                                    r[e] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let a = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, a)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [r]: () => ({
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
                                let r = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    a = t[0];
                                return {
                                    matched: h(e, e => u(a, e, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [r]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let a = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [i, l] = t;
                                return {
                                    matched: m(e, (e, t) => {
                                        let n = u(i, t, a),
                                            r = u(l, e, a);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...o(t[0]), ...o(t[1])]
                        })
                    })
                },
                intersection: p,
                union: g,
                not: function(e) {
                    return c({
                        [r]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: E,
                select: S,
                any: y,
                _: y,
                string: C,
                between: L,
                lt: R,
                gt: M,
                lte: A,
                gte: b,
                int: N,
                finite: O,
                positive: x,
                negative: U,
                number: F,
                betweenBigInt: j,
                ltBigInt: P,
                gtBigInt: w,
                lteBigInt: B,
                gteBigInt: G,
                positiveBigInt: H,
                negativeBigInt: k,
                bigint: V,
                boolean: W,
                symbol: z,
                nullish: Y,
                instanceOf: function(e) {
                    var t;
                    return c(E((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return c(E(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => u(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return u(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let Z = {
                matched: !1,
                value: void 0
            };

            function J(e) {
                return new X(e, Z)
            }
            class X {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let a = n[n.length - 1],
                        l = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (l.push(n[0]), e = n[1]) : n.length > 2 && l.push(...n.slice(1, n.length - 1));
                    let s = !1,
                        o = {},
                        d = (e, t) => {
                            s = !0, o[e] = t
                        },
                        c = l.some(e => u(e, this.input, d)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: a(s ? i in o ? o[i] : o : this.input, this.input)
                        } : Z;
                    return new X(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new X(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : Z)
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
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("817736"),
                u = n.n(s),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                m = n("62843"),
                p = n("315102"),
                g = n("402671"),
                E = n("866190"),
                S = n("115279");
            class _ extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: r,
                            animated: a,
                            shouldAnimate: i,
                            isFocused: l,
                            isInteracting: s,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = S.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: l && !0 === a && (!0 === i || o || !0 === s),
                            size: e
                        })
                    }
                    if (null != r) return g.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: i,
                        className: s,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: m,
                        ...p
                    } = this.props, g = this.getSrc();
                    return null == g || "" === g ? (0, r.jsx)("span", {
                        className: l("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: g,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: l("emoji", s, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            _.defaultProps = {
                isInteracting: !1
            };
            let v = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    i = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let a = r[1];
                            if (e.intersectionRatio >= .7) {
                                var i, l;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function l(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function s(e) {
                    let r = u.findDOMNode(e);
                    i.unobserve(r);
                    let a = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? l(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: i,
                                ...l
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...l,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(_);

            function T(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, r.jsx)(v, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("446674"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: l,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: p,
                    showStreamerModeTooltip: g
                } = e;
                return (0, r.jsxs)("div", {
                    className: i(h.info, d),
                    children: [(0, r.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: g,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: i(h.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: i(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, r.jsx)(o.default, {
                        type: a,
                        className: i(h.infoSpacing, p),
                        verified: l
                    })]
                })
            };
            var g = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: i,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, g = (0, l.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = g || t || n.isNonUserBot(), S = n.toString(), _ = c.default.getName(n), v = i ? S : null != a ? a : _, T = n.isPomelo() || f;
                if (T || v !== S) {
                    let e = v === S && T && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : v,
                        t = s && e !== "@".concat(S) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: g && e !== _,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: v,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || v !== S ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return i
                }
            });
            var r = n("884691"),
                a = n("599110");
            let i = () => r.useContext(a.AnalyticsContext)
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("274870"),
                a = n("116320"),
                i = n("617559"),
                l = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                m = n("660074"),
                p = n("990745"),
                g = n("190986"),
                E = n("721618"),
                S = n("733160"),
                _ = n("990864"),
                v = n("274652"),
                T = n("922744"),
                y = n("155207"),
                I = n("745183"),
                C = n("368121"),
                L = n("944633"),
                R = n("228427"),
                M = n("959097"),
                A = n("656038"),
                b = n("49111");

            function N(e, t) {
                switch (e.type) {
                    case b.ChannelTypes.DM:
                        return a.default;
                    case b.ChannelTypes.GROUP_DM:
                        let n = (0, r.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : y.default;
                    case b.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return v.default;
                        if ((0, A.default)(e)) return _.default;
                        else return S.default;
                    case b.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return l.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, A.default)(e)) return u.default;
                        else return s.default;
                    case b.ChannelTypes.GUILD_FORUM:
                        let N = e.isMediaChannel();
                        if (e.isNSFW()) return N ? E.default : h.default;
                        if ((0, A.default)(e)) return N ? g.default : f.default;
                        else return N ? p.default : c.default;
                    case b.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return E.default;
                        if ((0, A.default)(e)) return g.default;
                        else return p.default;
                    case b.ChannelTypes.GUILD_STAGE_VOICE:
                        return R.default;
                    case b.ChannelTypes.GUILD_VOICE:
                        if ((0, A.default)(e)) return L.default;
                        return C.default;
                    case b.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case b.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return T.default;
                        if (e.isForumPost()) return m.default;
                        else return M.default;
                    case b.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return T.default;
                        return I.default;
                    case b.ChannelTypes.GUILD_DIRECTORY:
                        return i.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let a = r.createContext(void 0);
            var i = a
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return m
                },
                canGuildUseRoleIcons: function() {
                    return p
                }
            });
            var r = n("867805"),
                a = n("407063"),
                i = n("315102"),
                l = n("773336"),
                s = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, l.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let l = i.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(r, ".").concat(l, "?").concat(c).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, r), "?").concat(c)
                },
                m = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                p = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return h
                }
            });
            var r = n("693566"),
                a = n.n(r),
                i = n("872717"),
                l = n("913144"),
                s = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await i.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new a({
                maxAge: 1e4
            });

            function h(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == f.get(r)) {
                    var a, l;
                    return f.set(r, !0), a = e, l = t, i.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(a, l)
                    }).then(e => (s.default.requestMembersById(a, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                a = n("913144");
            let i = {},
                l = {};
            class s extends r.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? i[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = l[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var u = new s(a.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    i[t] = n, l[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: r
                    } = e, a = i[t];
                    if (null == a) return !1;
                    a[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: r
                    } = e, a = i[t];
                    if (null == a || null == a[n]) return !1;
                    let l = Object.keys(r).length;
                    a[n] += l
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = i[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = i[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == i[t] && (i[t] = {}), i[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete i[t.id], delete l[t.id]
                }
            })
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("65597"),
                i = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, a.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("65597"),
                i = n("526887"),
                l = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(i.ConfettiCannonContext), t = (0, a.default)([l.default], () => l.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = r.useMemo(() => ({
                    fire: (r, a, i) => {
                        var l, s;
                        let u = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            o = n(u);
                        e(r, a, o, (null !== (l = null == i ? void 0 : i.count) && void 0 !== l ? l : u.confettiCount) * (null !== (s = null == i ? void 0 : i.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == i ? void 0 : i.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return m
                },
                maybeFetchPremiumLikelihood: function() {
                    return g
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return E
                }
            });
            var r = n("884691"),
                a = n("65597"),
                i = n("872717"),
                l = n("913144"),
                s = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let m = "nonSubscriber";
            async function p() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [m]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function g(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = c.default.shouldFetchPremiumLikelihood(), a = u.default.getCurrentUser();
                S(a, r, t, n)
            }

            function E(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, a.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), l = (0, a.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    S(l, i, t, n)
                }, [l, i, t, n])
            }

            function S(e, t, n, r) {
                null != e && !(0, d.isPremium)(e) && n && (t && p(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                a = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = i;
            class s extends r.default.Store {
                initialize() {
                    l = i
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var u = new s(a.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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
            var i = a
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(r.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        707443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return _
                },
                useActiveThreads: function() {
                    return v
                },
                useActiveGuildThreads: function() {
                    return T
                },
                useArchivedThreads: function() {
                    return y
                }
            });
            var r = n("884691"),
                a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                m = n("821343"),
                p = n("755624"),
                g = n("263024"),
                E = n("487269"),
                S = n("843455");

            function _() {
                r.useEffect(() => {
                    (0, E.trackThreadBrowserTab)()
                }, [])
            }

            function v(e) {
                let t = function(e) {
                        let t = (0, l.useStateFromStoresArray)([o.default, h.default, u.default], () => i(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(S.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return r.useMemo(() => i(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, a] = (0, l.useStateFromStores)([p.default], () => i.partition(t, e => p.default.hasJoined(e)), [t], l.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: a
                }
            }

            function T(e) {
                let t = (0, l.useStateFromStoresArray)([o.default, h.default, u.default], () => i(h.default.getThreadsForGuild(e)).values().map(e => i.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(S.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return r.useMemo(() => i(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function y(e, t, n) {
                let {
                    canLoadMore: a,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, l.useStateFromStoresObject)([m.default], () => ({
                    loading: m.default.isLoading(e.id, t, n),
                    isInitialLoad: m.default.isInitialLoad,
                    canLoadMore: m.default.canLoadMore,
                    nextOffset: m.default.nextOffset
                })), h = r.useCallback(() => {
                    o.default.can(S.Permissions.READ_MESSAGE_HISTORY, e) && g.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                r.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), r.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let p = (0, l.useStateFromStoresArray)([m.default, u.default, o.default], () => i(m.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(S.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: p,
                    canLoadMore: a,
                    loading: d || f,
                    loadMore: h
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                u = n("707443"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, i = (0, u.useActiveGuildThreads)(t), c = a.useCallback(e => {
                    let t = i[e.row];
                    return (0, r.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [i, n]);
                return (0, r.jsx)(s.List, {
                    className: l(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [i.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("945330"),
                l = n("959097"),
                s = n("557872"),
                u = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("728360");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, r.jsx)(a.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: a.ModalSize.DYNAMIC,
                    children: (0, r.jsxs)("div", {
                        className: c.container,
                        children: [(0, r.jsxs)("div", {
                            className: c.header,
                            children: [(0, r.jsx)(l.default, {
                                className: c.threadIcon
                            }), (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, r.jsx)("div", {
                                className: c.spacer
                            }), (0, r.jsx)(a.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, r.jsx)(i.default, {})
                            })]
                        }), (0, r.jsx)(s.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("446674"),
                l = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                m = n("648564"),
                p = n("140407"),
                g = a.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: a,
                        showChannelName: o
                    } = e, d = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, r.jsxs)(l.Clickable, {
                        className: p.container,
                        onClick: e => a(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: p.left,
                            children: [(0, r.jsxs)(l.Heading, {
                                className: p.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, r.jsx)("span", {
                                    className: p.threadName,
                                    children: d.name
                                }), o && null != c ? (0, r.jsx)("span", {
                                    className: p.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, r.jsx)(E, {
                            channel: d
                        })]
                    })
                });

            function E(e) {
                var t, n;
                let {
                    channel: l
                } = e, s = (0, i.useStateFromStores)([f.default], () => null !== (t = f.default.getMemberIdsPreview(l.id)) && void 0 !== t ? t : []), u = (0, i.useStateFromStores)([f.default], () => null !== (n = f.default.getMemberCount(l.id)) && void 0 !== n ? n : 0), h = (0, i.useStateFromStoresArray)([d.default], () => s.map(e => d.default.getUser(e)));
                return (a.useEffect(() => {
                    s.filter((e, t) => null == h[t]).forEach(e => {
                        o.default.requestMember(l.guild_id, e)
                    })
                }, []), 0 === s.length) ? null : (0, r.jsx)(c.default, {
                    className: p.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: l.guild_id,
                    users: h,
                    count: u,
                    max: m.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("446674"),
                l = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                m = n("27618"),
                p = n("697218"),
                g = n("959097"),
                E = n("93427"),
                S = n("299039"),
                _ = n("158998"),
                v = n("610730"),
                T = n("487269"),
                y = n("719347"),
                I = n("782340"),
                C = n("140407");

            function L(e) {
                return e.isActiveThread() ? (0, r.jsx)(R, {
                    channel: e
                }) : (0, r.jsx)(b, {
                    channel: e
                })
            }

            function R(e) {
                let {
                    channel: t
                } = e, n = (0, i.useStateFromStores)([v.default], () => v.default.getMostRecentMessage(t.id));
                return null == n ? (0, r.jsx)(M, {
                    channel: t
                }) : (0, r.jsx)(A, {
                    channel: t,
                    message: n
                })
            }

            function M(e) {
                let {
                    channel: t
                } = e, n = (0, T.useLastMessageTimestamp)(t);
                return (0, r.jsxs)(l.Text, {
                    className: C.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [I.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, T.getTimestampString)(n)]
                })
            }

            function A(e) {
                var t;
                let {
                    channel: n,
                    message: o
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [n.guild_id]: [o.author.id]
                });
                let f = (0, i.useStateFromStores)([p.default], () => null !== (t = p.default.getUser(o.author.id)) && void 0 !== t ? t : o.author),
                    {
                        nick: h,
                        colorString: g
                    } = (0, c.default)(o),
                    _ = (0, i.useStateFromStores)([m.default], () => m.default.isBlocked(o.author.id)),
                    v = a.useMemo(() => {
                        let e = null != o.content && "" !== o.content ? (0, d.default)(o, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: n,
                                icon: a
                            } = (0, E.renderSingleLineMessage)(o, e, _, C.messageContent, {
                                iconClass: C.messageContentIcon,
                                iconSize: y.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, r.jsxs)(r.Fragment, {
                            children: [null != n ? n : (0, r.jsx)("span", {
                                children: t
                            }), a]
                        })
                    }, [o, _]);
                return (0, r.jsxs)(l.Text, {
                    className: C.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, r.jsx)(s.default, {
                        className: C.avatar,
                        user: f,
                        size: l.AvatarSizes.SIZE_16
                    }), (0, r.jsx)(l.NameWithRole, {
                        name: h,
                        color: g,
                        className: C.authorName
                    }), ":\xa0", v, "\xa0 • \xa0", (0, T.getTimestampString)(S.default.extractTimestamp(o.id))]
                })
            }

            function b(e) {
                var t, n, a;
                let {
                    channel: d
                } = e, c = (0, i.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), m = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : S.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let E = (0, i.useStateFromStores)([p.default], () => p.default.getUser(d.ownerId)),
                    v = (0, i.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    y = null !== (a = (0, o.default)(d)) && void 0 !== a ? a : g.default;
                return (0, r.jsx)(l.Text, {
                    className: C.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == E ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: C.noAvatarIcon,
                            children: (0, r.jsx)(y, {
                                width: 10,
                                height: 10
                            })
                        }), I.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, T.getTimestampString)(m)
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.default, {
                            className: C.avatar,
                            user: E,
                            size: l.AvatarSizes.SIZE_16
                        }), I.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, a;
                                return (0, r.jsx)(l.NameWithRole, {
                                    className: C.startedByName,
                                    color: null !== (n = null == v ? void 0 : v.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (a = null == v ? void 0 : v.nick) && void 0 !== a ? a : _.default.getName(E)
                                }, t)
                            }
                        }), (0, r.jsx)("span", {
                            className: C.bullet,
                            children: "•"
                        }), I.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, T.getTimestampString)(m)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return y
                },
                openThreadSidebarForCreating: function() {
                    return I
                },
                closeThreadSidebar: function() {
                    return C
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var r = n("627445"),
                a = n.n(r),
                i = n("917351"),
                l = n.n(i),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                m = n("845579"),
                p = n("474643"),
                g = n("18494"),
                E = n("800762"),
                S = n("659500"),
                _ = n("648564"),
                v = n("49111"),
                T = n("724210");

            function y(e, t, n) {
                o.MainWindowDispatch.dispatch(v.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(E.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let i = g.default.getChannelId();
                e.parent_id !== i && !(0, T.isGuildHomeChannel)(i) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(v.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, T.isGuildHomeChannel)(i) ? T.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? _.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    S.ComponentDispatch.dispatch(v.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function I(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(v.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(v.ComponentActions.POPOUT_CLOSE), g.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let r = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function C(e, t) {
                (0, f.transitionTo)(v.Routes.CHANNEL(e, (0, T.isGuildHomeChannel)(t) ? T.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
                })
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return s
                }
            });
            var r = n("281071"),
                a = n("773336"),
                i = n("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!l && (a.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("446674"),
                i = n("244201"),
                l = n("471671");

            function s() {
                let {
                    windowId: e
                } = r.useContext(i.default);
                return (0, a.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        }
    }
]);