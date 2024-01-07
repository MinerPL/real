            "use strict";
            var i = r("37549"),
                n = r("178404"),
                o = i("%TypeError%");
            t.exports = function(t) {
                if ("number" != typeof t && "bigint" != typeof t) throw new o("argument must be a Number or a BigInt");
                var e = t < 0 ? -n(-t) : n(t);
                return 0 === e ? 0 : e
            }