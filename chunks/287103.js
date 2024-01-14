"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("424973"), s("222007"), s("843762");
var a = s("917351"),
  n = s.n(a),
  l = s("316693"),
  i = s("446674"),
  r = s("913144"),
  o = s("242020"),
  d = s("233069"),
  u = s("26989"),
  c = s("305961"),
  E = s("49111");
let _ = [E.Permissions.KICK_MEMBERS, E.Permissions.BAN_MEMBERS, E.Permissions.ADMINISTRATOR, E.Permissions.MANAGE_CHANNELS, E.Permissions.MANAGE_GUILD, E.Permissions.MANAGE_MESSAGES, E.Permissions.MANAGE_NICKNAMES, E.Permissions.MANAGE_ROLES, E.Permissions.MANAGE_WEBHOOKS, E.Permissions.MANAGE_GUILD_EXPRESSIONS, E.Permissions.MOVE_MEMBERS, E.Permissions.MUTE_MEMBERS, E.Permissions.DEAFEN_MEMBERS],
  T = null,
  I = [],
  S = [],
  N = [],
  g = [],
  f = [],
  A = [],
  L = [],
  m = [],
  C = !0,
  O = !1,
  h = !1,
  R = !0,
  D = !1,
  M = null,
  G = E.AuditLogActions.ALL,
  x = {},
  p = 0;

function U(e) {
  let t = [],
    s = 0;
  return e.reverse().forEach(e => {
    var a, l, i;
    let r = [],
      u = null,
      c = null,
      _ = null;
    if (null != e.reason && r.push(new o.AuditLogChange(E.AuditLogChangeKeys.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new o.AuditLogChange(t.key, t.old_value, t.new_value);
        r.push(e), e.key === E.AuditLogChangeKeys.NAME ? u = e : e.key === E.AuditLogChangeKeys.TYPE ? _ = e : e.key === E.AuditLogChangeKeys.TITLE && (c = e)
      }
    if (e.action_type === E.AuditLogActions.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        s = new o.AuditLogChange(E.AuditLogChangeKeys.PRUNE_DELETE_DAYS, null, t);
      r.push(s)
    }
    e.action_type === E.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE && (null === (l = e.options) || void 0 === l ? void 0 : l.auto_moderation_rule_name) != null && r.push(new o.AuditLogChange(E.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === E.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE && (null === (a = e.options) || void 0 === a ? void 0 : a.status) != null && r.push(new o.AuditLogChange(E.AuditLogChangeKeys.STATUS, null, e.options.status));
    let T = new o.default({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: r,
        options: e.options
      }),
      I = t[0];
    if (function(e, t, s) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && n.isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < a && s < l && t.targetType !== E.AuditLogTargetTypes.INVITE && t.action !== E.AuditLogActions.MESSAGE_DELETE && t.action !== E.AuditLogActions.MESSAGE_BULK_DELETE && t.action !== E.AuditLogActions.MESSAGE_PIN && t.action !== E.AuditLogActions.MESSAGE_UNPIN && t.action !== E.AuditLogActions.MEMBER_MOVE && t.action !== E.AuditLogActions.MEMBER_DISCONNECT && t.action !== E.AuditLogActions.BOT_ADD && t.action !== E.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== E.AuditLogActions.MEMBER_PRUNE
      }(I, T, s)) {
      t[0] = I.merge({
        changes: [...I.changes, ...T.changes],
        timestampEnd: T.timestampStart
      }), s++;
      return
    }
    if (T.actionType === E.AuditLogActionTypes.DELETE && (null != u || null != c)) {
      let e = null !== (i = null == u ? void 0 : u.oldValue) && void 0 !== i ? i : null == c ? void 0 : c.oldValue;
      (T.targetType === E.AuditLogTargetTypes.CHANNEL || T.targetType === E.AuditLogTargetTypes.CHANNEL_OVERWRITE) && null !== _ && (0, d.isGuildSelectableChannelType)(_.oldValue) && (e = "#".concat(e)), null == x[T.targetType] ? x[T.targetType] = {
        [T.targetId]: e
      } : x[T.targetType][T.targetId] = e
    }
    s = 0, t.unshift(T)
  }), t
}

function v(e) {
  let {
    section: t
  } = e;
  if (t !== E.GuildSettingsSections.AUDIT_LOG) return !1;
  let s = u.default.getMembers(T),
    a = c.default.getGuild(T);
  N = n(s).filter(e => e.roles.some(t => {
    if (null != a) {
      if (e.userId === a.ownerId) return !0;
      let s = a.roles[t];
      return null != s && _.some(e => l.default.has(s.permissions, e))
    }
  })).map(e => e.userId).value()
}
class j extends i.default.Store {
  get logs() {
    return I
  }
  get integrations() {
    return S
  }
  get webhooks() {
    return g
  }
  get guildScheduledEvents() {
    return f
  }
  get automodRules() {
    return A
  }
  get threads() {
    return L
  }
  get applicationCommands() {
    return m
  }
  get isInitialLoading() {
    return C
  }
  get isLoading() {
    return O
  }
  get isLoadingNextPage() {
    return h
  }
  get hasOlderLogs() {
    return R
  }
  get hasError() {
    return D
  }
  get userIds() {
    return N
  }
  get userIdFilter() {
    return M
  }
  get actionFilter() {
    return G
  }
  get deletedTargets() {
    return x
  }
  get groupedFetchCount() {
    return p
  }
}
j.displayName = "GuildSettingsAuditLogStore";
var P = new j(r.default, {
  AUDIT_LOG_FETCH_START: function() {
    O = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    p = 0, C = !1, O = !1, R = !0, D = !1, I = U(e.logs), S = e.integrations, g = e.webhooks, f = e.guildScheduledEvents, A = null !== (t = e.automodRules) && void 0 !== t ? t : [], L = e.threads, m = e.applicationCommands, e.logs.length < E.AUDIT_LOG_PAGE_LIMIT && (R = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    O = !1, D = !0, I = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    h = !0, t && p++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: s,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: l,
      threads: i,
      applicationCommands: r
    } = e;
    if (h = !1, S = s, g = a, f = n, A = l, L = i, m = r, (0 === t.length || t.length < E.AUDIT_LOG_PAGE_LIMIT) && (R = !1), t.length > 0) {
      let e = U(t);
      I = [...I, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    h = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    G = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    M = t
  },
  GUILD_SETTINGS_SET_SECTION: v,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: s
    } = e;
    return T = t, v({
      section: s
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    I = [], N = [], G = E.AuditLogActions.ALL, M = null, x = {}, p = 0, C = !0, S = [], g = [], f = [], A = [], L = []
  }
})