            "use strict";
            var r = n("359882"),
                a = n("338867"),
                o = n("490653"),
                i = n("605357"),
                l = n("632336"),
                u = n("203854"),
                s = Function,
                c = r([].concat),
                d = r([].join),
                f = {},
                p = function(e, t, n) {
                    if (!i(f, t)) {
                        for (var r = [], a = 0; a < t; a++) r[a] = "a[" + a + "]";
                        f[t] = s("C,a", "return new C(" + d(r, ",") + ")")
                    }
                    return f[t](e, n)
                };
            e.exports = u ? s.bind : function(e) {
                var t = a(this),
                    n = t.prototype,
                    r = l(arguments, 1),
                    i = function() {
                        var n = c(r, l(arguments));
                        return this instanceof i ? p(t, n.length, n) : t.apply(e, n)
                    };
                return o(n) && (i.prototype = n), i
            }