            "use strict";
            r.r(t), r.d(t, {
                GuildVisibility: function() {
                    return o
                },
                getGuildTraits: function() {
                    return i
                }
            }), r("222007");
            var o, a, l = r("813006"),
                s = r("49111");

            function i(e) {
                let t = new Set(e.features),
                    r = t.has(s.GuildFeatures.COMMUNITY) && t.has(s.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
                    o = function(e) {
                        return null != e && (e instanceof l.default ? e.premiumSubscriberCount > 0 || e.premiumTier > s.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
                    }(e),
                    a = 0;
                if (o) {
                    var i;
                    a = null !== (i = e instanceof l.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== i ? i : 0
                }
                let n = e instanceof l.default ? e.premiumTier : s.BoostedGuildTiers.NONE;
                return {
                    verified: t.has(s.GuildFeatures.VERIFIED),
                    partnered: t.has(s.GuildFeatures.PARTNERED),
                    community: t.has(s.GuildFeatures.COMMUNITY),
                    staff: t.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
                    visibility: r,
                    premium: o,
                    premiumSubscriberCount: a,
                    premiumTier: n
                }
            }(a = o || (o = {})).PUBLIC = "PUBLIC", a.INVITE_ONLY = "INVITE_ONLY"