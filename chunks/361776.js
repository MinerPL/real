            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                },
                isGuildOnboardingAvailable: function() {
                    return u
                }
            });
            var n = l("446674"),
                a = l("38654"),
                r = l("49111");

            function i(e) {
                let t = (0, n.useStateFromStores)([a.default], () => {
                    if ((null == e ? void 0 : e.id) == null) return !1;
                    let t = a.default.isFullServerPreview(e.id),
                        l = a.default.isOnboardingEnabled(e.id);
                    return t && l
                });
                return t || (null == e ? void 0 : e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                let t = a.default.isFullServerPreview(e.id),
                    l = a.default.isOnboardingEnabled(e.id);
                return t && l || e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }