"use strict";
n.r(t), n.d(t, {
  chain: function() {
    return l
  }
}), n("222007");
class a {
  [Symbol.iterator]() {
    return this
  }
  next() {
    for (; this.index < this.items.length;) {
      let e = this.items[this.index].next();
      if (!e.done) return e;
      this.index += 1
    }
    return {
      done: !0,
      value: void 0
    }
  }
  constructor(e) {
    this.index = 0, this.items = e
  }
}

function l() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return new a(t)
}