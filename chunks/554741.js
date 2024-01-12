            "use strict";
            var r = s("37549")("%TypeError%"),
                i = s("300344"),
                n = s("865435");
            t.exports = function(t, e) {
                if ("Object" !== n(t)) throw new r("Assertion failed: `O` must be an Object");
                if (!i(e)) throw new r("Assertion failed: `P` must be a Property Key");
                return e in t
            }