"use strict";

function k(i, a, x) {
  i.assets[0].p = a;
  let k = i.layers.findIndex(i => "flag" === i.nm);
  return i.layers[k].shapes[0].it.forEach((a, r) => {
    if ("gr" === i.layers[k].shapes[0].it[r].ty) {
      let a = i.layers[k].shapes[0].it[r].it.findIndex(i => "fl" === i.ty);
      a >= 0 && (i.layers[k].shapes[0].it[r].it[1].c.k = [...x.map(i => i / 256), 1])
    }
  }), i
}
x.r(a), x.d(a, {
  default: function() {
    return k
  }
}), x("222007")