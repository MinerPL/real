"use strict";

function n(e, t) {
  if (e.score === t.score) {
    var l, n, a, r, i, u;
    let o = null !== (r = null !== (a = e.sortable) && void 0 !== a ? a : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== r ? r : "",
      s = null !== (u = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== u ? u : "";
    if (o < s) return -1;
    if (o > s) return 1
  }
  return t.score - e.score
}
l.r(t), l.d(t, {
  default: function() {
    return n
  }
})