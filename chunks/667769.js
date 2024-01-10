            "use strict";
            var i = r("37549")("%TypeError%"),
                n = r("969035"),
                o = r("300344"),
                a = r("865435");
            t.exports = function(t, e, r) {
                if ("Object" !== a(t)) throw new i("Assertion failed: Type(O) is not Object");
                if (!o(e)) throw new i("Assertion failed: IsPropertyKey(P) is not true");
                if (!n(t, e, r)) throw new i("unable to create data property")
            }