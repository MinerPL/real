"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("222007"), n("702976"), n("808653");
var s = n("917351"),
  i = n.n(s);
n("249654"), n("21121"), n("136511");
var r = n("512395"),
  a = n("401690"),
  o = n("755624"),
  d = n("526311"),
  u = n("233069"),
  l = n("271938"),
  f = n("42203"),
  _ = n("305961"),
  c = n("957255"),
  g = n("660478"),
  m = n("18494"),
  h = n("455079"),
  v = n("282109"),
  E = n("697218"),
  p = n("49111"),
  y = n("724210"),
  C = n("133335");
let T = "null",
  S = {},
  I = new Set,
  A = 0;

function D(e) {
  var t;
  let n = S[null != e ? e : T];
  return {
    unread: !1,
    unreadByType: {},
    unreadChannelId: null,
    mentionCount: 0,
    mentionCounts: {},
    ncMentionCount: 0,
    sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
  }
}

function N(e) {
  var t;
  return S[null != e ? e : T] = null !== (t = S[null != e ? e : T]) && void 0 !== t ? t : D(e)
}

function O(e) {
  let t = N(e);
  t.sentinel++, A++
}

function b(e, t, n) {
  let s = e.guild_id;
  return null != s && n && !((0, u.isThread)(e.type) || v.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(y.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (0 === t || n) {
    let t = e.isThread() ? o.default.isMuted(e.id) || v.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : v.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
    if (t) return !1
  }
  return !(!e.isPrivate() && (b(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !c.default.can(e.accessPermissions, e))) && (t > 0 || v.default.getChannelUnreadMode(e) === C.UnreadMode.IMPORTANT)
}

function k(e) {
  switch (e) {
    case T:
    case null:
    case void 0:
      return null;
    default:
      return e
  }
}

function R(e, t) {
  let n = g.default.hasUnread(e, t);
  if (t === C.ReadStateTypes.GUILD_EVENT) return !(v.default.isMuted(e) || v.default.isMuteScheduledEventsEnabled(e)) && n;
  return n
}

function V(e, t) {
  let n = D(e);
  return n.mentionCounts = {
    ...t.mentionCounts
  }, n.unreadByType = {
    ...t.unreadByType
  }, n
}

function M(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function w(e, t) {}

function L(e, t, n) {
  if (M(t), t.mentionCount = i(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return S[null != e ? e : T] = t, null != e && (t.unread ? I.add(e) : I.delete(e)), A++, O(null != e ? e : T), !0;
  return !1
}

function U(e, t) {
  let n = k(e),
    s = N(n),
    i = V(n, s),
    r = !1;
  if (t.forEach(e => {
      let t = f.default.getChannel(e);
      if (null == t) {
        delete i.mentionCounts[e];
        return
      }
      if (t.getGuildId() !== n) return;
      let s = g.default.getMentionCount(e);
      null !== n && !r && g.default.hasUnread(t.id) && P(t, s, !0) && (r = !0, i.unreadChannelId = t.id), s > 0 && P(t, s) ? i.mentionCounts[t.id] = s : delete i.mentionCounts[t.id]
    }), i.unreadByType[C.ReadStateTypes.CHANNEL] = r, i.unreadByType[C.ReadStateTypes.CHANNEL] !== s.unreadByType[C.ReadStateTypes.CHANNEL] && !i.unreadByType[C.ReadStateTypes.CHANNEL]) {
    let e = f.default.getChannel(s.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && g.default.hasUnread(e.id) && P(e))) return F(n);
    null != n && I.add(n), i.unreadByType[C.ReadStateTypes.CHANNEL] = !0
  }
  return L(n, i, s)
}

function G(e, t) {
  if (null == e) return;
  let n = N(e),
    s = V(e, n);
  return s.unreadByType[C.ReadStateTypes.GUILD_EVENT] = R(e, t), L(e, s, n)
}

function F(e, t) {
  let n = k(e),
    s = D(n);
  if (null == n) {
    let e = f.default.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        i = g.default.getMentionCount(t);
      i > 0 && P(n, i) && (s.mentionCount += i, s.mentionCounts[n.id] = i)
    }
  } else {
    let e = v.default.isMuted(n);
    if (e && !1 === t) return !1;
    let i = v.default.getMutedChannels(n),
      d = v.default.getChannelOverrides(n),
      l = (0, r.isOptInEnabledForGuild)(n),
      _ = f.default.getMutableBasicGuildChannelsForGuild(n);
    for (let t in _) {
      let n = _[t],
        r = e || i.has(t) || null != n.parent_id && i.has(n.parent_id),
        a = s.unreadByType[C.ReadStateTypes.CHANNEL],
        {
          mentionCount: o,
          unread: f
        } = g.default.getGuildChannelUnreadState(n, l, d, r, a),
        m = o > 0;
      if (!m && r) continue;
      let h = !a && (!r || m) && f;
      if (h || m) {
        let e = function(e, t, n) {
          if ((0, u.isGuildVocalChannelType)(e.type) && 0 === t || !c.default.canBasicChannel((0, u.getBasicAccessPermissions)(e.type), e) || b(e, t, n)) return !1;
          return !("flags" in e && e.hasFlag(y.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || v.default.getChannelUnreadMode(e) === C.UnreadMode.IMPORTANT)
        }(n, o, l);
        e && (h && (s.unreadByType[C.ReadStateTypes.CHANNEL] = !0, s.unreadChannelId = t), m && (s.mentionCount += o, s.mentionCounts[n.id] = o))
      }
    }
    let m = a.default.getActiveJoinedThreadsForGuild(n);
    for (let t in m)
      for (let n in m[t]) {
        !s.unreadByType[C.ReadStateTypes.CHANNEL] && g.default.hasUnread(n) && !o.default.isMuted(n) && !e && (s.unreadByType[C.ReadStateTypes.CHANNEL] = !0, s.unreadChannelId = n);
        let t = g.default.getMentionCount(n);
        t > 0 && (s.mentionCount += t, s.mentionCounts[n] = t)
      }!s.unreadByType[C.ReadStateTypes.GUILD_EVENT] && R(n, C.ReadStateTypes.GUILD_EVENT) && (s.unreadByType[C.ReadStateTypes.GUILD_EVENT] = !0)
  }
  M(s);
  let i = N(n);
  if (s.unread !== i.unread || s.mentionCount !== i.mentionCount) return S[null != n ? n : T] = s, null != n && (s.unread ? I.add(n) : I.delete(n)), A++, O(null != n ? n : T), !0;
  return !1
}

function x(e) {
  let {
    guilds: t
  } = e;
  S = {}, A = 0, I = new Set, F(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && F(n.id)
  }
}

function B(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  S = {}, A = 0, I = new Set;
  let s = n.entries.length < 500,
    i = new Set;
  for (let e of (s && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0) {
        if (null == e.read_state_type || e.read_state_type === C.ReadStateTypes.CHANNEL) {
          var t;
          i.add(null === (t = f.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
        } else i.add(e.id)
      }
    }), F(null), t)) F(e.id, s ? i.has(e.id) : void 0)
}

function H() {
  S = {}, I = new Set, F(null);
  let e = Object.values(_.default.getGuildIds());
  for (let t of e) F(t)
}

function Y(e) {
  let {
    guild: t
  } = e;
  return F(t.id)
}

function j(e) {
  let {
    guild: t
  } = e;
  return null != S[t.id] && (delete S[t.id], I.delete(t.id), A++, !0)
}

function K(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return U(n, [t])
}

function W() {
  let e = f.default.getChannel(m.default.getChannelId());
  return null != e && U(e.getGuildId(), [e.id])
}

function z(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === l.default.getId() && F(n)
}

function q(e) {
  let {
    channelId: t
  } = e, n = f.default.getChannel(t);
  return null != n && U(n.getGuildId(), [n.id])
}

function X(e) {
  let {
    channelId: t
  } = e, n = f.default.getChannel(t);
  if (null == n) return !1;
  if (null != n.guild_id) {
    let e = N(n.guild_id),
      s = n.isThread() ? !o.default.hasJoined(n.id) || o.default.isMuted(n.id) : v.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
    if ((s || e.unreadByType[C.ReadStateTypes.CHANNEL]) && 0 === g.default.getMentionCount(t)) return !1
  }
  return U(n.getGuildId(), [n.id])
}

function Q(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== p.FAVORITES && null != t && U(n, [t])
}

function Z(e) {
  let {
    channel: t
  } = e;
  return U(t.getGuildId(), [t.id])
}

function J(e) {
  let {
    channels: t
  } = e;
  return i(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => U(n, t.map(e => e.id)) || e, !1)
}

function $(e) {
  let {
    channels: t
  } = e;
  return i(t).map(e => {
    let {
      channelId: t
    } = e;
    return t
  }).filter(e => null != f.default.getChannel(e)).groupBy(e => {
    var t;
    return null === (t = f.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }).reduce((e, t, n) => U(n, t) || e, !1)
}

function ee(e) {
  let {
    channel: t
  } = e;
  return U(t.getGuildId(), [t.id, t.parent_id])
}

function et(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G(t.guild_id, C.ReadStateTypes.GUILD_EVENT)
}

function en(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G(t.guild_id, C.ReadStateTypes.GUILD_EVENT)
}

function es(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return G(t, n)
}

function ei(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return U(n, [t])
}

function er(e) {
  return (0, d.doesThreadMembersActionAffectMe)(e) && U(e.guildId, [e.id])
}

function ea(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return U(n, t.filter(e => o.default.hasJoined(e.id)).map(e => e.id))
}

function eo(e) {
  return null != e.channels && U(e.guildId, e.channels.map(e => e.id))
}

function ed(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}

function eu(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}

function el(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null !== (t = e.guild_id) && void 0 !== t ? t : T
  }));
  return Object.keys(S).reduce((e, t) => n.has(t) && F(t) || e, !1)
}

function ef() {
  for (let e in S) {
    let t = S[e];
    t.ncMentionCount = 0
  }
}

function e_(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}
class ec extends h.default {
  takeSnapshot() {
    return {
      version: ec.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: S,
        unreadGuilds: Array.from(I)
      }
    }
  }
  hasAnyUnread() {
    return I.size > 0
  }
  getStoreChangeSentinel() {
    return A
  }
  getMutableUnreadGuilds() {
    return I
  }
  getMutableGuildStates() {
    return S
  }
  hasUnread(e) {
    return I.has(e)
  }
  getMentionCount(e) {
    return N(e).mentionCount
  }
  getMutableGuildReadState(e) {
    return N(e)
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = f.default.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n) {
        if ((!n.isGuildVocal() || 0 !== g.default.getMentionCount(e)) && c.default.can(n.accessPermissions, n) && g.default.hasUnread(e)) return !0
      }
    }
    let n = a.default.getActiveJoinedThreadsForGuild(e);
    for (let e in n) {
      let t = f.default.getChannel(e);
      if (null != t && P(t)) {
        for (let t in n[e])
          if (g.default.hasUnread(t)) return !0
      }
    }
    return !!g.default.hasUnread(e, C.ReadStateTypes.GUILD_EVENT) || !1
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in S) {
      let s = S[n];
      (!0 !== e || n !== T) && (t += s.mentionCount)
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in S) {
      let s = S[n];
      (!0 !== e || n !== T) && (t += s.ncMentionCount)
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = S[T];
    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
  }
  getMentionCountForChannels(e, t) {
    let n = 0,
      s = S[e];
    return null == s ? 0 : (t.forEach(e => {
      let t = s.mentionCounts[e];
      n += null != t ? t : 0
    }), n)
  }
  getGuildChangeSentinel(e) {
    return N(e).sentinel
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
      null != e && (S = e.guilds, I = new Set(e.unreadGuilds))
    }, this.registerActionHandlers({
      CONNECTION_OPEN: B,
      OVERLAY_INITIALIZE: x,
      CACHE_LOADED_LAZY: this.loadCache,
      GUILD_CREATE: Y,
      GUILD_DELETE: j,
      MESSAGE_CREATE: X,
      MESSAGE_ACK: q,
      BULK_ACK: $,
      UPDATE_CHANNEL_DIMENSIONS: q,
      CHANNEL_SELECT: Q,
      CHANNEL_DELETE: K,
      WINDOW_FOCUS: W,
      GUILD_ACK: ed,
      GUILD_ROLE_CREATE: eu,
      GUILD_ROLE_DELETE: eu,
      GUILD_ROLE_UPDATE: eu,
      CHANNEL_CREATE: Z,
      CHANNEL_UPDATES: J,
      THREAD_CREATE: ee,
      THREAD_UPDATE: ee,
      THREAD_DELETE: ee,
      THREAD_LIST_SYNC: ea,
      THREAD_MEMBER_UPDATE: ei,
      THREAD_MEMBERS_UPDATE: er,
      PASSIVE_UPDATE_V1: eo,
      GUILD_MEMBER_UPDATE: z,
      USER_GUILD_SETTINGS_FULL_UPDATE: el,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: e_,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: e_,
      USER_GUILD_SETTINGS_GUILD_UPDATE: e_,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: e_,
      GUILD_FEATURE_ACK: es,
      GUILD_SCHEDULED_EVENT_CREATE: et,
      GUILD_SCHEDULED_EVENT_UPDATE: et,
      GUILD_SCHEDULED_EVENT_DELETE: en,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: q,
      LOAD_MESSAGES_SUCCESS: q,
      CHANNEL_ACK: q,
      CHANNEL_LOCAL_ACK: q,
      NOTIFICATION_SETTINGS_UPDATE: H,
      RECOMPUTE_READ_STATES: H,
      VOICE_CHANNEL_SELECT: q,
      ENABLE_AUTOMATIC_ACK: q,
      RESORT_THREADS: q,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ef,
      TRY_ACK: q
    }), this.waitFor(f.default, m.default, g.default, c.default, l.default, E.default, v.default, a.default, o.default)
  }
}
ec.displayName = "GuildReadStateStore", ec.LATEST_SNAPSHOT_VERSION = 1;
var eg = new ec