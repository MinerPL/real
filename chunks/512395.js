            "use strict";
            n.r(t), n.d(t, {
                useOptInEnabledForGuild: function() {
                    return o
                },
                isOptInEnabledForGuild: function() {
                    return d
                },
                useShouldShowOnboardingAdminUpsellForGuild: function() {
                    return c
                }
            });
            var i = n("446674"),
                a = n("305961"),
                l = n("957255"),
                s = n("282109"),
                r = n("697218"),
                u = n("49111");

            function o(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.isOptInEnabled(e)),
                    n = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(e)),
                    l = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return null != e && null != n && null != l && (n.hasFeature(u.GuildFeatures.COMMUNITY) || l.isStaff()) && t
            }

            function d(e) {
                let t = a.default.getGuild(e),
                    n = r.default.getCurrentUser();
                return null != e && null != t && null != n && (t.hasFeature(u.GuildFeatures.COMMUNITY) || n.isStaff()) && s.default.isOptInEnabled(e)
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(e)),
                    {
                        canManageGuild: n,
                        canManageRoles: s
                    } = (0, i.useStateFromStoresObject)([l.default], () => ({
                        canManageGuild: l.default.can(u.Permissions.MANAGE_GUILD, t),
                        canManageRoles: l.default.can(u.Permissions.MANAGE_ROLES, t)
                    }));
                if (null == t) return !1;
                let r = t.hasFeature(u.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return n && s && !r
            }