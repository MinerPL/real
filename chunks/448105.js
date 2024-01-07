            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, r = 0; l < i; l++) {
                    for (var o = e.charCodeAt(l); r < n;)
                        if (t.charCodeAt(r++) === o) continue e;
                    return !1
                }
                return !0
            }