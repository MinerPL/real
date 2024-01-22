"use strict";
n.r(t), n.d(t, {
  EntityDao: function() {
    return r
  }
}), n("686130"), n("781738");
var i = n("999673"),
  s = n("429231");
class r {
  get prefix() {
    return this.table.prefix
  }
  withoutLogging() {
    return new r(this.originalPrefix, this.table.tableId, this.table.database, !1)
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
    return this.transaction(n => n.put(e, t), "".concat(this.prefix, " put"))
  }
  putAll(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction(n => n.putAll(e, t), "".concat(this.prefix, " putAll"))
  }
  replaceAll(e) {
    return this.transaction(t => t.replaceAll(e), "".concat(this.prefix, " replaceAll"))
  }
  delete(e) {
    return this.transaction(t => t.delete(e), "".concat(this.prefix, " delete"))
  }
  transaction(e, t) {
    return this.table.transaction(t => e(new a(t)), t)
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
  getMapEntriesSyncUnsafe() {
    return this.table.getMapEntriesSyncUnsafe()
  }
  getIdsSyncUnsafe() {
    return this.table.getChildIdsSyncUnsafe([])
  }
  static cell(e, t) {
    return {
      key: [e.id],
      data: e,
      generation: t
    }
  }
  constructor(e, t, n, i = !0) {
    this.originalPrefix = e, this.table = new s.Table([e], t, n, i)
  }
}
class a {
  static fromDatabaseTransaction(e, t, n) {
    return new a(new s.TableTransaction(e, t, n))
  }
  put(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction.put(r.cell(e, null), t)
  }
  putAll(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
    return this.transaction.putAll(e.map(e => r.cell(e, null)), t)
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