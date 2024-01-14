"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var r, i = n("444095");
r = class {
  _load() {
    let e = i.default.get(this._key);
    null != e && (this._set = new Set(e))
  }
  _persist() {
    let e = Array.from(this._set.values());
    i.default.set(this._key, e)
  }
  add(e) {
    this._set.add(e), requestIdleCallback(() => {
      this._persist()
    })
  }
  has(e) {
    return this._set.has(e)
  }
  constructor(e) {
    this._key = "$persisted-set-".concat(e), this._set = new Set, this._load()
  }
}