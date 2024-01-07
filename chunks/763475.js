            "use strict";
            n.r(t), n.d(t, {
                GuildEntityDao: function() {
                    return s
                }
            }), n("686130"), n("781738");
            var i = n("999673"),
                r = n("429231");
            class s {
                get prefix() {
                    return this.table.prefix
                }
                get(e, t) {
                    return this.table.get([e, t])
                }
                getMany(e, t) {
                    return this.table.getMany([e], t)
                }
                getRange(e, t, n, i) {
                    return this.table.getRange([e, t], [e, n], i)
                }
                getKvEntries() {
                    return this.table.getKvEntries()
                }
                getMapEntries() {
                    return this.table.getMapEntries()
                }
                getIds(e) {
                    return this.table.getChildIds([e])
                }
                getGuildIds() {
                    return this.table.getChildIds([])
                }
                getGuildId(e) {
                    return this.table.getParentId([null, e])
                }
                put(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
                    return this.transaction(i => i.put(e, t, n))
                }
                putAll(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
                    return this.transaction(i => i.putAll(e, t, n))
                }
                replaceAll(e, t) {
                    return this.transaction(n => n.replaceAll(e, t))
                }
                delete(e, t) {
                    return this.transaction(n => n.delete(e, t))
                }
                deleteGeneration(e, t) {
                    return this.transaction(n => n.deleteGeneration(e, t))
                }
                transaction(e) {
                    return this.table.transaction(t => e(new a(t)))
                }
                upgradeTransaction(e) {
                    return new a(this.table.upgradeTransaction(e))
                }
                getSyncUnsafe(e, t) {
                    return this.table.getSyncUnsafe([e, t])
                }
                getManySyncUnsafe(e, t) {
                    return this.table.getManySyncUnsafe([e], t)
                }
                getKvEntriesSyncUnsafe() {
                    return this.table.getKvEntriesSyncUnsafe()
                }
                getMapEntriesSyncUnsafe() {
                    return this.table.getMapEntriesSyncUnsafe()
                }
                getIdsSyncUnsafe(e) {
                    return this.table.getChildIdsSyncUnsafe([e])
                }
                getGuildIdsSyncUnsafe() {
                    return this.table.getChildIdsSyncUnsafe([])
                }
                getGuildIdSyncUnsafe(e) {
                    return this.table.getParentIdSyncUnsafe([null, e])
                }
                static cell(e, t, n) {
                    return {
                        key: [e, t.id],
                        data: t,
                        generation: n
                    }
                }
                constructor(e, t, n) {
                    this.table = new r.Table([e], t, n)
                }
            }
            class a {
                static fromDatabaseTransaction(e, t, n) {
                    return new a(new r.TableTransaction(e, t, n))
                }
                put(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
                    return this.putWithGeneration(e, t, null, n)
                }
                putWithGeneration(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
                    return this.transaction.put(s.cell(e, t, n), r)
                }
                putAll(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
                    return this.transaction.putAll(t.map(t => s.cell(e, t, null)), n)
                }
                replaceAll(e, t) {
                    this.delete(e), this.putAll(e, t)
                }
                delete(e, t) {
                    switch (arguments.length) {
                        case 0:
                            return this.transaction.delete([]);
                        case 1:
                            return this.transaction.delete([e]);
                        default:
                            return this.transaction.delete([e, t])
                    }
                }
                deleteGeneration(e, t) {
                    return this.transaction.deleteGeneration([], e, t)
                }
                constructor(e) {
                    this.transaction = e
                }
            }