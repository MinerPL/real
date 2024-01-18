"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("222007");
var s, i, r = n("446674"),
  a = n("95410"),
  o = n("913144"),
  d = n("105059"),
  u = n("11275"),
  l = n("605250"),
  f = n("271938"),
  _ = n("42203"),
  c = n("162771"),
  g = n("299039"),
  m = n("91131"),
  h = n("70754"),
  v = n("548578");
let E = new l.default("ClientStateStore"),
  p = m.initialState.nonce,
  y = m.initialState.useGuildVersions,
  C = m.initialState.highestLastMessageId,
  T = m.initialState.readStateVersion,
  S = m.initialState.userGuildSettingsVersion,
  I = m.initialState.cacheCreationDate,
  A = m.initialState.apiCodeVersion,
  D = null !== (s = m.initialState.privateChannelsVersion) && void 0 !== s ? s : "0",
  N = new Set(null !== (i = m.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== i ? i : []),
  O = m.initialState.lastSelectedGuildId,
  b = !1;

function P(e) {
  null != e && 1 === g.default.compare(e, C) && (C = e)
}

function k() {
  C = "0", T = 0, S = -1, D = "0", m.clear(), A = 0, N.clear()
}
class R extends r.default.Store {
  initialize() {
    this.waitFor(f.default), this.syncWith([c.default], () => {
      if (!b) return !1;
      O = c.default.getGuildId()
    })
  }
  persist(e) {
    E.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == I && (I = Date.now()), p = e, m.persist(f.default.getId(), {
      nonce: e,
      version: v.CACHE_VERSION,
      useGuildVersions: y,
      highestLastMessageId: C,
      readStateVersion: T,
      userGuildSettingsVersion: S,
      cacheCreationDate: I,
      privateChannelsVersion: D,
      apiCodeVersion: A,
      guildIdsRequiringDeletedIdsSync: Array.from(N),
      lastSelectedGuildId: O
    }), a.default.remove("GuildIdsRequiringDeletedIdsSync")
  }
  clear() {
    k()
  }
  getClientState() {
    let e = y && (0, h.isCacheEnabled)() ? Object.fromEntries(d.default.getCommittedVersions()) : {},
      t = y && (0, h.isCacheEnabled)() ? Object.fromEntries(u.default.getCommittedVersions()) : {};
    return {
      knownGuildVersions: e,
      highestLastMessageId: C,
      readStateVersion: T,
      userGuildSettingsVersion: S,
      privateChannelsVersion: D,
      apiCodeVersion: A,
      lastSelectedGuildId: O,
      userSettingsVersion: t.user_settings_version
    }
  }
  getGuildIdsRequiringDeletedIdsSync() {
    return N
  }
  getSavedNonce() {
    return p
  }
}
R.displayName = "ClientStateStore";
var V = new R(o.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && N.add(t.id);
    null != e.apiCodeVersion && (A = e.apiCodeVersion)
  },
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t,
      readState: n,
      userGuildSettings: s,
      apiCodeVersion: i
    } = e;
    for (let e of (T = n.version, S = s.version, A = i, b = !0, y = !0, t)) {
      var r, a, o, d;
      e.unableToSyncDeletes && N.add(e.id), e.unableToSyncDeletes && N.add(e.id), null === (r = e.channels) || void 0 === r || r.forEach(e => P(e.lastMessageId)), null === (o = e.channelUpdates) || void 0 === o || null === (a = o.writes) || void 0 === a || a.forEach(e => P(e.lastMessageId)), null === (d = e.channelTimestampUpdates) || void 0 === d || d.forEach(e => P(e.last_message_id))
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    let e = _.default.getMutablePrivateChannels();
    for (let t in e) {
      1 === g.default.compare(t, D) && (D = t);
      let n = e[t].lastMessageId;
      null != n && 1 === g.default.compare(n, D) && (D = n)
    }
  },
  DELETED_ENTITY_IDS: function(e) {
    N.delete(e.guild_id)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      message: {
        id: n,
        channel_id: s
      },
      isPushNotification: i,
      optimistic: r
    } = e;
    !i && !r && (P(n), (null === (t = _.default.getChannel(s)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === g.default.compare(n, D) && (D = n))
  },
  GUILD_CREATE: function(e) {
    var t, n, s, i;
    let {
      guild: r
    } = e;
    !r.unavailable && (r.unableToSyncDeletes && N.add(r.id), null === (t = r.channels) || void 0 === t || t.forEach(e => P(e.lastMessageId)), null === (s = r.channelUpdates) || void 0 === s || null === (n = s.writes) || void 0 === n || n.forEach(e => P(e.lastMessageId)), null === (i = r.channelTimestampUpdates) || void 0 === i || i.forEach(e => P(e.last_message_id)), r.unableToSyncDeletes && N.add(r.id))
  },
  CLEAR_GUILD_CACHE: k,
  CLEAR_CACHES: k,
  LOGOUT: k,
  LOGIN: k,
  MESSAGE_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? T = t : E.log("Received null read states version", n)
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? T = t : E.log("Received null read states version", n)
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.version && e.version > S && (S = e.version)
  }
})