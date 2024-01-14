"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
});
var a = l("884691");

function n(e) {
  let t = null == e ? void 0 : e.getBoundingClientRect(),
    l = null == t ? void 0 : t.left,
    n = null == t ? void 0 : t.top,
    r = (0, a.useMemo)(() => null != l && null != n ? {
      x: l,
      y: n
    } : null, [l, n]);
  return r
}