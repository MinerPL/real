            "use strict";
            s.r(t), s.d(t, {
                getSMSBackupDisabledMessage: function() {
                    return d
                },
                use2FARemoveDisableReason: function() {
                    return u
                }
            });
            var a = s("65597"),
                n = s("305961"),
                l = s("957255"),
                i = s("697218"),
                r = s("49111"),
                o = s("782340");

            function d(e) {
                return e.hasAnyStaffLevel() || e.hasFlag(r.UserFlags.PARTNER) ? o.default.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? o.default.Messages.MFA_SMS_DISABLED_NO_EMAIL : null
            }

            function u() {
                return (0, a.default)([n.default, l.default, i.default], () => {
                    var e;
                    if (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasAnyStaffLevel()) return o.default.Messages.TWO_FA_DISABLED_FOR_STAFF;
                    let t = n.default.getGuilds();
                    return Object.values(t).some(e => e.hasFeature(r.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && l.default.can(r.Permissions.ADMINISTRATOR, e)) ? o.default.Messages.TWO_FA_DISABLED_FOR_SERVER_SUBSCRIPTION_MOD : null
                })
            }