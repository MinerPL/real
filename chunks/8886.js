            "use strict";
            var r = n("761300"),
                a = n("338867"),
                o = n("268540"),
                i = n("735320"),
                l = TypeError;
            e.exports = function(e, t) {
                var n, u = i(this),
                    s = a(u.get),
                    c = a(u.has),
                    d = a(u.set),
                    f = arguments.length > 2 ? arguments[2] : void 0;
                if (!o(t) && !o(f)) throw new l("At least one callback required");
                return r(c, u, e) ? (n = r(s, u, e), o(t) && r(d, u, e, n = t(n))) : o(f) && r(d, u, e, n = f()), n
            }