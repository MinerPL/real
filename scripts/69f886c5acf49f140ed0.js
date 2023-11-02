(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16663"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, o = 0; r < i; r++) {
                    for (var l = e.charCodeAt(r); o < n;)
                        if (t.charCodeAt(o++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return X
                },
                match: function() {
                    return J
                }
            });
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                l = e => !!(e && "object" == typeof e),
                a = e => e && !!e[i],
                u = (e, t, n) => {
                    if (a(e)) {
                        let r = e[i](),
                            {
                                matched: o,
                                selections: l
                            } = r.match(t);
                        return o && l && Object.keys(l).forEach(e => n(e, l[e])), o
                    }
                    if (l(e)) {
                        if (!l(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let i = [],
                                o = [],
                                l = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                a(n) && n[r] ? l.push(n) : l.length ? o.push(n) : i.push(n)
                            }
                            if (l.length) {
                                if (l.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < i.length + o.length) return !1;
                                let e = t.slice(0, i.length),
                                    r = 0 === o.length ? [] : t.slice(-o.length),
                                    a = t.slice(i.length, 0 === o.length ? 1 / 0 : -o.length);
                                return i.every((t, i) => u(t, e[i], n)) && o.every((e, t) => u(e, r[t], n)) && (0 === l.length || u(l[0], a, n))
                            }
                            return e.length === t.length && e.every((e, i) => u(e, t[i], n))
                        }
                        return Object.keys(e).every(r => {
                            let o = e[r];
                            return (r in t || a(o) && "optional" === o[i]().matcherType) && u(o, t[r], n)
                        })
                    }
                    return Object.is(t, e)
                },
                s = e => {
                    var t, n, r;
                    return l(e) ? a(e) ? null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : [] : Array.isArray(e) ? E(e, s) : E(Object.values(e), s) : []
                },
                E = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function c(e) {
                return Object.assign(e, {
                    optional: () => _(e),
                    and: t => T(e, t),
                    or: t => S(e, t),
                    select: t => void 0 === t ? f(e) : f(t, e)
                })
            }

            function _(e) {
                return c({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (s(e).forEach(e => i(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e),
                        matcherType: "optional"
                    })
                })
            }
            let d = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                I = (e, t) => {
                    for (let [n, i] of e.entries())
                        if (!t(i, n)) return !1;
                    return !0
                };

            function T() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => E(t, s),
                        matcherType: "and"
                    })
                })
            }

            function S() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return E(t, s).forEach(e => i(e, void 0)), {
                                matched: t.some(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => E(t, s),
                        matcherType: "or"
                    })
                })
            }

            function N(e) {
                return {
                    [i]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function f() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = "string" == typeof t[0] ? t[0] : void 0,
                    l = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return c({
                    [i]: () => ({
                        match: e => {
                            let t = {
                                [null != r ? r : o]: e
                            };
                            return {
                                matched: void 0 === l || u(l, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : o].concat(void 0 === l ? [] : s(l))
                    })
                })
            }

            function A(e) {
                return "number" == typeof e
            }

            function p(e) {
                return "string" == typeof e
            }

            function O(e) {
                return "bigint" == typeof e
            }
            let R = c(N(function(e) {
                    return !0
                })),
                m = e => Object.assign(c(e), {
                    startsWith: t => m(T(e, N(e => p(e) && e.startsWith(t)))),
                    endsWith: t => m(T(e, N(e => p(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return m(T(e, (n = t, N(e => p(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return m(T(e, (n = t, N(e => p(e) && e.length <= n))))
                    },
                    includes: t => m(T(e, N(e => p(e) && e.includes(t)))),
                    regex: t => m(T(e, N(e => p(e) && !!e.match(t))))
                }),
                L = m(N(p)),
                C = (e, t) => N(n => A(n) && e <= n && t >= n),
                h = e => N(t => A(t) && t < e),
                U = e => N(t => A(t) && t > e),
                g = e => N(t => A(t) && t <= e),
                P = e => N(t => A(t) && t >= e),
                D = () => N(e => A(e) && Number.isInteger(e)),
                M = () => N(e => A(e) && Number.isFinite(e)),
                v = () => N(e => A(e) && e > 0),
                G = () => N(e => A(e) && e < 0),
                b = e => Object.assign(c(e), {
                    between: (t, n) => b(T(e, C(t, n))),
                    lt: t => b(T(e, h(t))),
                    gt: t => b(T(e, U(t))),
                    lte: t => b(T(e, g(t))),
                    gte: t => b(T(e, P(t))),
                    int: () => b(T(e, D())),
                    finite: () => b(T(e, M())),
                    positive: () => b(T(e, v())),
                    negative: () => b(T(e, G()))
                }),
                y = b(N(A)),
                B = (e, t) => N(n => O(n) && e <= n && t >= n),
                F = e => N(t => O(t) && t < e),
                H = e => N(t => O(t) && t > e),
                w = e => N(t => O(t) && t <= e),
                V = e => N(t => O(t) && t >= e),
                k = () => N(e => O(e) && e > 0),
                Y = () => N(e => O(e) && e < 0),
                K = e => Object.assign(c(e), {
                    between: (t, n) => K(T(e, B(t, n))),
                    lt: t => K(T(e, F(t))),
                    gt: t => K(T(e, H(t))),
                    lte: t => K(T(e, w(t))),
                    gte: t => K(T(e, V(t))),
                    positive: () => K(T(e, k())),
                    negative: () => K(T(e, Y()))
                }),
                x = K(N(O)),
                W = c(N(function(e) {
                    return "boolean" == typeof e
                })),
                j = c(N(function(e) {
                    return "symbol" == typeof e
                })),
                z = c(N(function(e) {
                    return null == e
                }));
            var X = {
                __proto__: null,
                matcher: i,
                optional: _,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => e(_(t)),
                            select: n => e(void 0 === n ? f(t) : f(n, t))
                        })
                    }({
                        [i]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    i = {};
                                if (0 === e.length) return s(n).forEach(e => {
                                    i[e] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [i]: () => ({
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
                                let i = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    r = t[0];
                                return {
                                    matched: d(e, e => u(r, e, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [i]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [o, l] = t;
                                return {
                                    matched: I(e, (e, t) => {
                                        let n = u(o, t, r),
                                            i = u(l, e, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: T,
                union: S,
                not: function(e) {
                    return c({
                        [i]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: N,
                select: f,
                any: R,
                _: R,
                string: L,
                between: C,
                lt: h,
                gt: U,
                lte: g,
                gte: P,
                int: D,
                finite: M,
                positive: v,
                negative: G,
                number: y,
                betweenBigInt: B,
                ltBigInt: F,
                gtBigInt: H,
                lteBigInt: w,
                gteBigInt: V,
                positiveBigInt: k,
                negativeBigInt: Y,
                bigint: x,
                boolean: W,
                symbol: j,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return c(N((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return c(N(function() {
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
            let q = {
                matched: !1,
                value: void 0
            };

            function J(e) {
                return new Q(e, q)
            }
            class Q {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        l = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (l.push(n[0]), e = n[1]) : n.length > 2 && l.push(...n.slice(1, n.length - 1));
                    let a = !1,
                        s = {},
                        E = (e, t) => {
                            a = !0, s[e] = t
                        },
                        c = l.some(e => u(e, this.input, E)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: r(a ? o in s ? s[o] : s : this.input, this.input)
                        } : q;
                    return new Q(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new Q(this.input, n ? {
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
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("696605");

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: o,
                    rowHeight: l
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function E(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = u(.5 * o),
                    _ = u(i, -c),
                    d = u(i + o, c);
                for (_ > 0 && (_ = Math.max(E(0), _)), _ = Math.floor(_ / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; _ <= d;) _ = E(_);
                a(t, n, s)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return o
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return u
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return N
                },
                saveAccountRequest: function() {
                    return f
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return O
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return m
                },
                setPendingAvatarDecoration: function() {
                    return L
                },
                setPendingProfileEffectID: function() {
                    return C
                },
                clearErrors: function() {
                    return h
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                o = n("819855"),
                l = n("913144"),
                a = n("393414"),
                u = n("599110"),
                s = n("315102"),
                E = n("730622"),
                c = n("437822"),
                _ = n("49111"),
                d = n("191349"),
                I = n("782340");

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
                    r = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, E.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    c.default.logoutInternal(), (0, a.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function f(e) {
                let t = await i.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: a,
                    avatar: c,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: N
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, E.default)(e => {
                    let l = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: a,
                        avatar: c,
                        discriminator: n,
                        global_name: N,
                        new_password: S,
                        ...e
                    };
                    null === T && (l.avatar_decoration_id = null), null != T && (l.avatar_decoration_id = T.id, l.avatar_decoration_sku_id = T.skuId);
                    let u = r.default.get(_.DEVICE_TOKEN),
                        s = (0, d.getDevicePushProvider)();
                    null != s && null != u && (l.push_provider = s, l.push_token = u);
                    let E = r.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != E && (l.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = E), f(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O() {
                return i.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function L(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function h() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("599110");
            let o = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var l = n("666020");

            function a(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, o = r
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        918771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                a = n("446674"),
                u = n("819855"),
                s = n("77078"),
                E = n("272030"),
                c = n("851387"),
                _ = n("841098"),
                d = n("376556"),
                I = n("716241"),
                T = n("766274"),
                S = n("271938"),
                N = n("26989"),
                f = n("305961"),
                A = n("476765"),
                p = n("486952"),
                O = n("811305"),
                R = n("599110"),
                m = n("701909"),
                L = n("339023"),
                C = n("602658"),
                h = n("49111"),
                U = n("782340"),
                g = n("80014"),
                P = n("494101"),
                D = function(e) {
                    let {
                        guildId: t,
                        transitionState: o,
                        onClose: D
                    } = e, M = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]), v = (0, a.useStateFromStores)([S.default], () => S.default.getId()), G = (0, a.useStateFromStores)([N.default], () => N.default.getMember(t, v)), [b, y] = r.useState([]), B = (0, _.default)(), F = (0, A.useUID)();
                    if (r.useEffect(() => {
                            0 !== b.length && R.default.track(h.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
                                role_ids: b.map(e => {
                                    let {
                                        role_id: t
                                    } = e;
                                    return t
                                }),
                                ...(0, I.collectGuildAnalyticsMetadata)(t)
                            })
                        }, [t, b]), r.useEffect(() => {
                            c.default.getGuildRoleConnectionsConfigurations(t).then(e => y(e))
                        }, [t]), null == M || null == G) return null;
                    let H = Object.values(M.roles).filter(e => {
                        var t;
                        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                    });
                    return (0, i.jsxs)(s.ModalRoot, {
                        transitionState: o,
                        "aria-labelledby": F,
                        className: g.modal,
                        children: [(0, i.jsxs)(s.ModalHeader, {
                            separator: !1,
                            children: [(0, i.jsx)(L.default, {
                                className: g.headerIcon,
                                size: 24
                            }), (0, i.jsx)(s.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: U.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
                            }), (0, i.jsx)(s.ModalCloseButton, {
                                className: g.modalCloseButton,
                                onClick: D
                            })]
                        }), (0, i.jsxs)(s.ModalContent, {
                            className: g.container,
                            children: [(0, i.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: U.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
                                    helpdeskArticleUrl: m.default.getArticleURL(h.HelpdeskArticles.CONNECTION_DETAILS)
                                })
                            }), (0, i.jsx)("div", {
                                className: g.verifiedRoles,
                                children: H.map(e => {
                                    let o = G.roles.includes(e.id),
                                        a = function(e) {
                                            let n = b.find(t => {
                                                let {
                                                    role_id: n
                                                } = t;
                                                return n === e
                                            });
                                            if (null == n) return [];
                                            let r = {};
                                            for (let e of n.rules.flat()) {
                                                let a;
                                                if (null != e.application_id) {
                                                    var o;
                                                    let r = null === (o = n.applications) || void 0 === o ? void 0 : o[e.application_id];
                                                    a = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                                                        src: new(0, T.default)(r.bot).getAvatarURL(t, 24),
                                                        alt: "",
                                                        className: l(g.botAvatar, P.avatar)
                                                    }) : null
                                                } else {
                                                    let t = d.default.get(e.connection_type);
                                                    a = (0, i.jsx)("img", {
                                                        src: (0, u.isThemeLight)(B) ? t.icon.lightSVG : t.icon.darkSVG,
                                                        alt: "",
                                                        className: P.avatar
                                                    })
                                                }
                                                null != a && (r["".concat(e.connection_type, ":").concat(e.application_id)] = a)
                                            }
                                            return Object.values(r)
                                        }(e.id);
                                    return (0, i.jsxs)(s.Clickable, {
                                        className: l(g.verifiedRole, o ? g.verifiedRoleHasRole : null),
                                        onClick: o ? void 0 : () => {
                                            var r, o;
                                            return r = e, o = t, void(0, s.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await n.el("572579").then(n.bind(n, "572579"));
                                                return t => (0, i.jsx)(e, {
                                                    role: r,
                                                    guildId: o,
                                                    ...t
                                                })
                                            })
                                        },
                                        onContextMenu: o ? t => {
                                            var r, o, l;
                                            return r = M.id, o = e.id, l = t, void(0, E.openContextMenuLazy)(l, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("232006").then(n.bind(n, "232006"));
                                                return t => (0, i.jsx)(e, {
                                                    ...t,
                                                    roleId: o,
                                                    onLeaveRole: () => c.default.unassignGuildRoleConnection(r, o)
                                                })
                                            })
                                        } : void 0,
                                        children: [o ? (0, i.jsx)("div", {
                                            className: g.roleCheckmark,
                                            children: (0, i.jsx)(p.default, {})
                                        }) : null, (0, i.jsx)(C.default, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }), (0, i.jsxs)("div", {
                                            className: g.verifiedRoleNameDescriptionContainer,
                                            children: [(0, i.jsx)(s.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                className: g.verifiedRoleName,
                                                children: e.name
                                            }), void 0 !== e.description ? (0, i.jsx)(s.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                className: g.verifiedRoleDescription,
                                                children: e.description
                                            }) : null]
                                        }), (0, i.jsx)(O.default, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: a.map(() => null),
                                            renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                                                children: a[n]
                                            }, n),
                                            max: 3
                                        })]
                                    }, e.id)
                                })
                            })]
                        })]
                    })
                }
        },
        602658: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("509043"),
                o = n("405645"),
                l = n("483093"),
                a = n("339023"),
                u = n("49111");

            function s(e) {
                var t;
                let {
                    guildId: n,
                    role: s,
                    size: E,
                    className: c
                } = e, _ = (0, o.useRoleIcon)({
                    guildId: n,
                    roleId: s.id,
                    size: E
                });
                return null != _ ? (0, i.jsx)(l.default, {
                    className: c,
                    ..._
                }) : (0, i.jsx)(a.default, {
                    color: null !== (t = s.colorString) && void 0 !== t ? t : (0, r.int2hex)(u.DEFAULT_ROLE_COLOR),
                    className: c,
                    size: E
                })
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return _
                },
                isRoleIconAssetUrl: function() {
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return T
                }
            });
            var i = n("867805"),
                r = n("407063"),
                o = n("315102"),
                l = n("773336"),
                a = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                E = (0, l.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: d(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                _ = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                d = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = o.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        _ = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), _ = E ? "" : "&" + _), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(c).concat(_) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                I = e => e.startsWith(u) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                T = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return E
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return _
                },
                setPendingBanner: function() {
                    return d
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return A
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return R
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                l = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: o
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: o
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function E() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, o.popLayer)()
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function f() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function R(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, l, a, u, s, E, c;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var _ = n("446674"),
                d = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                S = {},
                N = !1;

            function f() {
                T = I.FormStates.CLOSED, S = {}, s = null, E = void 0, c = []
            }

            function A() {
                p(), O(), S = {}, T = I.FormStates.OPEN
            }

            function p() {
                i = void 0, a = void 0
            }

            function O() {
                r = void 0, o = void 0, l = void 0, u = void 0
            }
            class R extends _.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== l || void 0 !== a || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: o,
                        pendingPronouns: l,
                        pendingNickname: a,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return E
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            R.displayName = "GuildIdentitySettingsStore";
            var m = new R(d.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = I.FormStates.OPEN, S = {}, E = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: f,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    A(), f()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = I.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: O,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: A,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: A,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    N = t
                }
            })
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return E
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return d
                }
            });
            var i = n("65597"),
                r = n("862205"),
                o = n("697218"),
                l = n("719923"),
                a = n("782340");
            let u = (0, r.createExperiment)({
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
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: o
                    } = n, a = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: a ? i : o
                    }
                },
                E = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), l = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: E,
                        collectEnabled: c
                    } = s({
                        user: r,
                        config: l
                    }), _ = a && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: E
                    }
                },
                _ = (0, r.createExperiment)({
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
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                d = function() {
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
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                o = n("77078"),
                l = n("112679"),
                a = n("55689"),
                u = n("855133"),
                s = n("599110"),
                E = n("659500"),
                c = n("49111"),
                _ = n("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: N,
                    analyticsObject: f,
                    analyticsLocation: A,
                    analyticsSourceLocation: p,
                    isGift: O = !1,
                    giftMessage: R,
                    subscriptionTier: m,
                    trialId: L,
                    postSuccessGuild: C,
                    openInvoiceId: h,
                    applicationId: U,
                    referralTrialOfferId: g,
                    giftRecipient: P,
                    returnRef: D
                } = null != e ? e : {}, M = !1, v = (0, r.v4)();
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...o
                        } = n;
                        return (0, i.jsx)(e, {
                            ...o,
                            loadId: v,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: O,
                            giftMessage: R,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                r(), null == I || I(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                M = !0, null == T || T(), !O && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: N,
                            analyticsObject: f,
                            analyticsLocation: A,
                            analyticsSourceLocation: p,
                            trialId: L,
                            postSuccessGuild: C,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: h,
                            applicationId: U,
                            referralTrialOfferId: g,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !M && s.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : f,
                            source: p,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: O,
                            eligible_for_trial: null != L,
                            application_id: U,
                            location_stack: N
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == I || I(M), M && (!O && E.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return o
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                l = n("913144"),
                a = n("775433"),
                u = n("697218"),
                s = n("10514"),
                E = n("764364"),
                c = n("676572"),
                _ = n("646718"),
                d = n("49111");
            let I = "nonSubscriber";
            async function T() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: d.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [_.PremiumSubscriptionSKUs.TIER_0]: e[_.PremiumSubscriptionSKUs.TIER_0],
                                [_.PremiumSubscriptionSKUs.TIER_2]: e[_.PremiumSubscriptionSKUs.TIER_2]
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

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                f(r, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([u.default], () => u.default.getCurrentUser());
                i.useEffect(() => {
                    f(l, o, t, n)
                }, [l, o, t, n])
            }

            function f(e, t, n, i) {
                null != e && !(0, E.isPremium)(e) && n && (t && T(), i && (!s.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = o;
            class a extends i.default.Store {
                initialize() {
                    l = o
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var u = new a(r.default, {
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
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var o = r
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return E
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectID: function() {
                    return _
                },
                getProfilePreviewField: function() {
                    return d
                },
                showRemoveAvatar: function() {
                    return I
                },
                showRemoveBanner: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("152584"),
                o = n("234251"),
                l = n("783142"),
                a = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            l = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function E(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, o.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function d(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                o = n("685665"),
                l = n("929423");
            n("424562");
            var a = n("49111"),
                u = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: E,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: _
                } = (0, o.default)(), d = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != E ? E : _), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: E,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, E, c, _]);
                return d
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var o = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return E
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, o = n("991170"),
                l = n("719923"),
                a = n("4233"),
                u = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let E = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = l.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                c = (e, t, n) => E(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                a = n("80507"),
                u = n("374363"),
                s = n("364685"),
                E = n("49111"),
                c = n("397336");
            let _ = {
                pendingUsages: []
            };
            E.Durations.DAY;
            let d = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    s.default.isLoaded && d.compute()
                },
                T = () => {
                    I()
                };

            function S() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                d.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class N extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (_ = e), this.syncWith([s.default], T), this.syncWith([u.default], S)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return d
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var f = new N(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        d.track(e), _.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), I()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return d
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return I
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return N
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return O
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return m
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("448993"),
                l = n("884351"),
                a = n("845579"),
                u = n("697218"),
                s = n("599110"),
                E = n("49111"),
                c = n("646718");

            function _(e) {
                s.default.track(E.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function d(e, t) {
                var n, s;
                let c = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let _ = a.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await i.default.patch({
                        url: null != t ? E.Endpoints.GUILD_PROFILE(t, E.ME) : E.Endpoints.USER_PROFILE(E.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new o.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new o.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function I() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function m(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                l = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("817736"),
                r = n("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("157590");
            let l = (0, r.v4)(),
                a = new Map,
                u = new Map;
            class s extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = u.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = l;
                    let s = this.getVisibilityObserverId();
                    !u.has(s) && u.set(s, new o.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            s.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var E = s
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);