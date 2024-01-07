            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkDiscordConsent: function() {
                    return d
                }
            });
            var i = t("37983");
            t("884691");
            var o = t("747651"),
                s = t("106076"),
                a = t("755993"),
                r = t("49111"),
                l = t("171644");

            function d(e) {
                let {
                    platformType: n,
                    authToken: t,
                    onContinue: d,
                    onError: u,
                    onClose: C
                } = e, c = n === r.PlatformTypes.PLAYSTATION_STAGING ? s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID : s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, T = n === r.PlatformTypes.PLAYSTATION_STAGING ? o.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING : o.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
                return (0, i.jsx)(a.TwoWayLinkDiscordConsent, {
                    platformType: n,
                    clientId: c,
                    scopes: l.PLAYSTATION_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: d,
                    onError: u,
                    onClose: C,
                    redirectUri: T
                })
            }