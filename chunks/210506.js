            "use strict";
            var e = n("664144"),
                o = n("125359"),
                i = /#|\.prototype\./,
                u = function(t, r) {
                    var n = s[c(t)];
                    return n === a || n !== f && (o(r) ? e(r) : !!r)
                },
                c = u.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase()
                },
                s = u.data = {},
                f = u.NATIVE = "N",
                a = u.POLYFILL = "P";
            t.exports = u