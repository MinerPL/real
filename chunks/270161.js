            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("316693"),
                l = n("923510"),
                i = n("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = a.default.combine(r, i.Permissions.CONNECT),
                u = a.default.combine(r, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)