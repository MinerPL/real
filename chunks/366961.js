"use strict";
var e = n("231814"),
  o = n("904520"),
  i = n("472960"),
  u = n("174669")("species"),
  f = Array;
t.exports = function(t) {
  var r;
  return e(t) && (o(r = t.constructor) && (r === f || e(r.prototype)) ? r = void 0 : i(r) && null === (r = r[u]) && (r = void 0)), void 0 === r ? f : r
}