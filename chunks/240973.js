            "use strict";
            var i = r("390493");
            r("222007");
            var n = r("187798"),
                o = r("885795");
            if (r("923771")() || r("391938")()) {
                var a = Symbol.iterator;
                t.exports = function(t) {
                    return null != t && void 0 !== t[a] ? t[a]() : n(t) ? Array.prototype[a].call(t) : void 0
                }
            } else {
                var s = r("621792"),
                    f = r("264871"),
                    h = r("37549"),
                    c = h("%Map%", !0),
                    u = h("%Set%", !0),
                    d = r("812095"),
                    l = d("Array.prototype.push"),
                    p = d("String.prototype.charCodeAt"),
                    b = d("String.prototype.slice"),
                    m = function(t, e) {
                        if (e + 1 >= t.length) return e + 1;
                        var r = p(t, e);
                        if (r < 55296 || r > 56319) return e + 1;
                        var i = p(t, e + 1);
                        return i < 56320 || i > 57343 ? e + 1 : e + 2
                    },
                    g = function(t) {
                        var e = 0;
                        return {
                            next: function() {
                                var r, i = e >= t.length;
                                return !i && (r = t[e], e += 1), {
                                    done: i,
                                    value: r
                                }
                            }
                        }
                    },
                    y = function(t, e) {
                        if (s(t) || n(t)) return g(t);
                        if (f(t)) {
                            var r = 0;
                            return {
                                next: function() {
                                    var e = m(t, r),
                                        i = b(t, r, e);
                                    return r = e, {
                                        done: e > t.length,
                                        value: i
                                    }
                                }
                            }
                        }
                        if (e && void 0 !== t["_es6-shim iterator_"]) return t["_es6-shim iterator_"]()
                    };
                if (c || u) {
                    var v = r("354970"),
                        _ = r("527631"),
                        w = d("Map.prototype.forEach", !0),
                        M = d("Set.prototype.forEach", !0);
                    if (void 0 === i || !i.versions || !i.versions.node) {
                        var S = d("Map.prototype.iterator", !0),
                            k = d("Set.prototype.iterator", !0)
                    }
                    var x = d("Map.prototype.@@iterator", !0) || d("Map.prototype._es6-shim iterator_", !0),
                        E = d("Set.prototype.@@iterator", !0) || d("Set.prototype._es6-shim iterator_", !0),
                        A = function(t) {
                            if (v(t)) {
                                if (S) return o(S(t));
                                if (x) return x(t);
                                if (w) {
                                    var e = [];
                                    return w(t, function(t, r) {
                                        l(e, [r, t])
                                    }), g(e)
                                }
                            }
                            if (_(t)) {
                                if (k) return o(k(t));
                                if (E) return E(t);
                                if (M) {
                                    var r = [];
                                    return M(t, function(t) {
                                        l(r, t)
                                    }), g(r)
                                }
                            }
                        };
                    t.exports = function(t) {
                        return A(t) || y(t)
                    }
                } else t.exports = function(t) {
                    if (null != t) return y(t, !0)
                }
            }