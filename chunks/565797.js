            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var l = i("446674"),
                s = i("7331"),
                u = i("736271"),
                a = i("760190"),
                n = i("808388"),
                d = i("65722"),
                r = i("782340"),
                o = {
                    title: () => r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                    description: () => r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
                    canCreateGuild: !1,
                    useIsGuildSupported: () => (0, l.useStateFromStores)([a.default], () => (e, t) => e.isOwner(t) && (0, d.canSeeGuildRoleSubscriptionSettings)({
                        guild: e,
                        isOwner: !0,
                        canManageGuildRoleSubscriptions: !0,
                        isMonetizationWaitlistEnabledForGuild: (0, s.isMonetizationWaitlistEnabledForGuild)(e.id),
                        isGuildEligibleForRoleSubscriptions: (0, n.isGuildEligibleForRoleSubscriptions)(e.id),
                        isExpeditedMonetizationOnboardingGuild: (0, s.isExpeditedMonetizationOnboardingGuild)(e),
                        isUserInCreatorMonetizationEligibleCountry: (0, s.isUserInCreatorMonetizationEligibleCountry)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, u.shouldRestrictUpdatingCreatorMonetizationSettings)(e.id)
                    }), [], l.statesWillNeverBeEqual)
                }