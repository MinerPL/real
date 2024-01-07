            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("617258"),
                l = n("769846"),
                s = n("834897"),
                i = n("677795");
            let r = (0, a.cssValueToNumber)(l.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
                o = (0, a.cssValueToNumber)(l.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);

            function u() {
                let e = (0, s.default)(i.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
                return e ? o : r
            }