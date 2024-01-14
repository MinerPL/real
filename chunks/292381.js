"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
class l extends Map {
  set(e, t) {
    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
  }
  constructor(e) {
    super(), this.maxSize = e
  }
}
var a = l