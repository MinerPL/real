            "use strict";
            var e = n("150145"),
                o = n("958260").f,
                i = n("651696"),
                u = n("605357"),
                s = n("994835"),
                c = n("355817")("toStringTag");
            t.exports = function(t, r, n, f) {
                var a = n ? t : t && t.prototype;
                a && (!u(a, c) && o(a, c, {
                    configurable: !0,
                    value: r
                }), f && !e && i(a, "toString", s))
            }