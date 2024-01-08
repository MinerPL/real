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
                var a = n + r;
                t ^= -1;
                for (var o = n; o < a; o++) t = t >>> 8 ^ i[(t ^ e[o]) & 255];
                return -1 ^ t
            }