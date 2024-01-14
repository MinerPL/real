"use strict";
n.r(t), n.d(t, {
  Lru: function() {
    return a
  }
}), n("222007");
class a {
  get length() {
    return this.items.size
  }
  get capacity() {
    return this.limit
  } [Symbol.iterator]() {
    return this.items.entries()
  }
  entries() {
    return this.items.entries()
  }
  keys() {
    return this.items.keys()
  }
  values() {
    return this.items.values()
  }
  ordered() {
    return [...this.items.values()].reverse()
  }
  clear() {
    this.items.clear()
  }
  has(e) {
    return this.items.has(e)
  }
  get(e) {
    return this.items.get(e)
  }
  put(e, t) {
    if (this.items.delete(e), this.items.set(e, t), !!(this.items.size > this.limit)) {
      let e = this.oldestKey(),
        t = this.items.get(e);
      return this.items.delete(e), [e, t]
    }
  }
  delete(e) {
    return this.items.delete(e)
  }
  oldestKey() {
    let e = this.items.keys(),
      t = e.next();
    return t.value
  }
  constructor(e) {
    this.items = new Map, this.limit = e
  }
}