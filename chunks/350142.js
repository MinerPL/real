                "use strict";
                var e = r("64980"),
                    o = Error,
                    u = e("".replace),
                    i = String(o("zxcasd").stack),
                    c = /\n\s*at [^:]*:[^\n]*/,
                    f = c.test(i);
                t.exports = function(t, n) {
                    if (f && "string" == typeof t && !o.prepareStackTrace)
                        for (; n--;) t = u(t, c, "");
                    return t
                }