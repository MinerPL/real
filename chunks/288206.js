"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var i, s, r = n("446674"),
  a = n("95410"),
  o = n("913144"),
  l = n("105059"),
  u = n("11275"),
  d = n("605250"),
  c = n("271938"),
  f = n("42203"),
  _ = n("162771"),
  h = n("299039"),
  g = n("91131"),
  m = n("70754"),
  E = n("548578");
let p = new d.default("ClientStateStore"),
  v = g.initialState.nonce,
  S = g.initialState.useGuildVersions,
  T = g.initialState.highestLastMessageId,
  I = g.initialState.readStateVersion,
  C = g.initialState.userGuildSettingsVersion,
  A = g.initialState.cacheCreationDate,
  y = g.initialState.apiCodeVersion,
  N = null !== (i = g.initialState.privateChannelsVersion) && void 0 !== i ? i : "0",
  R = new Set(null !== (s = g.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== s ? s : []),
  O = g.initialState.lastSelectedGuildId,
  D = !1;

function P(e) {
  null != e && 1 === h.default.compare(e, T) && (T = e)
}

function b() {
  T = "0", I = 0, C = -1, N = "0", g.clear(), y = 0, R.clear()
}
class L extends r.default.Store {
  initialize() {
    this.waitFor(c.default), this.syncWith([_.default], () => {
      if (!D) return !1;
      O = _.default.getGuildId()
    })
  }
  persist(e) {
    p.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == A && (A = Date.now()), v = e, g.persist(c.default.getId(), {
      nonce: e,
      version: E.CACHE_VERSION,
      useGuildVersions: S,
      highestLastMessageId: T,
      readStateVersion: I,
      userGuildSettingsVersion: C,
      cacheCreationDate: A,
      privateChannelsVersion: N,
      apiCodeVersion: y,
      guildIdsRequiringDeletedIdsSync: Array.from(R),
      lastSelectedGuildId: O
    }), a.default.remove("GuildIdsRequiringDeletedIdsSync")
  }
  clear() {
    b()
  }
  async getClientState() {
    let [e, t] = await Promise.all([S && (0, m.isCacheEnabled)() ? l.default.getCommittedVersionsAsync() : Promise.resolve({}), S && (0, m.isCacheEnabled)() ? u.default.getCommittedVersions() : Promise.resolve({})]);
    return {
      knownGuildVersions: e,
      highestLastMessageId: T,
      readStateVersion: I,
      userGuildSettingsVersion: C,
      privateChannelsVersion: N,
      apiCodeVersion: y,
      lastSelectedGuildId: O,
      userSettingsVersion: t.user_settings_version
    }
  }
  getGuildIdsRequiringDeletedIdsSync() {
    return R
  }
  getSavedNonce() {
    return v
  }
}
L.displayName = "ClientStateStore";
var M = new L(o.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && R.add(t.id);
    null != e.apiCodeVersion && (y = e.apiCodeVersion)
  },
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t,
      readState: n,
      userGuildSettings: i,
      apiCodeVersion: s
    } = e;
    for (let e of (I = n.version, C = i.version, y = s, D = !0, S = !0, t)) {
      var r, a, o, l;
      e.unableToSyncDeletes && R.add(e.id), e.unableToSyncDeletes && R.add(e.id), null === (r = e.channels) || void 0 === r || r.forEach(e => P(e.lastMessageId)), null === (o = e.channelUpdates) || void 0 === o || null === (a = o.writes) || void 0 === a || a.forEach(e => P(e.lastMessageId)), null === (l = e.channelTimestampUpdates) || void 0 === l || l.forEach(e => P(e.last_message_id))
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    let e = f.default.getMutablePrivateChannels();
    for (let t in e) {
      1 === h.default.compare(t, N) && (N = t);
      let n = e[t].lastMessageId;
      null != n && 1 === h.default.compare(n, N) && (N = n)
    }
  },
  DELETED_ENTITY_IDS: function(e) {
    R.delete(e.guild_id)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      message: {
        id: n,
        channel_id: i
      },
      isPushNotification: s,
      optimistic: r
    } = e;
    !s && !r && (P(n), (null === (t = f.default.getChannel(i)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === h.default.compare(n, N) && (N = n))
  },
  GUILD_CREATE: function(e) {
    var t, n, i, s;
    let {
      guild: r
    } = e;
    !r.unavailable && (r.unableToSyncDeletes && R.add(r.id), null === (t = r.channels) || void 0 === t || t.forEach(e => P(e.lastMessageId)), null === (i = r.channelUpdates) || void 0 === i || null === (n = i.writes) || void 0 === n || n.forEach(e => P(e.lastMessageId)), null === (s = r.channelTimestampUpdates) || void 0 === s || s.forEach(e => P(e.last_message_id)), r.unableToSyncDeletes && R.add(r.id))
  },
  CLEAR_GUILD_CACHE: b,
  CLEAR_CACHES: b,
  LOGOUT: b,
  LOGIN: b,
  MESSAGE_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? I = t : p.log("Received null read states version", n)
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? I = t : p.log("Received null read states version", n)
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.version && e.version > C && (C = e.version)
  }
})