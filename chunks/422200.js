            "use strict";
            var n = r("124852"),
                o = r("505713"),
                i = r("381250"),
                c = r("515011"),
                u = r("541368").f,
                s = r("891024"),
                a = r("766739"),
                f = r("140925"),
                p = r("814026"),
                l = "Array Iterator",
                y = c.set,
                v = c.getterFor(l);
            t.exports = s(Array, "Array", function(t, e) {
                y(this, {
                    type: l,
                    target: n(t),
                    index: 0,
                    kind: e
                })
            }, function() {
                var t = v(this),
                    e = t.target,
                    r = t.kind,
                    n = t.index++;
                if (!e || n >= e.length) return t.target = void 0, a(void 0, !0);
                switch (r) {
                    case "keys":
                        return a(n, !1);
                    case "values":
                        return a(e[n], !1)
                }
                return a([n, e[n]], !1)
            }, "values");
            var h = i.Arguments = i.Array;
            if (o("keys"), o("values"), o("entries"), !f && p && "values" !== h.name) try {
                u(h, "name", {
                    value: "values"
                })
            } catch (t) {}