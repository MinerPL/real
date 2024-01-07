            "use strict";
            var r = n("359882"),
                a = Error,
                o = r("".replace),
                i = String(new a("zxcasd").stack),
                l = /\n\s*at [^:]*:[^\n]*/,
                u = l.test(i);
            e.exports = function(e, t) {
                if (u && "string" == typeof e && !a.prepareStackTrace)
                    for (; t--;) e = o(e, l, "");
                return e
            }