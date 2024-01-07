            "use strict";
            var i, r, s, a, o, l;
            n.r(t), n.d(t, {
                ReadStateTypes: function() {
                    return i
                },
                UnreadSetting: function() {
                    return r
                },
                UnreadMode: function() {
                    return s
                }
            }), (a = i || (i = {}))[a.CHANNEL = 0] = "CHANNEL", a[a.GUILD_EVENT = 1] = "GUILD_EVENT", a[a.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER", a[a.GUILD_HOME = 3] = "GUILD_HOME", a[a.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION", (o = r || (r = {}))[o.UNSET = 0] = "UNSET", o[o.ALL_MESSAGES = 1] = "ALL_MESSAGES", o[o.ONLY_MENTIONS = 2] = "ONLY_MENTIONS", (l = s || (s = {}))[l.IMPORTANT = 0] = "IMPORTANT", l[l.LESS_IMPORTANT = 1] = "LESS_IMPORTANT", l[l.NONE = 2] = "NONE"