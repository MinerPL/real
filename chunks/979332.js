            "use strict";
            var i = r("303571");
            t.exports = function(t) {
                return ("number" == typeof t || "bigint" == typeof t) && !i(t) && t !== 1 / 0 && t !== -1 / 0
            }