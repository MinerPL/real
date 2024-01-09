            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("860957");

            function i() {
                let e = s.default.getFocusedPID();
                return null != e && (s.default.isReady(e) || s.default.isCrashed(e)) ? e : null
            }