"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("424973");
var a = n("70754"),
  s = n("605250"),
  i = n("619443"),
  l = n("233069"),
  r = n("271938"),
  o = n("42203"),
  u = n("305961"),
  d = n("957255"),
  c = n("845078"),
  f = n("802493"),
  E = n("846527");
let _ = new s.default("GuildBasicChannels");

function h(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.default.computeBasicPermissions(e) !== d.default.computeBasicPermissions(t)
}
var C = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [n, a] = await Promise.all([f.default.basicChannels(e).getKvEntries(), f.default.syncedBasicChannels(e).getKvEntries()]),
      s = performance.now() - t,
      [i, l] = function(e) {
        let t = [],
          n = [];
        for (let [a, s] of e)(s ? t : n).push(a);
        return [t, n]
      }(a),
      r = new Set(i);
    return this.synced = r, _.verbose("loaded in ".concat(s, "ms (guilds: ").concat(n.length, ", synced: ").concat(r.size, " unsynced: ").concat(l.length, ")")), {
      all: n,
      stale: l,
      channels: n.filter(e => {
        let [t, n] = e;
        return r.has(t)
      })
    }
  }
  handleClearGuildCache(e) {
    f.default.basicChannelsTransaction(e).delete(), f.default.syncedBasicChannelsTransaction(e).delete(), this.handleReset()
  }
  handleChannelCreate(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelDelete(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelUpdates(e, t) {
    for (let n of e.channels.filter(e => null != e.guild_id)) {
      let e = o.default.getBasicChannel(n.id);
      h(e, n) && this.unsync(n.guild_id, t)
    }
  }
  handleBackgroundSync(e, t) {
    for (let i of e.guilds) switch (i.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var n, a, s;
        let e = e => (0, l.createChannelRecordFromServer)(e, i.id);
        this.onGuildUpdate(i.id, null !== (a = null === (n = i.partial_updates.channels) || void 0 === n ? void 0 : n.map(e)) && void 0 !== a ? a : [], null !== (s = i.partial_updates.deleted_channel_ids) && void 0 !== s ? s : [], t);
        break;
      default:
        this.onGuildSync(i.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  async handlePostConnectionOpen() {
    let e = i.default.lastTimeConnectedChanged(),
      t = f.default.database();
    if (null == this.synced || null == t || !(0, a.isCacheEnabled)()) return;
    let n = u.default.getGuildIds(),
      s = n.filter(e => !this.synced.has(e));
    for (let n of (_.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(s.length, ")")), s)) {
      if (t !== f.default.database() || e !== i.default.lastTimeConnectedChanged()) break;
      _.verbose("optimstically writing basic_channels (guild: ".concat(n, ")"));
      try {
        await t.transaction(e => this.syncOne(n, e))
      } catch (e) {
        _.warn("couldn't optimstically write basic_channel:", e);
        return
      }
      await new Promise(e => setTimeout(e, 1e3))
    }
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleOneGuildCreate(e, t) {
    null != e.channelUpdates ? this.onGuildUpdate(e.id, e.channelUpdates.writes, e.channelUpdates.deletes, t) : this.onGuildSync(e.id, t)
  }
  handleGuildUpdate(e, t) {
    this.unsync(e.guild.id, t)
  }
  handleGuildDelete(e, t) {
    !0 !== e.guild.unavailable && this.delete(e.guild.id, t)
  }
  handleGuildRoleUpdate(e, t) {
    var n;
    let a = e.role,
      s = null === (n = u.default.getGuild(e.guildId)) || void 0 === n ? void 0 : n.getRole(a.id);
    (null == s || a.permissions !== s.permissions) && this.unsync(e.guildId, t)
  }
  handleGuildMemberUpdate(e, t) {
    e.user.id === r.default.getId() && this.unsync(e.guildId, t)
  }
  handleWriteCaches(e, t) {
    this.sync(t)
  }
  handleReset() {
    this.synced = null
  }
  onGuildUpdate(e, t, n, a) {
    (n.length > 0 || t.some(e => h(o.default.getBasicChannel(e.id), e))) && this.unsync(e, a)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var n;
    null === (n = this.synced) || void 0 === n || n.delete(e), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).put(e, !1), E.default.invalidate(e)
  }
  sync(e) {
    let t = performance.now(),
      n = {
        written: 0,
        skipped: 0
      };
    for (let t of u.default.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
    let a = performance.now() - t;
    _.verbose("".concat(n.written, " basic_channel guilds submitted (took: ").concat(a, "ms, skipped: ").concat(n.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var n, a;
    return !(null == u.default.getGuild(e) || (null === (n = this.synced) || void 0 === n ? void 0 : n.has(e))) && (null === (a = this.synced) || void 0 === a || a.add(e), f.default.basicChannelsTransaction(t).put(e, function(e) {
      let t = o.default.getMutableGuildChannelsForGuild(e);
      return Object.values(t).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: c.default.asBasicFlag(d.default.computePermissions(e))
      }))
    }(e)), f.default.syncedBasicChannelsTransaction(t).put(e, !0), !0)
  }
  constructor() {
    this.synced = null, this.actions = {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
      CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
      CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
      GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t)
    }
  }
}