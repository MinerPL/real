            "use strict";
            t.exports = function(t, e, r, i) {
                for (var n = 65535 & t | 0, o = t >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
                    a = r > 2e3 ? 2e3 : r, r -= a;
                    do o = o + (n = n + e[i++] | 0) | 0; while (--a);
                    n %= 65521, o %= 65521
                }
                return n | o << 16 | 0
            }