            "use strict";
            var r = s("37549")("%TypeError%"),
                i = s("969035"),
                n = s("300344"),
                c = s("865435");
            t.exports = function(t, e, s) {
                if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
                if (!n(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
                if (!i(t, e, s)) throw new r("unable to create data property")
            }