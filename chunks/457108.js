            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("730290");

            function n(e) {
                let t = null != e.hash && "" !== e.hash ? (0, a.parse)(e.hash) : null;
                if ((null == t ? void 0 : t.token) != null) return t.token;
                let s = null != e.search && "" !== e.search ? (0, a.parse)(e.search) : null;
                return (null == s ? void 0 : s.token) != null ? s.token : null
            }