            "use strict";
            var e = n("814026"),
                o = n("946480"),
                i = n("731024"),
                u = n("418855"),
                c = n("179695"),
                s = TypeError,
                f = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                p = "enumerable",
                l = "configurable",
                v = "writable";
            r.f = e ? i ? function(t, r, n) {
                if (u(t), r = c(r), u(n), "function" == typeof t && "prototype" === r && "value" in n && v in n && !n[v]) {
                    var e = a(t, r);
                    e && e[v] && (t[r] = n.value, n = {
                        configurable: l in n ? n[l] : e[l],
                        enumerable: p in n ? n[p] : e[p],
                        writable: !1
                    })
                }
                return f(t, r, n)
            } : f : function(t, r, n) {
                if (u(t), r = c(r), u(n), o) try {
                    return f(t, r, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw s("Accessors not supported");
                return "value" in n && (t[r] = n.value), t
            }