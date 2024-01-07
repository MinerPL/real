            "use strict";
            var r = n("303061"),
                a = n("558319"),
                o = Function.prototype;
            e.exports = function(e) {
                var t = e.bind;
                return e === o || r(o, e) && t === o.bind ? a : t
            }