            "use strict";
            n.r(t), n.d(t, {
                MAX_NUM_SUGGESTED_STICKERS: function() {
                    return s
                },
                MAX_NUM_USER_INPUT_WORDS: function() {
                    return r
                },
                DELAY_BEFORE_SUGGESTIONS_MS: function() {
                    return u
                },
                SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
                    return o
                },
                REQUEST_THROTTLE_DURATION_MS: function() {
                    return d
                }
            });
            var i, a, l = n("49111");
            let s = 4,
                r = 5,
                u = 350,
                o = 1e3 * l.Durations.MINUTE,
                d = 1e3 * l.Durations.MINUTE * 2;
            (i = a || (a = {}))[i.STICKER = 0] = "STICKER"