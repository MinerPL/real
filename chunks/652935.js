"use strict";
r("424973");
var n = r("984118"),
  i = r("827356").strlen;
t.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return !!t.getEntity()
  }, function(o, a) {
    var u = t.getText(),
      s = t.getEntityAt(o);
    r.push({
      offset: i(u.slice(0, o)),
      length: i(u.slice(o, a)),
      key: Number(e[n.stringify(s)])
    })
  }), r
}