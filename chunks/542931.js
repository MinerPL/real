            "use strict";
            var e = n("362776"),
                o = n("761300"),
                i = n("581887"),
                u = n("430575"),
                s = n("201667"),
                c = n("837185"),
                f = n("756579"),
                a = n("884643"),
                p = n("322496"),
                v = n("562920"),
                l = Array;
            t.exports = function(t) {
                var r, n, y, h, x, d, g = i(t),
                    b = c(this),
                    m = arguments.length,
                    S = m > 1 ? arguments[1] : void 0,
                    w = void 0 !== S;
                w && (S = e(S, m > 2 ? arguments[2] : void 0));
                var O = v(g),
                    j = 0;
                if (O && !(this === l && s(O)))
                    for (x = (h = p(g, O)).next, n = b ? new this : []; !(y = o(x, h)).done; j++) d = w ? u(h, S, [y.value, j], !0) : y.value, a(n, j, d);
                else
                    for (r = f(g), n = b ? new this(r) : l(r); r > j; j++) d = w ? S(g[j], j) : g[j], a(n, j, d);
                return n.length = j, n
            }