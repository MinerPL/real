            "use strict";
            var e = n("714919"),
                o = n("234779"),
                i = n("837185"),
                u = n("490653"),
                s = n("948937"),
                c = n("756579"),
                f = n("979095"),
                a = n("884643"),
                p = n("355817"),
                v = n("487695"),
                l = n("632336"),
                y = v("slice"),
                h = p("species"),
                x = Array,
                d = Math.max;
            e({
                target: "Array",
                proto: !0,
                forced: !y
            }, {
                slice: function(t, r) {
                    var n, e, p, v = f(this),
                        y = c(v),
                        g = s(t, y),
                        b = s(void 0 === r ? y : r, y);
                    if (o(v) && (i(n = v.constructor) && (n === x || o(n.prototype)) ? n = void 0 : u(n) && null === (n = n[h]) && (n = void 0), n === x || void 0 === n)) return l(v, g, b);
                    for (p = 0, e = new(void 0 === n ? x : n)(d(b - g, 0)); g < b; g++, p++) g in v && a(e, p, v[g]);
                    return e.length = p, e
                }
            })