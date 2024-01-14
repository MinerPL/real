"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("424973");
var s = new class e {
  enqueue(e) {
    this.queue.push(e)
  }
  flush() {
    for (; this.queue.length > 0;) {
      var e;
      null === (e = this.queue.shift()) || void 0 === e || e()
    }
  }
  constructor() {
    this.queue = []
  }
}