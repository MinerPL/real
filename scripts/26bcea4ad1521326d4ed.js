(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90134"], {
        700120: function(e, t, n) {
            "use strict";

            function i(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(n("876860")),
                a = i(n("484237"));
            n("82560");
            var s = i(n("662164"));

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e) {
                return "/" === e.charAt(0) ? e : "/" + e
            }

            function c(e) {
                return "/" === e.charAt(0) ? e.substr(1) : e
            }

            function u(e, t) {
                var n, i;
                return (n = e, i = t, 0 === n.toLowerCase().indexOf(i.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(i.length))) ? e.substr(t.length) : e
            }

            function d(e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
            }

            function h(e) {
                var t = e || "/",
                    n = "",
                    i = "",
                    r = t.indexOf("#"); - 1 !== r && (i = t.substr(r), t = t.substr(0, r));
                var a = t.indexOf("?");
                return -1 !== a && (n = t.substr(a), t = t.substr(0, a)), {
                    pathname: t,
                    search: "?" === n ? "" : n,
                    hash: "#" === i ? "" : i
                }
            }

            function p(e) {
                var t = e.pathname,
                    n = e.search,
                    i = e.hash,
                    r = t || "/";
                return n && "?" !== n && (r += "?" === n.charAt(0) ? n : "?" + n), i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i), r
            }

            function f(e, t, n, i) {
                var a;
                "string" == typeof e ? (a = h(e)).state = t : (void 0 === (a = o({}, e)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== t && void 0 === a.state && (a.state = t));
                try {
                    a.pathname = decodeURI(a.pathname)
                } catch (e) {
                    throw e instanceof URIError ? URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
                }
                return n && (a.key = n), i ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = r(a.pathname, i.pathname)) : a.pathname = i.pathname : a.pathname || (a.pathname = "/"), a
            }

            function m() {
                var e = null,
                    t = [];
                return {
                    setPrompt: function(t) {
                        return e = t,
                            function() {
                                e === t && (e = null)
                            }
                    },
                    confirmTransitionTo: function(t, n, i, r) {
                        if (null != e) {
                            var a = "function" == typeof e ? e(t, n) : e;
                            "string" == typeof a ? "function" == typeof i ? i(a, r) : r(!0) : r(!1 !== a)
                        } else r(!0)
                    },
                    appendListener: function(e) {
                        var n = !0;

                        function i() {
                            n && e.apply(void 0, arguments)
                        }
                        return t.push(i),
                            function() {
                                n = !1, t = t.filter(function(e) {
                                    return e !== i
                                })
                            }
                    },
                    notifyListeners: function() {
                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        t.forEach(function(e) {
                            return e.apply(void 0, n)
                        })
                    }
                }
            }
            var v = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function g(e, t) {
                t(window.confirm(e))
            }
            var k = "popstate",
                N = "hashchange";

            function x() {
                try {
                    return window.history.state || {}
                } catch (e) {
                    return {}
                }
            }
            var C = "hashchange",
                A = {
                    hashbang: {
                        encodePath: function(e) {
                            return "!" === e.charAt(0) ? e : "!/" + c(e)
                        },
                        decodePath: function(e) {
                            return "!" === e.charAt(0) ? e.substr(1) : e
                        }
                    },
                    noslash: {
                        encodePath: c,
                        decodePath: l
                    },
                    slash: {
                        encodePath: l,
                        decodePath: l
                    }
                };

            function E(e) {
                var t = e.indexOf("#");
                return -1 === t ? e : e.slice(0, t)
            }

            function R() {
                var e = window.location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.substring(t + 1)
            }

            function O(e) {
                window.location.replace(E(window.location.href) + "#" + e)
            }

            function I(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }
            t.createBrowserHistory = function(e) {
                void 0 === e && (e = {}), v || s(!1);
                var t, n = window.history,
                    i = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                    r = -1 !== window.navigator.userAgent.indexOf("Trident"),
                    a = e,
                    c = a.forceRefresh,
                    h = void 0 !== c && c,
                    C = a.getUserConfirmation,
                    A = void 0 === C ? g : C,
                    E = a.keyLength,
                    R = void 0 === E ? 6 : E,
                    O = e.basename ? d(l(e.basename)) : "";

                function I(e) {
                    var t = e || {},
                        n = t.key,
                        i = t.state,
                        r = window.location,
                        a = r.pathname + r.search + r.hash;
                    return O && (a = u(a, O)), f(a, i, n)
                }

                function T() {
                    return Math.random().toString(36).substr(2, R)
                }
                var b = m();

                function L(e) {
                    o(V, e), V.length = n.length, b.notifyListeners(V.location, V.action)
                }

                function y(e) {
                    void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS") || w(I(e.state))
                }

                function S() {
                    w(I(x()))
                }
                var P = !1;

                function w(e) {
                    P ? (P = !1, L()) : b.confirmTransitionTo(e, "POP", A, function(t) {
                        var n, i, r, a, s;
                        t ? L({
                            action: "POP",
                            location: e
                        }) : (n = e, i = V.location, -1 === (r = j.indexOf(i.key)) && (r = 0), -1 === (a = j.indexOf(n.key)) && (a = 0), (s = r - a) && (P = !0, D(s)))
                    })
                }
                var _ = I(x()),
                    j = [_.key];

                function M(e) {
                    return O + p(e)
                }

                function D(e) {
                    n.go(e)
                }
                var W = 0;

                function U(e) {
                    1 === (W += e) && 1 === e ? (window.addEventListener(k, y), r && window.addEventListener(N, S)) : 0 === W && (window.removeEventListener(k, y), r && window.removeEventListener(N, S))
                }
                var H = !1,
                    V = {
                        length: n.length,
                        action: "POP",
                        location: _,
                        createHref: M,
                        push: function(e, t) {
                            var r = f(e, t, T(), V.location);
                            b.confirmTransitionTo(r, "PUSH", A, function(e) {
                                if (e) {
                                    var t = M(r),
                                        a = r.key,
                                        s = r.state;
                                    if (i) {
                                        if (n.pushState({
                                                key: a,
                                                state: s
                                            }, null, t), h) window.location.href = t;
                                        else {
                                            var o = j.indexOf(V.location.key),
                                                l = j.slice(0, o + 1);
                                            l.push(r.key), j = l, L({
                                                action: "PUSH",
                                                location: r
                                            })
                                        }
                                    } else window.location.href = t
                                }
                            })
                        },
                        replace: function(e, t) {
                            var r = "REPLACE",
                                a = f(e, t, T(), V.location);
                            b.confirmTransitionTo(a, r, A, function(e) {
                                if (e) {
                                    var t = M(a),
                                        s = a.key,
                                        o = a.state;
                                    if (i) {
                                        if (n.replaceState({
                                                key: s,
                                                state: o
                                            }, null, t), h) window.location.replace(t);
                                        else {
                                            var l = j.indexOf(V.location.key); - 1 !== l && (j[l] = a.key), L({
                                                action: r,
                                                location: a
                                            })
                                        }
                                    } else window.location.replace(t)
                                }
                            })
                        },
                        go: D,
                        goBack: function() {
                            D(-1)
                        },
                        goForward: function() {
                            D(1)
                        },
                        block: function(e) {
                            void 0 === e && (e = !1);
                            var t = b.setPrompt(e);
                            return H || (U(1), H = !0),
                                function() {
                                    return H && (H = !1, U(-1)), t()
                                }
                        },
                        listen: function(e) {
                            var t = b.appendListener(e);
                            return U(1),
                                function() {
                                    U(-1), t()
                                }
                        }
                    };
                return V
            }, t.createHashHistory = function(e) {
                void 0 === e && (e = {}), v || s(!1);
                var t = window.history,
                    n = (window.navigator.userAgent.indexOf("Firefox"), e),
                    i = n.getUserConfirmation,
                    r = void 0 === i ? g : i,
                    a = n.hashType,
                    c = e.basename ? d(l(e.basename)) : "",
                    h = A[void 0 === a ? "slash" : a],
                    k = h.encodePath,
                    N = h.decodePath;

                function x() {
                    var e = N(R());
                    return c && (e = u(e, c)), f(e)
                }
                var I = m();

                function T(e) {
                    o(U, e), U.length = t.length, I.notifyListeners(U.location, U.action)
                }
                var b = !1,
                    L = null;

                function y() {
                    var e = R(),
                        t = k(e);
                    if (e !== t) O(t);
                    else {
                        var n, i, a, s = x(),
                            o = U.location;
                        if (!b && (n = o, i = s, n.pathname === i.pathname && n.search === i.search && n.hash === i.hash) || L === p(s)) return;
                        L = null, a = s, b ? (b = !1, T()) : I.confirmTransitionTo(a, "POP", r, function(e) {
                            var t, n, i, r, s;
                            e ? T({
                                action: "POP",
                                location: a
                            }) : (t = a, n = U.location, -1 === (i = _.lastIndexOf(p(n))) && (i = 0), -1 === (r = _.lastIndexOf(p(t))) && (r = 0), (s = i - r) && (b = !0, j(s)))
                        })
                    }
                }
                var S = R(),
                    P = k(S);
                S !== P && O(P);
                var w = x(),
                    _ = [p(w)];

                function j(e) {
                    t.go(e)
                }
                var M = 0;

                function D(e) {
                    1 === (M += e) && 1 === e ? window.addEventListener(C, y) : 0 === M && window.removeEventListener(C, y)
                }
                var W = !1,
                    U = {
                        length: t.length,
                        action: "POP",
                        location: w,
                        createHref: function(e) {
                            var t = document.querySelector("base"),
                                n = "";
                            return t && t.getAttribute("href") && (n = E(window.location.href)), n + "#" + k(c + p(e))
                        },
                        push: function(e, t) {
                            var n = f(e, void 0, void 0, U.location);
                            I.confirmTransitionTo(n, "PUSH", r, function(e) {
                                if (e) {
                                    var t = p(n),
                                        i = k(c + t);
                                    if (R() !== i) {
                                        L = t, r = i, window.location.hash = r;
                                        var r, a = _.lastIndexOf(p(U.location)),
                                            s = _.slice(0, a + 1);
                                        s.push(t), _ = s, T({
                                            action: "PUSH",
                                            location: n
                                        })
                                    } else T()
                                }
                            })
                        },
                        replace: function(e, t) {
                            var n = "REPLACE",
                                i = f(e, void 0, void 0, U.location);
                            I.confirmTransitionTo(i, n, r, function(e) {
                                if (e) {
                                    var t = p(i),
                                        r = k(c + t);
                                    R() !== r && (L = t, O(r));
                                    var a = _.indexOf(p(U.location)); - 1 !== a && (_[a] = t), T({
                                        action: n,
                                        location: i
                                    })
                                }
                            })
                        },
                        go: j,
                        goBack: function() {
                            j(-1)
                        },
                        goForward: function() {
                            j(1)
                        },
                        block: function(e) {
                            void 0 === e && (e = !1);
                            var t = I.setPrompt(e);
                            return W || (D(1), W = !0),
                                function() {
                                    return W && (W = !1, D(-1)), t()
                                }
                        },
                        listen: function(e) {
                            var t = I.appendListener(e);
                            return D(1),
                                function() {
                                    D(-1), t()
                                }
                        }
                    };
                return U
            }, t.createMemoryHistory = function(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.getUserConfirmation,
                    i = t.initialEntries,
                    r = void 0 === i ? ["/"] : i,
                    a = t.initialIndex,
                    s = void 0 === a ? 0 : a,
                    l = t.keyLength,
                    c = void 0 === l ? 6 : l,
                    u = m();

                function d(e) {
                    o(N, e), N.length = N.entries.length, u.notifyListeners(N.location, N.action)
                }

                function h() {
                    return Math.random().toString(36).substr(2, c)
                }
                var v = I(s, 0, r.length - 1),
                    g = r.map(function(e) {
                        return f(e, void 0, "string" == typeof e ? h() : e.key || h())
                    });

                function k(e) {
                    var t = I(N.index + e, 0, N.entries.length - 1),
                        i = N.entries[t];
                    u.confirmTransitionTo(i, "POP", n, function(e) {
                        e ? d({
                            action: "POP",
                            location: i,
                            index: t
                        }) : d()
                    })
                }
                var N = {
                    length: g.length,
                    action: "POP",
                    location: g[v],
                    index: v,
                    entries: g,
                    createHref: p,
                    push: function(e, t) {
                        var i = f(e, t, h(), N.location);
                        u.confirmTransitionTo(i, "PUSH", n, function(e) {
                            if (e) {
                                var t = N.index + 1,
                                    n = N.entries.slice(0);
                                n.length > t ? n.splice(t, n.length - t, i) : n.push(i), d({
                                    action: "PUSH",
                                    location: i,
                                    index: t,
                                    entries: n
                                })
                            }
                        })
                    },
                    replace: function(e, t) {
                        var i = "REPLACE",
                            r = f(e, t, h(), N.location);
                        u.confirmTransitionTo(r, i, n, function(e) {
                            e && (N.entries[N.index] = r, d({
                                action: i,
                                location: r
                            }))
                        })
                    },
                    go: k,
                    goBack: function() {
                        k(-1)
                    },
                    goForward: function() {
                        k(1)
                    },
                    canGo: function(e) {
                        var t = N.index + e;
                        return 0 <= t && t < N.entries.length
                    },
                    block: function(e) {
                        return void 0 === e && (e = !1), u.setPrompt(e)
                    },
                    listen: function(e) {
                        return u.appendListener(e)
                    }
                };
                return N
            }, t.createLocation = f, t.locationsAreEqual = function(e, t) {
                return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && a(e.state, t.state)
            }, t.parsePath = h, t.createPath = p
        },
        290197: function(e, t, n) {
            "use strict";
            n("428350")("createBrowserHistory"), e.exports = n("241767").createBrowserHistory
        },
        241767: function(e, t, n) {
            "use strict";
            e.exports = n("700120")
        },
        428350: function(e, t, n) {
            "use strict";
            var i = function() {};
            e.exports = function(e) {
                i('Please use `require("history").%s` instead of `require("history/%s")`. Support for the latter will be removed in the next major release.', [e, e])
            }
        },
        872478: function(e, t, n) {
            var i = n("846625");
            e.exports = h, e.exports.parse = a, e.exports.compile = function(e, t) {
                return o(a(e, t))
            }, e.exports.tokensToFunction = o, e.exports.tokensToRegExp = d;
            var r = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");

            function a(e, t) {
                for (var n, i = [], a = 0, s = 0, o = "", c = t && t.delimiter || "/"; null != (n = r.exec(e));) {
                    var u = n[0],
                        d = n[1],
                        h = n.index;
                    if (o += e.slice(s, h), s = h + u.length, d) {
                        o += d[1];
                        continue
                    }
                    var p = e[s],
                        f = n[2],
                        m = n[3],
                        v = n[4],
                        g = n[5],
                        k = n[6],
                        N = n[7];
                    o && (i.push(o), o = "");
                    var x = null != f && null != p && p !== f,
                        C = "+" === k || "*" === k,
                        A = "?" === k || "*" === k,
                        E = n[2] || c,
                        R = v || g;
                    i.push({
                        name: m || a++,
                        prefix: f || "",
                        delimiter: E,
                        optional: A,
                        repeat: C,
                        partial: x,
                        asterisk: !!N,
                        pattern: R ? function(e) {
                            return e.replace(/([=!:$\/()])/g, "\\$1")
                        }(R) : N ? ".*" : "[^" + l(E) + "]+?"
                    })
                }
                return s < e.length && (o += e.substr(s)), o && i.push(o), i
            }

            function s(e) {
                return encodeURI(e).replace(/[\/?#]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }

            function o(e) {
                for (var t = Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = RegExp("^(?:" + e[n].pattern + ")$"));
                return function(n, r) {
                    for (var a = "", o = n || {}, l = (r || {}).pretty ? s : encodeURIComponent, c = 0; c < e.length; c++) {
                        var u, d = e[c];
                        if ("string" == typeof d) {
                            a += d;
                            continue
                        }
                        var h = o[d.name];
                        if (null == h) {
                            if (d.optional) {
                                d.partial && (a += d.prefix);
                                continue
                            }
                            throw TypeError('Expected "' + d.name + '" to be defined')
                        }
                        if (i(h)) {
                            if (!d.repeat) throw TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                            if (0 === h.length) {
                                if (d.optional) continue;
                                throw TypeError('Expected "' + d.name + '" to not be empty')
                            }
                            for (var p = 0; p < h.length; p++) {
                                if (u = l(h[p]), !t[c].test(u)) throw TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(u) + "`");
                                a += (0 === p ? d.prefix : d.delimiter) + u
                            }
                            continue
                        }
                        if (u = d.asterisk ? encodeURI(h).replace(/[?#]/g, function(e) {
                                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                            }) : l(h), !t[c].test(u)) throw TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + u + '"');
                        a += d.prefix + u
                    }
                    return a
                }
            }

            function l(e) {
                return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function c(e, t) {
                return e.keys = t, e
            }

            function u(e) {
                return e.sensitive ? "" : "i"
            }

            function d(e, t, n) {
                !i(t) && (n = t || n, t = []);
                for (var r, a, s = (n = n || {}).strict, o = !1 !== n.end, c = "", d = 0; d < e.length; d++) {
                    var h = e[d];
                    if ("string" == typeof h) c += l(h);
                    else {
                        var p = l(h.prefix),
                            f = "(?:" + h.pattern + ")";
                        t.push(h), h.repeat && (f += "(?:" + p + f + ")*"), c += f = h.optional ? h.partial ? p + "(" + f + ")?" : "(?:" + p + "(" + f + "))?" : p + "(" + f + ")"
                    }
                }
                var m = l(n.delimiter || "/"),
                    v = c.slice(-m.length) === m;
                return !s && (c = (v ? c.slice(0, -m.length) : c) + "(?:" + m + "(?=$))?"), o ? c += "$" : c += s && v ? "" : "(?=" + m + "|$)", r = RegExp("^" + c, u(n)), a = t, r.keys = a, r
            }

            function h(e, t, n) {
                var r, s, o;
                if (!i(t) && (n = t || n, t = []), n = n || {}, e instanceof RegExp) return function(e, t) {
                    var n, i, r = e.source.match(/\((?!\?)/g);
                    if (r)
                        for (var a = 0; a < r.length; a++) t.push({
                            name: a,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null
                        });
                    return n = e, i = t, n.keys = i, n
                }(e, t);
                if (i(e)) return function(e, t, n) {
                    for (var i, r, a = [], s = 0; s < e.length; s++) a.push(h(e[s], t, n).source);
                    return i = RegExp("(?:" + a.join("|") + ")", u(n)), r = t, i.keys = r, i
                }(e, t, n);
                return r = e, s = t, d(a(r, o = n), s, o)
            }
        },
        846625: function(e, t, n) {
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            }
        },
        982951: function(e, t, n) {
            "use strict";
            var i = n("727664");

            function r() {}

            function a() {}
            a.resetWarningCache = r, e.exports = function() {
                function e(e, t, n, r, a, s) {
                    if (s !== i) {
                        var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: r
                };
                return n.PropTypes = n, n
            }
        },
        986758: function(e, t, n) {
            e.exports = n("982951")()
        },
        727664: function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        662164: function(e, t, n) {
            "use strict";
            var i = "Invariant failed";
            e.exports = function(e, t) {
                if (!e) {
                    var n;
                    throw Error(i)
                }
            }
        },
        467431: function(e, t, n) {
            "use strict";
            e.exports = n.p + "46a1c09891faef334aa3.svg"
        },
        793906: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d3c64e8280123026530.svg"
        },
        16079: function(e, t, n) {
            "use strict";
            e.exports = n.p + "281d86827cce2adcda14.svg"
        },
        369917: function(e, t, n) {
            "use strict";
            e.exports = n.p + "89274721372b43f33780.svg"
        },
        101211: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b999acf8adec647ff6a8.svg"
        },
        840727: function(e, t, n) {
            "use strict";
            e.exports = n.p + "66f49cc70d29fb6f1e7d.svg"
        },
        340430: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3b923dfa614118dc866e.svg"
        },
        342855: function(e, t, n) {
            "use strict";
            e.exports = n.p + "59a1c8c64796c0107f29.svg"
        },
        724418: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Images: function() {
                    return i
                }
            });
            let i = {
                ASSET_SOCIAL_TWITTER: n("342855"),
                ASSET_SOCIAL_FACEBOOK: n("840727"),
                ASSET_SOCIAL_INSTAGRAM: n("340430"),
                ICON_TRANSLATE: n("16079"),
                ICON_ARROW_DOWN: n("369917"),
                ASSET_LOGO_DISCORD_SVG: n("101211")
            }
        },
        147487: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n("920040"),
                a = n("773670"),
                s = n("575482"),
                o = n.n(s),
                l = n("710934"),
                c = n("620099"),
                u = n("333561"),
                d = n("147933"),
                h = n("978255"),
                p = n("434448"),
                f = n("809924"),
                m = n("753595"),
                v = n("785123");
            let g = "Footer Navigation",
                k = {
                    BLURPLE: "Blurple",
                    PRIMARY: "Primary"
                },
                N = e => [{
                    title: e.PRODUCT,
                    routes: [{
                        link: f.WebRoutes.DOWNLOAD,
                        title: e.DOWNLOAD,
                        tracking: "download"
                    }, {
                        link: f.WebRoutes.BRANDING,
                        title: e.BRANDING,
                        tracking: "branding"
                    }, {
                        link: f.WebRoutes.NITRO,
                        title: e.NITRO,
                        tracking: "nitro",
                        external: !0
                    }]
                }, {
                    title: e.DEVELOPERS,
                    routes: [{
                        link: f.WebRoutes.RICH_PRESENCE,
                        title: e.RICH_PRESENCE,
                        tracking: "rich_presence"
                    }, {
                        link: f.WebRoutes.VERIFICATION,
                        title: e.VERIFICATION,
                        tracking: "verification",
                        external: !0
                    }, {
                        link: f.Links.DEV_PORTAL_APPLICATIONS,
                        title: e.APPLICATIONS,
                        tracking: "developers",
                        external: !0
                    }, {
                        link: f.Links.DEV_PORTAL_DOCUMENTATION,
                        title: e.DOCUMENTATION,
                        tracking: "documentation",
                        external: !0
                    }]
                }, {
                    title: e.RESOURCES,
                    routes: [{
                        link: f.Links.HELP_AND_SUPPORT,
                        title: e.HELP_AND_SUPPORT,
                        tracking: "helpandsupport",
                        external: !0
                    }, {
                        link: f.WebRoutes.GUIDELINES,
                        title: e.GUIDELINES,
                        tracking: "guidelines",
                        external: !0
                    }, {
                        link: f.Links.FEEDBACK,
                        title: e.FEEDBACK,
                        tracking: "feedback",
                        external: !0
                    }, {
                        link: f.WebRoutes.TERMS,
                        title: e.TERMS,
                        tracking: "terms",
                        external: !0
                    }, {
                        link: f.WebRoutes.PRIVACY,
                        title: e.PRIVACY,
                        tracking: "privacy",
                        external: !0
                    }, {
                        link: f.WebRoutes.SECURITY,
                        title: e.SECURITY,
                        tracking: "security"
                    }, {
                        link: f.Links.STATUS,
                        title: e.STATUS,
                        tracking: "status",
                        external: !0
                    }, {
                        link: f.WebRoutes.SAFETY_LANDING,
                        title: e.SAFETY_CENTER,
                        tracking: "safetycenter",
                        external: !0
                    }]
                }, {
                    title: e.COMPANY,
                    routes: [{
                        link: f.WebRoutes.COMPANY,
                        title: e.ABOUT,
                        tracking: "about"
                    }, {
                        link: f.WebRoutes.BLOG,
                        title: e.BLOG,
                        tracking: "blog",
                        external: !0
                    }, {
                        link: f.WebRoutes.JOBS,
                        title: e.JOBS,
                        tracking: "join",
                        external: !0
                    }]
                }, {
                    title: e.MORE,
                    routes: [{
                        link: f.WebRoutes.PARTNERS,
                        title: e.PARTNERS,
                        tracking: "partners",
                        external: !0
                    }, {
                        link: f.WebRoutes.HYPESQUAD,
                        title: e.HYPESQUAD,
                        tracking: "hypesquad",
                        external: !0
                    }, {
                        link: f.Links.PRESS_INQUIRIES,
                        title: e.PRESS_INQUIRIES,
                        tracking: "pressinquiries",
                        external: !0
                    }, {
                        link: f.WebRoutes.OPEN_SOURCE,
                        title: e.OPEN_SOURCE,
                        tracking: "open_source"
                    }]
                }],
                x = e => {
                    let {
                        colorVariant: t,
                        animate: n
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: (0, d.getClass)(v, "footerBackground", t),
                        preserveAspectRatio: "none",
                        width: "1920",
                        height: "100%",
                        viewBox: "0 0 1920 330",
                        version: "1.1",
                        children: (0, r.jsx)("path", {
                            className: (0, d.getClass)(v, "footerBackground", n ? "Play" : "Paused"),
                            fill: "#1a1c1e",
                            fillOpacity: "0.3",
                            d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"
                        })
                    })
                };
            class C extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        token: c.default.getToken(),
                        isAppCompatible: u.IS_APP_COMPATIBLE_BROWSER
                    })
                }
                renderAppButton(e) {
                    if ("STATIC_RENDERER" === this.props.platform) return null;
                    let {
                        downloadLink: t,
                        isMobile: n,
                        mobileDownloadText: a,
                        platform: s,
                        variant: o,
                        authRedirectTo: l
                    } = this.props, {
                        isAppCompatible: c
                    } = this.state;
                    if (n) return (0, r.jsx)(i, {
                        eventName: "Download App",
                        data: {
                            Platform: s,
                            PTB: !1,
                            Released: !0,
                            "Referring Location": "Footer"
                        },
                        alt: "Download Discord",
                        target: "_blank",
                        className: (0, d.getClass)(v, "button", o),
                        href: t,
                        children: a
                    });
                    if (!c) return (0, r.jsx)(i, {
                        eventName: "Download App",
                        data: {
                            Platform: s,
                            PTB: !1,
                            Released: !0,
                            "Referring Location": "Footer"
                        },
                        alt: "Download Discord",
                        className: (0, d.getClass)(v, "button", o),
                        href: f.WebRoutes.DOWNLOAD,
                        children: m.default.Messages.Navigation.DOWNLOAD
                    });
                    let u = null != l ? f.AppRoutes.REGISTER_WITH_REDIRECT(l) : f.AppRoutes.REGISTER,
                        h = m.default.Messages.Common.SIGN_UP_NOW;
                    return e && (u = f.AppRoutes.ME, h = m.default.Messages.Common.OPEN_DISCORD), (0, r.jsx)(i, {
                        eventName: g,
                        className: (0, d.getClass)(v, "button", this.props.variant),
                        data: {
                            linkClicked: e ? "open" : "login",
                            googleAnalytics: !0
                        },
                        href: u,
                        children: h
                    })
                }
                render() {
                    let {
                        variant: e,
                        style: t,
                        className: a,
                        avoidRouter: s,
                        showWave: c
                    } = this.props, {
                        animateBackground: u,
                        token: h
                    } = this.state, k = N(m.default.Messages.Navigation).map(e => {
                        let t = e.routes.map((e, t) => e.external ? (0, r.jsx)(i, {
                            className: v.route,
                            eventName: g,
                            data: {
                                linkClicked: e.tracking
                            },
                            href: e.link,
                            children: e.title
                        }, e.link || t) : (0, r.jsx)(p.default, {
                            avoidRouter: s,
                            to: e.link,
                            from: "footer_navigation",
                            className: v.route,
                            children: (0, r.jsx)(i, {
                                tag: "span",
                                eventName: g,
                                data: {
                                    linkClicked: e.tracking
                                },
                                children: e.title
                            })
                        }, e.link));
                        return (0, r.jsxs)("div", {
                            className: v.navigationSection,
                            children: [(0, r.jsx)("h3", {
                                className: v.navigationHeader,
                                children: e.title
                            }), t]
                        }, e.title)
                    });
                    return (0, r.jsx)(l.VisibilitySensor, {
                        onChange: this.handleVisibility,
                        children: (0, r.jsxs)("footer", {
                            className: o((0, d.getClass)(v, "footer", e), a),
                            style: t,
                            children: [c ? (0, r.jsx)(x, {
                                colorVariant: e,
                                animate: u
                            }) : null, (0, r.jsxs)("div", {
                                className: v.footerContent,
                                children: [(0, r.jsxs)("div", {
                                    className: v.navigation,
                                    children: [(0, r.jsx)("div", {
                                        className: v.logoWrap,
                                        children: (0, r.jsx)(i, {
                                            className: v.logo,
                                            href: f.WebRoutes.INDEX,
                                            eventName: g,
                                            data: {
                                                linkClicked: "logo"
                                            },
                                            children: (0, r.jsx)("img", {
                                                alt: m.default.Messages.Navigation.HOME,
                                                src: n("467431")
                                            })
                                        })
                                    }), k]
                                }), (0, r.jsx)("div", {
                                    className: v.separator
                                }), (0, r.jsxs)("div", {
                                    className: v.joinDiscord,
                                    children: [(0, r.jsxs)("div", {
                                        className: v.stats,
                                        children: [(0, r.jsx)("h2", {
                                            className: v.readyToJoin,
                                            children: m.default.Messages.Footer.READY_TO_TRY_DISCORD
                                        }), (0, r.jsx)("h3", {
                                            className: v.joinOtherPlayers,
                                            children: m.default.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format({
                                                num: f.ROUGH_COUNT_MILLION_PLAYERS
                                            })
                                        })]
                                    }), this.renderAppButton(h)]
                                })]
                            })]
                        })
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        animateBackground: !1,
                        isMobile: null,
                        token: null,
                        isAppCompatible: !0
                    }, this.handleVisibility = e => {
                        this.setState({
                            animateBackground: e
                        })
                    }, null != e.locale && m.default.setLocale(e.locale), i = t => (0, r.jsx)(h.default, {
                        track: e.track,
                        trackOutboundLink: e.trackOutboundLink,
                        ...t
                    })
                }
            }
            C.Variants = k, C.defaultProps = {
                variant: k.PRIMARY,
                showWave: !0
            };
            var A = C
        },
        961066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("229157"),
                l = n("686839"),
                c = n("434448"),
                u = n("318393"),
                d = n("249324"),
                h = n("227281"),
                p = n("809924"),
                f = n("333561"),
                m = n("724418"),
                v = n("875143");
            let g = p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                k = () => [{
                    route: (0, o.getLocalizedLink)(p.LocalizedLinks.TWITTER),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: m.Images.ASSET_SOCIAL_TWITTER
                }, {
                    route: p.SOCIAL_LINKS.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: m.Images.ASSET_SOCIAL_FACEBOOK
                }, {
                    route: p.SOCIAL_LINKS.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: m.Images.ASSET_SOCIAL_INSTAGRAM
                }];
            class N extends r.PureComponent {
                componentDidMount() {
                    this.setState({
                        isAppCompatible: f.IS_APP_COMPATIBLE_BROWSER
                    })
                }
                render() {
                    let {
                        className: e,
                        mainContentId: t,
                        skipToContentLabel: n,
                        NavigationMessages: r,
                        onChangeLocale: a,
                        TrackClick: o,
                        avoidRouter: l
                    } = this.props;
                    return (0, i.jsxs)("header", {
                        className: s(v.header, e),
                        children: [(0, i.jsxs)("nav", {
                            className: v.headerInner,
                            children: [(0, i.jsxs)("div", {
                                className: v.headerLogo,
                                children: [(0, i.jsx)(o, {
                                    tag: "div",
                                    eventName: g,
                                    data: {
                                        linkClicked: "logo"
                                    },
                                    children: (0, i.jsx)(c.default, {
                                        avoidRouter: l,
                                        to: p.WebRoutes.INDEX,
                                        from: p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                        children: (0, i.jsx)(u.default, {})
                                    })
                                }), null != t ? (0, i.jsx)("a", {
                                    className: v.skipToContent,
                                    href: "#".concat(t),
                                    children: n
                                }) : null]
                            }), (0, i.jsx)("ul", {
                                className: v.headerNav,
                                children: (0, i.jsx)(h.default, {
                                    avoidRouter: l,
                                    TrackClick: o,
                                    styles: v,
                                    NavigationMessages: r
                                })
                            }), (0, i.jsxs)("ul", {
                                className: v.headerNavRight,
                                children: [this.renderSocialMediaNav(), (0, i.jsx)(d.default, {
                                    onChange: a
                                })]
                            })]
                        }), null != t && (0, i.jsx)("div", {
                            id: t,
                            tabIndex: -1
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isAppCompatible: !0
                    }, this.getAppButton = () => {
                        let {
                            token: e,
                            NavigationMessages: t,
                            TrackClick: n,
                            authRedirectTo: r
                        } = this.props, {
                            isAppCompatible: a
                        } = this.state, s = (0, l.getLoginPath)(r), o = t.LOGIN;
                        return null != e && (s = p.AppRoutes.ME, o = t.OPEN), a ? (0, i.jsx)("li", {
                            className: v.listItemInactive,
                            children: (0, i.jsx)(n, {
                                eventName: g,
                                className: v.appButton,
                                data: {
                                    linkClicked: e ? "open" : "login",
                                    googleAnalytics: !0
                                },
                                href: s,
                                children: o
                            })
                        }, "app-button") : null
                    }, this.renderSocialMediaNav = () => {
                        let {
                            TrackClick: e
                        } = this.props, t = k().map(t => (0, i.jsx)("li", {
                            className: s(v.listItemInactive, v.listItemSocialMedia),
                            children: (0, i.jsx)(e, {
                                eventName: g,
                                className: v.rightNavLink,
                                data: {
                                    linkClicked: t.linkClicked
                                },
                                href: t.route,
                                rel: "me",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: t.img,
                                    alt: t.alt
                                })
                            })
                        }, t.route)), n = this.getAppButton();
                        return null != n && t.push(n), t
                    }
                }
            }
            var x = N
        },
        318393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("758480"),
                s = n("873957");
            class o extends r.PureComponent {
                render() {
                    return (0, i.jsxs)(a.default, {
                        wrap: a.default.Wrap.NO_WRAP,
                        children: [(0, i.jsx)(a.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsxs)("svg", {
                                className: s.clyde,
                                viewBox: "0 0 33 36",
                                children: [(0, i.jsx)("ellipse", {
                                    cx: "19.6",
                                    cy: "17.1",
                                    rx: "1.9",
                                    ry: "2"
                                }), (0, i.jsx)("ellipse", {
                                    cx: "12.8",
                                    cy: "17.1",
                                    rx: "1.9",
                                    ry: "2"
                                }), (0, i.jsx)("path", {
                                    d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z"
                                })]
                            })
                        }), (0, i.jsx)(a.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)("svg", {
                                className: s.type,
                                viewBox: "0 0 98 36",
                                children: (0, i.jsx)("path", {
                                    d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z"
                                })
                            })
                        })]
                    })
                }
            }
        },
        393539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("986758"),
                s = n.n(a),
                o = n("462429"),
                l = n("147933"),
                c = n("434448"),
                u = n("809924"),
                d = n("212280");
            let h = u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
            class p extends r.PureComponent {
                render() {
                    let e = o.default.isActiveCreator(this.context.router),
                        {
                            isOpen: t,
                            dropdownLinks: n,
                            TrackClick: r,
                            avoidRouter: a,
                            id: s,
                            "aria-label": p
                        } = this.props,
                        f = n.map((t, n) => t.divider ? (0, i.jsx)("hr", {
                            className: d.divider
                        }, "divider-".concat(n)) : t.external ? (0, i.jsx)("li", {
                            className: d.moreListItemInactive,
                            children: (0, i.jsx)(r, {
                                className: d.moreListLink,
                                eventName: h,
                                data: {
                                    linkClicked: t.linkClicked
                                },
                                href: t.route,
                                rel: "me",
                                children: (0, i.jsx)("span", {
                                    className: d.moreListLinkCopy,
                                    children: t.title
                                })
                            })
                        }, t.route) : (0, i.jsx)("li", {
                            className: (0, l.getClass)(d, "moreListItem", e(t.route) ? "Active" : "Inactive"),
                            children: (0, i.jsx)(c.default, {
                                avoidRouter: a,
                                className: d.moreListLink,
                                to: t.route,
                                from: u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                role: "menuitem",
                                children: (0, i.jsx)(r, {
                                    tag: "span",
                                    className: d.moreListLinkCopy,
                                    eventName: h,
                                    data: {
                                        linkClicked: t.linkClicked
                                    },
                                    children: t.title
                                })
                            })
                        }, t.route));
                    return (0, i.jsx)("ul", {
                        id: s,
                        className: (0, l.getClass)(d, "moreList", t ? "Open" : "Closed"),
                        "aria-label": p,
                        children: f
                    })
                }
            }
            p.contextTypes = {
                router: s.object.isRequired
            }
        },
        249324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("758480"),
                l = n("147933"),
                c = n("724418"),
                u = n("753595"),
                d = n("157920");
            class h extends r.PureComponent {
                componentDidMount() {
                    this.callChangeLocale(u.default.getLocale())
                }
                render() {
                    let {
                        isOpen: e,
                        languages: t,
                        current: r
                    } = this.state, {
                        className: a
                    } = this.props, u = null;
                    return null != t && (u = t.sort((e, t) => e.code < t.code ? -1 : e.code > t.code ? 1 : 0).map(e => {
                        let t = function(e) {
                            try {
                                return n("933827")("../../images/flags/".concat(e, ".png").replace("../../images/flags/", "./"))
                            } catch (e) {
                                return null
                            }
                        }(e.code);
                        return null == t ? null : (0, i.jsxs)("li", {
                            className: (0, l.getClass)(d, "locale", null != r && e.code === r.code ? "Current" : null),
                            onClick: () => this.setLocale(e.code),
                            children: [(0, i.jsx)("img", {
                                className: d.localeImage,
                                src: t,
                                alt: e.name
                            }), e.name]
                        }, e.code)
                    })), (0, i.jsxs)("div", {
                        className: s(d.localePicker, a),
                        onMouseEnter: this.open,
                        onMouseLeave: this.close,
                        onClick: this.toggle,
                        children: [(0, i.jsxs)(o.default, {
                            align: o.default.Align.CENTER,
                            className: (0, l.getClass)(d, "opener", e ? "Open" : null),
                            children: [(0, i.jsx)("span", {
                                className: d.line
                            }), (0, i.jsx)("img", {
                                className: d.localeIcon,
                                src: c.Images.ICON_TRANSLATE,
                                alt: "Choose Locale"
                            }), (0, i.jsx)("img", {
                                className: d.arrowIcon,
                                src: c.Images.ICON_ARROW_DOWN,
                                alt: "Open Locale"
                            })]
                        }), (0, i.jsx)("ul", {
                            className: (0, l.getClass)(d, "localeList", e ? "Open" : "Closed"),
                            children: u
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        languages: u.default.getLanguages().filter(e => e.enabled),
                        current: u.default.getLocaleInfo(),
                        isOpen: !1
                    }, this.setLocale = e => {
                        null != u.default && (u.default.setLocale(e), this.callChangeLocale(e))
                    }, this.callChangeLocale = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null != t && t(e)
                    }, this.open = () => {
                        this.setState({
                            isOpen: !0
                        })
                    }, this.close = () => {
                        this.setState({
                            isOpen: !1
                        })
                    }, this.toggle = () => {
                        let {
                            isOpen: e
                        } = this.state;
                        this.setState({
                            isOpen: !e
                        })
                    }
                }
            }
            var p = h
        },
        227281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("462429"),
                s = n("434448"),
                o = n("213057"),
                l = n("809924"),
                c = n("753595");
            let u = l.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                d = (e, t) => [{
                    route: l.WebRoutes.DOWNLOAD,
                    linkClicked: "download",
                    title: t.DOWNLOAD
                }, {
                    route: l.WebRoutes.NITRO,
                    linkClicked: "nitro",
                    title: t.NITRO,
                    external: !0
                }, {
                    route: l.WebRoutes.JOBS,
                    linkClicked: "jobs",
                    title: t.JOBS,
                    external: !0
                }, {
                    title: t.DEVELOPERS,
                    links: [{
                        route: l.WebRoutes.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: t.RICH_PRESENCE
                    }, {
                        route: l.WebRoutes.VERIFICATION,
                        linkClicked: "verification",
                        title: t.VERIFICATION,
                        external: !0
                    }, {
                        route: l.Links.DEV_PORTAL,
                        linkClicked: "developers",
                        title: t.DEVELOPER_PORTAL,
                        external: !0
                    }, {
                        route: l.Links.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: t.DOCUMENTATION,
                        external: !0
                    }]
                }, {
                    title: t.COMMUNITY,
                    links: [{
                        route: l.WebRoutes.OPEN_SOURCE,
                        linkClicked: "open_source",
                        title: t.OPEN_SOURCE
                    }, {
                        route: l.WebRoutes.PARTNERS,
                        linkClicked: "partners",
                        title: t.PARTNERS,
                        external: !0
                    }, {
                        route: l.WebRoutes.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: t.HYPESQUAD,
                        external: !0
                    }, {
                        route: l.WebRoutes.GUIDELINES,
                        linkClicked: "guidelines",
                        title: t.GUIDELINES,
                        external: !0
                    }]
                }, {
                    title: t.SUPPORT,
                    links: [{
                        route: "//support.discordapp.com/hc/".concat(e),
                        linkClicked: "helpandsupport",
                        title: t.HELP_AND_SUPPORT,
                        external: !0
                    }, {
                        route: l.Links.STATUS,
                        linkClicked: "status",
                        title: t.STATUS,
                        external: !0
                    }, {
                        route: l.WebRoutes.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: t.SAFETY_CENTER,
                        external: !0
                    }]
                }];
            class h extends r.PureComponent {
                render() {
                    let e = a.default.isActiveCreator(this.context.router),
                        {
                            isMobile: t,
                            isVisible: n,
                            styles: r,
                            NavigationMessages: h,
                            TrackClick: p,
                            avoidRouter: f
                        } = this.props,
                        {
                            sectionShown: m
                        } = this.state,
                        v = null != c.default ? c.default.getLocale().toLowerCase() : "";
                    return d(v, h).map(a => {
                        if (null != a.links) return (0, i.jsx)(o.default, {
                            title: a.title,
                            links: a.links,
                            isOpen: m === a.title,
                            isMobile: t,
                            avoidRouter: f,
                            TrackClick: p,
                            onClose: this.closeSubNav,
                            onOpen: this.openSubNav
                        }, a.title);
                        if (a.external && null != a.route) return (0, i.jsx)("li", {
                            className: r.listItemInactive,
                            role: "none",
                            children: (0, i.jsx)(p, {
                                className: r.mainNavLink,
                                eventName: u,
                                data: a.linkClicked ? {
                                    linkClicked: a.linkClicked
                                } : {},
                                href: a.route,
                                rel: "me",
                                children: a.title
                            })
                        }, "external_link_".concat(a.route));
                        if (null != a.route) return (0, i.jsx)("li", {
                            className: e(a.route) ? r.listItemActive : r.listItemInactive,
                            role: "none",
                            children: (0, i.jsx)(s.default, {
                                avoidRouter: f,
                                to: a.route,
                                from: l.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                tabIndex: n ? 0 : -1,
                                role: "menuitem",
                                children: (0, i.jsx)(p, {
                                    tag: "span",
                                    className: r.mainNavLink,
                                    eventName: u,
                                    data: {
                                        linkClicked: a.linkClicked
                                    },
                                    children: a.title
                                })
                            })
                        }, "link_".concat(a.route));
                        return []
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sectionShown: null
                    }, this.closeSubNav = () => {
                        let {
                            sectionShown: e
                        } = this.state;
                        null !== e && this.setState({
                            sectionShown: null
                        })
                    }, this.openSubNav = e => {
                        let {
                            sectionShown: t
                        } = this.state;
                        t !== e && this.setState({
                            sectionShown: e
                        })
                    }
                }
            }
            h.defaultProps = {
                isMobile: !1,
                isVisible: !0
            }
        },
        992554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("427964"),
                l = n.n(o),
                c = n("902694"),
                u = n("434448"),
                d = n("249324"),
                h = n("227281"),
                p = n("809924"),
                f = n("724418"),
                m = n("146976");
            let v = p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
            class g extends r.PureComponent {
                componentDidMount() {
                    window.addEventListener("keydown", this.handleKeyDown)
                }
                componentWillUnmount() {
                    window.removeEventListener("keydown", this.handleKeyDown)
                }
                render() {
                    let {
                        className: e,
                        NavigationMessages: t,
                        TrackClick: n,
                        onChangeLocale: r,
                        avoidRouter: a,
                        openNavAriaLabel: o,
                        hideNavAriaLabel: l
                    } = this.props, {
                        menuOpen: g
                    } = this.state;
                    return (0, i.jsx)("header", {
                        className: s(m.header, e),
                        children: (0, i.jsxs)("nav", {
                            className: m.headerInner,
                            children: [(0, i.jsx)(n, {
                                tag: "div",
                                eventName: v,
                                className: m.headerLogo,
                                data: {
                                    linkClicked: "logo"
                                },
                                children: (0, i.jsx)(u.default, {
                                    avoidRouter: a,
                                    className: m.logoWrapper,
                                    to: p.WebRoutes.INDEX,
                                    from: p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                    children: (0, i.jsx)("img", {
                                        className: m.logo,
                                        src: f.Images.ASSET_LOGO_DISCORD_SVG,
                                        alt: "Discord",
                                        itemProp: "logo"
                                    })
                                })
                            }), (0, i.jsx)(n, {
                                tag: "div",
                                className: m.hamburgerButton,
                                eventName: v,
                                data: {
                                    linkClicked: "mobile-menu"
                                },
                                children: (0, i.jsx)(c.default, {
                                    open: g,
                                    "aria-haspopup": "true",
                                    "aria-label": g ? l : o,
                                    "aria-expanded": g,
                                    "aria-controls": this._mainNavId,
                                    onClick: this.toggleMenu
                                })
                            }), (0, i.jsxs)("ul", {
                                className: g ? m.headerNavOpen : m.headerNav,
                                children: [(0, i.jsx)(h.default, {
                                    avoidRouter: a,
                                    TrackClick: n,
                                    styles: m,
                                    isMobile: !0,
                                    isVisible: g,
                                    NavigationMessages: t
                                }), (0, i.jsx)(d.default, {
                                    onChange: r
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._mainNavId = l.uniqueId("mainNav"), this.state = {
                        menuOpen: !1
                    }, this.toggleMenu = () => {
                        this.setState({
                            menuOpen: !this.state.menuOpen
                        })
                    }, this.handleKeyDown = e => {
                        let {
                            menuOpen: t
                        } = this.state;
                        ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
                    }
                }
            }
        },
        213057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("427964"),
                s = n.n(a),
                o = n("462429"),
                l = n("434448"),
                c = n("393539"),
                u = n("809924"),
                d = n("724418"),
                h = n("297003");
            let p = u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
            class f extends r.PureComponent {
                render() {
                    let {
                        title: e,
                        links: t,
                        isOpen: n,
                        isMobile: r,
                        TrackClick: a,
                        avoidRouter: s
                    } = this.props, o = r && n ? (0, i.jsx)("ul", {
                        className: h.mobileSubMenuOpen,
                        id: this._dropdownId,
                        children: this.renderMobileSubMenu()
                    }) : null;
                    return r ? (0, i.jsxs)("li", {
                        className: h.subListHeading,
                        tabIndex: -1,
                        onClick: this.toggleMenu,
                        onKeyDown: this.handleKeyDown,
                        children: [(0, i.jsxs)("span", {
                            className: h.mobileMenuItem,
                            "aria-label": "Open ".concat(e, " Nav"),
                            "aria-expanded": n,
                            "aria-controls": this._dropdownId,
                            "aria-haspopup": "true",
                            role: "menuitem",
                            tabIndex: 0,
                            children: [e, (0, i.jsx)("img", {
                                src: d.Images.ICON_ARROW_DOWN,
                                className: h.iconArrow,
                                alt: "Open Nav"
                            })]
                        }, "more"), o]
                    }, "dropdown_".concat(e)) : (0, i.jsxs)("li", {
                        role: "none",
                        tabIndex: -1,
                        onFocus: this.openMenu,
                        onBlur: this.closeMenu,
                        onMouseEnter: this.openMenu,
                        onMouseLeave: this.closeMenu,
                        className: h.desktopSubMenuItem,
                        children: [(0, i.jsxs)("span", {
                            className: h.desktopMenuMore,
                            role: "menuitem",
                            tabIndex: 0,
                            "aria-haspopup": "true",
                            "aria-expanded": n,
                            "aria-controls": this._dropdownId,
                            children: [e, (0, i.jsx)("img", {
                                src: d.Images.ICON_ARROW_DOWN,
                                className: h.iconArrow,
                                alt: "Open Nav"
                            })]
                        }, "more"), (0, i.jsx)(c.default, {
                            id: this._dropdownId,
                            avoidRouter: s,
                            TrackClick: a,
                            isOpen: n,
                            dropdownLinks: t,
                            "aria-label": e
                        })]
                    }, "dropdown_".concat(e))
                }
                constructor(...e) {
                    super(...e), this._dropdownId = s.uniqueId("subMenuDropdown"), this.closeMenu = () => {
                        this.props.onClose()
                    }, this.openMenu = () => {
                        let {
                            title: e,
                            onOpen: t
                        } = this.props;
                        t(e)
                    }, this.toggleMenu = () => {
                        let {
                            isOpen: e,
                            title: t,
                            onOpen: n,
                            onClose: i
                        } = this.props;
                        e ? i() : n(t)
                    }, this.handleKeyDown = e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.toggleMenu())
                    }, this.renderMobileSubMenu = () => {
                        let {
                            links: e,
                            TrackClick: t,
                            avoidRouter: n
                        } = this.props, r = o.default.isActiveCreator(this.context.router);
                        return e.map(e => e.external ? (0, i.jsx)("li", {
                            className: h.subListItemInactive,
                            children: (0, i.jsx)(t, {
                                eventName: p,
                                className: h.subListItemLink,
                                data: {
                                    linkClicked: "mobile-".concat(e.linkClicked)
                                },
                                rel: "me",
                                href: e.route,
                                children: e.title
                            })
                        }, e.route) : (0, i.jsx)("li", {
                            className: r(e.route) ? h.subListItemActive : h.subListItemInactive,
                            children: (0, i.jsx)(l.default, {
                                avoidRouter: n,
                                to: e.route,
                                from: u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                children: (0, i.jsx)(t, {
                                    className: h.subListItemLink,
                                    tag: "span",
                                    eventName: p,
                                    data: {
                                        linkClicked: "mobile-".concat(e.linkClicked)
                                    },
                                    children: e.title
                                })
                            })
                        }, e.route))
                    }
                }
            }
            f.defaultProps = {
                isOpen: !1,
                isMobileMenuOpen: !1
            }
        },
        184733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("978255"),
                l = n("961066"),
                c = n("992554"),
                u = n("753595"),
                d = n("665868");
            let h = null;
            class p extends r.PureComponent {
                render() {
                    let {
                        token: e,
                        className: t,
                        onChangeLocale: n,
                        mainContentId: a,
                        mobileClassName: o,
                        avoidRouter: p,
                        authRedirectTo: f,
                        openNavAriaLabel: m,
                        hideNavAriaLabel: v,
                        skipToContentLabel: g
                    } = this.props;
                    return null == h ? null : (0, i.jsxs)(r.Fragment, {
                        children: [(0, i.jsx)(l.default, {
                            className: s(d.desktopHeader, t),
                            TrackClick: h,
                            token: e,
                            avoidRouter: p,
                            authRedirectTo: f,
                            NavigationMessages: u.default.Messages.Navigation,
                            onChangeLocale: n,
                            mainContentId: a,
                            skipToContentLabel: g
                        }), (0, i.jsx)(c.default, {
                            className: s(d.mobileHeader, o),
                            token: e,
                            avoidRouter: p,
                            TrackClick: h,
                            NavigationMessages: u.default.Messages.Navigation,
                            onChangeLocale: n,
                            openNavAriaLabel: m,
                            hideNavAriaLabel: v
                        })]
                    })
                }
                constructor(e) {
                    super(e), null != e.locale && u.default.setLocale(e.locale), h = t => (0, i.jsx)(o.default, {
                        track: e.track,
                        trackOutboundLink: e.trackOutboundLink,
                        ...t
                    })
                }
            }
        },
        492617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("716984");
            class s extends r.Component {
                componentDidUpdate(e) {
                    let {
                        props: {
                            location: t,
                            shouldScrollToTop: n
                        },
                        scrollRef: {
                            current: i
                        }
                    } = this;
                    null != i && t !== e.location && (null != n ? n(this.props) && (i.scrollTop = 0) : i.scrollTop = 0)
                }
                render() {
                    let {
                        className: e,
                        render: t
                    } = this.props;
                    return (0, i.jsx)("div", {
                        ref: this.scrollRef,
                        className: e,
                        children: t(this.scrollTo, this.getScrollTop)
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollRef = r.createRef(), this.scrollTo = e => {
                        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
                    }, this.getScrollTop = () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop
                }
            }
            var o = (0, a.withRouter)(s)
        },
        978255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040"),
                r = n("773670");
            class a extends r.PureComponent {
                render() {
                    let {
                        tag: e,
                        children: t,
                        eventName: n,
                        data: r,
                        track: a,
                        trackOutboundLink: s,
                        ...o
                    } = this.props;
                    return null == e ? null : (0, i.jsx)(e, {
                        ...o,
                        onClick: this.handleClick,
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        let {
                            eventName: t,
                            data: n,
                            href: i,
                            onClick: r,
                            trackOutboundLink: a,
                            track: s
                        } = this.props;
                        if (n.googleAnalytics && a && (null != i ? a(i) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), r && r(e), !t) return !1;
                        s(t, n)
                    }
                }
            }
            a.defaultProps = {
                tag: "a",
                data: {}
            }
        },
        434448: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("710431"),
                s = n("716984");
            class o extends r.Component {
                render() {
                    let {
                        to: e,
                        from: t,
                        isNavLink: n,
                        children: r,
                        tabIndex: a = 0,
                        role: o,
                        className: l
                    } = this.props;
                    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
                    let c = "string" == typeof e ? e : e.pathname,
                        u = "string" == typeof e ? "" : e.hash,
                        d = "string" == typeof e ? "" : e.search;
                    return n ? (0, i.jsx)(s.NavLink, {
                        className: l,
                        tabIndex: a,
                        onClick: this.handleOnClick,
                        to: {
                            pathname: c,
                            hash: u,
                            search: d,
                            state: {
                                previousLinkLocation: t
                            }
                        },
                        role: o,
                        children: r
                    }) : (0, i.jsx)(s.Link, {
                        className: l,
                        tabIndex: a,
                        onClick: this.handleOnClick,
                        to: {
                            pathname: c,
                            hash: u,
                            search: d,
                            state: {
                                previousLinkLocation: t
                            }
                        },
                        role: o,
                        children: r
                    })
                }
                constructor(...e) {
                    super(...e), this.handleOnClick = () => {
                        let {
                            to: e,
                            avoidRouter: t,
                            onClick: n,
                            history: i
                        } = this.props;
                        if (null != n) n();
                        else if (t) {
                            let t = "string" == typeof e ? (0, a.createLocation)(e, null, void 0, i.location) : e,
                                n = i.createHref(t);
                            window.location = n
                        }
                    }
                }
            }
            var l = (0, s.withRouter)(o)
        },
        758480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("992563"),
                l = n("621466");
            let c = {
                    VERTICAL: o.flexVertical,
                    HORIZONTAL: o.flexHorizontal,
                    HORIZONTAL_REVERSE: o.flexHorizontalReverse
                },
                u = {
                    START: o.flexJustifyStart,
                    END: o.flexJustifyEnd,
                    CENTER: o.flexJustifyCenter,
                    BETWEEN: o.flexJustifyBetween,
                    AROUND: o.flexJustifyAround
                },
                d = {
                    NO_WRAP: o.flexNowrap,
                    WRAP: o.flexWrap,
                    WRAP_REVERSE: o.flexWrapReverse
                },
                h = {
                    START: o.flexAlignStart,
                    END: o.flexAlignEnd,
                    CENTER: o.flexAlignCenter,
                    STRETCH: o.flexAlignStretch
                },
                p = {
                    SMALL: l.flexGutterSmall,
                    LARGE: l.flexGutterLarge
                };
            class f extends r.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        shrink: n,
                        grow: a,
                        basis: o,
                        style: c,
                        wrap: u,
                        ...d
                    } = this.props, h = {
                        style: {
                            flexGrow: a,
                            flexShrink: n,
                            flexBasis: o,
                            ...c
                        },
                        className: t === l.flexChild ? t : s(l.flexChild, t),
                        ...d
                    };
                    if (!u && "string" != typeof e && 1 === r.Children.count(e)) {
                        let n = r.Children.only(e);
                        return h.style = {
                            ...h.style,
                            ...n.props.style
                        }, h.className = s(n.props.className, t), r.cloneElement(n, h)
                    }
                    return (0, i.jsx)("div", {
                        ...h,
                        children: e
                    })
                }
            }
            f.defaultProps = {
                className: l.flexChild,
                style: {},
                wrap: !1
            };
            class m extends r.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        direction: n,
                        justify: r,
                        align: a,
                        wrap: o,
                        shrink: c,
                        grow: u,
                        basis: d,
                        style: h,
                        gutter: p,
                        ...f
                    } = this.props, m = {
                        flexShrink: c,
                        flexGrow: u,
                        flexBasis: d,
                        ...h
                    };
                    return (0, i.jsx)("div", {
                        style: m,
                        className: s(l.flex, n, r, a, o, p, t),
                        ...f,
                        children: e
                    })
                }
            }
            m.Child = f, m.Direction = c, m.Align = h, m.Justify = u, m.Wrap = d, m.Gutter = p, m.defaultProps = {
                direction: c.HORIZONTAL,
                justify: u.START,
                align: h.STRETCH,
                wrap: d.WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto",
                style: {}
            };
            var v = m
        },
        229157: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getLocalizedLink: function() {
                    return r
                }
            });
            var i = n("753595");
            let r = e => {
                let t = i.default.getLocale().toLowerCase();
                return t in e ? e[t] : e.default
            }
        },
        462429: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("290197"),
                a = n.n(r),
                s = n("872478"),
                o = n.n(s);
            i = a();
            var l = {
                transitionTo(e) {
                    i.push(e)
                },
                replaceWith(e) {
                    i.replace(e)
                },
                getHistory: () => i,
                isActiveCreator: e => t => {
                    if (null != e) return null != o(t, {
                        end: !1
                    }).exec(e.history.location.pathname)
                }
            }
        },
        147933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            });
            var i = n("800090");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                let s = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(s),
                    l = e[o];
                return null == l ? "" : l
            }
        }
    }
]);