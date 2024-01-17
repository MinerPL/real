"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s, i, r, a = n("446674"),
  o = n("95410"),
  d = n("913144"),
  u = n("105059"),
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
  T = m.initialState.highestLastMessageId,
  C = m.initialState.readStateVersion,
  S = m.initialState.userGuildSettingsVersion,
  I = null !== (s = m.initialState.userSettingsVersion) && void 0 !== s ? s : -1,
  A = m.initialState.cacheCreationDate,
  D = m.initialState.apiCodeVersion,
  N = null !== (i = m.initialState.privateChannelsVersion) && void 0 !== i ? i : "0",
  O = new Set(null !== (r = m.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== r ? r : []),
  b = m.initialState.lastSelectedGuildId,
  P = !1;

function R(e) {
  null != e && 1 === g.default.compare(e, T) && (T = e)
}

function V() {
  T = "0", C = 0, S = -1, I = -1, N = "0", m.clear(), D = 0, O.clear()
}
class k extends a.default.Store {
  initialize() {
    this.waitFor(f.default), this.syncWith([c.default], () => {
      if (!P) return !1;
      b = c.default.getGuildId()
    })
  }
  persist(e) {
    E.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == A && (A = Date.now()), p = e, m.persist(f.default.getId(), {
      nonce: e,
      version: v.CACHE_VERSION,
      useGuildVersions: y,
      highestLastMessageId: T,
      readStateVersion: C,
      userGuildSettingsVersion: S,
      userSettingsVersion: I,
      cacheCreationDate: A,
      privateChannelsVersion: N,
      apiCodeVersion: D,
      guildIdsRequiringDeletedIdsSync: Array.from(O),
      lastSelectedGuildId: b
    }), o.default.remove("GuildIdsRequiringDeletedIdsSync")
  }
  clear() {
    V()
  }
  getClientState() {
    let e = y && (0, h.isCacheEnabled)() ? Object.fromEntries(u.default.getCommittedVersions()) : {};
    return {
      knownGuildVersions: e,
      highestLastMessageId: T,
      readStateVersion: C,
      userGuildSettingsVersion: S,
      userSettingsVersion: I,
      privateChannelsVersion: N,
      apiCodeVersion: D,
      lastSelectedGuildId: b
    }
  }
  getGuildIdsRequiringDeletedIdsSync() {
    return O
  }
  getSavedNonce() {
    return p
  }
}
k.displayName = "ClientStateStore";
var M = new k(d.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && O.add(t.id);
    null != e.apiCodeVersion && (D = e.apiCodeVersion)
  },
  CONNECTION_OPEN: function(e) {
    var t, n, s, i, r, a;
    let {
      guilds: o,
      readState: d,
      userGuildSettings: u,
      userSettingsProto: l,
      apiCodeVersion: f
    } = e;
    for (let e of (C = d.version, S = u.version, I = null !== (n = null == l ? void 0 : null === (t = l.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1, D = f, P = !0, y = !0, o)) e.unableToSyncDeletes && O.add(e.id), e.unableToSyncDeletes && O.add(e.id), null === (s = e.channels) || void 0 === s || s.forEach(e => R(e.lastMessageId)), null === (r = e.channelUpdates) || void 0 === r || null === (i = r.writes) || void 0 === i || i.forEach(e => R(e.lastMessageId)), null === (a = e.channelTimestampUpdates) || void 0 === a || a.forEach(e => R(e.last_message_id))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    let e = _.default.getMutablePrivateChannels();
    for (let t in e) {
      1 === g.default.compare(t, N) && (N = t);
      let n = e[t].lastMessageId;
      null != n && 1 === g.default.compare(n, N) && (N = n)
    }
  },
  DELETED_ENTITY_IDS: function(e) {
    O.delete(e.guild_id)
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
    !i && !r && (R(n), (null === (t = _.default.getChannel(s)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === g.default.compare(n, N) && (N = n))
  },
  GUILD_CREATE: function(e) {
    var t, n, s, i;
    let {
      guild: r
    } = e;
    !r.unavailable && (r.unableToSyncDeletes && O.add(r.id), null === (t = r.channels) || void 0 === t || t.forEach(e => R(e.lastMessageId)), null === (s = r.channelUpdates) || void 0 === s || null === (n = s.writes) || void 0 === n || n.forEach(e => R(e.lastMessageId)), null === (i = r.channelTimestampUpdates) || void 0 === i || i.forEach(e => R(e.last_message_id)), r.unableToSyncDeletes && O.add(r.id))
  },
  CLEAR_GUILD_CACHE: V,
  CLEAR_CACHES: V,
  LOGOUT: V,
  LOGIN: V,
  MESSAGE_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? C = t : E.log("Received null read states version", n)
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      version: t,
      ...n
    } = e;
    null != t ? C = t : E.log("Received null read states version", n)
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.version && e.version > S && (S = e.version)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    if (null != t.proto.versions) {
      var n;
      I = null !== (n = t.proto.versions.dataVersion) && void 0 !== n ? n : -1
    }
  }
})