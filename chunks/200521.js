            "use strict";
            var l, a, s, i;
            n.r(t), n.d(t, {
                FeedbackRating: function() {
                    return l
                },
                FEEDBACK_FREEFORM_LENGTH: function() {
                    return r
                },
                FeedbackType: function() {
                    return a
                },
                FeedbackTypePrecedence: function() {
                    return o
                }
            }), n("808653"), (s = l || (l = {})).BAD = "bad", s.NEUTRAL = "neutral", s.GOOD = "good";
            let r = 1024;
            (i = a || (a = {}))[i.VOICE = 0] = "VOICE", i[i.STREAM = 1] = "STREAM", i[i.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", i[i.ACTIVITY = 3] = "ACTIVITY", i[i.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
                ...e,
                [t]: n
            }), {})