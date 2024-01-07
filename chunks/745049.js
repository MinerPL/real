            "use strict";
            n.r(t), n.d(t, {
                GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
                    return T
                },
                MAX_EVENT_LOCATION_LENGTH: function() {
                    return g
                },
                ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
                    return I
                },
                FAKE_EVENT_ID: function() {
                    return C
                },
                GuildScheduledEventStatus: function() {
                    return i
                },
                GuildScheduledEventStatusDone: function() {
                    return v
                },
                GuildScheduledEventEntityTypes: function() {
                    return r
                },
                GuildScheduledEventNotificationTypes: function() {
                    return s
                },
                GuildScheduledEventPrivacyLevel: function() {
                    return a
                },
                EntityChannelTypes: function() {
                    return A
                },
                ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
                    return R
                },
                ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
                    return N
                },
                EventDetailSections: function() {
                    return o
                },
                MAX_RSVP_USER_DISPLAY_COUNT: function() {
                    return O
                },
                NEW_EVENT_WINDOW_MILLISECONDS: function() {
                    return D
                },
                EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
                    return y
                },
                ACKED_RECENTLY_WINDOW_DAYS: function() {
                    return P
                },
                UpcomingGuildEventNoticeTypes: function() {
                    return l
                },
                GuildScheduledEventUserResponses: function() {
                    return u
                }
            }), n("222007");
            var i, r, s, a, o, l, u, c, d, f, E, h, p, _, S = n("718517"),
                m = n("49111");
            let T = 1e3,
                g = 100,
                I = "Guild Events Modal",
                C = "-1";
            (c = i || (i = {}))[c.SCHEDULED = 1] = "SCHEDULED", c[c.ACTIVE = 2] = "ACTIVE", c[c.COMPLETED = 3] = "COMPLETED", c[c.CANCELED = 4] = "CANCELED";
            let v = new Set([3, 4]);
            (d = r || (r = {}))[d.NONE = 0] = "NONE", d[d.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", d[d.VOICE = 2] = "VOICE", d[d.EXTERNAL = 3] = "EXTERNAL", (f = s || (s = {}))[f.EVENT_START = 1] = "EVENT_START", (E = a || (a = {}))[E.PUBLIC = 1] = "PUBLIC", E[E.GUILD_ONLY = 2] = "GUILD_ONLY";
            let A = {
                    1: m.ChannelTypes.GUILD_STAGE_VOICE,
                    2: m.ChannelTypes.GUILD_VOICE
                },
                R = new Set([3]),
                N = new Set([1, 2]);
            (h = o || (o = {}))[h.EVENT_INFO = 0] = "EVENT_INFO", h[h.RSVP_LIST = 1] = "RSVP_LIST";
            let O = 100,
                D = 2 * S.default.Millis.DAY,
                y = 12 * S.default.Millis.HOUR,
                P = 4;
            (p = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", p.EVENT_STARTING_SOON = "Event Starting Soon Notice", (_ = u || (u = {}))[_.UNINTERESTED = 0] = "UNINTERESTED", _[_.INTERESTED = 1] = "INTERESTED"