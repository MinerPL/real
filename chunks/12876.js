            "use strict";
            n.r(e), n.d(e, {
                createInterpolator: function() {
                    return o
                }
            });
            var r = n("397968"),
                i = n("73392"),
                o = function(t, e, n) {
                    if (i.is.fun(t)) return t;
                    if (i.is.arr(t)) return o({
                        range: t,
                        output: e,
                        extrapolate: n
                    });
                    if (i.is.str(t.output[0])) return r.createStringInterpolator(t);
                    var a = t.output,
                        u = t.range || [0, 1],
                        s = t.extrapolateLeft || t.extrapolate || "extend",
                        c = t.extrapolateRight || t.extrapolate || "extend",
                        l = t.easing || function(t) {
                            return t
                        };
                    return function(e) {
                        var n = function(t, e) {
                            for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                            return n - 1
                        }(e, u);
                        return function(t, e, n, r, i, o, a, u, s) {
                            var c = s ? s(t) : t;
                            if (c < e) {
                                if ("identity" === a) return c;
                                "clamp" === a && (c = e)
                            }
                            if (c > n) {
                                if ("identity" === u) return c;
                                "clamp" === u && (c = n)
                            }
                            return r === i ? r : e === n ? t <= e ? r : i : (e === -1 / 0 ? c = -c : n === 1 / 0 ? c -= e : c = (c - e) / (n - e), c = o(c), r === -1 / 0 ? c = -c : i === 1 / 0 ? c += r : c = c * (i - r) + r, c)
                        }(e, u[n], u[n + 1], a[n], a[n + 1], l, s, c, t.map)
                    }
                }