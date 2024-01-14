"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("424973");
var i, r, s = n("627445"),
  a = n.n(s),
  o = n("446674"),
  l = n("95410"),
  u = n("913144");
(i = class e extends o.default.Store {
  static clearAll() {
    e.allStores.forEach(e => e.clear())
  }
  registerActionHandlers(e) {
    return a(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), a(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), super.registerActionHandlers({
      ...e,
      CLEAR_CACHES: () => this.clear(),
      WRITE_CACHES: () => this.save()
    })
  }
  get persistKey() {
    return "".concat(this.getClass().displayName, "-snapshot")
  }
  clear() {
    l.default.remove(this.persistKey)
  }
  save() {
    l.default.set(this.persistKey, this.takeSnapshot())
  }
  readSnapshot(e) {
    let t = l.default.get(this.persistKey);
    return null == t || t.version !== e ? null : t.data
  }
  getClass() {
    return this.constructor
  }
  constructor() {
    super(u.default, null), a(null != this.getClass().displayName, "Snapshot stores need a display name"), e.allStores.push(this)
  }
}).allStores = [], r = i