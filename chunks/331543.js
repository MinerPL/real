            "use strict";
            r("854508"), r("70102");
            var i = r("464510"),
                n = r("765379"),
                o = r("667769"),
                a = r("640107"),
                s = r("554741"),
                f = r("903389"),
                h = r("862440"),
                c = r("338100"),
                u = r("955006"),
                d = r("812095"),
                l = r("264871"),
                p = Object("a"),
                b = "a" !== p[0] || !(0 in p),
                m = d("String.prototype.split");
            t.exports = function(t) {
                var e, r = c(this),
                    d = h((b && l(r) ? m(r, "") : r).length);
                if (!f(t)) throw TypeError("Array.prototype.map callback must be a function");
                arguments.length > 1 && (e = arguments[1]);
                for (var p = i(r, d), g = 0; g < d;) {
                    var y = u(g);
                    if (s(r, y)) {
                        var v = n(t, e, [a(r, y), g, r]);
                        o(p, y, v)
                    }
                    g += 1
                }
                return p
            }