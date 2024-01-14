"use strict";
n("686366");
var e = n("396626"),
  o = n("605357"),
  i = n("303061"),
  u = n("935432"),
  s = Array.prototype,
  c = {
    DOMTokenList: !0,
    NodeList: !0
  };
t.exports = function(t) {
  var r = t.entries;
  return t === s || i(s, t) && r === s.entries || o(c, e(t)) ? u : r
}