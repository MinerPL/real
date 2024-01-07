            "use strict";
            var r = n("303061"),
                a = n("393165"),
                o = n("961670"),
                i = Array.prototype,
                l = String.prototype;
            e.exports = function(e) {
                var t = e.includes;
                return e === i || r(i, e) && t === i.includes ? a : "string" == typeof e || e === l || r(l, e) && t === l.includes ? o : t
            }