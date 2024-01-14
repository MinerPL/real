"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("884691"),
  a = n("65597"),
  s = n("162771");

function i(e) {
  let t = (0, a.default)([s.default], () => s.default.getGuildId());
  l.useLayoutEffect(() => {
    null != t && e(t, !1)
  }, [t, e])
}