"use strict";
var e = n("735320"),
  o = n("829546");
t.exports = function(t, r, n, i) {
  try {
    return i ? r(e(n)[0], n[1]) : r(n)
  } catch (r) {
    o(t, "throw", r)
  }
}