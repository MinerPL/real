            "use strict";
            var i = r("37549"),
                n = i("%String%"),
                o = i("%TypeError%");
            t.exports = function(t) {
                if ("symbol" == typeof t) throw new o("Cannot convert a Symbol value to a string");
                return n(t)
            }