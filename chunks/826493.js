            "use strict";
            var n = r("808598"),
                i = /\./,
                o = /\|\|/,
                a = /\s+\-\s+/,
                u = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
                s = /^(\d*)(.*)/;

            function c(t, e) {
                if ("" === (t = t.trim())) return !0;
                var r = e.split(i),
                    n = p(t),
                    o = n.modifier,
                    a = n.rangeComponents;
                switch (o) {
                    case "<":
                        return function(t, e) {
                            return -1 === v(t, e)
                        }(r, a);
                    case "<=":
                        return function(t, e) {
                            var r = v(t, e);
                            return -1 === r || 0 === r
                        }(r, a);
                    case ">=":
                        return f(r, a);
                    case ">":
                        return function(t, e) {
                            return 1 === v(t, e)
                        }(r, a);
                    case "~":
                    case "~>":
                        return function(t, e) {
                            var r = e.slice(),
                                n = e.slice();
                            n.length > 1 && n.pop();
                            var i = n.length - 1,
                                o = parseInt(n[i], 10);
                            return h(o) && (n[i] = o + 1 + ""), f(t, r) && -1 === v(t, n)
                        }(r, a);
                    default:
                        return function(t, e) {
                            return 0 === v(t, e)
                        }(r, a)
                }
            }

            function l(t, e) {
                return -1 === v(t, e)
            }

            function f(t, e) {
                var r = v(t, e);
                return 1 === r || 0 === r
            }

            function p(t) {
                var e = t.split(i),
                    r = e[0].match(u);
                return r || n(!1), {
                    modifier: r[1],
                    rangeComponents: [r[2]].concat(e.slice(1))
                }
            }

            function h(t) {
                return !isNaN(t) && isFinite(t)
            }

            function d(t) {
                return !p(t).modifier
            }

            function g(t, e) {
                for (var r = t.length; r < e; r++) t[r] = "0"
            }

            function y(t, e) {
                return (typeof t != typeof e && n(!1), t > e) ? 1 : t < e ? -1 : 0
            }

            function v(t, e) {
                for (var r = function(t, e) {
                        t = t.slice(), g(t, (e = e.slice()).length);
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r].match(/^[x*]$/i);
                            if (n && (e[r] = t[r] = "0", "*" === n[0] && r === e.length - 1))
                                for (var i = r; i < t.length; i++) t[i] = "0"
                        }
                        return g(e, t.length), [t, e]
                    }(t, e), n = r[0], i = r[1], o = 0; o < i.length; o++) {
                    var a = function(t, e) {
                        var r = t.match(s)[1],
                            n = e.match(s)[1],
                            i = parseInt(r, 10),
                            o = parseInt(n, 10);
                        return h(i) && h(o) && i !== o ? y(i, o) : y(t, e)
                    }(n[o], i[o]);
                    if (a) return a
                }
                return 0
            }
            var m = {
                contains: function(t, e) {
                    var r, i, u;
                    return r = t.trim(), i = e.trim(), (u = r.split(o)).length > 1 ? u.some(function(t) {
                        return m.contains(t, i)
                    }) : function(t, e) {
                        var r = t.split(a);
                        if (r.length > 0 && r.length <= 2 || n(!1), 1 === r.length) return c(r[0], e);
                        var i = r[0],
                            o = r[1];
                        return d(i) && d(o) || n(!1), c(">=" + i, e) && c("<=" + o, e)
                    }(r = u[0].trim(), i)
                }
            };
            t.exports = m