            "use strict";
            s.r(t), s.d(t, {
                generateDeveloperPortalLink: function() {
                    return l
                }
            });
            var a = s("672630"),
                n = s("49111");
            async function l(e) {
                let t = a.default.generateNonce();
                try {
                    let s = await a.default.createHandoffToken(t);
                    return n.MarketingURLs.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, s, e)
                } catch {
                    return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
                }
            }