            "use strict";
            n("152187");
            var r = n("714919"),
                a = n("289275"),
                o = n("761300"),
                i = n("359882"),
                l = n("597018"),
                u = n("243889"),
                s = n("54704"),
                c = n("233116"),
                d = n("751397"),
                f = n("733931"),
                p = n("749766"),
                h = n("200258"),
                m = n("270700"),
                y = n("268540"),
                v = n("605357"),
                g = n("362776"),
                b = n("396626"),
                _ = n("735320"),
                k = n("490653"),
                C = n("723786"),
                w = n("321956"),
                S = n("633050"),
                N = n("322496"),
                x = n("562920"),
                P = n("10241"),
                A = n("289011"),
                R = n("355817"),
                F = n("383503"),
                O = R("iterator"),
                E = "URLSearchParams",
                I = E + "Iterator",
                M = h.set,
                T = h.getterFor(E),
                B = h.getterFor(I),
                D = Object.getOwnPropertyDescriptor,
                L = function(e) {
                    if (!l) return a[e];
                    var t = D(a, e);
                    return t && t.value
                },
                V = L("fetch"),
                j = L("Request"),
                Headers = L("Headers"),
                U = j && j.prototype,
                q = Headers && Headers.prototype,
                RegExp = a.RegExp,
                TypeError = a.TypeError,
                K = a.decodeURIComponent,
                H = a.encodeURIComponent,
                z = i("".charAt),
                W = i([].join),
                G = i([].push),
                $ = i("".replace),
                Y = i([].shift),
                Q = i([].splice),
                Z = i("".split),
                J = i("".slice),
                X = /\+/g,
                ee = [, , , , ],
                et = function(e) {
                    try {
                        return K(e)
                    } catch (t) {
                        return e
                    }
                },
                en = function(e) {
                    var t, n = $(e, X, " "),
                        r = 4;
                    try {
                        return K(n)
                    } catch (e) {
                        for (; r;) {
                            ;
                            n = $(n, ee[(t = r--) - 1] || (ee[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi")), et)
                        }
                        return n
                    }
                },
                er = /[!'()~]|%20/g,
                ea = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+"
                },
                eo = function(e) {
                    return ea[e]
                },
                ei = function(e) {
                    return $(H(e), er, eo)
                },
                el = p(function(e, t) {
                    M(this, {
                        type: I,
                        target: T(e).entries,
                        index: 0,
                        kind: t
                    })
                }, E, function() {
                    var e = B(this),
                        t = e.target,
                        n = e.index++;
                    if (!t || n >= t.length) return e.target = void 0, P(void 0, !0);
                    var r = t[n];
                    switch (e.kind) {
                        case "keys":
                            return P(r.key, !1);
                        case "values":
                            return P(r.value, !1)
                    }
                    return P([r.key, r.value], !1)
                }, !0),
                eu = function(e) {
                    this.entries = [], this.url = null, void 0 !== e && (k(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === z(e, 0) ? J(e, 1) : e : C(e)))
                };
            eu.prototype = {
                type: E,
                bindURL: function(e) {
                    this.url = e, this.update()
                },
                parseObject: function(e) {
                    var t, n, r, a, i, l, u, s = this.entries,
                        c = x(e);
                    if (c)
                        for (n = (t = N(e, c)).next; !(r = o(n, t)).done;) {
                            if ((l = o(i = (a = N(_(r.value))).next, a)).done || (u = o(i, a)).done || !o(i, a).done) throw new TypeError("Expected sequence with length 2");
                            G(s, {
                                key: C(l.value),
                                value: C(u.value)
                            })
                        } else
                            for (var d in e) v(e, d) && G(s, {
                                key: d,
                                value: C(e[d])
                            })
                },
                parseQuery: function(e) {
                    if (e) {
                        for (var t, n, r = this.entries, a = Z(e, "&"), o = 0; o < a.length;)(t = a[o++]).length && G(r, {
                            key: en(Y(n = Z(t, "="))),
                            value: en(W(n, "="))
                        })
                    }
                },
                serialize: function() {
                    for (var e, t = this.entries, n = [], r = 0; r < t.length;) G(n, ei((e = t[r++]).key) + "=" + ei(e.value));
                    return W(n, "&")
                },
                update: function() {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                },
                updateURL: function() {
                    this.url && this.url.update()
                }
            };
            var es = function() {
                    m(this, ec);
                    var e = arguments.length > 0 ? arguments[0] : void 0,
                        t = M(this, new eu(e));
                    !l && (this.size = t.entries.length)
                },
                ec = es.prototype;
            if (d(ec, {
                    append: function(e, t) {
                        var n = T(this);
                        A(arguments.length, 2), G(n.entries, {
                            key: C(e),
                            value: C(t)
                        }), !l && this.length++, n.updateURL()
                    },
                    delete: function(e) {
                        for (var t = T(this), n = A(arguments.length, 1), r = t.entries, a = C(e), o = n < 2 ? void 0 : arguments[1], i = void 0 === o ? o : C(o), u = 0; u < r.length;) {
                            var s = r[u];
                            if (s.key === a && (void 0 === i || s.value === i)) {
                                if (Q(r, u, 1), void 0 !== i) break
                            } else u++
                        }!l && (this.size = r.length), t.updateURL()
                    },
                    get: function(e) {
                        var t = T(this).entries;
                        A(arguments.length, 1);
                        for (var n = C(e), r = 0; r < t.length; r++)
                            if (t[r].key === n) return t[r].value;
                        return null
                    },
                    getAll: function(e) {
                        var t = T(this).entries;
                        A(arguments.length, 1);
                        for (var n = C(e), r = [], a = 0; a < t.length; a++) t[a].key === n && G(r, t[a].value);
                        return r
                    },
                    has: function(e) {
                        for (var t = T(this).entries, n = A(arguments.length, 1), r = C(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : C(a), i = 0; i < t.length;) {
                            var l = t[i++];
                            if (l.key === r && (void 0 === o || l.value === o)) return !0
                        }
                        return !1
                    },
                    set: function(e, t) {
                        var n, r = T(this);
                        A(arguments.length, 1);
                        for (var a = r.entries, o = !1, i = C(e), u = C(t), s = 0; s < a.length; s++)(n = a[s]).key === i && (o ? Q(a, s--, 1) : (o = !0, n.value = u));
                        !o && G(a, {
                            key: i,
                            value: u
                        }), !l && (this.size = a.length), r.updateURL()
                    },
                    sort: function() {
                        var e = T(this);
                        F(e.entries, function(e, t) {
                            return e.key > t.key ? 1 : -1
                        }), e.updateURL()
                    },
                    forEach: function(e) {
                        for (var t, n = T(this).entries, r = g(e, arguments.length > 1 ? arguments[1] : void 0), a = 0; a < n.length;) r((t = n[a++]).value, t.key, this)
                    },
                    keys: function() {
                        return new el(this, "keys")
                    },
                    values: function() {
                        return new el(this, "values")
                    },
                    entries: function() {
                        return new el(this, "entries")
                    }
                }, {
                    enumerable: !0
                }), s(ec, O, ec.entries, {
                    name: "entries"
                }), s(ec, "toString", function() {
                    return T(this).serialize()
                }, {
                    enumerable: !0
                }), l && c(ec, "size", {
                    get: function() {
                        return T(this).entries.length
                    },
                    configurable: !0,
                    enumerable: !0
                }), f(es, E), r({
                    global: !0,
                    constructor: !0,
                    forced: !u
                }, {
                    URLSearchParams: es
                }), !u && y(Headers)) {
                var ed = i(q.has),
                    ef = i(q.set),
                    ep = function(e) {
                        if (k(e)) {
                            var t, n = e.body;
                            if (b(n) === E) return !ed(t = e.headers ? new Headers(e.headers) : new Headers, "content-type") && ef(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), w(e, {
                                body: S(0, C(n)),
                                headers: S(0, t)
                            })
                        }
                        return e
                    };
                if (y(V) && r({
                        global: !0,
                        enumerable: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        fetch: function(e) {
                            return V(e, arguments.length > 1 ? ep(arguments[1]) : {})
                        }
                    }), y(j)) {
                    var eh = function(e) {
                        return m(this, U), new j(e, arguments.length > 1 ? ep(arguments[1]) : {})
                    };
                    U.constructor = eh, eh.prototype = U, r({
                        global: !0,
                        constructor: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        Request: eh
                    })
                }
            }
            e.exports = {
                URLSearchParams: es,
                getState: T
            }