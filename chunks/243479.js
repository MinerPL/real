"use strict";
n.r(t), n.d(t, {
  GuildDao: function() {
    return s
  }
});
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
  put(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
    return this.putWithGeneration(e, t, n, null, r)
  }
  putWithGeneration(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.ConflictOptions.Replace;
    return this.table.put({
      key: [e, t],
      data: n,
      generation: r
    }, s)
  }
  delete(e, t) {
    switch (arguments.length) {
      case 0:
        return this.table.delete([]);
      case 1:
        return this.table.delete([e]);
      default:
        return this.table.delete([e, t])
    }
  }
  deleteGeneration(e, t) {
    return this.table.deleteGeneration([], e, t)
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
  constructor(e, t, n) {
    this.table = new r.Table([e], t, n)
  }
}
class a {
  static fromDatabaseTransaction(e, t, n) {
    return new a(new r.TableTransaction(e, t, n))
  }
  put(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
    this.putWithGeneration(e, t, n, null, r)
  }
  putWithGeneration(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.ConflictOptions.Replace;
    return this.state.put({
      key: [e, t],
      data: n,
      generation: r
    }, s)
  }
  delete(e, t) {
    switch (arguments.length) {
      case 0:
        this.state.delete([]);
        break;
      case 1:
        this.state.delete([e]);
        break;
      default:
        this.state.delete([e, t])
    }
  }
  deleteGeneration(e, t) {
    return this.state.deleteGeneration([], e, t)
  }
  constructor(e) {
    this.state = e
  }
}