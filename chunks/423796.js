            "use strict";
            var r = n("714919"),
                a = n("303061"),
                o = n("694628"),
                i = n("408356"),
                l = n("27259"),
                u = n("321956"),
                s = n("651696"),
                c = n("633050"),
                d = n("830474"),
                f = n("234760"),
                p = n("130170"),
                h = n("976077"),
                m = n("355817")("toStringTag"),
                y = Error,
                v = [].push,
                g = function(e, t) {
                    var n, r = a(b, this);
                    i ? n = i(new y, r ? o(this) : b) : s(n = r ? this : u(b), m, "Error"), void 0 !== t && s(n, "message", h(t)), f(n, g, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
                    var l = [];
                    return p(e, v, {
                        that: l
                    }), s(n, "errors", l), n
                };
            i ? i(g, y) : l(g, y, {
                name: !0
            });
            var b = g.prototype = u(y.prototype, {
                constructor: c(1, g),
                message: c(1, ""),
                name: c(1, "AggregateError")
            });
            r({
                global: !0,
                constructor: !0,
                arity: 2
            }, {
                AggregateError: g
            })