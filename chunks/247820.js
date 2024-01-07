            "use strict";
            n.r(t), n.d(t, {
                fetchPremiumMarketingContent: function() {
                    return i
                }
            });
            var a = n("872717"),
                s = n("49111");
            async function i() {
                try {
                    let e = await a.default.get({
                        url: s.Endpoints.PREMIUM_MARKETING
                    });
                    if (e.ok) return e.body;
                    return []
                } catch (e) {
                    return []
                }
            }