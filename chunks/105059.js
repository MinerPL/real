            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var s = n("605250"),
                i = n("305961"),
                r = n("802493");
            let a = new s.default("GuildVersions");
            var o = new class e {
                getCommittedVersions() {
                    try {
                        var e, t;
                        let n = null === (t = r.default.versions()) || void 0 === t ? void 0 : null === (e = t.getManySyncUnsafe()) || void 0 === e ? void 0 : e.map(e => [e.id, e.version]);
                        return new Map(null != n ? n : [])
                    } catch (e) {
                        return a.warn("couldn't load guild versions", e), new Map
                    }
                }
                pause(e) {
                    let t = Symbol(e);
                    return this.pauseTokens.add(t), t
                }
                resume(e, t) {
                    this.pauseTokens.delete(e) && 0 === this.pauseTokens.size && this.commit(t)
                }
                remove(e, t) {
                    this.deleteWith(e), this.commit(t)
                }
                handleBackgroundSync(e, t) {
                    for (let n of e.guilds) "unavailable" !== n.data_mode && this.updateWith(n.id, [n]), null == i.default.getGuild(n.id) && this.remove(n.id, t);
                    this.commit(t)
                }
                handleConnectionOpen(e, t) {
                    for (let t of (this.reset(), e.guilds)) this.updateWith(t.id, [t]);
                    this.commit(t)
                }
                handleGuildCreate(e, t) {
                    var n;
                    let s = e.guild,
                        i = e.guild.id;
                    this.updateWith(i, [s]), this.updateWith(i, s.emojis), this.updateWith(i, s.stickers), this.updateWith(i, s.channels), this.updateWith(i, null === (n = s.channelUpdates) || void 0 === n ? void 0 : n.writes), this.updateWith(i, Array.isArray(s.roles) ? s.roles : Object.values(s.roles)), this.commit(t)
                }
                handleGuildUpdate(e, t) {
                    let n = e.guild,
                        s = e.guild.id;
                    this.updateWith(s, [n]), this.updateWith(s, n.emojis), this.updateWith(s, n.stickers), this.updateWith(s, Array.isArray(n.roles) ? n.roles : Object.values(n.roles)), this.commit(t)
                }
                handleGuildDelete(e, t) {
                    this.deleteWith(e.guild.id), this.commit(t)
                }
                handleGuildRoleChange(e, t) {
                    this.updateWith(e.guildId, [e.role]), this.commit(t)
                }
                handleGuildRoleDelete(e, t) {
                    this.updateWith(e.guildId, [{
                        version: e.version
                    }]), this.commit(t)
                }
                handleGuildEmojisUpdate(e, t) {
                    this.updateWith(e.guildId, e.emojis), this.commit(t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.updateWith(e.guildId, e.stickers), this.commit(t)
                }
                handleChannelCreate(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
                handleChannelUpdates(e, t) {
                    for (let t of e.channels) null != t.guild_id && this.updateWith(t.guild_id, [t]);
                    this.commit(t)
                }
                handleChannelDelete(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
                handleClearGuildCache(e) {
                    this.reset(), r.default.versionsTransaction(e).delete()
                }
                handleReset() {
                    this.reset()
                }
                reset() {
                    this.committed = new Map, this.pending = new Map, this.pauseTokens = new Set
                }
                deleteWith(e) {
                    this.pending.set(e, null)
                }
                updateWith(e, t) {
                    if (null != t) {
                        var n, s;
                        let i = Math.max(null !== (n = this.committed.get(e)) && void 0 !== n ? n : 0, null !== (s = this.pending.get(e)) && void 0 !== s ? s : 0),
                            r = this.computeLatestVersion(i, t);
                        r > i && this.pending.set(e, r)
                    }
                }
                computeLatestVersion(e, t) {
                    let n = e;
                    for (let e of t) {
                        var s;
                        n = Math.max(n, null !== (s = e.version) && void 0 !== s ? s : 0)
                    }
                    return n
                }
                commit(e) {
                    if (this.pending.size > 0 && 0 === this.pauseTokens.size) {
                        let t = r.default.versionsTransaction(e);
                        for (let [e, n] of this.pending) null != n ? (t.put({
                            id: e,
                            version: n
                        }), this.committed.set(e, n)) : (t.delete(e), this.committed.delete(e));
                        this.pending.clear()
                    }
                }
                constructor() {
                    this.pending = new Map, this.committed = new Map, this.pauseTokens = new Set, this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
                        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
                        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }