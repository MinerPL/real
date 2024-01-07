            "use strict";
            var i = r("243636");
            t.exports = function(t) {
                return "symbol" == typeof t ? "Symbol" : "bigint" == typeof t ? "BigInt" : i(t)
            }