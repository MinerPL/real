            "use strict";
            var e = n("53786"),
                i = n("125359"),
                u = n("745795"),
                o = n("174669")("toStringTag"),
                c = Object,
                a = "Arguments" === u(function() {
                    return arguments
                }()),
                s = function(t, r) {
                    try {
                        return t[r]
                    } catch (t) {}
                };
            t.exports = e ? u : function(t) {
                var r, n, e;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(r = c(t), o)) ? n : a ? u(r) : "Object" === (e = u(r)) && i(r.callee) ? "Arguments" : e
            }