            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("567703"),
                a = n("386242"),
                o = n("559610");

            function i(e, t) {
                (0, o.default)(2, arguments);
                var n = (0, a.default)(e),
                    i = (0, r.default)(t);
                return isNaN(i) ? new Date(NaN) : i ? (n.setDate(n.getDate() + i), n) : n
            }