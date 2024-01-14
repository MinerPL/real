"use strict";

function s(e) {
  let t = {};
  for (let n of e)
    for (let e in n) e in t ? t[e] = {
      ...t[e],
      ...n[e]
    } : t[e] = {
      ...n[e]
    };
  return t
}
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007")