"use strict";
r("222007");
var Map = r("646601").Map;
t.exports = function(t, e, r) {
  var n = e.getStartKey(),
    i = e.getEndKey(),
    o = t.getBlockMap(),
    a = o.toSeq().skipUntil(function(t, e) {
      return e === n
    }).takeUntil(function(t, e) {
      return e === i
    }).concat(Map([
      [i, o.get(i)]
    ])).map(r);
  return t.merge({
    blockMap: o.merge(a),
    selectionBefore: e,
    selectionAfter: e
  })
}