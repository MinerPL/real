"use strict";
var r = s("37549"),
  i = r("%Symbol.species%", !0),
  n = r("%TypeError%"),
  c = s("900651"),
  o = s("640107"),
  f = s("81109"),
  u = s("749578"),
  a = s("865435"),
  d = s("778841");
t.exports = function(t, e) {
  if (!d(e) || e < 0) throw new n("Assertion failed: length must be an integer >= 0");
  if (!f(t)) return c(e);
  var s = o(t, "constructor");
  if (i && "Object" === a(s) && null === (s = o(s, i)) && (s = void 0), void 0 === s) return c(e);
  if (!u(s)) throw new n("C must be a constructor");
  return new s(e)
}