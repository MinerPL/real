            "use strict";
            var e = n("289275"),
                o = n("363964"),
                i = n("605357"),
                u = n("202891"),
                s = n("162208"),
                c = n("718110"),
                Symbol = e.Symbol,
                f = o("wks"),
                a = c ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || u;
            t.exports = function(t) {
                return !i(f, t) && (f[t] = s && i(Symbol, t) ? Symbol[t] : a("Symbol." + t)), f[t]
            }