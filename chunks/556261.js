"use strict";
var r = n("984447"),
  a = n("723786"),
  o = n("591014"),
  i = RangeError;
e.exports = function(e) {
  var t = a(o(this)),
    n = "",
    l = r(e);
  if (l < 0 || l === 1 / 0) throw new i("Wrong number of repetitions");
  for (; l > 0;
    (l >>>= 1) && (t += t)) 1 & l && (n += t);
  return n
}