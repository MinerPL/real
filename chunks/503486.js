            "use strict";
            var e = function(t) {
                return t && t.Math === Math && t
            };
            t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n.g && n.g) || function() {
                return this
            }() || this || Function("return this")()