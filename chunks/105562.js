            "use strict";
            r("70102");
            var i = r("37549"),
                n = r("648644"),
                o = i("%Promise.resolve%", !0),
                a = o && n(o);
            t.exports = function(t, e) {
                if (!a) throw SyntaxError("This environment does not support Promises.");
                return a(t, e)
            }