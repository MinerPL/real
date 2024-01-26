"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007"), n("781738"), n("424973"), n("686130");
var i = n("605250"),
  s = n("802493");
let r = new i.default("GuildEmojis");
var a = new class e {
  async getAsync(e) {
    let t = performance.now(),
      n = await s.default.emojis(e).getMapEntries(),
      i = performance.now();
    return r.log("asynchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  getSync(e) {
    let t = performance.now(),
      n = s.default.emojis(e).getMapEntriesSyncUnsafe(),
      i = performance.now();
    return r.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    this.replace(e.guild.id, e.guild.emojis, t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildEmojisUpdate(e, t) {
    this.replace(e.guildId, e.emojis, t)
  }
  handleBackgroundSync(e, t) {
    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map(e => {
      if ("unavailable" === e.dataMode) return Promise.resolve();
      "full" === e.dataMode ? (r.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (r.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
    })))
  }
  handleOneGuildCreate(e, t) {
    null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, t) : null != e.emojis && this.replace(e.id, e.emojis, t)
  }
  handleClearGuildCache(e) {
    this.clear(e)
  }
  handleReset() {}
  replace(e, t, n) {
    s.default.emojisTransaction(n).replaceAll(e, t)
  }
  delete(e, t) {
    s.default.emojisTransaction(t).delete(e)
  }
  clear(e) {
    s.default.emojisTransaction(e).delete()
  }
  update(e, t, n, i) {
    let r = s.default.emojisTransaction(i);
    for (let i of (r.putAll(e, t), n)) r.delete(e, i)
  }
  constructor() {
    this.actions = {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
    }
  }
}