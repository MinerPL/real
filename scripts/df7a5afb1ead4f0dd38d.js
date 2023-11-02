(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3897"], {
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
                    return K
                },
                match: function() {
                    return Z
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

            function E(e) {
                return Object.assign(e, {
                    optional: () => c(e),
                    and: t => f(e, t),
                    or: t => I(e, t),
                    select: t => void 0 === t ? m(e) : m(t, e)
                })
            }

            function c(e) {
                return E({
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
                return E({
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

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return E({
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

            function h(e) {
                return {
                    [a]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let l = "string" == typeof t[0] ? t[0] : void 0,
                    r = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return E({
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

            function A(e) {
                return "number" == typeof e
            }

            function L(e) {
                return "string" == typeof e
            }

            function p(e) {
                return "bigint" == typeof e
            }
            let C = E(h(function(e) {
                    return !0
                })),
                N = e => Object.assign(E(e), {
                    startsWith: t => N(f(e, h(e => L(e) && e.startsWith(t)))),
                    endsWith: t => N(f(e, h(e => L(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return N(f(e, (n = t, h(e => L(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return N(f(e, (n = t, h(e => L(e) && e.length <= n))))
                    },
                    includes: t => N(f(e, h(e => L(e) && e.includes(t)))),
                    regex: t => N(f(e, h(e => L(e) && !!e.match(t))))
                }),
                g = N(h(L)),
                S = (e, t) => h(n => A(n) && e <= n && t >= n),
                M = e => h(t => A(t) && t < e),
                D = e => h(t => A(t) && t > e),
                v = e => h(t => A(t) && t <= e),
                y = e => h(t => A(t) && t >= e),
                O = () => h(e => A(e) && Number.isInteger(e)),
                G = () => h(e => A(e) && Number.isFinite(e)),
                U = () => h(e => A(e) && e > 0),
                R = () => h(e => A(e) && e < 0),
                x = e => Object.assign(E(e), {
                    between: (t, n) => x(f(e, S(t, n))),
                    lt: t => x(f(e, M(t))),
                    gt: t => x(f(e, D(t))),
                    lte: t => x(f(e, v(t))),
                    gte: t => x(f(e, y(t))),
                    int: () => x(f(e, O())),
                    finite: () => x(f(e, G())),
                    positive: () => x(f(e, U())),
                    negative: () => x(f(e, R()))
                }),
                V = x(h(A)),
                j = (e, t) => h(n => p(n) && e <= n && t >= n),
                P = e => h(t => p(t) && t < e),
                b = e => h(t => p(t) && t > e),
                B = e => h(t => p(t) && t <= e),
                H = e => h(t => p(t) && t >= e),
                Y = () => h(e => p(e) && e > 0),
                F = () => h(e => p(e) && e < 0),
                k = e => Object.assign(E(e), {
                    between: (t, n) => k(f(e, j(t, n))),
                    lt: t => k(f(e, P(t))),
                    gt: t => k(f(e, b(t))),
                    lte: t => k(f(e, B(t))),
                    gte: t => k(f(e, H(t))),
                    positive: () => k(f(e, Y())),
                    negative: () => k(f(e, F()))
                }),
                w = k(h(p)),
                X = E(h(function(e) {
                    return "boolean" == typeof e
                })),
                z = E(h(function(e) {
                    return "symbol" == typeof e
                })),
                W = E(h(function(e) {
                    return null == e
                }));
            var K = {
                __proto__: null,
                matcher: a,
                optional: c,
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
                            optional: () => e(c(t)),
                            select: n => e(void 0 === n ? m(t) : m(n, t))
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
                    return E({
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
                    return E({
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
                union: I,
                not: function(e) {
                    return E({
                        [a]: () => ({
                            match: t => ({
                                matched: !d(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: h,
                select: m,
                any: C,
                _: C,
                string: g,
                between: S,
                lt: M,
                gt: D,
                lte: v,
                gte: y,
                int: O,
                finite: G,
                positive: U,
                negative: R,
                number: V,
                betweenBigInt: j,
                ltBigInt: P,
                gtBigInt: b,
                lteBigInt: B,
                gteBigInt: H,
                positiveBigInt: Y,
                negativeBigInt: F,
                bigint: w,
                boolean: X,
                symbol: z,
                nullish: W,
                instanceOf: function(e) {
                    var t;
                    return E(h((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return E(h(function() {
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
            let q = {
                matched: !1,
                value: void 0
            };

            function Z(e) {
                return new J(e, q)
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
                        E = r.some(e => d(e, this.input, o)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: l(i ? s in u ? u[s] : u : this.input, this.input)
                        } : q;
                    return new J(this.input, E)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new J(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : q)
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
                    return I
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
                E = n("158998"),
                c = n("782340"),
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
                    usernameClass: E,
                    color: T,
                    botClass: f,
                    showStreamerModeTooltip: I
                } = e;
                return (0, a.jsxs)("div", {
                    className: s(_.info, o),
                    children: [(0, a.jsx)(i.Tooltip, {
                        text: c.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: s(_.username, E),
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
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: l,
                    forceUsername: s,
                    showAccountIdentifier: i,
                    overrideDiscriminator: u,
                    forcePomelo: c,
                    ..._
                } = e, I = (0, r.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), h = I || t || n.isNonUserBot(), m = n.toString(), A = E.default.getName(n), L = s ? m : null != l ? l : A, p = n.isPomelo() || c;
                if (p || L !== m) {
                    let e = L === m && p && s ? E.default.getUserTag(n, {
                            forcePomelo: c
                        }) : L,
                        t = i && e !== "@".concat(m) ? E.default.getUserTag(n) : void 0;
                    return (0, a.jsx)(f, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: T(n),
                        showStreamerModeTooltip: I && e !== A,
                        ..._
                    })
                }
                return (0, a.jsx)(o.default, {
                    name: L,
                    botType: T(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: h || L !== m ? null : null != u ? u : n.discriminator,
                    ..._
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
                    return I
                }
            });
            var a, l, s, r, i, d, u, o, E = n("316693"),
                c = n("991170"),
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

            function I() {
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
                            permissions: c.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: E.default.combine(c.default.DEFAULT, _.Permissions.MANAGE_ROLES, _.Permissions.MANAGE_CHANNELS, _.Permissions.KICK_MEMBERS, _.Permissions.BAN_MEMBERS, _.Permissions.MANAGE_NICKNAMES, _.Permissions.MANAGE_GUILD_EXPRESSIONS, _.Permissions.MANAGE_MESSAGES, _.Permissions.SEND_TTS_MESSAGES),
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
                    return E
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

            function E(e, t, n) {
                let [E, c] = a.useState(o), [_, T] = a.useState(!1), f = a.useRef(!1), I = null == e ? void 0 : e.id, h = null == e ? void 0 : e.hasFeature(u.GuildFeatures.HAS_DIRECTORY_ENTRY);
                a.useEffect(() => {
                    if (!h) {
                        c(o);
                        return
                    }
                    if (f.current || null == I) return;
                    let e = async () => {
                        f.current = !0;
                        try {
                            let e = await (0, i.getDirectoryEntryBroadcastInfo)(I, d.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            c(e)
                        } catch (e) {
                            c(o)
                        }
                        f.current = !1
                    };
                    e()
                }, [I, h, t]), a.useEffect(() => {
                    var e;
                    if (!E.can_broadcast) {
                        T(!1);
                        return
                    }
                    T(null === (e = E.has_broadcast) || void 0 === e || e)
                }, [E]);
                let m = (0, l.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(n, [r.default]));
                return {
                    broadcastInfo: E,
                    broadcastToDirectoryChannels: m && _,
                    setBroadcastToDirectoryChannels: T,
                    canEveryoneRoleViewEvent: m
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
                        E = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        c = a.useMemo(() => null != t ? E.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : E, [E, t]),
                        _ = (0, l.useStateFromStores)([d.default], () => {
                            if (d.default.can(u.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of c) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [c, n, o]);
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
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            });
            var a = n("446674"),
                l = n("923510"),
                s = n("923959"),
                r = n("957255");

            function i(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, a.useStateFromStoresArray)([s.default, r.default], () => {
                    let e = s.default.getChannels(n)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                r = n("822516"),
                i = n("757767"),
                d = n("782340");

            function u(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: u
                } = e, o = l.useMemo(() => (0, r.recurrenceRuleToOption)(t, n), [n, t]), E = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(d.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: i.RecurrenceOptions.NONE,
                        label: d.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: i.RecurrenceOptions.WEEKLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: n
                        })
                    }, {
                        value: i.RecurrenceOptions.YEARLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(d.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: i.RecurrenceOptions.WEEKDAY_ONLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), c = e => e.toString();
                return (0, a.jsx)(s.FormItem, {
                    title: d.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, a.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: E,
                        select: u,
                        serialize: c,
                        isSelected: e => null != o && c(e) === c(o)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                r = n("77078"),
                i = n("812204"),
                d = n("685665"),
                u = n("381546"),
                o = n("351825"),
                E = n("651072"),
                c = n("822516"),
                _ = n("844808"),
                T = n("782340"),
                f = n("234865");

            function I(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: l,
                    onRecurrenceChange: I,
                    onTimeChange: h,
                    timeSelected: m = !0,
                    schedule: A,
                    recurrenceRule: L,
                    showEndDate: p = !1,
                    requireEndDate: C = !1,
                    disableStartDateTime: N = !1
                } = e, {
                    analyticsLocations: g
                } = (0, d.default)(i.default.EVENT_SETTINGS), {
                    enabled: S
                } = E.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: g[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == A) return null;
                let M = null,
                    D = A.startDate,
                    v = s(),
                    y = s().add(c.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    O = s().add(c.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    G = e => {
                        l({
                            ...A,
                            endDate: e
                        })
                    };
                return null != D && E.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: g[0]
                }), p && (M = null != A.endDate || C ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: C,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.endDate,
                                onSelect: G,
                                minDate: A.startDate,
                                maxDate: O
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: C,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.endDate,
                                onChange: G
                            })
                        })]
                    }), C ? null : (0, a.jsx)(r.Button, {
                        onClick: () => {
                            G(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: f.link,
                            children: [(0, a.jsx)(u.default, {
                                width: 17,
                                height: 17,
                                className: f.removeIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        G(s(A.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: f.link,
                        children: [(0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: f.addIcon
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: T.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.startDate,
                                onSelect: e => {
                                    l({
                                        ...A,
                                        startDate: e
                                    })
                                },
                                minDate: v,
                                maxDate: y,
                                disabled: N
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.startDate,
                                onChange: e => {
                                    e.isValid() && (null == h || h(!0), l({
                                        ...A,
                                        startDate: e
                                    }))
                                },
                                hideValue: !m,
                                disabled: N
                            })
                        })]
                    }), M, S && null != D && null != I && (0, a.jsx)(_.default, {
                        onRecurrenceChange: I,
                        startDate: D,
                        recurrenceRule: L
                    })]
                })
            }
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
                E = n("694187"),
                c = n("151642"),
                _ = n("29846"),
                T = n("777367"),
                f = n("398604"),
                I = n("189443"),
                h = n("822516"),
                m = n("93550"),
                A = n("953143"),
                L = n("745049"),
                p = n("75015"),
                C = n("837979"),
                N = n("782340"),
                g = n("505376");

            function S(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: n,
                    broadcastToDirectoryChannels: l,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return n.can_broadcast ? (0, a.jsxs)(u.FormItem, {
                    title: N.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: g.formItem,
                    children: [(0, a.jsx)(u.Tooltip, {
                        text: (0, a.jsx)(u.Text, {
                            className: g.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
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
                                    children: N.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, a.jsx)(u.Text, {
                        className: g.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: N.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function M(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: i,
                    editBroadcastInfoData: M,
                    error: D,
                    validationErrorMessage: v,
                    onChange: y,
                    canSetFocus: O = !1
                } = e, {
                    entityType: G,
                    channelId: U,
                    description: R,
                    name: x,
                    image: V,
                    scheduledEndTime: j,
                    scheduledStartTime: P,
                    autoStart: b,
                    recurrenceRule: B
                } = t, {
                    canUseEventsAutoStartToggle: H
                } = T.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != i ? i : ""
                }), Y = (0, c.useStageBlockedUsersCount)(U), F = null != t && (0, f.isGuildScheduledEventActive)(t), k = l.useMemo(() => {
                    let e = (0, h.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: d(P)
                    }
                }, [t, P]), w = l.useRef(null);
                l.useEffect(() => {
                    if (O) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [O]);
                let X = e => {
                        y({
                            image: e
                        })
                    },
                    z = (e, t) => {
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
                        className: g.blockedUsersContainer,
                        children: null != U && !F && Y > 0 && (0, a.jsx)(_.BlockedUsersNotice, {
                            channelId: U
                        })
                    }), (0, a.jsxs)("div", {
                        className: g.form,
                        children: [(0, a.jsxs)(u.FormItem, {
                            title: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: g.topicFormItem,
                            required: !0,
                            children: [(0, a.jsx)(u.TextInput, {
                                className: g.textInput,
                                onChange: e => {
                                    y({
                                        name: e
                                    })
                                },
                                placeholder: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: C.MAX_STAGE_TOPIC_LENGTH,
                                value: x,
                                autoComplete: "off",
                                inputRef: w
                            }), null != D ? (0, a.jsx)(u.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: g.warning,
                                children: D.getAnyErrorMessage()
                            }) : null]
                        }), (0, a.jsx)(A.default, {
                            className: g.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: n
                                } = e, a = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                                null != t && null != j && (null == n ? void 0 : n.isBefore(t)) && (a.scheduledEndTime = t.add(1, "hour").toISOString()), y(a)
                            },
                            onRecurrenceChange: e => {
                                let t = k.startDate;
                                if (null == t) return;
                                let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
                                y({
                                    recurrenceRule: n
                                })
                            },
                            schedule: k,
                            recurrenceRule: B,
                            showEndDate: G === L.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: G === L.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: F,
                            guildId: i
                        }), null != v ? (0, a.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: g.warning,
                            children: v
                        }) : null, H ? (0, a.jsx)(u.FormItem, {
                            className: r(g.formItem, g.autoStartToggle),
                            children: (0, a.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: b,
                                onChange: (e, t) => {
                                    y({
                                        autoStart: t
                                    })
                                },
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, a.jsx)(u.FormItem, {
                            title: N.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: g.formItem,
                            children: (0, a.jsx)(u.TextArea, {
                                className: g.descriptionInput,
                                placeholder: N.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: R,
                                onChange: e => {
                                    y({
                                        description: e
                                    })
                                },
                                maxLength: L.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, a.jsxs)(u.FormItem, {
                            title: N.default.Messages.GUILD_EVENT_IMAGE,
                            className: g.formItem,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: g.addImageHint,
                                children: N.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != V ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.default, {
                                    className: g.imagePreview,
                                    iconWrapperClassName: g.imagePreviewInner,
                                    image: V,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var n;
                                            return null !== (n = (0, m.default)((0, I.convertToFakeGuildEvent)(t, i, s))) && void 0 !== n ? n : null
                                        }
                                    },
                                    onChange: z,
                                    hint: N.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, a.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    onClick: () => X(null),
                                    children: N.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, a.jsxs)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                children: [N.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, a.jsx)(E.default, {
                                    onChange: z
                                })]
                            })]
                        }), (0, a.jsx)(S, {
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
                    return B
                }
            });
            var a, l, s = n("37983"),
                r = n("884691"),
                i = n("446674"),
                d = n("77078"),
                u = n("970728"),
                o = n("206230"),
                E = n("526887"),
                c = n("960757"),
                _ = n("923959"),
                T = n("305961"),
                f = n("683911"),
                I = n("476765"),
                h = n("354023"),
                m = n("686904"),
                A = n("398604"),
                L = n("322224"),
                p = n("152475"),
                C = n("799547"),
                N = n("189443"),
                g = n("841363"),
                S = n("558286"),
                M = n("560309"),
                D = n("151859"),
                v = n("299342"),
                y = n("499950"),
                O = n("27754"),
                G = n("745049"),
                U = n("49111"),
                R = n("782340"),
                x = n("738021");
            let {
                INVITE_OPTIONS_7_DAYS: V,
                INVITE_OPTIONS_UNLIMITED: j
            } = h.default;

            function P(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: n
                } = r.useContext(E.ConfettiCannonContext);
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

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    guildEventId: a,
                    editBroadcastInfoData: u,
                    isEdit: E,
                    formErrors: c,
                    transitionState: _,
                    loading: T,
                    error: h,
                    onChange: m,
                    onSave: L,
                    onClose: p,
                    createdEvent: C
                } = e, N = (0, I.useUID)(), g = r.useMemo(() => [{
                    slideId: l.ENTITY,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == c.entity,
                    userErrorMessage: c.entity
                }, {
                    slideId: l.SETTINGS,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == c.schedule && null == c.topic,
                    userErrorMessage: c.schedule
                }, {
                    slideId: l.PREVIEW,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [c]), O = Object.keys(l).length, G = (0, A.isGuildScheduledEventActive)(n), U = G ? l.SETTINGS : l.ENTITY, V = e => Math.max(0, Math.min(e, O - 1)), [j, b] = r.useState(U), [B, H] = r.useState(!1), Y = r.useMemo(() => g.slice(0, j + 1).map(e => e.valid).every(Boolean), [g, j]), F = j >= g.length ? l.SUCCESS : g[V(j)].slideId, k = F === l.SUCCESS, w = (0, S.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                w(k);
                let X = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion),
                    z = r.useRef(null),
                    W = e => {
                        H(!1), b(V(e))
                    };
                r.useEffect(() => {
                    null != C && W(l.SUCCESS)
                }, [null == C ? void 0 : C.id, W]);
                let K = () => {
                        if (!Y) return;
                        let e = F === l.PREVIEW;
                        e ? L() : k ? p() : W(j + 1)
                    },
                    q = () => {
                        W(j - 1)
                    },
                    Z = R.default.Messages.NEXT;
                return F === l.PREVIEW && (Z = E ? R.default.Messages.SAVE_EVENT : R.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": N,
                        size: d.ModalSize.DYNAMIC,
                        children: [!X && k ? (0, s.jsx)(P, {
                            modal: z.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: x.content,
                            scrollerRef: z,
                            children: [!k && (0, s.jsx)(f.default, {
                                steps: g.map(e => e.label),
                                stepIndex: j,
                                onClick: e => {
                                    e < j ? q() : e > j && K()
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
                                        validationErrorMessage: c.entity,
                                        isSlideReady: B,
                                        onChange: m
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SETTINGS,
                                    children: (0, s.jsx)(v.default, {
                                        guildEvent: n,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: u,
                                        onChange: m,
                                        error: h,
                                        validationErrorMessage: c.schedule,
                                        isSlideReady: B
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.PREVIEW,
                                    children: (0, s.jsx)(D.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: a,
                                        error: h
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SUCCESS,
                                    children: (0, s.jsx)(y.default, {
                                        onClose: p,
                                        event: C
                                    })
                                })]
                            })]
                        }), !k && (0, s.jsxs)(d.ModalFooter, {
                            className: x.footer,
                            children: [(0, s.jsxs)("div", {
                                className: x.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: p,
                                    children: R.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: K,
                                    disabled: !Y,
                                    className: x.button,
                                    submitting: T,
                                    children: Z
                                })]
                            }), F !== l.ENTITY && (0, s.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: q,
                                color: d.Button.Colors.LINK,
                                children: R.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: a,
                    transitionState: l,
                    onClose: o
                } = e, E = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(t)), f = (0, i.useStateFromStores)([A.default], () => A.default.getGuildScheduledEvent(a), [a]), I = (0, i.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), h = (0, N.getInitialGuildEventData)(E, f, I), [S, M] = r.useState(h), [D] = r.useState((0, N.isEditingEvent)(f)), [v, y] = r.useState(null), x = e => {
                    var t;
                    let n = (0, p.isGuildEventInvitable)(e),
                        a = null !== (t = e.channel_id) && void 0 !== t ? t : null == I ? void 0 : I.id;
                    null != a && u.default.createInvite(a, {
                        max_age: V.value,
                        max_uses: j.value
                    }, U.InstantInviteSources.GUILD_EVENTS), n ? y(e) : o()
                }, P = (0, c.default)(E, null == f ? void 0 : f.id, S), [B, {
                    loading: H,
                    error: Y
                }] = (0, m.default)(async () => {
                    if (null != v) return;
                    let e = {
                        broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
                    };
                    if (D && null != a) return await L.default.saveEvent(a, S, t, e), o();
                    let n = await L.default.createGuildEvent(S, t, e);
                    return x(n.body), n
                }), F = r.useMemo(() => (0, O.default)(S, D), [S, D]);
                return (0, s.jsx)(b, {
                    guildId: t,
                    guildEvent: S,
                    guildEventId: a,
                    editBroadcastInfoData: P,
                    isEdit: D,
                    formErrors: F,
                    transitionState: l,
                    loading: H,
                    error: Y,
                    onChange: e => {
                        if (null != e.entityType) {
                            var n;
                            let a = (0, g.getChannelTypeFromEntity)(e.entityType),
                                [l] = (0, C.getEventChannelsByType)(t, a);
                            e.channelId = null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null, e.entityType !== G.GuildScheduledEventEntityTypes.EXTERNAL && S.entityType === G.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        M(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        null != S.recurrenceRule && D ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await n.el("77078").then(n.bind(n, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: R.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: R.default.Messages.SAVE_EVENT,
                                cancelText: R.default.Messages.NEVERMIND,
                                onConfirm: B,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: R.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: R.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : B()
                    },
                    onClose: o,
                    createdEvent: v
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
                E = n("305961"),
                c = n("957255"),
                _ = n("27618"),
                T = n("697218"),
                f = n("718550"),
                I = n("368121"),
                h = n("944633"),
                m = n("228427"),
                A = n("697468"),
                L = n("398604"),
                p = n("334683"),
                C = n("799547"),
                N = n("776863"),
                g = n("613767"),
                S = n("841363"),
                M = n("306939"),
                D = n("745049"),
                v = n("49111"),
                y = n("782340"),
                O = n("869785");
            let G = e => e === D.GuildScheduledEventEntityTypes.EXTERNAL,
                U = (e, t) => {
                    let n = o.default.getChannel(e);
                    if (null == n) return null;
                    let l = n.type === v.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, g.isChannelPublic)(n, t),
                        r = s ? I.default : h.default,
                        i = s ? m.default : A.default,
                        d = l ? i : r;
                    return (0, a.jsx)(d, {
                        height: 24,
                        className: O.channelOptionIcon
                    })
                },
                R = e => {
                    let {
                        guildId: t,
                        channelType: n,
                        channel: l,
                        onSelectChannel: s,
                        disabled: r,
                        entityType: i
                    } = e, o = n === v.ChannelTypes.GUILD_STAGE_VOICE, E = (0, g.isChannelPublic)(l, i), c = (0, C.useGetEventChannelsByType)(t, n);
                    return (0, a.jsxs)(d.FormItem, {
                        title: o ? y.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : y.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: O.options,
                        disabled: r,
                        required: !0,
                        children: [(0, a.jsx)(d.SearchableSelect, {
                            value: null == l ? void 0 : l.id,
                            options: c.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, T.default, _.default, !0)
                            })),
                            onChange: e => {
                                let t = c.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => U(null == e ? void 0 : e.value, i),
                            isDisabled: r
                        }), !E && (0, a.jsx)(d.Text, {
                            color: "header-secondary",
                            className: O.channelPrivate,
                            variant: "text-sm/normal",
                            children: y.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function x(e, t, n, a) {
                return t ? {
                    disabled: !0,
                    tooltipText: y.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : n ? 0 === a && e !== D.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: y.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: y.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let V = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                j = e => t => {
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
                    if (G(a)) {
                        var s;
                        let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
                        l.scheduledEndTime = e.toISOString()
                    }
                    e(l)
                };

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s,
                    isFocusReady: r
                } = e, {
                    entityType: u,
                    channelId: E
                } = n, c = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(E), [E]), _ = l.useRef(null);
                l.useEffect(() => {
                    if (r && G(u)) {
                        var e;
                        null === (e = _.current) || void 0 === e || e.focus()
                    }
                }, [r, u]);
                let T = V(s),
                    f = j(s),
                    I = (0, S.getLocationFromEventData)(n),
                    h = (0, S.getChannelTypeFromEntity)(u),
                    m = (0, L.isGuildScheduledEventActive)(n);
                return null == u || u === D.GuildScheduledEventEntityTypes.NONE ? null : G(u) ? (0, a.jsx)(d.FormItem, {
                    title: y.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: O.options,
                    required: !0,
                    children: (0, a.jsx)(d.TextInput, {
                        className: O.textInput,
                        onChange: T,
                        placeholder: y.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: D.MAX_EVENT_LOCATION_LENGTH,
                        value: null != I ? I : "",
                        inputRef: _
                    })
                }) : null == h ? null : (0, a.jsx)(R, {
                    guildId: t,
                    channelType: h,
                    onSelectChannel: f,
                    channel: c,
                    entityType: u,
                    disabled: m
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s
                } = e, r = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), u = (0, p.default)(t, void 0), o = (0, p.default)(t, v.ChannelTypes.GUILD_VOICE), c = (0, p.default)(t, v.ChannelTypes.GUILD_STAGE_VOICE), _ = (0, C.useGetEventChannelsByType)(t, v.ChannelTypes.GUILD_VOICE), T = (0, N.useChannelsUserCanStartStageIn)(r), h = null == r ? void 0 : r.hasFeature(v.GuildFeatures.COMMUNITY), A = (0, L.isGuildScheduledEventActive)(n), g = P(s, n), S = l.useMemo(() => {
                    let e = [{
                        name: y.default.Messages.VOICE_CHANNEL,
                        value: D.GuildScheduledEventEntityTypes.VOICE,
                        desc: y.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: I.default,
                        ...x(D.GuildScheduledEventEntityTypes.VOICE, A, o, _.length)
                    }, {
                        name: y.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: D.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: y.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: f.default,
                        ...x(D.GuildScheduledEventEntityTypes.EXTERNAL, A, u, 0)
                    }];
                    return h ? [{
                        name: y.default.Messages.STAGE_CHANNEL,
                        value: D.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: y.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: m.default,
                        ...x(D.GuildScheduledEventEntityTypes.STAGE_INSTANCE, A, c, T.length)
                    }, ...e] : e
                }, [u, o, c, h, _.length, T.length, A]);
                return (0, a.jsx)(d.RadioGroup, {
                    value: n.entityType,
                    options: S,
                    onChange: g,
                    className: O.options
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
                } = l, _ = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), T = (0, N.useChannelsUserCanStartStageIn)(_), f = (0, i.useStateFromStores)([c.default], () => c.default.can(v.Permissions.MANAGE_CHANNELS, _)), I = null == _ ? void 0 : _.hasFeature(v.GuildFeatures.COMMUNITY), h = P(r, l), m = I && !G(o) && 0 === T.length && f && null != o;
                return (0, a.jsxs)("div", {
                    className: O.container,
                    children: [(0, a.jsx)(d.Heading, {
                        variant: "heading-xl/semibold",
                        className: O.header,
                        children: y.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, a.jsx)(d.Text, {
                        color: "header-secondary",
                        className: O.text,
                        variant: "text-sm/normal",
                        children: y.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, a.jsx)(B, {
                        guildId: t,
                        guildEvent: l,
                        onChange: r
                    }), (0, a.jsx)(b, {
                        guildId: t,
                        guildEvent: l,
                        isFocusReady: u,
                        onChange: r
                    }), m ? (0, a.jsx)(M.default, {
                        onClick: () => {
                            h({
                                value: D.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: y.default.Messages.STAGE_CHANNEL
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("581354").then(n.bind(n, "581354"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    channelType: v.ChannelTypes.GUILD_STAGE_VOICE,
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
                E = n("697218"),
                c = n("718550"),
                _ = n("189443"),
                T = n("841363"),
                f = n("93550"),
                I = n("617347"),
                h = n("745049"),
                m = n("782340"),
                A = n("151990");

            function L(e) {
                var t, n, L, p;
                let {
                    guildId: C,
                    guildEvent: N,
                    guildEventId: g,
                    error: S
                } = e, M = l.useMemo(() => (0, _.convertToFakeGuildEvent)(N, C), [N, C]), {
                    channel_id: D,
                    name: v,
                    image: y,
                    description: O
                } = M, G = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(D), [D]), U = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(C), [C]), R = (0, T.getLocationFromEvent)(M), x = (0, s.useStateFromStores)([E.default], () => null != N.creatorId ? E.default.getUser(N.creatorId) : E.default.getCurrentUser(), [N.creatorId]), V = (0, s.useStateFromStores)([d.default], () => d.default.isLurking(C), [C]), j = (0, i.getChannelIconComponent)(G, U);
                return (0, a.jsxs)("div", {
                    className: A.content,
                    children: [(0, a.jsx)(I.default, {
                        className: A.previewCard,
                        guild: U,
                        channel: G,
                        location: null != R ? R : void 0,
                        creator: x,
                        name: v,
                        description: O,
                        imageSource: (L = (0, _.convertToFakeGuildEvent)(N, C, g), null == (p = y) && null == L.image ? null : null != p && /^data:/.test(p) ? p : (0, f.default)(L)),
                        isActive: !1,
                        isUserLurking: V,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: h.FAKE_EVENT_ID,
                        eventPreview: M
                    }), (0, a.jsxs)("div", {
                        className: A.textContainer,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, a.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: A.subheader,
                            children: null != location ? m.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : m.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (n = null == G ? void 0 : G.name) && void 0 !== n ? n : "",
                                channelHook: () => (0, a.jsxs)("div", {
                                    className: A.channelName,
                                    children: [null != j ? (0, a.jsx)(j, {
                                        width: 20,
                                        height: 20,
                                        className: A.icon
                                    }) : (0, a.jsx)(c.default, {
                                        height: 18,
                                        width: 18,
                                        className: A.locationIcon
                                    }), null !== (t = null == G ? void 0 : G.name) && void 0 !== t ? t : R]
                                })
                            })
                        }), null != S && (0, a.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: A.subheader,
                            children: S.getAnyErrorMessage()
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
                    return S
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
                E = n("923959"),
                c = n("305961"),
                _ = n("330154"),
                T = n("943232"),
                f = n("945330"),
                I = n("599110"),
                h = n("306160"),
                m = n("354023"),
                A = n("841363"),
                L = n("49111"),
                p = n("782340"),
                C = n("131439");
            let {
                INVITE_OPTIONS_7_DAYS: N,
                INVITE_OPTIONS_UNLIMITED: g
            } = m.default;

            function S(e) {
                var t, n, S;
                let {
                    onClose: M,
                    event: D
                } = e, v = null == D ? void 0 : D.guild_id, y = (0, l.useStateFromStores)([E.default], () => {
                    var e;
                    return null != v ? null === (e = E.default.getDefaultChannel(v)) || void 0 === e ? void 0 : e.id : null
                }, [v]), O = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(v), [v]), G = (null == O ? void 0 : O.vanityURLCode) != null && (null == O ? void 0 : O.vanityURLCode.length) > 0, {
                    enabled: U
                } = i.default.useExperiment({
                    guildId: null != v ? v : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: G
                }), {
                    channel_id: R,
                    id: x
                } = null != D ? D : {}, V = (0, l.useStateFromStores)([_.default], () => {
                    let e = null != R ? R : y;
                    return null == e ? null : _.default.getInvite(e)
                }, [R, y]);
                if (null == D) return M(), null;
                let j = U && null !== (t = null == O ? void 0 : O.vanityURLCode) && void 0 !== t ? t : null == V ? void 0 : V.code,
                    P = null != j ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: j,
                        guildScheduledEventId: x
                    }) : null,
                    b = null == P || null == V,
                    B = (0, d.default)(null != P ? P : ""),
                    H = null !== (n = null == V ? void 0 : V.maxAge) && void 0 !== n ? n : N.value,
                    Y = null !== (S = null == V ? void 0 : V.maxUses) && void 0 !== S ? S : g.value;
                return (0, a.jsxs)("div", {
                    className: C.container,
                    children: [(0, a.jsx)(s.Clickable, {
                        onClick: M,
                        className: C.close,
                        "aria-label": p.default.Messages.CLOSE,
                        children: (0, a.jsx)(f.default, {})
                    }), (0, a.jsx)(o.default, {
                        children: (0, a.jsx)("div", {
                            className: C.iconContainer,
                            children: (0, a.jsx)(T.default, {
                                height: 30,
                                width: 30,
                                className: C.icon
                            })
                        })
                    }), (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: C.header,
                        children: p.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: C.body,
                        children: p.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, a.jsxs)("div", {
                        className: C.invite,
                        children: [(0, a.jsx)(u.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (b) return;
                                (0, h.copy)(e);
                                let t = (0, A.getChannelTypeFromEntity)(D.entity_type);
                                I.default.track(L.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: D.guild_id,
                                    channel: R,
                                    channel_type: t,
                                    location: L.InstantInviteSources.GUILD_EVENTS,
                                    code: V.code,
                                    guild_scheduled_event_id: null == D ? void 0 : D.id
                                })
                            }
                        }), (null == O ? void 0 : O.vanityURLCode) == null && (0, a.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: C.inviteDetail,
                            children: (0, m.maxAgeString)(H, Y)
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
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
            let E = () => (0, a.jsxs)(a.Fragment, {
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

            function c(e) {
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
                                    suggestionsHook: E
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
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return d
                }
            });
            var a = n("913144"),
                l = n("599110"),
                s = n("49111");

            function r(e) {
                l.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), a.default.wait(() => {
                    a.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("197881"),
                r = n("492397");
            let i = new Set,
                d = {};
            class u extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && d[e];
                    return !(r.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return d[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: d
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new u(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    d[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == d[t]) return !1;
                    delete d[t]
                }
            })
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
        656913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("819855"),
                i = n("841098"),
                d = n("449918"),
                u = n("832132"),
                o = n("818643"),
                E = n("608684"),
                c = n("49111"),
                _ = n("575282");
            let T = c.Color.PRIMARY_400,
                f = c.Color.PRIMARY_500;

            function I(e) {
                let {
                    enabled: t,
                    imageClassName: n,
                    iconWrapperClassName: l,
                    ...c
                } = e, I = (0, i.default)(), h = (0, r.isThemeDark)(I) ? T : f, m = {
                    height: 18,
                    width: 18,
                    color: (0, d.getColor)(h)
                };
                return (0, a.jsx)(E.default, {
                    className: s({
                        [_.avatarUploader]: t,
                        [_.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(n, _.avatarUploaderInnerSquare, {
                        [_.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != c.image && "" !== c.image ? (0, a.jsx)(u.default, {
                        ...m
                    }) : (0, a.jsx)(o.default, {
                        ...m
                    }),
                    iconClassName: s(_.avatarUploadIcon, _.hideDefaultIcon),
                    iconWrapperClassName: l,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...c
                })
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return f
                },
                default: function() {
                    return h
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
                E = n("694187"),
                c = n("49111"),
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
            class I extends l.PureComponent {
                handleExternalFileChange(e) {
                    d(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, l, s;
                    let {
                        image: i,
                        hint: d,
                        name: I,
                        makeURL: h,
                        disabled: m,
                        onChange: A,
                        showIcon: L,
                        showIconDisabled: p,
                        className: C,
                        imageClassName: N,
                        iconClassName: g,
                        iconWrapperClassName: S,
                        icon: M,
                        hideSize: D,
                        imageStyle: v,
                        showRemoveButton: y,
                        maxFileSizeBytes: O,
                        onFileSizeError: G,
                        onOpenImageSelectModal: U,
                        "aria-label": R
                    } = this.props;
                    if (null != (t = null != i && /^data:/.test(i) ? i : h(i)) ? n = 'url("'.concat(t, '")') : null != I && (l = (0, a.jsx)("div", {
                            className: T.imageUploaderAcronym,
                            children: (0, o.getAcronym)(I)
                        })), m) return (0, a.jsx)("div", {
                        className: r(T.imageUploader, T.disabled, C),
                        children: (0, a.jsxs)("div", {
                            className: r(T.imageUploaderInner, N),
                            style: {
                                ...v,
                                backgroundImage: n
                            },
                            children: [l, p && (0, a.jsx)("div", {
                                className: r(T.imageUploaderIcon, T.imageUploaderIconDisabled, g),
                                children: M
                            })]
                        })
                    });
                    null != i ? s = (0, a.jsx)(u.Anchor, {
                        className: T.removeButton,
                        onClick: this.handleRemove,
                        children: _.default.Messages.REMOVE
                    }) : !D && (s = (0, a.jsx)("small", {
                        className: T.sizeInfo,
                        children: _.default.Messages.MINIMUM_SIZE.format({
                            size: c.AVATAR_SIZE
                        })
                    }));
                    let x = null !== (e = null != R ? R : d) && void 0 !== e ? e : _.default.Messages.CHANGE_AVATAR;
                    return (0, a.jsxs)("div", {
                        className: r(T.imageUploader, C),
                        children: [(0, a.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, a.jsxs)("div", {
                                className: L ? r(T.imageUploaderIconWrapper, S) : void 0,
                                children: [(0, a.jsxs)("div", {
                                    className: r(T.imageUploaderInner, N),
                                    style: {
                                        ...v,
                                        backgroundImage: n
                                    },
                                    children: [(0, a.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: l
                                    }), null != U ? (0, a.jsx)(u.Clickable, {
                                        className: T.imageUploaderFileInput,
                                        "aria-label": x,
                                        onClick: U
                                    }) : (0, a.jsx)(E.default, {
                                        ref: this.inputRef,
                                        onChange: A,
                                        className: T.imageUploaderFileInput,
                                        "aria-label": x,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: G
                                    })]
                                }), null != d && (0, a.jsx)("div", {
                                    className: T.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: d
                                }), L && (0, a.jsx)(f, {
                                    className: g,
                                    icon: M
                                })]
                            })
                        }), y ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            I.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var h = I
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
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return h
                },
                BlockedUser: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("669491"),
                r = n("77078"),
                i = n("272030"),
                d = n("328275"),
                u = n("849467"),
                o = n("258078"),
                E = n("823050"),
                c = n("158998"),
                _ = n("325861"),
                T = n("151642"),
                f = n("782340"),
                I = n("960236");
            let h = e => {
                    let {
                        channelId: t
                    } = e, n = (0, T.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, a.jsxs)("div", {
                        className: I.blockedNotice,
                        children: [(0, a.jsx)(d.default, {
                            className: I.blockedIcon,
                            color: s.default.unsafe_rawColors.RED_400.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: f.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, a.jsx)(r.Clickable, {
                            className: I.blockedButton,
                            onClick: e => {
                                (0, i.openContextMenu)(e, e => (0, a.jsx)(A, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: f.default.Messages.VIEW_ALL
                        })]
                    })
                },
                m = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: s,
                        channelId: i
                    } = e, d = (0, l.useStateFromStores)([_.default], () => _.default.isModerator(t.id, i)), T = null;
                    return n && (T = s ? f.default.Messages.STAGE_SPEAKER : d ? f.default.Messages.STAGE_MODERATOR_TOOLTIP : f.default.Messages.STAGE_AUDIENCE), (0, a.jsxs)("div", {
                        className: I.user,
                        children: [(0, a.jsx)(E.default, {
                            src: t.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s ? () => (0, a.jsx)(u.default, {
                                className: I.icon
                            }) : null
                        }, t.id), (0, a.jsxs)("div", {
                            className: I.userInfo,
                            children: [(0, a.jsxs)("div", {
                                className: I.username,
                                children: [(0, a.jsx)(o.default, {
                                    size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    children: c.default.getName(t)
                                }), (0, a.jsx)(o.default, {
                                    size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    color: o.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, a.jsxs)("div", {
                                className: I.username,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: f.default.Messages.BLOCKED
                                }), (0, a.jsxs)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", T]
                                })]
                            })]
                        })]
                    })
                },
                A = e => {
                    let {
                        channelId: t
                    } = e, n = (0, T.useStageBlockedUsers)(t);
                    return (0, a.jsx)(r.Scroller, {
                        className: I.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, a.jsx)(m, {
                                user: n,
                                channelId: t
                            }, n.id)
                        })
                    })
                }
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