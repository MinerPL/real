            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return t
                }
            }), n("222007"), n("781738"), n("424973"), n("686130");
            var i = n("605250"),
                r = n("802493");
            let o = new i.default("GuildEmojis");
            var t = new class e {
                getSync(e) {
                    let s = performance.now(),
                        n = r.default.emojis(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return o.log("synchronously loaded in ".concat(i - s, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, s) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, s)
                }
                handleGuildCreate(e, s) {
                    this.handleOneGuildCreate(e.guild, s)
                }
                handleGuildUpdate(e, s) {
                    this.replace(e.guild.id, e.guild.emojis, s)
                }
                handleGuildDelete(e, s) {
                    this.delete(e.guild.id, s)
                }
                handleGuildEmojisUpdate(e, s) {
                    this.replace(e.guildId, e.emojis, s)
                }
                handleBackgroundSync(e, s) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (o.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, s)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (o.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, s))
                    })))
                }
                handleOneGuildCreate(e, s) {
                    null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, s) : null != e.emojis && this.replace(e.id, e.emojis, s)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, s, n) {
                    r.default.emojisTransaction(n).replaceAll(e, s)
                }
                delete(e, s) {
                    r.default.emojisTransaction(s).delete(e)
                }
                clear(e) {
                    r.default.emojisTransaction(e).delete()
                }
                update(e, s, n, i) {
                    let o = r.default.emojisTransaction(i);
                    for (let i of (o.putAll(e, s), n)) o.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, s) => this.handleBackgroundSync(e, s),
                        CLEAR_GUILD_CACHE: (e, s) => this.handleClearGuildCache(s),
                        CONNECTION_OPEN: (e, s) => this.handleConnectionOpen(e, s),
                        GUILD_CREATE: (e, s) => this.handleGuildCreate(e, s),
                        GUILD_DELETE: (e, s) => this.handleGuildDelete(e, s),
                        GUILD_EMOJIS_UPDATE: (e, s) => this.handleGuildEmojisUpdate(e, s),
                        GUILD_UPDATE: (e, s) => this.handleGuildUpdate(e, s)
                    }
                }
            }