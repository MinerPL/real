            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                POLL_CREATION_MODAL_KEY: function() {
                    return l
                },
                MIN_NUMBER_OF_ANSWERS_PER_POLL: function() {
                    return i
                },
                MAX_NUMBER_OF_ANSWERS_PER_POLL: function() {
                    return r
                },
                MAX_POLL_QUESTION_LENGTH: function() {
                    return o
                },
                MAX_POLL_ANSWER_LENGTH: function() {
                    return u
                },
                PollDurations: function() {
                    return a
                }
            });
            let l = "POLL_CREATION_MODAL_KEY",
                i = 1,
                r = 6,
                o = 300,
                u = 55;
            (s = a || (a = {}))[s.ONE_HOUR = 1] = "ONE_HOUR", s[s.ONE_DAY = 24] = "ONE_DAY", s[s.THREE_DAYS = 72] = "THREE_DAYS", s[s.SEVEN_DAYS = 168] = "SEVEN_DAYS"