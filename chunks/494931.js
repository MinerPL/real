"use strict";
n.r(t), n.d(t, {
  EntityDao: function() {
    return s
  }
}), n("686130"), n("781738");
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
  put(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction(n => n.put(e, t))
  }
  putAll(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction(n => n.putAll(e, t))
  }
  replaceAll(e) {
    return this.transaction(t => t.replaceAll(e))
  }
  delete(e) {
    return this.transaction(t => t.delete(e))
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
  static cell(e, t) {
    return {
      key: [e.id],
      data: e,
      generation: t
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
  put(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction.put(s.cell(e, null), t)
  }
  putAll(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction.putAll(e.map(e => s.cell(e, null)), t)
  }
  replaceAll(e) {
    this.delete(), this.putAll(e)
  }
  delete(e) {
    return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e])
  }
  constructor(e) {
    this.transaction = e
  }
}