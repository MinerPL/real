            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("178275"),
                o = Math.max,
                a = function(e, t, r) {
                    return t = o(void 0 === t ? e.length - 1 : t, 0),
                        function() {
                            for (var a = arguments, i = -1, u = o(a.length - t, 0), l = Array(u); ++i < u;) l[i] = a[t + i];
                            i = -1;
                            for (var c = Array(t + 1); ++i < t;) c[i] = a[i];
                            return c[t] = r(l), (0, n.default)(e, this, c)
                        }
                }