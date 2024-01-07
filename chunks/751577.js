            "use strict";
            a.r(t), a.d(t, {
                clientIdToActivateDevicePlatform: function() {
                    return s
                }
            });
            var n = a("106076"),
                r = a("49111");

            function s(e) {
                let t = null;
                return e === n.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID ? t = r.PlatformTypes.PLAYSTATION : e === n.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID && (t = r.PlatformTypes.PLAYSTATION_STAGING), t
            }