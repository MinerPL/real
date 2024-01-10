            "use strict";
            r("70102");
            var i = r("240973"),
                n = TypeError,
                o = r("326763");
            t.exports = function(t) {
                var e = i(t);
                if (!e) throw new n("non-iterable value provided");
                return arguments.length > 1 ? o(e, arguments[1]) : o(e)
            }