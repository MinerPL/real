            "use strict";
            var e = n("859514"),
                i = n("503486"),
                o = n("434978"),
                u = n("16447"),
                a = n("541368").f,
                f = n("59393"),
                c = n("88052"),
                s = n("688358"),
                l = n("391358"),
                h = n("60683"),
                p = n("350142"),
                v = n("814026"),
                g = n("140925"),
                d = "DOMException",
                Error = o("Error"),
                y = o(d),
                b = function() {
                    c(this, m);
                    var t = arguments.length,
                        r = l(t < 1 ? void 0 : arguments[0]),
                        n = l(t < 2 ? void 0 : arguments[1], "Error"),
                        e = new y(r, n),
                        i = Error(r);
                    return i.name = d, a(e, "stack", u(1, p(i.stack, 1))), s(e, this, b), e
                },
                m = b.prototype = y.prototype,
                _ = "stack" in Error(d),
                w = "stack" in new y(1, 2),
                k = y && v && Object.getOwnPropertyDescriptor(i, d),
                E = !!k && !(k.writable && k.configurable),
                R = _ && !E && !w;
            e({
                global: !0,
                constructor: !0,
                forced: g || R
            }, {
                DOMException: R ? b : y
            });
            var x = o(d),
                A = x.prototype;
            if (A.constructor !== x) {
                for (var S in !g && a(A, "constructor", u(1, x)), h)
                    if (f(h, S)) {
                        var M = h[S],
                            O = M.s;
                        !f(x, O) && a(x, O, u(6, M.c))
                    }
            }