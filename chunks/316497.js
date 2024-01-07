            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_HEADER_HEIGHT_PX: function() {
                    return u
                }
            });
            var a, n, l = s("316693"),
                i = s("669491"),
                r = s("991170"),
                o = s("49111"),
                d = s("782340");
            let u = 371;
            (a = n || (n = {}))[a.COSMETIC = 0] = "COSMETIC", a[a.MEMBER = 1] = "MEMBER", a[a.MODERATOR = 2] = "MODERATOR", a[a.MANAGER = 3] = "MANAGER";
            let c = r.default.DEFAULT;
            l.default.remove(c, o.Permissions.MENTION_EVERYONE);
            let E = l.default.combine(c, o.Permissions.VIEW_AUDIT_LOG, o.Permissions.MANAGE_NICKNAMES, o.Permissions.KICK_MEMBERS, o.Permissions.BAN_MEMBERS, o.Permissions.MANAGE_MESSAGES, o.Permissions.MUTE_MEMBERS, o.Permissions.DEAFEN_MEMBERS, o.Permissions.MOVE_MEMBERS, o.Permissions.PRIORITY_SPEAKER, o.Permissions.MODERATE_MEMBERS),
                _ = l.default.combine(E, o.Permissions.MANAGE_CHANNELS, o.Permissions.MANAGE_THREADS, o.Permissions.MANAGE_ROLES, o.Permissions.MANAGE_GUILD_EXPRESSIONS, o.Permissions.MANAGE_GUILD, o.Permissions.MANAGE_WEBHOOKS, o.Permissions.SEND_TTS_MESSAGES);
            l.default.add(_, o.Permissions.VIEW_GUILD_ANALYTICS), i.default.unsafe_rawColors.BRAND_500.css, r.default.NONE, i.default.unsafe_rawColors.GREEN_360.css, i.default.unsafe_rawColors.YELLOW_300.css, i.default.unsafe_rawColors.RED_400.css, () => d.default.Messages.ROLE_PERMISSION_TEMPLATE_MANAGER_CONTENT_PREFACE