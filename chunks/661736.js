"use strict";

function s(e, t, n) {
  let s;
  let i = [],
    r = function() {
      for (var a = arguments.length, o = Array(a), d = 0; d < a; d++) o[d] = arguments[d];
      let u = Date.now();
      for (null != s && (clearTimeout(s), s = null); i.length > 0 && i[0] <= u;) i.shift();
      i.length < e ? (i.push(u + t), n(...o)) : s = setTimeout(() => r(...o), i[0] - u)
    };
  return r
}
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("424973"), n("222007")