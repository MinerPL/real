            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("492249");

            function r(e, t) {
                if (null == t) return !0;
                if ("string" == typeof t) return e.includes(t);
                if ("object" != typeof t) return !1;
                let n = t[i.RPC_SCOPE_CONFIG.ANY],
                    r = t[i.RPC_SCOPE_CONFIG.ALL];
                return !!(Array.isArray(n) && n.some(t => e.includes(t)) || Array.isArray(r) && r.every(t => e.includes(t))) || !1
            }