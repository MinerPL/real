            "use strict";
            var e = n("814026"),
                i = n("64980"),
                o = n("868822"),
                u = n("664144"),
                a = n("172479"),
                f = n("493399"),
                c = n("202463"),
                s = n("116180"),
                l = n("949580"),
                h = Object.assign,
                p = Object.defineProperty,
                v = i([].concat);
            t.exports = !h || u(function() {
                if (e && 1 !== h({
                        b: 1
                    }, h(p({}, "a", {
                        enumerable: !0,
                        get: function() {
                            p(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                var t = {},
                    r = {},
                    n = Symbol("assign detection"),
                    i = "abcdefghijklmnopqrst";
                return t[n] = 7, i.split("").forEach(function(t) {
                    r[t] = t
                }), 7 !== h({}, t)[n] || a(h({}, r)).join("") !== i
            }) ? function(t, r) {
                for (var n = s(t), i = arguments.length, u = 1, h = f.f, p = c.f; i > u;) {
                    for (var g, d = l(arguments[u++]), y = h ? v(a(d), h(d)) : a(d), b = y.length, m = 0; b > m;) g = y[m++], (!e || o(p, d, g)) && (n[g] = d[g])
                }
                return n
            } : h