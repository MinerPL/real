            "use strict";

            function r(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let n = Object.keys(e);
                if (n.length !== Object.keys(t).length) return !1;
                for (let r = 0; r < n.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })