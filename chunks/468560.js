            "use strict";

            function s(e, t) {
                var n;
                let s = null == t ? void 0 : null === (n = t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
                if (null != s && s in e) return e[s]
            }
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("781738")