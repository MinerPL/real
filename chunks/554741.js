            "use strict";
            var i = r("37549")("%TypeError%"),
                n = r("300344"),
                o = r("865435");
            t.exports = function(t, e) {
                if ("Object" !== o(t)) throw new i("Assertion failed: `O` must be an Object");
                if (!n(e)) throw new i("Assertion failed: `P` must be a Property Key");
                return e in t
            }