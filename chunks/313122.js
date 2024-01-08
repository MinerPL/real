            "use strict";
            t.exports = function(t, e, r, i) {
                for (var n = 65535 & t | 0, a = t >>> 16 & 65535 | 0, o = 0; 0 !== r;) {
                    o = r > 2e3 ? 2e3 : r, r -= o;
                    do a = a + (n = n + e[i++] | 0) | 0; while (--o);
                    n %= 65521, a %= 65521
                }
                return n | a << 16 | 0
            }