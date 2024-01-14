"use strict";
r("222007");
var n = r("706621"),
  Map = r("646601").Map;

function i(t, e, r, i) {
  var o = t.getBlockMap(),
    a = e.getStartKey(),
    u = e.getStartOffset(),
    s = e.getEndKey(),
    c = e.getEndOffset(),
    l = o.skipUntil(function(t, e) {
      return e === a
    }).takeUntil(function(t, e) {
      return e === s
    }).concat(Map([
      [s, o.get(s)]
    ])).map(function(t, e) {
      a === s ? (o = u, l = c) : (o = e === a ? u : 0, l = e === s ? c : t.getLength());
      for (var o, l, f, p = t.getCharacterList(); o < l;) f = p.get(o), p = p.set(o, i ? n.applyStyle(f, r) : n.removeStyle(f, r)), o++;
      return t.set("characterList", p)
    });
  return t.merge({
    blockMap: o.merge(l),
    selectionBefore: e,
    selectionAfter: e
  })
}
t.exports = {
  add: function(t, e, r) {
    return i(t, e, r, !0)
  },
  remove: function(t, e, r) {
    return i(t, e, r, !1)
  }
}