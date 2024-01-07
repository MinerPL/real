            "use strict";
            var e = n("268540"),
                o = n("309084"),
                i = o.all;
            t.exports = o.IS_HTMLDDA ? function(t) {
                return "object" == typeof t ? null !== t : e(t) || t === i
            } : function(t) {
                return "object" == typeof t ? null !== t : e(t)
            }