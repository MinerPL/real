"use strict";
r("424973");
var n = r("881854"),
  i = r("808598"),
  o = n.isBrowser("Chrome"),
  a = o ? function(t) {
    for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
      var o, a = n === t.commonAncestorContainer;
      a ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
      var u = Array.from(e.getClientRects());
      if (r.push(u), a) return r.reverse(), (o = []).concat.apply(o, r);
      e.setEndBefore(n)
    }
    i(!1)
  } : function(t) {
    return Array.from(t.getClientRects())
  };
t.exports = a