            "use strict";
            var r = s("105195"),
                i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                n = Object.prototype.toString,
                c = Array.prototype.concat,
                o = s("67064"),
                f = s("407611")(),
                u = function(t, e, s, r) {
                    if (e in t) {
                        if (!0 === r) {
                            if (t[e] === s) return
                        } else {
                            var i;
                            if (!("function" == typeof(i = r) && "[object Function]" === n.call(i)) || !r()) return
                        }
                    }
                    f ? o(t, e, s, !0) : o(t, e, s)
                },
                a = function(t, e) {
                    var s = arguments.length > 2 ? arguments[2] : {},
                        n = r(e);
                    i && (n = c.call(n, Object.getOwnPropertySymbols(e)));
                    for (var o = 0; o < n.length; o += 1) u(t, n[o], e[n[o]], s[n[o]])
                };
            a.supportsDescriptors = !!f, t.exports = a