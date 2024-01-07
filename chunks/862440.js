            "use strict";
            var i = r("256311"),
                n = r("14055"),
                o = r("903280"),
                a = r("979332");
            t.exports = function(t) {
                var e = n(t);
                if (!a(e) || 0 === e) return 0;
                var r = i(o(e), 4294967296);
                return 0 === r ? 0 : r
            }