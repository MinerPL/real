"use strict";
r("424973");
var n = r("68892"),
  i = r("935621"),
  o = r("971490"),
  a = r("313812");
t.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset(),
      i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, n.getForward(a).length || 1)
  }, "forward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}