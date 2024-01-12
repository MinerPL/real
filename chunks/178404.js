            "use strict";
            var r = s("865435"),
                i = Math.floor;
            t.exports = function(t) {
                return "BigInt" === r(t) ? t : i(t)
            }