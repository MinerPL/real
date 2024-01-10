            "use strict";
            var i = r("37549"),
                n = i("%TypeError%"),
                o = i("%Number%"),
                a = r("121638"),
                s = r("732496"),
                f = r("534316");
            t.exports = function(t) {
                var e = a(t) ? t : s(t, o);
                if ("symbol" == typeof e) throw new n("Cannot convert a Symbol value to a number");
                if ("bigint" == typeof e) throw new n("Conversion from 'BigInt' to 'number' is not allowed.");
                return "string" == typeof e ? f(e) : o(e)
            }