"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("884691"),
  o = n("275370"),
  a = n.n(o),
  i = {};

function s(e, t) {
  void 0 === t && (t = a);
  var n = (0, r.useRef)(i),
    o = n.current;
  return (0, r.useEffect)(function() {
    n.current = o
  }), n.current !== i && t(e, n.current) || (o = e), o
}