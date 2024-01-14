"use strict";
var n = r("744691"),
  i = r("646601");
t.exports = function(t, e, r) {
  var o = t.getBlockMap(),
    a = e.getStartKey(),
    u = e.getStartOffset(),
    s = e.getEndKey(),
    c = e.getEndOffset(),
    l = o.skipUntil(function(t, e) {
      return e === a
    }).takeUntil(function(t, e) {
      return e === s
    }).toOrderedMap().merge(i.OrderedMap([
      [s, o.get(s)]
    ])).map(function(t, e) {
      var i = e === a ? u : 0,
        o = e === s ? c : t.getLength();
      return n(t, i, o, r)
    });
  return t.merge({
    blockMap: o.merge(l),
    selectionBefore: e,
    selectionAfter: e
  })
}