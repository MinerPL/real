            "use strict";
            var e = n("948937"),
                o = n("756579"),
                i = n("884643"),
                u = Array,
                s = Math.max;
            t.exports = function(t, r, n) {
                for (var c = o(t), f = e(r, c), a = e(void 0 === n ? c : n, c), p = u(s(a - f, 0)), v = 0; f < a; f++, v++) i(p, v, t[f]);
                return p.length = v, p
            }