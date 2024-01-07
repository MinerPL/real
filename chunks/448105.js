            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, s = 0; r < i; r++) {
                    for (var l = e.charCodeAt(r); s < n;)
                        if (t.charCodeAt(s++) === l) continue e;
                    return !1
                }
                return !0
            }