            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("489622"),
                i = n("956967"),
                l = n("782340"),
                r = n("185401");

            function o(e) {
                let {
                    guildId: t,
                    analyticsLocations: n,
                    analyticsLocation: o
                } = e, [u, d] = (0, i.useOpenFixQuarantinedProfileModal)({
                    guildId: t,
                    analyticsLocations: n,
                    analyticsLocation: o,
                    openWithoutBackstack: !0
                }), c = d ? l.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : l.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, E = d ? l.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : l.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
                return (0, a.jsxs)(s.default, {
                    color: s.NoticeColors.CUSTOM,
                    className: r.quarantineNotice,
                    children: [c, (0, a.jsx)(s.NoticeButton, {
                        onClick: u,
                        children: E
                    })]
                })
            }