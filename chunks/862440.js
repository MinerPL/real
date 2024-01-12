            "use strict";
            var r = s("256311"),
                i = s("14055"),
                n = s("903280"),
                c = s("979332");
            t.exports = function(t) {
                var e = i(t);
                if (!c(e) || 0 === e) return 0;
                var s = r(n(e), 4294967296);
                return 0 === s ? 0 : s
            }