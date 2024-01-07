            "use strict";
            s.r(t), s.d(t, {
                getGuildSafetySettings: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("772871"),
                l = s("974724"),
                i = s("495454"),
                r = s("380993"),
                o = s("281239"),
                d = s("439979"),
                u = s("771075"),
                c = s("49111"),
                E = s("782340");
            let _ = e => ({
                [n.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION]: [{
                    renderComponent: () => (0, a.jsx)(r.default, {
                        guild: e
                    }, "raid-alerts"),
                    enabled: !e.hasFeature(c.GuildFeatures.RAID_ALERTS_DISABLED)
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCHA
                    }, "captcha-suspicious-joins"),
                    enabled: !0
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCH_RAID
                    }, "captcha-raid-joins"),
                    enabled: !0
                }],
                [n.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION]: [{
                    renderComponent: () => (0, a.jsx)(u.default, {
                        guild: e
                    }, "verification-level"),
                    enabled: !0
                }, {
                    renderComponent: () => (0, a.jsx)(d.default, {
                        guild: e
                    }, "member-verification"),
                    enabled: e.hasVerificationGate()
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS,
                        details: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS_DESCRIPTION
                    }, "hide-suspicious-dms"),
                    enabled: !0
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS,
                        details: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS_DESCRIPTION
                    }, "filter-unknown-dms"),
                    enabled: !0
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_LINKS
                    }, "outbound-links-warn"),
                    enabled: !0
                }, {
                    renderComponent: () => (0, a.jsx)(o.default, {
                        title: E.default.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_SUSPCIOUS_MESSAGES
                    }, "delete-spam"),
                    enabled: !0
                }],
                [n.GuildSettingsSafetyPage.PERMISSIONS]: [{
                    renderComponent: () => (0, a.jsx)(l.default, {
                        guild: e
                    }, "guild-mfa"),
                    enabled: e.mfaLevel === c.MFALevels.ELEVATED
                }, {
                    renderComponent: () => (0, a.jsx)(i.default, {
                        guild: e
                    }, "disable-risky-perms"),
                    enabled: 0 === (0, i.getRiskyPerms)(e).length
                }]
            })