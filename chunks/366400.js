            "use strict";
            var i = r("105195"),
                n = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                o = Object.prototype.toString,
                a = Array.prototype.concat,
                s = r("67064"),
                f = r("407611")(),
                h = function(t, e, r, i) {
                    if (e in t) {
                        if (!0 === i) {
                            if (t[e] === r) return
                        } else {
                            var n;
                            if (!("function" == typeof(n = i) && "[object Function]" === o.call(n)) || !i()) return
                        }
                    }
                    f ? s(t, e, r, !0) : s(t, e, r)
                },
                c = function(t, e) {
                    var r = arguments.length > 2 ? arguments[2] : {},
                        o = i(e);
                    n && (o = a.call(o, Object.getOwnPropertySymbols(e)));
                    for (var s = 0; s < o.length; s += 1) h(t, o[s], e[o[s]], r[o[s]])
                };
            c.supportsDescriptors = !!f, t.exports = c