            "use strict";
            var i = r("37549"),
                n = i("%Math.abs%"),
                o = i("%Math.floor%"),
                a = r("303571"),
                s = r("979332");
            t.exports = function(t) {
                if ("number" != typeof t || a(t) || !s(t)) return !1;
                var e = n(t);
                return o(e) === e
            }