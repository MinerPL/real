            "use strict";
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return a.AutomodEventType
                },
                AutomodTriggerType: function() {
                    return _.AutomodTriggerType
                },
                AutomodActionType: function() {
                    return r.AutomodActionType
                },
                KeywordPreset: function() {
                    return u
                },
                MAX_KEYWORDS_PER_KEYWORD_FILTER: function() {
                    return E
                },
                MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function() {
                    return i
                },
                MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE: function() {
                    return s
                },
                MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: function() {
                    return A
                },
                MAX_CHARACTERS_PER_KEYWORD: function() {
                    return d
                },
                MIN_CHARACTERS_PER_KEYWORD: function() {
                    return T
                },
                MIN_REGEX_PATTERN_LENGTH: function() {
                    return l
                },
                MAX_REGEX_PATTERN_LENGTH: function() {
                    return N
                },
                MAX_RULE_NAME_LENGTH: function() {
                    return O
                },
                MIN_MENTION_SPAM_LIMIT: function() {
                    return c
                },
                MAX_MENTION_SPAM_LIMIT: function() {
                    return I
                },
                MENTION_SPAM_LIMIT_DEFAULT: function() {
                    return M
                },
                MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function() {
                    return R
                },
                QUARANTINE_USER_ALERT_KEY: function() {
                    return f
                }
            });
            var o, u, r = n("214764"),
                a = n("155481"),
                _ = n("363312");
            (o = u || (u = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", _.AutomodTriggerType.USER_PROFILE, _.AutomodTriggerType.SERVER_POLICY, _.AutomodTriggerType.MENTION_SPAM, _.AutomodTriggerType.ML_SPAM, _.AutomodTriggerType.DEFAULT_KEYWORD_LIST, _.AutomodTriggerType.KEYWORD;
            let E = 1e3,
                i = 100,
                s = 1e3,
                A = 10,
                d = 60,
                T = 1,
                l = 1,
                N = 260,
                O = 100,
                c = 1,
                I = 50,
                M = 20,
                R = 150,
                f = "automod-profile-quarantine-alert"