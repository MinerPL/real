! function() {
    var t, e, n = {
            404446: function(t, e, n) {
                "use strict";
                var r = n("745795"),
                    o = n("64980");
                t.exports = function(t) {
                    if ("Function" === r(t)) return o(t)
                }
            },
            448105: function(t, e, n) {
                "use strict";
                t.exports = function(t, e) {
                    var n = e.length,
                        r = t.length;
                    if (r > n) return !1;
                    if (r === n) return t === e;
                    t: for (var o = 0, i = 0; o < r; o++) {
                        for (var u = t.charCodeAt(o); i < n;)
                            if (e.charCodeAt(i++) === u) continue t;
                        return !1
                    }
                    return !0
                }
            },
            330206: function(t, e, n) {
                var Symbol = n("690516").Symbol;
                t.exports = Symbol
            },
            33426: function(t, e, n) {
                var Symbol = n("330206"),
                    r = n("447245"),
                    o = n("677201"),
                    i = Symbol ? Symbol.toStringTag : void 0;
                t.exports = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? r(t) : o(t)
                }
            },
            447414: function(t, e, n) {
                var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                t.exports = r
            },
            447245: function(t, e, n) {
                var Symbol = n("330206"),
                    r = Object.prototype,
                    o = r.hasOwnProperty,
                    i = r.toString,
                    u = Symbol ? Symbol.toStringTag : void 0;
                t.exports = function(t) {
                    var e = o.call(t, u),
                        n = t[u];
                    try {
                        t[u] = void 0;
                        var r = !0
                    } catch (t) {}
                    var c = i.call(t);
                    return r && (e ? t[u] = n : delete t[u]), c
                }
            },
            677201: function(t, e, n) {
                var r = Object.prototype.toString;
                t.exports = function(t) {
                    return r.call(t)
                }
            },
            690516: function(t, e, n) {
                n("854508");
                var r = n("447414"),
                    o = "object" == typeof self && self && self.Object === Object && self,
                    i = r || o || Function("return this")();
                t.exports = i
            },
            483366: function(t, e, n) {
                n("70102");
                var r = n("285162"),
                    o = n("271388"),
                    i = n("16282"),
                    u = Math.max,
                    c = Math.min;
                t.exports = function(t, e, n) {
                    var l, a, f, s, d, p, v = 0,
                        b = !1,
                        g = !1,
                        h = !0;
                    if ("function" != typeof t) throw TypeError("Expected a function");

                    function y(e) {
                        var n = l,
                            r = a;
                        return l = a = void 0, v = e, s = t.apply(r, n)
                    }
                    e = i(e) || 0, r(n) && (b = !!n.leading, f = (g = "maxWait" in n) ? u(i(n.maxWait) || 0, e) : f, h = "trailing" in n ? !!n.trailing : h);

                    function m(t) {
                        var n = t - p,
                            r = t - v;
                        return void 0 === p || n >= e || n < 0 || g && r >= f
                    }

                    function E() {
                        var t, n, r, i, u = o();
                        if (m(u)) return S(u);
                        d = setTimeout(E, (n = (t = u) - p, r = t - v, i = e - n, g ? c(i, f - r) : i))
                    }

                    function S(t) {
                        return (d = void 0, h && l) ? y(t) : (l = a = void 0, s)
                    }

                    function x() {
                        var t, n = o(),
                            r = m(n);
                        if (l = arguments, a = this, p = n, r) {
                            if (void 0 === d) {
                                ;
                                return v = t = p, d = setTimeout(E, e), b ? y(t) : s
                            }
                            if (g) return clearTimeout(d), d = setTimeout(E, e), y(p)
                        }
                        return void 0 === d && (d = setTimeout(E, e)), s
                    }
                    return x.cancel = function() {
                        void 0 !== d && clearTimeout(d), v = 0, l = p = a = d = void 0
                    }, x.flush = function() {
                        return void 0 === d ? s : S(o())
                    }, x
                }
            },
            285162: function(t, e, n) {
                t.exports = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
            },
            270879: function(t, e, n) {
                t.exports = function(t) {
                    return null != t && "object" == typeof t
                }
            },
            27556: function(t, e, n) {
                var r = n("33426"),
                    o = n("270879");
                t.exports = function(t) {
                    return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
                }
            },
            271388: function(t, e, n) {
                var r = n("690516");
                t.exports = function() {
                    return r.Date.now()
                }
            },
            16282: function(t, e, n) {
                n("781738");
                var r = n("285162"),
                    o = n("27556"),
                    i = 0 / 0,
                    u = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    l = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    f = parseInt;
                t.exports = function(t) {
                    if ("number" == typeof t) return t;
                    if (o(t)) return i;
                    if (r(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = r(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var n = l.test(t);
                    return n || a.test(t) ? f(t.slice(2), n ? 2 : 8) : c.test(t) ? i : +t
                }
            },
            195547: function(t, e, n) {
                "use strict";

                function r(t, e) {
                    if (t.score === e.score) {
                        var n, r, o, i, u, c;
                        let l = null !== (i = null !== (o = t.sortable) && void 0 !== o ? o : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                            a = null !== (c = null !== (u = t.sortable) && void 0 !== u ? u : null === (r = e.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== c ? c : "";
                        if (l < a) return -1;
                        if (l > a) return 1
                    }
                    return e.score - t.score
                }
                n.r(e), n.d(e, {
                    default: function() {
                        return r
                    }
                })
            },
            380029: function(t, e, n) {
                "use strict";
                n.r(e), n("222007"), n("424973"), n("854508"), n("70102");
                var r = n("448105"),
                    o = n.n(r),
                    i = n("483366"),
                    u = n.n(i),
                    c = n("655518"),
                    l = n("159885"),
                    a = n("195547");
                let f = {
                        UPDATE_USERS: "UPDATE_USERS",
                        USER_RESULTS: "USER_RESULTS",
                        QUERY_SET: "QUERY_SET",
                        QUERY_CLEAR: "QUERY_CLEAR"
                    },
                    s = new Map,
                    d = new Map,
                    p = new Set,
                    v = "username",
                    b = "friendNickname",
                    g = "globalName",
                    h = u(() => {
                        0 !== p.size && (p.forEach(t => {
                            let e = d.get(t);
                            null != e && m(t, e)
                        }), p.clear())
                    }, 100, {
                        leading: !0,
                        trailing: !0
                    });

                function y(t, e) {
                    return t * (null != e ? e : 1)
                }

                function m(t, e) {
                    var n, r;
                    let {
                        query: i,
                        limit: u,
                        filters: f,
                        blacklist: d,
                        whitelist: p
                    } = e, h = null != f && f.strict && null !== (n = f.guild) && void 0 !== n ? n : null, m = null !== (r = e.boosters) && void 0 !== r ? r : {}, S = RegExp("^".concat(c.default.escape(i)), "i"), x = RegExp(c.default.escape(i), "i"), j = [];
                    if ("" === i) return E(i, j, t);
                    let O = i.toLocaleLowerCase(),
                        T = (0, l.normalize)(O);
                    s.forEach((t, e) => {
                        let n;
                        if (! function(t, e, n, r, o) {
                                if (null != r && r.indexOf(t) >= 0) return !1;
                                if (null != o && o.indexOf(t) >= 0) return !0;
                                if (null != n) {
                                    let {
                                        friends: t,
                                        guild: r
                                    } = n;
                                    return !0 === t && !0 === e.isFriend || null != r && (null != e[r] || null === e[r]) || !1
                                }
                                return !0
                            }(e, t, f, d, p)) return;
                        let {
                            username: r
                        } = t;
                        e === i ? n = {
                            id: e,
                            username: r,
                            comparator: e,
                            score: y(10, m[e])
                        } : Object.keys(t).forEach(i => {
                            let u;
                            let c = t[i];
                            if ("boolean" == typeof c || null == c || null != h && i !== v && i !== b && i !== g && h !== i) return;
                            let a = (0, l.stripDiacritics)(c.toLocaleLowerCase());
                            S.test(c) ? u = {
                                comparator: c,
                                score: y(10, m[e])
                            } : x.test(c) ? u = {
                                comparator: c,
                                score: y(5, m[e])
                            } : o(O, a) ? u = {
                                comparator: c,
                                score: y(1, m[e])
                            } : o(T, (0, l.normalize)(a)) && (u = {
                                comparator: c,
                                score: y(1, m[e])
                            }), null != u && (null == n || n.score < u.score) && (n = {
                                ...u,
                                id: e,
                                username: r
                            })
                        }), null != n && j.push(n)
                    }), j.sort(a.default), j.length > u && (j.length = u), E(i, j, t)
                }

                function E(t, e, n) {
                    let r = {
                        type: f.USER_RESULTS,
                        uuid: n,
                        payload: {
                            query: t,
                            results: e
                        }
                    };
                    self.postMessage(r)
                }
                self.addEventListener("message", t => {
                    let {
                        data: e
                    } = t;
                    if (null == e || null == e.type) throw Error("Invalid data");
                    switch (e.type) {
                        case f.UPDATE_USERS:
                            return function(t) {
                                let {
                                    payload: e
                                } = t, n = !1, r = new Set;
                                e.forEach(t => {
                                    var e;
                                    let {
                                        id: o,
                                        ...i
                                    } = t, u = null !== (e = s.get(o)) && void 0 !== e ? e : null, c = {
                                        ...u,
                                        ...i
                                    };
                                    s.set(o, c), d.size > 0 && ((c.isFriend !== (null == u ? void 0 : u.isFriend) || c.friendNickname !== (null == u ? void 0 : u.friendNickname)) && (n = !0), Object.keys(c).forEach(t => {
                                        "isBot" !== t && "isFriend" !== t && t !== v && t !== b && t !== g && r.add(t)
                                    }))
                                }), d.forEach((t, e) => {
                                    let {
                                        filters: o
                                    } = t;
                                    (null == o || o.friends === n || r.has(o.guild)) && p.add(e)
                                }), h()
                            }(e);
                        case f.QUERY_SET:
                            return function(t) {
                                let {
                                    uuid: e,
                                    payload: n
                                } = t;
                                d.set(e, n), m(e, n)
                            }(e);
                        case f.QUERY_CLEAR:
                            return function(t) {
                                let {
                                    uuid: e
                                } = t;
                                d.delete(e), p.delete(e), 0 === p.size && h.cancel()
                            }(e)
                    }
                })
            },
            655518: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    default: function() {
                        return r
                    }
                }), n("781738");
                var r = {
                    escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                }
            }
        },
        r = {};

    function o(t) {
        var e = r[t];
        if (void 0 !== e) return e.exports;
        var i = r[t] = {
            exports: {}
        };
        return n[t](i, i.exports, o), i.exports
    }
    o.m = n, o.x = function() {
        var t = o.O(void 0, ["58409", "3341", "94288", "27043"], function() {
            return o("380029")
        });
        return t = o.O(t)
    }, t = o.x, o.x = function() {
        return Promise.all(["27043", "3341", "58409", "94288"].map(o.e, o)).then(t)
    }, o.f = {}, o.e = function(t) {
        return Promise.all(Object.keys(o.f).reduce(function(e, n) {
            return o.f[n](t, e), e
        }, []))
    }, o.p = "/assets/", o.u = function(t) {
        return ({
            27043: "11e0ae849b521f288679.js",
            3341: "40fad28f01da56375e6a.js",
            58409: "d179fa5fdde237bd188f.js",
            94288: "25b5e8687935019950ef.js"
        })[t]
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e = [], o.O = function(t, n, r, i) {
        if (n) {
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, r, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < e.length; u++) {
            for (var n = e[u][0], r = e[u][1], i = e[u][2], l = !0, a = 0; a < n.length; a++) c >= i && Object.keys(o.O).every(function(t) {
                return o.O[t](n[a])
            }) ? n.splice(a--, 1) : (l = !1, i < c && (c = i));
            if (l) {
                e.splice(u--, 1);
                var f = r();
                void 0 !== f && (t = f)
            }
        }
        return t
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), o.d = function(t, e) {
        for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, ! function() {
        var t = {
            76730: 1
        };
        o.f.i = function(e, n) {
            !t[e] && importScripts(o.p + o.u(e))
        };
        var e = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            n = e.push.bind(e);
        e.push = function(e) {
            var r = e[0],
                i = e[1],
                u = e[2];
            for (var c in i) o.o(i, c) && (o.m[c] = i[c]);
            for (u && u(o); r.length;) t[r.pop()] = 1;
            n(e)
        }
    }(), o.x()
}();