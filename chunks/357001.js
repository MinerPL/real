            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("366000"),
                o = r("741221"),
                a = function(e) {
                    return (0, n.default)(function(t, r) {
                        var n = -1,
                            a = r.length,
                            i = a > 1 ? r[a - 1] : void 0,
                            u = a > 2 ? r[2] : void 0;
                        for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, u && (0, o.default)(r[0], r[1], u) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a;) {
                            var l = r[n];
                            l && e(t, l, n, i)
                        }
                        return t
                    })
                }