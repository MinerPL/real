            "use strict";
            var r = n("610679"),
                a = function() {
                    try {
                        return !!Object.defineProperty({}, "a", {})
                    } catch (e) {
                        return !1
                    }
                }();
            a || Object.prototype.__defineGetter__;
            var o = a ? Object.defineProperty : function(e, t, n) {
                    "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!r.hop.call(e, t) || "value" in n) && (e[t] = n.value)
                },
                i = Object.create || function(e, t) {
                    var n, a;

                    function i() {}
                    for (a in i.prototype = e, n = new i, t) r.hop.call(t, a) && o(n, a, t[a]);
                    return n
                };
            t.defineProperty = o, t.objCreate = i