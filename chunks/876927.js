"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("884691"),
  l = n("731898");

function a() {
  let {
    ref: e,
    width: t
  } = (0, l.default)(), [n, a] = s.useState();
  return s.useEffect(() => {
    null == n && null != t && a(t)
  }, [n, t]), [e, n]
}