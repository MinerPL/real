            "use strict";
            var e = n("868822"),
                o = n("472960"),
                i = n("44338"),
                u = n("47361"),
                c = n("20957"),
                s = n("174669"),
                f = TypeError,
                a = s("toPrimitive");
            t.exports = function(t, r) {
                if (!o(t) || i(t)) return t;
                var n, s = u(t, a);
                if (s) {
                    if (void 0 === r && (r = "default"), !o(n = e(s, t, r)) || i(n)) return n;
                    throw f("Can't convert object to primitive value")
                }
                return void 0 === r && (r = "number"), c(t, r)
            }