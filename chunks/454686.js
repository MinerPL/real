"use strict";
n.r(t), n.d(t, {
  isRuleKeywordFilter: function() {
    return E
  },
  isRuleMLSpamFilter: function() {
    return A
  },
  isRuleDefaultKeywordListFilter: function() {
    return _
  },
  isRuleMentionSpamFilter: function() {
    return c
  },
  isRuleServerPolicyFilter: function() {
    return f
  },
  isRuleUserProfileFilter: function() {
    return I
  },
  createDefaultRule: function() {
    return g
  },
  validateKeywordsOrThrow: function() {
    return S
  },
  validateRuleBeforeSaveOrThrow: function() {
    return p
  },
  isBackendPersistedRule: function() {
    return N
  },
  eventTypeToName: function() {
    return O
  },
  actionTypeToName: function() {
    return R
  },
  triggerTypeToName: function() {
    return M
  }
}), n("222007"), n("70102");
var r = n("389153"),
  o = n("271938"),
  i = n("369035"),
  u = n("600798"),
  a = n("353575"),
  l = n("296839"),
  d = n("143460"),
  s = n("782340");
let T = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
  E = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.KEYWORD,
  A = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.ML_SPAM,
  _ = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
  c = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.MENTION_SPAM,
  f = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.SERVER_POLICY,
  I = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.USER_PROFILE;

function g(e, t) {
  let n = l.triggerConfigs[t],
    r = (0, l.getDefaultTriggerMetadataForTriggerType)(t, e),
    u = {
      id: T(e, t),
      name: n.getDefaultRuleName(),
      guildId: e,
      eventType: n.eventType,
      triggerType: t,
      triggerMetadata: r,
      enabled: !0,
      creatorId: o.default.getId(),
      actions: (0, i.getRuleDefaultActionsFromConfig)(n),
      position: 0,
      exemptChannels: new Set,
      exemptRoles: new Set
    };
  if (N(u)) throw Error(s.default.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
  let d = (0, a.getRuleCountByTriggerType)(e, t);
  return d > 0 && (u.name += " ".concat(d + 1)), u
}

function S(e, t) {
  if (e.length > t) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
    limit: t
  }));
  e.forEach(e => {
    if (e.length > d.MAX_CHARACTERS_PER_KEYWORD || e.length < d.MIN_CHARACTERS_PER_KEYWORD) throw new u.InvalidKeywordError(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
      keyword: e,
      max: d.MAX_CHARACTERS_PER_KEYWORD,
      min: d.MIN_CHARACTERS_PER_KEYWORD
    }))
  })
}

function p(e) {
  if (E(e)) {
    var t, n;
    let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
      o = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
    if (0 === r.length && 0 === o.length) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
    S(r, d.MAX_KEYWORDS_PER_KEYWORD_FILTER), ! function(e) {
      if (e.length > d.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
        limit: d.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER
      }));
      e.forEach(e => {
        if (e.length > d.MAX_REGEX_PATTERN_LENGTH || e.length < d.MIN_REGEX_PATTERN_LENGTH) throw new u.InvalidRegexPatternError(s.default.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
          regex: e,
          max: d.MAX_REGEX_PATTERN_LENGTH,
          min: d.MIN_REGEX_PATTERN_LENGTH
        }))
      })
    }(o)
  }
  if (0 === e.actions.length) throw Error(s.default.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)
}

function N(e) {
  var t;
  return (0, r.isSnowflake)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "INVALID_SNOWFLAKE")
}

function O(e) {
  if (e === d.AutomodEventType.MESSAGE_SEND) return s.default.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
  return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
}

function R(e) {
  switch (e) {
    case d.AutomodActionType.BLOCK_MESSAGE:
      return s.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
    case d.AutomodActionType.FLAG_TO_CHANNEL:
      return s.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
    default:
      return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
  }
}

function M(e) {
  switch (e) {
    case d.AutomodTriggerType.KEYWORD:
      return s.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
    case d.AutomodTriggerType.ML_SPAM:
      return s.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
    case d.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      return s.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
    default:
      return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
  }
}