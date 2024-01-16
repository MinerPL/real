"use strict";
a.r(t), a.d(t, {
  shuffleProblems: function() {
    return l
  }
}), a("424973");
var n = a("917351"),
  s = a.n(n);
let l = (e, t) => {
  let a = s.shuffle(e),
    n = a.findIndex(e => e.value === t);
  if (n > -1) {
    let e = a[n];
    a.splice(n, 1), a.push(e)
  }
  return a
}