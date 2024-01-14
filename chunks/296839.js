"use strict";
n.r(t), n.d(t, {
  AutomodTriggerConfigFlags: function() {
    return r
  },
  triggerConfigs: function() {
    return E
  },
  AutomodTriggerCategory: function() {
    return o
  },
  checkTriggerTypeForFlag: function() {
    return _
  },
  getAvailableActionTypes: function() {
    return c
  },
  validateRuleByTriggerConfigOrThrow: function() {
    return f
  },
  useAvailableTriggerTypes: function() {
    return I
  },
  getDefaultTriggerMetadataForTriggerType: function() {
    return g
  }
}), n("222007"), n("702976"), n("70102"), n("808653");
var r, o, i, u, a = n("884691"),
  l = n("926809"),
  d = n("348934"),
  s = n("143460"),
  T = n("782340");
(i = r || (r = {})).NEW = "new", i.RECOMMENDED = "recommended", i.BETA = "beta", i.ALPHA = "alpha";
let E = {
  [s.AutomodTriggerType.SPAM_LINK]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: s.AutomodTriggerType.SPAM_LINK,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [s.AutomodTriggerType.KEYWORD]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: s.AutomodTriggerType.KEYWORD,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL, s.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
  },
  [s.AutomodTriggerType.ML_SPAM]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
    type: s.AutomodTriggerType.ML_SPAM,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
  },
  [s.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
    type: s.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
  },
  [s.AutomodTriggerType.MENTION_SPAM]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
    type: s.AutomodTriggerType.MENTION_SPAM,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL, s.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
  },
  [s.AutomodTriggerType.USER_PROFILE]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
    type: s.AutomodTriggerType.USER_PROFILE,
    eventType: s.AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([s.AutomodActionType.QUARANTINE_USER, s.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set(["beta"]),
    defaultActionTypes: new Set([s.AutomodActionType.QUARANTINE_USER])
  },
  [s.AutomodTriggerType.SERVER_POLICY]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
    type: s.AutomodTriggerType.SERVER_POLICY,
    eventType: s.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([s.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
(u = o || (o = {})).MEMBERS = "members", u.CONTENT = "content";
let A = {
    members: [E[s.AutomodTriggerType.USER_PROFILE]],
    content: [E[s.AutomodTriggerType.SERVER_POLICY], E[s.AutomodTriggerType.MENTION_SPAM], E[s.AutomodTriggerType.ML_SPAM], E[s.AutomodTriggerType.DEFAULT_KEYWORD_LIST], E[s.AutomodTriggerType.KEYWORD]]
  },
  _ = (e, t) => {
    let n = E[e].flags;
    return n.has(t)
  };

function c(e) {
  return Array.from(E[e].availableActionTypes)
}

function f(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: o,
    actions: i
  } = e, u = E[o], a = t.filter(e => n !== e.id && e.triggerType === o).length;
  if (a > u.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(o));
  if (i.some(e => !u.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== u.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function I(e) {
  let t = (0, d.useIsUserProfileRuleEnabled)(e),
    n = (0, l.useIsServerPolicyExperimentEnabled)(e);
  return a.useMemo(() => Object.keys(A).reduce((e, r) => {
    let o = A[r],
      i = o.filter(e => {
        if (e.type === s.AutomodTriggerType.SERVER_POLICY && !n || e.type === s.AutomodTriggerType.USER_PROFILE && !t) return !1;
        let r = e.perGuildMaxCount > 0;
        return r
      }).map(e => e.type);
    return e[r] = i, e
  }, {
    members: [],
    content: []
  }), [t, n])
}

function g(e, t) {
  let n = (0, l.isInMentionRaidExperiment)(t);
  switch (e) {
    case s.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case s.AutomodTriggerType.USER_PROFILE:
    case s.AutomodTriggerType.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case s.AutomodTriggerType.MENTION_SPAM:
      return {
        mentionTotalLimit: s.MENTION_SPAM_LIMIT_DEFAULT, mentionRaidProtectionEnabled: n
      };
    case s.AutomodTriggerType.ML_SPAM:
    case s.AutomodTriggerType.SERVER_POLICY:
    default:
      return
  }
}