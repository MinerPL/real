            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("386242"),
                a = n("559610");

            function o(e) {
                (0, a.default)(1, arguments);
                var t = (0, r.default)(e),
                    n = t.getTime();
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                var o = t.getTime();
                return Math.floor((n - o) / 864e5) + 1
            }