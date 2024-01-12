            "use strict";
            var r = s("37549"),
                i = s("178404"),
                n = r("%TypeError%");
            t.exports = function(t) {
                if ("number" != typeof t && "bigint" != typeof t) throw new n("argument must be a Number or a BigInt");
                var e = t < 0 ? -i(-t) : i(t);
                return 0 === e ? 0 : e
            }