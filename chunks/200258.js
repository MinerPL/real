            "use strict";
            var e, o, i, u = n("519594"),
                s = n("289275"),
                c = n("490653"),
                f = n("651696"),
                a = n("605357"),
                p = n("345709"),
                v = n("94121"),
                l = n("264327"),
                y = "Object already initialized",
                TypeError = s.TypeError,
                WeakMap = s.WeakMap;
            if (u || p.state) {
                var h = p.state || (p.state = new WeakMap);
                h.get = h.get, h.has = h.has, h.set = h.set, e = function(t, r) {
                    if (h.has(t)) throw new TypeError(y);
                    return r.facade = t, h.set(t, r), r
                }, o = function(t) {
                    return h.get(t) || {}
                }, i = function(t) {
                    return h.has(t)
                }
            } else {
                var x = v("state");
                l[x] = !0, e = function(t, r) {
                    if (a(t, x)) throw new TypeError(y);
                    return r.facade = t, f(t, x, r), r
                }, o = function(t) {
                    return a(t, x) ? t[x] : {}
                }, i = function(t) {
                    return a(t, x)
                }
            }
            t.exports = {
                set: e,
                get: o,
                has: i,
                enforce: function(t) {
                    return i(t) ? o(t) : e(t, {})
                },
                getterFor: function(t) {
                    return function(r) {
                        var n;
                        if (!c(r) || (n = o(r)).type !== t) throw new TypeError("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }