"use strict";
n.r(t), n.d(t, {
  useAccept: function() {
    return a
  }
});
var r = n("900255"),
  o = n("884691");

function a(e) {
  var t = e.accept;
  return (0, o.useMemo)(function() {
    return (0, r.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t]
  }, [t])
}