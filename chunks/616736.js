            "use strict";
            var e = n("574756"),
                o = n("268540"),
                i = n("303061"),
                u = n("718110"),
                s = Object;
            t.exports = u ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                var r = e("Symbol");
                return o(r) && i(r.prototype, s(t))
            }