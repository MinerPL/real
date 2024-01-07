            "use strict";
            var n = r("418855"),
                i = r("472960"),
                u = r("379792");
            t.exports = function(t, e) {
                if (n(t), i(e) && e.constructor === t) return e;
                var r = u.f(t);
                return (0, r.resolve)(e), r.promise
            }