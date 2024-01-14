"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007"), n("781738"), n("424973"), n("686130");
var s = n("605250"),
  i = n("802493");
let r = new s.default("GuildEmojis");
var a = new class e {
  getSync(e) {
    let t = performance.now(),
      n = i.default.emojis(e).getMapEntriesSyncUnsafe(),
      s = performance.now();
    return r.log("synchronously loaded in ".concat(s - t, "ms (guilds: ").concat(n.length, ")")), n
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
    i.default.emojisTransaction(n).replaceAll(e, t)
  }
  delete(e, t) {
    i.default.emojisTransaction(t).delete(e)
  }
  clear(e) {
    i.default.emojisTransaction(e).delete()
  }
  update(e, t, n, s) {
    let r = i.default.emojisTransaction(s);
    for (let s of (r.putAll(e, t), n)) r.delete(e, s)
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