            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("47319"),
                u = n("449008"),
                r = n("49111");

            function i() {
                return (0, l.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, r.PlatformTypes.XBOX), a.default.getAccount(null, r.PlatformTypes.PLAYSTATION), a.default.getAccount(null, r.PlatformTypes.PLAYSTATION_STAGING)].filter(u.isNotNullish))
            }