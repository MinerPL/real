"use strict";
n.r(t), n.d(t, {
  AutomodEventType: function() {
    return _.AutomodEventType
  },
  AutomodTriggerType: function() {
    return i.AutomodTriggerType
  },
  AutomodActionType: function() {
    return r.AutomodActionType
  },
  KeywordPreset: function() {
    return u
  },
  MAX_KEYWORDS_PER_KEYWORD_FILTER: function() {
    return a
  },
  MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function() {
    return E
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
    return I
  },
  MIN_MENTION_SPAM_LIMIT: function() {
    return O
  },
  MAX_MENTION_SPAM_LIMIT: function() {
    return c
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
  _ = n("155481"),
  i = n("363312");
(o = u || (u = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", i.AutomodTriggerType.USER_PROFILE, i.AutomodTriggerType.SERVER_POLICY, i.AutomodTriggerType.MENTION_SPAM, i.AutomodTriggerType.ML_SPAM, i.AutomodTriggerType.DEFAULT_KEYWORD_LIST, i.AutomodTriggerType.KEYWORD;
let a = 1e3,
  E = 100,
  s = 1e3,
  A = 10,
  d = 60,
  T = 1,
  l = 1,
  N = 260,
  I = 100,
  O = 1,
  c = 50,
  M = 20,
  R = 150,
  f = "automod-profile-quarantine-alert"