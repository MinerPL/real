            "use strict";
            var e = n("64980"),
                o = n("664144"),
                i = n("125359"),
                u = n("59393"),
                c = n("814026"),
                s = n("611769").CONFIGURABLE,
                f = n("602178"),
                a = n("515011"),
                p = a.enforce,
                l = a.get,
                v = String,
                y = Object.defineProperty,
                b = e("".slice),
                h = e("".replace),
                g = e([].join),
                x = c && !o(function() {
                    return 8 !== y(function() {}, "length", {
                        value: 8
                    }).length
                }),
                m = String(String).split("String"),
                d = t.exports = function(t, r, n) {
                    "Symbol(" === b(v(r), 0, 7) && (r = "[" + h(v(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (r = "get " + r), n && n.setter && (r = "set " + r), (!u(t, "name") || s && t.name !== r) && (c ? y(t, "name", {
                        value: r,
                        configurable: !0
                    }) : t.name = r), x && n && u(n, "arity") && t.length !== n.arity && y(t, "length", {
                        value: n.arity
                    });
                    try {
                        n && u(n, "constructor") && n.constructor ? c && y(t, "prototype", {
                            writable: !1
                        }) : t.prototype && (t.prototype = void 0)
                    } catch (t) {}
                    var e = p(t);
                    return !u(e, "source") && (e.source = g(m, "string" == typeof r ? r : "")), t
                };
            Function.prototype.toString = d(function() {
                return i(this) && l(this).source || f(this)
            }, "toString")