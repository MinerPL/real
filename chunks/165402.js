"use strict";
r("424973");
var n = r("827356"),
  i = r("516017"),
  o = function(t, e) {
    return t === e
  },
  a = function(t) {
    return !!t
  },
  u = [];
t.exports = function(t) {
  var e = t.getCharacterList().map(function(t) {
      return t.getStyle()
    }).toList(),
    r = e.flatten().toSet().map(function(r) {
      var u, s, c, l;
      return u = t, s = e, c = r, l = [], i(s.map(function(t) {
        return t.has(c)
      }).toList(), o, a, function(t, e) {
        var r = u.getText();
        l.push({
          offset: n.strlen(r.slice(0, t)),
          length: n.strlen(r.slice(t, e)),
          style: c
        })
      }), l
    });
  return Array.prototype.concat.apply(u, r.toJS())
}