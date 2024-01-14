"use strict";
n.r(t), n.d(t, {
  Dao: function() {
    return s
  }
});
var i = n("999673"),
  r = n("429231");
class s {
  get prefix() {
    return this.table.prefix
  }
  get(e) {
    return this.table.get([e])
  }
  getMany(e) {
    return this.table.getMany([], e)
  }
  getRange(e, t, n) {
    return this.table.getRange([e], [t], n)
  }
  getKvEntries() {
    return this.table.getKvEntries()
  }
  getMapEntries() {
    return this.table.getMapEntries()
  }
  getIds() {
    return this.table.getChildIds([])
  }
  getParentId(e) {
    return this.table.getParentId([null, e])
  }
  put(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
    return this.table.put({
      key: [e],
      data: t,
      generation: null
    }, n)
  }
  delete(e) {
    return 0 == arguments.length ? this.table.delete() : this.table.delete([e])
  }
  transaction(e) {
    return this.table.transaction(t => e(new a(t)))
  }
  upgradeTransaction(e) {
    return new a(this.table.upgradeTransaction(e))
  }
  getSyncUnsafe(e) {
    return this.table.getSyncUnsafe([e])
  }
  getManySyncUnsafe(e) {
    return this.table.getManySyncUnsafe([], e)
  }
  getKvEntriesSyncUnsafe() {
    return this.table.getKvEntriesSyncUnsafe()
  }
  getMapEntriesSyncUnsafe() {
    return this.table.getMapEntriesSyncUnsafe()
  }
  getIdsSyncUnsafe() {
    return this.table.getChildIdsSyncUnsafe([])
  }
  getParentIdSyncUnsafe(e) {
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
  put(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
    this.transaction.put({
      key: [e],
      data: t,
      generation: null
    }, n)
  }
  delete(e) {
    return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e])
  }
  constructor(e) {
    this.transaction = e
  }
}