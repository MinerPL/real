            "use strict";
            var e = n("680486").charAt,
                o = n("723786"),
                i = n("200258"),
                u = n("931520"),
                s = n("10241"),
                c = "String Iterator",
                f = i.set,
                a = i.getterFor(c);
            u(String, "String", function(t) {
                f(this, {
                    type: c,
                    string: o(t),
                    index: 0
                })
            }, function() {
                var t, r = a(this),
                    n = r.string,
                    o = r.index;
                return o >= n.length ? s(void 0, !0) : (t = e(n, o), r.index += t.length, s(t, !1))
            })