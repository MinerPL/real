            "use strict";
            var e = n("503486"),
                o = n("17758"),
                i = n("59393"),
                u = n("319778"),
                c = n("722606"),
                s = n("22147"),
                Symbol = e.Symbol,
                f = o("wks"),
                a = s ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || u;
            t.exports = function(t) {
                return !i(f, t) && (f[t] = c && i(Symbol, t) ? Symbol[t] : a("Symbol." + t)), f[t]
            }