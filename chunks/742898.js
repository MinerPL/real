            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("47319"),
                a = n("449008"),
                i = n("49111");

            function d() {
                return (0, l.useStateFromStoresArray)([u.default], () => [u.default.getAccount(null, i.PlatformTypes.XBOX), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION_STAGING)].filter(a.isNotNullish))
            }