            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("860957");

            function a() {
                let e = l.default.getFocusedPID();
                return null != e && (l.default.isReady(e) || l.default.isCrashed(e)) ? e : null
            }