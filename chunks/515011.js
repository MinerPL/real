            "use strict";
            var e, o, i, u = n("227452"),
                c = n("503486"),
                s = n("472960"),
                f = n("366483"),
                a = n("59393"),
                p = n("768497"),
                l = n("285425"),
                v = n("241818"),
                y = "Object already initialized",
                TypeError = c.TypeError,
                WeakMap = c.WeakMap;
            if (u || p.state) {
                var b = p.state || (p.state = new WeakMap);
                b.get = b.get, b.has = b.has, b.set = b.set, e = function(t, r) {
                    if (b.has(t)) throw TypeError(y);
                    return r.facade = t, b.set(t, r), r
                }, o = function(t) {
                    return b.get(t) || {}
                }, i = function(t) {
                    return b.has(t)
                }
            } else {
                var h = l("state");
                v[h] = !0, e = function(t, r) {
                    if (a(t, h)) throw TypeError(y);
                    return r.facade = t, f(t, h, r), r
                }, o = function(t) {
                    return a(t, h) ? t[h] : {}
                }, i = function(t) {
                    return a(t, h)
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
                        if (!s(r) || (n = o(r)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }