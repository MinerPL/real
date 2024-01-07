            "use strict";
            var r = n("911718"),
                o = n("314970"),
                a = n("825089"),
                i = r("%TypeError%"),
                s = r("%WeakMap%", !0),
                c = r("%Map%", !0),
                l = o("WeakMap.prototype.get", !0),
                u = o("WeakMap.prototype.set", !0),
                d = o("WeakMap.prototype.has", !0),
                p = o("Map.prototype.get", !0),
                f = o("Map.prototype.set", !0),
                m = o("Map.prototype.has", !0),
                h = function(e, t) {
                    for (var n, r = e; null !== (n = r.next); r = n)
                        if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
                },
                g = function(e, t) {
                    var n = h(e, t);
                    return n && n.value
                },
                v = function(e, t, n) {
                    var r = h(e, t);
                    r ? r.value = n : e.next = {
                        key: t,
                        next: e.next,
                        value: n
                    }
                };
            e.exports = function() {
                var e, t, n, r = {
                    assert: function(e) {
                        if (!r.has(e)) throw new i("Side channel does not contain " + a(e))
                    },
                    get: function(r) {
                        if (s && r && ("object" == typeof r || "function" == typeof r)) {
                            if (e) return l(e, r)
                        } else if (c) {
                            if (t) return p(t, r)
                        } else if (n) return g(n, r)
                    },
                    has: function(r) {
                        if (s && r && ("object" == typeof r || "function" == typeof r)) {
                            if (e) return d(e, r)
                        } else if (c) {
                            if (t) return m(t, r)
                        } else if (n) return !!h(n, r);
                        return !1
                    },
                    set: function(r, o) {
                        s && r && ("object" == typeof r || "function" == typeof r) ? (!e && (e = new s), u(e, r, o)) : c ? (!t && (t = new c), f(t, r, o)) : (!n && (n = {
                            key: {},
                            next: null
                        }), v(n, r, o))
                    }
                };
                return r
            }