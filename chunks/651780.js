            "use strict";
            var r = n("735320"),
                a = n("490653"),
                o = n("95536");
            e.exports = function(e, t) {
                if (r(e), a(t) && t.constructor === e) return t;
                var n = o.f(e);
                return (0, n.resolve)(t), n.promise
            }