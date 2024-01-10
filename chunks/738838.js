            "use strict";
            var i = r("366400"),
                n = r("648352"),
                o = r("812095"),
                a = r("331543"),
                s = r("16662"),
                f = s(),
                h = r("60426"),
                c = o("Array.prototype.slice"),
                u = function(t, e) {
                    return n(t), f.apply(t, c(arguments, 1))
                };
            i(u, {
                getPolyfill: s,
                implementation: a,
                shim: h
            }), t.exports = u