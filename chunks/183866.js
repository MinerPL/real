"use strict";
s.r(t), s.d(t, {
  isRegexSupported: function() {
    return E
  },
  getRuleInfo: function() {
    return f
  }
});
var a = s("116320"),
  n = s("117300"),
  l = s("83900"),
  i = s("350932"),
  r = s("160237"),
  o = s("454686"),
  d = s("296839"),
  u = s("143460"),
  c = s("782340");
let E = e => {
    switch (e) {
      case u.AutomodTriggerType.KEYWORD:
      case u.AutomodTriggerType.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  _ = e => {
    switch (e) {
      case u.AutomodTriggerType.KEYWORD:
      case u.AutomodTriggerType.ML_SPAM:
      case u.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      case u.AutomodTriggerType.MENTION_SPAM:
      case u.AutomodTriggerType.SERVER_POLICY:
      case u.AutomodTriggerType.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  T = (e, t) => {
    var s;
    return null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : (0, d.triggerConfigs)[e].getDefaultRuleName()
  },
  I = (e, t) => {
    if ((0, o.isBackendPersistedRule)(t) && (0, o.isRuleKeywordFilter)(t)) return t.triggerMetadata.regexPatterns.length > 0 ? c.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_AND_REGEX_COUNT.format({
      keywordCount: t.triggerMetadata.keywordFilter.length,
      regexPatternCount: t.triggerMetadata.regexPatterns.length
    }) : c.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_COUNT.format({
      keywordCount: t.triggerMetadata.keywordFilter.length
    })
  },
  S = e => {
    switch (e) {
      case u.AutomodTriggerType.KEYWORD:
        return c.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_DESCRIPTION;
      case u.AutomodTriggerType.ML_SPAM:
        return c.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_DESCRIPTION;
      case u.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
        return c.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_DESCRIPTION_TEXT;
      case u.AutomodTriggerType.MENTION_SPAM:
        return c.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_DESCRIPTION;
      case u.AutomodTriggerType.SERVER_POLICY:
        return c.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_DESCRIPTION;
      case u.AutomodTriggerType.USER_PROFILE:
        return c.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_DESCRIPTION;
      default:
        return null
    }
  },
  N = e => {
    if (e === u.AutomodTriggerType.KEYWORD) return c.default.Messages.GUILD_AUTOMOD_LINK_FILTER_MATCHING_STRATEGY_DESCRIPTION.format()
  },
  g = e => {
    switch (e) {
      case u.AutomodTriggerType.MENTION_SPAM:
        return a.default;
      case u.AutomodTriggerType.KEYWORD:
        return i.default;
      case u.AutomodTriggerType.ML_SPAM:
      case u.AutomodTriggerType.USER_PROFILE:
        return n.default;
      case u.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
        return r.default
    }
  };

function f(e, t) {
  var s, a, n, i, r;
  return null != e && _(e) ? {
    headerText: null !== (s = T(e, t)) && void 0 !== s ? s : "",
    headerSubtext: null !== (a = I(e, t)) && void 0 !== a ? a : "",
    descriptionText: null !== (n = S(e)) && void 0 !== n ? n : "",
    descriptionSubtext: null !== (i = N(e)) && void 0 !== i ? i : "",
    icon: null !== (r = g(e)) && void 0 !== r ? r : l.default
  } : null
}