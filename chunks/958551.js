"use strict";
r("424973");
var n = r("935621"),
  i = r("788555"),
  o = r("879997"),
  a = r("334171"),
  u = r("313812");
t.exports = function(t, e) {
  var r = u(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}