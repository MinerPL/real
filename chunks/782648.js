"use strict";
var t;
E.r(_), E.d(_, {
  default: function() {
    return t
  }
}), E("222007"), t = class {
  has(e) {
    return this.listeners.has(e)
  }
  hasAny() {
    return this.listeners.size > 0
  }
  invokeAll() {
    this.listeners.forEach(e => e())
  }
  constructor() {
    var e = this;
    this.listeners = new Set, this.add = e => {
      this.listeners.add(e)
    }, this.remove = e => {
      this.listeners.delete(e)
    }, this.addConditional = function(_) {
      let E = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
      if (E && !1 === _()) return;
      let t = () => {
        !1 === _() && e.remove(t)
      };
      e.add(t)
    }
  }
}