"use strict";
n.r(t), n.d(t, {
  isAutomodMessageRecord: function() {
    return O
  },
  isAutomodNotification: function() {
    return c
  },
  getActionHeaderText: function() {
    return R
  },
  getQuarantineReasonString: function() {
    return f
  },
  extractAutomodNotificationFields: function() {
    return S
  },
  default: function() {
    return m
  },
  useAutomodAlertActions: function() {
    return L
  },
  getRaidAlertResolveCTAText: function() {
    return U
  },
  getUserIdOfAutomodAction: function() {
    return C
  },
  IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
    return y
  }
}), n("222007");
var o = n("884691"),
  u = n("967190"),
  r = n("171149"),
  _ = n("427693"),
  i = n("404336"),
  a = n("772193"),
  E = n("657827"),
  s = n("446674"),
  A = n("42203"),
  d = n("957255"),
  T = n("228944"),
  l = n("85448"),
  N = n("49111"),
  I = n("782340");

function O(e) {
  return e.type === N.MessageTypes.AUTO_MODERATION_ACTION
}

function c(e) {
  var t;
  return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
    let {
      type: t
    } = e;
    return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  })
}

function M(e, t) {
  var n, o, u, r, _;
  let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
  if (null != i) {
    if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == i ? void 0 : null === (u = i.fields) || void 0 === u ? void 0 : null === (o = u.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === o ? void 0 : o.rawValue;
    if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == i ? void 0 : null === (_ = i.fields) || void 0 === _ ? void 0 : null === (r = _.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === r ? void 0 : r.rawValue
  }
}

function R(e, t) {
  var n, o;
  let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.NOOP_NULL,
    E = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
      if (null != t) return t
    }(e),
    s = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
      if (null != t) return t
    }(e),
    A = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
      if (null != t) return t
    }(e),
    T = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
      if (null != t) return t
    }(e);
  if (null != T) {
    let e = function(e, t, n) {
      switch (t) {
        case a.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
          return function(e) {
            switch (e) {
              case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
              case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
              default:
                return
            }
          }(e);
        case a.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
          return function(e) {
            switch (e) {
              case i.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
              case i.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
              case i.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
              default:
                return
            }
          }(n);
        case a.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
          return function() {
            return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
          }()
      }
    }(E, s, A);
    if (null != e) return e
  }
  let l = M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    O = d.default.can(N.Permissions.VIEW_CHANNEL, t);
  let c = (n = t, O ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : "#".concat(I.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : "#".concat(I.default.Messages.NO_ACCESS)),
    R = null != t && O ? _ : N.NOOP_NULL,
    f = function(e, t, n) {
      let o = M(e, r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
      if (null == o) return null;
      let u = "blocked" === o ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK;
      return u.format({
        channelName: t,
        channelHook: n
      })
    }(e, c, _);
  return null != f ? f : null != l ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
    channelName: c,
    channelHook: R
  }) : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
    channelName: c,
    channelHook: R
  })
}

function f(e) {
  switch (e) {
    case E.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case E.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case E.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    default:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
  }
}

function S(e) {
  var t, n;
  let o = M(e, _.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
    u = M(e, _.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
    r = M(e, _.AutomodNotificationEmbedKeys.RAID_DATETIME),
    i = M(e, _.AutomodNotificationEmbedKeys.DMS_SENT),
    a = M(e, _.AutomodNotificationEmbedKeys.RAID_TYPE),
    E = M(e, _.AutomodNotificationEmbedKeys.RESOLVED_REASON),
    s = M(e, _.AutomodNotificationEmbedKeys.DECISION_ID),
    A = M(e, _.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
    joinAttempts: null != u ? parseInt(u) : void 0,
    raidDatetime: null != r ? new Date(r) : void 0,
    dmsSent: null != i ? parseInt(i) : void 0,
    raidType: null != a ? a : void 0,
    resolvedReason: null != E ? E : void 0,
    decisionId: null != s ? s : void 0,
    suspiciousMentionActivityUntil: null != A ? new Date(A) : void 0
  }
}

function D(e) {
  let t = M(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
    n = M(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
    o = (0, T.parseAlertActionsExecution)(n);
  return {
    content: function(e) {
      var t, n;
      let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
      return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
    }(e),
    ruleName: M(e, r.AutomodMessageEmbedKeys.RULE_NAME),
    decisionId: M(e, r.AutomodMessageEmbedKeys.DECISION_ID),
    keyword: M(e, r.AutomodMessageEmbedKeys.KEYWORD),
    keywordMatchedContent: M(e, r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    timeoutDuration: M(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
    quarantineType: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
    quarantineAction: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
    decisionReason: M(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
    embedChannel: A.default.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != o ? o : void 0
  }
}

function m(e) {
  let t = o.useMemo(() => D(e), [e]),
    n = (0, s.useStateFromStores)([A.default], () => A.default.getChannel(t.embedChannelId), [t.embedChannelId]);
  return {
    ...t,
    embedChannel: n
  }
}

function L(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = D(e);
  return null != t ? t : null
}

function U(e) {
  if (null == e) return I.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
  switch (e) {
    case l.RaidResolutionType.LEGITIMATE_ACTIVITY:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case l.RaidResolutionType.DM_SPAM:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case l.RaidResolutionType.JOIN_RAID:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
  }
}

function C(e) {
  return M(e, _.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
}
let y = void 0