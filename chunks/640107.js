            "use strict";
            var r = s("37549")("%TypeError%"),
                i = s("897804"),
                n = s("300344"),
                c = s("865435");
            t.exports = function(t, e) {
                if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
                if (!n(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + i(e));
                return t[e]
            }