            "use strict";

            function r(t, e) {
                if (null == t) return {};
                var n, r, i = {},
                    o = Object.keys(t);
                for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && (i[n] = t[n]);
                return i
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })