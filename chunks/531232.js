"use strict";
var e = n("434978"),
  o = n("64980"),
  i = n("431357"),
  u = n("493399"),
  c = n("418855"),
  s = o([].concat);
t.exports = e("Reflect", "ownKeys") || function(t) {
  var r = i.f(c(t)),
    n = u.f;
  return n ? s(r, n(t)) : r
}