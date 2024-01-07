            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionSettingsVisibility: function() {
                    return l
                },
                canSeeGuildRoleSubscriptionSettings: function() {
                    return E
                },
                useGuildRoleSubscriptionSettingsVisibility: function() {
                    return _
                },
                useCanManageGuildRoleSubscriptions: function() {
                    return p
                },
                canManageGuildRoleSubscriptions: function() {
                    return h
                }
            });
            var i, l, r = n("446674"),
                s = n("7331"),
                a = n("465869"),
                u = n("957255"),
                o = n("697218"),
                d = n("808388"),
                c = n("49111");
            (i = l || (l = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

            function f(e) {
                if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
                if (function(e) {
                        let {
                            guild: t,
                            isOwner: n,
                            canManageGuildRoleSubscriptions: i,
                            isGuildEligibleForRoleSubscriptions: l,
                            isExpeditedMonetizationOnboardingGuild: r,
                            isUserInCreatorMonetizationEligibleCountry: s,
                            shouldRestrictUpdatingRoleSubscriptionSettings: a
                        } = e;
                        return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!a || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!l || !!r) && n && s)
                    }(e)) return 3;
                let {
                    guild: t,
                    isOwner: n,
                    isUserInCreatorMonetizationEligibleCountry: i,
                    isMonetizationWaitlistEnabledForGuild: l,
                    isGuildEligibleForRoleSubscriptions: r,
                    isExpeditedMonetizationOnboardingGuild: s
                } = e;
                return n && !i && l ? 1 : n && l && (r || s) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
            }

            function E(e) {
                return 0 !== f(e)
            }

            function _(e) {
                let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
                    n = (0, s.useIsExpeditedOnboardingGuild)(e),
                    i = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
                    l = p(e),
                    u = (0, r.useStateFromStores)([o.default], () => {
                        let t = o.default.getCurrentUser();
                        return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
                    }),
                    c = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
                    {
                        shouldRestrictUpdatingCreatorMonetizationSettings: E
                    } = (0, a.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
                return null == e ? 0 : f({
                    guild: e,
                    isOwner: u,
                    canManageGuildRoleSubscriptions: l,
                    isGuildEligibleForRoleSubscriptions: t,
                    isMonetizationWaitlistEnabledForGuild: i,
                    isExpeditedMonetizationOnboardingGuild: n,
                    isUserInCreatorMonetizationEligibleCountry: c,
                    shouldRestrictUpdatingRoleSubscriptionSettings: E
                })
            }

            function p(e) {
                let t = (0, r.useStateFromStores)([u.default], () => h(e), [e]);
                return t
            }

            function h(e) {
                return null != e && u.default.can(c.Permissions.ADMINISTRATOR, e)
            }