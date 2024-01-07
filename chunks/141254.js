            "use strict";
            n.r(t), n.d(t, {
                isAtGuildCapAndNonPremium: function() {
                    return r
                }
            }), n("446674"), n("139321");
            var a = n("305961"),
                s = n("697218"),
                l = n("719923"),
                i = n("49111");

            function r() {
                let e = a.default.getGuildCount() >= i.MAX_USER_GUILDS,
                    t = l.default.canUseIncreasedGuildCap(s.default.getCurrentUser());
                return e && !t
            }