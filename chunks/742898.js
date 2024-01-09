            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("47319"),
                l = n("449008"),
                s = n("49111");

            function u() {
                return (0, i.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, s.PlatformTypes.XBOX), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION_STAGING)].filter(l.isNotNullish))
            }