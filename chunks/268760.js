"use strict";
n.r(t), n.d(t, {
  UnreadBarMode: function() {
    return l
  },
  default: function() {
    return P
  }
}), n("222007");
var l, a, s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  o = n("913144"),
  u = n("615387"),
  d = n("488464"),
  c = n("998716"),
  f = n("755624"),
  h = n("42203"),
  C = n("305961"),
  p = n("660478"),
  m = n("162771"),
  E = n("282109"),
  g = n("316133"),
  I = n("449008"),
  S = n("123561"),
  _ = n("49111");
(a = l || (l = {})).HIDDEN = "hidden", a.UNREAD = "unread", a.MENTIONS = "mentions", a.VOICE_CHANNELS = "voice-channels";
let N = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  T = {
    topBar: N,
    bottomBar: N
  },
  A = {},
  L = {};

function v(e) {
  let t = h.default.getChannel(e);
  if (null == t || null == t.getGuildId() || t.isGuildVocal()) return !1;
  let n = t.isThread() ? f.default.isMuted(t.id) : E.default.isChannelMuted(t.getGuildId(), t.id);
  return !n && (0, u.getHasImportantUnread)(t)
}

function x(e) {
  let t = h.default.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = E.default.isGuildCollapsed(n),
    a = E.default.isChannelMuted(n, t.id);
  return (!l || !a) && p.default.getMentionCount(e) > 0
}

function R(e) {
  return e.isGuildStageVoice() ? d.default.getMutableParticipants(e.id, c.StageChannelParticipantNamedIndex.SPEAKER).length > 0 : g.default.getVoiceStatesForChannel(e).length > 0
}

function M(e) {
  var t, n, l;
  let {
    guildChannels: a
  } = S.default.getGuildWithoutChangingCommunityRows(e), s = a.getChannels(null !== (t = L[e]) && void 0 !== t ? t : []);
  if (null == s || 0 === s.length) return !1;
  let r = null,
    o = null,
    u = null,
    d = null,
    c = !0,
    f = !0,
    h = !1,
    C = a.getCategoryFromSection(a.voiceChannelsSectionNumber),
    m = null !== (n = null == C ? void 0 : C.getShownChannelIds()) && void 0 !== n ? n : [],
    [E, g, I] = a.getSlicedChannels(s);
  for (let e = 0; e < g.length; e++) {
    let t = g[e];
    if ((v(t.id) || i.some(t.threadIds, v)) && (f = !1), (x(t.id) || i.some(t.threadIds, x)) && (c = !1), m.includes(t.id) && (h = !0), !f && !c && h) break
  }
  let _ = 0,
    T = !1,
    M = 0,
    O = !1;
  if (f || c)
    for (let e = E.length - 1; e >= 0; e--) {
      let t = E[e];
      (v(t.id) || i.some(t.threadIds, v)) && (null == o && (o = t.id), T = !0), (x(t.id) || i.some(t.threadIds, x)) && (null == r && (r = t.id), _ += p.default.getMentionCount(t.id) + i.sumBy(t.threadIds, p.default.getMentionCount))
    }
  if (f || c)
    for (let e = 0; e < I.length; e++) {
      let t = I[e];
      if (!f && !c) break;
      (v(t.id) || i.some(t.threadIds, v)) && (null == d && (d = t.id), O = !0), (x(t.id) || i.some(t.threadIds, x)) && (null == u && (u = t.id), M += p.default.getMentionCount(t.id) + i.sumBy(t.threadIds, p.default.getMentionCount))
    }
  let y = null,
    D = null,
    b = null !== (l = null == C ? void 0 : C.getChannelRecords()) && void 0 !== l ? l : [];
  c && M > 0 ? y = {
    mode: "mentions",
    mentionCount: M,
    targetChannelId: u
  } : !h && i.some(b, R) ? y = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : f && O && (y = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: d
  }), c && _ > 0 ? D = {
    mode: "mentions",
    mentionCount: _,
    targetChannelId: r
  } : f && T && (D = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: o
  });
  let j = null != D && (null == y || "mentions" !== y.mode && "mentions" === D.mode),
    G = null != y && ("mentions" === y.mode || !j);
  return A[e] = {
    topBar: j && null != D ? D : N,
    bottomBar: G && null != y ? y : N
  }, !0
}
let O = i.throttle(M, 200);

function y(e) {
  let {
    guildId: t
  } = e, n = C.default.getGuild(t);
  return !!(null != n && n.hasFeature(_.GuildFeatures.COMMUNITY)) && O(t)
}

function D(e) {
  let {
    id: t
  } = e, n = h.default.getChannel(t);
  if (null == n) return !1;
  let l = C.default.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && O(n.guild_id)
}

function b(e) {
  let {
    channel: t
  } = e, n = h.default.getChannel(t.id);
  if (null == n) return !1;
  let l = C.default.getGuild(t.guild_id);
  return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && O(n.guild_id)
}

function j(e) {
  let {
    channelId: t
  } = e, n = h.default.getChannel(t);
  if (null == n) return !1;
  let l = C.default.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && m.default.getGuildId() === n.guild_id && O(n.guild_id)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return null != t && O(t)
}
class U extends r.default.Store {
  initialize() {
    this.waitFor(S.default, p.default, E.default, f.default, g.default, m.default, C.default)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null !== (t = A[e]) && void 0 !== t ? t : T
  }
}
U.displayName = "ChannelListUnreadsStore";
var P = new U(o.default, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, l = C.default.getGuild(t);
    return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && null != n && !i.isEqual(L[t], n) && (L[t] = n, M(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return i(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null === (t = h.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id
    }).filter(I.isNotNullish).uniq().forEach(e => {
      let t = C.default.getGuild(e);
      null != t && t.hasFeature(_.GuildFeatures.COMMUNITY) && O(e) && (n = !0)
    }), n
  },
  CHANNEL_ACK: j,
  CHANNEL_DELETE: b,
  CHANNEL_LOCAL_ACK: j,
  MESSAGE_ACK: j,
  MESSAGE_CREATE: j,
  MESSAGE_DELETE_BULK: j,
  MESSAGE_DELETE: j,
  PASSIVE_UPDATE_V1: function(e) {
    let t = C.default.getGuild(e.guildId);
    return !!(null != e.channels && null != t && t.hasFeature(_.GuildFeatures.COMMUNITY)) && O(e.guildId)
  },
  RESORT_THREADS: j,
  THREAD_CREATE: b,
  THREAD_DELETE: b,
  THREAD_LIST_SYNC: y,
  THREAD_MEMBER_UPDATE: D,
  THREAD_MEMBERS_UPDATE: D,
  THREAD_UPDATE: b,
  BULK_CLEAR_RECENTS: y,
  CATEGORY_COLLAPSE_ALL: y,
  CATEGORY_EXPAND_ALL: y,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = m.default.getGuildId();
    if (null == n) return !1;
    let l = new Set(t.map(e => e.guildId));
    if (!l.has(n)) return !1;
    let a = A[n];
    return null != a && "voice-channels" === a.bottomBar.mode && O(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && O(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: G,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G
})