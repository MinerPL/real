            "use strict";

            function i(e) {
                if (null == e) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e[t].voiceState.selfStream) return !0;
                return !1
            }
            n.r(t), n.d(t, {
                hasStream: function() {
                    return i
                }
            })