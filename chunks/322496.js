            "use strict";
            var e = n("761300"),
                o = n("338867"),
                i = n("735320"),
                u = n("245255"),
                s = n("562920"),
                c = TypeError;
            t.exports = function(t, r) {
                var n = arguments.length < 2 ? s(t) : r;
                if (o(n)) return i(e(n, t));
                throw new c(u(t) + " is not iterable")
            }