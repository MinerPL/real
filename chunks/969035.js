"use strict";
var r = s("37549")("%TypeError%"),
  i = s("300344"),
  n = s("195893"),
  c = s("865435");
t.exports = function(t, e, s) {
  if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
  if (!i(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
  return n(t, e, {
    "[[Configurable]]": !0,
    "[[Enumerable]]": !0,
    "[[Value]]": s,
    "[[Writable]]": !0
  })
}