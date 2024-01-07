            "use strict";
            n.r(t), n.d(t, {
                isValidGuildId: function() {
                    return i
                },
                isValidChannelId: function() {
                    return r
                }
            });
            var l = n("49111"),
                a = n("724210");
            let s = /^\d+$/;

            function i(e) {
                return null != e && (!!(e === l.ME || e === l.FAVORITES || s.test(e)) || !1)
            }

            function r(e) {
                return !!(null == e || s.test(e) || (0, a.isStaticChannelRoute)(e)) || !1
            }