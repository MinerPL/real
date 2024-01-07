            "use strict";
            var l, n, s, i;
            a.r(t), a.d(t, {
                GUILD_FEED_FEEDBACK_LAST_SEEN: function() {
                    return d
                },
                GUILD_FEED_FEEDBACK_TIME_OUT: function() {
                    return r
                },
                GUILD_FEED_FEEDBACK_ANIMATION_DURATION: function() {
                    return u
                },
                GuildFeedbackRating: function() {
                    return l
                },
                GuildFeedFeedbackReason: function() {
                    return n
                },
                GUILD_FEED_FEEDBACK_REASONS: function() {
                    return o
                }
            });
            let d = "guild_feed_feedback_last_seen",
                r = 6048e5,
                u = 450;
            (s = l || (l = {})).TERRIBLE = "terrible", s.BAD = "bad", s.OKAY = "okay", s.GOOD = "good", s.EXCELLENT = "excellent", (i = n || (n = {}))[i.ALREADY_SAW = 0] = "ALREADY_SAW", i[i.IRRELEVANT = 1] = "IRRELEVANT", i[i.TOO_OLD = 2] = "TOO_OLD", i[i.CONFUSING_OR_RANDOM = 3] = "CONFUSING_OR_RANDOM", i[i.INAPPROPRIATE = 4] = "INAPPROPRIATE", i[i.UNINTERESTING = 5] = "UNINTERESTING", i[i.ENTERTAINING = 6] = "ENTERTAINING", i[i.INFORMATIVE = 7] = "INFORMATIVE", i[i.USEFUL = 8] = "USEFUL", i[i.OTHER = 9] = "OTHER", i[i.FUNNY = 10] = "FUNNY";
            let o = {
                terrible: [0, 1, 2, 3, 4, 9],
                bad: [0, 1, 2, 3, 4, 9],
                okay: [1, 2, 5, 0, 9],
                good: [10, 6, 7, 8, 9],
                excellent: [10, 6, 7, 8, 9]
            }