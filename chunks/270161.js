            "use strict";
            a.r(t), a.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return r
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var n = a("316693"),
                l = a("923510"),
                i = a("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = n.default.combine(r, i.Permissions.CONNECT),
                u = n.default.combine(r, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)