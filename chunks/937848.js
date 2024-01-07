            "use strict";
            var r = n("303061"),
                a = n("104002"),
                o = Array.prototype;
            e.exports = function(e) {
                var t = e.reduce;
                return e === o || r(o, e) && t === o.reduce ? a : t
            }