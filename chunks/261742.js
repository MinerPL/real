"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var s = {
  makeMemoizer: function(e) {
    let t = new Map;
    return n => {
      let s = t.get(n);
      return void 0 === s && (s = e(n), t.set(n, s)), s
    }
  }
}