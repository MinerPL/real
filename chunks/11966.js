            "use strict";
            var i = function() {
                for (var t, e = [], r = 0; r < 256; r++) {
                    t = r;
                    for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                    e[r] = t
                }
                return e
            }();
            t.exports = function(t, e, r, n) {
                var o = n + r;
                t ^= -1;
                for (var a = n; a < o; a++) t = t >>> 8 ^ i[(t ^ e[a]) & 255];
                return -1 ^ t
            }