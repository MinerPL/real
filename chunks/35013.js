"use strict";
n.r(t), n.d(t, {
  insert: function() {
    return s
  }
});

function s(e, t, n) {
  let s = function(e, t, n) {
    let s = 0,
      i = e.length;
    for (; s < i;) {
      let r = s + i >>> 1;
      0 > n(e[r], t) ? s = r + 1 : i = r
    }
    return s
  }(e, t, n);
  e.splice(s, 0, t)
}