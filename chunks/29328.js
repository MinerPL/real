            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("605250"),
                s = n("271938"),
                i = n("305961"),
                l = n("665618"),
                r = n("605136"),
                o = n("802493");
            let u = new a.default("Guilds");
            var d = new class e {
                async getAsync(e) {
                    let t = performance.now(),
                        n = await o.default.guilds(e).getMany(),
                        a = performance.now();
                    return u.verbose("loaded in ".concat(a - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                async getOneAsync(e, t) {
                    return await o.default.guilds(e).get(t)
                }
                handleBackgroundSync(e, t) {
                    for (let n of e.guilds) {
                        if ("unavailable" === n.data_mode) return;
                        let e = i.default.getGuild(n.id);
                        null != e && this.put(l.fromBackgroundSync(n, e), t)
                    }
                }
                handleConnectionOpen(e, t) {
                    for (let n of (this.clear(t), e.guilds)) this.putOne(n, t)
                }
                handleGuildCreate(e, t) {
                    this.putOne(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    let n = i.default.getGuild(e.guild.id),
                        a = l.fromServerUpdate(e.guild, n);
                    this.put(a, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildRoleChange(e, t) {
                    let n = r.fromServerRole(e.role),
                        a = i.default.getGuild(e.guildId);
                    null != a && this.put(a.upsertRole(n), t)
                }
                handleGuildRoleDelete(e, t) {
                    let n = i.default.getGuild(e.guildId);
                    null != n && this.put(n.deleteRole(e.roleId), t)
                }
                handleGuildMemberAdd(e, t) {
                    if (null != e.joinedAt && e.user.id === s.default.getId()) {
                        let n = i.default.getGuild(e.guildId);
                        null != n && this.put(n.updateJoinedAt(e.joinedAt), t)
                    }
                }
                handleReset() {}
                putOne(e, t) {
                    let n = i.default.getGuild(e.id),
                        a = l.fromServer(e, n);
                    this.put(a, t)
                }
                put(e, t) {
                    o.default.guildsTransaction(t).put(e)
                }
                delete(e, t) {
                    o.default.guildsTransaction(t).delete(e)
                }
                clear(e) {
                    o.default.guildsTransaction(e).delete()
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.clear(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
                        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }