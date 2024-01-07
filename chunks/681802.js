                "use strict";
                var e = r("53786"),
                    o = r("125359"),
                    u = r("745795"),
                    i = r("174669")("toStringTag"),
                    c = Object,
                    f = "Arguments" === u(function() {
                        return arguments
                    }()),
                    s = function(t, n) {
                        try {
                            return t[n]
                        } catch (t) {}
                    };
                t.exports = e ? u : function(t) {
                    var n, r, e;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = s(n = c(t), i)) ? r : f ? u(n) : "Object" === (e = u(n)) && o(n.callee) ? "Arguments" : e
                }